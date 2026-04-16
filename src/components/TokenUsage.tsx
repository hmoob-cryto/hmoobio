import { Pickaxe, ArrowRightLeft, Wallet, Zap, Globe, Users, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const platforms = [
  {
    name: "hmoob.io",
    type: "Mining & Boost",
    url: "https://hmoob.io",
    icon: Pickaxe,
    descEn: "Mine HMOOB tokens via cloud mining. Choose a boost plan to increase your hash rate and earn more tokens daily.",
    descHmn: "Mine HMOOB tokens los ntawm cloud mining. Xaiv ib qho boost plan los nce koj hash rate thiab tau ntau tokens txhua hnub.",
    descTh: "ขุด HMOOB token ผ่าน Cloud Mining เลือกแผน Boost เพื่อเพิ่ม hash rate และรับ token มากขึ้นทุกวัน",
    gradient: "from-primary/20 to-amber-500/10",
  },
  {
    name: "DanDex.io",
    type: "DEX Trading",
    url: "https://dandex.io",
    icon: ArrowRightLeft,
    descEn: "Swap HMOOB for other tokens on Danny Chain's decentralized exchange. Trade DAN, USDT, and more with low fees.",
    descHmn: "Swap HMOOB rau lwm cov tokens ntawm Danny Chain decentralized exchange. Trade DAN, USDT, thiab ntau ntxiv nrog nqi qis.",
    descTh: "แลกเปลี่ยน HMOOB กับ token อื่นบน DEX ของ Danny Chain เทรด DAN, USDT และอื่นๆ ด้วยค่าธรรมเนียมต่ำ",
    gradient: "from-blue-500/15 to-primary/10",
  },
  {
    name: "DanScan.io",
    type: "Block Explorer",
    url: "https://danscan.io",
    icon: Globe,
    descEn: "Track all HMOOB transactions, verify wallet balances, and explore Danny Chain's 665K+ blocks and 105K+ addresses.",
    descHmn: "Taug qab txhua HMOOB transactions, txheeb xyuas wallet balances, thiab tshawb Danny Chain 665K+ blocks thiab 105K+ addresses.",
    descTh: "ติดตามทุกธุรกรรม HMOOB ตรวจสอบยอดกระเป๋า และสำรวจ Danny Chain ที่มี 665K+ blocks และ 105K+ addresses",
    gradient: "from-emerald-500/15 to-primary/10",
  },
];

const wallets = [
  { name: "Bitget Wallet", downloads: "10M+", rating: "4.5", url: "https://play.google.com/store/apps/details?id=com.bitkeep.wallet" },
  { name: "TokenPocket", downloads: "10M+", rating: "4.4", url: "https://play.google.com/store/apps/details?id=vip.mytokenpocket" },
  { name: "SafePal", downloads: "10M+", rating: "4.6", url: "https://play.google.com/store/apps/details?id=io.safepal.wallet" },
];

export default function TokenUsage() {
  const { locale } = useLanguage();

  const sectionTitle =
    locale === "hmn" ? "Tsim & Siv HMOOB Token" : locale === "th" ? "การสร้างและการใช้ HMOOB Token" : "Create & Use HMOOB Token";
  const sectionLabel =
    locale === "hmn" ? "HMOOB Ecosystem" : locale === "th" ? "ระบบนิเวศ HMOOB" : "HMOOB Ecosystem";
  const sectionSubtitle =
    locale === "hmn"
      ? "Kawm paub txog txoj kev mine, trade, thiab siv HMOOB token hauv Danny Chain ecosystem"
      : locale === "th"
        ? "เรียนรู้วิธีขุด แลกเปลี่ยน และใช้ HMOOB token ในระบบนิเวศ Danny Chain"
        : "Learn how to mine, trade, and use HMOOB token across the Danny Chain ecosystem";
  const walletsTitle =
    locale === "hmn" ? "Cov Wallets Uas Siv Tau" : locale === "th" ? "กระเป๋าเงินที่รองรับ" : "Compatible Wallets";
  const walletsDesc =
    locale === "hmn"
      ? "Khaws koj HMOOB tokens ruaj ntseg hauv cov wallets no"
      : locale === "th"
        ? "เก็บ HMOOB token ของคุณอย่างปลอดภัยในกระเป๋าเงินเหล่านี้"
        : "Store your HMOOB tokens securely in these trusted wallets";

  const getDesc = (p: (typeof platforms)[0]) =>
    locale === "hmn" ? p.descHmn : locale === "th" ? p.descTh : p.descEn;

  return (
    <section id="token-usage" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.03] blur-[150px]" />
      <div className="container max-w-5xl relative">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-primary/50" />
            {sectionLabel}
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-4">
            {sectionTitle.split("HMOOB")[0]}
            <span className="text-gradient-gold">HMOOB Token</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">{sectionSubtitle}</p>
        </div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-glow rounded-2xl p-6 bg-surface/80 hover:bg-surface transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-4`}>
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-base">{p.name}</h3>
                  <ExternalLink size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20 inline-block mb-3">
                  {p.type}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">{getDesc(p)}</p>
              </a>
            );
          })}
        </div>

        {/* Wallet section */}
        <div className="border-glow rounded-2xl p-6 sm:p-8 bg-surface/50">
          <div className="flex items-center gap-3 mb-2">
            <Wallet size={20} className="text-primary" />
            <h3 className="font-display font-bold text-xl">{walletsTitle}</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-6">{walletsDesc}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {wallets.map((w) => (
              <a
                key={w.name}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center shrink-0">
                  <Wallet size={18} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-sm">{w.name}</div>
                  <div className="text-[11px] text-muted-foreground">
                    ⭐ {w.rating} · {w.downloads} downloads
                  </div>
                </div>
                <ExternalLink size={14} className="text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
