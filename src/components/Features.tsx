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
    <section id="features" className="section-fade py-24">
      <div className="container text-center">
        <span className="text-primary font-mono text-sm tracking-wider uppercase">Features</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-16">
          Everything You Need to <span className="text-gradient-gold">Mine Smarter</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="border-glow rounded-xl p-6 bg-surface text-left group transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
