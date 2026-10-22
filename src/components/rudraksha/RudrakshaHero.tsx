"use client";

import Image from "next/image";
import Link from "next/link";
import { UserCheck } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

const PHONE = "7223083313";

export default function RudrakshaHero() {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
    "जय श्री माँ बगलामुखी! पंडित जी, मुझे असली और सिद्ध रुद्राक्ष के चयन व पूजन विधि हेतु मार्गदर्शन चाहिए।"
  )}`;

  return (
    <section
      aria-label="Original Rudraksha - असली रुद्राक्ष"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#FFFDF8] via-[#FAF4E6] to-[#FFFDF8] border-b border-[#EADCC7] pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12"
    >
      {/* Sacred Subtle Mandala Background Watermark Ornament */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] opacity-[0.08] select-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#8B5A14" strokeWidth="0.8" className="h-full w-full">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="75" />
          <circle cx="100" cy="100" r="60" />
          <circle cx="100" cy="100" r="45" />
          <circle cx="100" cy="100" r="30" />
          <path d="M100 10 L100 190 M10 100 L190 100" />
          <path d="M36.36 36.36 L163.64 163.64 M36.36 163.64 L163.64 36.36" />
          <polygon points="100,20 170,140 30,140" stroke="#8B5A14" strokeWidth="0.6" />
          <polygon points="100,180 30,60 170,60" stroke="#8B5A14" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#8B5A14] mb-4 sm:mb-6"
        >
          <Link href="/" className="hover:text-[#5A2C18] transition-colors">
            {t({ hi: "मुख्य पृष्ठ", en: "Home" })}
          </Link>
          <span className="text-[#D4AF37] font-bold">/</span>
          <span className="text-[#3B1E08] font-bold">
            {t({ hi: "असली रुद्राक्ष संग्रह", en: "Original Rudraksha" })}
          </span>
        </nav>

        {/* Hero Grid Container: Left Text & Buttons + Right High-Res Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ============ LEFT COLUMN: TEXT CONTENT & CTAS ============ */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* 1. Kicker / Tagline */}
            <p className="font-serif text-xs sm:text-sm font-bold tracking-widest text-[#9A5B18] uppercase mb-2">
              पवित्रता • आस्था • परंपरा
            </p>

            {/* 2. Main Dual-Language Heading */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-black text-[#3B1E08] leading-[1.15] tracking-tight">
              Original Rudraksha
            </h1>
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-[#3B1E08] leading-tight mt-1 mb-4">
              — असली रुद्राक्ष —
            </h2>

            {/* 3. Description Subtitle (Always in authentic Hindi as requested) */}
            <p className="text-xs xs:text-sm sm:text-[15px] text-[#6B5A52] leading-relaxed max-w-xl mb-6 sm:mb-8 font-medium">
              हमारे यहाँ सभी प्रकार के असली रुद्राक्ष और प्रमाणित रुद्राक्ष उपलब्ध हैं। इनके बारे में विस्तृत जानकारी प्राप्त करें और अपनी आध्यात्मिक यात्रा के अनुसार सही रुद्राक्ष चुनने हेतु पंडित जी से मार्गदर्शन लें।
            </p>

            {/* 4. Action Buttons (Side-by-side) */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Button 1: Dark Brown Solid WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#5A2C18] hover:bg-[#431F10] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#FFF9EE] transition-colors shadow-md hover:shadow-lg cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>{t({ hi: "WhatsApp पर पूछें", en: "Ask on WhatsApp" })}</span>
              </a>

              {/* Button 2: Outlined Consultation Button */}
              <a
                href={`tel:+91${PHONE}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#854522] bg-[#FAF3E3]/80 hover:bg-[#F3E7CE] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#5A2C18] transition-colors shadow-xs hover:shadow-md cursor-pointer"
              >
                <UserCheck className="h-4 w-4 text-[#854522]" />
                <span>{t({ hi: "पंडित जी से मार्गदर्शन लें", en: "Consult Pandit Ji" })}</span>
              </a>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: HIGH-RES RUDRAKSHA HERO IMAGE ============ */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5D4BC] shadow-[0_12px_36px_rgba(90,44,24,0.12)] bg-[#FBF7EE]">
              <Image
                src="/images/rudraksha-hero.jpg"
                alt="Original Rudraksha Mala - असली सिद्ध रुद्राक्ष"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle inner gradient shadow along edges for depth */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
