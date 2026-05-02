import { useState, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Upload, Loader2, Video as VideoIcon, Plus, Pencil, Trash2, Save, X } from "lucide-react";
import { toast } from "sonner";

interface VideoRow {
  id: string;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  locale: string;
  sort_order: number;
  is_active: boolean;
}

export default function AdminVideos() {
  const queryClient = useQueryClient();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [filterLocale, setFilterLocale] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<VideoRow>>({});
  const [creating, setCreating] = useState(false);
  const [newData, setNewData] = useState<Partial<VideoRow>>({
    title: "", description: "", video_url: "", thumbnail_url: "",
    locale: "en", sort_order: 0, is_active: true,
  });

  const { data: rows, isLoading } = useQuery({
    queryKey: ["admin_videos", filterLocale],
    queryFn: async () => {
      let q = supabase.from("videos").select("*").order("sort_order");
      if (filterLocale) q = q.eq("locale", filterLocale);
      const { data, error } = await q;
      if (error) throw error;
      return data as VideoRow[];
    },
  });

  const createMut = useMutation({
    mutationFn: async (d: Partial<VideoRow>) => {
      const { error } = await supabase.from("videos").insert(d as any);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_videos"] });
      queryClient.invalidateQueries({ queryKey: ["videos_public"] });
      setCreating(false);
      setNewData({ title: "", description: "", video_url: "", thumbnail_url: "", locale: "en", sort_order: 0, is_active: true });
      toast.success("Created!");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const updateMut = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<VideoRow> }) => {
      const { error } = await supabase.from("videos").update(updates).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_videos"] });
      queryClient.invalidateQueries({ queryKey: ["videos_public"] });
      setEditingId(null);
      toast.success("Updated!");
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
      toast.success("Deleted!");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const uploadVideo = async (file: File, target: "new" | "edit") => {
    if (!file.type.startsWith("video/")) {
      toast.error("กรุณาเลือกไฟล์วิดีโอเท่านั้น");
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      toast.error("ไฟล์ใหญ่เกิน 100MB");
      return;
    }
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "mp4";
      const fileName = `video-${Date.now()}.${ext}`;
      const path = `videos/${fileName}`;
      const { error: upErr } = await supabase.storage.from("media").upload(path, file, { upsert: true });
      if (upErr) throw upErr;
      const { data } = supabase.storage.from("media").getPublicUrl(path);
      if (target === "new") {
        setNewData((p) => ({ ...p, video_url: data.publicUrl }));
      } else {
        setEditData((p) => ({ ...p, video_url: data.publicUrl }));
      }
      toast.success("อัปโหลดวิดีโอสำเร็จ!");
    } catch (e: any) {
      toast.error(e.message || "อัปโหลดล้มเหลว");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const renderForm = (data: Partial<VideoRow>, setData: (d: Partial<VideoRow>) => void, mode: "new" | "edit") => (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="text-xs font-medium text-slate-500 mb-1 block">Title</label>
        <input value={data.title || ""} onChange={(e) => setData({ ...data, title: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm" />
      </div>
      <div className="sm:col-span-2">
        <label className="text-xs font-medium text-slate-500 mb-1 block">Description</label>
        <textarea value={data.description || ""} onChange={(e) => setData({ ...data, description: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm min-h-[60px]" />
      </div>
      <div className="sm:col-span-2">
        <label className="text-xs font-medium text-slate-500 mb-1 block">Video URL</label>
        <div className="flex gap-2">
          <input value={data.video_url || ""} onChange={(e) => setData({ ...data, video_url: e.target.value })}
            placeholder="https://..."
            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm" />
          <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 cursor-pointer disabled:opacity-50">
            {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
            Upload
            <input type="file" accept="video/*" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadVideo(f, mode); }} />
          </label>
        </div>
        {data.video_url && (
          <video src={data.video_url} controls className="mt-2 w-full max-w-xs rounded-lg border border-slate-200" />
        )}
      </div>
      <div>
        <label className="text-xs font-medium text-slate-500 mb-1 block">Thumbnail URL (optional)</label>
        <input value={data.thumbnail_url || ""} onChange={(e) => setData({ ...data, thumbnail_url: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm" />
      </div>
      <div>
        <label className="text-xs font-medium text-slate-500 mb-1 block">Locale</label>
        <select value={data.locale || "en"} onChange={(e) => setData({ ...data, locale: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm">
          <option value="en">English</option>
          <option value="hmn">Hmong</option>
          <option value="th">ไทย</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-medium text-slate-500 mb-1 block">Sort Order</label>
        <input type="number" value={data.sort_order || 0} onChange={(e) => setData({ ...data, sort_order: Number(e.target.value) })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm" />
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => setData({ ...data, is_active: !data.is_active })}
          className={`w-10 h-5 rounded-full transition-colors ${data.is_active ? "bg-amber-500" : "bg-slate-300"}`}>
          <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${data.is_active ? "translate-x-5" : "translate-x-0.5"}`} />
        </button>
        <span className="text-sm text-slate-600">Active</span>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-xl font-bold text-slate-800 flex items-center gap-2">
            <VideoIcon size={20} className="text-amber-500" /> Tutorial Videos
          </h2>
          <p className="text-sm text-slate-500 mt-1">จัดการวิดีโอแนะนำการใช้งาน — เล่นต่อเนื่องอัตโนมัติตามลำดับ</p>
        </div>
        <button onClick={() => setCreating(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-white text-sm font-medium hover:bg-amber-600">
          <Plus size={16} /> Add Video
        </button>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <select value={filterLocale} onChange={(e) => setFilterLocale(e.target.value)}
          className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm">
          <option value="">All locales</option>
          <option value="en">🇺🇸 English</option>
          <option value="hmn">🇱🇦 Hmong</option>
          <option value="th">🇹🇭 ไทย</option>
        </select>
        <span className="text-xs text-slate-400">{rows?.length || 0} videos</span>
      </div>

      {creating && (
        <div className="mb-4 p-4 rounded-xl border-2 border-amber-300 bg-amber-50/50">
          {renderForm(newData, setNewData, "new")}
          <div className="flex gap-2 mt-3">
            <button onClick={() => createMut.mutate(newData)} disabled={createMut.isPending || !newData.title || !newData.video_url}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 disabled:opacity-50">
              {createMut.isPending ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Save
            </button>
            <button onClick={() => setCreating(false)} className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm">Cancel</button>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center py-12"><Loader2 className="animate-spin text-amber-500" /></div>
      ) : (
        <div className="space-y-3">
          {(rows || []).map((row) => (
            <div key={row.id} className="rounded-xl border border-slate-200 bg-white p-4">
              {editingId === row.id ? (
                <>
                  {renderForm(editData, setEditData, "edit")}
                  <div className="flex gap-2 mt-3">
                    <button onClick={() => updateMut.mutate({ id: row.id, updates: editData })} disabled={updateMut.isPending}
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
                    <video src={row.video_url} className="w-32 h-20 object-cover rounded-lg border border-slate-200 bg-slate-100" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-500">{row.locale}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500">#{row.sort_order}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${row.is_active ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
                        {row.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <h3 className="font-medium text-slate-800 truncate">{row.title}</h3>
                    {row.description && <p className="text-sm text-slate-500 line-clamp-2">{row.description}</p>}
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => { setEditingId(row.id); setEditData(row); }}
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
          ))}
          {!rows?.length && <div className="text-center py-12 text-slate-400">No videos yet</div>}
        </div>
      )}
    </div>
  );
}
