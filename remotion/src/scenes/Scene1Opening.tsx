import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS, FONT_DISPLAY, FONT_BODY } from "../theme";

export const Scene1Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background gradient pulse
  const bgPulse = interpolate(frame, [0, 150], [0, 1]);
  const radialSize = interpolate(bgPulse, [0, 1], [200, 600]);

  // Logo/coin entrance
  const coinSpring = spring({ frame: frame - 10, fps, config: { damping: 15, stiffness: 120 } });
  const coinScale = interpolate(coinSpring, [0, 1], [0.3, 1]);
  const coinOpacity = interpolate(coinSpring, [0, 1], [0, 1]);
  const coinRotate = interpolate(frame, [0, 150], [0, 360]);

  // Title entrance
  const titleSpring = spring({ frame: frame - 30, fps, config: { damping: 20, stiffness: 180 } });
  const titleY = interpolate(titleSpring, [0, 1], [80, 0]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // Subtitle
  const subSpring = spring({ frame: frame - 50, fps, config: { damping: 200 } });
  const subOpacity = interpolate(subSpring, [0, 1], [0, 1]);
  const subY = interpolate(subSpring, [0, 1], [30, 0]);

  // Tagline pills
  const pillLabels = ["Mine", "Trade", "Explore"];

  // Floating particles
  const particles = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const radius = 320 + Math.sin(frame * 0.03 + i) * 30;
    const x = Math.cos(angle + frame * 0.008) * radius;
    const y = Math.sin(angle + frame * 0.008) * radius;
    const particleOpacity = interpolate(frame, [10, 40], [0, 0.4 + Math.sin(i) * 0.2], { extrapolateRight: "clamp" });
    return { x, y, opacity: particleOpacity, size: 4 + (i % 3) * 2 };
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle ${radialSize}px at 50% 45%, ${COLORS.navySurface}, ${COLORS.navy})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${COLORS.gold}08 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gold}08 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: interpolate(frame, [0, 60], [0, 0.5], { extrapolateRight: "clamp" }),
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "45%",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: COLORS.gold,
            transform: `translate(${p.x}px, ${p.y}px)`,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* Coin ring */}
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: `2px solid ${COLORS.gold}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${coinScale})`,
          opacity: coinOpacity,
          marginBottom: 40,
          background: `radial-gradient(circle, ${COLORS.gold}15, transparent)`,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT_DISPLAY,
            fontSize: 32,
            fontWeight: 700,
            color: COLORS.navy,
            transform: `rotate(${coinRotate * 0.05}deg)`,
            boxShadow: `0 0 60px ${COLORS.gold}40`,
          }}
        >
          H
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 80,
            fontWeight: 700,
            color: COLORS.white,
            margin: 0,
            letterSpacing: -2,
          }}
        >
          The{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            DannyChain
          </span>{" "}
          Ecosystem
        </h1>
      </div>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: FONT_BODY,
          fontSize: 28,
          color: COLORS.muted,
          transform: `translateY(${subY}px)`,
          opacity: subOpacity,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Mine · Trade · Explore — all on one blockchain
      </p>

      {/* Pills */}
      <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
        {pillLabels.map((label, i) => {
          const pillSpring = spring({
            frame: frame - 65 - i * 8,
            fps,
            config: { damping: 15, stiffness: 200 },
          });
          const pillScale = interpolate(pillSpring, [0, 1], [0.5, 1]);
          const pillOpacity = interpolate(pillSpring, [0, 1], [0, 1]);

          return (
            <div
              key={i}
              style={{
                padding: "12px 32px",
                borderRadius: 40,
                border: `1px solid ${COLORS.gold}40`,
                background: `${COLORS.gold}10`,
                fontFamily: FONT_DISPLAY,
                fontSize: 18,
                fontWeight: 600,
                color: COLORS.gold,
                transform: `scale(${pillScale})`,
                opacity: pillOpacity,
                letterSpacing: 1,
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
