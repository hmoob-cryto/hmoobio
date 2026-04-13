import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Pencil, Trash2, Save, X, Loader2, Search } from "lucide-react";
import { toast } from "sonner";

interface Column {
  key: string;
  label: string;
  type?: "text" | "number" | "boolean" | "textarea" | "select";
  options?: string[];
  editable?: boolean;
  width?: string;
}

interface AdminCrudTableProps {
  table: string;
  columns: Column[];
  title: string;
  description?: string;
  defaultValues?: Record<string, unknown>;
  filterKey?: string;
  orderBy?: string;
}

export default function AdminCrudTable({
  table,
  columns,
  title,
  description,
  defaultValues = {},
  filterKey,
  orderBy = "created_at",
}: AdminCrudTableProps) {
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Record<string, unknown>>({});
  const [creating, setCreating] = useState(false);
  const [newData, setNewData] = useState<Record<string, unknown>>({});
  const [search, setSearch] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const { data: rows, isLoading } = useQuery({
    queryKey: [table, filterValue],
    queryFn: async () => {
      let query = supabase.from(table as any).select("*").order(orderBy, { ascending: true });
      if (filterKey && filterValue) {
        query = query.eq(filterKey, filterValue);
      }
      const { data, error } = await query;
      if (error) throw error;
      return (data as unknown) as Record<string, unknown>[];
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Record<string, unknown> }) => {
      const { error } = await supabase.from(table as any).update(updates).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [table] });
      setEditingId(null);
      toast.success("Updated successfully");
    },
    onError: (err: Error) => toast.error(err.message),
  });

  const createMutation = useMutation({
    mutationFn: async (data: Record<string, unknown>) => {
      const { error } = await supabase.from(table as any).insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [table] });
      setCreating(false);
      setNewData({});
      toast.success("Created successfully");
    },
    onError: (err: Error) => toast.error(err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from(table as any).delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [table] });
      toast.success("Deleted successfully");
    },
    onError: (err: Error) => toast.error(err.message),
  });

  const startEdit = (row: Record<string, unknown>) => {
    setEditingId(row.id as string);
    setEditData({ ...row });
  };

  const startCreate = () => {
    setCreating(true);
    const initial: Record<string, unknown> = { ...defaultValues };
    columns.forEach((col) => {
      if (initial[col.key] === undefined) {
        if (col.type === "boolean") initial[col.key] = true;
        else if (col.type === "number") initial[col.key] = 0;
        else initial[col.key] = "";
      }
    });
    if (filterKey && filterValue) initial[filterKey] = filterValue;
    setNewData(initial);
  };

  const filteredRows = (rows || []).filter((row) => {
    if (!search) return true;
    return columns.some((col) =>
      String(row[col.key] || "").toLowerCase().includes(search.toLowerCase())
    );
  });

  const editableColumns = columns.filter((c) => c.editable !== false);

  const renderInput = (col: Column, value: unknown, onChange: (v: unknown) => void) => {
    if (col.type === "boolean") {
      return (
        <button onClick={() => onChange(!value)}
          className={`w-10 h-5 rounded-full transition-colors ${value ? "bg-amber-500" : "bg-slate-300"}`}>
          <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${value ? "translate-x-5" : "translate-x-0.5"}`} />
        </button>
      );
    }
    if (col.type === "select" && col.options) {
      return (
        <select value={String(value || "")} onChange={(e) => onChange(e.target.value)}
          className="w-full px-2 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50">
          {col.options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      );
    }
    if (col.type === "textarea") {
      return (
        <textarea value={String(value || "")} onChange={(e) => onChange(e.target.value)}
          className="w-full px-2 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 min-h-[60px]" />
      );
    }
    return (
      <input type={col.type === "number" ? "number" : "text"} value={String(value || "")}
        onChange={(e) => onChange(col.type === "number" ? Number(e.target.value) : e.target.value)}
        className="w-full px-2 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50" />
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-xl font-bold text-slate-800">{title}</h2>
          {description && <p className="text-sm text-slate-500 mt-1">{description}</p>}
        </div>
        <button onClick={startCreate} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all">
          <Plus size={16} /> Add New
        </button>
      </div>

      {/* Filter + Search */}
      <div className="flex items-center gap-3 mb-4">
        {filterKey && (
          <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm">
            <option value="">All</option>
            <option value="en">English</option>
            <option value="hmn">Hmong</option>
          </select>
        )}
        <div className="relative flex-1 max-w-xs">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50" />
        </div>
        <span className="text-xs text-slate-400">{filteredRows.length} items</span>
      </div>

      {/* Create row */}
      {creating && (
        <div className="mb-4 p-4 rounded-xl border-2 border-amber-300 bg-amber-50/50">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {editableColumns.map((col) => (
              <div key={col.key}>
                <label className="text-xs font-medium text-slate-500 mb-1 block">{col.label}</label>
                {renderInput(col, newData[col.key], (v) => setNewData((p) => ({ ...p, [col.key]: v })))}
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            <button onClick={() => createMutation.mutate(newData)} disabled={createMutation.isPending}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 disabled:opacity-50">
              {createMutation.isPending ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Save
            </button>
            <button onClick={() => setCreating(false)} className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm hover:bg-slate-50">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12"><Loader2 className="animate-spin text-amber-500" size={24} /></div>
      ) : (
        <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  {columns.map((col) => (
                    <th key={col.key} className="px-4 py-3 text-left font-medium text-slate-500 text-xs uppercase tracking-wider" style={{ width: col.width }}>
                      {col.label}
                    </th>
                  ))}
                  <th className="px-4 py-3 text-right font-medium text-slate-500 text-xs uppercase tracking-wider w-24">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row) => (
                  <tr key={row.id as string} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                    {columns.map((col) => (
                      <td key={col.key} className="px-4 py-3">
                        {editingId === row.id ? (
                          col.editable !== false ? (
                            renderInput(col, editData[col.key], (v) => setEditData((p) => ({ ...p, [col.key]: v })))
                          ) : (
                            <span className="text-slate-400">{String(row[col.key] ?? "")}</span>
                          )
                        ) : col.type === "boolean" ? (
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold ${row[col.key] ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
                            {row[col.key] ? "Active" : "Inactive"}
                          </span>
                        ) : (
                          <span className="text-slate-700 line-clamp-2">{String(row[col.key] ?? "")}</span>
                        )}
                      </td>
                    ))}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        {editingId === row.id ? (
                          <>
                            <button onClick={() => {
                              const updates: Record<string, unknown> = {};
                              editableColumns.forEach((c) => { updates[c.key] = editData[c.key]; });
                              updateMutation.mutate({ id: row.id as string, updates });
                            }} disabled={updateMutation.isPending}
                              className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center hover:bg-amber-100 transition-colors">
                              {updateMutation.isPending ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />}
                            </button>
                            <button onClick={() => setEditingId(null)} className="w-7 h-7 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-slate-200 transition-colors">
                              <X size={12} />
                            </button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => startEdit(row)} className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors">
                              <Pencil size={12} />
                            </button>
                            <button onClick={() => {
                              if (confirm("Are you sure you want to delete this item?")) {
                                deleteMutation.mutate(row.id as string);
                              }
                            }} className="w-7 h-7 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 flex items-center justify-center transition-colors">
                              <Trash2 size={12} />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredRows.length === 0 && (
                  <tr><td colSpan={columns.length + 1} className="px-4 py-12 text-center text-slate-400">No items found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}