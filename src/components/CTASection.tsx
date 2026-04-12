import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" className="section-fade py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(36,90%,55%,0.06)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container max-w-2xl text-center relative z-10">
        <div className="p-10 sm:p-14 rounded-3xl border border-border bg-background/50 relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5">
              Ready to Start <span className="text-gradient-gold">Mining?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Join 12,000+ miners earning daily rewards. Enter your email to get started for free.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3.5 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Get Started <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-secondary font-semibold animate-fade-up-1">
                <CheckCircle2 size={22} />
                <span>Thank you! We'll be in touch soon.</span>
              </div>
            )}
            <p className="text-muted-foreground/60 text-xs mt-6">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
