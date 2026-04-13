import appMockup from "@/assets/app-mockup.png";
import appMockup2 from "@/assets/app-mockup-2.png";
import hmoobLogo from "@/assets/logo.jpeg";
import dandexLogo from "@/assets/dandex-logo.png";
import danscanLogo from "@/assets/danscan-logo.png";
import { Wallet, Users, Home, Zap, Target, ArrowRightLeft, Download, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { icon: Wallet, label: "Wallet" },
  { icon: Users, label: "Friends" },
  { icon: Home, label: "Home" },
  { icon: Zap, label: "Boost" },
  { icon: Target, label: "Missions" },
  { icon: ArrowRightLeft, label: "Swap" },
];

const ecosystemApps = [
  {
    name: "HMOOB Mining",
    url: "https://hmoob.io",
    logo: hmoobLogo,
    descKey: "appPreview.hmoobDesc",
    borderColor: "hover:border-primary/30",
  },
  {
    name: "DanDEX",
    url: "https://dandex.io",
    logo: dandexLogo,
    descKey: "appPreview.dandexDesc",
    borderColor: "hover:border-emerald-400/30",
  },
  {
    name: "DanScan",
    url: "https://danscan.io",
    logo: danscanLogo,
    descKey: "appPreview.danscanDesc",
    borderColor: "hover:border-sky-400/30",
  },
];

export default function AppPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.04)_0%,_transparent_60%)]" />
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
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

            {/* Ecosystem Apps */}
            <div className="space-y-3 mb-6">
              {ecosystemApps.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border border-border bg-surface ${app.borderColor} transition-all duration-300 group hover:bg-muted/20`}
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-muted/20">
                    <img src={app.logo} alt={app.name} className="w-full h-full object-cover" />
                  </div>
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

            {/* Nav Features */}
            <div className="grid grid-cols-3 gap-2">
              {navItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-surface hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-md bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                    <item.icon size={14} className="text-primary" />
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href="https://hmoob.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
                <ExternalLink size={18} />{t("appPreview.openApp")}
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.bitkeep.wallet" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border px-8 py-3.5 rounded-xl font-semibold hover:bg-muted/30 hover:border-muted-foreground/30 transition-all duration-300">
                <Download size={18} />{t("appPreview.getWallet")}
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative z-10 -mr-8 lg:-mr-12 translate-y-4">
              <div className="absolute inset-0 bg-primary/15 blur-[100px] rounded-full scale-75" />
              <img src={appMockup} alt="HMOOB Mining App - Home" className="relative w-[240px] sm:w-[300px] lg:w-[340px] drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500" loading="lazy" width={896} height={1344} />
              <div className="text-center mt-3">
                <span className="text-xs font-mono text-primary/80 bg-primary/[0.08] px-3 py-1 rounded-full border border-primary/15">hmoob.io</span>
              </div>
            </div>
            <div className="relative z-20 -ml-8 lg:-ml-12 -translate-y-4">
              <div className="absolute inset-0 bg-secondary/15 blur-[100px] rounded-full scale-75" />
              <img src={appMockup2} alt="Bitget Wallet - Connected" className="relative w-[240px] sm:w-[300px] lg:w-[340px] drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500" loading="lazy" width={896} height={1344} />
              <div className="text-center mt-3">
                <span className="text-xs font-mono text-secondary/80 bg-secondary/[0.08] px-3 py-1 rounded-full border border-secondary/15">Bitget Wallet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
