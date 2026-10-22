"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="भाषा चयन / Select Language"
      className="inline-flex items-center rounded-full bg-stone-100/90 p-0.5 border border-stone-200/90 shadow-2xs shrink-0"
    >
      <div className="pl-2 pr-1 text-amber-700 hidden sm:flex items-center" aria-hidden="true">
        <Globe className="h-3.5 w-3.5" />
      </div>

      {/* Hindi Option */}
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        className={`px-2.5 sm:px-3 py-1 text-xs rounded-full font-bold transition-all duration-200 cursor-pointer ${
          language === "hi"
            ? "bg-[#AF0807] text-white shadow-xs"
            : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
        }`}
        aria-pressed={language === "hi"}
        title="हिन्दी में देखें"
      >
        हिन्दी
      </button>

      {/* English Option */}
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2.5 sm:px-3 py-1 text-xs rounded-full font-bold transition-all duration-200 cursor-pointer ${
          language === "en"
            ? "bg-[#AF0807] text-white shadow-xs"
            : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
        }`}
        aria-pressed={language === "en"}
        title="View in English"
      >
        EN
      </button>
    </div>
  );
}
