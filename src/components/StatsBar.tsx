import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { label: "Active Miners", value: 12480, suffix: "+" },
  { label: "Coins Supported", value: 35, suffix: "+" },
  { label: "Avg Daily Reward", value: 4.8, suffix: "%" },
  { label: "Platform Uptime", value: 99.9, suffix: "%" },
];

function StatItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const isDecimal = value % 1 !== 0;
  const { value: count, ref } = useCountUp(isDecimal ? Math.floor(value * 10) : value);
  const display = isDecimal ? (count / 10).toFixed(1) : count.toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold">
        {display}{suffix}
      </div>
      <div className="text-muted-foreground text-sm mt-1">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="section-fade border-y border-border bg-surface py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
