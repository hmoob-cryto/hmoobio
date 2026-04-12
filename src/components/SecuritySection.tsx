import { Shield, Lock, Eye, Server, KeyRound, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Self-Custodial Security",
    desc: "Your private keys stay in your Bitget Wallet — only you control your funds. No centralized custody risk.",
  },
  {
    icon: Shield,
    title: "DannyChain Layer 2 Protection",
    desc: "Built on DannyChain — an EVM-compatible Layer 2 blockchain inheriting Ethereum's battle-tested security model.",
  },
  {
    icon: Eye,
    title: "Transparent & Verifiable",
    desc: "All transactions are publicly verifiable on DanScan explorer. Every boost purchase and reward distribution is on-chain.",
  },
  {
    icon: Server,
    title: "Decentralized Infrastructure",
    desc: "No single point of failure. Mining operations run on decentralized smart contracts that execute automatically.",
  },
  {
    icon: KeyRound,
    title: "Secure Wallet Connection",
    desc: "Connect through Bitget Wallet's DApp browser with industry-standard Web3 protocols. No password sharing required.",
  },
  {
    icon: FileCheck,
    title: "Smart Contract Audited",
    desc: "Mining and reward distribution smart contracts are community-reviewed and deployed on the immutable DannyChain blockchain.",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="section-fade py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsla(172,55%,39%,0.04)_0%,_transparent_50%)]" />
      <div className="container relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-secondary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-secondary/50" />
            Security & Trust
            <span className="w-8 h-px bg-secondary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-5">
            Your Assets, <span className="text-gradient-teal">Your Control</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with industry-leading security practices — because trust is earned, not assumed
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {securityFeatures.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl p-7 bg-surface border border-border hover:border-secondary/20 text-left transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/[0.08] border border-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/[0.15] group-hover:border-secondary/25 transition-all duration-300">
                <f.icon className="text-secondary" size={26} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2.5">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.7]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Verify CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://danscan.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-secondary hover:text-secondary/80 transition-colors border border-secondary/20 px-6 py-3 rounded-xl hover:bg-secondary/5"
          >
            <Eye size={16} />
            Verify on DanScan Explorer ↗
          </a>
        </div>
      </div>
    </section>
  );
}
