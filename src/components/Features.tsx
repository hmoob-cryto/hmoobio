import { Shield, Zap, Globe, BarChart3, Smartphone, Users } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant Mining", desc: "Start mining immediately after sign-up. No hardware setup or downloads required." },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and multi-layer security protect your assets 24/7." },
  { icon: Globe, title: "Multi-Chain Support", desc: "Mine across 35+ blockchains including Bitcoin, Ethereum, Solana, and more." },
  { icon: BarChart3, title: "Real-Time Dashboard", desc: "Track your earnings, hash rate, and portfolio performance in real time." },
  { icon: Smartphone, title: "Mobile Optimized", desc: "Manage your mining operations on the go with our mobile-first platform." },
  { icon: Users, title: "Referral Rewards", desc: "Earn bonus rewards by inviting friends and growing your mining network." },
];

export default function Features() {
  return (
    <section id="features" className="section-fade py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.03] blur-[120px]" />
      <div className="container text-center relative">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
          <span className="w-8 h-px bg-primary/50" />
          Features
          <span className="w-8 h-px bg-primary/50" />
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-6">
          Everything You Need to <span className="text-gradient-gold">Mine Smarter</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-16">
          Powerful tools designed for miners of all experience levels
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((f, i) => (
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
