import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";
import boostBg from "@/assets/boost-bg.jpg";

export default function BoostPlans() {
  const { locale, t } = useLanguage();
  const { data: boosts } = useQuery({
    queryKey: ["boost_plans", locale],
    queryFn: async () => {
      const { data, error } = await supabase.from("boost_plans").select("*").eq("is_active", true).eq("locale", locale).order("sort_order");
      if (error) throw error;
      return data;
    },
  });
  const { data: benefits } = useQuery({
    queryKey: ["boost_benefits", locale],
    queryFn: async () => {
      const { data, error } = await supabase.from("boost_benefits").select("*").eq("is_active", true).eq("locale", locale).order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  if (!boosts) return null;

  return (
    <section id="boost" className="py-28 bg-surface relative overflow-hidden">
      <img src={boostBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="container relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />{t("boost.label")}<span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2">
            {t("boost.title1")} <span className="text-gradient-gold">{t("boost.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-lg mx-auto">{t("boost.desc")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12">
          {boosts.map((b) => (
            <div key={b.id} className={`relative rounded-2xl p-6 border transition-all duration-500 hover:-translate-y-1 ${b.is_recommended ? "border-primary/40 bg-gradient-to-b from-primary/[0.08] to-surface shadow-lg shadow-primary/10" : "border-border bg-background hover:border-primary/20"}`}>
              {b.is_recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold font-mono px-3 py-1 rounded-full uppercase tracking-wider">{t("boost.recommended")}</span>
                </div>
              )}
              <div className="text-center mb-5">
                <h3 className="font-display text-base font-bold text-muted-foreground mb-1">{b.name} {t("boost.suffix")}</h3>
                <div className="font-display text-3xl font-bold text-gradient-gold">{b.hmoob_amount.toLocaleString()} <span className="text-lg">HMOOB</span></div>
                <div className="text-muted-foreground text-sm mt-1">~${b.usd_price}</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t("boost.hashRate")}</span><span className="font-mono font-bold text-secondary">+{b.hash_rate} GH/s</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t("boost.miningPower")}</span><span className="font-mono font-bold text-foreground">+365%</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t("boost.totalReturn")}</span><span className="font-mono font-bold text-primary">~{b.total_return} HMOOB</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t("boost.duration")}</span><span className="font-mono font-bold text-foreground">{t("boost.days")}</span></div>
              </div>
              <a href="https://hmoob.io/boost" target="_blank" rel="noopener noreferrer" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${b.is_recommended ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25" : "bg-muted text-foreground hover:bg-muted/80"}`}>{t("boost.getBoost")}</a>
            </div>
          ))}
        </div>

        {benefits && benefits.length > 0 && (
          <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <div key={b.id} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={16} className="text-secondary shrink-0" /><span>{b.text}</span></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
