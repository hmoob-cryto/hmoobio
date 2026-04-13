import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, BadgeCheck, TrendingUp, Zap } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Testimonial = Database["public"]["Tables"]["testimonials"]["Row"];

function TestimonialCard({ item, t }: { item: Testimonial; t: (key: string) => string }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 min-w-[300px] sm:min-w-[340px] shrink-0 select-none">
      {/* Top: stars + verified */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="text-primary fill-primary" />
          ))}
        </div>
        {item.is_verified && (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-secondary bg-secondary/[0.08] border border-secondary/15 px-2 py-0.5 rounded-full">
            <BadgeCheck size={10} />
            {t("testimonials.verified")}
          </span>
        )}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 text-foreground/85 text-sm leading-[1.85] mb-5 relative">
        <span className="absolute -top-1 -left-1 text-4xl text-primary/10 font-serif leading-none select-none">"</span>
        <span className="relative pl-3">{item.quote}</span>
      </blockquote>

      {/* Stats chips */}
      {(item.hash_rate || item.boost_tier) && (
        <div className="flex gap-2 mb-5">
          {item.hash_rate && (
            <div className="flex items-center gap-1.5 bg-primary/[0.06] border border-primary/10 rounded-lg px-3 py-1.5">
              <TrendingUp size={11} className="text-primary shrink-0" />
              <div>
                <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-wide leading-none mb-0.5">{t("testimonials.hashRate")}</div>
                <div className="text-xs font-display font-bold text-primary leading-none">{item.hash_rate}</div>
              </div>
            </div>
          )}
          {item.boost_tier && (
            <div className="flex items-center gap-1.5 bg-muted/40 border border-border rounded-lg px-3 py-1.5">
              <Zap size={11} className="text-amber-400 shrink-0" />
              <div>
                <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-wide leading-none mb-0.5">{t("testimonials.boost")}</div>
                <div className="text-xs font-display font-bold leading-none">{item.boost_tier}</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/60">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center ring-2 ring-background shrink-0`}
        >
          <span className="font-display font-bold text-sm text-white">{item.initials}</span>
        </div>
        <div className="min-w-0">
          <div className="font-display font-bold text-sm truncate">{item.name}</div>
          <div className="text-muted-foreground text-xs mt-0.5 truncate">{item.role}</div>
        </div>
      </div>
    </div>
  );
}

function TestimonialSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 min-w-[300px] sm:min-w-[340px] shrink-0">
      <div className="flex justify-between mb-4">
        <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <div key={i} className="w-3 h-3 rounded-sm bg-muted animate-pulse" />)}</div>
        <div className="w-16 h-4 rounded-full bg-muted animate-pulse" />
      </div>
      <div className="space-y-2 mb-5">
        <div className="h-3 w-full rounded bg-muted animate-pulse" />
        <div className="h-3 w-5/6 rounded bg-muted animate-pulse" />
        <div className="h-3 w-4/5 rounded bg-muted animate-pulse" />
      </div>
      <div className="flex gap-2 mb-5">
        <div className="h-9 w-24 rounded-lg bg-muted animate-pulse" />
        <div className="h-9 w-20 rounded-lg bg-muted animate-pulse" />
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-border/60">
        <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
        <div className="space-y-1.5">
          <div className="h-3.5 w-24 rounded bg-muted animate-pulse" />
          <div className="h-3 w-16 rounded bg-muted animate-pulse" />
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

  const showSkeletons = isLoading;
  const items = testimonials ? [...testimonials, ...testimonials] : [];

  return (
    <section className="py-16 sm:py-28 bg-surface relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_hsla(36,90%,55%,0.05)_0%,_transparent_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Header */}
      <div className="container text-center relative mb-14">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
          <span className="w-8 h-px bg-primary/50" />
          {t("testimonials.label")}
          <span className="w-8 h-px bg-primary/50" />
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-4">
          {t("testimonials.title1")}{" "}
          <span className="text-gradient-gold">{t("testimonials.title2")}</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
          {t("testimonials.desc")}
        </p>

        {/* Aggregate rating row */}
        <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl border border-border bg-background/60 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-primary fill-primary" />
              ))}
            </div>
            <span className="font-display font-bold text-foreground">5.0</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="text-sm text-muted-foreground font-mono">
            {testimonials ? `${testimonials.length * 12}+` : "..."}{" "}
            <span className="text-foreground font-medium">{t("testimonials.label")}</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5 text-sm text-secondary">
            <BadgeCheck size={14} />
            <span className="font-mono text-xs">{t("testimonials.verified")}</span>
          </div>
        </div>
      </div>

      {/* Scrolling cards */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        {showSkeletons ? (
          <div className="flex gap-6 px-8 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="overflow-hidden">
            <div className="flex gap-6 px-6 animate-marquee">
              {items.map((item, idx) => (
                <TestimonialCard key={`${item.id}-${idx}`} item={item} t={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

