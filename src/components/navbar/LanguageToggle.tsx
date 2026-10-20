"use client";

import { useState } from "react";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const [lang, setLang] = useState<"HI" | "EN">("HI");

  const toggleLanguage = () => {
    const nextLang = lang === "HI" ? "EN" : "HI";
    setLang(nextLang);
    // Future expansion: sync with i18n or cookies
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 rounded-full border border-[#E6840D]/30 bg-white/80 px-2.5 py-1 text-xs font-semibold text-[#540902] shadow-xs transition-all hover:bg-[#FEFBDB] hover:border-[#E6840D] focus:outline-hidden cursor-pointer"
      title="भाषा बदलें / Change Language"
      aria-label="Switch Language"
    >
      <Globe className="h-3.5 w-3.5 text-[#E6840D]" />
      <span className="tracking-wide">
        <span className={lang === "HI" ? "font-bold text-[#AF0807]" : "text-gray-500"}>हिं</span>
        <span className="mx-0.5 text-gray-400">/</span>
        <span className={lang === "EN" ? "font-bold text-[#AF0807]" : "text-gray-500"}>EN</span>
      </span>
    </button>
  );
}
