import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS, FONT_DISPLAY, FONT_BODY } from "../theme";

const features = [
  { icon: "⛏️", title: "Cloud Mining", desc: "No hardware needed" },
  { icon: "📈", title: "1.25 MH/s", desc: "Hash rate per boost" },
  { icon: "💰", title: "365% ROI", desc: "Over 365 days" },
];

export const Scene2Mining: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Left panel - app mockup
  const mockupSpring = spring({ frame: frame - 5, fps, config: { damping: 18, stiffness: 150 } });
  const mockupX = interpolate(mockupSpring, [0, 1], [-300, 0]);
  const mockupOpacity = interpolate(mockupSpring, [0, 1], [0, 1]);

  // Right panel text
  const titleSpring = spring({ frame: frame - 15, fps, config: { damping: 20, stiffness: 180 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [50, 0]);

  // Mining animation - hashrate counter
  const counter = interpolate(frame, [20, 80], [0, 1.25], { extrapolateRight: "clamp" });

  // Floating dots pattern
  const drift = Math.sin(frame * 0.02) * 15;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
        display: "flex",
        alignItems: "center",
        padding: "0 120px",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          right: -200,
          top: -200,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.gold}08, transparent)`,
          transform: `translateY(${drift}px)`,
        }}
      />

      {/* Left: App mockup */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translateX(${mockupX}px)`,
          opacity: mockupOpacity,
        }}
      >
        <div
          style={{
            width: 360,
            height: 640,
            borderRadius: 40,
            background: `linear-gradient(180deg, ${COLORS.navySurface}, ${COLORS.navy})`,
            border: `2px solid ${COLORS.gold}20`,
            padding: 30,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            boxShadow: `0 40px 80px ${COLORS.navy}80, 0 0 40px ${COLORS.gold}10`,
          }}
        >
          {/* Status bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 700, color: COLORS.gold }}>HMOOB Mining</span>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.green }} />
          </div>

          {/* Hashrate display */}
          <div
            style={{
              background: `${COLORS.gold}10`,
              borderRadius: 20,
              padding: "30px 20px",
              textAlign: "center",
              border: `1px solid ${COLORS.gold}20`,
            }}
          >
            <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: COLORS.muted }}>Mining Hashrate</div>
            <div
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 56,
                fontWeight: 700,
                color: COLORS.white,
                marginTop: 8,
              }}
            >
              {counter.toFixed(2)}{" "}
              <span style={{ fontSize: 24, color: COLORS.gold }}>MH/s</span>
            </div>
          </div>

          {/* Earnings */}
          <div style={{ background: `${COLORS.navySurface}`, borderRadius: 16, padding: 20, border: `1px solid ${COLORS.gold}10` }}>
            <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: COLORS.muted }}>Earnings</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 36, fontWeight: 700, color: COLORS.goldLight, marginTop: 4 }}>
              ${interpolate(frame, [30, 90], [0, 325], { extrapolateRight: "clamp" }).toFixed(0)}
            </div>
          </div>

          {/* Mining button */}
          <div
            style={{
              marginTop: "auto",
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
              borderRadius: 16,
              padding: "18px 0",
              textAlign: "center",
              fontFamily: FONT_DISPLAY,
              fontSize: 18,
              fontWeight: 700,
              color: COLORS.navy,
            }}
          >
            Start Mining
          </div>
        </div>
      </div>

      {/* Right: Text content */}
      <div
        style={{
          flex: 1,
          paddingLeft: 80,
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 16,
            fontWeight: 600,
            color: COLORS.gold,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          hmoob.io
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
          Cloud Mining
          <br />
          <span style={{ color: COLORS.gold }}>Made Simple</span>
        </h2>
        <p
          style={{
            fontFamily: FONT_BODY,
            fontSize: 22,
            color: COLORS.muted,
            marginTop: 24,
            lineHeight: 1.6,
            maxWidth: 500,
          }}
        >
          Mine HMOOB tokens with zero hardware.
          Boost your hash rate, earn daily rewards.
        </p>

        {/* Feature cards */}
        <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
          {features.map((f, i) => {
            const fSpring = spring({
              frame: frame - 40 - i * 8,
              fps,
              config: { damping: 15, stiffness: 200 },
            });
            const fOpacity = interpolate(fSpring, [0, 1], [0, 1]);
            const fY = interpolate(fSpring, [0, 1], [30, 0]);

            return (
              <div
                key={i}
                style={{
                  background: `${COLORS.navySurface}`,
                  border: `1px solid ${COLORS.gold}15`,
                  borderRadius: 16,
                  padding: "20px 24px",
                  opacity: fOpacity,
                  transform: `translateY(${fY}px)`,
                }}
              >
                <div style={{ fontSize: 28 }}>{f.icon}</div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 700, color: COLORS.white, marginTop: 8 }}>
                  {f.title}
                </div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: COLORS.muted, marginTop: 4 }}>
                  {f.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
