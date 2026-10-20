import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, Phone, Sparkles } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import MobileMenu from "./MobileMenu";

interface NavItem {
  label: string;
  sub: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", sub: "Top page", href: "/" },
  { label: "Pandit ji", sub: "2 profiles", href: "/pandit-ji" },
  { label: "Pujas", sub: "Booking", href: "/pujas" },
  { label: "Mandir", sub: "Itihas", href: "/mandir" },
  { label: "Gallery", sub: "Photo, video", href: "/gallery" },
  { label: "Contact", sub: "Call, WhatsApp", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* 1. Divine Top Announcement / Helpline Micro-Ribbon */}
      <div className="bg-gradient-to-r from-[#3D0802] via-[#AF0807] to-[#3D0802] text-white text-[11px] font-medium tracking-wide border-b border-amber-500/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-1.5">
          <div className="flex items-center gap-2 text-amber-200/90 font-serif">
            <Sparkles className="h-3 w-3 text-amber-300 animate-pulse shrink-0" />
            <span className="truncate">॥ ॐ ह्लीं बगलामुखी देव्यै नमः • विश्व प्रसिद्ध सिद्ध तंत्र पीठ ॥</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-white/90">
            <span className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
              <Phone className="h-3 w-3 text-amber-300" />
              <span>दर्शन एवं पूजा सहायता: +91 98765 43210</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Pristine White Glass Navigation Bar */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-stone-200/70 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5">
          {/* ================= LEFT: Modern Brand & Priest Tag ================= */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-hidden"
            title="श्री माँ बगलामुखी मंदिर - मुख्य पृष्ठ"
          >
            {/* Deity Medallion */}
            <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 rounded-full p-0.5 bg-gradient-to-br from-amber-400 via-[#E6840D] to-[#AF0807] shadow-md group-hover:shadow-amber-500/30 transition-all duration-300">
              <div className="h-full w-full rounded-full bg-white p-0.5 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="माँ बगलामुखी मंदिर लोगो"
                  width={48}
                  height={48}
                  priority
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-[#3E0B02] leading-tight tracking-tight group-hover:text-[#AF0807] transition-colors">
                श्री माँ बगलामुखी मंदिर
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-900 border border-amber-200/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#AF0807]" />
                  पं. दीपक शर्मा <span className="text-stone-400 font-normal">| मुख्य पुजारी</span>
                </span>
              </div>
            </div>
          </Link>

          {/* ================= RIGHT (DESKTOP): Modern Nav Links & CTA ================= */}
          <nav
            className="hidden lg:flex items-center gap-1.5 xl:gap-2.5"
            aria-label="Main Navigation"
          >
            {/* Nav Items */}
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex flex-col items-center px-3 py-1.5 rounded-xl text-center transition-all duration-200 hover:bg-stone-50 hover:shadow-2xs border border-transparent hover:border-stone-200/50"
                  >
                    <span className="text-[13.5px] font-semibold text-stone-700 group-hover:text-[#AF0807] transition-colors leading-tight">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-stone-400 font-medium group-hover:text-amber-800 transition-colors leading-none mt-0.5">
                      {item.sub}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Subtle Divider */}
            <div className="h-7 w-px bg-stone-200 mx-1" />

            {/* Language Switcher Leaf Component */}
            <LanguageToggle />

            {/* Premium CTA Button */}
            <Link
              href="/pujas"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#AF0807] via-[#960706] to-[#730501] px-5 py-2.5 text-xs xl:text-sm font-bold text-white shadow-md shadow-red-900/20 hover:shadow-lg hover:shadow-red-900/30 border border-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-hidden"
            >
              <CalendarCheck className="h-4 w-4 text-amber-300" />
              <div className="flex flex-col text-left leading-none">
                <span className="tracking-wide">Book puja</span>
                <span className="text-[9px] text-amber-200/90 font-normal mt-0.5">पूजा बुक करें</span>
              </div>
            </Link>
          </nav>

          {/* ================= MOBILE TOGGLE ================= */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
