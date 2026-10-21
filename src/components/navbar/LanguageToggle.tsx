"use client";

import { useState } from "react";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const [lang, setLang] = useState<"HI" | "EN">("HI");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "HI" ? "EN" : "HI"));
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="group relative inline-flex items-center gap-1.5 rounded-full bg-stone-50 hover:bg-amber-50/80 px-3 py-1.5 text-xs font-medium text-stone-700 transition-all duration-200 border border-stone-200/70 hover:border-amber-300 shadow-2xs hover:shadow-xs cursor-pointer focus:outline-hidden"
      title="भाषा बदलें / Change Language"
      aria-label="Switch Language"
    >
      <Globe className="h-4 w-4 text-amber-600 transition-transform duration-300 group-hover:rotate-45" />
      <div className="flex items-center text-[12px] sm:text-[13px] font-semibold tracking-wider">
        <span
          className={`px-1 py-0.5 rounded transition-all ${
            lang === "HI"
              ? "text-[#AF0807] font-bold"
              : "text-stone-400 font-normal"
          }`}
        >
          हिन्दी
        </span>
        <span className="text-stone-300 mx-0.5 font-light">|</span>
        <span
          className={`px-1 py-0.5 rounded transition-all ${
            lang === "EN"
              ? "text-[#AF0807] font-bold"
              : "text-stone-400 font-normal"
          }`}
        >
          EN
        </span>
      </div>
    </button>
  );
}
