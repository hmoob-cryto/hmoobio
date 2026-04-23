import { createContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Locale } from "@/i18n/translations";

export interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  loading: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem("hmoob-locale");
    if (saved === "hmn" || saved === "th") return saved;
    return "en";
  });

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("hmoob-locale", l);
  }, []);

  const t = useCallback(
    (key: string) => translations[locale][key] ?? key,
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, loading: false }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Re-export for backward compatibility
export { useLanguage } from "./useLanguage";
