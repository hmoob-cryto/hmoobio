import { Quote } from "lucide-react";

export default function Vision() {
  return (
    <section className="section-fade py-24">
      <div className="container max-w-4xl text-center">
        <span className="text-primary font-mono text-sm tracking-wider uppercase">Our Vision</span>
        <div className="mt-10 relative">
          <Quote className="text-primary/20 mx-auto mb-6" size={48} />
          <blockquote className="font-display text-2xl sm:text-3xl font-medium leading-relaxed text-foreground/90 italic">
            "We believe that every person — regardless of location, background, or technical skill — deserves access to the financial tools of tomorrow. Hmoob.io isn't just a mining platform; it's a movement to democratize wealth creation through blockchain technology."
          </blockquote>
          <div className="mt-8">
            <div className="text-gradient-gold font-semibold text-lg">The Hmoob.io Team</div>
            <div className="text-muted-foreground text-sm">Founders & Builders</div>
          </div>
        </div>
      </div>
    </section>
  );
}
