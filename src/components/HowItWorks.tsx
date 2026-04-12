import { UserPlus, Wallet, TrendingUp } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Sign Up", desc: "Create your free account in under 60 seconds. No KYC required to start.", color: "primary" as const },
  { icon: Wallet, title: "Connect Wallet", desc: "Link your Bitget Wallet or any Web3 wallet to receive mining rewards directly.", color: "secondary" as const },
  { icon: TrendingUp, title: "Start Earning", desc: "Choose your mining plan and watch your crypto balance grow every day.", color: "primary" as const },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-fade py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsla(172,55%,39%,0.04)_0%,_transparent_50%)]" />
      <div className="container text-center relative">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
          <span className="w-8 h-px bg-primary/50" />
          How It Works
          <span className="w-8 h-px bg-primary/50" />
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-20">
          Three Steps to <span className="text-gradient-gold">Start Mining</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.title} className="relative group">
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-16 left-[65%] w-[70%] h-px">
                  <div className="w-full h-px bg-gradient-to-r from-border to-border/0" />
                </div>
              )}
              <div className="relative z-10 flex flex-col items-center p-8 rounded-2xl border border-border bg-background hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-1">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="font-mono text-[11px] font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full">
                    0{i + 1}
                  </span>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/[0.12] group-hover:border-primary/25 transition-all duration-300">
                  <s.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[260px]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
