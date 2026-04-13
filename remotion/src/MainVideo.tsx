import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { Scene1Opening } from "./scenes/Scene1Opening";
import { Scene2Mining } from "./scenes/Scene2Mining";
import { Scene3Trading } from "./scenes/Scene3Trading";
import { Scene4Explorer } from "./scenes/Scene4Explorer";
import { Scene5Wallets } from "./scenes/Scene5Wallets";
import { loadFont as loadSpaceGrotesk } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadDMSans } from "@remotion/google-fonts/DMSans";

loadSpaceGrotesk();
loadDMSans();

// Scene durations (frames at 30fps)
// Scene1: 150 (5s) - Opening
// Scene2: 150 (5s) - Mining
// Scene3: 150 (5s) - Trading
// Scene4: 150 (5s) - Explorer
// Scene5: 180 (6s) - Wallets + Closing
// Transitions: 4 × 20 = 80 frames overlap
// Total: 150+150+150+150+180 - 80 = 700 frames (~23.3s)

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene1Opening />
        </TransitionSeries.Sequence>
        
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene2Mining />
        </TransitionSeries.Sequence>
        
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene3Trading />
        </TransitionSeries.Sequence>
        
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene4Explorer />
        </TransitionSeries.Sequence>
        
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene5Wallets />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
