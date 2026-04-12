import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Verified, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

function TestimonialCard({ item, t }: { item: any; t: (key: string) => string }) {
  return (
    <div className="border-glow rounded-2xl p-7 bg-background text-left group transition-all duration-500 hover:-translate-y-1 min-w-[300px] sm:min-w-[360px] shrink-0">
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="text-primary fill-primary" />)}</div>
        {item.is_verified && <span className="inline-flex items-center gap-1 text-[10px] font-mono text-secondary bg-secondary/[0.08] px-2 py-0.5 rounded-full"><Verified size={10} />{t("testimonials.verified")}</span>}
      </div>
      <p className="text-foreground/80 text-sm leading-[1.8] mb-5">"{item.quote}"</p>
      <div className="flex gap-3 mb-5">
        <div className="flex-1 rounded-lg bg-surface p-2.5 text-center">
          <div className="text-[10px] font-mono text-muted-foreground uppercase">{t("testimonials.hashRate")}</div>
          <div className="text-sm font-display font-bold text-primary mt-0.5 flex items-center justify-center gap-1"><TrendingUp size={12} />{item.hash_rate}</div>
        </div>
        <div className="flex-1 rounded-lg bg-surface p-2.5 text-center">
          <div className="text-[10px] font-mono text-muted-foreground uppercase">{t("testimonials.boost")}</div>
          <div className="text-sm font-display font-bold mt-0.5">{item.boost_tier}</div>
        </div>
      </div>
      <div className="flex items-center gap-3.5 pt-5 border-t border-border">
        <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center ring-1 ring-border`}>
          <span className="text-primary font-display font-bold text-sm">{item.initials}</span>
        </div>
        <div>
          <div className="font-display font-bold text-sm">{item.name}</div>
          <div className="text-muted-foreground text-xs mt-0.5">{item.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { locale, t } = useLanguage();
  const { data: testimonials } = useQuery({
    queryKey: ["testimonials", locale],
    queryFn: async () => {
      const { data, error } = await supabase.from("testimonials").select("*").eq("is_active", true).eq("locale", locale).order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isPaused) return;
    el.scrollLeft += 1;
    // Reset to start when reaching the duplicate set
    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft = 0;
    }
  }, [isPaused]);

  useEffect(() => {
    const id = setInterval(scroll, 30);
    return () => clearInterval(id);
  }, [scroll]);

  if (!testimonials?.length) return null;

  // Duplicate items for seamless infinite scroll
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(36,90%,55%,0.03)_0%,_transparent_50%)]" />
      <div className="container text-center relative">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
          <span className="w-8 h-px bg-primary/50" />{t("testimonials.label")}<span className="w-8 h-px bg-primary/50" />
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-5">
          {t("testimonials.title1")} <span className="text-gradient-gold">{t("testimonials.title2")}</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-16">{t("testimonials.desc")}</p>
      </div>
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-hidden px-6"
        style={{ scrollBehavior: "auto" }}
      >
        {items.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} item={item} t={t} />
        ))}
      </div>
    </section>
  );
}
