import { useState } from "react";
import AdminCrudTable from "@/components/admin/AdminCrudTable";
import { FileText, Layers, PieChart, Sparkles, Map } from "lucide-react";

type TabKey = "text" | "ecosystem" | "distribution" | "milestones" | "document";

const TABS: { key: TabKey; label: string; icon: typeof FileText; desc: string }[] = [
  { key: "text", label: "Section Text", icon: Sparkles, desc: "All headlines, labels, paragraphs (per language)" },
  { key: "ecosystem", label: "Ecosystem Cards", icon: Layers, desc: "8 platform cards in the ecosystem grid" },
  { key: "distribution", label: "Token Distribution", icon: PieChart, desc: "HMOOB COIN allocation chart segments" },
  { key: "milestones", label: "Roadmap", icon: Map, desc: "Vision milestones / roadmap items" },
  { key: "document", label: "PDF Document", icon: FileText, desc: "Hmoob Project PDF URL shown in Review dialog" },
];

export default function AdminVision() {
  const [tab, setTab] = useState<TabKey>("text");

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-slate-800">Vision Section</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage every part of the "Our Vision" section on the landing page — all in 3 languages (English, Hmong, Thai).
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {TABS.map((tb) => {
          const Ico = tb.icon;
          const active = tab === tb.key;
          return (
            <button
              key={tb.key}
              onClick={() => setTab(tb.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                active
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/25"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Ico size={15} />
              {tb.label}
            </button>
          );
        })}
      </div>

      {tab === "text" && (
        <AdminCrudTable
          table="vision_section"
          title="Section Text"
          description="Every text shown in the Vision section. Filter by language, then edit values. Do not change 'key' unless you know what you're doing."
          filterKey="locale"
          orderBy="sort_order"
          columns={[
            { key: "key", label: "Key", width: "180px" },
            { key: "value", label: "Value", type: "textarea" },
            { key: "locale", label: "Locale", type: "select", options: ["en", "hmn", "th"], width: "90px" },
            { key: "sort_order", label: "Order", type: "number", width: "70px" },
            { key: "is_active", label: "Active", type: "boolean", width: "70px" },
          ]}
          defaultValues={{ locale: "en", sort_order: 0, is_active: true }}
        />
      )}

      {tab === "ecosystem" && (
        <AdminCrudTable
          table="ecosystem_items"
          title="Ecosystem Cards"
          description="The 8 platform cards (HMOOB Coin, Mining, Dandex, etc). Use Lucide icon names like Coins, Pickaxe, ArrowLeftRight, ShoppingBag, Home, Bot, Gamepad2, HandCoins."
          filterKey="locale"
          orderBy="sort_order"
          columns={[
            { key: "name", label: "Title" },
            { key: "description", label: "Description", type: "textarea" },
            { key: "icon_name", label: "Icon", width: "140px" },
            { key: "locale", label: "Locale", type: "select", options: ["en", "hmn", "th"], width: "90px" },
            { key: "sort_order", label: "Order", type: "number", width: "70px" },
            { key: "is_active", label: "Active", type: "boolean", width: "70px" },
          ]}
          defaultValues={{ locale: "en", sort_order: 0, is_active: true, icon_name: "Coins", url: "" }}
        />
      )}

      {tab === "distribution" && (
        <AdminCrudTable
          table="vision_distribution"
          title="Token Distribution"
          description="Pie chart segments. Percent values should sum to 100. Color is hex (e.g. #D4A843). Icon is a Lucide name."
          filterKey="locale"
          orderBy="sort_order"
          columns={[
            { key: "key", label: "Key", width: "120px" },
            { key: "label", label: "Label" },
            { key: "percent", label: "%", type: "number", width: "80px" },
            { key: "color", label: "Color", width: "110px" },
            { key: "icon_name", label: "Icon", width: "140px" },
            { key: "locale", label: "Locale", type: "select", options: ["en", "hmn", "th"], width: "90px" },
            { key: "sort_order", label: "Order", type: "number", width: "70px" },
            { key: "is_active", label: "Active", type: "boolean", width: "70px" },
          ]}
          defaultValues={{ locale: "en", sort_order: 0, is_active: true, percent: 0, color: "#D4A843", icon_name: "Coins" }}
        />
      )}

      {tab === "milestones" && (
        <AdminCrudTable
          table="vision_milestones"
          title="Vision Milestones"
          description="Roadmap milestones (legacy / optional)."
          filterKey="locale"
          orderBy="sort_order"
          columns={[
            { key: "title", label: "Title" },
            { key: "description", label: "Description", type: "textarea" },
            { key: "icon_name", label: "Icon", width: "100px" },
            { key: "status", label: "Status", type: "select", options: ["done", "current", "upcoming"], width: "110px" },
            { key: "locale", label: "Locale", type: "select", options: ["en", "hmn", "th"], width: "90px" },
            { key: "sort_order", label: "Order", type: "number", width: "70px" },
            { key: "is_active", label: "Active", type: "boolean", width: "70px" },
          ]}
          defaultValues={{ locale: "en", sort_order: 0, is_active: true, status: "upcoming", icon_name: "Star" }}
        />
      )}

      {tab === "document" && <PdfDocumentEditor />}
    </div>
  );
}

// ----- PDF Document editor (single site_settings row) -----
import { useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Save, Upload, ExternalLink } from "lucide-react";

function PdfDocumentEditor() {
  const qc = useQueryClient();
  const [value, setValue] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const { data: row, isLoading } = useQuery({
    queryKey: ["site_settings", "vision_pdf_url"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*")
        .eq("key", "vision_pdf_url")
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => { if (row?.value) setValue(String(row.value)); }, [row]);

  const save = useMutation({
    mutationFn: async (newValue: string) => {
      if (row?.id) {
        const { error } = await supabase.from("site_settings").update({ value: newValue }).eq("id", row.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("site_settings").insert({
          key: "vision_pdf_url",
          value: newValue,
          description: "URL of the Hmoob Project document (PDF) shown in the Vision section",
        });
        if (error) throw error;
      }
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["site_settings"] });
      qc.invalidateQueries({ queryKey: ["site_settings_global"] });
      toast.success("PDF URL saved");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const handleUpload = async (file: File) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast.error("Please upload a PDF file");
      return;
    }
    setUploading(true);
    try {
      const path = `vision/Hmoob_Project_${Date.now()}.pdf`;
      const { error } = await supabase.storage.from("media").upload(path, file, {
        contentType: "application/pdf",
        upsert: true,
      });
      if (error) throw error;
      const { data: pub } = supabase.storage.from("media").getPublicUrl(path);
      setValue(pub.publicUrl);
      await save.mutateAsync(pub.publicUrl);
      toast.success("PDF uploaded and saved");
    } catch (e: any) {
      toast.error(e.message || "Upload failed");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center py-12"><Loader2 className="animate-spin text-amber-500" /></div>;
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 max-w-3xl">
      <h3 className="font-display text-lg font-bold text-slate-800 mb-1">Project PDF Document</h3>
      <p className="text-sm text-slate-500 mb-5">
        This is the document users see when they click <span className="font-semibold">Review Document</span> in the Vision section.
        You can paste any public URL or upload a new PDF.
      </p>

      <label className="text-xs font-medium text-slate-500 mb-1 block">PDF URL</label>
      <div className="flex gap-2 mb-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="/Hmoob_Project.pdf or https://..."
          className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50"
        />
        <button
          onClick={() => save.mutate(value)}
          disabled={save.isPending}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 disabled:opacity-50"
        >
          {save.isPending ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          Save
        </button>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <input
          ref={fileRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
        />
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-300 bg-amber-50 text-amber-700 text-sm font-medium hover:bg-amber-100 disabled:opacity-50"
        >
          {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
          Upload new PDF
        </button>
        {value && (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-amber-600"
          >
            <ExternalLink size={14} /> Preview current PDF
          </a>
        )}
      </div>

      <div className="text-xs text-slate-400">
        Tip: PDFs uploaded here are stored in the public <code>media</code> bucket and accessible to anyone with the URL.
      </div>
    </div>
  );
}
