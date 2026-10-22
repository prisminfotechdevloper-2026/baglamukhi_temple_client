"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function RudrakshaSliderHeadingLeaf() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 my-2">
      <span className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent to-[#D4AF37]" />
      <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#4A1E0D] tracking-tight">
        {t({
          hi: "हमारे लोकप्रिय उत्पाद",
          en: "Our Popular Offerings",
        })}
      </h3>
      <span className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent to-[#D4AF37]" />
    </div>
  );
}
