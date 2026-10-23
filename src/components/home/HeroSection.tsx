"use client";

import Image, { getImageProps } from "next/image";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { usePujaBooking } from "@/context/PujaBookingContext";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function HeroSection() {
  const { t } = useLanguage();
  const { openBookingModal } = usePujaBooking();

  const commonBg = { alt: "श्री माँ बगलामुखी मंदिर गर्भगृह", fill: true };
  const {
    props: { srcSet: desktopBgSrcSet },
  } = getImageProps({
    ...commonBg,
    src: "/images/hero-desktop.webp",
  });
  const {
    props: { srcSet: mobileBgSrcSet, ...mobileBgRest },
  } = getImageProps({
    ...commonBg,
    src: "/images/hero-mobile.webp",
  });

  const whatsappMessage =
    "जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी सिद्धपीठ नलखेड़ा में पूजा व हवन अनुष्ठान के संदर्भ में जानकारी प्राप्त करनी है।";

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-6 sm:py-8 lg:py-12 min-h-[420px] sm:min-h-[460px] lg:min-h-[490px]">
      {/* ================= 1. RESPONSIVE BACKGROUND WITH SUBTLE OVERLAY ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture className="h-full w-full">
          <source media="(min-width: 768px)" srcSet={desktopBgSrcSet} />
          <source media="(max-width: 767px)" srcSet={mobileBgSrcSet} />
          <img
            {...mobileBgRest}
            alt="श्री माँ बगलामुखी मंदिर गर्भगृह"
            className="h-full w-full object-cover object-center"
          />
        </picture>
        {/* Soft Vignette / Gradient for crystal clear legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/65 lg:to-black/45" />
      </div>

      {/* ================= 2. CONTENT LAYER (PREMIUM, EDITORIAL & ARCHITECTURAL) ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* ================= LEFT COLUMN: SHARP, REGAL & STRUCTURED ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Sacred Gold-Trim Eyebrow (No oval bubble) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#250606]/85 border-l-[3px] border-[#D89B18] shadow-sm mb-2.5">
              <span className="font-serif text-[11px] sm:text-xs font-bold text-[#F5C26B] tracking-wider">
                {t({
                  hi: "॥ ॐ ह्लीं बगलामुख्यै नमः ॥ • नलखेड़ा सिद्धपीठ",
                  en: "॥ Om Hleem Baglamukhyai Namah ॥ • Nalkheda Dham",
                })}
              </span>
            </div>

            {/* 2. Main Page H1 Heading */}
            <h1 className="font-serif text-2xl xs:text-[28px] sm:text-3.5xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.22] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              <span>
                {t({
                  hi: "माँ बगलामुखी पूजा एवं सिद्ध हवन",
                  en: "Maa Baglamukhi Puja & Siddha Hawan",
                })}
              </span>
            </h1>

            {/* 3. Subheading with Golden Accent Line */}
            <div className="mt-1.5 flex items-center gap-2">
              <span className="h-0.5 w-5 bg-[#D89B18] shrink-0" />
              <p className="font-serif text-sm xs:text-base sm:text-lg font-bold text-[#F5C26B]">
                {t({
                  hi: "विश्व प्रसिद्ध सिद्ध शक्तिपीठ • नलखेड़ा धाम",
                  en: "World-Renowned Siddha Shakti Peeth • Nalkheda Dham",
                })}
              </p>
            </div>

            {/* 4. Pandit Credential Card (Crisp, High Trust, Non-monotonous) */}
            <div className="mt-3 w-full max-w-lg bg-black/60 backdrop-blur-md border border-[#D89B18]/30 border-l-[4px] border-l-[#D89B18] rounded-r-lg px-3 py-2 flex items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded bg-[#800000] border border-[#D89B18]/60 flex items-center justify-center shrink-0 shadow-xs">
                  <span className="text-[#F5C26B] font-serif font-bold text-xs">पं</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white text-xs sm:text-sm font-bold truncate">
                      {t({ hi: "पं. दीपक शर्मा", en: "Pt. Deepak Sharma" })}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-[#F5C26B] font-semibold border border-[#D89B18]/40 shrink-0">
                      {t({ hi: "मुख्य यज्ञाचार्य", en: "Chief Priest" })}
                    </span>
                  </div>
                  <p className="text-stone-300 text-[11px] truncate">
                    {t({ hi: "उज्जैन वेद विद्यालय से शास्त्रीय दीक्षा प्राप्त", en: "Vedic Classical Initiation, Ujjain" })}
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Short Supporting Vedic Purpose Copy */}
            <p className="mt-2.5 max-w-xl text-stone-200 text-xs sm:text-sm leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {t({
                hi: "शत्रु बाधा, कोर्ट-कचहरी, तंत्र दोष व व्यापार वृद्धि हेतु शास्त्रोक्त सवा लाख महाहवन। स्वयं उपस्थित होकर अथवा घर बैठे लाइव वीडियो संकल्प लें।",
                en: "Vedic Anushthan & Hawan for overcoming obstacles, legal victories, and prosperity. Attend in person or take Live Video Sankalp from home.",
              })}
            </p>

            {/* 6. Action Grid: 2 Crisp Side-by-Side Buttons (No Monotonous Sausage Pills) */}
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3.5 w-full max-w-md">
              {/* Primary Booking Button */}
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 rounded-lg bg-gradient-to-r from-[#8B0000] via-[#9E0606] to-[#7A0505] hover:from-[#A00000] hover:to-[#600303] text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-950/50 border border-[#D89B18]/60 hover:border-[#F5C26B] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <CalendarCheck className="h-4 w-4 text-[#F5C26B] shrink-0" />
                <span className="truncate">
                  {t({
                    hi: "पूजा / हवन बुक करें",
                    en: "Book Puja / Hawan",
                  })}
                </span>
              </button>

              {/* Secondary WhatsApp Direct Enquiry */}
              <a
                href={getWhatsAppUrl(whatsappMessage, "primary")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 rounded-lg bg-white/95 hover:bg-white text-stone-900 font-bold text-xs sm:text-sm shadow-md border border-stone-200 hover:border-[#25D366] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0" />
                <span className="truncate">
                  {t({
                    hi: "WhatsApp परामर्श",
                    en: "Chat on WhatsApp",
                  })}
                </span>
              </a>
            </div>

            {/* 7. Structured 3-Card Trust Strip (Horizontal Grid, Crisp Gold Accents) */}
            <div className="mt-4 pt-3 border-t border-amber-400/20 grid grid-cols-3 gap-2 w-full max-w-xl">
              <div className="bg-black/50 backdrop-blur-xs border border-amber-500/25 border-l-2 border-l-[#D89B18] rounded-r p-2 flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#F5C26B] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs font-bold text-amber-100 truncate">
                    {t({ hi: "नाम-गोत्र संकल्प", en: "Gotra Sankalp" })}
                  </p>
                  <p className="text-[9.5px] text-stone-300 hidden sm:block truncate">
                    {t({ hi: "शास्त्रोक्त वैदिक विधि", en: "Vedic ritual" })}
                  </p>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-xs border border-amber-500/25 border-l-2 border-l-[#D89B18] rounded-r p-2 flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#F5C26B] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs font-bold text-amber-100 truncate">
                    {t({ hi: "लाइव वीडियो दर्शन", en: "Live Darshan" })}
                  </p>
                  <p className="text-[9.5px] text-stone-300 hidden sm:block truncate">
                    {t({ hi: "घर बैठे दर्शन सुविधा", en: "Direct stream" })}
                  </p>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-xs border border-amber-500/25 border-l-2 border-l-[#D89B18] rounded-r p-2 flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#F5C26B] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-xs font-bold text-amber-100 truncate">
                    {t({ hi: "डाक द्वारा प्रसाद", en: "Prasad Delivery" })}
                  </p>
                  <p className="text-[9.5px] text-stone-300 hidden sm:block truncate">
                    {t({ hi: "रक्षा सूत्र व भस्म", en: "By Speed Post" })}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: SACRED MURTI (RESPECTFUL & BALANCED) ================= */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center">
            <div className="relative group flex flex-col items-center">
              {/* Soft warm aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-tr from-amber-400/25 via-yellow-300/20 to-orange-500/15 blur-2xl pointer-events-none" />

              <div className="relative w-[240px] h-[240px] lg:w-[280px] lg:h-[280px] aspect-square transition-transform duration-300 group-hover:scale-102">
                <Image
                  src="/images/baglamukhi-logo.webp"
                  alt="माँ बगलामुखी दिव्य स्वरूप नलखेड़ा"
                  fill
                  sizes="(max-width: 1024px) 240px, 280px"
                  priority
                  className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)] drop-shadow-[0_0_25px_rgba(216,155,24,0.35)] select-none"
                />
              </div>

              <div className="mt-3 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-[#D89B18]/50 shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D89B18]" />
                  <span className="font-serif text-xs font-bold text-amber-200">
                    {t({
                      hi: "॥ साक्षात् सिद्ध माँ पीताम्बरा पीठ ॥",
                      en: "॥ Divine Maa Pitambara Peeth ॥",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}