import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getIcon } from "@/lib/iconMap";

export default function Features() {
  const { locale, t } = useLanguage();
  const { data: features, isLoading, error } = useQuery({
    queryKey: ["site_features", locale],
    queryFn: async () => {
      const { data, error } = await supabase.from("site_features").select("*").eq("is_active", true).eq("locale", locale).order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <section id="features" className="section-fade py-28"><div className="container text-center"><p className="text-muted-foreground">Loading...</p></div></section>;
  if (error) return <section id="features" className="section-fade py-28"><div className="container text-center"><p className="text-red-500">Error: {String(error)}</p></div></section>;
  if (!features?.length) return null;

  return (
    <section id="features" className="section-fade py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.03] blur-[120px]" />
      <div className="container text-center relative">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
          <span className="w-8 h-px bg-primary/50" />{t("features.label")}<span className="w-8 h-px bg-primary/50" />
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-6">
          {t("features.title1")} <span className="text-gradient-gold">{t("features.title2")}</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-16">{t("features.desc")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((f) => {
            const Icon = getIcon(f.icon_name);
            return (
              <div key={f.id} className="group border-glow rounded-2xl p-7 bg-surface text-left transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/[0.15] group-hover:border-primary/25 transition-all duration-300">
                  <Icon className="text-primary" size={26} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2.5">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-[1.7]">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
