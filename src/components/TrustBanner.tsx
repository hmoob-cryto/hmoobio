import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getIcon } from "@/lib/iconMap";

export default function TrustBanner() {
  const { locale, t } = useLanguage();
  const { data: indicators } = useQuery({
    queryKey: ["trust_indicators", locale],
    queryFn: async () => {
      const { data, error } = await supabase.from("trust_indicators").select("*").eq("is_active", true).eq("locale", locale).order("sort_order");
      if (error) throw error;
      return data;
    },
  });
  const { data: partners } = useQuery({
    queryKey: ["trust_partners", locale],
    queryFn: async () => {
      const { data, error } = await supabase.from("trust_partners").select("*").eq("is_active", true).eq("locale", locale).order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  if (!indicators?.length && !partners?.length) return null;

  return (
    <section className="section-fade relative border-b border-border bg-background py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.02)_0%,_transparent_70%)]" />
      <div className="container relative">
        {indicators && indicators.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10">
            {indicators.map((item) => {
              const Icon = getIcon(item.icon_name);
              return (
                <div key={item.id} className="flex items-center gap-2 text-muted-foreground">
                  <Icon size={16} className="text-primary/70" />
                  <span className="text-xs font-mono tracking-wide uppercase">{item.text}</span>
                </div>
              );
            })}
          </div>
        )}
        {partners && partners.length > 0 && (
          <>
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">{t("trust.poweredBy")}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {partners.map((p) => (
                <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-surface hover:border-primary/20 hover:bg-surface-elevated transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                    <span className="text-primary font-display font-bold text-xs">{p.name.charAt(0)}</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-display font-bold group-hover:text-primary transition-colors">{p.name}</div>
                    <div className="text-[10px] text-muted-foreground font-mono">{p.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
