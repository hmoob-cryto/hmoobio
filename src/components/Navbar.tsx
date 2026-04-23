import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import defaultLogo from "@/assets/logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteSettings } from "@/hooks/useDbData";
import FlagIcon from "@/components/FlagIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { locale, setLocale, t } = useLanguage();
  const { data: settings } = useSiteSettings();
  const siteName = settings?.site_name || "hmoob";
  const siteSuffix = settings?.site_name_suffix || ".io";
  const logo = settings?.logo_url || defaultLogo;

  const links = [
    { label: t("nav.about"), id: "about" },
    { label: t("nav.howItWorks"), id: "how-it-works" },
    { label: t("nav.features"), id: "features" },
    { label: t("nav.security"), id: "security" },
    { label: t("nav.boostPlans"), id: "boost" },
    { label: locale === "hmn" ? "Keeb Kwm" : locale === "th" ? "ประวัติ" : "History", id: "history" },
    { label: locale === "hmn" ? "Token" : locale === "th" ? "Token" : "Token", id: "token-usage" },
    { label: t("nav.ecosystem"), id: "ecosystem" },
    { label: t("nav.faq"), id: "faq" },
  ];

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      const ids = links.map((l) => l.id);
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const [langOpen, setLangOpen] = useState(false);
  const langRefDesktop = useRef<HTMLDivElement>(null);
  const langRefMobile = useRef<HTMLDivElement>(null);
  const locales = [
    { code: "en" as const, label: "EN", name: "English" },
    { code: "hmn" as const, label: "HM", name: "Hmong" },
    { code: "th" as const, label: "TH", name: "ไทย" },
  ];
  const currentLocale = locales.find((l) => l.code === locale);
  const currentLabel = currentLocale?.label ?? "EN";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = langRefDesktop.current?.contains(target);
      const insideMobile = langRefMobile.current?.contains(target);
      if (!insideDesktop && !insideMobile) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-border shadow-lg shadow-background/50" : ""}`}>
      <div className="container flex items-center justify-between h-18 py-3">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <img src={logo} alt={`${siteName}${siteSuffix}`} className="w-11 h-11 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300" />
            <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">
            <span className="text-gradient-gold">{siteName}</span>
            <span className="text-muted-foreground">{siteSuffix}</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`text-sm px-4 py-2 rounded-lg transition-all duration-200 ${activeSection === l.id ? "text-primary bg-primary/[0.08] font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"}`}
            >
              {l.label}
            </button>
          ))}
          <div className="w-px h-6 bg-border mx-2" />
          {/* Language dropdown */}
          <div className="relative" ref={langRefDesktop}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-muted/30 transition-all duration-200 font-mono"
            >
              <FlagIcon code={locale} />
              <span className="text-xs font-bold uppercase">{currentLabel}</span>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 glass border border-border rounded-lg overflow-hidden shadow-xl min-w-[120px] z-50">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLocale(l.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2 text-left px-4 py-2.5 text-sm transition-colors ${locale === l.code ? "text-primary bg-primary/10 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"}`}
                   >
                     <FlagIcon code={l.code} />
                     <span className="font-mono font-bold text-xs">{l.label}</span>
                     {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="w-px h-6 bg-border mx-2" />
          <button
            onClick={() => scrollTo("cta")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t("nav.getStarted")}
          </button>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <div className="relative" ref={langRefMobile}>
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); setOpen(false); }}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-muted/30 transition-colors text-xs font-bold"
              aria-label="Change language"
            >
              <FlagIcon code={locale} />
              {currentLabel}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 glass border border-border rounded-lg overflow-hidden shadow-xl min-w-[140px] z-[60]">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLocale(l.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2 text-left px-4 py-2.5 text-sm transition-colors ${locale === l.code ? "text-primary bg-primary/10 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"}`}
                  >
                    <FlagIcon code={l.code} />
                    <span className="font-mono font-bold text-xs">{l.label}</span>
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="text-foreground p-2 rounded-lg hover:bg-muted/30 transition-colors" onClick={() => { setOpen(!open); setLangOpen(false); }} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-border px-4 pb-4 pt-2 flex flex-col gap-1 animate-fade-up-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-muted-foreground hover:text-foreground text-left py-3 px-3 rounded-lg hover:bg-muted/30 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold mt-2"
          >
            {t("nav.getStarted")}
          </button>
        </div>
      )}
    </nav>
  );
}
