import miningIllustration from "@/assets/cion.jpeg";
import danscanMobile from "@/assets/danscan-mobile.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteLinks } from "@/hooks/useDbData";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const CONTRACT_ADDRESS = "0xD84b7c96c23BAb37b585Bac98DFE6651D30F6c11";

export default function About() {
  const { t } = useLanguage();
  const { data: partnerLinks } = useSiteLinks("about_partner");
  const [copied, setCopied] = useState(false);

  const copyContract = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
      <div className="container max-w-5xl relative">
        <div className="grid md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-center">
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
              {t("about.p1")} <strong className="text-gradient-gold font-bold">{t("about.supply")}</strong> {t("about.p1End")}
            </p>
            <p className="text-muted-foreground text-base leading-[1.8] mb-5">
              {t("about.p2")}
            </p>

            {/* Contract Address */}
            <div className="mt-6 p-4 rounded-xl border border-primary/20 bg-primary/[0.04]">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">{t("about.contract")}</p>
              <div className="flex items-center gap-2">
                <code className="text-primary text-xs sm:text-sm font-mono break-all flex-1">{CONTRACT_ADDRESS}</code>
                <button onClick={copyContract} className="shrink-0 p-2 rounded-lg hover:bg-primary/10 transition-colors" title="Copy">
                  {copied ? <Check size={16} className="text-secondary" /> : <Copy size={16} className="text-muted-foreground" />}
                </button>
              </div>
            </div>

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
            <div className="relative flex items-end gap-6">
              {/* Coin illustration */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-amber-500/10 blur-3xl scale-110" />
                <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 w-[200px] lg:w-[240px]">
                  <img
                    src={miningIllustration}
                    alt="Hmong Coin Mining Illustration"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </div>

              {/* DanScan Mobile App Mockup */}
              <div className="relative">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 to-primary/10 blur-3xl scale-110" />
                <div className="relative w-[180px] lg:w-[220px]">
                  {/* Phone frame */}
                  <div className="rounded-[2rem] border-[3px] border-muted/30 bg-background/80 p-1.5 shadow-2xl shadow-primary/10 backdrop-blur-sm">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-muted/40 z-10" />
                    {/* Screen */}
                    <div className="rounded-[1.5rem] overflow-hidden">
                      <img
                        src={danscanMobile}
                        alt="DanScan Blockchain Explorer"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* Label */}
                  <p className="text-center text-xs font-mono text-primary/70 mt-3 tracking-wider">DanScan Explorer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
