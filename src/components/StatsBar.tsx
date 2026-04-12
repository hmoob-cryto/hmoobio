import { useCountUp } from "@/hooks/useCountUp";
import { Users, Coins, TrendingUp, Shield } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const stats: { label: string; value: number; suffix: string; icon: LucideIcon }[] = [
  { label: "Active Miners", value: 12480, suffix: "+", icon: Users },
  { label: "Coins Supported", value: 35, suffix: "+", icon: Coins },
  { label: "Avg Daily Reward", value: 4.8, suffix: "%", icon: TrendingUp },
  { label: "Platform Uptime", value: 99.9, suffix: "%", icon: Shield },
];

function StatItem({ label, value, suffix, icon: Icon }: { label: string; value: number; suffix: string; icon: LucideIcon }) {
  const isDecimal = value % 1 !== 0;
  const { value: count, ref } = useCountUp(isDecimal ? Math.floor(value * 10) : value);
  const display = isDecimal ? (count / 10).toFixed(1) : count.toLocaleString();

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 group">
      <div className="w-12 h-12 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center group-hover:border-primary/25 transition-colors duration-300">
        <Icon size={20} className="text-primary/70" />
      </div>
      <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold tracking-tight">
        {display}{suffix}
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
