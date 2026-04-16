import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteSettings } from "@/hooks/useDbData";
import { X, ArrowRight } from "lucide-react";
import welcomeHero from "@/assets/welcome-hero.jpeg";

export default function WelcomeDialog() {
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();
  const { data: settings } = useSiteSettings();

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const suffix = locale === "hmn" ? "_hmn" : locale === "th" ? "_th" : "_en";
  const s = settings || {};

  const title = s[`welcome_title${suffix}`] || s["welcome_title_en"] || "Welcome to Hmong Project";
  const desc = s[`welcome_desc${suffix}`] || s["welcome_desc_en"] || "";
  const cta = s[`welcome_cta${suffix}`] || s["welcome_cta_en"] || "Get Started";

  const stats = [
    { value: s["welcome_stat1_value"] || "3,310+", label: s[`welcome_stat1_label${suffix}`] || s["welcome_stat1_label_en"] || "Miners" },
    { value: s["welcome_stat2_value"] || "365%", label: s["welcome_stat2_label"] || "ROI" },
    { value: s["welcome_stat3_value"] || "3", label: s["welcome_stat3_label"] || "Platforms" },
  ];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg p-0 border-0 bg-transparent overflow-hidden gap-0 [&>button]:hidden shadow-2xl shadow-black/60 rounded-2xl">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Full background image */}
          <img
            src={welcomeHero}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all z-10"
          >
            <X size={14} />
          </button>

          {/* Content over background */}
          <div className="relative z-10 px-6 sm:px-8 pt-32 sm:pt-40 pb-6 sm:pb-8">
            <div className="text-center space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-lg">
                {title}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto drop-shadow">
                {desc}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mt-5">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-2.5 rounded-xl bg-white/[0.08] backdrop-blur-sm border border-white/10">
                  <div className="font-display text-lg font-bold text-primary drop-shadow">{stat.value}</div>
                  <div className="text-[10px] text-white/60 mt-0.5 font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://hmoob.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full mt-5 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              onClick={handleClose}
            >
              {cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Ecosystem links */}
            <div className="flex items-center justify-center gap-4 mt-4 text-[10px] font-mono text-white/40">
              <span>hmoob.io</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>dandex.io</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>danscan.io</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
