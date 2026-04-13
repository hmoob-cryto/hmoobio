import { Quote, Target, Rocket, Globe, Users, Gem, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVisionMilestones } from "@/hooks/useDbData";
import visionBg from "@/assets/vision-bg.jpg";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Rocket, Globe, Users, Gem, Target, Star,
};

export default function Vision() {
  const { t } = useLanguage();
  const { data: milestones } = useVisionMilestones();

  return (
    <section className="py-28 relative overflow-hidden">
      <img src={visionBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/60" />
      <div className="container max-w-5xl relative">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-8 mx-auto justify-center w-full">
          <span className="w-8 h-px bg-primary/50" />{t("vision.label")}<span className="w-8 h-px bg-primary/50" />
        </span>

        {/* Quote */}
        <div className="relative p-10 sm:p-16 rounded-3xl border border-border bg-surface/50 mb-16">
          <div className="absolute top-8 left-8 sm:top-10 sm:left-10">
            <Quote className="text-primary/15" size={56} />
          </div>
          <blockquote className="relative font-display text-xl sm:text-2xl lg:text-3xl font-medium leading-[1.6] text-foreground/85 italic pt-8">
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

        {/* Roadmap */}
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
      </div>
    </section>
  );
}
