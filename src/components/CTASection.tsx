import { ArrowRight, Download, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ctaBg from "@/assets/hero-bg.jpg";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-28 bg-surface relative overflow-hidden">
      <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
      <div className="container max-w-3xl text-center relative z-10">
        <div className="p-10 sm:p-14 rounded-3xl border border-border bg-background/50 relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono text-secondary bg-secondary/[0.06] border border-secondary/15 mb-8">
              <Shield size={12} />{t("cta.badge")}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5">
              {t("cta.title1")} <span className="text-gradient-gold">{t("cta.title2")}</span> {t("cta.titleEnd")}
            </h2>
            <p className="text-muted-foreground text-lg mb-5 leading-relaxed">{t("cta.desc")}</p>
            <p className="text-muted-foreground text-sm mb-10 max-w-lg mx-auto">{t("cta.steps")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://hmoob.io" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 text-lg">
                {t("cta.launchApp")} <ArrowRight size={20} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.bitkeep.wallet" target="_blank" rel="noopener noreferrer" className="border border-border px-8 py-4 rounded-xl font-semibold text-foreground hover:bg-muted/30 transition-all duration-300 text-lg flex items-center justify-center gap-2">
                <Download size={20} />{t("cta.getWallet")}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="text-muted-foreground/60 text-xs flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-secondary/50" />{t("cta.trust1")}</span>
              <span className="text-muted-foreground/60 text-xs flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-secondary/50" />{t("cta.trust2")}</span>
              <span className="text-muted-foreground/60 text-xs flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-secondary/50" />{t("cta.trust3")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
