import { UserPlus, Wallet, TrendingUp } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Sign Up", desc: "Create your free account in under 60 seconds. No KYC required to start." },
  { icon: Wallet, title: "Connect Wallet", desc: "Link your Bitget Wallet or any Web3 wallet to receive mining rewards directly." },
  { icon: TrendingUp, title: "Start Earning", desc: "Choose your mining plan and watch your crypto balance grow every day." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-fade py-24 bg-surface">
      <div className="container text-center">
        <span className="text-primary font-mono text-sm tracking-wider uppercase">How It Works</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-16">
          Three Steps to <span className="text-gradient-gold">Start Mining</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.title} className="relative group">
              {i < 2 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t border-dashed border-muted-foreground/30" />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                  <s.icon className="text-primary" size={36} />
                </div>
                <span className="font-mono text-xs text-muted-foreground mb-2">Step {i + 1}</span>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
