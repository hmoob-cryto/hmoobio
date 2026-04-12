import { Check } from "lucide-react";

const boosts = [
  { name: "Starter", hmoob: 10, usd: "0.07", hashRate: "0.12", totalReturn: "46.5" },
  { name: "Advanced", hmoob: 50, usd: "0.37", hashRate: "0.58", totalReturn: "232.5", recommended: true },
  { name: "Elite", hmoob: 100, usd: "0.75", hashRate: "1.16", totalReturn: "465" },
  { name: "Elite Plus", hmoob: 300, usd: "2.24", hashRate: "3.49", totalReturn: "1,395" },
  { name: "Elite Max", hmoob: 500, usd: "3.74", hashRate: "5.81", totalReturn: "2,325" },
  { name: "Ultimate", hmoob: 1000, usd: "7.48", hashRate: "11.63", totalReturn: "4,650" },
];

const benefits = [
  "365% return on investment over 365 days",
  "Boosts stack — purchase multiple boosts",
  "Higher hash rate = faster HMOOB mining",
  "Active for the full 365-day duration",
];

export default function BoostPlans() {
  return (
    <section id="boost" className="section-fade py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(36,90%,55%,0.04)_0%,_transparent_50%)]" />
      <div className="container relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 mx-auto">
            <span className="w-8 h-px bg-primary/50" />
            Mining Boosts
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2">
            Boost Your <span className="text-gradient-gold">Mining Power</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-lg mx-auto">
            Increase your hash rate and earn more HMOOB with our boost plans
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12">
          {boosts.map((b) => (
            <div
              key={b.name}
              className={`relative rounded-2xl p-6 border transition-all duration-500 hover:-translate-y-1 ${
                b.recommended
                  ? "border-primary/40 bg-gradient-to-b from-primary/[0.08] to-surface shadow-lg shadow-primary/10"
                  : "border-border bg-background hover:border-primary/20"
              }`}
            >
              {b.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold font-mono px-3 py-1 rounded-full uppercase tracking-wider">
                    Recommended
                  </span>
                </div>
              )}
              <div className="text-center mb-5">
                <h3 className="font-display text-base font-bold text-muted-foreground mb-1">{b.name} Boost</h3>
                <div className="font-display text-3xl font-bold text-gradient-gold">{b.hmoob.toLocaleString()} <span className="text-lg">HMOOB</span></div>
                <div className="text-muted-foreground text-sm mt-1">~${b.usd}</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Hash Rate</span>
                  <span className="font-mono font-bold text-secondary">+{b.hashRate} GH/s</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Mining Power</span>
                  <span className="font-mono font-bold text-foreground">+365%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Return</span>
                  <span className="font-mono font-bold text-primary">~{b.totalReturn} HMOOB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-mono font-bold text-foreground">365 days</span>
                </div>
              </div>
              <a
                href="https://hmoob.io/boost"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  b.recommended
                    ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Get Boost
              </a>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-3">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
              <Check size={16} className="text-secondary shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
