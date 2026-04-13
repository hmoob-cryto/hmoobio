import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

type Locale = "en" | "hmn";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  loading: boolean;
}

// Hardcoded fallbacks (used while DB loads or if DB fails)
const fallbacks: Record<Locale, Record<string, string>> = {
  en: {
    "nav.about": "About", "nav.howItWorks": "How It Works", "nav.features": "Features",
    "nav.security": "Security", "nav.boostPlans": "Boost Plans", "nav.ecosystem": "Ecosystem",
    "nav.faq": "FAQ", "nav.getStarted": "Get Started",
  },
  hmn: {
    "nav.about": "Hais Txog", "nav.howItWorks": "Ua Li Cas", "nav.features": "Cov Yam Ntxwv",
    "nav.security": "Kev Ruaj Ntseg", "nav.boostPlans": "Boost Plans", "nav.ecosystem": "Ecosystem",
    "nav.faq": "Nqe Lus Nug", "nav.getStarted": "Pib Tam Sim",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem("hmoob-locale");
    return (saved === "hmn" ? "hmn" : "en") as Locale;
  });
  const [translations, setTranslations] = useState<Record<Locale, Record<string, string>>>({
    en: { ...fallbacks.en },
    hmn: { ...fallbacks.hmn },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const { data, error } = await supabase
          .from("translations")
          .select("key, locale, value");

        if (error) {
          console.error("Failed to fetch translations:", error);
          setLoading(false);
          return;
        }

        if (data) {
          const en: Record<string, string> = { ...fallbacks.en };
          const hmn: Record<string, string> = { ...fallbacks.hmn };

          data.forEach((row) => {
            if (row.locale === "en") en[row.key] = row.value;
            else if (row.locale === "hmn") hmn[row.key] = row.value;
          });

          setTranslations({ en, hmn });
        }
      } catch (err) {
        console.error("Translation fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTranslations();
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("hmoob-locale", l);
  }, []);

  const t = useCallback(
    (key: string) => translations[locale][key] ?? key,
    [locale, translations]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, loading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
