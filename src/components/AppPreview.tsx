import appMockup from "@/assets/app-mockup.png";
import { Wallet, Users, Home, Zap, Target, ArrowRightLeft, Download, ExternalLink } from "lucide-react";

const navItems = [
  { icon: Wallet, label: "Wallet" },
  { icon: Users, label: "Friends" },
  { icon: Home, label: "Home" },
  { icon: Zap, label: "Boost" },
  { icon: Target, label: "Missions" },
  { icon: ArrowRightLeft, label: "Swap" },
];

export default function AppPreview() {
  return (
    <section className="section-fade py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.04)_0%,_transparent_60%)]" />
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text content */}
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-primary/50" />
              Mobile-First Platform
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-8 leading-tight">
              Mine Anywhere,
              <br />
              <span className="text-gradient-gold">Anytime</span>
            </h2>
            <p className="text-muted-foreground text-base leading-[1.8] mb-4">
              HMOOB Mining works seamlessly through the <strong className="text-foreground">Bitget Wallet</strong> app — a trusted Web3 wallet with 80M+ users worldwide. Simply open hmoob.io inside the wallet's DApp browser to access all features.
            </p>
            <p className="text-muted-foreground text-sm leading-[1.8] mb-8">
              Bitget Wallet provides self-custodial security, multi-chain support, and a built-in DApp browser — making it the perfect gateway to HMOOB Mining and the DannyChain ecosystem.
            </p>

            {/* Feature nav items */}
            <div className="grid grid-cols-3 gap-3">
              {navItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-lg bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href="https://hmoob.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <ExternalLink size={18} />
                Open HMOOB Mining
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bitkeep.wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-8 py-3.5 rounded-xl font-semibold hover:bg-muted/30 hover:border-muted-foreground/30 transition-all duration-300"
              >
                <Download size={18} />
                Get Bitget Wallet
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full scale-75" />
              <img
                src={appMockup}
                alt="HMOOB Mining App"
                className="relative w-[320px] sm:w-[380px] drop-shadow-2xl"
                loading="lazy"
                width={800}
                height={1200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
