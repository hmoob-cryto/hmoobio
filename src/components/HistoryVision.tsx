import { Blocks, Globe, Pickaxe, Rocket, Target, Star, Users, Gem, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useHistoryTimeline } from "@/hooks/useDbData";

const iconMap: Record<string, LucideIcon> = {
  Blocks, Globe, Pickaxe, Rocket, Target, Star, Users, Gem,
};

export default function HistoryVision() {
  const { locale } = useLanguage();
  const { data: items } = useHistoryTimeline();

  const sectionTitle =
    locale === "hmn" ? "Keeb Kwm & Yav Tom Ntej" : locale === "th" ? "ประวัติศาสตร์ & วิสัยทัศน์" : "History & Vision";
  const sectionLabel =
    locale === "hmn" ? "Peb Txoj Kev Taug" : locale === "th" ? "เส้นทางของเรา" : "Our Journey";
  const sectionSubtitle =
    locale === "hmn"
      ? "Los ntawm Danny Chain mus txog HMOOB Token — saib peb txoj kev loj hlob"
      : locale === "th"
        ? "จาก Danny Chain สู่ HMOOB Token — ดูเส้นทางการเติบโตของเรา"
        : "From Danny Chain to HMOOB Token — follow our path of growth";

  const titleParts = sectionTitle.split("&");

  return (
    <section id="history" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[150px]" />
      <div className="container max-w-5xl relative">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-primary/50" />
            {sectionLabel}
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-4">
            {titleParts[0]}
            <span className="text-gradient-gold">&{titleParts[1] || " Vision"}</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">{sectionSubtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
          <div className="space-y-10">
            {(items || []).map((item, i) => {
              const Icon = iconMap[item.icon_name] || Star;
              return (
                <div key={item.id} className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 shrink-0">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border-2 transition-all ${
                        item.status === "done"
                          ? "bg-secondary/10 border-secondary/30 text-secondary"
                          : item.status === "current"
                            ? "bg-primary/10 border-primary/30 text-primary ring-4 ring-primary/10"
                            : "bg-muted/30 border-border text-muted-foreground"
                      }`}
                    >
                      <Icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1 sm:pt-3">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display font-bold text-lg sm:text-xl">{item.title}</h3>
                      {item.status === "current" && (
                        <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20 animate-pulse">
                          {locale === "hmn" ? "Tam sim no" : locale === "th" ? "ปัจจุบัน" : "NOW"}
                        </span>
                      )}
                      {item.status === "done" && (
                        <span className="text-[10px] font-mono bg-secondary/10 text-secondary px-2 py-0.5 rounded-full border border-secondary/20">✓</span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
