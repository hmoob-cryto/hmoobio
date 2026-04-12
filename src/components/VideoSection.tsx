import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import videoAsset from "@/assets/vision-video.mp4.asset.json";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="section-fade py-24 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">วิสัยทัศน์ของเรา</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
            ดูวิธีการทำงานของ <span className="text-gradient-gold">Hmoob.io</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            เรียนรู้เกี่ยวกับวิสัยทัศน์และระบบคลาวด์ไมนิ่งที่ทำให้การขุดเหรียญง่ายสำหรับทุกคน
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative group rounded-2xl overflow-hidden border border-border">
          <video
            ref={videoRef}
            src={videoAsset.url}
            className="w-full aspect-video object-cover"
            loop
            muted={muted}
            playsInline
            onEnded={() => setPlaying(false)}
          />

          {/* Overlay controls */}
          <div className={`absolute inset-0 bg-background/30 flex items-center justify-center transition-opacity ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
            <button
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors shadow-lg shadow-primary/30"
            >
              {playing ? (
                <Pause className="text-primary-foreground" size={32} />
              ) : (
                <Play className="text-primary-foreground ml-1" size={32} />
              )}
            </button>
          </div>

          {/* Bottom controls */}
          <div className={`absolute bottom-4 right-4 transition-opacity ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-lg glass border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
