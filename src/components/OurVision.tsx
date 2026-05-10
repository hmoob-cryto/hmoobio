import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sparkles, Target, Rocket, Coins, Pickaxe, ArrowLeftRight, ShoppingBag,
  Home, Bot, Gamepad2, HandCoins, Quote, Flame, Users, HeartHandshake,
  TrendingUp, Gift, Briefcase, Shield, FileText, Download, X,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import visionBg from "@/assets/vision-bg.jpg";

const PDF_URL = "/Hmoob_Project.pdf";

type Locale = "en" | "hmn" | "th";

const T: Record<Locale, Record<string, string>> = {
  en: {
    label: "Project Vision",
    title1: "The Hmoob",
    title2: "Project",
    subtitle:
      "A community-driven crypto ecosystem built for the Hmong people and every entrepreneur worldwide.",
    introLabel: "What is Hmoob Project?",
    intro:
      "Hmoob Project is a collaborative business hub built around the world of digital currencies (cryptocurrencies). It unites the Hmong community and global participants under one online economy.",
    visionLabel: "Our Vision",
    vision:
      "To create an online crypto economy that empowers the Hmong people across the world — and any community that loves digital business — to grow together, learn together, and prosper together.",
    missionLabel: "Our Mission",
    mission:
      "To build a sustainable, long-lasting online ecosystem powered by collective participation — one that lifts every member toward a brighter future.",
    goalLabel: "Our Goal",
    goal:
      "To open digital business opportunities so the Hmong people and the world can join hands, escape poverty, find joy, and grow as wise, prosperous citizens of the modern world.",
    ecosystemLabel: "Building Step by Step",
    ecosystemTitle: "The Hmoob Project Ecosystem",
    ecosystemSubtitle:
      "Each platform is being crafted, one piece at a time, to power a full Hmong-driven crypto economy.",
    coinSpotlight: "HMOOB COIN",
    coinTagline: "The Heart of the Ecosystem",
    coinDesc:
      "HMOOB COIN is the Hmong community's own crypto token, minted on DannyChain Layer 2 in 2026. It powers every product inside Hmoob Project.",
    supplyLabel: "Total Supply",
    chainLabel: "Built On",
    yearLabel: "Launched",
    chainValue: "DannyChain L2",
    distLabel: "Token Allocation",
    distTitle: "How HMOOB COIN is Distributed",
    distSubtitle:
      "A transparent allocation designed to grow the ecosystem, support builders, and uplift those in need.",
  },
  hmn: {
    label: "Lub Zeem Muag",
    title1: "Hmoob",
    title2: "Project",
    subtitle:
      "Lub chaw koom kev lag luam huab cua tsim los rau haiv hmoob thiab tsoom tib neeg thoob qab ntuj.",
    introLabel: "Hmoob Project yog dab tsi?",
    intro:
      "Hmoob Project yog ib lub chaw koom kev lag luam ntau yam sab seem nyiaj huab cua (crypto currencies) — ib lub khw lag luam huab cua sib koom rau haiv hmoob thiab tib neeg ntiaj teb.",
    visionLabel: "Lub Zeem Muag",
    vision:
      "Yog tsim kev lag luam rau peb haiv hmoob nyob thoob lub qab ntuj thiab lwm haiv neeg cov uas nyiam kev lag luam sab huab cua (online), kom muaj kev vam meej thiab kev txawj ntse ib qib zuj zus.",
    missionLabel: "Phiaj Xwm",
    mission:
      "Yuav ua mus kom ntev li ntev tau rau lub neej tom ntej los ntawm kev koom tes txhua leej txhua tus.",
    goalLabel: "Lub Hom Phiaj",
    goal:
      "Tsim kev lag luam sab huab cua kom peb hmoob thiab tib neeg ntiaj teb tau los koom ua tsev neeg, daws txoj kev txom nyem, muaj kev lom zem, muaj yeej, thiab muaj kev txawj ntse caum cuag lub ntiaj teb.",
    ecosystemLabel: "Kev Tsim Kho Ib Kauj Ruam Zuj Zus",
    ecosystemTitle: "Hmoob Project Cov Cuab Yeej",
    ecosystemSubtitle:
      "Txhua lub khiab khw raug tsim ib qib zuj zus los ua kom haiv hmoob muaj kev vam meej sab huab cua.",
    coinSpotlight: "HMOOB COIN",
    coinTagline: "Lub Plawv Ntawm Hmoob Project",
    coinDesc:
      "HMOOB COIN yog hmoob lub npib puav pheej huab cua tsim los ntawm DannyChain Layer 2 xyoo 2026, siv rau txhua yam khiab khw hauv Hmoob Project.",
    supplyLabel: "Tag Nrho",
    chainLabel: "Tsim Saum",
    yearLabel: "Pib Xyoo",
    chainValue: "DannyChain L2",
    distLabel: "Kev Faib Npib",
    distTitle: "HMOOB COIN Faib Li Cas",
    distSubtitle:
      "Faib pom tseeb los txhawb kev tsim kho, pab cov tsim, thiab pab tsoom tib neeg ntsib kev txom nyem.",
  },
  th: {
    label: "วิสัยทัศน์",
    title1: "โครงการ",
    title2: "Hmoob",
    subtitle:
      "ระบบเศรษฐกิจคริปโตที่ขับเคลื่อนโดยชุมชน สร้างขึ้นเพื่อชาวม้งและผู้ประกอบการทั่วโลก",
    introLabel: "Hmoob Project คืออะไร?",
    intro:
      "Hmoob Project คือศูนย์รวมธุรกิจสกุลเงินดิจิทัล (คริปโต) ที่รวมชาวม้งและผู้คนทั่วโลกไว้ภายใต้เศรษฐกิจออนไลน์เดียวกัน",
    visionLabel: "วิสัยทัศน์",
    vision:
      "สร้างเศรษฐกิจคริปโตออนไลน์ที่ส่งเสริมชาวม้งทั่วโลกและทุกชุมชนที่รักธุรกิจดิจิทัล ให้เติบโต เรียนรู้ และรุ่งเรืองไปด้วยกัน",
    missionLabel: "พันธกิจ",
    mission:
      "สร้างระบบนิเวศออนไลน์ที่ยั่งยืนระยะยาว ขับเคลื่อนด้วยการมีส่วนร่วมของทุกคน เพื่อยกระดับชีวิตของสมาชิกทุกคนสู่อนาคตที่สดใส",
    goalLabel: "เป้าหมาย",
    goal:
      "เปิดโอกาสธุรกิจดิจิทัลให้ชาวม้งและคนทั่วโลกได้จับมือกัน ก้าวพ้นความยากจน มีความสุข และเติบโตอย่างชาญฉลาดในโลกยุคใหม่",
    ecosystemLabel: "สร้างทีละขั้นตอน",
    ecosystemTitle: "ระบบนิเวศของ Hmoob Project",
    ecosystemSubtitle:
      "แต่ละแพลตฟอร์มถูกสร้างขึ้นทีละชิ้น เพื่อขับเคลื่อนเศรษฐกิจคริปโตของชาวม้งอย่างเต็มรูปแบบ",
    coinSpotlight: "HMOOB COIN",
    coinTagline: "หัวใจของระบบนิเวศ",
    coinDesc:
      "HMOOB COIN คือโทเคนคริปโตของชุมชนชาวม้ง สร้างบน DannyChain Layer 2 ในปี 2026 และขับเคลื่อนทุกผลิตภัณฑ์ใน Hmoob Project",
    supplyLabel: "ปริมาณทั้งหมด",
    chainLabel: "สร้างบน",
    yearLabel: "เปิดตัว",
    chainValue: "DannyChain L2",
    distLabel: "การจัดสรรโทเคน",
    distTitle: "HMOOB COIN ถูกจัดสรรอย่างไร",
    distSubtitle:
      "การจัดสรรที่โปร่งใส ออกแบบเพื่อขยายระบบนิเวศ สนับสนุนผู้สร้าง และช่วยเหลือผู้ที่ต้องการ",
  },
};

