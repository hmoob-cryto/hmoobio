import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Languages, Mountain, Wallet, Link2, Settings, Zap, Gift, Globe, HelpCircle, Footprints, Shield, Star, BarChart3, MessageSquare, BadgeCheck, Handshake } from "lucide-react";

const statCards = [
  { table: "translations", label: "Translations", icon: Languages, color: "text-blue-400" },
  { table: "boost_plans", label: "Boost Plans", icon: Zap, color: "text-amber-400" },
  { table: "faqs", label: "FAQs", icon: HelpCircle, color: "text-green-400" },
  { table: "testimonials", label: "Testimonials", icon: MessageSquare, color: "text-purple-400" },
  { table: "site_features", label: "Features", icon: Star, color: "text-pink-400" },
  { table: "ecosystem_items", label: "Ecosystem", icon: Globe, color: "text-cyan-400" },
  { table: "compatible_wallets", label: "Wallets", icon: Wallet, color: "text-emerald-400" },
  { table: "site_links", label: "Links", icon: Link2, color: "text-orange-400" },
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
        <h1 className="font-display text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Overview of all managed content</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {counts.map((card) => (
          <div key={card.table} className="p-5 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-muted/30 flex items-center justify-center">
                <card.icon size={18} className={card.color} />
              </div>
            </div>
            <div className="font-display text-2xl font-bold">{card.count}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl border border-border bg-card">
          <h3 className="font-display font-bold text-sm mb-3">Quick Tips</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Use <strong className="text-foreground">Translations</strong> to manage all website text in EN & HMN</li>
            <li>• <strong className="text-foreground">Site Settings</strong> controls Welcome Dialog, Video URL, etc.</li>
            <li>• <strong className="text-foreground">Site Links</strong> manages all external links by category</li>
            <li>• Filter by locale (EN/HMN) on tables with multilingual content</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card">
          <h3 className="font-display font-bold text-sm mb-3">Content Tables</h3>
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
              <div key={item.label} className="flex items-center gap-2 text-xs text-muted-foreground p-2 rounded-lg bg-muted/10">
                <item.icon size={12} /> {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
