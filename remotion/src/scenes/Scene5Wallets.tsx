import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS, FONT_DISPLAY, FONT_BODY } from "../theme";

const wallets = [
  { name: "Bitget Wallet", users: "90M+", chains: "130+ chains", color: COLORS.blue },
  { name: "TokenPocket", users: "25M+", chains: "1,000+ networks", color: "#2962FF" },
  { name: "SafePal", users: "20M+", chains: "200+ chains", color: "#4B5AFF" },
];

export const Scene5Wallets: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title
  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 20, stiffness: 180 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [60, 0]);

  // Closing text
  const closeSpring = spring({ frame: frame - 90, fps, config: { damping: 200 } });
  const closeOpacity = interpolate(closeSpring, [0, 1], [0, 1]);
  const closeScale = interpolate(closeSpring, [0, 1], [0.9, 1]);

  // URL
  const urlSpring = spring({ frame: frame - 110, fps, config: { damping: 200 } });
  const urlOpacity = interpolate(urlSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${COLORS.gold}05 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gold}05 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Title */}
      <div
        style={{
          textAlign: "center",
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
          zIndex: 1,
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
          Compatible Wallets
        </div>
        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 56,
            fontWeight: 700,
            color: COLORS.white,
            margin: 0,
          }}
        >
          Connect with{" "}
          <span style={{ color: COLORS.gold }}>Any Wallet</span>
        </h2>
        <p
          style={{
            fontFamily: FONT_BODY,
            fontSize: 22,
            color: COLORS.muted,
            marginTop: 16,
          }}
        >
          Self-custodial security · Multi-chain support · Built-in DApp browser
        </p>
      </div>

      {/* Wallet cards */}
      <div style={{ display: "flex", gap: 24, marginTop: 50, zIndex: 1 }}>
        {wallets.map((wallet, i) => {
          const wSpring = spring({ frame: frame - 30 - i * 10, fps, config: { damping: 15, stiffness: 180 } });
          const wScale = interpolate(wSpring, [0, 1], [0.7, 1]);
          const wOpacity = interpolate(wSpring, [0, 1], [0, 1]);
          const hover = Math.sin(frame * 0.03 + i * 2) * 5;

          return (
            <div
              key={i}
              style={{
                width: 280,
                padding: "40px 30px",
                borderRadius: 24,
                background: `${COLORS.navySurface}`,
                border: `1px solid ${wallet.color}20`,
                textAlign: "center",
                transform: `scale(${wScale}) translateY(${hover}px)`,
                opacity: wOpacity,
                boxShadow: `0 20px 40px ${COLORS.navy}60`,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: `${wallet.color}20`,
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: FONT_DISPLAY,
                  fontSize: 28,
                  fontWeight: 700,
                  color: wallet.color,
                }}
              >
                {wallet.name.charAt(0)}
              </div>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 700, color: COLORS.white }}>
                {wallet.name}
              </div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 16, color: COLORS.muted, marginTop: 8 }}>
                {wallet.users} users
              </div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: COLORS.muted, marginTop: 4 }}>
                {wallet.chains}
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing CTA - just branding, no interactive button */}
      <div
        style={{
          marginTop: 60,
          textAlign: "center",
          transform: `scale(${closeScale})`,
          opacity: closeOpacity,
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 40,
            fontWeight: 700,
            color: COLORS.white,
          }}
        >
          Start your journey on{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            hmoob.io
          </span>
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          opacity: urlOpacity,
          fontFamily: "monospace",
          fontSize: 20,
          color: COLORS.gold,
          background: `${COLORS.gold}10`,
          padding: "10px 30px",
          borderRadius: 30,
          border: `1px solid ${COLORS.gold}30`,
          zIndex: 1,
        }}
      >
        hmoob.io · dandex.io · danscan.io
      </div>
    </AbsoluteFill>
  );
};
