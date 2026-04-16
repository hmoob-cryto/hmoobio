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
      <DialogContent className="sm:max-w-xl p-0 border-0 bg-transparent overflow-hidden gap-0 [&>button]:hidden shadow-2xl shadow-black/50 rounded-2xl">
        <div className="relative bg-card rounded-2xl overflow-hidden">
          {/* Hero image */}
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <img
              src={welcomeHero}
              alt="HMOOB Mining"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/60 transition-all z-10"
            >
              <X size={14} />
            </button>
            {/* Floating coin badge */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-card">
                <span className="font-display text-2xl font-bold text-primary-foreground">H</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-8 pt-12 pb-6 sm:pb-8">
            <div className="text-center space-y-2">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-tight">
                {title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                {desc}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mt-5">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-2.5 rounded-xl border border-border bg-muted/10">
                  <div className="font-display text-lg font-bold text-primary">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://hmoob.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full mt-5 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              onClick={handleClose}
            >
              {cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Ecosystem links */}
            <div className="flex items-center justify-center gap-4 mt-4 text-[10px] font-mono text-muted-foreground/60">
              <span>hmoob.io</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>dandex.io</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>danscan.io</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
