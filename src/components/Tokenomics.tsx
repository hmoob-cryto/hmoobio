import { useLanguage } from "@/contexts/LanguageContext";
import { Flame, Users, Briefcase, Code, Heart, Gift } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SEGMENTS = [
  { key: "business", pct: 40, color: "hsl(var(--primary))", icon: Briefcase },
  { key: "burn", pct: 25, color: "hsl(0, 72%, 51%)", icon: Flame },
  { key: "team", pct: 10, color: "hsl(199, 89%, 48%)", icon: Code },
  { key: "charity", pct: 10, color: "hsl(280, 65%, 60%)", icon: Heart },
  { key: "growth", pct: 10, color: "hsl(25, 95%, 53%)", icon: Gift },
  { key: "airdrop", pct: 5, color: "hsl(45, 93%, 47%)", icon: Users },
];

function PieChart({ animate }: { animate: boolean }) {
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const r = 110;

  let cumulative = 0;
  const paths = SEGMENTS.map((seg) => {
    const startAngle = (cumulative / 100) * 360 - 90;
    cumulative += seg.pct;
    const endAngle = (cumulative / 100) * 360 - 90;
    const largeArc = seg.pct > 50 ? 1 : 0;
    const x1 = cx + r * Math.cos((startAngle * Math.PI) / 180);
    const y1 = cy + r * Math.sin((startAngle * Math.PI) / 180);
    const x2 = cx + r * Math.cos((endAngle * Math.PI) / 180);
    const y2 = cy + r * Math.sin((endAngle * Math.PI) / 180);
    const midAngle = ((startAngle + endAngle) / 2 * Math.PI) / 180;
    const labelR = r * 0.7;
    const lx = cx + labelR * Math.cos(midAngle);
    const ly = cy + labelR * Math.sin(midAngle);

    return {
      ...seg,
      d: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`,
      lx,
      ly,
    };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[280px] mx-auto drop-shadow-2xl">
      {paths.map((p, i) => (
        <g key={p.key}>
          <path
            d={p.d}
            fill={p.color}
            stroke="hsl(var(--background))"
            strokeWidth="2"
            className="transition-all duration-700"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "scale(1)" : "scale(0.8)",
              transformOrigin: `${cx}px ${cy}px`,
              transitionDelay: `${i * 100}ms`,
            }}
          />
          <text
            x={p.lx}
            y={p.ly}
            textAnchor="middle"
            dominantBaseline="central"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            fontFamily="monospace"
            style={{
              opacity: animate ? 1 : 0,
              transitionDelay: `${600 + i * 80}ms`,
              transition: "opacity 0.4s ease",
            }}
          >
            {p.pct}%
          </text>
        </g>
      ))}
      {/* Center hole */}
      <circle cx={cx} cy={cy} r={40} fill="hsl(var(--background))" />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold" fontFamily="monospace">
        999M
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8" fontFamily="monospace">
        HMOOB
      </text>
    </svg>
  );
}

export default function Tokenomics() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="tokenomics" className="py-16 sm:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[150px]" />
      <div className="container relative">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />{t("tokenomics.label")}<span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2">
            {t("tokenomics.title1")} <span className="text-gradient-gold">{t("tokenomics.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-lg mx-auto">{t("tokenomics.desc")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-4xl mx-auto">
          {/* Pie Chart */}
          <div className="flex justify-center">
            <PieChart animate={visible} />
          </div>

          {/* Legend */}
          <div className="space-y-4">
            {SEGMENTS.map((seg, i) => {
              const Icon = seg.icon;
              return (
                <div
                  key={seg.key}
                  className="flex items-center gap-4 p-3 rounded-xl border border-border bg-background hover:border-primary/20 transition-all duration-500"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(20px)",
                    transitionDelay: `${i * 100}ms`,
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${seg.color}20` }}>
                    <Icon size={20} style={{ color: seg.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-sm">{t(`tokenomics.${seg.key}`)}</p>
                  </div>
                  <span className="font-mono font-bold text-lg" style={{ color: seg.color }}>{seg.pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
