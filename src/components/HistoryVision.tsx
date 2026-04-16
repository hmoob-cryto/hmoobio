import { History, Target, Blocks, Globe, Pickaxe, Rocket, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const timelineItems = [
  {
    icon: Blocks,
    titleEn: "Danny Chain Founded",
    titleHmn: "Tsim Danny Chain",
    titleTh: "ก่อตั้ง Danny Chain",
    descEn: "Danny Chain — an EVM-compatible Layer-1 blockchain — was created to provide fast, low-cost transactions with 10-second block times and minimal gas fees.",
    descHmn: "Danny Chain — ib lub Layer-1 blockchain uas siv tau EVM — tau tsim los muab kev xa nyiaj ceev, nqi qis nrog 10-vib block thiab nqi gas tsawg.",
    descTh: "Danny Chain — บล็อกเชน Layer-1 ที่รองรับ EVM — ถูกสร้างขึ้นเพื่อให้ทำธุรกรรมเร็ว ค่าใช้จ่ายต่ำ ด้วย block time 10 วินาทีและค่า gas ต่ำ",
    status: "done" as const,
  },
  {
    icon: Globe,
    titleEn: "DanScan & DanDex Launch",
    titleHmn: "Tso DanScan & DanDex",
    titleTh: "เปิดตัว DanScan & DanDex",
    descEn: "DanScan.io — the official block explorer with 665K+ blocks and 105K+ wallets — launched alongside DanDex.io, a decentralized exchange for trading tokens on Danny Chain.",
    descHmn: "DanScan.io — lub official block explorer nrog 665K+ blocks thiab 105K+ wallets — tau tso tawm nrog DanDex.io, ib lub decentralized exchange rau kev trade tokens ntawm Danny Chain.",
    descTh: "DanScan.io — block explorer อย่างเป็นทางการที่มี 665K+ blocks และ 105K+ wallets — เปิดตัวพร้อมกับ DanDex.io ตลาดแลกเปลี่ยนแบบกระจายศูนย์สำหรับ Danny Chain",
    status: "done" as const,
  },
  {
    icon: Pickaxe,
    titleEn: "HMOOB Token Mining Begins",
    titleHmn: "Pib Mining HMOOB Token",
    titleTh: "เริ่มขุด HMOOB Token",
    descEn: "HMOOB token — built on Danny Chain — launched at hmoob.io with cloud mining, boost plans, and a referral system to grow the Hmong crypto community worldwide.",
    descHmn: "HMOOB token — ua haujlwm ntawm Danny Chain — tau tso tawm ntawm hmoob.io nrog kev mining hauv huab, boost plans, thiab referral system los loj hlob Hmoob crypto community thoob ntiaj teb.",
    descTh: "HMOOB token — สร้างบน Danny Chain — เปิดตัวที่ hmoob.io พร้อมระบบขุดแบบ Cloud, แผน Boost และระบบ Referral เพื่อขยายชุมชนคริปโตม้ง",
    status: "current" as const,
  },
  {
    icon: Rocket,
    titleEn: "Global Expansion & Partnerships",
    titleHmn: "Nthuav Dav Thoob Ntiaj Teb",
    titleTh: "ขยายตัวระดับโลกและพันธมิตร",
    descEn: "Partnering with leading wallets — Bitget Wallet, TokenPocket, and SafePal — each with 10M+ downloads, enabling HMOOB holders to manage their tokens securely across multiple platforms.",
    descHmn: "Koom tes nrog cov wallets loj — Bitget Wallet, TokenPocket, thiab SafePal — txhua lub muaj 10M+ downloads, pab HMOOB holders tswj lawv cov tokens ruaj ntseg ntawm ntau lub platforms.",
    descTh: "ร่วมมือกับกระเป๋าเงินชั้นนำ — Bitget Wallet, TokenPocket และ SafePal — แต่ละตัวมี 10M+ downloads ช่วยให้ผู้ถือ HMOOB จัดการ token ได้อย่างปลอดภัยบนหลายแพลตฟอร์ม",
    status: "upcoming" as const,
  },
];

export default function HistoryVision() {
  const { locale } = useLanguage();

  const getTitle = (item: (typeof timelineItems)[0]) =>
    locale === "hmn" ? item.titleHmn : locale === "th" ? item.titleTh : item.titleEn;
  const getDesc = (item: (typeof timelineItems)[0]) =>
    locale === "hmn" ? item.descHmn : locale === "th" ? item.descTh : item.descEn;

  const sectionTitle =
    locale === "hmn" ? "Keeb Kwm & Yav Tom Ntej" : locale === "th" ? "ประวัติศาสตร์และวิสัยทัศน์" : "History & Vision";
  const sectionLabel =
    locale === "hmn" ? "Peb Txoj Kev Taug" : locale === "th" ? "เส้นทางของเรา" : "Our Journey";
  const sectionSubtitle =
    locale === "hmn"
      ? "Los ntawm Danny Chain mus txog HMOOB Token — saib peb txoj kev loj hlob"
      : locale === "th"
        ? "จาก Danny Chain สู่ HMOOB Token — ดูเส้นทางการเติบโตของเรา"
        : "From Danny Chain to HMOOB Token — follow our path of growth";

  return (
    <section id="history" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[150px]" />
      <div className="container max-w-5xl relative">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-primary/50" />
            {sectionLabel}
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 mb-4">
            {sectionTitle.split("&")[0]}
            <span className="text-gradient-gold">&{sectionTitle.split("&")[1] || " Vision"}</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">{sectionSubtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-10">
            {timelineItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative flex gap-6 sm:gap-8">
                  {/* Dot */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border-2 transition-all ${
                        item.status === "done"
                          ? "bg-secondary/10 border-secondary/30 text-secondary"
                          : item.status === "current"
                            ? "bg-primary/10 border-primary/30 text-primary ring-4 ring-primary/10"
                            : "bg-muted/30 border-border text-muted-foreground"
                      }`}
                    >
                      <Icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1 sm:pt-3">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display font-bold text-lg sm:text-xl">{getTitle(item)}</h3>
                      {item.status === "current" && (
                        <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20 animate-pulse">
                          {locale === "hmn" ? "Tam sim no" : locale === "th" ? "ปัจจุบัน" : "NOW"}
                        </span>
                      )}
                      {item.status === "done" && (
                        <span className="text-[10px] font-mono bg-secondary/10 text-secondary px-2 py-0.5 rounded-full border border-secondary/20">✓</span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{getDesc(item)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
