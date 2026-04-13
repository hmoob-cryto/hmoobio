import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS, FONT_DISPLAY } from "../theme";

export const AnimatedTitle: React.FC<{
  text: string;
  delay?: number;
  color?: string;
  fontSize?: number;
}> = ({ text, delay = 0, color = COLORS.white, fontSize = 72 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(" ");

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
      {words.map((word, i) => {
        const wordDelay = delay + i * 5;
        const s = spring({
          frame: frame - wordDelay,
          fps,
          config: { damping: 20, stiffness: 180 },
        });
        const y = interpolate(s, [0, 1], [60, 0]);
        const opacity = interpolate(s, [0, 1], [0, 1]);

        return (
          <span
            key={i}
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize,
              fontWeight: 700,
              color,
              transform: `translateY(${y}px)`,
              opacity,
              display: "inline-block",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export const AnimatedSubtext: React.FC<{
  text: string;
  delay?: number;
  fontSize?: number;
}> = ({ text, delay = 0, fontSize = 28 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const s = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
  });
  const opacity = interpolate(s, [0, 1], [0, 1]);
  const y = interpolate(s, [0, 1], [30, 0]);

  return (
    <p
      style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize,
        color: COLORS.muted,
        transform: `translateY(${y}px)`,
        opacity,
        lineHeight: 1.6,
        maxWidth: 700,
      }}
    >
      {text}
    </p>
  );
};
