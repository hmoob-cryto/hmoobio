import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCountUp } from "@/hooks/useCountUp";
import { getIcon } from "@/lib/iconMap";
import { type LucideIcon } from "lucide-react";

function StatItem({ label, value, suffix, icon: Icon, detail }: { label: string; value: number; suffix: string; icon: LucideIcon; detail: string }) {
  const { value: count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col items-center gap-3 group">
      <div className="w-12 h-12 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center group-hover:border-primary/25 transition-colors duration-300">
        <Icon size={20} className="text-primary/70" />
      </div>
      <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-foreground text-sm font-medium">{label}</div>
      <div className="text-muted-foreground text-xs font-mono">{detail}</div>
    </div>
  );
}

export default function StatsBar() {
  const { locale } = useLanguage();
  const { data: stats } = useQuery({
    queryKey: ["site_stats", locale],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_stats")
        .select("*")
        .eq("is_active", true)
        .eq("locale", locale)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  if (!stats) return null;

  return (
    <section className="relative border-y border-border bg-surface py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.03)_0%,_transparent_70%)]" />
      <div className="container relative grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <StatItem key={s.id} label={s.label} value={s.value} suffix={s.suffix} icon={getIcon(s.icon_name)} detail={s.detail || ""} />
        ))}
      </div>
    </section>
  );
}
