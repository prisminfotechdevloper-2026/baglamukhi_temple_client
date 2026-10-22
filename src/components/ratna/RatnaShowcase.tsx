"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PHONE = "7223083313";

export default function RatnaShowcase() {
  const { t, language } = useLanguage();

  const ratnaPoints = [
    {
      id: "point-natural",
      hi: "100% प्राकृतिक और प्रमाणित रत्न",
      en: "100% Natural & Certified Gemstones",
    },
    {
      id: "point-astrology",
      hi: "ज्योतिषीय परामर्श के अनुसार चयन",
      en: "Selected per Astrological Consultation",
    },
    {
      id: "point-guarantee",
      hi: "उचित गुणवत्ता और प्रामाणिकता की गारंटी",
      en: "Guaranteed Quality & Authenticity",
    },
    {
      id: "point-balance",
      hi: "जीवन के विभिन्न क्षेत्रों में संतुलन और समृद्धि",
      en: "Balance & Prosperity in All Aspects of Life",
    },
  ];

  const getWhatsAppRatnaUrl = () => {
    const text =
      "जय श्री माँ बगलामुखी! पंडित जी, मुझे अपनी कुंडली अनुसार उपयुक्त असली व प्रमाणित रत्न चयन हेतु मार्गदर्शन चाहिए।";
    return `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      aria-label="रत्न चयन एवं महत्व"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-[#FDF9F2] to-[#FFFDF8] py-8 sm:py-10 lg:py-12 border-t border-b border-[#EADCC7]"
    >
      {/* Decorative Golden Foliage on Far Left Bottom */}
      <div
        className="absolute -left-2 bottom-0 pointer-events-none opacity-40 hidden sm:block"
        aria-hidden="true"
      >
        <svg width="90" height="130" viewBox="0 0 90 130" fill="none">
          <path
            d="M5 125 C 20 85, 45 60, 80 40"
            stroke="#D4AF37"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Leaf 1 */}
          <path
            d="M20 105 C 10 90, 15 75, 30 82 C 40 88, 32 102, 20 105 Z"
            fill="#C9A063"
            fillOpacity="0.45"
            stroke="#B8860B"
            strokeWidth="0.8"
          />
          {/* Leaf 2 */}
          <path
            d="M38 85 C 42 68, 58 65, 55 80 C 52 92, 40 92, 38 85 Z"
            fill="#D4AF37"
            fillOpacity="0.5"
            stroke="#B8860B"
            strokeWidth="0.8"
          />
          {/* Leaf 3 */}
          <path
            d="M58 60 C 55 42, 70 35, 78 48 C 82 58, 68 67, 58 60 Z"
            fill="#C9A063"
            fillOpacity="0.45"
            stroke="#B8860B"
            strokeWidth="0.8"
          />
          {/* Small accents */}
          <circle cx="28" cy="98" r="2" fill="#D4AF37" fillOpacity="0.6" />
          <circle cx="48" cy="74" r="2.5" fill="#D4AF37" fillOpacity="0.6" />
          <circle cx="70" cy="50" r="2" fill="#D4AF37" fillOpacity="0.6" />
        </svg>
      </div>

      {/* Decorative Golden Foliage on Far Right Bottom */}
      <div
        className="absolute -right-2 bottom-0 pointer-events-none opacity-40 hidden sm:block scale-x-[-1]"
        aria-hidden="true"
      >
        <svg width="90" height="130" viewBox="0 0 90 130" fill="none">
          <path
            d="M5 125 C 20 85, 45 60, 80 40"
            stroke="#D4AF37"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M20 105 C 10 90, 15 75, 30 82 C 40 88, 32 102, 20 105 Z"
            fill="#C9A063"
            fillOpacity="0.45"
            stroke="#B8860B"
            strokeWidth="0.8"
          />
          <path
            d="M38 85 C 42 68, 58 65, 55 80 C 52 92, 40 92, 38 85 Z"
            fill="#D4AF37"
            fillOpacity="0.5"
            stroke="#B8860B"
            strokeWidth="0.8"
          />
          <path
            d="M58 60 C 55 42, 70 35, 78 48 C 82 58, 68 67, 58 60 Z"
            fill="#C9A063"
            fillOpacity="0.45"
            stroke="#B8860B"
            strokeWidth="0.8"
          />
          <circle cx="28" cy="98" r="2" fill="#D4AF37" fillOpacity="0.6" />
          <circle cx="48" cy="74" r="2.5" fill="#D4AF37" fillOpacity="0.6" />
          <circle cx="70" cy="50" r="2" fill="#D4AF37" fillOpacity="0.6" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ============ LEFT & CENTER: IMAGE + CONTENT ============ */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7">
            {/* Gemstones Image in Brass Thali */}
            <div className="relative w-full sm:w-[280px] md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#EBDCC5] shadow-[0_4px_20px_rgba(90,44,24,0.08)] shrink-0 group">
              <Image
                src="/images/ratna-showcase.jpg"
                alt="प्राकृतिक एवं प्रमाणित नवरत्न संग्रह - असली रत्न"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Content Description */}
            <div className="flex-1 flex flex-col justify-center text-left">
              <h3 className="font-serif text-2xl xs:text-3xl font-black text-[#6B1D14] leading-tight tracking-tight mb-2.5">
                {t({ hi: "क्यों धारण करें असली रत्न?", en: "Why Wear Authentic Gemstones?" })}
              </h3>

              <p className="text-xs sm:text-[13.5px] text-[#5C4A3E] leading-relaxed mb-4">
                {t({
                  hi: "प्राकृतिक और प्रमाणित रत्न न केवल जीवन की समस्याओं में सहायक होते हैं बल्कि आपके ग्रहों की सकारात्मक ऊर्जा को भी बढ़ाते हैं। उचित ज्योतिषीय मार्गदर्शन के साथ धारण किया गया रत्न अधिक प्रभावी होता है।",
                  en: "Natural and certified gemstones not only help alleviate life problems but also amplify positive planetary energies. A gemstone worn with proper astrological guidance yields significantly greater results.",
                })}
              </p>

              {/* 4 Checkmark Bullet Points */}
              <ul className="space-y-2 mb-5">
                {ratnaPoints.map((point) => (
                  <li key={point.id} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5A2C18] text-[#FFF9EE] shrink-0 shadow-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-xs sm:text-[13.5px] font-bold text-[#3B1E08]">
                      {t(point)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button: रत्न चयन के लिए मार्गदर्शन लें  → */}
              <div>
                <a
                  href={getWhatsAppRatnaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#5A2C18] hover:bg-[#431F10] py-2.5 px-5 text-xs sm:text-sm font-bold text-[#FFF9EE] shadow-sm hover:shadow-md transition-colors cursor-pointer"
                >
                  <span>
                    {t({
                      hi: "रत्न चयन के लिए मार्गदर्शन लें",
                      en: "Get Guidance for Gemstone Selection",
                    })}
                  </span>
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
                <path
                  d="M6 34 V12 C6 8.7 8.7 6 12 6 H34"
                  strokeWidth="1"
                  strokeDasharray="1.5 2.5"
                />
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
                <path
                  d="M6 34 V12 C6 8.7 8.7 6 12 6 H34"
                  strokeWidth="1"
                  strokeDasharray="1.5 2.5"
                />
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
                <path
                  d="M6 34 V12 C6 8.7 8.7 6 12 6 H34"
                  strokeWidth="1"
                  strokeDasharray="1.5 2.5"
                />
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
                <path
                  d="M6 34 V12 C6 8.7 8.7 6 12 6 H34"
                  strokeWidth="1"
                  strokeDasharray="1.5 2.5"
                />
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
                    सही रत्न केवल आभूषण नहीं,
                    <br />
                    यह ग्रहों की कृपा का माध्यम है,
                    <br />
                    जो आपके जीवन में सकारात्मक
                    <br />
                    ऊर्जा, स्वास्थ्य, समृद्धि और
                    <br />
                    सफलता लाता है।
                  </>
                ) : (
                  <>
                    An authentic gemstone is not merely an ornament,
                    <br />
                    it is a divine medium of planetary grace,
                    <br />
                    bringing positive energy, health,
                    <br />
                    prosperity, and success
                    <br />
                    into your life.
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
