import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, Phone, MessageCircle, Sparkles } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import DesktopNavLinks from "./DesktopNavLinks";

interface NavItem {
  label: string;
  sub: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", sub: "Top page", href: "/" },
  { label: "About", sub: "Pandit ji", href: "/pandit-ji" },
  { label: "Pujas", sub: "16+ Vidhan", href: "/pujas" },
  { label: "Mandir", sub: "Itihas", href: "/mandir" },
  { label: "Gallery", sub: "Photo, video", href: "/gallery" },
  { label: "Contact", sub: "Call, WhatsApp", href: "/contact" },
];

function TopRibbonItems() {
  return (
    <div className="inline-flex items-center gap-6 px-3 shrink-0">
      {/* Sacred Mantra */}
      <span className="inline-flex items-center gap-1.5 text-amber-200 font-serif whitespace-nowrap">
        <Sparkles className="h-3 w-3 text-amber-300 shrink-0" />
        <span>॥ ॐ ह्लीं बगलामुखी देव्यै नमः • विश्व प्रसिद्ध सिद्ध तंत्र पीठ नलखेड़ा धाम ॥</span>
      </span>

      <span className="text-amber-500/50">•</span>

      {/* Direct Phone Helpline with Clickable Link */}
      <a
        href="tel:+917726815642"
        className="inline-flex items-center gap-1.5 text-white hover:text-amber-200 transition-colors font-bold whitespace-nowrap bg-black/35 px-2.5 py-0.5 rounded-full border border-amber-400/35"
      >
        <Phone className="h-3 w-3 text-amber-300 shrink-0" />
        <span>दर्शन व पूजा सहायता: +91 77268 15642 (पं. दीपक शर्मा)</span>
      </a>

      <span className="text-amber-500/50">•</span>

      {/* Live Darshan Status */}
      <span className="inline-flex items-center gap-1.5 text-amber-100 whitespace-nowrap">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <span>दैनिक दर्शन: प्रातः 06:00 से रात्रि 09:30 (पट खुले हैं)</span>
      </span>

      <span className="text-amber-500/50">•</span>

      {/* WhatsApp Online Booking */}
      <a
        href="https://wa.me/917726815642?text=जय%20माँ%20बगलामुखी!%20पंडित%20दीपक%20शर्मा%20जी%2C%20मुझे%20पूजा%20व%20हवन%20परामर्श%20चाहिए।"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors font-semibold whitespace-nowrap bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-400/40"
      >
        <MessageCircle className="h-3 w-3 text-emerald-400 shrink-0" />
        <span>ऑनलाइन संकल्प एवं अनुष्ठान बुकिंग</span>
      </a>

      <span className="text-amber-500/50">•</span>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* 1. Divine Top Announcement / Helpline Micro-Ribbon */}
      <div className="bg-gradient-to-r from-[#3D0802] via-[#AF0807] to-[#3D0802] text-white text-[11px] font-medium tracking-wide border-b border-amber-500/20 overflow-hidden">
        {/* Mobile View: Continuous Smooth Marquee Ticker from Right to Left with FULL Content */}
        <div className="block sm:hidden w-full overflow-hidden py-1.5 select-none relative">
          <div className="animate-top-ticker flex items-center">
            <TopRibbonItems />
            <TopRibbonItems />
          </div>
        </div>

        {/* Desktop View: Clean Fixed Split Bar with Sacred Mantra, Darshan & Helpline */}
        <div className="hidden sm:flex mx-auto max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-1 sm:py-1.5">
          <div className="flex items-center gap-3 text-amber-200/95 font-serif text-[11.5px]">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-amber-300 shrink-0" />
              <span>॥ ॐ ह्लीं बगलामुखी देव्यै नमः • विश्व प्रसिद्ध सिद्ध तंत्र पीठ ॥</span>
            </span>
            <span className="text-amber-400/40">•</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-300 text-[10.5px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>पट खुले हैं: 06:00 AM - 09:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/95 shrink-0 text-[11.5px]">
            <a
              href="tel:+917726815642"
              className="flex items-center gap-1.5 hover:text-amber-200 transition-colors font-bold"
            >
              <Phone className="h-3 w-3 text-amber-300" />
              <span>दर्शन एवं पूजा सहायता: +91 77268 15642</span>
            </a>
            <span className="text-amber-500/40">•</span>
            <a
              href="https://wa.me/917726815642?text=जय%20माँ%20बगलामुखी!%20पंडित%20दीपक%20शर्मा%20जी%2C%20मुझे%20पूजा%20व%20हवन%20परामर्श%20चाहिए।"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-white transition-colors"
            >
              <MessageCircle className="h-3 w-3 text-emerald-400" />
              <span>व्हाट्सएप</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Pristine White Glass Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-stone-200/70 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5">
          {/* ================= LEFT: Logo + Mandir Name + Deepak Sharma ================= */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-hidden"
            title="श्री माँ बगलामुखी मंदिर - मुख्य पृष्ठ"
          >
            {/* Direct Deity Logo Image (No Circle, Increased Size) */}
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 flex items-center justify-center">
              <Image
                src="/images/baglamukhi-logo.png"
                alt="माँ बगलामुखी मंदिर लोगो"
                width={64}
                height={64}
                priority
                className="h-full w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg md:text-xl text-[#3E0B02] leading-tight tracking-tight group-hover:text-[#AF0807] transition-colors">
                श्री माँ बगलामुखी मंदिर
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-amber-900 border border-amber-200/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#AF0807]" />
                  पं. दीपक शर्मा <span className="text-stone-400 font-normal hidden xs:inline">| मुख्य पुजारी</span>
                </span>
              </div>
            </div>
          </Link>

          {/* ================= RIGHT: Desktop Nav Links ================= */}
          <nav
            className="hidden lg:flex items-center gap-1.5 xl:gap-2.5"
            aria-label="Main Navigation"
          >
            {/* Nav Items with left-to-right animated underline and no box/bg */}
            <DesktopNavLinks items={navItems} />

            {/* Subtle Divider */}
            <div className="h-7 w-px bg-stone-200 mx-1" />

            {/* Desktop Language Switcher */}
            <LanguageToggle />

            {/* Premium CTA Button */}
            <Link
              href="/pujas"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#AF0807] via-[#960706] to-[#730501] px-6 py-2.5 text-sm xl:text-[15px] font-bold text-white shadow-md shadow-red-900/20 hover:shadow-lg hover:shadow-red-900/30 border border-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-hidden"
            >
              <CalendarCheck className="h-4 w-4 xl:h-5 xl:w-5 text-amber-300" />
              <div className="flex flex-col text-left leading-none">
                <span className="tracking-wide text-sm xl:text-[15px]">Book puja</span>
               </div>
            </Link>
          </nav>

          {/* ================= RIGHT (MOBILE ONLY): Language Button ================= */}
          <div className="lg:hidden flex items-center">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
