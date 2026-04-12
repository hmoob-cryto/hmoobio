import { useCountUp } from "@/hooks/useCountUp";
import { Users, Zap, Coins, Clock, Shield } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const stats: { label: string; value: number; suffix: string; icon: LucideIcon; detail: string }[] = [
  { label: "Active Miners", value: 3310, suffix: "+", icon: Users, detail: "Growing daily" },
  { label: "Boost Plans", value: 6, suffix: " Tiers", icon: Zap, detail: "10–1,000 HMOOB" },
  { label: "Annual ROI", value: 365, suffix: "%", icon: Coins, detail: "Over 365 days" },
  { label: "Wallet Users", value: 80, suffix: "M+", icon: Shield, detail: "Bitget Wallet" },
];

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
