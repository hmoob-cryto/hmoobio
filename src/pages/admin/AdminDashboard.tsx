import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Languages, Mountain, Wallet, Link2, Settings, Zap, Gift, Globe, HelpCircle, Footprints, Shield, Star, BarChart3, MessageSquare, BadgeCheck, Handshake } from "lucide-react";

const statCards = [
  { table: "translations", label: "Translations", icon: Languages, color: "text-amber-600", bg: "bg-amber-50" },
  { table: "boost_plans", label: "Boost Plans", icon: Zap, color: "text-blue-600", bg: "bg-blue-50" },
  { table: "faqs", label: "FAQs", icon: HelpCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
  { table: "testimonials", label: "Testimonials", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-50" },
  { table: "site_features", label: "Features", icon: Star, color: "text-pink-600", bg: "bg-pink-50" },
  { table: "ecosystem_items", label: "Ecosystem", icon: Globe, color: "text-cyan-600", bg: "bg-cyan-50" },
  { table: "compatible_wallets", label: "Wallets", icon: Wallet, color: "text-emerald-600", bg: "bg-emerald-50" },
  { table: "site_links", label: "Links", icon: Link2, color: "text-orange-600", bg: "bg-orange-50" },
];

export default function AdminDashboard() {
  const counts = statCards.map((card) => {
    const { data } = useQuery({
      queryKey: [`${card.table}_count`],
      queryFn: async () => {
        const { count, error } = await supabase.from(card.table as any).select("*", { count: "exact", head: true });
        if (error) throw error;
        return count || 0;
      },
    });
    return { ...card, count: data ?? 0 };
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Overview of all managed content</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {counts.map((card) => (
          <div key={card.table} className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-9 h-9 rounded-xl ${card.bg} flex items-center justify-center`}>
                <card.icon size={18} className={card.color} />
              </div>
            </div>
            <div className="font-display text-2xl font-bold text-slate-800">{card.count}</div>
            <div className="text-xs text-slate-500 mt-0.5">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl border border-slate-200 bg-white">
          <h3 className="font-display font-bold text-sm text-slate-800 mb-3">Quick Tips</h3>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>• Use <strong className="text-slate-700">Translations</strong> to manage all website text in EN & HMN</li>
            <li>• <strong className="text-slate-700">Site Settings</strong> controls Welcome Dialog, Video URL, etc.</li>
            <li>• <strong className="text-slate-700">Site Links</strong> manages all external links by category</li>
            <li>• Filter by locale (EN/HMN) on tables with multilingual content</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-slate-200 bg-white">
          <h3 className="font-display font-bold text-sm text-slate-800 mb-3">Content Tables</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Boost Benefits", icon: Gift },
              { label: "How It Works", icon: Footprints },
              { label: "Security", icon: Shield },
              { label: "Site Stats", icon: BarChart3 },
              { label: "Trust Indicators", icon: BadgeCheck },
              { label: "Trust Partners", icon: Handshake },
              { label: "Vision", icon: Mountain },
              { label: "Settings", icon: Settings },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-xs text-slate-500 p-2 rounded-lg bg-slate-50">
                <item.icon size={12} /> {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}