import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { X } from "lucide-react";

export default function WelcomeDialog() {
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();

  useEffect(() => {
    // Show dialog on every visit
    const timer = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const isHmn = locale === "hmn";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg p-0 border-border bg-card overflow-hidden gap-0 [&>button]:hidden">
        {/* Top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-amber-400 to-primary" />

        <div className="relative px-8 pt-8 pb-10">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
          >
            <X size={14} />
          </button>

          {/* Ambient glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Coin icon */}
          <div className="relative flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center shadow-lg shadow-primary/25 ring-4 ring-primary/10">
              <span className="font-display text-3xl font-bold text-primary-foreground">H</span>
            </div>
          </div>

          {/* Welcome text */}
          <div className="text-center space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              {isHmn
                ? "Zoo siab txais tos txhua tus los koom Hmoob kev lag luam"
                : "Welcome to Hmong Project"}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
              {isHmn
                ? "Khawb HMOOB tokens, pauv ntawm DanDEX, tshawb nrhiav ntawm DanScan — tag nrho ntawm DannyChain ecosystem."
                : "Mine HMOOB tokens, trade on DanDEX, explore on DanScan — all on the DannyChain ecosystem."}
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { value: "3,310+", label: isHmn ? "Neeg Khawb" : "Miners" },
              { value: "365%", label: "ROI" },
              { value: "3", label: isHmn ? "Platforms" : "Platforms" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-3 rounded-xl border border-border bg-muted/20"
              >
                <div className="font-display text-lg font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <button
            onClick={() => setOpen(false)}
            className="w-full mt-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            {isHmn ? "Pib Tam Sim" : "Get Started"}
          </button>

          {/* Footer logos */}
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
