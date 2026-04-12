import { ExternalLink, ShieldCheck, Layers, Smartphone } from "lucide-react";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-fade py-24 bg-surface">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Ecosystem</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
            Powered by <span className="text-gradient-gold">Bitget Wallet</span>
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We've partnered with Bitget Wallet — a multi-chain Web3 wallet trusted by over 80 million users worldwide — as our recommended companion wallet for receiving mining rewards.
            </p>
            <div className="space-y-4">
              {[
                { icon: ShieldCheck, text: "Industry-leading security with MPC technology" },
                { icon: Layers, text: "Support for 100+ blockchains and thousands of dApps" },
                { icon: Smartphone, text: "Seamless mobile experience on iOS and Android" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon className="text-secondary mt-0.5 shrink-0" size={20} />
                  <span className="text-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <a
              href="https://web3.bitget.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:brightness-110 transition"
            >
              Download Bitget Wallet <ExternalLink size={16} />
            </a>
          </div>
          <div className="relative flex justify-center">
            <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center animate-glow-pulse">
              <div className="text-center">
                <div className="font-display text-5xl font-bold text-gradient-gold mb-2">80M+</div>
                <div className="text-muted-foreground text-sm">Users Worldwide</div>
                <div className="font-display text-2xl font-bold text-secondary mt-4">100+</div>
                <div className="text-muted-foreground text-sm">Chains Supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
