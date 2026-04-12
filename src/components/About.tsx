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
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-8 leading-tight">
              Empowering the <br />
              <span className="text-gradient-gold">Hmong Community</span>
              <br />Through Crypto
            </h2>
            <p className="text-muted-foreground text-base leading-[1.8] mb-5">
              Hmoob.io was born from a simple vision — to bring the power of cryptocurrency mining to the Hmong community and beyond. Founded by a team passionate about financial inclusion, we've built a platform that removes the complexity of crypto mining and makes earning digital assets accessible to everyone.
            </p>
            <p className="text-muted-foreground text-base leading-[1.8]">
              Our mission is to bridge the gap between traditional communities and the decentralized future. Whether you're in Southeast Asia or anywhere in the world, Hmoob.io gives you the tools, education, and infrastructure to participate in the crypto economy.
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl scale-110" />
              <div className="relative w-64 h-64 rounded-3xl bg-surface-elevated border border-border flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Hmong Coin" className="w-40 h-40 rounded-full animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
