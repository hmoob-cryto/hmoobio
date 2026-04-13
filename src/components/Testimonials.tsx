import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, BadgeCheck, TrendingUp, Zap } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Testimonial = Database["public"]["Tables"]["testimonials"]["Row"];

function TestimonialCard({ item, t }: { item: Testimonial; t: (key: string) => string }) {
  return (
    <div className="group relative flex flex-col rounded-3xl border border-border/70 bg-card hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/8 transition-all duration-500 min-w-[78vw] sm:min-w-[320px] lg:min-w-[380px] xl:min-w-[420px] max-w-sm shrink-0 select-none overflow-hidden">
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-500" />

      <div className="flex flex-col flex-1 p-7 lg:p-8">
        {/* Stars + verified */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="text-primary fill-primary" />
            ))}
          </div>
          {item.is_verified && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-secondary bg-secondary/[0.08] border border-secondary/20 px-2.5 py-1 rounded-full tracking-wide">
              <BadgeCheck size={11} />
              {t("testimonials.verified")}
            </span>
          )}
        </div>

        {/* Quote */}
        <div className="relative flex-1 mb-6">
          <span className="absolute -top-3 -left-1 text-6xl text-primary/8 font-serif leading-none select-none pointer-events-none">"</span>
          <blockquote className="text-foreground/80 text-[15px] leading-[1.9] pl-4 pt-1">
            {item.quote}
          </blockquote>
        </div>

        {/* Stats chips */}
        {(item.hash_rate || item.boost_tier) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {item.hash_rate && (
              <div className="inline-flex items-center gap-2 bg-primary/[0.07] border border-primary/12 rounded-xl px-3 py-2">
                <TrendingUp size={12} className="text-primary shrink-0" />
                <div>
                  <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest leading-none mb-0.5">
                    {t("testimonials.hashRate")}
                  </div>
                  <div className="text-xs font-display font-bold text-primary leading-none">
                    {item.hash_rate}
                  </div>
                </div>
              </div>
            )}
            {item.boost_tier && (
              <div className="inline-flex items-center gap-2 bg-muted/40 border border-border rounded-xl px-3 py-2">
                <Zap size={12} className="text-amber-400 shrink-0" />
                <div>
                  <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest leading-none mb-0.5">
                    {t("testimonials.boost")}
                  </div>
                  <div className="text-xs font-display font-bold leading-none">
                    {item.boost_tier}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Author */}
        <div className="flex items-center gap-3.5 pt-5 border-t border-border/50">
          <div
            className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center ring-2 ring-background shrink-0`}
          >
            <span className="font-display font-bold text-sm text-white">{item.initials}</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-display font-bold text-sm truncate">{item.name}</div>
            <div className="text-muted-foreground text-xs mt-0.5 truncate">{item.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialSkeleton() {
  return (
    <div className="rounded-3xl border border-border/70 bg-card p-7 min-w-[78vw] sm:min-w-[320px] lg:min-w-[380px] shrink-0 space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <div key={i} className="w-3.5 h-3.5 rounded bg-muted animate-pulse" />)}</div>
        <div className="w-18 h-5 rounded-full bg-muted animate-pulse" />
      </div>
      <div className="space-y-2.5 pt-2">
        <div className="h-3 w-full rounded bg-muted animate-pulse" />
        <div className="h-3 w-11/12 rounded bg-muted animate-pulse" />
        <div className="h-3 w-4/5 rounded bg-muted animate-pulse" />
        <div className="h-3 w-5/6 rounded bg-muted animate-pulse" />
      </div>
      <div className="flex gap-2 pt-1">
        <div className="h-9 w-24 rounded-xl bg-muted animate-pulse" />
        <div className="h-9 w-20 rounded-xl bg-muted animate-pulse" />
      </div>
      <div className="flex items-center gap-3.5 pt-4 border-t border-border/50">
        <div className="w-10 h-10 rounded-2xl bg-muted animate-pulse shrink-0" />
        <div className="space-y-2 flex-1">
          <div className="h-3.5 w-28 rounded bg-muted animate-pulse" />
          <div className="h-3 w-20 rounded bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { locale, t } = useLanguage();
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials", locale],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_active", true)
        .eq("locale", locale)
        .order("sort_order");
      if (error) throw error;
      return data as Testimonial[];
    },
  });

  const items = testimonials ? [...testimonials, ...testimonials] : [];

  const half = testimonials ? Math.ceil(testimonials.length / 2) : 0;
  const row2 = testimonials
    ? [...testimonials.slice(half), ...testimonials.slice(0, half), ...testimonials.slice(half), ...testimonials.slice(0, half)]
    : [];

  return (
    <section className="py-16 sm:py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,_hsla(36,90%,55%,0.04)_0%,_transparent_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Header */}
      <div className="container text-center relative mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
          <span className="w-8 h-px bg-primary/50" />
          {t("testimonials.label")}
          <span className="w-8 h-px bg-primary/50" />
        </span>

        <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-4 leading-tight">
          {t("testimonials.title1")}{" "}
          <span className="text-gradient-gold">{t("testimonials.title2")}</span>
        </h2>

        <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto mb-8">
          {t("testimonials.desc")}
        </p>

        {/* Rating pill */}
        <div className="inline-flex flex-wrap justify-center items-center gap-3 sm:gap-5 px-5 sm:px-7 py-3.5 rounded-2xl border border-border bg-background/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="text-primary fill-primary" />
              ))}
            </div>
            <span className="font-display font-bold text-base">5.0</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <span className="text-sm text-muted-foreground font-mono">
            {testimonials ? `${testimonials.length * 12}+` : "—"}{" "}
            <span className="text-foreground font-medium">{t("testimonials.label")}</span>
          </span>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5 text-secondary text-sm">
            <BadgeCheck size={15} />
            <span className="font-mono text-xs">{t("testimonials.verified")}</span>
          </div>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="relative overflow-hidden space-y-5">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-14 lg:w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-14 lg:w-32 bg-gradient-to-l from-surface to-transparent z-10" />

        {isLoading ? (
          <div className="flex gap-5 px-4 sm:px-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            <div className="flex gap-5 animate-marquee">
              {items.map((item, idx) => (
                <TestimonialCard key={`r1-${item.id}-${idx}`} item={item} t={t} />
              ))}
            </div>
            <div className="hidden lg:flex gap-5 animate-marquee-reverse">
              {row2.map((item, idx) => (
                <TestimonialCard key={`r2-${item.id}-${idx}`} item={item} t={t} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
