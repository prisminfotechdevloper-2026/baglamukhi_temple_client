import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import DesktopNavLinks from "./DesktopNavLinks";
import NavbarTopRibbonLeaf from "./NavbarTopRibbonLeaf";
import NavbarBrandLeaf from "./NavbarBrandLeaf";
import NavbarCtaLeaf from "./NavbarCtaLeaf";

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
      {/* 1. Divine Top Announcement / Helpline Micro-Ribbon (Bilingual Leaf) */}
      <NavbarTopRibbonLeaf />

      {/* 2. Main Pristine White Glass Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-stone-200/70 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5">
          {/* ================= LEFT: Divine Personal Priest Branding ================= */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3.5 group focus:outline-hidden min-w-0 flex-1 sm:flex-initial"
            title="आचार्य पं. दीपक शर्मा - माँ बगलामुखी सिद्धपीठ नलखेड़ा"
          >
            {/* Sacred Deity Emblem with Divine Glow & Aura Frame */}
            <div className="relative h-12 w-12 xs:h-13 xs:w-13 sm:h-16 sm:w-16 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-b from-amber-100/70 via-[#FFF9ED] to-[#FAEDD2] p-1 border-[1.5px] border-amber-300/80 shadow-[0_2px_14px_rgba(216,155,24,0.22)] group-hover:border-amber-400 group-hover:shadow-[0_4px_18px_rgba(216,155,24,0.35)] transition-all duration-300">
              <Image
                src="/images/baglamukhi-logo.png"
                alt="माँ बगलामुखी दिव्य स्वरूप"
                width={64}
                height={64}
                priority
                className="h-full w-full object-contain filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Personalized Branding Hierarchy (Bilingual Leaf - Luxury Gold Accent Line) */}
            <NavbarBrandLeaf />
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
            <NavbarCtaLeaf />
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
