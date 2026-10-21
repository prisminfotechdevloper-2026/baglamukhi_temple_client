"use client";

import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NavbarTopRibbonLeaf() {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-[#3D0802] via-[#AF0807] to-[#3D0802] text-white text-[11px] font-medium tracking-wide border-b border-amber-500/20">
      {/* Mobile View */}
      <div className="flex sm:hidden items-center justify-between px-3 py-1 text-[11px]">
        <span className="text-amber-200 font-serif font-bold truncate min-w-0 mr-2">
          {t({
            hi: "॥ ॐ ह्लीं बगलामुखी देव्यै नमः ॥",
            en: "॥ Om Hleem Baglamukhyai Namah ॥",
          })}
        </span>
        <a
          href="tel:+917223083313"
          className="flex items-center gap-1 text-white font-bold shrink-0 bg-black/40 px-2.5 py-0.5 rounded-full border border-amber-400/40 text-[10.5px]"
        >
          <Phone className="h-3 w-3 text-amber-300" />
          <span>+91 72230 83313</span>
        </a>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:flex mx-auto max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-1 sm:py-1.5">
        <div className="flex items-center text-amber-200/95 font-serif text-[11.5px]">
          <span>
            {t({
              hi: "॥ ॐ ह्लीं बगलामुखी देव्यै नमः • विश्व प्रसिद्ध सिद्ध तंत्र पीठ नलखेड़ा धाम ॥",
              en: "॥ Om Hleem Baglamukhyai Namah • World-Renowned Siddha Tantra Peeth Nalkheda ॥",
            })}
          </span>
        </div>

        <div className="flex items-center gap-4 text-white/95 shrink-0 text-[11.5px]">
          <a
            href="tel:+917223083313"
            className="flex items-center gap-1.5 hover:text-amber-200 transition-colors font-bold"
          >
            <Phone className="h-3 w-3 text-amber-300" />
            <span>
              {t({
                hi: "दर्शन एवं पूजा सहायता: +91 72230 83313",
                en: "Darshan & Puja Helpline: +91 72230 83313",
              })}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
