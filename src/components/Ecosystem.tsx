import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";
import { getIcon } from "@/lib/iconMap";

export default function Ecosystem() {
  const { locale, t } = useLanguage();
  const { data: items } = useQuery({
    queryKey: ["ecosystem_items", locale],
    queryFn: async () => {
      const { data, error } = await supabase.from("ecosystem_items").select("*").eq("is_active", true).eq("locale", locale).order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  if (!items) return null;

  return (
    <section id="ecosystem" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(172,55%,39%,0.04)_0%,_transparent_50%)]" />
      <div className="container relative">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />{t("ecosystem.label")}<span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold mt-2">
            {t("ecosystem.title1")} <span className="text-gradient-gold">{t("ecosystem.title2")}</span> {t("ecosystem.titleEnd")}
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">{t("ecosystem.desc")}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {items.map((item) => {
            const Icon = getIcon(item.icon_name);
            return (
              <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="group border-glow rounded-2xl p-7 bg-surface flex gap-5 items-start transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/15 flex items-center justify-center shrink-0 group-hover:bg-secondary/15 group-hover:border-secondary/25 transition-all duration-300">
                  <Icon className="text-secondary" size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display text-base font-bold">{item.name}</h3>
                    <ExternalLink size={13} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
