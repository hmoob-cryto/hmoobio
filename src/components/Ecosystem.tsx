import { ExternalLink, ShieldCheck, Layers, Smartphone, Check } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, text: "Industry-leading security with MPC technology" },
  { icon: Layers, text: "Support for 100+ blockchains and thousands of dApps" },
  { icon: Smartphone, text: "Seamless mobile experience on iOS and Android" },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-fade py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(172,55%,39%,0.04)_0%,_transparent_50%)]" />
      <div className="container relative">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />
            Ecosystem
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2">
            Powered by <span className="text-gradient-gold">Bitget Wallet</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-muted-foreground text-lg leading-[1.8] mb-8">
              We've partnered with Bitget Wallet — a multi-chain Web3 wallet trusted by over 80 million users worldwide — as our recommended companion wallet for receiving mining rewards.
            </p>
            <div className="space-y-5 mb-10">
              {benefits.map((item) => (
                <div key={item.text} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/15 flex items-center justify-center shrink-0 group-hover:bg-secondary/15 group-hover:border-secondary/25 transition-all duration-300">
                    <item.icon className="text-secondary" size={18} />
                  </div>
                  <span className="text-foreground/90 text-sm leading-relaxed pt-2">{item.text}</span>
                </div>
              ))}
            </div>
            <a
              href="https://web3.bitget.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Download Bitget Wallet <ExternalLink size={15} />
            </a>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl rounded-full" />
            <div className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-surface-elevated to-background border border-border flex items-center justify-center animate-glow-pulse overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_hsla(36,90%,55%,0.08)_0%,_transparent_60%)]" />
              <div className="relative text-center space-y-6">
                <div>
                  <div className="font-display text-6xl font-bold text-gradient-gold">80M+</div>
                  <div className="text-muted-foreground text-sm mt-1 font-medium">Users Worldwide</div>
                </div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />
                <div>
                  <div className="font-display text-3xl font-bold text-gradient-teal">100+</div>
                  <div className="text-muted-foreground text-sm mt-1 font-medium">Chains Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
