import { useLanguage } from "@/contexts/LanguageContext";
import { useCompatibleWallets } from "@/hooks/useDbData";
import { ArrowRight, Pickaxe, ArrowLeftRight, Search, Smartphone, Layers, Wallet } from "lucide-react";
import hmoobLogo from "@/assets/logo.jpeg";
import dandexLogo from "@/assets/dandex-logo.png";
import danscanLogo from "@/assets/danscan-logo.png";

const flowSteps = [
  { step: 1, icon: Smartphone, titleKey: "flow.step1Title", descKey: "flow.step1Desc", hasWallets: true },
  { step: 2, icon: Wallet, titleKey: "flow.step2Title", descKey: "flow.step2Desc", hasWallets: false },
  { step: 3, icon: Layers, titleKey: "flow.step3Title", descKey: "flow.step3Desc", hasWallets: false },
];

const ecosystemTargets = [
  { logo: hmoobLogo, name: "HMOOB Mining", icon: Pickaxe, descKey: "flow.miningDesc", url: "https://hmoob.io", color: "border-primary/30" },
  { logo: dandexLogo, name: "DanDEX", icon: ArrowLeftRight, descKey: "flow.dexDesc", url: "https://dandex.io", color: "border-emerald-400/30" },
  { logo: danscanLogo, name: "DanScan", icon: Search, descKey: "flow.scanDesc", url: "https://danscan.io", color: "border-sky-400/30" },
];

export default function EcosystemFlow() {
  const { t } = useLanguage();
  const { data: wallets } = useCompatibleWallets();

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.03)_0%,_transparent_60%)]" />
      <div className="container relative">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />{t("flow.label")}<span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2">
            {t("flow.title1")} <span className="text-gradient-gold">{t("flow.title2")}</span> {t("flow.titleEnd")}
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">{t("flow.desc")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {flowSteps.map((step, i) => (
              <div key={step.step} className="relative">
                <div className="border-glow rounded-2xl p-6 bg-surface text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-sm">{step.step}</span>
                  </div>
                  <step.icon size={28} className="text-primary mx-auto mb-3" />
                  <h3 className="font-display font-bold text-base mb-2">{t(step.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey)}</p>
                  {step.hasWallets && wallets && (
                    <div className="flex justify-center gap-2 mt-4">
                      {wallets.map((w) => (
                        <img key={w.id} src={w.logo_url} alt={w.name} className="w-8 h-8 rounded-lg" loading="lazy" width={32} height={32} />
                      ))}
                    </div>
                  )}
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="hidden sm:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight size={16} className="text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-px h-12 bg-gradient-to-b from-primary/30 to-primary/5" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {ecosystemTargets.map((app) => (
              <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer"
                className={`border-glow rounded-2xl p-6 bg-surface flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300 border ${app.color}`}>
                <img src={app.logo} alt={app.name} className="w-14 h-14 rounded-2xl mb-4 ring-1 ring-border group-hover:ring-2 transition-all" loading="lazy" width={56} height={56} />
                <div className="flex items-center gap-2 mb-2">
                  <app.icon size={16} className="text-primary" />
                  <h3 className="font-display font-bold text-base">{app.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(app.descKey)}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
