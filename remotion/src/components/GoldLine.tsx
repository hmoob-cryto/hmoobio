import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../theme";

export const GoldLine: React.FC<{
  delay?: number;
  width?: number;
  x?: number;
  y?: number;
}> = ({ delay = 0, width = 120, x = 0, y = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const s = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
  });
  const lineWidth = interpolate(s, [0, 1], [0, width]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: lineWidth,
        height: 3,
        background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.goldLight})`,
        borderRadius: 2,
      }}
    />
  );
};
