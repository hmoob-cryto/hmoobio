import { useLanguage } from "@/contexts/LanguageContext";
import { Flame, Users, Briefcase, Code, Heart, Gift } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const SEGMENTS = [
  { key: "business", pct: 40, color: "hsl(36, 90%, 55%)", colorVar: "--primary", icon: Briefcase },
  { key: "burn", pct: 25, color: "hsl(0, 72%, 51%)", colorVar: null, icon: Flame },
  { key: "team", pct: 10, color: "hsl(199, 89%, 48%)", colorVar: null, icon: Code },
  { key: "charity", pct: 10, color: "hsl(280, 65%, 60%)", colorVar: null, icon: Heart },
  { key: "growth", pct: 10, color: "hsl(25, 95%, 53%)", colorVar: null, icon: Gift },
  { key: "airdrop", pct: 5, color: "hsl(45, 93%, 47%)", colorVar: null, icon: Users },
];

const TOTAL_SUPPLY = "999,999,999";

function DonutChart({ animate, hovered, onHover, labels }: {
  animate: boolean;
  hovered: number | null;
  onHover: (i: number | null) => void;
  labels: Record<string, string>;
}) {
  const size = 520; // expanded canvas to fit outer labels
  const chartCx = size / 2;
  const chartCy = size / 2;
  const outerR = 145;
  const innerR = 95;
  const leaderInnerR = outerR + 6;
  const leaderBendR = outerR + 28;
  const labelR = outerR + 70;

  let cumulative = 0;
  const arcs = SEGMENTS.map((seg, i) => {
    const startAngle = (cumulative / 100) * 360 - 90;
    cumulative += seg.pct;
    const endAngle = (cumulative / 100) * 360 - 90;
    const midAngle = (startAngle + endAngle) / 2;
    const largeArc = seg.pct > 50 ? 1 : 0;

    const isHovered = hovered === i;
    const r = isHovered ? outerR + 6 : outerR;
    const ir = innerR;

    const x1 = chartCx + r * Math.cos((startAngle * Math.PI) / 180);
    const y1 = chartCy + r * Math.sin((startAngle * Math.PI) / 180);
    const x2 = chartCx + r * Math.cos((endAngle * Math.PI) / 180);
    const y2 = chartCy + r * Math.sin((endAngle * Math.PI) / 180);
    const ix1 = chartCx + ir * Math.cos((endAngle * Math.PI) / 180);
    const iy1 = chartCy + ir * Math.sin((endAngle * Math.PI) / 180);
    const ix2 = chartCx + ir * Math.cos((startAngle * Math.PI) / 180);
    const iy2 = chartCy + ir * Math.sin((startAngle * Math.PI) / 180);

    const d = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${ir} ${ir} 0 ${largeArc} 0 ${ix2} ${iy2} Z`;

    // Leader-line points (using mid angle of slice)
    const rad = (midAngle * Math.PI) / 180;
    const cosA = Math.cos(rad);
    const sinA = Math.sin(rad);
    const lp1 = { x: chartCx + leaderInnerR * cosA, y: chartCy + leaderInnerR * sinA };
    const lp2 = { x: chartCx + leaderBendR * cosA, y: chartCy + leaderBendR * sinA };
    const isRight = cosA >= 0;
    const lp3 = { x: chartCx + (isRight ? labelR : -labelR), y: lp2.y };
    const labelX = lp3.x + (isRight ? 6 : -6);
    const labelAnchor: "start" | "end" = isRight ? "start" : "end";

    return { ...seg, d, isHovered, index: i, lp1, lp2, lp3, labelX, labelAnchor };
  });

  return (
    <div className="relative w-full">
      {/* Glow behind chart */}
      <div className="absolute inset-0 bg-primary/[0.04] blur-[80px] rounded-full scale-110" />
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[520px] mx-auto relative"
      >
        {/* Subtle grid rings */}
        {[120, 130, 140].map((r) => (
          <circle key={r} cx={chartCx} cy={chartCy} r={r} fill="none" stroke="hsl(240, 10%, 20%)" strokeWidth="0.5" strokeDasharray="2 4" opacity={0.3} />
        ))}
        {arcs.map((arc, i) => (
          <path
            key={arc.key}
            d={arc.d}
            fill={arc.color}
            stroke="hsl(var(--background))"
            strokeWidth="2"
            className="cursor-pointer"
            style={{
              opacity: animate ? (hovered !== null && !arc.isHovered ? 0.4 : 1) : 0,
              filter: arc.isHovered ? `drop-shadow(0 0 12px ${arc.color})` : "none",
              transform: animate ? "scale(1)" : "scale(0.85)",
              transformOrigin: `${chartCx}px ${chartCy}px`,
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: animate ? `${i * 80}ms` : "0ms",
            }}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
          />
        ))}

        {/* Leader lines + outside labels */}
        {arcs.map((arc, i) => {
          const isActive = arc.isHovered;
          const baseOpacity = animate ? (hovered !== null && !isActive ? 0.35 : 1) : 0;
          return (
            <g
              key={`label-${arc.key}`}
              style={{
                opacity: baseOpacity,
                transition: "opacity 0.4s ease",
                transitionDelay: animate ? `${500 + i * 80}ms` : "0ms",
              }}
              onMouseEnter={() => onHover(i)}
              onMouseLeave={() => onHover(null)}
              className="cursor-pointer"
            >
              <polyline
                points={`${arc.lp1.x},${arc.lp1.y} ${arc.lp2.x},${arc.lp2.y} ${arc.lp3.x},${arc.lp3.y}`}
                fill="none"
                stroke={arc.color}
                strokeWidth={isActive ? 1.5 : 1}
                opacity={isActive ? 1 : 0.6}
              />
              <circle cx={arc.lp3.x} cy={arc.lp3.y} r={2.5} fill={arc.color} />
              <text
                x={arc.labelX}
                y={arc.lp3.y - 4}
                textAnchor={arc.labelAnchor}
                fill="hsl(var(--foreground))"
                fontSize="13"
                fontWeight="600"
                fontFamily="'Space Grotesk', sans-serif"
              >
                {labels[arc.key]}
              </text>
              <text
                x={arc.labelX}
                y={arc.lp3.y + 12}
                textAnchor={arc.labelAnchor}
                fill={arc.color}
                fontSize="14"
                fontWeight="700"
                fontFamily="'JetBrains Mono', monospace"
              >
                {arc.pct}%
              </text>
            </g>
          );
        })}

        {/* Center circle */}
        <circle cx={chartCx} cy={chartCy} r={innerR - 2} fill="hsl(var(--background))" />
        <circle cx={chartCx} cy={chartCy} r={innerR - 2} fill="none" stroke="hsl(240, 10%, 20%)" strokeWidth="1" />
        {/* Center text */}
        <text x={chartCx} y={chartCy - 14} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">
          TOTAL SUPPLY
        </text>
        <text x={chartCx} y={chartCy + 8} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="20" fontWeight="bold" fontFamily="'Space Grotesk', sans-serif">
          999M
        </text>
        <text x={chartCx} y={chartCy + 26} textAnchor="middle" fill="hsl(var(--primary))" fontSize="11" fontWeight="600" fontFamily="'JetBrains Mono', monospace">
          HMOOB
        </text>
      </svg>
    </div>
  );
}

function CountUp({ target, animate, suffix = "%" }: { target: number; animate: boolean; suffix?: string }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!animate) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [animate, target]);
  return <>{value}{suffix}</>;
}

export default function Tokenomics() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const onHover = useCallback((i: number | null) => setHovered(i), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="tokenomics" className="relative" ref={ref}>
      {/* Subtle background glow — matches About section style */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative">
        {/* Header — matches About sub-section style (left-aligned, primary accent) */}
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
          <span className="w-8 h-px bg-primary/50" />
          {t("tokenomics.label")}
        </span>
        <h3 className="font-display text-2xl sm:text-4xl font-bold mt-2 mb-6 leading-tight max-w-3xl">
          {t("tokenomics.title1")} <span className="text-gradient-gold">{t("tokenomics.title2")}</span>
        </h3>
        <p className="text-muted-foreground text-base leading-[1.8] mb-10 max-w-3xl">
          {t("tokenomics.desc")}
        </p>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Donut Chart with surrounding labels */}
          <div className="flex justify-center order-1 md:order-1">
            <DonutChart
              animate={visible}
              hovered={hovered}
              onHover={onHover}
              labels={SEGMENTS.reduce((acc, s) => {
                acc[s.key] = t(`tokenomics.${s.key}`);
                return acc;
              }, {} as Record<string, string>)}
            />
          </div>

          {/* Legend with progress bars — fixed sizing to prevent hover jump */}
          <div className="space-y-3 order-2 md:order-2">
            {SEGMENTS.map((seg, i) => {
              const Icon = seg.icon;
              const isActive = hovered === i;
              return (
                <div
                  key={seg.key}
                  className="group flex items-center gap-4 p-3.5 rounded-xl border-2 cursor-pointer"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(24px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                    transitionDelay: `${i * 80}ms`,
                    borderColor: isActive ? seg.color : "hsl(var(--border) / 0.6)",
                    backgroundColor: isActive ? `${seg.color}10` : "transparent",
                    boxShadow: isActive ? `0 0 20px ${seg.color}20` : "none",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{
                      backgroundColor: `${seg.color}${isActive ? "25" : "12"}`,
                    }}
                  >
                    <Icon size={18} style={{ color: seg.color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="font-display font-semibold text-sm">{t(`tokenomics.${seg.key}`)}</p>
                      <span className="font-mono font-bold text-base tabular-nums" style={{ color: seg.color }}>
                        <CountUp target={seg.pct} animate={visible} />
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1.5 rounded-full bg-muted/40 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${seg.pct * 2.5}%` : "0%",
                          backgroundColor: seg.color,
                          transitionDelay: `${400 + i * 80}ms`,
                          opacity: isActive ? 1 : 0.7,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Total supply card — matches Contract Address card style */}
            <div
              className="mt-6 p-4 rounded-xl border border-primary/20 bg-primary/[0.04] flex items-center justify-between"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.6s ease",
                transitionDelay: "800ms",
              }}
            >
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Total Supply</p>
                <p className="font-display font-bold text-lg text-foreground mt-0.5">{TOTAL_SUPPLY} <span className="text-primary">HMOOB</span></p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-mono font-bold text-sm">∞</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
