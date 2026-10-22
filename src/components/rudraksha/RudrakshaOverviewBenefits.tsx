"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function RudrakshaOverviewBenefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      id: "benefit-mental-peace",
      hi: "मानसिक शांति और एकाग्रता में सहायक",
      en: "Enhances mental tranquility and concentration",
    },
    {
      id: "benefit-negative-energy",
      hi: "नकारात्मक ऊर्जा से रक्षा",
      en: "Protection against negative energies & psychic stress",
    },
    {
      id: "benefit-spiritual-growth",
      hi: "आध्यात्मिक उन्नति में सहायक",
      en: "Supports spiritual elevation and inner transformation",
    },
  ];

  return (
    <section
      aria-label="रुद्राक्ष परिचय एवं परंपरागत लाभ"
      className="relative w-full overflow-hidden bg-[#FDF9F0] py-8 sm:py-10 md:py-12 border-t border-b border-[#EFE3CF]"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              {/* Trishul */}
              <div className="shrink-0">
                <svg
                  viewBox="0 0 40 72"
                  fill="none"
                  stroke="#5A2C18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-8 sm:h-14 sm:w-9"
                  aria-hidden="true"
                >
                  {/* Staff */}
                  <line x1="20" y1="10" x2="20" y2="68" strokeWidth="2.4" />
                  {/* Center spear */}
                  <path d="M20 2 L16.5 12 L20 9.5 L23.5 12 Z" fill="#5A2C18" strokeWidth="1" />
                  {/* Left prong */}
                  <path d="M6 14 C5 30 12 38 20 38" strokeWidth="2.2" />
                  <path d="M6 7 L2.8 16 L6 14 L9.2 16 Z" fill="#5A2C18" strokeWidth="1" />
                  {/* Right prong */}
                  <path d="M34 14 C35 30 28 38 20 38" strokeWidth="2.2" />
                  <path d="M34 7 L30.8 16 L34 14 L37.2 16 Z" fill="#5A2C18" strokeWidth="1" />
                  {/* Damru / binding */}
                  <line x1="15" y1="42" x2="25" y2="42" strokeWidth="2.2" />
                  <line x1="16.5" y1="47" x2="23.5" y2="47" strokeWidth="1.8" />
                </svg>
              </div>

              {/* Heading + divider */}
              <div className="flex-1 flex items-center gap-4 min-w-0">
                <h2 className="font-serif text-2xl sm:text-[30px] font-bold text-[#3B1E08] leading-tight shrink-0 tracking-tight">
                  {t({ hi: "रुद्राक्ष (Rudraksha)", en: "Rudraksha (रुद्राक्ष)" })}
                </h2>
                <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-[#DCC8A8] via-[#EADCC5] to-transparent" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 text-[13px] sm:text-[15px] text-[#6B5648] leading-[1.75] font-normal max-w-[640px]">
              <p>
                भगवान शिव का अति प्रिय रुद्राक्ष एक पवित्र और दिव्य वस्तु है, जिसे दृढ़ संकल्प से आध्यात्मिक साधना, रक्षा और कल्याण के लिए धारण किया जाता है।
              </p>
              <p>
                यह प्राकृतिक रूप से उत्पन्न होता है और प्रत्येक रुद्राक्ष का अपना विशिष्ट महत्व है।
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CARD ================= */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#EBD6B4] bg-gradient-to-br from-[#FFFAF1] via-[#FDF3E3] to-[#FAE9D3] px-5 py-5 sm:px-6 sm:py-6 shadow-[0_6px_26px_rgba(139,90,20,0.08)] overflow-hidden">
              {/* Om + Mandala ornament (right side) */}
              <div
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center select-none"
                aria-hidden="true"
              >
                <span className="font-serif text-6xl md:text-7xl leading-none text-[#EBCFB0] font-bold mr-1">
                  ॐ
                </span>
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="#E6C9A6"
                  strokeWidth="1"
                  className="h-32 w-32 md:h-36 md:w-36"
                >
                  <circle cx="50" cy="50" r="47" strokeDasharray="1.5 2.5" strokeWidth="1.2" />
                  <circle cx="50" cy="50" r="40" />
                  <circle cx="50" cy="50" r="30" />
                  <circle cx="50" cy="50" r="12" fill="#F3DFC5" fillOpacity="0.6" />
                  {/* 8 petals */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                    <path
                      key={deg}
                      d="M50 5 C59 24 59 38 50 46 C41 38 41 24 50 5 Z"
                      transform={`rotate(${deg} 50 50)`}
                    />
                  ))}
                  {/* inner star lines */}
                  {[22.5, 67.5, 112.5, 157.5].map((deg) => (
                    <line
                      key={deg}
                      x1="50"
                      y1="12"
                      x2="50"
                      y2="88"
                      transform={`rotate(${deg} 50 50)`}
                      strokeWidth="0.7"
                    />
                  ))}
                </svg>
              </div>

              {/* Header */}
              <div className="relative z-10 flex flex-wrap items-baseline gap-2 mb-4">
                <h3 className="font-serif text-lg sm:text-[22px] font-bold text-[#3B1E08] tracking-tight">
                  {t({ hi: "रुद्राक्ष के लाभ", en: "Benefits of Rudraksha" })}
                </h3>
                <span className="text-[11px] sm:text-[13px] font-semibold text-[#8B5A14]">
                  {t({ hi: "(परंपरागत मान्यताएँ)", en: "(Traditional Beliefs)" })}
                </span>
              </div>

              {/* Benefits */}
              <ul className="relative z-10 space-y-3 sm:pr-40 md:pr-44">
                {benefits.map((benefit) => (
                  <li key={benefit.id} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5A2C18] text-[#FFF9EE]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-[13px] sm:text-[15px] font-medium text-[#3B1E08] leading-snug">
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