const ECOSYSTEM = [
  { icon: Coins, key: "coin" },
  { icon: Pickaxe, key: "mining" },
  { icon: ArrowLeftRight, key: "dex" },
  { icon: ShoppingBag, key: "market" },
  { icon: Home, key: "estate" },
  { icon: Bot, key: "ai" },
  { icon: Gamepad2, key: "games" },
  { icon: HandCoins, key: "lending" },
];

const ECO_TEXT: Record<Locale, Record<string, { title: string; desc: string }>> = {
  en: {
    coin: { title: "HMOOB COIN", desc: "The native crypto token of the Hmong community." },
    mining: { title: "HMOOB Mining", desc: "Mine HMOOB COIN right from your phone — no hardware needed." },
    dex: { title: "Dandex.io", desc: "A digital asset exchange to swap and trade crypto." },
    market: { title: "Dan Marketplace", desc: "An online marketplace for buying and selling goods." },
    estate: { title: "Dan Real Estate", desc: "A platform to trade property and inherited assets." },
    ai: { title: "AI HMOOB", desc: "AI tools powered by HMOOB COIN to advance the Hmong people." },
    games: { title: "HMOOB Games", desc: "Fun, rewarding games that bring the community together." },
    lending: { title: "Crypto Lending", desc: "Borrow and lend digital currency to grow real-world ventures." },
  },
  hmn: {
    coin: { title: "HMOOB COIN", desc: "Hmoob lub npib puav pheej huab cua." },
    mining: { title: "HMOOB Mining", desc: "Khawb HMOOB COIN hauv xov tooj — tsis tas siv twj." },
    dex: { title: "Dandex.io", desc: "Khw pauv nyiaj huab cua." },
    market: { title: "Dan Marketplace", desc: "Khw yuav muag khoom saum huab cua." },
    estate: { title: "Dan Real Estate", desc: "Khw yuav muag qub txheej qub teg." },
    ai: { title: "AI HMOOB", desc: "AI siv HMOOB COIN rau haiv hmoob vam meej." },
    games: { title: "HMOOB Games", desc: "Cov games lom zem rau tsoom tib neeg." },
    lending: { title: "Khw Qiv Txais", desc: "Qiv txais npib huab cua los koom kev lag luam." },
  },
  th: {
    coin: { title: "HMOOB COIN", desc: "โทเคนคริปโตของชุมชนชาวม้ง" },
    mining: { title: "HMOOB Mining", desc: "ขุด HMOOB COIN ผ่านมือถือ ไม่ต้องใช้ฮาร์ดแวร์" },
    dex: { title: "Dandex.io", desc: "ตลาดแลกเปลี่ยนสินทรัพย์ดิจิทัล" },
    market: { title: "Dan Marketplace", desc: "ตลาดซื้อขายสินค้าออนไลน์" },
    estate: { title: "Dan Real Estate", desc: "แพลตฟอร์มซื้อขายอสังหาริมทรัพย์" },
    ai: { title: "AI HMOOB", desc: "เครื่องมือ AI ที่ขับเคลื่อนด้วย HMOOB COIN" },
    games: { title: "HMOOB Games", desc: "เกมสนุกที่นำรางวัลและรอยยิ้มมาให้ชุมชน" },
    lending: { title: "ตลาดสินเชื่อคริปโต", desc: "กู้และให้ยืมคริปโตเพื่อขยายธุรกิจในชีวิตจริง" },
  },
};

