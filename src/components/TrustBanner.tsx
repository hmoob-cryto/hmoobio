import { Shield, Lock, Globe, Verified } from "lucide-react";

const partners = [
  { name: "Bitget Wallet", desc: "80M+ Users", url: "https://web3.bitget.com" },
  { name: "DannyChain", desc: "Layer 2 Blockchain", url: "https://dannychain.com" },
  { name: "DANNY Exchange", desc: "Decentralized DEX", url: "https://hmoob.io/swap" },
  { name: "DanMarket", desc: "Web3 Marketplace", url: "https://danmarket.io" },
];

const trustPoints = [
  { icon: Shield, text: "Smart Contract Verified" },
  { icon: Lock, text: "Self-Custodial Wallet" },
  { icon: Globe, text: "EVM Compatible" },
  { icon: Verified, text: "Community Audited" },
];

export default function TrustBanner() {
  return (
    <section className="section-fade relative border-b border-border bg-background py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.02)_0%,_transparent_70%)]" />
      <div className="container relative">
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10">
          {trustPoints.map((t) => (
            <div key={t.text} className="flex items-center gap-2 text-muted-foreground">
              <t.icon size={16} className="text-primary/70" />
              <span className="text-xs font-mono tracking-wide uppercase">{t.text}</span>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center mb-6">
          <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">Powered By & Integrated With</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-surface hover:border-primary/20 hover:bg-surface-elevated transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                <span className="text-primary font-display font-bold text-xs">{p.name.charAt(0)}</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-display font-bold group-hover:text-primary transition-colors">{p.name}</div>
                <div className="text-[10px] text-muted-foreground font-mono">{p.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
