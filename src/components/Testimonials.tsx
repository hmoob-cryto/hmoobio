import { Star, Verified, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Kia Vang",
    role: "Active Miner · Joined Jan 2025",
    quote: "HMOOB Mining made crypto accessible for our community. I bought the Advanced Boost and my balance grows every day. The referral program alone has earned me an extra 120 HMOOB.",
    initials: "KV",
    gradient: "from-primary/20 to-primary/5",
    hashRate: "150 GH/s",
    boostTier: "Advanced",
    verified: true,
  },
  {
    name: "Mailee Xiong",
    role: "Community Builder · 47 Referrals",
    quote: "I love that this platform is built for the Hmong community. The DannyChain ecosystem feels like it's ours. I've already referred 47 friends — each one boosts my hash rate with the 20% referral bonus.",
    initials: "MX",
    gradient: "from-secondary/20 to-secondary/5",
    hashRate: "320 GH/s",
    boostTier: "Professional",
    verified: true,
  },
  {
    name: "Tou Lee",
    role: "Crypto Enthusiast · Since Beta",
    quote: "The 365% ROI over a year is impressive. I verified every transaction on DanScan — fully transparent. The Bitget Wallet integration is smooth and I feel safe knowing my keys are mine.",
    initials: "TL",
    gradient: "from-primary/20 to-secondary/5",
    hashRate: "500 GH/s",
    boostTier: "Enterprise",
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section className="section-fade py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(36,90%,55%,0.03)_0%,_transparent_50%)]" />
      <div className="container text-center relative">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
          <span className="w-8 h-px bg-primary/50" />
          Community
          <span className="w-8 h-px bg-primary/50" />
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-5">
          What Our <span className="text-gradient-gold">Miners Say</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-16">
          Real feedback from verified community members
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="border-glow rounded-2xl p-7 bg-background text-left group transition-all duration-500 hover:-translate-y-1">
              {/* Stars + Verified */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                {t.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-secondary bg-secondary/[0.08] px-2 py-0.5 rounded-full">
                    <Verified size={10} />
                    Verified
                  </span>
                )}
              </div>

              <p className="text-foreground/80 text-sm leading-[1.8] mb-5">"{t.quote}"</p>

              {/* Mining stats */}
              <div className="flex gap-3 mb-5">
                <div className="flex-1 rounded-lg bg-surface p-2.5 text-center">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">Hash Rate</div>
                  <div className="text-sm font-display font-bold text-primary mt-0.5 flex items-center justify-center gap-1">
                    <TrendingUp size={12} />
                    {t.hashRate}
                  </div>
                </div>
                <div className="flex-1 rounded-lg bg-surface p-2.5 text-center">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">Boost</div>
                  <div className="text-sm font-display font-bold mt-0.5">{t.boostTier}</div>
                </div>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-border">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center ring-1 ring-border`}>
                  <span className="text-primary font-display font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-display font-bold text-sm flex items-center gap-1.5">
                    {t.name}
                  </div>
                  <div className="text-muted-foreground text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
