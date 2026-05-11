import danscanMobile from "@/assets/dannyscan-mobile.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteLinks } from "@/hooks/useDbData";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import Tokenomics from "@/components/Tokenomics";

const CONTRACT_ADDRESS = "0x1c2cD5d8f44C2aa37c87676Ac4200c2329AB019d";

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
        <div className="grid md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-start">
          <div>
            {/* HMOOB COIN section */}
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

            {/* Contract Address — part of HMOOB Coin */}
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
          <div className="hidden md:flex justify-center md:sticky md:top-24">
            <div className="relative w-[260px] lg:w-[300px] xl:w-[320px]">
              <div className="absolute -inset-8 rounded-[3rem] bg-primary/[0.06] blur-3xl" />
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] border-[3px] border-muted/25 p-2 shadow-2xl shadow-primary/15">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full bg-muted/30 z-10" />
                <div className="rounded-[2rem] overflow-hidden">
                  <img
                    src={danscanMobile}
                    alt="DannyScan Blockchain Explorer"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-center text-xs font-mono text-primary/60 mt-4 tracking-wider">DannyScan Explorer</p>
            </div>
          </div>
        </div>

        {/* Tokenomics — nested as part of HMOOB Coin */}
        <div className="mt-16 pt-12 border-t border-primary/10">
          <Tokenomics />
        </div>

        {/* HMOOB Mining sub-section — separate from HMOOB Coin */}
        <div className="mt-16 pt-12 border-t border-secondary/15">
          <span className="inline-flex items-center gap-2 text-secondary font-mono text-xs tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-secondary/50" />
            {t("about.miningLabel")}
          </span>
          <h3 className="font-display text-2xl sm:text-4xl font-bold mt-2 mb-6 leading-tight max-w-3xl">
            {t("about.miningTitle1")} <span className="text-gradient-gold">{t("about.miningTitle2")}</span>{" "}
            {t("about.miningTitleEnd")}
          </h3>
          <p className="text-muted-foreground text-base leading-[1.8] max-w-3xl">
            {t("about.p2")}
          </p>
        </div>
      </div>
    </section>
  );
}
