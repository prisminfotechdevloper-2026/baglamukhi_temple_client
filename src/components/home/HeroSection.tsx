import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Flame,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function HeroSection() {
  const highlights = [
    "शास्त्रोक्त तंत्र-मंत्र पद्धति",
    "संकल्प आधारित व्यक्तिगत हवन",
    "लाइव वीडियो दर्शन सुविधा",
    "अभिमंत्रित प्रसाद डाक द्वारा",
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
              <span className="font-serif">॥ ॐ ह्लीं बगलामुखिए नमः ॥</span>
            </div>

            {/* Main Headings */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.25] pt-1 drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]">
              <span className="block">श्री माँ बगलामुखी दिव्य धाम</span>
              <span className="block mt-1 sm:mt-1.5 text-lg sm:text-2xl md:text-3xl lg:text-[32px] font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
                विश्व प्रसिद्ध सिद्ध शक्तिपीठ
              </span>
            </h1>

            {/* Head Priest Subtitle */}
            <div className="mt-2 sm:mt-2.5 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/45 border border-amber-400/40 px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold text-amber-200 backdrop-blur-md shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#AF0807]" />
              <span>मुख्य पुजारी: पं. दीपक शर्मा</span>
              <span className="text-white/40">•</span>
              <span className="text-amber-100 font-normal">पीताम्बरा तंत्र पीठ</span>
            </div>

            {/* Description */}
            <p className="mt-2.5 sm:mt-3 text-white/95 text-xs sm:text-sm md:text-base leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-xl">
              माँ पीताम्बरा बगलामुखी जी के पावन सानिध्य में विशेष शत्रु बाधा निवारण,
              मुकदमा एवं कोर्ट विजय, व्यापार उन्नति तथा समस्त संकटों से मुक्ति हेतु
              शास्त्रोक्त वैदिक एवं तांत्रिक अनुष्ठान संपन्न कराएं।
            </p>

            {/* Action Buttons (CTAs) - Real-World High Converting Design */}
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] px-6 py-3 text-sm sm:text-base font-bold text-white shadow-xl shadow-red-950/60 border border-amber-400/50 hover:border-amber-300 hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <CalendarCheck className="h-5 w-5 text-amber-300 shrink-0" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-extrabold tracking-wide">विशेष अनुष्ठान बुक करें</span>
                  <span className="text-[10px] text-amber-200/90 font-normal">संकल्प व मुहूर्त आरक्षित करें</span>
                </div>
                <span className="text-amber-300 text-sm font-bold pl-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

              {/* Secondary CTA - In Logo Palette (Warm Amber & Gold Glass) */}
              <a
                href="https://wa.me/917726815642?text=जय%20माँ%20बगलामुखी!%20पंडित%20दीपक%20शर्मा%20जी%2C%20मुझे%20पूजा%20व%20परामर्श%20के%20बारे%20में%20जानकारी%20चाहिए।"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-black/60 hover:bg-black/80 px-5 py-3 text-sm sm:text-base font-bold text-white border border-amber-400/60 hover:border-amber-300 backdrop-blur-md shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 shrink-0">
                  <MessageCircle className="h-4 w-4 text-amber-300" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-bold text-amber-100">पंडित जी से परामर्श</span>
                  <span className="text-[10px] text-amber-300/90 font-normal">सीधे व्हाट्सएप पर मार्गदर्शन लें</span>
                </div>
              </a>
            </div>

            {/* Quick Feature Points */}
            <div className="mt-4 sm:mt-5 pt-3 border-t border-amber-400/25 grid grid-cols-2 gap-2 text-left w-full max-w-lg">
              {highlights.map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 text-[11px] sm:text-xs text-amber-100 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Mata Rani Image (ORDER-2 ON MOBILE & DESKTOP) ================= */}
          <div className="lg:col-span-5 order-2 lg:order-2 flex flex-col items-center justify-center">
            <div className="relative group flex flex-col items-center">
              {/* Divine Golden Ambient Halo Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-[340px] lg:h-[340px] rounded-full bg-gradient-to-tr from-amber-400/35 via-yellow-300/35 to-orange-500/20 blur-3xl pointer-events-none animate-pulse" />

              {/* Mata Rani Divine Transparent Idol (Compact, optimized proportion) */}
              <div className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-[360px] lg:w-[360px] transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/baglamukhi-logo.png"
                  alt="माँ बगलामुखी दिव्य स्वरूप"
                  fill
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 360px"
                  className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Sacred Darshan Banner Under Deity */}
              <div className="mt-1 sm:mt-1.5 text-center">
                <span className="inline-block rounded-full bg-black/60 backdrop-blur-md px-4 py-1 text-[11px] sm:text-xs font-semibold text-amber-200 border border-amber-400/50 shadow-md">
                  ॥ साक्षात् सिद्ध माँ पीताम्बरा दर्शन ॥
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
                <span>दर्शन समय (पट खुले हैं)</span>
              </div>
              <div className="font-serif text-xs sm:text-[13px] font-bold text-white truncate mt-0.5">
                प्रातः 06:00 से रात्रि 09:30
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
                दैनिक दिव्य महाआरती
              </div>
              <div className="font-serif text-xs sm:text-[13px] font-bold text-white truncate mt-0.5">
                प्रातः 06:00 | सायं 07:30
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
                महाभारत कालीन सिद्ध पीठ
              </div>
              <div className="font-serif text-xs sm:text-[13px] font-bold text-white truncate mt-0.5">
                नलखेड़ा, लखुंदर नदी तट
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
