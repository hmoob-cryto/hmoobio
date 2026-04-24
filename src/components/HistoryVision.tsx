import { Blocks, Globe, Pickaxe, Rocket, Target, Star, Users, Gem, Quote, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useHistoryTimeline, useVisionMilestones } from "@/hooks/useDbData";
import visionBg from "@/assets/vision-bg.jpg";

const iconMap: Record<string, LucideIcon> = {
  Blocks, Globe, Pickaxe, Rocket, Target, Star, Users, Gem,
};

export default function HistoryVision() {
  const { locale, t } = useLanguage();
  const { data: items } = useHistoryTimeline();
  const { data: milestones } = useVisionMilestones();

  const sectionTitle =
    locale === "hmn" ? "Peb Lub Zeem Muag" : locale === "th" ? "วิสัยทัศน์ของเรา" : "Our Vision";
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

        {/* History Timeline */}
        <div className="relative mb-16 sm:mb-24">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
          <div className="space-y-10">
            {(items || []).map((item) => {
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

        {/* Vision Quote */}
        <div className="relative rounded-3xl overflow-hidden mb-12 sm:mb-16">
          <img src={visionBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/50" />
          <div className="relative p-7 sm:p-10 md:p-16 border border-border bg-surface/30">
            <div className="absolute top-8 left-8 sm:top-10 sm:left-10">
              <Quote className="text-primary/15" size={56} />
            </div>
            <blockquote className="relative font-display text-lg sm:text-2xl lg:text-3xl font-medium leading-[1.6] text-foreground/85 italic pt-6 sm:pt-8">
              {t("vision.quote")}
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <div>
                <div className="text-gradient-gold font-display font-bold text-lg">{t("vision.team")}</div>
                <div className="text-muted-foreground text-sm">{t("vision.role")}</div>
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </div>
          </div>
        </div>

        {/* Roadmap Milestones */}
        {(milestones || []).length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                {t("vision.roadmapTitle1")} <span className="text-gradient-gold">{t("vision.roadmapTitle2")}</span>
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent sm:-translate-x-px" />
              <div className="space-y-8">
                {(milestones || []).map((ms, i) => {
                  const isLeft = i % 2 === 0;
                  const Icon = iconMap[ms.icon_name] || Star;
                  return (
                    <div key={ms.id} className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                      <div className={`flex-1 ${isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"}`}>
                        <div className={`border-glow rounded-2xl p-5 bg-surface/80 inline-block max-w-sm ${isLeft ? "sm:ml-auto" : "sm:mr-auto"} ${ms.status === "current" ? "ring-1 ring-primary/30" : ""}`}>
                          <div className={`flex items-center gap-2 mb-2 ${isLeft ? "sm:justify-end" : ""}`}>
                            <Icon size={16} className={ms.status === "done" ? "text-secondary" : ms.status === "current" ? "text-primary" : "text-muted-foreground/50"} />
                            <h4 className="font-display font-bold text-sm">{ms.title}</h4>
                            {ms.status === "current" && (
                              <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">{t("vision.now")}</span>
                            )}
                          </div>
                          <p className="text-muted-foreground text-xs leading-relaxed">{ms.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-6 sm:left-1/2 top-5 w-3 h-3 rounded-full -translate-x-1.5 sm:-translate-x-1.5 z-10 border-2 border-background"
                        style={{
                          backgroundColor: ms.status === "done" ? "hsl(var(--secondary))" : ms.status === "current" ? "hsl(var(--primary))" : "hsl(var(--muted))",
                        }}
                      />
                      <div className="hidden sm:block flex-1" />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
