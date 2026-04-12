import { Zap, Smartphone, Users, Target, ArrowRightLeft, Shield } from "lucide-react";

const features = [
  { icon: Zap, title: "Mining Power Boosts", desc: "Choose from 6 boost tiers (10–1,000 HMOOB) to increase your GH/s hash rate and earn 365% ROI over 365 days." },
  { icon: Smartphone, title: "Bitget Wallet Integration", desc: "Connect through the Bitget Wallet app — a trusted Web3 wallet with 80M+ users, built-in DApp browser, and self-custodial security." },
  { icon: Users, title: "Referral Program", desc: "Invite friends and earn 20% bonus plus GH/s hash rate boosts. The more friends join, the faster you mine." },
  { icon: Target, title: "Daily Missions", desc: "Complete tasks and challenges to earn additional HMOOB rewards. New missions available regularly." },
  { icon: ArrowRightLeft, title: "Token Swap", desc: "Swap HMOOB tokens seamlessly via the integrated DANNY Exchange — powered by DannyChain Layer 2." },
  { icon: Shield, title: "DannyChain Security", desc: "Built on DannyChain — an EVM-compatible Layer 2 blockchain with Ethereum-grade security and low fees." },
];

export default function Features() {
  return (
    <section id="features" className="section-fade py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.03] blur-[120px]" />
      <div className="container text-center relative">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
          <span className="w-8 h-px bg-primary/50" />
          Platform Features
          <span className="w-8 h-px bg-primary/50" />
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-6">
          Everything in <span className="text-gradient-gold">One Platform</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-16">
          Mine, earn, swap, and grow your HMOOB portfolio
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="group border-glow rounded-2xl p-7 bg-surface text-left transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/[0.15] group-hover:border-primary/25 transition-all duration-300">
                <f.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2.5">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.7]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
