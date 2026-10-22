"use client";

import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

const PHONE = siteConfig.contact.primaryPhone;

export default function RatnaHero() {
  const { t } = useLanguage();

  const whatsappUrl = getWhatsAppUrl(
    "जय श्री माँ बगलामुखी! पंडित जी, मुझे अपनी जन्मकुंडली व राशि के अनुसार 100% असली व प्रमाणित रत्न (Navratna Gemstones) के चयन हेतु मार्गदर्शन चाहिए।"
  );

  return (
    <section
      aria-label="Original Ratna - असली रत्न (Gemstones)"
      className="relative isolate w-full overflow-hidden border-b border-[#EADCC7] min-h-[520px] xs:min-h-[550px] sm:min-h-[580px] lg:min-h-[420px] xl:min-h-[460px] flex items-start lg:items-center"
    >
      {/* ================= BACKGROUND IMAGES ================= */}
      {/* 1. Large Screen Background Banner (Desktop >= 1024px) */}
      <div className="hidden lg:block absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/ratna-hero-desktop.png"
          alt="Original Ratna Gemstones Collection Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right xl:object-center"
          quality={95}
        />
        {/* Soft edge gradient to ensure 100% crisp text readability on the left without covering gemstones on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8]/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Small Screen Background Image (Mobile & Tablet < 1024px) */}
      <div className="block lg:hidden absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/ratna-hero-mobile.jpg"
          alt="Original Ratna Gemstones Mobile Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
          quality={90}
        />
        {/* Gentle top fade for contrast over bokeh background on mobile */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#FFFDF8]/60 via-[#FAF4E6]/25 to-transparent pointer-events-none" />
      </div>

      {/* ================= MAIN FOREGROUND CONTENT ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 pb-8 xs:pt-4 xs:pb-10 sm:pt-6 sm:pb-12 lg:py-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-1.5 text-[11px] xs:text-xs sm:text-[13px] font-semibold text-[#8C5824] mb-1.5 sm:mb-2"
        >
          <Link href="/" className="hover:text-[#5A2C18] transition-colors">
            {t({ hi: "मुख्य पृष्ठ", en: "Home" })}
          </Link>
          <span className="text-[#D4AF37] font-bold">/</span>
          <span className="text-[#3B1E08] font-bold">
            {t({ hi: "असली रत्न (Gemstones)", en: "Original Ratna" })}
          </span>
        </nav>

        {/* Content Wrapper aligned left, moved to top on mobile for maximum balance and visibility */}
        <div className="w-full lg:max-w-2xl xl:max-w-[620px] flex flex-col items-start text-left">
          {/* 1. Kicker / Subtitle with sacred bullet points */}
          <p className="font-serif text-[11px] xs:text-xs sm:text-sm md:text-base font-bold tracking-wide text-[#8C5824] mb-1 sm:mb-1.5">
            पवित्रता • ऊर्जा • समृद्धि
          </p>

          {/* 2. Main Title in English & Hindi with Em Dashes */}
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black text-[#3B1E08] leading-[1.12] tracking-tight">
            Original Ratna
          </h1>
          <h2 className="font-serif text-xl xs:text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-bold text-[#3B1E08] leading-snug pt-0.5 mt-1.5 mb-2 sm:mb-3">
            — असली रत्न (Gemstones) —
          </h2>

          {/* 3. Description Subtitle (Kept in authentic Hindi as specified) */}
          <p className="text-[12px] xs:text-[13px] sm:text-[15px] text-[#4A3B32] leading-relaxed font-medium mb-3.5 sm:mb-5 max-w-xl">
            हमारे यहाँ सभी प्रकार के प्रमाणित और प्राकृतिक रत्न उपलब्ध हैं। इनके बारे में विस्तृत जानकारी प्राप्त करें और अपनी जन्मकुंडली व आवश्यकताओं के अनुसार सही रत्न चुनने हेतु पंडित जी से मार्गदर्शन लें।
          </p>

          {/* 4. Action Buttons (Side by Side in one row with fit width on large screens) */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3.5 w-fit max-w-full">
            {/* WhatsApp Button: Deep Maroon/Brown */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-auto shrink-0 items-center justify-center gap-2 rounded-xl bg-[#5A2C18] hover:bg-[#431F10] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#FFF9EE] transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
              <span>{t({ hi: "WhatsApp पर पूछें", en: "Ask on WhatsApp" })}</span>
            </a>

            {/* Pandit Ji Consultation Button: Elegant Warm Outlined */}
            <a
              href={`tel:+91${PHONE}`}
              className="inline-flex w-auto shrink-0 items-center justify-center gap-2 rounded-xl border-[1.5px] border-[#8C5824]/60 bg-[#FAF3E3]/85 hover:bg-[#FFFDF8] hover:border-[#5A2C18] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#3B1E08] transition-colors duration-200 shadow-xs hover:shadow-md cursor-pointer backdrop-blur-xs"
            >
              <User className="h-4 w-4 shrink-0 text-[#8C5824]" />
              <span>{t({ hi: "पंडित जी से मार्गदर्शन लें", en: "Consult Pandit Ji" })}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
