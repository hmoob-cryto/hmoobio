import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Mountain, Wallet, Link2, Settings, Zap, Gift, Globe, HelpCircle, Footprints, Shield, Star, BarChart3, MessageSquare, BadgeCheck, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

const statCards = [
  { table: "boost_plans", label: "Boost Plans", icon: Zap, color: "text-blue-600", bg: "bg-blue-50", path: "/admin/boost-plans" },
  { table: "faqs", label: "FAQs", icon: HelpCircle, color: "text-emerald-600", bg: "bg-emerald-50", path: "/admin/faqs" },
  { table: "testimonials", label: "Testimonials", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-50", path: "/admin/testimonials" },
  { table: "site_features", label: "Features", icon: Star, color: "text-pink-600", bg: "bg-pink-50", path: "/admin/features" },
  { table: "ecosystem_items", label: "Ecosystem", icon: Globe, color: "text-cyan-600", bg: "bg-cyan-50", path: "/admin/ecosystem" },
  { table: "compatible_wallets", label: "Wallets", icon: Wallet, color: "text-emerald-600", bg: "bg-emerald-50", path: "/admin/wallets" },
  { table: "site_links", label: "Links", icon: Link2, color: "text-orange-600", bg: "bg-orange-50", path: "/admin/site-links" },
  { table: "site_settings", label: "Settings", icon: Settings, color: "text-slate-600", bg: "bg-slate-50", path: "/admin/site-settings" },
];

const TABLES = statCards.map((c) => c.table);

export default function AdminDashboard() {
  const navigate = useNavigate();

  // Single query to fetch all counts at once
  const { data: counts, isLoading } = useQuery({
    queryKey: ["admin_dashboard_counts"],
    queryFn: async () => {
      const results = await Promise.all(
        TABLES.map(async (t) => {
          const { count, error } = await supabase.from(t as any).select("*", { count: "exact", head: true });
          return { table: t, count: error ? 0 : (count || 0) };
        })
      );
      const map: Record<string, number> = {};
      results.forEach((r) => { map[r.table] = r.count; });
      return map;
    },
    staleTime: 30_000, // cache for 30s
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Overview of all managed content</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <button
            key={card.table}
            onClick={() => navigate(card.path)}
            className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md hover:border-amber-200 transition-all text-left group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-9 h-9 rounded-xl ${card.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <card.icon size={18} className={card.color} />
              </div>
            </div>
            {isLoading ? (
              <Skeleton className="h-8 w-12 mb-1" />
            ) : (
              <div className="font-display text-2xl font-bold text-slate-800">{counts?.[card.table] ?? 0}</div>
            )}
            <div className="text-xs text-slate-500 mt-0.5">{card.label}</div>
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl border border-slate-200 bg-white">
          <h3 className="font-display font-bold text-sm text-slate-800 mb-3">Quick Tips</h3>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>• <strong className="text-slate-700">Site Settings</strong> controls Welcome Dialog, Video URL, etc.</li>
            <li>• <strong className="text-slate-700">Site Links</strong> manages all external links by category</li>
            <li>• Filter by locale (EN/HMN) on tables with multilingual content</li>
            <li>• Language switching is managed in frontend code, not in admin</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-slate-200 bg-white">
          <h3 className="font-display font-bold text-sm text-slate-800 mb-3">Content Tables</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Boost Benefits", icon: Gift, path: "/admin/boost-benefits" },
              { label: "How It Works", icon: Footprints, path: "/admin/how-it-works" },
              { label: "Security", icon: Shield, path: "/admin/security-features" },
              { label: "Site Stats", icon: BarChart3, path: "/admin/stats" },
              { label: "Trust Indicators", icon: BadgeCheck, path: "/admin/trust-indicators" },
              { label: "Trust Partners", icon: Handshake, path: "/admin/trust-partners" },
              { label: "Vision", icon: Mountain, path: "/admin/vision" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-2 text-xs text-slate-500 p-2 rounded-lg bg-slate-50 hover:bg-amber-50 hover:text-amber-700 transition-colors text-left"
              >
                <item.icon size={12} /> {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
