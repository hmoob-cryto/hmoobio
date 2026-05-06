import { useState, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Upload, Loader2, Video as VideoIcon, Plus, Pencil, Trash2, Save, X } from "lucide-react";
import { toast } from "sonner";
import { normalizeVideoUrl, isGoogleDriveUrl, getDrivePreviewUrl } from "@/lib/videoUrl";

const LOCALES = [
  { code: "en", label: "🇺🇸 English" },
  { code: "hmn", label: "🇱🇦 Hmong" },
  { code: "th", label: "🇹🇭 ไทย" },
];

interface Translation {
  locale: string;
  title: string;
  description: string;
}

interface VideoRow {
  id: string;
  video_url: string;
  thumbnail_url: string | null;
  sort_order: number;
  is_active: boolean;
  video_translations?: { locale: string; title: string; description: string | null }[];
}

interface FormData {
  video_url: string;
  thumbnail_url: string;
  sort_order: number;
  is_active: boolean;
  translations: Record<string, Translation>;
}

const emptyForm = (): FormData => ({
  video_url: "",
  thumbnail_url: "",
  sort_order: 0,
  is_active: true,
  translations: Object.fromEntries(
    LOCALES.map((l) => [l.code, { locale: l.code, title: "", description: "" }])
  ),
});

export default function AdminVideos() {
  const queryClient = useQueryClient();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<FormData>(emptyForm());
  const [creating, setCreating] = useState(false);
  const [newData, setNewData] = useState<FormData>(emptyForm());
  const [activeTab, setActiveTab] = useState<Record<string, string>>({});

  const { data: rows, isLoading } = useQuery({
    queryKey: ["admin_videos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("videos")
        .select("*, video_translations(locale, title, description)")
        .order("sort_order");
      if (error) throw error;
      return data as VideoRow[];
    },
  });

  const saveTranslations = async (videoId: string, translations: Record<string, Translation>) => {
    const rows = Object.values(translations)
      .filter((t) => t.title.trim())
      .map((t) => ({
        video_id: videoId,
        locale: t.locale,
        title: t.title,
        description: t.description || null,
      }));
    if (rows.length === 0) return;
    const { error } = await supabase
      .from("video_translations")
      .upsert(rows, { onConflict: "video_id,locale" });
    if (error) throw error;
  };

  const createMut = useMutation({
    mutationFn: async (d: FormData) => {
      const fallback = d.translations.en?.title || Object.values(d.translations).find((t) => t.title)?.title || "Untitled";
      const { data: inserted, error } = await supabase
        .from("videos")
        .insert({
          video_url: d.video_url,
          thumbnail_url: d.thumbnail_url || null,
          sort_order: d.sort_order,
          is_active: d.is_active,
          title: fallback,
          description: d.translations.en?.description || null,
        } as any)
        .select()
        .single();
      if (error) throw error;
      await saveTranslations(inserted.id, d.translations);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_videos"] });
      queryClient.invalidateQueries({ queryKey: ["videos_public"] });
      setCreating(false);
      setNewData(emptyForm());
      toast.success("สร้างวิดีโอสำเร็จ!");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const updateMut = useMutation({
    mutationFn: async ({ id, d }: { id: string; d: FormData }) => {
      const fallback = d.translations.en?.title || Object.values(d.translations).find((t) => t.title)?.title || "Untitled";
      const { error } = await supabase
        .from("videos")
        .update({
          video_url: d.video_url,
          thumbnail_url: d.thumbnail_url || null,
          sort_order: d.sort_order,
          is_active: d.is_active,
          title: fallback,
          description: d.translations.en?.description || null,
        })
        .eq("id", id);
      if (error) throw error;
      await saveTranslations(id, d.translations);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_videos"] });
      queryClient.invalidateQueries({ queryKey: ["videos_public"] });
      setEditingId(null);
      toast.success("บันทึกสำเร็จ!");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteMut = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("videos").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_videos"] });
      queryClient.invalidateQueries({ queryKey: ["videos_public"] });
      toast.success("ลบเรียบร้อย!");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const uploadVideo = async (file: File, target: "new" | "edit") => {
    if (!file.type.startsWith("video/")) { toast.error("กรุณาเลือกไฟล์วิดีโอเท่านั้น"); return; }
    if (file.size > 100 * 1024 * 1024) { toast.error("ไฟล์ใหญ่เกิน 100MB"); return; }
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "mp4";
      const path = `videos/video-${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage.from("media").upload(path, file, { upsert: true });
      if (upErr) throw upErr;
      const { data } = supabase.storage.from("media").getPublicUrl(path);
      if (target === "new") setNewData((p) => ({ ...p, video_url: data.publicUrl }));
      else setEditData((p) => ({ ...p, video_url: data.publicUrl }));
      toast.success("อัปโหลดวิดีโอสำเร็จ!");
    } catch (e: any) {
      toast.error(e.message || "อัปโหลดล้มเหลว");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const inputCls = "w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors";
  const labelCls = "text-xs font-semibold text-slate-700 mb-1.5 block";

  const renderForm = (data: FormData, setData: (d: FormData) => void, mode: "new" | "edit", rowId: string) => {
    const tab = activeTab[rowId] || "en";
    const setTab = (l: string) => setActiveTab((p) => ({ ...p, [rowId]: l }));
    const tr = data.translations[tab] || { locale: tab, title: "", description: "" };
    const setTr = (patch: Partial<Translation>) => {
      setData({ ...data, translations: { ...data.translations, [tab]: { ...tr, ...patch, locale: tab } } });
    };

    return (
      <div className="grid gap-4">
        {/* Video file (shared) */}
        <div>
          <label className={labelCls}>Video URL (ใช้ร่วมกันทุกภาษา)</label>
          <div className="flex gap-2">
            <input value={data.video_url} onChange={(e) => setData({ ...data, video_url: e.target.value })}
              placeholder="https://... , Google Drive link, หรืออัปโหลดไฟล์" className={`flex-1 ${inputCls}`} />
            <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 cursor-pointer disabled:opacity-50 whitespace-nowrap">
              {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
              Upload
              <input type="file" accept="video/*" className="hidden"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadVideo(f, mode); }} />
            </label>
          </div>
          <p className="text-[11px] text-slate-500 mt-1.5">
            รองรับ: ไฟล์อัปโหลด, URL ตรง (.mp4), หรือลิงก์แชร์ Google Drive (ตั้ง "Anyone with the link")
          </p>
          {data.video_url && (
            <div className="mt-2">
              {isGoogleDriveUrl(data.video_url) ? (
                <>
                  <div className="text-[11px] text-amber-600 mb-1.5 px-2 py-1 bg-amber-50 rounded border border-amber-200">
                    ✓ Google Drive — แสดงผ่าน iframe preview (ต้องตั้งสิทธิ์ "Anyone with the link")
                  </div>
                  <iframe
                    src={getDrivePreviewUrl(data.video_url) || ""}
                    className="w-full max-w-[200px] aspect-[9/16] rounded-lg border border-slate-200 bg-black"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </>
              ) : (
                <video src={normalizeVideoUrl(data.video_url)} controls className="w-full max-w-[200px] rounded-lg border border-slate-200" />
              )}
            </div>
          )}
        </div>

        {/* Language tabs */}
        <div>
          <label className={labelCls}>หัวข้อและคำอธิบายต่อภาษา</label>
          <div className="flex gap-1 border-b border-slate-200 mb-3">
            {LOCALES.map((l) => {
              const filled = !!data.translations[l.code]?.title;
              return (
                <button key={l.code} type="button" onClick={() => setTab(l.code)}
                  className={`px-3 py-2 text-xs font-medium border-b-2 -mb-px transition-colors ${
                    tab === l.code ? "border-amber-500 text-amber-600" : "border-transparent text-slate-500 hover:text-slate-700"
                  }`}>
                  {l.label} {filled && <span className="text-emerald-500">●</span>}
                </button>
              );
            })}
          </div>
          <div className="grid gap-3">
            <div>
              <label className={labelCls}>Title ({tab})</label>
              <input value={tr.title} onChange={(e) => setTr({ title: e.target.value })}
                placeholder="ชื่อวิดีโอ" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Description ({tab})</label>
              <textarea value={tr.description} onChange={(e) => setTr({ description: e.target.value })}
                placeholder="คำอธิบายสั้น ๆ" className={`${inputCls} min-h-[72px] resize-y`} />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <label className={labelCls}>Thumbnail URL (optional)</label>
            <input value={data.thumbnail_url} onChange={(e) => setData({ ...data, thumbnail_url: e.target.value })}
              placeholder="https://..." className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Sort Order</label>
            <input type="number" value={data.sort_order} onChange={(e) => setData({ ...data, sort_order: Number(e.target.value) })}
              className={inputCls} />
          </div>
          <div className="flex items-center gap-2 pt-6">
            <button type="button" onClick={() => setData({ ...data, is_active: !data.is_active })}
              className={`w-10 h-5 rounded-full transition-colors ${data.is_active ? "bg-amber-500" : "bg-slate-300"}`}>
              <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${data.is_active ? "translate-x-5" : "translate-x-0.5"}`} />
            </button>
            <span className="text-sm text-slate-700 font-medium">Active</span>
          </div>
        </div>
      </div>
    );
  };

  const startEdit = (row: VideoRow) => {
    const translations = Object.fromEntries(
      LOCALES.map((l) => {
        const existing = row.video_translations?.find((t) => t.locale === l.code);
        return [l.code, { locale: l.code, title: existing?.title || "", description: existing?.description || "" }];
      })
    );
    setEditingId(row.id);
    setEditData({
      video_url: row.video_url,
      thumbnail_url: row.thumbnail_url || "",
      sort_order: row.sort_order,
      is_active: row.is_active,
      translations,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-xl font-bold text-slate-800 flex items-center gap-2">
            <VideoIcon size={20} className="text-amber-500" /> Tutorial Videos
          </h2>
          <p className="text-sm text-slate-500 mt-1">วิดีโอ 1 ไฟล์ใช้ร่วมกันทุกภาษา — ตั้งหัวข้อ/คำอธิบายแยกตามภาษาได้</p>
        </div>
        <button onClick={() => setCreating(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-white text-sm font-medium hover:bg-amber-600">
          <Plus size={16} /> Add Video
        </button>
      </div>

      {creating && (
        <div className="mb-4 p-4 rounded-xl border-2 border-amber-300 bg-amber-50/50">
          {renderForm(newData, setNewData, "new", "__new__")}
          <div className="flex gap-2 mt-3">
            <button onClick={() => createMut.mutate(newData)} disabled={createMut.isPending || !newData.video_url || !newData.translations.en?.title}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 disabled:opacity-50">
              {createMut.isPending ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Save
            </button>
            <button onClick={() => { setCreating(false); setNewData(emptyForm()); }} className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm">Cancel</button>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center py-12"><Loader2 className="animate-spin text-amber-500" /></div>
      ) : (
        <div className="space-y-3">
          {(rows || []).map((row) => {
            const enTitle = row.video_translations?.find((t) => t.locale === "en")?.title
              || row.video_translations?.[0]?.title || "(no title)";
            const langs = row.video_translations?.map((t) => t.locale) || [];
            return (
              <div key={row.id} className="rounded-xl border border-slate-200 bg-white p-4">
                {editingId === row.id ? (
                  <>
                    {renderForm(editData, setEditData, "edit", row.id)}
                    <div className="flex gap-2 mt-3">
                      <button onClick={() => updateMut.mutate({ id: row.id, d: editData })} disabled={updateMut.isPending}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600">
                        <Save size={14} /> Save
                      </button>
                      <button onClick={() => setEditingId(null)} className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm">
                        <X size={14} className="inline" /> Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-start gap-4">
                    {row.video_url && (
                      <video src={row.video_url} className="w-16 h-28 object-cover rounded-lg border border-slate-200 bg-slate-100" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500">#{row.sort_order}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${row.is_active ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
                          {row.is_active ? "Active" : "Inactive"}
                        </span>
                        {LOCALES.map((l) => (
                          <span key={l.code} className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                            langs.includes(l.code) ? "bg-amber-50 text-amber-600" : "bg-slate-50 text-slate-300"
                          }`}>{l.code}</span>
                        ))}
                      </div>
                      <h3 className="font-medium text-slate-800 truncate">{enTitle}</h3>
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => startEdit(row)}
                        className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500 flex items-center justify-center">
                        <Pencil size={14} />
                      </button>
                      <button onClick={() => { if (confirm("Delete this video?")) deleteMut.mutate(row.id); }}
                        className="w-8 h-8 rounded-lg hover:bg-red-50 text-slate-500 hover:text-red-500 flex items-center justify-center">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {!rows?.length && <div className="text-center py-12 text-slate-400">ยังไม่มีวิดีโอ</div>}
        </div>
      )}
    </div>
  );
}
