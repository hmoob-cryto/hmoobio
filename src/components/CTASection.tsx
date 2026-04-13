import { ArrowRight, Download, Shield, Pickaxe, ArrowLeftRight, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCompatibleWallets } from "@/hooks/useDbData";
import ctaBg from "@/assets/hero-bg.jpg";
import hmoobLogo from "@/assets/logo.jpeg";
import dandexLogo from "@/assets/dandex-logo.png";
import danscanLogo from "@/assets/danscan-logo.png";

const ctaApps = [
  { logo: hmoobLogo, name: "HMOOB Mining", url: "https://hmoob.io", icon: Pickaxe, ctaKey: "cta.launchApp" },
  { logo: dandexLogo, name: "DanDEX", url: "https://dandex.io", icon: ArrowLeftRight, ctaKey: "cta.tradeDex" },
  { logo: danscanLogo, name: "DanScan", url: "https://danscan.io", icon: Search, ctaKey: "cta.exploreScan" },
];

export default function CTASection() {
  const { t } = useLanguage();
  const { data: wallets } = useCompatibleWallets();

  return (
    <section id="cta" className="py-28 bg-surface relative overflow-hidden">
      <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
      <div className="container max-w-4xl text-center relative z-10">
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

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {ctaApps.map((app) => (
                <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-border bg-surface/50 hover:bg-muted/30 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-0.5">
                  <img src={app.logo} alt={app.name} className="w-12 h-12 rounded-xl" loading="lazy" width={48} height={48} />
                  <span className="font-semibold text-sm">{app.name}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                    {t(app.ctaKey)} <ArrowRight size={12} />
                  </span>
                </a>
              ))}
            </div>

            {/* Wallet Options from DB */}
            <div className="mb-8">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">{t("cta.downloadWallet")}</p>
              <div className="flex justify-center gap-3">
                {(wallets || []).map((wallet) => (
                  <a key={wallet.id} href={wallet.play_url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border hover:bg-muted/30 hover:border-muted-foreground/20 transition-all duration-300 group">
                    <img src={wallet.logo_url} alt={wallet.name} className="w-7 h-7 rounded-lg" loading="lazy" width={28} height={28} />
                    <span className="text-sm font-medium hidden sm:inline">{wallet.name}</span>
                    <Download size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
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
