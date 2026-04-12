import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const VIDEO_URL = "https://oahmqliohtgaehtuhmqp.supabase.co/storage/v1/object/public/media/videos/vision-video.mp4";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const { t } = useLanguage();

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); } else { videoRef.current.play(); }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.03)_0%,_transparent_60%)]" />
      <div className="container relative">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />{t("video.label")}<span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2">
            {t("video.title1")} <span className="text-gradient-gold">{t("video.title2")}</span> {t("video.titleEnd")}
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">{t("video.desc")}</p>
        </div>
        <div className="max-w-4xl mx-auto relative group rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-colors duration-500 shadow-2xl shadow-background/50">
          <video ref={videoRef} src={VIDEO_URL} className="w-full aspect-video object-cover" loop muted={muted} playsInline onEnded={() => setPlaying(false)} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20 pointer-events-none" />
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
            <button onClick={togglePlay} className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/30 ring-4 ring-primary/20">
              {playing ? <Pause className="text-primary-foreground" size={30} /> : <Play className="text-primary-foreground ml-1" size={30} />}
            </button>
          </div>
          <div className={`absolute bottom-5 right-5 transition-all duration-500 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
            <button onClick={toggleMute} className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
              {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
