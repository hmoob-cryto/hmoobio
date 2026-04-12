import { ExternalLink, Blocks, ArrowRightLeft, ShoppingBag, Search } from "lucide-react";

const ecosystemItems = [
  {
    name: "DannyChain",
    desc: "Layer 2 EVM-compatible blockchain with Ethereum security, low fees, and massive scale.",
    url: "https://dannychain.com",
    icon: Blocks,
  },
  {
    name: "DANNY Exchange",
    desc: "Swap HMOOB and other DannyChain tokens seamlessly through the integrated DEX.",
    url: "https://hmoob.io/swap",
    icon: ArrowRightLeft,
  },
  {
    name: "DanMarket",
    desc: "Decentralized marketplace for trading digital assets within the DannyChain ecosystem.",
    url: "https://danmarket.io",
    icon: ShoppingBag,
  },
  {
    name: "DanScan Explorer",
    desc: "View all transactions, blocks, and smart contracts on the DannyChain blockchain.",
    url: "https://danscan.io",
    icon: Search,
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-fade py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(172,55%,39%,0.04)_0%,_transparent_50%)]" />
      <div className="container relative">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />
            Ecosystem
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2">
            The <span className="text-gradient-gold">DannyChain</span> Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            HMOOB Mining is part of a complete blockchain ecosystem — from Layer 2 infrastructure to decentralized trading
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ecosystemItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-glow rounded-2xl p-7 bg-surface flex gap-5 items-start transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/15 flex items-center justify-center shrink-0 group-hover:bg-secondary/15 group-hover:border-secondary/25 transition-all duration-300">
                <item.icon className="text-secondary" size={22} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-base font-bold">{item.name}</h3>
                  <ExternalLink size={13} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
