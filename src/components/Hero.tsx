import logo from "@/assets/logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";
import bitgetLogo from "@/assets/bitget-wallet-logo.png";
import dannychainLogo from "@/assets/dannychain-logo.png";
import dandexLogo from "@/assets/dandex-logo.png";
import danmarketLogo from "@/assets/danmarket-logo.png";
import danscanLogo from "@/assets/danscan-logo.png";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ecosystemPartners = [
  { name: "Bitget Wallet", logo: bitgetLogo, url: "https://web3.bitget.com", border: "hover:ring-emerald-400/40" },
  { name: "DannyChain", logo: dannychainLogo, url: "https://dannychain.io", border: "hover:ring-primary/40" },
  { name: "DanDEX", logo: dandexLogo, url: "https://dandex.io", border: "hover:ring-sky-400/40" },
  { name: "DanMarket", logo: danmarketLogo, url: "https://danmarket.io", border: "hover:ring-secondary/40" },
  { name: "DannyScan", logo: danscanLogo, url: "https://dannyscan.com", border: "hover:ring-violet-400/40" },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(36,90%,55%,0.07)_0%,_transparent_50%)]" />

      <div className="container relative z-10 text-center pt-16 max-w-4xl mx-auto">
        {/* Live indicator */}
        <div className="mb-8 animate-fade-up-1">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono text-secondary bg-secondary/[0.06] border border-secondary/15">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/75 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            {t("hero.live")}
          </span>
        </div>

        {/* Logo */}
        <div className="mb-10 animate-fade-up-1">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150 animate-glow-pulse" />
            <img src={logo} alt="HMOOB Mining" className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full mx-auto ring-2 ring-primary/30 shadow-2xl shadow-primary/20" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-up-2 tracking-tight">
          {t("hero.title1")} <span className="text-gradient-gold">{t("hero.title2")}</span>
          <br />
          {t("hero.title3")}
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-up-3 leading-relaxed">
          {t("hero.desc")} <strong className="text-foreground">{t("hero.roi")}</strong> {t("hero.descEnd")}
        </p>

        {/* Single primary CTA + subtle secondary */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up-4">
          <a
            href="https://hmoob.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden inline-flex items-center justify-center gap-2"
          >
            <span className="relative z-10">{t("hero.startMining")}</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors inline-flex items-center gap-1.5"
          >
            {t("hero.learnMore")}
            <ChevronDown size={16} />
          </a>
        </div>

        {/* Ecosystem partners */}
        <div className="animate-fade-up-4">
          <p className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest mb-4">
            {t("hero.ecosystem") || "Ecosystem Partners"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {ecosystemPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-2 p-3 rounded-xl ring-1 ring-border/50 bg-background/30 backdrop-blur-sm ${partner.border} transition-all duration-300 hover:bg-muted/20 hover:-translate-y-0.5 w-[76px] sm:w-[88px]`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-muted/20 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    width={44}
                    height={44}
                  />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors leading-tight text-center">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 animate-fade-up-4">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 mx-auto flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-muted-foreground/40 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
