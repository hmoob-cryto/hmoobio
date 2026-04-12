import { Wallet, Zap, TrendingUp, ArrowRightLeft } from "lucide-react";

const steps = [
  { icon: Wallet, title: "Connect Wallet", desc: "Connect your Web3 wallet to the HMOOB Mining platform. Your HMOOB balance and hash rate are tracked in real time." },
  { icon: Zap, title: "Choose a Boost", desc: "Purchase a Boost plan (from 10 to 1,000 HMOOB) to increase your mining hash rate and start earning 365% ROI over 365 days." },
  { icon: TrendingUp, title: "Mine & Earn", desc: "Your mining runs automatically. Watch your HMOOB balance grow daily. Complete missions and invite friends for bonus rewards." },
  { icon: ArrowRightLeft, title: "Swap & Withdraw", desc: "Swap HMOOB to other tokens via DANNY Exchange or withdraw to your wallet. Full control of your earnings." },
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
          Four Steps to <span className="text-gradient-gold">Mine HMOOB</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.title} className="relative group">
              <div className="relative z-10 flex flex-col items-center p-7 rounded-2xl border border-border bg-background hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-1 h-full">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="font-mono text-[11px] font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full">
                    0{i + 1}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/[0.12] group-hover:border-primary/25 transition-all duration-300">
                  <s.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
