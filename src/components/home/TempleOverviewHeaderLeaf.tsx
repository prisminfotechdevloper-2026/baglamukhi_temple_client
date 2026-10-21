"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TempleOverviewHeaderLeaf() {
  const { t } = useLanguage();

  return (
    <div className="text-left max-w-3xl mb-6 sm:mb-8">
      <div className="flex items-center gap-2.5 mb-2">
        <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
        <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
          {t({
            hi: "महाभारत कालीन सिद्धपीठ • नलखेड़ा धाम",
            en: "Mahabharata-Era Siddhapeeth • Nalkheda Dham",
          })}
        </span>
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#4A0C16] tracking-tight leading-tight">
        {t({
          hi: "मंदिर दर्शन परिचय एवं आरती समय सारिणी",
          en: "Temple Darshan Overview & Daily Aarti Schedule",
        })}
      </h2>
      <p className="mt-2 text-xs sm:text-sm md:text-base text-[#5C3A21] leading-relaxed">
        {t({
          hi: "पावन लखुंदर नदी तट पर विराजी माँ बगलामुखी के दर्शन एवं दैनिक पूजा-अर्चना का संपूर्ण विवरण",
          en: "Complete guide to holy darshan, daily aarti timings, and sacred offerings at Maa Baglamukhi Temple on the banks of Lakhundar River.",
        })}
      </p>
    </div>
  );
}
