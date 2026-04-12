import logo from "@/assets/logo.jpeg";

export default function About() {
  return (
    <section id="about" className="section-fade py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
      <div className="container max-w-5xl relative">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-primary/50" />
              About HMOOB Mining
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-8 leading-tight">
              The <span className="text-gradient-gold">Hmong Community's</span>
              <br />Own Crypto Token
            </h2>
            <p className="text-muted-foreground text-base leading-[1.8] mb-5">
              HMOOB Mining is a cloud-based mining platform built on the DannyChain Layer 2 blockchain. Users connect through the <strong className="text-foreground">Bitget Wallet</strong> app — a trusted Web3 wallet with 80M+ users — to mine HMOOB tokens by purchasing boost plans and earning daily rewards, all without any physical hardware.
            </p>
            <p className="text-muted-foreground text-base leading-[1.8] mb-5">
              Part of a growing ecosystem that includes DannyChain (Layer 2 blockchain), DanMarket (decentralized marketplace), and the DANNY Exchange — HMOOB Mining represents the Hmong community's entry into Web3 with a platform designed for accessibility and simplicity.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://play.google.com/store/apps/details?id=com.bitkeep.wallet" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-primary hover:text-primary/80 transition-colors border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary/5">
                Bitget Wallet ↗
              </a>
              <a href="https://dannychain.com" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-secondary hover:text-secondary/80 transition-colors border border-secondary/20 px-4 py-2 rounded-lg hover:bg-secondary/5">
                DannyChain ↗
              </a>
              <a href="https://danmarket.io" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-secondary hover:text-secondary/80 transition-colors border border-secondary/20 px-4 py-2 rounded-lg hover:bg-secondary/5">
                DanMarket ↗
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl scale-110" />
              <div className="relative w-64 h-64 rounded-3xl bg-surface-elevated border border-border flex items-center justify-center overflow-hidden">
                <img src={logo} alt="HMOOB Coin" className="w-40 h-40 rounded-full animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