const DIST_TEXT: Record<Locale, Record<string, string>> = {
  en: {
    free: "Free Community Airdrop",
    business: "Business & Ecosystem Use",
    team: "Team & Builders",
    burn: "Burn (Removed Forever)",
    aid: "Aid for People in Need",
    growth: "Growth & Development",
  },
  hmn: {
    free: "Faib Pub Dawb",
    business: "Kev Lag Luam",
    team: "Cov Tuav & Tsim Kho",
    burn: "Hlawv Pov Tseg",
    aid: "Pab Tib Neeg Txom Nyem",
    growth: "Peev Tsim Kho",
  },
  th: {
    free: "แจกฟรีให้ชุมชน",
    business: "ใช้ในธุรกิจและระบบนิเวศ",
    team: "ทีมและผู้สร้าง",
    burn: "เผาทิ้ง (ลดออกถาวร)",
    aid: "ช่วยเหลือผู้ยากไร้",
    growth: "เงินทุนพัฒนา",
  },
};

const DISTRIBUTION = [
  { key: "free", value: 5, color: "#60A5FA", icon: Gift },
  { key: "business", value: 40, color: "#D4A843", icon: Briefcase },
  { key: "team", value: 10, color: "#A78BFA", icon: Users },
  { key: "burn", value: 25, color: "#F87171", icon: Flame },
  { key: "aid", value: 10, color: "#34D399", icon: HeartHandshake },
  { key: "growth", value: 10, color: "#FBBF24", icon: TrendingUp },
];

