import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kia Vang",
    role: "Miner since 2025",
    quote: "HMOOB Mining made crypto accessible for our community. I bought the Advanced Boost and my balance grows every day. The referral rewards are a great bonus too!",
    initials: "KV",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    name: "Mailee Xiong",
    role: "Community Builder",
    quote: "I love that this platform is built for the Hmong community. The DannyChain ecosystem feels like it's ours. I've already referred 15 friends and boosted my hash rate significantly.",
    initials: "MX",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    name: "Tou Lee",
    role: "Crypto Enthusiast",
    quote: "The 365% ROI over a year is impressive. The wallet integration is smooth, missions keep things interesting, and I can swap my HMOOB tokens easily through DANNY Exchange.",
    initials: "TL",
    gradient: "from-primary/20 to-secondary/5",
  },
];

export default function Testimonials() {
  return (
    <section className="section-fade py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(36,90%,55%,0.03)_0%,_transparent_50%)]" />
      <div className="container text-center relative">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
          <span className="w-8 h-px bg-primary/50" />
          Testimonials
          <span className="w-8 h-px bg-primary/50" />
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-6">
          What Our <span className="text-gradient-gold">Miners Say</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-16">
          Real feedback from our growing community
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="border-glow rounded-2xl p-7 bg-background text-left group transition-all duration-500 hover:-translate-y-1">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-[1.8] mb-7">"{t.quote}"</p>
              <div className="flex items-center gap-3.5 pt-5 border-t border-border">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center ring-1 ring-border`}>
                  <span className="text-primary font-display font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-display font-bold text-sm">{t.name}</div>
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
