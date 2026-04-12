import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Eye } from "lucide-react";
import { getIcon } from "@/lib/iconMap";

export default function SecuritySection() {
  const { locale, t } = useLanguage();
  const { data: features } = useQuery({
    queryKey: ["security_features", locale],
    queryFn: async () => {
      const { data, error } = await supabase.from("security_features").select("*").eq("is_active", true).eq("locale", locale).order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  if (!features) return null;

  return (
    <section id="security" className="section-fade py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsla(172,55%,39%,0.04)_0%,_transparent_50%)]" />
      <div className="container relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-secondary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-secondary/50" />{t("security.label")}<span className="w-8 h-px bg-secondary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-5">
            {t("security.title1")} <span className="text-gradient-teal">{t("security.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("security.desc")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((f) => {
            const Icon = getIcon(f.icon_name);
            return (
              <div key={f.id} className="group rounded-2xl p-7 bg-surface border border-border hover:border-secondary/20 text-left transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-secondary/[0.08] border border-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/[0.15] group-hover:border-secondary/25 transition-all duration-300">
                  <Icon className="text-secondary" size={26} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2.5">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-[1.7]">{f.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <a href="https://danscan.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-secondary hover:text-secondary/80 transition-colors border border-secondary/20 px-6 py-3 rounded-xl hover:bg-secondary/5">
            <Eye size={16} />{t("security.verify")}
          </a>
        </div>
      </div>
    </section>
  );
}
