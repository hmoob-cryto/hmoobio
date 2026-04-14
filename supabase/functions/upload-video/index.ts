import { createClient } from "https://esm.sh/@supabase/supabase-js@2.103.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { sourceUrl, fileName } = await req.json();
    
    if (!sourceUrl || !fileName) {
      return new Response(JSON.stringify({ error: "sourceUrl and fileName required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // Check if file already exists
    const { data: existingFiles } = await supabase.storage
      .from("media")
      .list("videos", { search: fileName });

    if (existingFiles && existingFiles.length > 0) {
      const { data: urlData } = supabase.storage
        .from("media")
        .getPublicUrl(`videos/${fileName}`);
      
      return new Response(JSON.stringify({ 
        publicUrl: urlData.publicUrl,
        message: "File already exists" 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Download the video
    const videoResponse = await fetch(sourceUrl);
    if (!videoResponse.ok) {
      throw new Error(`Failed to fetch video: ${videoResponse.status}`);
    }
    
    const videoBlob = await videoResponse.blob();

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(`videos/${fileName}`, videoBlob, {
        contentType: "video/mp4",
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const { data: urlData } = supabase.storage
      .from("media")
      .getPublicUrl(`videos/${fileName}`);

    return new Response(JSON.stringify({ 
      publicUrl: urlData.publicUrl,
      message: "Upload successful" 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
