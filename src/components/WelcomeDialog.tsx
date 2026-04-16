import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteSettings } from "@/hooks/useDbData";
import { X } from "lucide-react";

export default function WelcomeDialog() {
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();
  const { data: settings } = useSiteSettings();

  useEffect(() => {
    const dismissed = sessionStorage.getItem("welcome_dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("welcome_dismissed", "1");
  };

  const suffix = locale === "hmn" ? "_hmn" : locale === "th" ? "_th" : "_en";
  const s = settings || {};

  const title = s[`welcome_title${suffix}`] || s["welcome_title_en"] || "Welcome to Hmong Project";
  const desc = s[`welcome_desc${suffix}`] || s["welcome_desc_en"] || "";
  const cta = s[`welcome_cta${suffix}`] || s["welcome_cta_en"] || "Get Started";

  const stat1LabelKey = `welcome_stat1_label${suffix}`;
  const stats = [
    { value: s["welcome_stat1_value"] || "3,310+", label: s[stat1LabelKey] || s["welcome_stat1_label_en"] || "Miners" },
    { value: s["welcome_stat2_value"] || "365%", label: s["welcome_stat2_label"] || "ROI" },
    { value: s["welcome_stat3_value"] || "3", label: s["welcome_stat3_label"] || "Platforms" },
  ];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg p-0 border-border bg-card overflow-hidden gap-0 [&>button]:hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-amber-400 to-primary" />
        <div className="relative px-5 sm:px-8 pt-6 sm:pt-8 pb-7 sm:pb-10">
          <button onClick={handleClose} className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
            <X size={14} />
          </button>
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center shadow-lg shadow-primary/25 ring-4 ring-primary/10">
              <span className="font-display text-3xl font-bold text-primary-foreground">H</span>
            </div>
          </div>
          <div className="text-center space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">{title}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">{desc}</p>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-3 rounded-xl border border-border bg-muted/20">
                <div className="font-display text-lg font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
          <button onClick={handleClose} className="w-full mt-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
            {cta}
          </button>
          <div className="flex items-center justify-center gap-4 mt-5 text-xs text-muted-foreground">
            <span>hmoob.io</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>dandex.io</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>danscan.io</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
