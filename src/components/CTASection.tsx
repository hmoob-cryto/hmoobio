import { ArrowRight, Download, Shield } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="section-fade py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.06)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container max-w-3xl text-center relative z-10">
        <div className="p-10 sm:p-14 rounded-3xl border border-border bg-background/50 relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
          <div className="relative">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono text-secondary bg-secondary/[0.06] border border-secondary/15 mb-8">
              <Shield size={12} />
              Secured by DannyChain Layer 2 × Bitget Wallet
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5">
              Start Mining <span className="text-gradient-gold">HMOOB</span> Today
            </h2>
            <p className="text-muted-foreground text-lg mb-5 leading-relaxed">
              Join 3,300+ miners already earning daily rewards with 365% annual ROI.
            </p>
            <p className="text-muted-foreground text-sm mb-10 max-w-lg mx-auto">
              Download Bitget Wallet → Open hmoob.io in DApp browser → Connect wallet → Choose a Boost → Start mining immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://hmoob.io"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 text-lg"
              >
                Launch Mining App <ArrowRight size={20} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bitkeep.wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-8 py-4 rounded-xl font-semibold text-foreground hover:bg-muted/30 transition-all duration-300 text-lg flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Get Bitget Wallet
              </a>
            </div>

            {/* Trust micro-text */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="text-muted-foreground/60 text-xs flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary/50" />
                Self-custodial security
              </span>
              <span className="text-muted-foreground/60 text-xs flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary/50" />
                No hardware needed
              </span>
              <span className="text-muted-foreground/60 text-xs flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary/50" />
                On-chain transparency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
