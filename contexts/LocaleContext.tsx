"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "@/lib/translations";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Translate a key, optionally substituting {placeholder} values. */
  t: (key: keyof Translations, params?: Record<string, string | number>) => string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "de",
  setLocale: () => {},
  t: (key) => String(key),
});

const VALID_LOCALES: Locale[] = ["de", "en", "tr", "uk", "ru"];
const STORAGE_KEY = "pdf_tool_locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Restore persisted preference via lazy initializer (avoids setState in effect)
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "de";
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && VALID_LOCALES.includes(saved)) return saved;
    } catch {
      // localStorage unavailable (private mode, etc.)
    }
    return "de";
  });

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: keyof Translations, params?: Record<string, string | number>) => {
      let str: string = translations[locale][key] as string;
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          str = str.replaceAll(`{${k}}`, String(v));
        });
      }
      return str;
    },
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
