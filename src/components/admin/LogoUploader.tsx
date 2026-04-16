import { useState, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Upload, Loader2, Trash2, Image } from "lucide-react";
import { toast } from "sonner";
import defaultLogo from "@/assets/logo.jpeg";

export default function LogoUploader() {
  const queryClient = useQueryClient();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const { data: settings, isLoading } = useQuery({
    queryKey: ["site_settings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("key, value, id");
      if (error) throw error;
      const map: Record<string, { value: string; id: string }> = {};
      data?.forEach((row) => {
        map[row.key] = { value: row.value, id: row.id };
      });
      return map;
    },
  });

  const logoUrl = settings?.logo_url?.value || "";
  const siteName = settings?.site_name?.value || "hmoob";
  const siteSuffix = settings?.site_name_suffix?.value || ".io";

  const updateSetting = useMutation({
    mutationFn: async ({ key, value }: { key: string; value: string }) => {
      const { error } = await supabase
        .from("site_settings" as any)
        .update({ value })
        .eq("key", key);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site_settings"] });
    },
  });

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("ไฟล์ใหญ่เกิน 2MB");
      return;
    }

    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "png";
      const fileName = `logo-${Date.now()}.${ext}`;
      const filePath = `branding/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("media")
        .getPublicUrl(filePath);

      await updateSetting.mutateAsync({
        key: "logo_url",
        value: urlData.publicUrl,
      });

      toast.success("อัปโหลดโลโก้สำเร็จ!");
    } catch (err: any) {
      toast.error(err.message || "อัปโหลดไม่สำเร็จ");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const handleRemove = async () => {
    if (!confirm("ต้องการลบโลโก้และใช้โลโก้เริ่มต้นแทนหรือไม่?")) return;
    try {
      await updateSetting.mutateAsync({ key: "logo_url", value: "" });
      toast.success("ลบโลโก้แล้ว จะใช้โลโก้เริ่มต้น");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="animate-spin text-amber-500" size={24} />
      </div>
    );
  }

  return (
    <div className="mb-8 p-6 rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <Image size={18} className="text-amber-500" />
        <h3 className="font-display font-bold text-slate-800">Site Logo</h3>
      </div>

      <div className="flex items-center gap-6">
        {/* Preview */}
        <div className="shrink-0">
          <div className="relative w-20 h-20 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden bg-slate-50">
            <img
              src={logoUrl || defaultLogo}
              alt="Logo"
              className="w-full h-full object-cover rounded-xl"
            />
            {!logoUrl && (
              <span className="absolute bottom-0 left-0 right-0 text-[8px] text-center text-slate-400 bg-white/80 py-0.5">
                Default
              </span>
            )}
          </div>
        </div>

        {/* Info + actions */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-display text-lg font-bold">
              <span className="text-amber-600">{siteName}</span>
              <span className="text-slate-400">{siteSuffix}</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 mb-3">
            แนะนำขนาด 200×200px, ไฟล์ไม่เกิน 2MB (JPG, PNG, WebP)
          </p>
          <div className="flex gap-2">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
            <button
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 disabled:opacity-50 transition-all"
            >
              {uploading ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Upload size={14} />
              )}
              {uploading ? "กำลังอัปโหลด..." : "อัปโหลดโลโก้"}
            </button>
            {logoUrl && (
              <button
                onClick={handleRemove}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition-all"
              >
                <Trash2 size={14} />
                ใช้โลโก้เริ่มต้น
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
