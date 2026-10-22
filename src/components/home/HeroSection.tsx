"use client";

import Image, { getImageProps } from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Flame,
  MapPin,
  ShieldCheck,
  Scale,
  TrendingUp,
  Home,
  HeartPulse,
  Landmark,
  User,
  ArrowRight,
  ChevronRight,
  Flower2,
  Leaf,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

/* ---------------------------------------------------------------------------
   Small reusable pieces
--------------------------------------------------------------------------- */

function TrishulIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="12" y1="2" x2="12" y2="22" />
      <polyline points="9 6 12 2 15 6" />
      <path d="M6 8c0 4 3 6 6 6" />
      <polyline points="4 8 6 6 8 8" />
      <path d="M18 8c0 4-3 6-6 6" />
      <polyline points="16 8 18 6 20 8" />
    </svg>
  );
}

/** ──◇── style ornament used in mobile subtitle / CTA */
function Ornament({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center gap-1 text-amber-300/80 ${className}`}
    >
      <span className="h-px w-5 sm:w-8 bg-amber-300/70" />
      <span className="h-1.5 w-1.5 rotate-45 border border-amber-300/90" />
    </span>
  );
}

/* Shared card skin for mobile */
const CARD =
  "rounded-2xl border border-amber-400/70 bg-black/75 shadow-xl backdrop-blur-md";

/* ---------------------------------------------------------------------------
   Data
--------------------------------------------------------------------------- */

const highlights = [
  {
    hi: "शास्त्रोक्त तंत्र-मंत्र पद्धति",
    en: "Authentic Tantra-Mantra Vidhan",
  },
  {
    hi: "संकल्प आधारित व्यक्तिगत हवन",
    en: "Sankalp-Based Personal Hawan",
  },
  {
    hi: "लाइव वीडियो दर्शन सुविधा",
    en: "Live Video Call Darshan",
  },
  {
    hi: "अभिमंत्रित प्रसाद डाक द्वारा",
    en: "Abhimantrit Prasad Delivery",
  },
];

const crisisBadges = [
  { icon: ShieldCheck, hi: "शत्रु स्तम्भन", en: "Enemy Suppression" },
  { icon: Scale, hi: "कोर्ट केस विजय", en: "Court Case Victory" },
  { icon: TrendingUp, hi: "व्यापार वृद्धि", en: "Business Growth" },
  { icon: Home, hi: "गृह क्लेश शांति", en: "Family Peace" },
  { icon: HeartPulse, hi: "रोग-दोष निवारण", en: "Health & Relief" },
];

/* ---------------------------------------------------------------------------
   Component
--------------------------------------------------------------------------- */

export default function HeroSection() {
  const { t } = useLanguage();

  const commonBg = { alt: "श्री माँ बगलामुखी मंदिर गर्भगृह", fill: true };
  const {
    props: { srcSet: desktopBgSrcSet },
  } = getImageProps({
    ...commonBg,
    src: "/images/hero-desktop.png",
  });
  const {
    props: { srcSet: mobileBgSrcSet, ...mobileBgRest },
  } = getImageProps({
    ...commonBg,
    src: "/images/hero-mobile.png",
  });

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-5 sm:py-7 lg:py-10 min-h-[85vh] lg:min-h-[90vh]">
      {/* ================= 1. SCREEN-COMPATIBLE RESPONSIVE BACKGROUND ================= */}
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
      </div>

      {/* ================= 2. CONTENT LAYER ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            DESKTOP LAYOUT (lg:grid): Exact horizontal alignment from original desktop screenshot
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column: Horizontal Desktop Composition */}
          <div className="col-span-7 flex flex-col items-start text-left">
            {/* Sacred Mantra Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-black/50 border border-amber-400/50 px-3.5 py-1 text-xs font-semibold text-amber-200 mb-2.5 backdrop-blur-md shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-serif">
                {t({
                  hi: "॥ ॐ ह्लीं बगलामुखिए नमः ॥",
                  en: "॥ Om Hleem Baglamukhyai Namah ॥",
                })}
              </span>
            </div>

            {/* Main Headings (Single wide lines) */}
            <h1 className="font-serif text-3xl lg:text-[42px] xl:text-[46px] font-extrabold text-white tracking-tight leading-[1.25] pt-0.5 drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]">
              <span className="block">
                {t({
                  hi: "श्री माँ बगलामुखी दिव्य धाम",
                  en: "Shri Maa Baglamukhi Divya Dham",
                })}
              </span>
              <span className="block mt-1 text-xl lg:text-[28px] xl:text-[32px] font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
                {t({
                  hi: "विश्व प्रसिद्ध सिद्ध शक्तिपीठ • नलखेड़ा",
                  en: "World-Renowned Siddha Shakti Peeth • Nalkheda",
                })}
              </span>
            </h1>

            {/* Head Priest Subtitle (Horizontal pill) */}
            <div className="mt-2.5 inline-flex items-center gap-2 rounded-full bg-black/55 border border-amber-400/50 px-3.5 py-1 text-xs font-semibold text-amber-200 backdrop-blur-md shadow-sm">
              <span className="inline-flex items-center gap-1.5 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-[#AF0807] animate-pulse" />
                <span>
                  {t({
                    hi: "मुख्य उपासक: पं. दीपक शर्मा",
                    en: "Chief Purohit: Pt. Deepak Sharma",
                  })}
                </span>
              </span>
              <span className="text-white/40">•</span>
              <span className="text-amber-100 font-normal">
                {t({
                  hi: "उज्जैन वेद विद्यालय शास्त्रीय दीक्षा • व्यक्तिगत नाम-गोत्र संकल्प",
                  en: "Vedic Classical Initiation • Personal Name-Gotra Sankalp",
                })}
              </span>
            </div>

            {/* Sacred Maha Mantra Box (Wide horizontal card) */}
            <div className="mt-3.5 w-full max-w-xl xl:max-w-2xl rounded-2xl bg-gradient-to-r from-black/75 via-black/85 to-black/75 border border-amber-400/50 p-3.5 backdrop-blur-md shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-amber-400/10 font-serif text-5xl font-black select-none pointer-events-none">
                ॐ
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 border border-amber-400/30 px-2.5 py-0.5 rounded-full">
                  {t({
                    hi: "सिद्ध तांत्रिक महामंत्र",
                    en: "Siddha Tantrik Maha Mantra",
                  })}
                </span>
                <span className="text-xs text-amber-200/80 font-serif">
                  ॥ अमोघ रक्षा कवच ॥
                </span>
              </div>
              <p className="font-serif text-[13px] xl:text-sm font-bold text-amber-100 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] break-words">
                ॥ ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥
              </p>
              {/* Crisis Resolution Tags in one horizontal row */}
              <div className="mt-2.5 pt-2 border-t border-amber-400/20 flex flex-wrap gap-1.5">
                {[
                  { hi: "शत्रु स्तम्भन", en: "Enemy Suppression" },
                  { hi: "कोर्ट केस विजय", en: "Court Case Victory" },
                  { hi: "व्यापार वृद्धि", en: "Business Growth" },
                  { hi: "गृह क्लेश शांति", en: "Family Peace" },
                  { hi: "रोग-दोष निवारण", en: "Health & Relief" },
                ].map((tag) => (
                  <span
                    key={tag.en}
                    className="text-[10.5px] font-semibold text-amber-200 bg-amber-500/15 border border-amber-400/30 rounded-md px-2 py-0.5"
                  >
                    • {t(tag)}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons (CTAs) - SIDE BY SIDE HORIZONTALLY */}
            <div className="mt-4 flex flex-row items-center gap-3 w-auto max-w-full">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-red-950/60 border border-amber-400/50 hover:border-amber-300 hover:shadow-2xl transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              >
                <CalendarCheck className="h-5 w-5 text-amber-300 shrink-0" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-extrabold tracking-wide">
                    {t({
                      hi: "विशेष अनुष्ठान व संकल्प बुक करें",
                      en: "Book Special Anushthan",
                    })}
                  </span>
                  <span className="text-[10px] text-amber-200/90 font-normal">
                    {t({
                      hi: "पंडित जी से शुभ मुहूर्त आरक्षित करें",
                      en: "Reserve Shubh Muhurat with Pandit Ji",
                    })}
                  </span>
                </div>
                <span className="text-amber-300 text-sm font-bold pl-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

              {/* Secondary CTA: WhatsApp Consultation */}
              <a
                href="https://wa.me/917223083313?text=जय%20माँ%20बगलामुखी!%20पंडित%20दीपक%20शर्मा%20जी%2C%20मुझे%20पूजा%20व%20हवन%20के%20बारे%20में%20जानकारी%20चाहिए।"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white/95 hover:bg-white px-4 py-2.5 text-sm font-bold text-[#1F2937] border-2 border-stone-200/90 hover:border-[#25D366] backdrop-blur-xl shadow-xl shadow-stone-900/15 hover:shadow-2xl hover:shadow-[#25D366]/20 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md shadow-[#25D366]/35 group-hover:scale-105 group-hover:bg-[#20bd5a] transition-transform duration-200 shrink-0">
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-serif font-bold text-[#3E0B02] text-sm group-hover:text-[#AF0807] transition-colors">
                    {t({
                      hi: "व्हाट्सएप परामर्श",
                      en: "WhatsApp Consultation",
                    })}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-bold tracking-tight">
                    {t({
                      hi: "+91 72230 83313 पर तुरंत जुड़ें",
                      en: "+91 72230 83313 • Chat Online",
                    })}
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Feature Points (2x2 Grid) */}
            <div className="mt-4 pt-3 border-t border-amber-400/25 grid grid-cols-2 gap-2 text-left w-full max-w-xl">
              {highlights.map((item) => (
                <div
                  key={item.en}
                  className="flex items-center gap-1.5 text-xs text-amber-100 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{t(item)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mata Rani Image & Glowing Halo on Desktop */}
          <div className="col-span-5 flex flex-col items-center justify-center">
            <div className="relative group flex flex-col items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] xl:w-[420px] xl:h-[420px] rounded-full bg-gradient-to-tr from-amber-400/40 via-yellow-300/35 to-orange-500/25 blur-3xl pointer-events-none motion-safe:animate-pulse" />

              <div className="relative w-[340px] h-[340px] xl:w-[420px] xl:h-[420px] max-w-[90vw] aspect-square transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/baglamukhi-logo.png"
                  alt="माँ बगलामुखी दिव्य स्वरूप"
                  fill
                  sizes="(max-width: 1280px) 380px, 440px"
                  className="object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.8)] drop-shadow-[0_0_35px_rgba(216,155,24,0.45)] select-none"
                />
              </div>

              <div className="mt-2.5 text-center">
                <span className="inline-block rounded-full bg-black/65 backdrop-blur-md px-5 py-1 text-sm font-semibold text-amber-200 border border-amber-400/60 shadow-lg">
                  {t({
                    hi: "॥ साक्षात् सिद्ध माँ पीताम्बरा दर्शन ॥",
                    en: "॥ Sakshat Siddha Maa Pitambara Darshan ॥",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE LAYOUT (block lg:hidden): Vertical card flow perfected for phones
           ========================================================================= */}
        <div className="block lg:hidden w-full max-w-xl mx-auto flex flex-col gap-3 text-left">
          {/* ---- Heading block (badge + title + subtitle) ---- */}
          <div className="flex flex-col items-start gap-1.5 mb-0.5">
            {/* 1. Mantra badge with diamond ends */}
            <div className="relative ml-2 inline-flex items-center gap-2 rounded-full border border-amber-400/80 bg-black/70 px-4 py-1.5 shadow-lg before:pointer-events-none before:absolute before:inset-[3px] before:rounded-full before:border before:border-amber-400/30">
              <span
                aria-hidden="true"
                className="absolute -left-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-amber-400"
              />
              <span
                aria-hidden="true"
                className="absolute -right-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-amber-400"
              />
              <TrishulIcon className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="font-serif font-semibold tracking-wide text-amber-100 text-[clamp(10px,2.9vw,13px)]">
                {t({
                  hi: "॥ ॐ ह्लीं बगलामुख्यै नमः ॥",
                  en: "|| Om Hreem Baglamukhiyei Namah ||",
                })}
              </span>
            </div>

            {/* 2. Title (Aligned in 2-3 lines on mobile) */}
            <h1 className="font-serif tracking-tight mt-1 leading-[1.2]">
              <div className="text-[clamp(22px,6.2vw,30px)] font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                <span>{t({ hi: "श्री माँ ", en: "Shri Maa " })}</span>
                <span className="bg-gradient-to-b from-[#FFE9A0] via-[#F6C445] to-[#C98A1B] bg-clip-text text-transparent font-black drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]">
                  {t({ hi: "बगलामुखी", en: "Baglamukhi" })}
                </span>
                <span className="block text-white mt-0.5">
                  {t({ hi: "दिव्य धाम", en: "Divya Dham" })}
                </span>
              </div>
            </h1>

            {/* 3. Subtitle (Single combined line) */}
            <div className="mt-1 font-serif font-semibold text-xs text-stone-200 flex flex-wrap items-center gap-1.5 leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              <span>
                {t({
                  hi: "विश्व प्रसिद्ध सिद्ध शक्तिपीठ • नलखेड़ा",
                  en: "World-Renowned Siddha Shakti Peeth • Nalkheda",
                })}
              </span>
              <span className="text-amber-300 inline-flex items-center gap-1 select-none text-xs">
                <span>──</span>
                <Flower2 aria-hidden="true" className="h-3 w-3 text-amber-300" />
                <span>──</span>
              </span>
            </div>
          </div>

          {/* ---- 4. Info card: purohit | initiation ---- */}
          <div className={`${CARD} px-3 py-2`}>
            <div className="grid grid-cols-2 divide-x divide-amber-400/30">
              <div className="flex items-center gap-2 pr-2 min-w-0">
                <div className="h-8 w-8 rounded-full bg-amber-500/10 border border-amber-400/50 flex items-center justify-center shrink-0">
                  <Landmark className="h-4 w-4 text-amber-300" />
                </div>
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="text-white/90 text-[clamp(9px,2.5vw,12px)]">
                    {t({ hi: "मुख्य पुरोहित:", en: "Chief Purohit:" })}
                  </span>
                  <span className="font-bold text-amber-300 text-[clamp(10px,2.8vw,14px)] truncate">
                    {t({ hi: "पं. दीपक शर्मा", en: "Pt. Deepak Sharma" })}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pl-2 min-w-0">
                <div className="h-8 w-8 rounded-full bg-amber-500/10 border border-amber-400/50 flex items-center justify-center shrink-0">
                  <User className="h-4 w-4 text-amber-300" />
                </div>
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="text-white/90 text-[clamp(9px,2.5vw,12px)] truncate">
                    {t({
                      hi: "वैदिक शास्त्रीय दीक्षा -",
                      en: "Vedic Classical Initiation -",
                    })}
                  </span>
                  <span className="font-bold text-white text-[clamp(9.5px,2.6vw,13px)] truncate">
                    {t({
                      hi: "व्यक्तिगत नाम-गोत्र संकल्प",
                      en: "Personal Name-Gotra Sankalp",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ---- 5. Mantra card ---- */}
          <div className={`${CARD} relative overflow-hidden p-3`}>
            <Flower2
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 right-2 h-20 w-20 text-amber-500/10"
            />

            {/* header row */}
            <div className="relative flex items-center justify-between gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-[#FBE08A] via-[#F2BE45] to-[#D79A22] px-3 py-1 text-[#2A1405] shadow-md">
                <Flower2 className="h-3.5 w-3.5 shrink-0" />
                <span className="font-bold uppercase tracking-wider text-[clamp(8px,2.3vw,11px)]">
                  {t({
                    hi: "सिद्ध तांत्रिक महामंत्र",
                    en: "SIDDHA TANTRIK MAHA MANTRA",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-serif text-amber-300 text-[clamp(10px,2.9vw,13px)]">
                <Ornament />
                <span>
                  {t({
                    hi: "॥ अमोघ रक्षा कवच ॥",
                    en: "|| अमोघ रक्षा कवच ||",
                  })}
                </span>
              </div>
            </div>

            {/* mantra (left aligned) */}
            <p className="relative font-serif font-bold text-white text-left leading-relaxed text-[clamp(13px,3.7vw,17px)] my-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] break-words">
              ॥ ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥
            </p>

            {/* benefit chips */}
            <div className="relative flex flex-wrap items-center gap-1.5">
              {crisisBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <span
                    key={badge.en}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/40 bg-black/50 px-2 py-1 font-semibold text-white text-[clamp(9px,2.4vw,12px)]"
                  >
                    <Icon className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                    <span className="whitespace-nowrap">{t(badge)}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* ---- 6. Primary CTA ---- */}
          <Link
            href="/contact"
            className="group relative flex items-center gap-2.5 overflow-hidden rounded-2xl border-2 border-amber-400/80 bg-gradient-to-r from-[#7A0008] via-[#A3101A] to-[#6A0208] p-2 pr-3 shadow-2xl transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 top-0 h-1/2 rounded-b-full bg-gradient-to-b from-white/15 to-transparent"
            />

            <div className="relative h-10 w-10 rounded-full border border-amber-300/70 bg-[#4A0006]/80 flex items-center justify-center shrink-0 shadow-inner">
              <CalendarCheck className="h-5 w-5 text-amber-300" />
            </div>

            <div className="relative flex flex-col leading-tight flex-1 min-w-0">
              <span className="font-serif font-black text-white text-[clamp(14px,4.1vw,18px)] truncate">
                {t({
                  hi: "विशेष अनुष्ठान बुक करें",
                  en: "Book Special Anushthan",
                })}
              </span>
              <span className="font-medium text-amber-200 text-[clamp(10px,2.8vw,12.5px)] truncate">
                {t({
                  hi: "पंडित जी से शुभ मुहूर्त आरक्षित करें",
                  en: "Reserve Shubh Muhurat with Pandit Ji",
                })}
              </span>
            </div>

            <div className="relative flex items-center gap-1.5 shrink-0">
              <Ornament className="hidden min-[400px]:inline-flex" />
              <div className="h-7 w-7 rounded-full border border-amber-300/70 bg-[#4A0006]/80 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5 text-amber-200" />
              </div>
            </div>
          </Link>

          {/* ---- 7. WhatsApp card ---- */}
          <a
            href="https://wa.me/917223083313?text=जय%20माँ%20बगलामुखी!%20पंडित%20दीपक%20शर्मा%20जी%2C%20मुझे%20पूजा%20व%20हवन%20के%20बारे%20में%20जानकारी%20चाहिए।"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 overflow-hidden rounded-2xl border border-amber-300/70 bg-gradient-to-r from-[#FFFDF8] via-white to-[#FFF7EA] p-2 pr-3 shadow-xl transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Leaf
              aria-hidden="true"
              className="pointer-events-none absolute -left-1 bottom-0 h-9 w-9 text-amber-500/20 -rotate-12"
            />
            <Leaf
              aria-hidden="true"
              className="pointer-events-none absolute right-1 bottom-0 h-8 w-8 text-amber-500/20 rotate-12"
            />

            <div className="relative h-10 w-10 rounded-full bg-gradient-to-b from-[#34D97B] to-[#128C4A] ring-2 ring-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 shrink-0">
              <WhatsAppIcon className="h-5 w-5 text-white" />
            </div>

            <div className="relative flex flex-col leading-tight flex-1 min-w-0">
              <span className="font-serif font-bold text-[#3A0D0D] text-[clamp(14px,4.1vw,18px)] truncate">
                {t({
                  hi: "व्हाट्सएप परामर्श",
                  en: "WhatsApp Consultation",
                })}
              </span>
              <span className="mt-0.5 flex items-center gap-1.5 whitespace-nowrap text-[clamp(10.5px,3.1vw,13.5px)]">
                <span className="font-bold text-[#0F7A3A]">
                  +91 72230 83313
                </span>
                <span className="text-stone-500">•</span>
                <span className="font-medium text-[#0E8A6A] truncate">
                  {t({ hi: "ऑनलाइन चैट करें", en: "Chat Online" })}
                </span>
              </span>
            </div>

            <div className="relative h-7 w-7 rounded-full bg-white border border-amber-400/70 flex items-center justify-center text-amber-700 shrink-0">
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </a>

          {/* ---- 8. Trust strip on mobile ---- */}
          <div className={`${CARD} grid grid-cols-4 divide-x divide-amber-400/30 px-1 py-2`}>
            {highlights.map((feature) => (
              <div
                key={feature.en}
                className="flex flex-col items-center justify-start px-1 text-center"
              >
                <div className="h-7 w-7 rounded-full border border-amber-400/60 bg-amber-500/10 flex items-center justify-center mb-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-300" />
                </div>
                <span className="font-medium leading-tight text-stone-100 text-[clamp(9px,2.4vw,11.5px)]">
                  {t(feature)}
                </span>
              </div>
            ))}
          </div>

          {/* ---- 9. Mata Rani Divine Idol on Mobile ---- */}
          <div className="flex flex-col items-center justify-center my-3">
            <div className="relative group flex flex-col items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-amber-400/40 via-yellow-300/35 to-orange-500/25 blur-2xl pointer-events-none motion-safe:animate-pulse" />

              <div className="relative w-[270px] h-[270px] max-w-[90vw] aspect-square transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/baglamukhi-logo.png"
                  alt="माँ बगलामुखी दिव्य स्वरूप"
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="w-full h-full object-contain filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.8)] drop-shadow-[0_0_35px_rgba(216,155,24,0.45)] select-none"
                />
              </div>

              <div className="mt-2 text-center">
                <span className="inline-block rounded-full bg-black/65 backdrop-blur-md px-4 py-1 text-xs font-semibold text-amber-200 border border-amber-400/60 shadow-lg">
                  {t({
                    hi: "॥ साक्षात् सिद्ध माँ पीताम्बरा दर्शन ॥",
                    en: "॥ Sakshat Siddha Maa Pitambara Darshan ॥",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. REAL-WORLD LIVE TEMPLE DOCK (Shared) ================= */}
        <div className="mt-6 sm:mt-8 w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {/* Module 1: Live Darshan Status */}
          <div className="flex items-center gap-3 rounded-2xl bg-black/60 border border-amber-400/35 p-3 backdrop-blur-md shadow-xl hover:border-amber-300 transition-colors">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 shrink-0">
              <Clock className="h-4 w-4 text-amber-300" />
            </div>
            <div className="text-left leading-tight min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>
                  {t({
                    hi: "दर्शन समय (पट खुले हैं)",
                    en: "Darshan Timings (Open)",
                  })}
                </span>
              </div>
              <div className="font-serif text-xs sm:text-[13px] font-bold text-white truncate mt-0.5">
                {t({
                  hi: "प्रातः 06:00 से रात्रि 09:30",
                  en: "06:00 AM to 09:30 PM",
                })}
              </div>
            </div>
          </div>

          {/* Module 2: Daily Aarti Times */}
          <div className="flex items-center gap-3 rounded-2xl bg-black/60 border border-amber-400/35 p-3 backdrop-blur-md shadow-xl hover:border-amber-300 transition-colors">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 shrink-0">
              <Flame className="h-4 w-4 text-amber-300" />
            </div>
            <div className="text-left leading-tight min-w-0">
              <div className="text-[10px] uppercase font-bold tracking-wider text-amber-300">
                {t({
                  hi: "दैनिक दिव्य महाआरती",
                  en: "Daily Divya Maha Aarti",
                })}
              </div>
              <div className="font-serif text-xs sm:text-[13px] font-bold text-white truncate mt-0.5">
                {t({
                  hi: "प्रातः 06:00 | सायं 07:30",
                  en: "Morning 06:00 | Evening 07:30",
                })}
              </div>
            </div>
          </div>

          {/* Module 3: Sacred Siddhapeeth Location */}
          <div className="flex items-center gap-3 rounded-2xl bg-black/60 border border-amber-400/35 p-3 backdrop-blur-md shadow-xl hover:border-amber-300 transition-colors">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/20 border border-red-400/40 text-red-300 shrink-0">
              <MapPin className="h-4 w-4 text-red-300" />
            </div>
            <div className="text-left leading-tight min-w-0">
              <div className="text-[10px] uppercase font-bold tracking-wider text-red-300">
                {t({
                  hi: "महाभारत कालीन सिद्ध पीठ",
                  en: "Mahabharata-Era Siddha Peeth",
                })}
              </div>
              <div className="font-serif text-xs sm:text-[13px] font-bold text-white truncate mt-0.5">
                {t({
                  hi: "नलखेड़ा, लखुंदर नदी तट",
                  en: "Nalkheda, Lakhundar River Bank",
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}