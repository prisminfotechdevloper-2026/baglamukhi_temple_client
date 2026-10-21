"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

export type Language = "hi" | "en";

export interface TranslationPair {
  hi: string;
  en: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isHindi: boolean;
  isEnglish: boolean;
  /**
   * Helper that returns either hi or en text based on current language.
   * Can accept a TranslationPair { hi: "...", en: "..." } or a string key for common terms.
   */
  t: (input: TranslationPair | string, fallback?: string) => string;
}

const commonDictionary: Record<string, TranslationPair> = {
  // Navigation & General
  home: { hi: "मुख्य पृष्ठ", en: "Home" },
  about: { hi: "परिचय", en: "About Us" },
  pujas: { hi: "पूजा एवं अनुष्ठान", en: "Pujas & Hawan" },
  mandir: { hi: "मंदिर दर्शन", en: "Mandir Darshan" },
  gallery: { hi: "फोटो दीर्घा", en: "Gallery" },
  contact: { hi: "संपर्क करें", en: "Contact Us" },
  book_puja: { hi: "पूजा बुक करें", en: "Book Puja" },
  call_now: { hi: "कॉल करें", en: "Call Now" },
  whatsapp: { hi: "व्हाट्सएप करें", en: "WhatsApp" },
  view_details: { hi: "विस्तार से देखें", en: "View Details" },
  learn_more: { hi: "और जानें", en: "Learn More" },
  read_more: { hi: "पूरा पढ़ें", en: "Read Full Article" },
  helpline: { hi: "दर्शन एवं पूजा सहायता", en: "Darshan & Puja Helpline" },
  nalkheda_mp: { hi: "नलखेड़ा, आगर-मालवा (म.प्र.)", en: "Nalkheda, Agar-Malwa (M.P.)" },
  lakshundar_river: { hi: "पावन लखुन्दर नदी तट", en: "Holy Lakhundar River Bank" },
  pandit_name: { hi: "पंडित दीपक शर्मा जी", en: "Pandit Deepak Sharma Ji" },
  pandit_title: { hi: "मुख्य यज्ञाचार्य एवं वैदिक पुरोहित", en: "Chief Yagyacharya & Vedic Purohit" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "baglamukhi_temple_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("hi");

  // Initialize language from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "hi" || saved === "en") {
        setLanguageState(saved);
      }
    } catch {
      // localStorage may be disabled
    }
  }, []);

  // Sync language changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // localStorage may be disabled
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "hi" ? "en" : "hi"));
  }, []);

  const t = useCallback(
    (input: TranslationPair | string, fallback?: string): string => {
      // If a pair is passed inline: t({ hi: "...", en: "..." })
      if (typeof input === "object" && input !== null) {
        return language === "en" ? input.en : input.hi;
      }

      // If a dictionary key is passed: t("book_puja")
      if (typeof input === "string") {
        const item = commonDictionary[input];
        if (item) {
          return language === "en" ? item.en : item.hi;
        }
        return fallback || input;
      }

      return "";
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      isHindi: language === "hi",
      isEnglish: language === "en",
      t,
    }),
    [language, setLanguage, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback for components rendered outside provider
    return {
      language: "hi",
      setLanguage: () => {},
      toggleLanguage: () => {},
      isHindi: true,
      isEnglish: false,
      t: (input: TranslationPair | string, fallback?: string) => {
        if (typeof input === "object" && input !== null) {
          return input.hi;
        }
        if (typeof input === "string") {
          return commonDictionary[input]?.hi || fallback || input;
        }
        return "";
      },
    };
  }
  return context;
}
