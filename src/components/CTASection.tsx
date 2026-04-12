import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section id="cta" className="section-fade py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsla(36,90%,55%,0.06)_0%,_transparent_70%)]" />
      <div className="container max-w-2xl text-center relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Ready to Start <span className="text-gradient-gold">Mining?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Join 12,000+ miners earning daily rewards. Enter your email to get started for free.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition shadow-lg shadow-primary/20"
          >
            Get Started <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
