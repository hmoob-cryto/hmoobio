import logo from "@/assets/logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";
import dandexLogo from "@/assets/dandex-logo.png";
import danscanLogo from "@/assets/danscan-logo.png";
import { Download, ArrowRight, Pickaxe, ArrowLeftRight, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ecosystemPills = [
  { icon: Pickaxe, label: "Mine", color: "text-primary" },
  { icon: ArrowLeftRight, label: "Trade", color: "text-emerald-400" },
  { icon: Search, label: "Explore", color: "text-sky-400" },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(36,90%,55%,0.07)_0%,_transparent_50%)]" />
      <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 rounded-full bg-secondary/40 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 left-[25%] w-1 h-1 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "4s" }} />

      <div className="container relative z-10 text-center pt-16">
        <div className="mb-6 animate-fade-up-1">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono text-secondary bg-secondary/[0.06] border border-secondary/15">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/75 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            {t("hero.live")}
          </span>
        </div>

        <div className="mb-8 animate-fade-up-1">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150 animate-glow-pulse" />
            <img src={logo} alt="HMOOB Mining" className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto ring-2 ring-primary/30 shadow-2xl shadow-primary/20" />
          </div>
        </div>

        <div className="mb-6 animate-fade-up-2">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium border border-primary/20 text-primary/90 bg-primary/[0.06] shimmer">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t("hero.badge")}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold leading-[1.1] mb-5 animate-fade-up-2 tracking-tight">
          {t("hero.title1")} <span className="text-gradient-gold">{t("hero.title2")}</span>
          <br />
          {t("hero.title3")}
        </h1>

        {/* Ecosystem pills: Mine · Trade · Explore */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up-2">
          {ecosystemPills.map((pill, i) => (
            <span key={pill.label} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-muted-foreground/30 mr-3">·</span>}
              <pill.icon size={16} className={pill.color} />
              <span className="text-sm font-semibold text-foreground/80">{pill.label}</span>
            </span>
          ))}
        </div>

        <p className="text-muted-foreground text-base sm:text-xl max-w-2xl mx-auto mb-8 animate-fade-up-3 leading-relaxed">
          {t("hero.desc")} <strong className="text-foreground">{t("hero.roi")}</strong> {t("hero.descEnd")}
        </p>

        {/* Ecosystem logos */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 animate-fade-up-3">
          <a href="https://hmoob.io" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group">
            <img src={logo} alt="HMOOB Mining" className="w-10 h-10 rounded-xl ring-1 ring-border group-hover:ring-primary/40 transition-all" />
            <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">hmoob.io</span>
          </a>
          <a href="https://dandex.io" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group">
            <img src={dandexLogo} alt="DanDEX" className="w-10 h-10 rounded-xl ring-1 ring-border group-hover:ring-emerald-400/40 transition-all" />
            <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">dandex.io</span>
          </a>
          <a href="https://danscan.io" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group">
            <img src={danscanLogo} alt="DanScan" className="w-10 h-10 rounded-xl ring-1 ring-border group-hover:ring-sky-400/40 transition-all" />
            <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">danscan.io</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-4">
          <a
            href="https://hmoob.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-primary text-primary-foreground px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden inline-flex items-center justify-center gap-2"
          >
            <span className="relative z-10">{t("hero.startMining")}</span>
            <ArrowRight size={18} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bitkeep.wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg text-foreground hover:bg-muted/30 hover:border-muted-foreground/30 transition-all duration-300"
          >
            <Download size={18} />
            {t("hero.downloadWallet")}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10 animate-fade-up-4">
          <span className="text-xs font-mono text-muted-foreground/60 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            {t("hero.annualRoi")}
          </span>
          <span className="text-xs font-mono text-muted-foreground/60 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-secondary/40" />
            {t("hero.noHardware")}
          </span>
          <span className="text-xs font-mono text-muted-foreground/60 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            {t("hero.selfCustodial")}
          </span>
        </div>

        <div className="mt-16 animate-fade-up-4">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-muted-foreground/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
