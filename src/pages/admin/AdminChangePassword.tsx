import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Eye, EyeOff, Lock, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function AdminChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("รหัสผ่านไม่ตรงกัน");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("เปลี่ยนรหัสผ่านสำเร็จ");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="max-w-md">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
          <Lock className="text-amber-500" size={20} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800">เปลี่ยนรหัสผ่าน</h1>
          <p className="text-sm text-slate-500">อัปเดตรหัสผ่านสำหรับบัญชีของคุณ</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1.5 block">รหัสผ่านใหม่</label>
          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all pr-11"
              placeholder="••••••••"
              required
              minLength={6}
            />
            <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
              {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 mb-1.5 block">ยืนยันรหัสผ่านใหม่</label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all pr-11"
              placeholder="••••••••"
              required
              minLength={6}
            />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {confirmPassword && newPassword !== confirmPassword && (
            <p className="text-xs text-red-500 mt-1">รหัสผ่านไม่ตรงกัน</p>
          )}
          {confirmPassword && newPassword === confirmPassword && (
            <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
              <CheckCircle size={12} /> รหัสผ่านตรงกัน
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || !newPassword || newPassword !== confirmPassword}
          className="w-full py-3 rounded-xl bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Lock size={16} />}
          {loading ? "กำลังบันทึก..." : "เปลี่ยนรหัสผ่าน"}
        </button>
      </form>
    </div>
  );
}
