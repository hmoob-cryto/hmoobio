import { useCountUp } from "@/hooks/useCountUp";
import { Users, Zap, Coins, Clock } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const stats: { label: string; value: number; suffix: string; icon: LucideIcon }[] = [
  { label: "Active Miners", value: 3310, suffix: "+", icon: Users },
  { label: "Hash Rate Boosts", value: 6, suffix: " Plans", icon: Zap },
  { label: "ROI per Year", value: 365, suffix: "%", icon: Coins },
  { label: "Boost Duration", value: 365, suffix: " Days", icon: Clock },
];

function StatItem({ label, value, suffix, icon: Icon }: { label: string; value: number; suffix: string; icon: LucideIcon }) {
  const { value: count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 group">
      <div className="w-12 h-12 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center group-hover:border-primary/25 transition-colors duration-300">
        <Icon size={20} className="text-primary/70" />
      </div>
      <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-sm font-medium">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="section-fade relative border-y border-border bg-surface py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.03)_0%,_transparent_70%)]" />
      <div className="container relative grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
