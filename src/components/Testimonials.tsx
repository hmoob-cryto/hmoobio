import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kia Vang",
    role: "Miner since 2024",
    quote: "I never thought I could mine crypto without buying expensive equipment. Hmoob.io made it so easy — I earn rewards daily without any hassle.",
    initials: "KV",
  },
  {
    name: "Mailee Xiong",
    role: "Community Leader",
    quote: "This platform has brought our community closer to the world of Web3. The education resources and simple UX make it perfect for beginners.",
    initials: "MX",
  },
  {
    name: "Tou Lee",
    role: "Experienced Trader",
    quote: "The integration with Bitget Wallet is seamless. I can manage my mining rewards and trade all from one ecosystem. Highly recommended.",
    initials: "TL",
  },
];

export default function Testimonials() {
  return (
    <section className="section-fade py-24 bg-surface">
      <div className="container text-center">
        <span className="text-primary font-mono text-sm tracking-wider uppercase">Testimonials</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-16">
          What Our <span className="text-gradient-gold">Miners Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="border-glow rounded-xl p-6 bg-background text-left">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
