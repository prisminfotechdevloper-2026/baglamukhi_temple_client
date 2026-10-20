import Link from "next/link";
import Image from "next/image";
import { CalendarCheck } from "lucide-react";
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
    <header className="sticky top-0 z-40 w-full bg-[#FEFBDB]/95 backdrop-blur-md border-b border-[#E6840D]/30 shadow-xs transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-2.5">
        {/* ================= LEFT PART: Logo + Mandir Name + Deepak Sharma ================= */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden"
          title="श्री माँ बगलामुखी मंदिर - मुख्य पृष्ठ"
        >
          {/* Deity Logo */}
          <div className="relative h-11 w-11 sm:h-13 sm:w-13 shrink-0 rounded-full p-0.5 border-2 border-[#E6840D] bg-white shadow-sm group-hover:border-[#AF0807] transition-all overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="माँ बगलामुखी मंदिर लोगो"
              width={52}
              height={52}
              priority
              className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name & Subtitle */}
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg md:text-xl text-[#540902] leading-tight tracking-tight group-hover:text-[#AF0807] transition-colors">
              श्री माँ बगलामुखी मंदिर
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#AF0807] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold text-[#AF0807] tracking-wide">
                पं. दीपक शर्मा <span className="font-normal text-[#540902]/70">(मुख्य पुजारी)</span>
              </span>
            </div>
          </div>
        </Link>

        {/* ================= RIGHT PART (DESKTOP): Navigation + Language + Book Puja ================= */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Main Navigation"
        >
          {/* Main Navigation Links */}
          <ul className="flex items-center gap-0.5 xl:gap-1 mr-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex flex-col items-center px-2.5 py-1.5 rounded-lg text-center transition-all hover:bg-[#E6840D]/12"
                >
                  <span className="text-[13px] font-semibold text-[#540902] group-hover:text-[#AF0807] transition-colors leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-[#540902]/60 group-hover:text-[#540902]/85 transition-colors leading-none mt-0.5">
                    {item.sub}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Toggle (Leaf Client Component) */}
          <div className="pl-1 pr-1.5 border-l border-[#E6840D]/25">
            <LanguageToggle />
          </div>

          {/* Main Book Puja CTA Button */}
          <Link
            href="/pujas"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#AF0807] to-[#800605] px-4 py-2 text-xs xl:text-sm font-bold text-[#FEFBDB] shadow-md border border-[#FDB514]/40 hover:from-[#800605] hover:to-[#540902] hover:shadow-lg hover:border-[#FDB514] hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-hidden"
          >
            <CalendarCheck className="h-4 w-4 text-[#FDB514]" />
            <div className="flex flex-col text-left leading-none">
              <span className="tracking-wide">Book puja</span>
              <span className="text-[9px] text-[#F9D66F] font-normal mt-0.5">पूजा बुक करें</span>
            </div>
          </Link>
        </nav>

        {/* ================= MOBILE / TABLET CONTROLS ================= */}
        <MobileMenu />
      </div>
    </header>
  );
}
