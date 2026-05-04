import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Play, Pause, Volume2, VolumeX, SkipForward, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import ecosystemVideo from "@/assets/ecosystem-promo.mp4";

interface VideoTranslation {
  locale: string;
  title: string;
  description: string | null;
}

interface VideoRow {
  id: string;
  title: string | null;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  sort_order: number;
  video_translations: VideoTranslation[];
}

interface VideoItem {
  id: string;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  sort_order: number;
}

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, locale } = useLanguage();

  const { data: videos } = useQuery({
    queryKey: ["videos_public"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("videos")
        .select("*, video_translations(locale, title, description)")
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data as unknown as VideoRow[];
    },
  });

  const pickTranslation = (row: VideoRow): VideoItem => {
    const tr =
      row.video_translations?.find((x) => x.locale === locale) ||
      row.video_translations?.find((x) => x.locale === "en") ||
      row.video_translations?.[0];
    return {
      id: row.id,
      title: tr?.title || row.title || "",
      description: tr?.description ?? row.description ?? null,
      video_url: row.video_url.startsWith("/src/") ? ecosystemVideo : row.video_url,
      thumbnail_url: row.thumbnail_url,
      sort_order: row.sort_order,
    };
  };

  const list: VideoItem[] = videos && videos.length > 0
    ? videos.map(pickTranslation)
    : [{ id: "default", title: t("video.title1"), description: t("video.desc"), video_url: ecosystemVideo, thumbnail_url: null, sort_order: 0 }];

  const current = list[activeIndex] || list[0];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (playing) {
        videoRef.current.play().catch(() => setPlaying(false));
      }
    }
  }, [activeIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const handleEnded = () => {
    if (activeIndex < list.length - 1) {
      setActiveIndex(activeIndex + 1);
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };

  const selectVideo = (i: number) => {
    setActiveIndex(i);
    setPlaying(true);
  };

  return (
    <section className="py-16 sm:py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.03)_0%,_transparent_60%)]" />
      <div className="container relative">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />{t("video.label")}<span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold mt-2">
            {t("video.title1")} <span className="text-gradient-gold">{t("video.title2")}</span> {t("video.titleEnd")}
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">{t("video.desc")}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative group rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-colors duration-500 shadow-2xl shadow-background/50 w-full max-w-[360px] mx-auto">
              <video
                key={current.id}
                ref={videoRef}
                src={current.video_url}
                className="w-full aspect-[9/16] object-contain bg-black"
                muted={muted}
                playsInline
                onEnded={handleEnded}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20 pointer-events-none" />

              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
                <button onClick={togglePlay} className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/30 ring-4 ring-primary/20">
                  {playing ? <Pause className="text-primary-foreground" size={30} /> : <Play className="text-primary-foreground ml-1" size={30} />}
                </button>
              </div>

              <div className={`absolute bottom-5 right-5 flex gap-2 transition-all duration-500 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
                {activeIndex < list.length - 1 && (
                  <button onClick={() => selectVideo(activeIndex + 1)} className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/30 transition-all">
                    <SkipForward size={17} />
                  </button>
                )}
                <button onClick={toggleMute} className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/30 transition-all">
                  {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                </button>
              </div>

              <div className="absolute bottom-5 left-5 max-w-[60%]">
                <div className="text-xs font-mono text-primary mb-1">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground line-clamp-1">{current.title}</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface/50 backdrop-blur p-3 lg:max-h-[480px] overflow-y-auto">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground px-2 py-2 mb-1">
                Playlist · {list.length}
              </div>
              <div className="space-y-1.5">
                {list.map((v, i) => {
                  const isActive = i === activeIndex;
                  const isPlayed = i < activeIndex;
                  return (
                    <button
                      key={v.id}
                      onClick={() => selectVideo(i)}
                      className={`w-full text-left flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                        isActive
                          ? "bg-primary/10 border border-primary/30"
                          : "border border-transparent hover:bg-foreground/5"
                      }`}
                    >
                      <div className="relative w-12 h-20 shrink-0 rounded-lg overflow-hidden bg-background border border-border">
                        {v.thumbnail_url ? (
                          <img src={v.thumbnail_url} alt={v.title} className="w-full h-full object-cover" />
                        ) : (
                          <video src={v.video_url} className="w-full h-full object-cover" muted preload="metadata" />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                          {isActive && playing ? (
                            <Pause size={16} className="text-primary" />
                          ) : isPlayed ? (
                            <CheckCircle2 size={16} className="text-primary" />
                          ) : (
                            <Play size={16} className="text-foreground/80 ml-0.5" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 pt-0.5">
                        <div className={`text-xs font-mono mb-0.5 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <h4 className={`text-sm font-medium line-clamp-2 ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                          {v.title}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
