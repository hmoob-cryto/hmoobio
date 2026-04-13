import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS, FONT_DISPLAY, FONT_BODY } from "../theme";

const blocks = [
  { hash: "0x8f2a...e4d1", txns: 42, time: "12s ago" },
  { hash: "0xb3c7...a9f2", txns: 38, time: "24s ago" },
  { hash: "0x1d5e...c8b3", txns: 55, time: "36s ago" },
  { hash: "0x6a9d...f1e7", txns: 29, time: "48s ago" },
];

export const Scene4Explorer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 20, stiffness: 180 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [60, 0]);

  // Network visualization
  const nodes = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const r = 160 + Math.sin(frame * 0.02 + i) * 20;
    return {
      x: Math.cos(angle + frame * 0.005) * r,
      y: Math.sin(angle + frame * 0.005) * r,
    };
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${COLORS.navy} 0%, #0A1225 100%)`,
        display: "flex",
        alignItems: "center",
        padding: "0 120px",
      }}
    >
      {/* Network visualization - center background */}
      <div
        style={{
          position: "absolute",
          right: 200,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((other, j) => {
            const dist = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2);
            if (dist > 300) return null;
            const lineOpacity = interpolate(frame, [5, 40], [0, 0.15], { extrapolateRight: "clamp" });
            const angle = Math.atan2(other.y - node.y, other.x - node.x);
            return (
              <div
                key={`${i}-${j}`}
                style={{
                  position: "absolute",
                  left: node.x + 300,
                  top: node.y + 300,
                  width: dist,
                  height: 1,
                  background: COLORS.sky,
                  opacity: lineOpacity,
                  transform: `rotate(${angle}rad)`,
                  transformOrigin: "0 0",
                }}
              />
            );
          })
        )}
        {nodes.map((node, i) => {
          const nSpring = spring({ frame: frame - 8 - i * 3, fps, config: { damping: 200 } });
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: node.x + 300 - 6,
                top: node.y + 300 - 6,
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: COLORS.sky,
                opacity: interpolate(nSpring, [0, 1], [0, 0.6]),
                boxShadow: `0 0 20px ${COLORS.sky}40`,
              }}
            />
          );
        })}
      </div>

      {/* Left content */}
      <div
        style={{
          flex: 1,
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
            color: COLORS.sky,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          danscan.io
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
          Blockchain
          <br />
          <span style={{ color: COLORS.sky }}>Explorer</span>
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
          Track transactions, blocks, wallets & gas fees
          on DannyChain — fully transparent.
        </p>

        {/* Block list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 36, maxWidth: 460 }}>
          {blocks.map((block, i) => {
            const bSpring = spring({ frame: frame - 30 - i * 6, fps, config: { damping: 15, stiffness: 200 } });
            const bOpacity = interpolate(bSpring, [0, 1], [0, 1]);
            const bX = interpolate(bSpring, [0, 1], [-30, 0]);

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "12px 18px",
                  borderRadius: 12,
                  background: `${COLORS.navySurface}`,
                  border: `1px solid ${COLORS.sky}10`,
                  opacity: bOpacity,
                  transform: `translateX(${bX}px)`,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: `${COLORS.sky}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT_DISPLAY,
                    fontSize: 14,
                    color: COLORS.sky,
                  }}
                >
                  #
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "monospace", fontSize: 15, color: COLORS.white }}>{block.hash}</div>
                  <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: COLORS.muted, marginTop: 2 }}>{block.txns} txns · {block.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right spacer for network viz */}
      <div style={{ flex: 1 }} />
    </AbsoluteFill>
  );
};
