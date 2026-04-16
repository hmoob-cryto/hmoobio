import { Pickaxe, ArrowRightLeft, Wallet, Globe, ExternalLink, Star, ArrowRight, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTokenPlatforms } from "@/hooks/useDbData";

const iconMap: Record<string, LucideIcon> = {
  Pickaxe, ArrowRightLeft, Globe, Wallet, Star,
};

export default function TokenUsage() {
  const { locale } = useLanguage();
  const { data: platforms } = useTokenPlatforms();

  const sectionTitle =
    locale === "hmn" ? "Tsim & Siv HMOOB Token" : locale === "th" ? "การสร้างและการใช้ HMOOB Token" : "Create & Use HMOOB Token";
  const sectionLabel =
    locale === "hmn" ? "HMOOB Ecosystem" : locale === "th" ? "ระบบนิเวศ HMOOB" : "HMOOB Ecosystem";
  const sectionSubtitle =
    locale === "hmn"
      ? "Kawm paub txog txoj kev mine, trade, thiab siv HMOOB token hauv Danny Chain ecosystem"
      : locale === "th"
        ? "เรียนรู้วิธีขุด แลกเปลี่ยน และใช้ HMOOB token ในระบบนิเวศ Danny Chain"
        : "Learn how to mine, trade, and use HMOOB token across the Danny Chain ecosystem";
  const visitLabel =
    locale === "hmn" ? "Mus Saib" : locale === "th" ? "เยี่ยมชม" : "Visit";

  return (
    <section id="token-usage" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.03] blur-[150px]" />
      <div className="container max-w-5xl relative">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-primary/50" />
            {sectionLabel}
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-4">
            {sectionTitle.split("HMOOB")[0]}
            <span className="text-gradient-gold">HMOOB Token</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">{sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {(platforms || []).map((p) => {
            const Icon = iconMap[p.icon_name] || Star;
            return (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-glow rounded-2xl p-6 bg-surface/80 hover:bg-surface transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-4`}>
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-base">{p.name}</h3>
                  <ExternalLink size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20 inline-block mb-3 w-fit">
                  {p.platform_type}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.description}</p>
                <div className="mt-4 pt-3 border-t border-border">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    {visitLabel} {p.name} <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
