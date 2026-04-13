import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Locale = "en" | "hmn";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.howItWorks": "How It Works",
    "nav.features": "Features",
    "nav.security": "Security",
    "nav.boostPlans": "Boost Plans",
    "nav.ecosystem": "Ecosystem",
    "nav.faq": "FAQ",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.live": "Live Mining — 3,310+ Active Miners",
    "hero.badge": "Built on DannyChain × Bitget Wallet",
    "hero.title1": "Mine",
    "hero.title2": "HMOOB",
    "hero.title3": "Earn Every Day.",
    "hero.desc": "Connect via Bitget Wallet, boost your hash rate, and mine HMOOB tokens — no hardware needed. Earn",
    "hero.roi": "365% ROI",
    "hero.descEnd": "over 365 days on the DannyChain ecosystem.",
    "hero.startMining": "Start Mining",
    "hero.downloadWallet": "Download Bitget Wallet",
    "hero.annualRoi": "365% Annual ROI",
    "hero.noHardware": "No Hardware Required",
    "hero.selfCustodial": "Self-Custodial Wallet",

    // Trust Banner
    "trust.poweredBy": "Powered By & Integrated With",

    // About
    "about.label": "About HMOOB Mining",
    "about.title1": "The",
    "about.title2": "Hmong Community's",
    "about.titleEnd": "Own Crypto Token",
    "about.p1": "HMOOB Mining is a cloud-based mining platform built on the DannyChain Layer 2 blockchain. Users connect through the",
    "about.bitget": "Bitget Wallet",
    "about.p1End": "app — a trusted Web3 wallet with 80M+ users — to mine HMOOB tokens by purchasing boost plans and earning daily rewards, all without any physical hardware.",
    "about.p2": "Part of a growing ecosystem that includes DannyChain (Layer 2 blockchain), DanDEX (decentralized exchange), DanMarket (decentralized marketplace), and DanScan (blockchain explorer) — HMOOB Mining represents the Hmong community's entry into Web3 with a platform designed for accessibility and simplicity.",

    // App Preview
    "appPreview.label": "Mobile-First Platform",
    "appPreview.title1": "Mine Anywhere,",
    "appPreview.title2": "Anytime",
    "appPreview.desc": "HMOOB Mining works seamlessly through the",
    "appPreview.descEnd": "app — a trusted Web3 wallet with 80M+ users worldwide. Simply open hmoob.io inside the wallet's DApp browser to access all features.",
    "appPreview.desc2": "Bitget Wallet provides self-custodial security, multi-chain support, and a built-in DApp browser — making it the perfect gateway to HMOOB Mining and the DannyChain ecosystem.",
    "appPreview.openApp": "Open HMOOB Mining",
    "appPreview.getWallet": "Get Bitget Wallet",
    "appPreview.hmoobDesc": "Cloud mining — boost hash rate, earn daily HMOOB rewards",
    "appPreview.dandexDesc": "Decentralized exchange — swap tokens, provide liquidity, live charts",
    "appPreview.danscanDesc": "Blockchain explorer — track transactions, blocks, wallets & gas",
    "appPreview.compatibleWallets": "Compatible Wallets",

    // How It Works
    "howItWorks.label": "How It Works",
    "howItWorks.title1": "Four Steps to",
    "howItWorks.title2": "Mine HMOOB",
    "howItWorks.cta": "Get it on Google Play",
    "howItWorks.wallet": "Bitget Wallet",

    // Features
    "features.label": "Platform Features",
    "features.title1": "Everything in",
    "features.title2": "One Platform",
    "features.desc": "Mine, earn, swap, and grow your HMOOB portfolio",

    // Security
    "security.label": "Security & Trust",
    "security.title1": "Your Assets,",
    "security.title2": "Your Control",
    "security.desc": "Built with industry-leading security practices — because trust is earned, not assumed",
    "security.verify": "Verify on DanScan Explorer ↗",

    // Boost Plans
    "boost.label": "Mining Boosts",
    "boost.title1": "Boost Your",
    "boost.title2": "Mining Power",
    "boost.desc": "Increase your hash rate and earn more HMOOB with our boost plans",
    "boost.recommended": "Recommended",
    "boost.suffix": "Boost",
    "boost.hashRate": "Hash Rate",
    "boost.miningPower": "Mining Power",
    "boost.totalReturn": "Total Return",
    "boost.duration": "Duration",
    "boost.days": "365 days",
    "boost.getBoost": "Get Boost",

    // Ecosystem
    "ecosystem.label": "Ecosystem",
    "ecosystem.title1": "The",
    "ecosystem.title2": "DannyChain",
    "ecosystem.titleEnd": "Ecosystem",
    "ecosystem.desc": "HMOOB Mining is part of a complete blockchain ecosystem — from Layer 2 infrastructure to decentralized trading",

    // EcosystemFlow
    "flow.label": "How It All Connects",
    "flow.title1": "One Ecosystem,",
    "flow.title2": "Three Platforms",
    "flow.titleEnd": "",
    "flow.desc": "Download a compatible wallet, connect to DannyChain, and access the full ecosystem — mining, trading, and exploring all in one place",
    "flow.step1Title": "Get a Wallet",
    "flow.step1Desc": "Download any compatible Web3 wallet with DApp browser support",
    "flow.step2Title": "Connect to DannyChain",
    "flow.step2Desc": "Open any platform URL inside the wallet's built-in DApp browser",
    "flow.step3Title": "Access the Ecosystem",
    "flow.step3Desc": "Mine HMOOB, trade on DanDEX, or explore transactions on DanScan",
    "flow.miningDesc": "Cloud mining — earn daily HMOOB rewards with up to 365% ROI",
    "flow.dexDesc": "Decentralized exchange — swap tokens and provide liquidity",
    "flow.scanDesc": "Blockchain explorer — track transactions, blocks, and wallets",

    // Vision
    "vision.label": "Our Vision",
    "vision.quote": "\"HMOOB Mining is more than a platform — it's our community's gateway into the decentralized future. Built on DannyChain, we're creating a complete ecosystem where the Hmong community and all users can mine, earn, swap, and grow together.\"",
    "vision.team": "The HMOOB Team",
    "vision.role": "Founders & Builders",
    "vision.roadmapTitle1": "Our",
    "vision.roadmapTitle2": "Roadmap",
    "vision.now": "NOW",
    "vision.m1Title": "DannyChain L2 Launch",
    "vision.m1Desc": "Launched the DannyChain Layer 2 blockchain with 10s block time and low gas fees",
    "vision.m2Title": "HMOOB Mining & DanScan Live",
    "vision.m2Desc": "Deployed cloud mining platform and blockchain explorer with 3,300+ active miners",
    "vision.m3Title": "DanDEX & Multi-Wallet Support",
    "vision.m3Desc": "Launched decentralized exchange and expanded wallet support to Bitget, TokenPocket, SafePal",
    "vision.m4Title": "DanMarket & NFT Integration",
    "vision.m4Desc": "Building a decentralized marketplace for digital goods and NFT trading on DannyChain",
    "vision.m5Title": "Cross-Chain Bridge & Global Expansion",
    "vision.m5Desc": "Enabling cross-chain token transfers and expanding to global markets with more partnerships",

    // Video
    "video.label": "Watch",
    "video.title1": "See How",
    "video.title2": "Hmoob.io",
    "video.titleEnd": "Works",
    "video.desc": "Learn about our vision and cloud mining system that makes earning crypto simple for everyone",

    // Testimonials
    "testimonials.label": "Community",
    "testimonials.title1": "What Our",
    "testimonials.title2": "Miners Say",
    "testimonials.desc": "Real feedback from verified community members",
    "testimonials.verified": "Verified",
    "testimonials.hashRate": "Hash Rate",
    "testimonials.boost": "Boost",

    // FAQ
    "faq.label": "FAQ",
    "faq.title1": "Frequently Asked",
    "faq.title2": "Questions",

    // CTA
    "cta.badge": "Secured by DannyChain Layer 2 × Bitget Wallet",
    "cta.title1": "Start Mining",
    "cta.title2": "HMOOB",
    "cta.titleEnd": "Today",
    "cta.desc": "Join 3,300+ miners already earning daily rewards with 365% annual ROI.",
    "cta.steps": "Download Bitget Wallet → Open hmoob.io in DApp browser → Connect wallet → Choose a Boost → Start mining immediately.",
    "cta.launchApp": "Launch Mining App",
    "cta.tradeDex": "Trade on DanDEX",
    "cta.exploreScan": "Explore DanScan",
    "cta.downloadWallet": "Download a Compatible Wallet",
    "cta.getWallet": "Get Bitget Wallet",
    "cta.trust1": "Self-custodial security",
    "cta.trust2": "No hardware needed",
    "cta.trust3": "On-chain transparency",

    // Footer
    "footer.desc": "Cloud-based HMOOB mining on DannyChain Layer 2. Empowering the Hmong community through accessible Web3 technology.",
    "footer.online": "Platform Online",
    "footer.platform": "Platform",
    "footer.launchApp": "Launch App ↗",
    "footer.ecosystem": "Ecosystem",
    "footer.contactUs": "Contact Us",
    "footer.whatsapp": "Chat on WhatsApp",
    "footer.facebook": "Follow on Facebook",
    "footer.copyright": "Built on DannyChain Layer 2. All rights reserved.",
  },
  hmn: {
    // Navbar
    "nav.about": "Hais Txog",
    "nav.howItWorks": "Ua Li Cas",
    "nav.features": "Cov Yam Ntxwv",
    "nav.security": "Kev Ruaj Ntseg",
    "nav.boostPlans": "Boost Plans",
    "nav.ecosystem": "Ecosystem",
    "nav.faq": "Nqe Lus Nug",
    "nav.getStarted": "Pib Tam Sim",

    // Hero
    "hero.live": "Khawb Tam Sim — 3,310+ Cov Neeg Khawb",
    "hero.badge": "Tsim Rau DannyChain × Bitget Wallet",
    "hero.title1": "Khawb",
    "hero.title2": "HMOOB",
    "hero.title3": "Khwv Txhua Hnub.",
    "hero.desc": "Txuas los ntawm Bitget Wallet, nce koj tus hash rate, thiab khawb HMOOB tokens — tsis xav tau kho vajtse. Khwv tau",
    "hero.roi": "365% ROI",
    "hero.descEnd": "hauv 365 hnub ntawm DannyChain ecosystem.",
    "hero.startMining": "Pib Khawb",
    "hero.downloadWallet": "Download Bitget Wallet",
    "hero.annualRoi": "365% ROI Ib Xyoos",
    "hero.noHardware": "Tsis Xav Tau Kho Vajtse",
    "hero.selfCustodial": "Self-Custodial Wallet",

    // Trust Banner
    "trust.poweredBy": "Siv & Sib Txuas Nrog",

    // About
    "about.label": "Hais Txog HMOOB Mining",
    "about.title1": "Haiv",
    "about.title2": "Hmoob Tus",
    "about.titleEnd": "Crypto Token",
    "about.p1": "HMOOB Mining yog ib lub platform khawb crypto hauv huab cua tsim rau ntawm DannyChain Layer 2 blockchain. Cov neeg siv txuas los ntawm",
    "about.bitget": "Bitget Wallet",
    "about.p1End": "app — ib lub Web3 wallet uas muaj 80M+ cov neeg siv — los khawb HMOOB tokens los ntawm kev yuav boost plans thiab khwv tau rewards txhua hnub, tsis xav tau kho vajtse.",
    "about.p2": "Ib feem ntawm ib lub ecosystem uas loj tuaj suav nrog DannyChain (Layer 2 blockchain), DanDEX (kev sib pauv crypto), DanMarket (khw muag khoom digital), thiab DanScan (blockchain explorer) — HMOOB Mining sawv cev rau haiv Hmoob txoj kev nkag mus rau Web3 nrog ib lub platform tsim rau kev yooj yim.",

    // App Preview
    "appPreview.label": "Mobile-First Platform",
    "appPreview.title1": "Khawb Qhov Twg,",
    "appPreview.title2": "Thaum Twg Los Tau",
    "appPreview.desc": "HMOOB Mining ua hauj lwm zoo los ntawm",
    "appPreview.descEnd": "app — ib lub Web3 wallet uas muaj 80M+ cov neeg siv thoob ntiaj teb. Qhib hmoob.io hauv wallet lub DApp browser los nkag tag nrho cov features.",
    "appPreview.desc2": "Bitget Wallet muaj self-custodial kev ruaj ntseg, multi-chain support, thiab DApp browser — ua rau nws yog txoj kev zoo tshaj plaws mus rau HMOOB Mining thiab DannyChain ecosystem.",
    "appPreview.openApp": "Qhib HMOOB Mining",
    "appPreview.getWallet": "Tau Bitget Wallet",
    "appPreview.hmoobDesc": "Khawb hauv huab cua — nce hash rate, khwv HMOOB rewards txhua hnub",
    "appPreview.dandexDesc": "Kev sib pauv crypto — swap tokens, muab liquidity, saib charts",
    "appPreview.danscanDesc": "Blockchain explorer — nrhiav transactions, blocks, wallets & gas",
    "appPreview.compatibleWallets": "Cov Wallet Sib Haum",

    // How It Works
    "howItWorks.label": "Ua Li Cas",
    "howItWorks.title1": "Plaub Kauj Ruam Los",
    "howItWorks.title2": "Khawb HMOOB",
    "howItWorks.cta": "Tau ntawm Google Play",
    "howItWorks.wallet": "Bitget Wallet",

    // Features
    "features.label": "Cov Yam Ntxwv",
    "features.title1": "Txhua Yam Hauv",
    "features.title2": "Ib Lub Platform",
    "features.desc": "Khawb, khwv, pauv, thiab loj hlob koj cov HMOOB",

    // Security
    "security.label": "Kev Ruaj Ntseg & Kev Ntseeg Siab",
    "security.title1": "Koj Cov Khoom,",
    "security.title2": "Koj Tswj",
    "security.desc": "Tsim nrog kev ruaj ntseg zoo tshaj plaws — vim kev ntseeg siab tau los ntawm kev ua, tsis yog kev xav",
    "security.verify": "Txheeb ntawm DanScan Explorer ↗",

    // Boost Plans
    "boost.label": "Mining Boosts",
    "boost.title1": "Nce Koj Lub",
    "boost.title2": "Zog Khawb",
    "boost.desc": "Nce koj tus hash rate thiab khwv tau ntau HMOOB nrog peb cov boost plans",
    "boost.recommended": "Pom Zoo",
    "boost.suffix": "Boost",
    "boost.hashRate": "Hash Rate",
    "boost.miningPower": "Zog Khawb",
    "boost.totalReturn": "Tag Nrho Rov Qab",
    "boost.duration": "Sij Hawm",
    "boost.days": "365 hnub",
    "boost.getBoost": "Tau Boost",

    // Ecosystem
    "ecosystem.label": "Ecosystem",
    "ecosystem.title1": "Lub",
    "ecosystem.title2": "DannyChain",
    "ecosystem.titleEnd": "Ecosystem",
    "ecosystem.desc": "HMOOB Mining yog ib feem ntawm tag nrho blockchain ecosystem — los ntawm Layer 2 infrastructure mus rau decentralized trading",

    // Vision
    "vision.label": "Peb Lub Zeem Muag",
    "vision.quote": "\"HMOOB Mining tsis yog ib lub platform xwb — nws yog peb haiv neeg txoj kev nkag mus rau lub neej yav tom ntej decentralized. Tsim rau ntawm DannyChain, peb tsim ib lub ecosystem tag nrho uas haiv Hmoob thiab txhua tus neeg siv tuaj yeem khawb, khwv, pauv, thiab loj hlob ua ke.\"",
    "vision.team": "HMOOB Pab Neeg",
    "vision.role": "Cov Tsim & Cov Ua",

    // Video
    "video.label": "Saib",
    "video.title1": "Saib",
    "video.title2": "Hmoob.io",
    "video.titleEnd": "Ua Hauj Lwm Li Cas",
    "video.desc": "Kawm txog peb lub zeem muag thiab kev khawb crypto hauv huab cua uas ua rau kev khwv nyiaj crypto yooj yim rau txhua tus",

    // Testimonials
    "testimonials.label": "Zej Zog",
    "testimonials.title1": "Cov Neeg Khawb",
    "testimonials.title2": "Hais Li Cas",
    "testimonials.desc": "Cov lus tseeb los ntawm cov tswv cuab hauv zej zog",
    "testimonials.verified": "Txheeb Lawm",
    "testimonials.hashRate": "Hash Rate",
    "testimonials.boost": "Boost",

    // FAQ
    "faq.label": "Nqe Lus Nug",
    "faq.title1": "Cov Lus Nug",
    "faq.title2": "Nquag Nug",

    // CTA
    "cta.badge": "Ruaj Ntseg Los Ntawm DannyChain Layer 2 × Bitget Wallet",
    "cta.title1": "Pib Khawb",
    "cta.title2": "HMOOB",
    "cta.titleEnd": "Hnub No",
    "cta.desc": "Koom nrog 3,300+ cov neeg khawb uas twb khwv tau rewards txhua hnub nrog 365% ROI ib xyoos.",
    "cta.steps": "Download Bitget Wallet → Qhib hmoob.io hauv DApp browser → Txuas wallet → Xaiv Boost → Pib khawb tam sim ntawd.",
    "cta.launchApp": "Qhib Mining App",
    "cta.getWallet": "Tau Bitget Wallet",
    "cta.trust1": "Self-custodial kev ruaj ntseg",
    "cta.trust2": "Tsis xav tau kho vajtse",
    "cta.trust3": "On-chain pom tseeb",

    // Footer
    "footer.desc": "Khawb HMOOB hauv huab cua ntawm DannyChain Layer 2. Pab haiv Hmoob los ntawm Web3 technology.",
    "footer.online": "Platform Online",
    "footer.platform": "Platform",
    "footer.launchApp": "Qhib App ↗",
    "footer.ecosystem": "Ecosystem",
    "footer.contactUs": "Hu Rau Peb",
    "footer.whatsapp": "Chat ntawm WhatsApp",
    "footer.facebook": "Follow ntawm Facebook",
    "footer.copyright": "Tsim rau DannyChain Layer 2. Txhua txoj cai reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem("hmoob-locale");
    return (saved === "hmn" ? "hmn" : "en") as Locale;
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("hmoob-locale", newLocale);
  }, []);

  const t = useCallback(
    (key: string) => translations[locale][key] || translations.en[key] || key,
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
