import { useLanguage } from "@/contexts/LanguageContext";
import { Pickaxe, Coins } from "lucide-react";

interface SectionDividerProps {
  variant: "mining" | "coin";
  id?: string;
}

const COPY = {
  mining: {
    icon: Pickaxe,
    label: { en: "PART 01", hmn: "FEEM 01", th: "ส่วนที่ 01" },
    title: { en: "HMOOB Mining", hmn: "HMOOB Mining", th: "HMOOB Mining" },
    subtitle: {
      en: "The cloud mining platform — boost your hash rate and earn HMOOB tokens daily",
      hmn: "Lub platform mining hauv huab — txhawb koj tus hash rate thiab khwv HMOOB tokens txhua hnub",
      th: "แพลตฟอร์มขุดบนคลาวด์ — เพิ่มอัตราแฮชและรับเหรียญ HMOOB ทุกวัน",
    },
  },
  coin: {
    icon: Coins,
    label: { en: "PART 02", hmn: "FEEM 02", th: "ส่วนที่ 02" },
    title: { en: "HMOOB Coin", hmn: "HMOOB Coin", th: "HMOOB Coin" },
    subtitle: {
      en: "The token itself — tokenomics, supply, utility and the Danny Chain ecosystem",
      hmn: "Tus token — tokenomics, supply, kev siv thiab Danny Chain ecosystem",
      th: "ตัวเหรียญ — โทเคโนมิกส์ ปริมาณ การใช้งาน และระบบนิเวศ Danny Chain",
    },
  },
};

export default function SectionDivider({ variant, id }: SectionDividerProps) {
  const { locale } = useLanguage();
  const cfg = COPY[variant];
  const Icon = cfg.icon;

  return (
    <section id={id} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-primary/[0.05] blur-[120px]" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Top rule */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-primary uppercase">
              {cfg.label[locale]}
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Icon badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)] mb-6">
            <Icon size={32} className="text-primary" />
          </div>

          {/* Title */}
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gradient-gold">{cfg.title[locale]}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground text-base sm:text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            {cfg.subtitle[locale]}
          </p>

          {/* Bottom decorative line */}
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
