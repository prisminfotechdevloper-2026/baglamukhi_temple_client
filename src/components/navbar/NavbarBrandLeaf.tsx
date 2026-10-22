"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function NavbarBrandLeaf() {
  const { t, isHindi } = useLanguage();

  return (
    <div className="flex flex-col text-left min-w-0 justify-center">
      {/* Line 1: Sacred Shrine Location Eyebrow (Generous top padding and normal leading for full matras) */}
      <div className="flex items-center gap-1.5 leading-normal pt-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#AF0807] animate-pulse shrink-0" />
        <span
          className={`text-[10px] xs:text-[10.5px] sm:text-[11.5px] font-extrabold tracking-wide text-[#AF0807] whitespace-nowrap inline-block leading-normal ${
            isHindi ? "font-sans" : "font-serif uppercase"
          }`}
        >
          {t({
            hi: "माँ बगलामुखी धाम • नलखेड़ा",
            en: "Maa Baglamukhi Dham • Nalkheda",
          })}
        </span>
      </div>

      {/* Line 2: Prominent Personal Priest Name (Protected top ascenders for bindu & reph) */}
      <div className="leading-snug pt-0.5 pb-0.5">
        <span
          className={`font-black text-[15px] xs:text-base sm:text-xl md:text-[22px] text-[#3E0A10] leading-snug tracking-tight group-hover:text-[#AF0807] transition-colors whitespace-nowrap block ${
            isHindi ? "font-sans" : "font-serif"
          }`}
        >
          {t({
            hi: "पं. दीपक शर्मा",
            en: "Pt. Deepak Sharma",
          })}
        </span>
      </div>

      {/* Line 3: Specialized Service (Luxury Gold Accent Line) */}
      <div className="flex items-center gap-1.5 leading-normal pb-0.5">
        <span className="h-[2px] w-3 sm:w-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full shrink-0" />
        <span
          className={`text-[10px] xs:text-[10.5px] sm:text-[11.5px] font-bold text-[#78350F] tracking-wide whitespace-nowrap inline-block leading-normal ${
            isHindi ? "font-sans" : "font-serif"
          }`}
        >
          {t({
            hi: "हवन • पूजा • कुंडली सेवा",
            en: "Hawan • Puja • Kundali Seva",
          })}
        </span>
      </div>
    </div>
  );
}
