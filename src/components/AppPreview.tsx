import appMockup from "@/assets/app-mockup.png";
import appMockup2 from "@/assets/app-mockup-2.png";
import hmoobLogo from "@/assets/logo.jpeg";
import dandexLogo from "@/assets/dandex-logo.png";
import danscanLogo from "@/assets/danscan-logo.png";
import { Download, ExternalLink, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCompatibleWallets } from "@/hooks/useDbData";

const ecosystemApps = [
  { name: "HMOOB Mining", url: "https://hmoob.io", logo: hmoobLogo, descKey: "appPreview.hmoobDesc", borderColor: "hover:border-primary/30" },
  { name: "DanDEX", url: "https://dandex.io", logo: dandexLogo, descKey: "appPreview.dandexDesc", borderColor: "hover:border-emerald-400/30" },
  { name: "DanScan", url: "https://danscan.io", logo: danscanLogo, descKey: "appPreview.danscanDesc", borderColor: "hover:border-sky-400/30" },
];

export default function AppPreview() {
  const { t } = useLanguage();
  const { data: wallets } = useCompatibleWallets();

  return (
    <section className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.04)_0%,_transparent_60%)]" />
      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-primary/50" />{t("appPreview.label")}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-8 leading-tight">
              {t("appPreview.title1")}<br /><span className="text-gradient-gold">{t("appPreview.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-base leading-[1.8] mb-4">
              {t("appPreview.desc")} <strong className="text-foreground">{t("about.bitget")}</strong> {t("appPreview.descEnd")}
            </p>
            <p className="text-muted-foreground text-sm leading-[1.8] mb-6">{t("appPreview.desc2")}</p>

            <div className="space-y-3 mb-8">
              {ecosystemApps.map((app) => (
                <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border border-border bg-surface ${app.borderColor} transition-all duration-300 group hover:bg-muted/20`}>
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-muted/20">
                    <img src={app.logo} alt={app.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{app.name}</span>
                      <ExternalLink size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{t(app.descKey)}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Compatible Wallets from DB */}
            <div className="mb-8">
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                {t("appPreview.compatibleWallets")}
              </h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {(wallets || []).map((wallet) => (
                  <a key={wallet.id} href={wallet.play_url} target="_blank" rel="noopener noreferrer"
                    className="relative flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border bg-surface hover:border-primary/20 hover:bg-muted/20 transition-all duration-300 group">
                    {wallet.is_recommended && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full whitespace-nowrap">
                        {t("boost.recommended")}
                      </span>
                    )}
                    <img src={wallet.logo_url} alt={wallet.name} className="w-14 h-14 rounded-2xl shadow-md" loading="lazy" width={56} height={56} />
                    <div className="text-center">
                      <span className="text-sm font-semibold block">{wallet.name}</span>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <Star size={10} className="text-amber-400 fill-amber-400" />
                        <span className="text-xs text-muted-foreground">{wallet.rating}</span>
                        <span className="text-xs text-muted-foreground">· {wallet.downloads}</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1">{wallet.description}</p>
                    </div>
                    <span className="text-[10px] font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <Download size={10} /> Google Play
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href="https://hmoob.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
                <ExternalLink size={18} />{t("appPreview.openApp")}
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center relative min-h-[300px] sm:min-h-[520px] lg:min-h-[680px] xl:min-h-[740px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.08)_0%,_transparent_70%)]" />
            {/* Primary phone — always visible */}
            <div className="relative z-10 transform sm:-rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -inset-8 bg-primary/10 blur-[80px] rounded-full" />
              <img src={appMockup} alt="HMOOB Mining App - Home" className="relative w-[180px] sm:w-[230px] lg:w-[310px] xl:w-[345px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:-translate-y-3 transition-transform duration-500 rounded-[2rem]" loading="lazy" width={896} height={1344} />
              <div className="text-center mt-4">
                <span className="text-xs font-mono text-primary/80 bg-primary/[0.08] px-3 py-1.5 rounded-full border border-primary/15">hmoob.io</span>
              </div>
            </div>
            {/* Secondary phone — hidden on mobile to prevent overflow */}
            <div className="hidden sm:block relative z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500 -ml-8 lg:-ml-12 translate-y-8">
              <div className="absolute -inset-8 bg-blue-500/10 blur-[80px] rounded-full" />
              <img src={appMockup2} alt="Web3 Wallet - Connected" className="relative w-[180px] sm:w-[230px] lg:w-[310px] xl:w-[345px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:-translate-y-3 transition-transform duration-500 rounded-[2rem]" loading="lazy" width={896} height={1344} />
              <div className="text-center mt-4">
                <span className="text-xs font-mono text-blue-400/80 bg-blue-400/[0.08] px-3 py-1.5 rounded-full border border-blue-400/15">Web3 Wallet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
