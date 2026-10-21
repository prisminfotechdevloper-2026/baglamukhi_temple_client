"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Flame,
  MapPin,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

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

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* ================= 1. SCREEN-COMPATIBLE RESPONSIVE BACKGROUNDS ================= */}
      {/* Mobile Screen Portrait Background */}
      <div className="absolute inset-0 block md:hidden z-0 overflow-hidden">
        <Image
          src="/images/hero-mobile.png"
          alt="श्री माँ बगलामुखी मंदिर गर्भगृह"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Large Screen Landscape Background */}
      <div className="absolute inset-0 hidden md:block z-0 overflow-hidden">
        <Image
          src="/images/hero-desktop.png"
          alt="श्री माँ बगलामुखी मंदिर गर्भगृह"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ================= 2. HERO CONTENT LAYER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center">
          {/* ================= LEFT COLUMN: Text Content (ORDER-1 ON MOBILE & DESKTOP) ================= */}
          <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Sacred Mantra Tag */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/50 border border-amber-400/50 px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-amber-200 mb-2 sm:mb-2.5 backdrop-blur-md shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-serif">
                {t({
                  hi: "॥ ॐ ह्लीं बगलामुखिए नमः ॥",
                  en: "॥ Om Hleem Baglamukhyai Namah ॥",
                })}
              </span>
            </div>

            {/* Main Headings */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.25] pt-1 drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]">
              <span className="block">
                {t({
                  hi: "श्री माँ बगलामुखी दिव्य धाम",
                  en: "Shri Maa Baglamukhi Divya Dham",
                })}
              </span>
              <span className="block mt-1 sm:mt-1.5 text-lg sm:text-2xl md:text-3xl lg:text-[32px] font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
                {t({
                  hi: "विश्व प्रसिद्ध सिद्ध शक्तिपीठ • नलखेड़ा",
                  en: "World-Renowned Siddha Shakti Peeth • Nalkheda",
                })}
              </span>
            </h1>

            {/* Head Priest Subtitle */}
            <div className="mt-2 sm:mt-2.5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/55 border border-amber-400/50 px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-amber-200 backdrop-blur-md shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#AF0807] animate-pulse" />
              <span>
                {t({
                  hi: "मुख्य उपासक: पं. दीपक शर्मा",
                  en: "Chief Purohit: Pt. Deepak Sharma",
                })}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-amber-100 font-normal">
                {t({
                  hi: "उज्जैन वेद विद्यालय शास्त्रीय दीक्षा • व्यक्तिगत नाम-गोत्र संकल्प",
                  en: "Vedic Classical Initiation • Personal Name-Gotra Sankalp",
                })}
              </span>
            </div>

            {/* Sacred Maha Mantra Highlight Box */}
            <div className="mt-3.5 w-full max-w-xl rounded-2xl bg-gradient-to-r from-black/75 via-black/85 to-black/75 border border-amber-400/50 p-3 sm:p-3.5 backdrop-blur-md shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-amber-400/10 font-serif text-5xl font-black select-none pointer-events-none">
                ॐ
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 border border-amber-400/30 px-2 py-0.5 rounded-full">
                  {t({ hi: "सिद्ध तांत्रिक महामंत्र", en: "Siddha Tantrik Maha Mantra" })}
                </span>
                <span className="text-[11px] text-amber-200/80 font-serif">॥ अमोघ रक्षा कवच ॥</span>
              </div>
              <p className="font-serif text-xs sm:text-[13px] md:text-sm font-bold text-amber-100 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                ॥ ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥
              </p>
              {/* Crisis Resolution Tags */}
              <div className="mt-2 pt-2 border-t border-amber-400/20 flex flex-wrap gap-1.5">
                {[
                  { hi: "शत्रु स्तम्भन", en: "Enemy Suppression" },
                  { hi: "कोर्ट केस विजय", en: "Court Case Victory" },
                  { hi: "व्यापार वृद्धि", en: "Business Growth" },
                  { hi: "गृह क्लेश शांति", en: "Family Peace" },
                  { hi: "रोग-दोष निवारण", en: "Health & Relief" },
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold text-amber-200 bg-amber-500/15 border border-amber-400/30 rounded-md px-1.5 py-0.5"
                  >
                    • {t(tag)}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons (CTAs) */}
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] px-6 py-3 text-sm sm:text-base font-bold text-white shadow-xl shadow-red-950/60 border border-amber-400/50 hover:border-amber-300 hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
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

              {/* Secondary CTA: Light Theme WhatsApp Consultation (Navbar-style) */}
              <a
                href="https://wa.me/917223083313?text=जय%20माँ%20बगलामुखी!%20पंडित%20दीपक%20शर्मा%20जी%2C%20मुझे%20पूजा%20व%20हवन%20के%20बारे%20में%20जानकारी%20चाहिए।"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white/95 hover:bg-white px-5 py-3 text-sm sm:text-base font-bold text-[#1F2937] border-2 border-stone-200/90 hover:border-[#25D366] backdrop-blur-xl shadow-xl shadow-stone-900/15 hover:shadow-2xl hover:shadow-[#25D366]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {/* Authentic WhatsApp Green Badge Icon */}
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md shadow-[#25D366]/35 group-hover:scale-105 group-hover:bg-[#20bd5a] transition-all duration-200 shrink-0">
                  <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-serif font-bold text-[#3E0B02] text-sm sm:text-[15px] group-hover:text-[#AF0807] transition-colors">
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

            {/* Quick Feature Points */}
            <div className="mt-4 sm:mt-5 pt-3 border-t border-amber-400/25 grid grid-cols-2 gap-2 text-left w-full max-w-lg">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 text-[11px] sm:text-xs text-amber-100 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{t(item)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Mata Rani Image ================= */}
          <div className="lg:col-span-5 order-2 lg:order-2 flex flex-col items-center justify-center my-4 sm:my-5 lg:my-0">
            <div className="relative group flex flex-col items-center">
              {/* Divine Golden Ambient Halo Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] h-[270px] xs:w-[310px] xs:h-[310px] sm:w-[370px] sm:h-[370px] lg:w-[440px] lg:h-[440px] rounded-full bg-gradient-to-tr from-amber-400/40 via-yellow-300/35 to-orange-500/25 blur-2xl sm:blur-3xl pointer-events-none animate-pulse" />

              {/* Mata Rani Divine Transparent Idol */}
              <div className="relative w-[285px] h-[285px] xs:w-[320px] xs:h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[450px] lg:h-[450px] xl:w-[480px] xl:h-[480px] max-w-[92vw] aspect-square transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/baglamukhi-logo.png"
                  alt="माँ बगलामुखी दिव्य स्वरूप"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 480px"
                  className="w-full h-full object-contain filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.8)] drop-shadow-[0_0_35px_rgba(216,155,24,0.45)] select-none"
                />
              </div>

              {/* Sacred Darshan Banner Under Deity */}
              <div className="mt-2 sm:mt-2.5 text-center">
                <span className="inline-block rounded-full bg-black/65 backdrop-blur-md px-4 sm:px-5 py-1 text-xs sm:text-sm font-semibold text-amber-200 border border-amber-400/60 shadow-lg">
                  {t({
                    hi: "॥ साक्षात् सिद्ध माँ पीताम्बरा दर्शन ॥",
                    en: "॥ Sakshat Siddha Maa Pitambara Darshan ॥",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. REAL-WORLD LIVE TEMPLE DOCK ================= */}
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
