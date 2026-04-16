import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Shield, Eye, EyeOff, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, user, isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && user && isAdmin) {
      navigate("/admin", { replace: true });
      return;
    }

    if (!authLoading && user && !isAdmin) {
      setLoading(false);
      setError("This account does not have admin access.");
    }
  }, [authLoading, user, isAdmin, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: err } = await signIn(email, password);
    if (err) {
      setError(err.message);
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md relative">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
            <Shield className="text-white" size={28} />
          </div>
          <h1 className="font-display text-2xl font-bold text-slate-800">Admin Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Sign in to manage your site content</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1.5 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1.5 block">Password</label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all pr-11"
                placeholder="••••••••"
                required
              />
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading || authLoading}
            className="w-full py-3 rounded-xl bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Shield size={16} />}
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          <a href="/" className="hover:text-slate-600 transition-colors">← Back to site</a>
        </p>
      </div>
    </div>
  );
}