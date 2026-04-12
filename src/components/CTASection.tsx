import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="section-fade py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.06)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container max-w-2xl text-center relative z-10">
        <div className="p-10 sm:p-14 rounded-3xl border border-border bg-background/50 relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5">
              Start Mining <span className="text-gradient-gold">HMOOB</span> Today
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Join 3,300+ miners already earning daily rewards. Connect your wallet and choose a boost plan to begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://hmoob.io"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 text-lg"
              >
                Launch App <ArrowRight size={20} />
              </a>
              <a
                href="https://hmoob.io/boost"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-8 py-4 rounded-xl font-semibold text-foreground hover:bg-muted/30 transition-all duration-300 text-lg"
              >
                View Boost Plans
              </a>
            </div>
            <p className="text-muted-foreground/60 text-xs mt-8">
              Powered by DannyChain Layer 2 Blockchain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
