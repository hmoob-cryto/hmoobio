import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Download } from "lucide-react";
import { getIcon } from "@/lib/iconMap";
import howitworksBg from "@/assets/howitworks-bg.jpg";
import { SectionSkeleton } from "@/components/SectionSkeleton";
import { useCompatibleWallets } from "@/hooks/useDbData";

export default function HowItWorks() {
  const { locale, t } = useLanguage();
  const { data: steps, isLoading } = useQuery({
    queryKey: ["how_it_works_steps", locale],
    queryFn: async () => {
      const { data, error } = await supabase.from("how_it_works_steps").select("*").eq("is_active", true).eq("locale", locale).order("sort_order");
      if (error) throw error;
      return data;
    },
  });
  const { data: wallets } = useCompatibleWallets();

  if (isLoading) return <SectionSkeleton rows={4} />;
  if (!steps) return null;

  return (
    <section id="how-it-works" className="py-16 sm:py-28 bg-surface relative overflow-hidden">
      <img src={howitworksBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70" />
      <div className="container text-center relative">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
          <span className="w-8 h-px bg-primary/50" />{t("howItWorks.label")}<span className="w-8 h-px bg-primary/50" />
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-10 sm:mb-20">
          {t("howItWorks.title1")} <span className="text-gradient-gold">{t("howItWorks.title2")}</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s, i) => {
            const Icon = getIcon(s.icon_name);
            return (
              <div key={s.id} className="relative group">
                <div className="relative z-10 flex flex-col items-center p-7 rounded-2xl border border-border bg-background hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-1 h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="font-mono text-[11px] font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full">0{i + 1}</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/[0.12] group-hover:border-primary/25 transition-all duration-300">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 sm:mt-16">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">{t("howItWorks.cta")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {(wallets || []).map((w) => (
              <a key={w.id} href={w.play_url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-surface-elevated border border-border hover:border-primary/20 px-5 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 group">
                {w.logo_url ? (
                  <img src={w.logo_url} alt={w.name} className="w-8 h-8 rounded-xl" loading="lazy" width={32} height={32} />
                ) : (
                  <div className="w-8 h-8 rounded-xl bg-primary/[0.08] flex items-center justify-center">
                    <Download size={16} className="text-primary" />
                  </div>
                )}
                <span className="font-display font-bold text-sm">{w.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
