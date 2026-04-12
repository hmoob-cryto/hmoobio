import { Quote } from "lucide-react";

export default function Vision() {
  return (
    <section className="section-fade py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.04)_0%,_transparent_60%)]" />
      <div className="container max-w-4xl text-center relative">
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-8 mx-auto">
          <span className="w-8 h-px bg-primary/50" />
          Our Vision
          <span className="w-8 h-px bg-primary/50" />
        </span>
        <div className="relative p-10 sm:p-16 rounded-3xl border border-border bg-surface/50">
          <div className="absolute top-8 left-8 sm:top-10 sm:left-10">
            <Quote className="text-primary/15" size={56} />
          </div>
          <blockquote className="relative font-display text-xl sm:text-2xl lg:text-3xl font-medium leading-[1.6] text-foreground/85 italic pt-8">
            "We believe that every person — regardless of location, background, or technical skill — deserves access to the financial tools of tomorrow. Hmoob.io isn't just a mining platform; it's a movement to democratize wealth creation through blockchain technology."
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <div>
              <div className="text-gradient-gold font-display font-bold text-lg">The Hmoob.io Team</div>
              <div className="text-muted-foreground text-sm">Founders & Builders</div>
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
