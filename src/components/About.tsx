import logo from "@/assets/logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteLinks } from "@/hooks/useDbData";

export default function About() {
  const { t } = useLanguage();
  const { data: partnerLinks } = useSiteLinks("about_partner");

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
      <div className="container max-w-5xl relative">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-primary/50" />
              {t("about.label")}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-8 leading-tight">
              {t("about.title1")} <span className="text-gradient-gold">{t("about.title2")}</span>
              <br />{t("about.titleEnd")}
            </h2>
            <p className="text-muted-foreground text-base leading-[1.8] mb-5">
              {t("about.p1")} <strong className="text-foreground">{t("about.bitget")}</strong> {t("about.p1End")}
            </p>
            <p className="text-muted-foreground text-base leading-[1.8] mb-5">
              {t("about.p2")}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {(partnerLinks || []).map((link) => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-mono text-primary hover:text-primary/80 transition-colors border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary/5">
                  {link.name} ↗
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl scale-110" />
              <div className="relative w-64 h-64 rounded-3xl bg-surface-elevated border border-border flex items-center justify-center overflow-hidden">
                <img src={logo} alt="HMOOB Coin" className="w-40 h-40 rounded-full animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
