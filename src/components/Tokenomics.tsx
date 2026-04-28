import { useLanguage } from "@/contexts/LanguageContext";
import { Flame, Users, Briefcase, Code, Heart, Gift } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const SEGMENTS = [
  { key: "business", pct: 40, color: "hsl(36, 90%, 55%)", icon: Briefcase },
  { key: "burn", pct: 25, color: "hsl(0, 72%, 51%)", icon: Flame },
  { key: "team", pct: 10, color: "hsl(199, 89%, 48%)", icon: Code },
  { key: "charity", pct: 10, color: "hsl(280, 65%, 60%)", icon: Heart },
  { key: "growth", pct: 10, color: "hsl(25, 95%, 53%)", icon: Gift },
  { key: "airdrop", pct: 5, color: "hsl(45, 93%, 47%)", icon: Users },
];

const TOTAL_SUPPLY = "999,999,999";

function DonutChart({ animate, hovered, onHover, labels }: {
  animate: boolean;
  hovered: number | null;
  onHover: (i: number | null) => void;
  labels: Record<string, string>;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  const updateTooltip = (clientX: number, clientY: number) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltipPos({ x: clientX - rect.left, y: clientY - rect.top });
  };

  const size = 360;
  const chartCx = size / 2;
  const chartCy = size / 2;
  const outerR = 150;
  const innerR = 95;

  let cumulative = 0;
  const arcs = SEGMENTS.map((seg, i) => {
    const startAngle = (cumulative / 100) * 360 - 90;
    cumulative += seg.pct;
    const endAngle = (cumulative / 100) * 360 - 90;
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

    return { ...seg, d, isHovered, index: i };
  });

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="absolute inset-0 bg-primary/[0.04] blur-[80px] rounded-full scale-110" />
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[360px] mx-auto relative touch-none"
      >
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
            onMouseEnter={(e) => { onHover(i); updateTooltip(e.clientX, e.clientY); }}
            onMouseMove={(e) => updateTooltip(e.clientX, e.clientY)}
            onMouseLeave={() => { onHover(null); setTooltipPos(null); }}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              onHover(i);
              updateTooltip(touch.clientX, touch.clientY);
            }}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              updateTooltip(touch.clientX, touch.clientY);
            }}
            onTouchEnd={() => { onHover(null); setTooltipPos(null); }}
          >
            <title>{`${labels[arc.key]} — ${arc.pct}%`}</title>
          </path>
        ))}

        <circle cx={chartCx} cy={chartCy} r={innerR - 2} fill="hsl(var(--background))" />
        <circle cx={chartCx} cy={chartCy} r={innerR - 2} fill="none" stroke="hsl(240, 10%, 20%)" strokeWidth="1" />
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

      {hovered !== null && tooltipPos && (
        <div
          className="pointer-events-none absolute z-20 px-3 py-2 rounded-lg border shadow-xl backdrop-blur-md bg-background/90 transition-opacity duration-150"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: "translate(-50%, calc(-100% - 14px))",
            borderColor: SEGMENTS[hovered].color,
            boxShadow: `0 8px 24px ${SEGMENTS[hovered].color}40`,
          }}
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: SEGMENTS[hovered].color }}
            />
            <span className="font-display font-semibold text-sm text-foreground">
              {labels[SEGMENTS[hovered].key]}
            </span>
            <span
              className="font-mono font-bold text-sm tabular-nums"
              style={{ color: SEGMENTS[hovered].color }}
            >
              {SEGMENTS[hovered].pct}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function LegendList({ animate, hovered, onHover, labels }: {
  animate: boolean;
  hovered: number | null;
  onHover: (i: number | null) => void;
  labels: Record<string, string>;
}) {
  return (
    <ul className="flex flex-col gap-2 w-full">
      {SEGMENTS.map((seg, i) => {
        const Icon = seg.icon;
        const isActive = hovered === i;
        const isDimmed = hovered !== null && !isActive;
        return (
          <li
            key={seg.key}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
            className="cursor-pointer rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm px-4 py-3 flex items-center gap-3 transition-all duration-300"
            style={{
              opacity: animate ? (isDimmed ? 0.45 : 1) : 0,
              transform: animate ? "translateX(0)" : "translateX(20px)",
              transitionDelay: animate ? `${i * 70}ms` : "0ms",
              borderColor: isActive ? seg.color : undefined,
              boxShadow: isActive ? `0 6px 20px ${seg.color}30` : undefined,
            }}
          >
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${seg.color}1f`, color: seg.color }}
            >
              <Icon className="w-4 h-4" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-sm text-foreground truncate">
                {labels[seg.key]}
              </p>
            </div>
            <span
              className="font-mono font-bold text-base tabular-nums shrink-0"
              style={{ color: seg.color }}
            >
              {seg.pct}%
            </span>
          </li>
        );
      })}
    </ul>
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

  const labels = SEGMENTS.reduce((acc, s) => {
    acc[s.key] = t(`tokenomics.${s.key}`);
    return acc;
  }, {} as Record<string, string>);

  return (
    <div id="tokenomics" className="relative" ref={ref}>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative">
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

        {/* Two-column layout: chart left, legend right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex justify-center lg:justify-start">
            <DonutChart
              animate={visible}
              hovered={hovered}
              onHover={onHover}
              labels={labels}
            />
          </div>

          <div className="w-full">
            <LegendList
              animate={visible}
              hovered={hovered}
              onHover={onHover}
              labels={labels}
            />

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
