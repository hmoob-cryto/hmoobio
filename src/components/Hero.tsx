import logo from "@/assets/logo.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 text-center px-4">
        <div className="mb-8 animate-fade-up-1">
          <img src={logo} alt="Hmong Coin" className="w-28 h-28 rounded-full mx-auto shadow-lg shadow-primary/30 animate-glow-pulse" />
        </div>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up-1">
          Mine Crypto.<br />
          <span className="text-gradient-gold">Earn Daily.</span><br />
          Build Wealth.
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-up-2">
          Join thousands of miners on the Hmoob.io platform — the easiest way to mine cryptocurrency without expensive hardware.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-3">
          <a href="#cta" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:brightness-110 transition shadow-lg shadow-primary/20">
            Start Mining
          </a>
          <a href="#how-it-works" className="border border-border px-8 py-3.5 rounded-lg font-semibold text-lg text-foreground hover:bg-muted/50 transition">
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}
