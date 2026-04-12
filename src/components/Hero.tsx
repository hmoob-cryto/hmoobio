import logo from "@/assets/logo.jpeg";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(36,90%,55%,0.07)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsla(172,55%,39%,0.05)_0%,_transparent_50%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[150px]" />

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsla(240,10%,20%,0.15)_1px,transparent_1px),linear-gradient(90deg,hsla(240,10%,20%,0.15)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 rounded-full bg-secondary/40 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 left-[25%] w-1 h-1 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "4s" }} />

      <div className="container relative z-10 text-center px-4 pt-16">
        {/* Live mining indicator */}
        <div className="mb-6 animate-fade-up-1">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono text-secondary bg-secondary/[0.06] border border-secondary/15">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/75 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            Live Mining — 3,310+ Active Miners
          </span>
        </div>

        {/* Logo with glow ring */}
        <div className="mb-10 animate-fade-up-1">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150 animate-glow-pulse" />
            <img
              src={logo}
              alt="HMOOB Mining"
              className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full mx-auto ring-2 ring-primary/30 shadow-2xl shadow-primary/20"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="mb-8 animate-fade-up-2">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-medium border border-primary/20 text-primary/90 bg-primary/[0.06] shimmer">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Built on DannyChain × Bitget Wallet
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] mb-8 animate-fade-up-2 tracking-tight">
          Mine <span className="text-gradient-gold">HMOOB</span>
          <br />
          Earn Every Day.
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12 animate-fade-up-3 leading-relaxed">
          Connect via Bitget Wallet, boost your hash rate, and mine HMOOB tokens — no hardware needed. Earn <strong className="text-foreground">365% ROI</strong> over 365 days on the DannyChain ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-4">
          <a
            href="https://hmoob.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden inline-flex items-center justify-center gap-2"
          >
            <span className="relative z-10">Start Mining</span>
            <ArrowRight size={20} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bitkeep.wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-10 py-4 rounded-xl font-semibold text-lg text-foreground hover:bg-muted/30 hover:border-muted-foreground/30 transition-all duration-300"
          >
            <Download size={20} />
            Download Bitget Wallet
          </a>
        </div>

        {/* Trust micro-badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-up-4">
          <span className="text-xs font-mono text-muted-foreground/60 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            365% Annual ROI
          </span>
          <span className="text-xs font-mono text-muted-foreground/60 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-secondary/40" />
            No Hardware Required
          </span>
          <span className="text-xs font-mono text-muted-foreground/60 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            Self-Custodial Wallet
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-up-4">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-muted-foreground/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
