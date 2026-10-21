"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function NavbarBrandLeaf() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col text-left">
      {/* Line 1: Sacred Shrine Location Eyebrow */}
      <div className="flex items-center gap-1.5 leading-none">
        <span className="h-1.5 w-1.5 rounded-full bg-[#AF0807] animate-pulse" />
        <span className="font-serif text-[10px] xs:text-[11px] sm:text-[11.5px] font-extrabold uppercase tracking-wide text-[#AF0807]">
          {t({
            hi: "माँ बगलामुखी सिद्धपीठ • नलखेड़ा",
            en: "Maa Baglamukhi Siddhapeeth • Nalkheda",
          })}
        </span>
      </div>

      {/* Line 2: Prominent Personal Priest Name */}
      <span className="font-serif font-black text-lg sm:text-xl md:text-[22px] text-[#3E0A10] leading-tight tracking-tight group-hover:text-[#AF0807] transition-colors mt-0.5">
        {t({
          hi: "आचार्य पं. दीपक शर्मा",
          en: "Acharya Pt. Deepak Sharma",
        })}
      </span>

      {/* Line 3: Specialized Service (Luxury Gold Accent Line - No Boring Pill) */}
      <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
        <span className="h-[2px] w-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full shrink-0" />
        <span className="font-serif text-[10.5px] xs:text-[11px] sm:text-[11.5px] font-bold text-[#78350F] tracking-wide">
          {t({
            hi: "हवन • पूजा • पाठ • कुंडली सेवा",
            en: "Hawan • Puja • Path • Kundali Seva",
          })}
        </span>
      </div>
    </div>
  );
}
