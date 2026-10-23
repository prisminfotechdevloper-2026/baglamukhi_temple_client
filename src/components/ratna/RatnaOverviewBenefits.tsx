"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function RatnaOverviewBenefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      id: "benefit-planetary-relief",
      hi: "ग्रहों के अशुभ प्रभाव में राहत",
      en: "Relief from adverse planetary influences",
    },
    {
      id: "benefit-positive-energy",
      hi: "जीवन में सकारात्मक ऊर्जा",
      en: "Infusion of positive life energy",
    },
    {
      id: "benefit-wealth-career",
      hi: "स्वास्थ्य, धन और करियर में सुधार",
      en: "Growth in health, wealth and career",
    },
    {
      id: "benefit-peace-confidence",
      hi: "मानसिक शांति और आत्मविश्वास",
      en: "Mental peace and self confidence",
    },
  ];

  return (
    <section
      aria-label="रत्न परिचय एवं परंपरागत लाभ"
      className="relative w-full overflow-hidden bg-[#FAF6EE] py-3 sm:py-1 md:py-1 border-b border-[#EBDCC5]"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* ================= LEFT COLUMN: GEMSTONE ICON + HEADING + PARAGRAPH ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* Sacred Geometric Diamond Icon */}
              <div className="shrink-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="#9C4B18"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 sm:h-11 sm:w-11 text-[#9C4B18]"
                  aria-hidden="true"
                >
                  <polygon points="12,6 36,6 44,18 24,42 4,18" />
                  <line x1="4" y1="18" x2="44" y2="18" />
                  <line x1="12" y1="6" x2="20" y2="18" />
                  <line x1="36" y1="6" x2="28" y2="18" />
                  <line x1="20" y1="18" x2="24" y2="42" />
                  <line x1="28" y1="18" x2="24" y2="42" />
                </svg>
              </div>

              {/* Heading + subtle horizontal divider */}
              <div className="flex-1 flex items-center gap-3 sm:gap-4 min-w-0">
                <h2 className="font-serif text-2xl xs:text-[26px] sm:text-[30px] font-bold text-[#3B1E08] leading-tight shrink-0 tracking-tight">
                  {t({ hi: "रत्न (Gemstones)", en: "Ratna (Gemstones)" })}
                </h2>
                <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-[#DCC8A8] via-[#EADCC5] to-transparent" />
              </div>
            </div>

            {/* Description (Preserved in authentic Hindi as requested) */}
            <div className="space-y-2 text-[13px] sm:text-[15px] text-[#554035] leading-[1.8] font-normal max-w-[620px]">
              <p>
                प्राचीन ज्योतिष शास्त्र के अनुसार प्रत्येक ग्रह का अपना एक विशिष्ट रत्न होता है, जो जीवन में शांति, समृद्धि, स्वास्थ्य, करियर और सफलता में सहायक होता है।
              </p>
              <p>
                हम यहाँ केवल प्रमाणित और उच्च गुणवत्ता वाले प्राकृतिक रत्न प्रदान करते हैं।
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: BENEFITS CARD ================= */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#EBD6B4] bg-gradient-to-br from-[#FFFDF8] via-[#FDF8EE] to-[#FAF1E1] px-5 py-5 sm:px-6 sm:py-6 shadow-[0_4px_20px_rgba(139,90,20,0.06)] overflow-hidden">
              {/* Sacred Om + Sparkling Diamond Watermark Artwork on the right */}
              <div
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center select-none"
                aria-hidden="true"
              >
                <span className="font-serif text-5xl md:text-6xl leading-none text-[#E8CBA3] font-bold mr-1">
                  ॐ
                </span>
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="#DEB887"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-28 w-28 md:h-32 md:w-32 opacity-75"
                >
                  <polygon points="25,20 75,20 92,42 50,88 8,42" />
                  <line x1="8" y1="42" x2="92" y2="42" />
                  <line x1="25" y1="20" x2="40" y2="42" />
                  <line x1="75" y1="20" x2="60" y2="42" />
                  <line x1="40" y1="42" x2="50" y2="88" />
                  <line x1="60" y1="42" x2="50" y2="88" />
                </svg>
              </div>

              {/* Card Header */}
              <div className="relative z-10 mb-3.5 sm:mb-4">
                <h3 className="font-serif text-lg sm:text-[20px] font-bold text-[#3B1E08] tracking-tight">
                  {t({ hi: "रत्न धारण करने के प्रमुख लाभ", en: "Key Benefits of Wearing Gemstones" })}
                </h3>
              </div>

              {/* Benefits Bullet List with Sacred Brown Badges */}
              <ul className="relative z-10 space-y-2.5 sm:pr-36 md:pr-40">
                {benefits.map((benefit) => (
                  <li key={benefit.id} className="flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 shrink-0 items-center justify-center rounded-full bg-[#5A2C18] text-[#FFF9EE] shadow-xs">
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-[13px] sm:text-[14px] font-medium text-[#3B1E08] leading-snug">
                      {t(benefit)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