export default function OurVision() {
  const { locale } = useLanguage();
  const t = T[locale as Locale] || T.en;
  const eco = ECO_TEXT[locale as Locale] || ECO_TEXT.en;
  const dist = DIST_TEXT[locale as Locale] || DIST_TEXT.en;
  const [pdfOpen, setPdfOpen] = useState(false);

  const reviewLabel =
    locale === "hmn" ? "Saib Daim Ntawv" : locale === "th" ? "รีวิวเอกสาร" : "Review Document";
  const downloadLabel =
    locale === "hmn" ? "Download PDF" : locale === "th" ? "ดาวน์โหลด PDF" : "Download PDF";
  const docTitle =
    locale === "hmn" ? "Hmoob Project — Daim Ntawv" : locale === "th" ? "เอกสาร Hmoob Project" : "Hmoob Project Document";

  return (
    <section id="history" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.05] blur-[140px] pointer-events-none" />

      <div className="container max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-px bg-primary/50" />
            {t.label}
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-2 mb-5 leading-tight">
            {t.title1} <span className="text-gradient-gold">{t.title2}</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setPdfOpen(true)}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileText size={18} className="transition-transform group-hover:scale-110" />
              {reviewLabel}
            </button>
            <a
              href={PDF_URL}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border bg-surface/60 text-foreground hover:border-primary/40 hover:bg-surface transition-all duration-300"
            >
              <Download size={18} />
              {downloadLabel}
            </a>
          </div>
        </div>

        <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
          <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 gap-0 bg-surface border-border overflow-hidden flex flex-col">
            <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-border bg-background/50 shrink-0">
              <DialogTitle className="flex items-center gap-2 font-display text-base">
                <FileText size={18} className="text-primary" />
                <span className="text-gradient-gold">{docTitle}</span>
              </DialogTitle>
              <div className="flex items-center gap-2">
                <a
                  href={PDF_URL}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border bg-surface/80 text-foreground hover:border-primary/40 transition-colors"
                >
                  <Download size={14} />
                  {downloadLabel}
                </a>
              </div>
            </div>
            <iframe
              src={`${PDF_URL}#view=FitH`}
              title={docTitle}
              className="flex-1 w-full bg-background"
            />
          </DialogContent>
        </Dialog>

        {/* Intro hero card */}
        <div className="relative rounded-3xl overflow-hidden mb-14 sm:mb-20 border border-border bg-surface/40 backdrop-blur-sm">
          <img src={visionBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/85" />
          <div className="relative p-8 sm:p-14 grid md:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <Sparkles className="text-primary" size={32} />
            </div>
            <div>
              <div className="text-primary font-mono text-xs tracking-widest uppercase mb-3">
                {t.introLabel}
              </div>
              <p className="font-display text-xl sm:text-2xl md:text-3xl leading-[1.5] text-foreground/90">
                {t.intro}
              </p>
            </div>
          </div>
        </div>

        {/* Vision / Mission / Goal cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16 sm:mb-24">
          {[
            { Icon: Sparkles, label: t.visionLabel, body: t.vision, accent: "primary" },
            { Icon: Target, label: t.missionLabel, body: t.mission, accent: "secondary" },
            { Icon: Rocket, label: t.goalLabel, body: t.goal, accent: "primary" },
          ].map((c, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-7 bg-surface/60 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-primary" />
              </div>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  c.accent === "primary"
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-secondary/10 text-secondary border border-secondary/20"
                }`}
              >
                <c.Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 text-gradient-gold">{c.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Ecosystem Grid */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
              <span className="w-6 h-px bg-primary/50" />
              {t.ecosystemLabel}
              <span className="w-6 h-px bg-primary/50" />
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold mb-3">
              {t.ecosystemTitle}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              {t.ecosystemSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ECOSYSTEM.map(({ icon: Icon, key }, i) => {
              const isPrimary = i % 2 === 0;
              return (
                <div
                  key={key}
                  className="group relative rounded-2xl p-5 bg-surface/50 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/[0.05] group-hover:bg-primary/[0.12] transition-colors" />
                  <div
                    className={`relative w-11 h-11 rounded-xl flex items-center justify-center mb-3 border ${
                      isPrimary
                        ? "bg-primary/10 border-primary/25 text-primary"
                        : "bg-secondary/10 border-secondary/25 text-secondary"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="relative font-display font-bold text-sm mb-1.5">
                    {eco[key].title}
                  </div>
                  <div className="relative text-muted-foreground text-xs leading-relaxed">
                    {eco[key].desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HMOOB COIN Spotlight */}
        <div className="relative rounded-3xl overflow-hidden mb-16 sm:mb-20 border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-surface/80 to-secondary/[0.05]">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] tracking-widest uppercase mb-4">
                <Coins size={12} /> {t.coinSpotlight}
              </div>
              <h3 className="font-display text-3xl sm:text-5xl font-bold mb-4 leading-tight">
                <span className="text-gradient-gold">{t.coinTagline}</span>
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">{t.coinDesc}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: t.supplyLabel, value: "999,999,999", sub: "HMOOB" },
                { label: t.chainLabel, value: t.chainValue, sub: "" },
                { label: t.yearLabel, value: "2026", sub: "" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 sm:p-5 bg-background/60 border border-border text-center"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    {s.label}
                  </div>
                  <div className="font-display font-bold text-base sm:text-lg text-gradient-gold leading-tight break-words">
                    {s.value}
                  </div>
                  {s.sub && (
                    <div className="text-[10px] font-mono text-muted-foreground mt-1">{s.sub}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Token Distribution */}
        <div>
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
              <span className="w-6 h-px bg-primary/50" />
              {t.distLabel}
              <span className="w-6 h-px bg-primary/50" />
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold mb-3">{t.distTitle}</h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              {t.distSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-border bg-surface/40 p-6 sm:p-10">
            {/* Pie Chart */}
            <div className="relative h-[320px] sm:h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={DISTRIBUTION}
                    dataKey="value"
                    nameKey="key"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={130}
                    paddingAngle={2}
                    stroke="hsl(var(--background))"
                    strokeWidth={3}
                  >
                    {DISTRIBUTION.map((d) => (
                      <Cell key={d.key} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--surface))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                      fontSize: "12px",
                    }}
                    formatter={(value: number, _n, item: any) => [
                      `${value}%`,
                      dist[item.payload.key],
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {t.supplyLabel}
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-gradient-gold mt-1">
                  100%
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {DISTRIBUTION.map(({ key, value, color, icon: Icon }) => (
                <div
                  key={key}
                  className="group flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-background/40 border border-border hover:border-primary/30 transition-all"
                >
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      background: `${color}1A`,
                      borderColor: `${color}40`,
                      color,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-bold text-sm sm:text-base truncate">
                      {dist[key]}
                    </div>
                    <div className="mt-1.5 h-1.5 rounded-full bg-muted/40 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${value * 2}%`, background: color }}
                      />
                    </div>
                  </div>
                  <div
                    className="font-display font-bold text-lg sm:text-xl shrink-0 tabular-nums"
                    style={{ color }}
                  >
                    {value}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
