import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS, FONT_DISPLAY, FONT_BODY } from "../theme";

const tokens = [
  { symbol: "HMOOB", price: "$0.042", change: "+12.5%", color: COLORS.gold },
  { symbol: "DAN", price: "$1.85", change: "+8.3%", color: COLORS.blue },
  { symbol: "ETH", price: "$3,420", change: "+3.1%", color: "#627EEA" },
];

export const Scene3Trading: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const drift = Math.sin(frame * 0.025) * 10;

  // Chart bars animation
  const chartBars = Array.from({ length: 20 }, (_, i) => {
    const height = 40 + Math.sin(i * 0.8 + frame * 0.05) * 30 + Math.cos(i * 0.3) * 20;
    const barSpring = spring({ frame: frame - 10 - i * 2, fps, config: { damping: 200 } });
    return { height: height * barSpring, green: Math.sin(i * 0.8 + frame * 0.05) > 0 };
  });

  // Title
  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 20, stiffness: 180 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [60, 0]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${COLORS.navy} 0%, #0D1520 100%)`,
        display: "flex",
        alignItems: "center",
        padding: "0 120px",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          left: -100,
          bottom: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.emerald}08, transparent)`,
          transform: `translateY(${drift}px)`,
        }}
      />

      {/* Left: Text */}
      <div
        style={{
          flex: 1,
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 16,
            fontWeight: 600,
            color: COLORS.emerald,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          dandex.io
        </div>
        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 56,
            fontWeight: 700,
            color: COLORS.white,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Decentralized
          <br />
          <span style={{ color: COLORS.emerald }}>Trading</span>
        </h2>
        <p
          style={{
            fontFamily: FONT_BODY,
            fontSize: 22,
            color: COLORS.muted,
            marginTop: 24,
            lineHeight: 1.6,
            maxWidth: 480,
          }}
        >
          Swap HMOOB and DannyChain tokens instantly.
          Provide liquidity, earn fees, view live charts.
        </p>

        {/* Token list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 36 }}>
          {tokens.map((token, i) => {
            const tSpring = spring({ frame: frame - 35 - i * 8, fps, config: { damping: 15, stiffness: 200 } });
            const tOpacity = interpolate(tSpring, [0, 1], [0, 1]);
            const tX = interpolate(tSpring, [0, 1], [-40, 0]);

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "14px 20px",
                  borderRadius: 14,
                  background: `${COLORS.navySurface}`,
                  border: `1px solid ${token.color}15`,
                  opacity: tOpacity,
                  transform: `translateX(${tX}px)`,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: `${token.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT_DISPLAY,
                    fontSize: 14,
                    fontWeight: 700,
                    color: token.color,
                  }}
                >
                  {token.symbol.slice(0, 2)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 600, color: COLORS.white }}>{token.symbol}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 600, color: COLORS.white }}>{token.price}</div>
                  <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: COLORS.green }}>{token.change}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Chart visualization */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingLeft: 80,
        }}
      >
        <div
          style={{
            width: 500,
            height: 400,
            background: `${COLORS.navySurface}`,
            borderRadius: 24,
            border: `1px solid ${COLORS.emerald}15`,
            padding: 30,
            display: "flex",
            flexDirection: "column",
            boxShadow: `0 30px 60px ${COLORS.navy}80`,
          }}
        >
          {/* Chart header */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700, color: COLORS.white }}>HMOOB/USDT</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: COLORS.green, marginTop: 4 }}>+12.5% (24h)</div>
            </div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 32, fontWeight: 700, color: COLORS.white }}>$0.042</div>
          </div>

          {/* Chart bars */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "flex-end",
              gap: 6,
              paddingTop: 20,
            }}
          >
            {chartBars.map((bar, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: bar.height,
                  borderRadius: 4,
                  background: bar.green
                    ? `linear-gradient(180deg, ${COLORS.emerald}, ${COLORS.emerald}60)`
                    : `linear-gradient(180deg, #EF4444, #EF444460)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
