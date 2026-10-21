import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
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

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* 1. Divine Top Announcement / Helpline Micro-Ribbon (Clean & Static) */}
      <div className="bg-gradient-to-r from-[#3D0802] via-[#AF0807] to-[#3D0802] text-white text-[11px] font-medium tracking-wide border-b border-amber-500/20">
        {/* Mobile View: Clean Fixed Bar with Sacred Mantra & Helpline */}
        <div className="flex sm:hidden items-center justify-between px-3 py-1 text-[11px]">
          <span className="text-amber-200 font-serif font-bold truncate">
            ॥ ॐ ह्लीं बगलामुखी देव्यै नमः ॥
          </span>
          <a
            href="tel:+918239239249"
            className="flex items-center gap-1 text-white font-bold shrink-0 bg-black/40 px-2.5 py-0.5 rounded-full border border-amber-400/40 text-[10.5px]"
          >
            <Phone className="h-3 w-3 text-amber-300" />
            <span>+91 82392 39249</span>
          </a>
        </div>

        {/* Desktop View: Clean Fixed Split Bar with Sacred Mantra & Helpline */}
        <div className="hidden sm:flex mx-auto max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-1 sm:py-1.5">
          <div className="flex items-center text-amber-200/95 font-serif text-[11.5px]">
            <span>॥ ॐ ह्लीं बगलामुखी देव्यै नमः • विश्व प्रसिद्ध सिद्ध तंत्र पीठ नलखेड़ा धाम ॥</span>
          </div>

          <div className="flex items-center gap-4 text-white/95 shrink-0 text-[11.5px]">
            <a
              href="tel:+918239239249"
              className="flex items-center gap-1.5 hover:text-amber-200 transition-colors font-bold"
            >
              <Phone className="h-3 w-3 text-amber-300" />
              <span>दर्शन एवं पूजा सहायता: +91 82392 39249</span>
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
