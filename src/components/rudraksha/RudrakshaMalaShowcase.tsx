"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function RudrakshaMalaShowcase() {
  const { t, language } = useLanguage();

  const malaPoints = [
    { id: "point-mukhi", hi: "विभिन्न मुखियों की माला", en: "Mala of different Mukhis" },
    { id: "point-108", hi: "108 दानों वाली माला", en: "108 Beads Authentic Japa Mala" },
    { id: "point-japa", hi: "जप और ध्यान के लिए उपयुक्त", en: "Ideal for Japa & Meditation" },
  ];

  const getWhatsAppMalaUrl = () => {
    const text =
      "जय श्री माँ बगलामुखी! पंडित जी, मुझे सिद्ध 108 दानों वाली रुद्राक्ष जप माला के बारे में जानकारी व परामर्श चाहिए।";
    return getWhatsAppUrl(text, "primary");
  };

  return (
    <section
      aria-label="रुद्राक्ष माला परिचय"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-[#FDF9F2] to-[#FFFDF8] py-2 sm:py-2 border-t border-b border-[#EADCC7]"
    >
      {/* Decorative Golden Foliage on Far Left */}
      <div
        className="absolute -left-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30 hidden 2xl:block"
        aria-hidden="true"
      >
        <svg width="80" height="260" viewBox="0 0 80 260" fill="none" stroke="#D4AF37">
          <path d="M10 10 Q 50 130 10 250" strokeWidth="1.5" />
          {[30, 70, 110, 150, 190, 230].map((y, idx) => (
            <g key={y} transform={idx % 2 === 0 ? "scale(1,1)" : "scale(-1,1) translate(-20,0)"}>
              <path
                d={`M25 ${y} C45 ${y - 15} 65 ${y - 5} 55 ${y + 15} C40 ${y + 15} 30 ${y + 10} 25 ${y}`}
                fill="#D4AF37"
                fillOpacity="0.25"
                strokeWidth="1"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Decorative Golden Foliage on Far Right */}
      <div
        className="absolute -right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30 hidden 2xl:block scale-x-[-1]"
        aria-hidden="true"
      >
        <svg width="80" height="260" viewBox="0 0 80 260" fill="none" stroke="#D4AF37">
          <path d="M10 10 Q 50 130 10 250" strokeWidth="1.5" />
          {[30, 70, 110, 150, 190, 230].map((y, idx) => (
            <g key={y} transform={idx % 2 === 0 ? "scale(1,1)" : "scale(-1,1) translate(-20,0)"}>
              <path
                d={`M25 ${y} C45 ${y - 15} 65 ${y - 5} 55 ${y + 15} C40 ${y + 15} 30 ${y + 10} 25 ${y}`}
                fill="#D4AF37"
                fillOpacity="0.25"
                strokeWidth="1"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ============ LEFT & CENTER: IMAGE + CONTENT ============ */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-7">
            {/* Mala Image in Wooden Bowl */}
            <div className="relative w-full sm:w-[280px] md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#EBDCC5] shadow-[0_4px_20px_rgba(90,44,24,0.06)] shrink-0 group">
              <Image
                src="/images/rudraksha-mala-showcase.jpg"
                alt="108 दानों वाली सिद्ध रुद्राक्ष जप माला"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Mala Content Description */}
            <div className="flex-1 flex flex-col justify-center text-left">
              <h3 className="font-serif text-2xl xs:text-3xl font-black text-[#3B1E08] leading-tight tracking-tight mb-2.5">
                {t({ hi: "रुद्राक्ष माला", en: "Rudraksha Mala" })}
              </h3>

              <p className="text-xs sm:text-[13.5px] text-[#6B5A52] leading-relaxed mb-4">
                {t({
                  hi: "रुद्राक्ष माला जाप, ध्यान और साधना के लिए विशेष रूप से उपयोगी है। यह मन को शांत करती है, एकाग्रता बढ़ाती है और आध्यात्मिक ऊर्जा के स्तर को ऊंचा करती है।",
                  en: "Rudraksha Mala is uniquely powerful for chanting, meditation, and spiritual practice. It pacifies the mind, deepens focus, and elevates spiritual consciousness.",
                })}
              </p>

              {/* 3 Checkmark Bullet Points */}
              <ul className="space-y-2 mb-5">
                {malaPoints.map((point) => (
                  <li key={point.id} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5A2C18] text-[#FFF9EE] shrink-0">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-xs sm:text-[13.5px] font-bold text-[#3B1E08]">
                      {t(point)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button: माला के बारे में जानें → */}
              <div>
                <a
                  href={getWhatsAppMalaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#5A2C18] hover:bg-[#431F10] py-2.5 px-5 text-xs sm:text-sm font-bold text-[#FFF9EE] shadow-sm hover:shadow-md transition-colors cursor-pointer"
                >
                  <span>{t({ hi: "माला के बारे में जानें", en: "Learn About Mala" })}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ============ RIGHT: ORNATE QUOTE CARD WITH OM ============ */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl border border-[#E6D5BE] bg-[#FDFBF7] p-6 sm:p-7 shadow-[0_4px_20px_rgba(90,44,24,0.05)] flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Corner Filigree: Top-Left */}
              <svg
                className="absolute top-2.5 left-2.5 h-8 w-8 text-[#C9A063]/70 pointer-events-none"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M2 38 V8 C2 4.7 4.7 2 8 2 H38" strokeWidth="1.6" />
                <path d="M6 34 V12 C6 8.7 8.7 6 12 6 H34" strokeWidth="1" strokeDasharray="1.5 2.5" />
                <circle cx="9" cy="9" r="2.5" fill="currentColor" fillOpacity="0.5" />
              </svg>

              {/* Corner Filigree: Top-Right */}
              <svg
                className="absolute top-2.5 right-2.5 h-8 w-8 text-[#D4AF37]/70 pointer-events-none rotate-90"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M2 38 V8 C2 4.7 4.7 2 8 2 H38" strokeWidth="1.6" />
                <path d="M6 34 V12 C6 8.7 8.7 6 12 6 H34" strokeWidth="1" strokeDasharray="1.5 2.5" />
                <circle cx="9" cy="9" r="2.5" fill="currentColor" fillOpacity="0.5" />
              </svg>

              {/* Corner Filigree: Bottom-Left */}
              <svg
                className="absolute bottom-2.5 left-2.5 h-8 w-8 text-[#D4AF37]/70 pointer-events-none -rotate-90"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M2 38 V8 C2 4.7 4.7 2 8 2 H38" strokeWidth="1.6" />
                <path d="M6 34 V12 C6 8.7 8.7 6 12 6 H34" strokeWidth="1" strokeDasharray="1.5 2.5" />
                <circle cx="9" cy="9" r="2.5" fill="currentColor" fillOpacity="0.5" />
              </svg>

              {/* Corner Filigree: Bottom-Right */}
              <svg
                className="absolute bottom-2.5 right-2.5 h-8 w-8 text-[#D4AF37]/70 pointer-events-none rotate-180"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M2 38 V8 C2 4.7 4.7 2 8 2 H38" strokeWidth="1.6" />
                <path d="M6 34 V12 C6 8.7 8.7 6 12 6 H34" strokeWidth="1" strokeDasharray="1.5 2.5" />
                <circle cx="9" cy="9" r="2.5" fill="currentColor" fillOpacity="0.5" />
              </svg>

              {/* Top Quote Mark Icon */}
              <div
                className="font-serif text-3xl sm:text-4xl text-[#8B5A14] font-black leading-none mb-2 select-none"
                aria-hidden="true"
              >
                “
              </div>

              {/* Sacred Quote Body */}
              <blockquote className="font-serif text-sm sm:text-[15px] font-semibold text-[#3B1E08] leading-relaxed px-2 my-1">
                {language === "hi" ? (
                  <>
                    रुद्राक्ष केवल एक बीज नहीं,
                    <br />
                    यह शिव की कृपा का प्रतीक है,
                    <br />
                    जो आपके जीवन में शांति,
                    <br />
                    सुरक्षा और सकारात्मक ऊर्जा
                    <br />
                    प्रदान करता है।
                  </>
                ) : (
                  <>
                    Rudraksha is not just a seed,
                    <br />
                    it is the divine symbol of Shiva&apos;s grace,
                    <br />
                    bringing peace, protection,
                    <br />
                    and positive energy into your life.
                  </>
                )}
              </blockquote>

              {/* Golden Om Symbol at Bottom */}
              <div
                className="font-serif text-3xl sm:text-4xl text-[#8B5A14] font-bold mt-3 leading-none select-none drop-shadow-xs"
                aria-hidden="true"
              >
                ॐ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
