"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  CalendarCheck,
  Landmark,
  Camera,
  Phone,
} from "lucide-react";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";
import { usePujaBooking } from "@/context/PujaBookingContext";

interface BottomNavItem {
  label: TranslationPair;
  href: string;
  icon: typeof Home;
}

const navItems: BottomNavItem[] = [
  { label: { hi: "होम", en: "Home" }, href: "/", icon: Home },
  { label: { hi: "पंडित जी", en: "Pandit Ji" }, href: "/pandit-ji", icon: User },
  { label: { hi: "पूजा", en: "Puja" }, href: "/puja", icon: CalendarCheck },
  { label: { hi: "मंदिर", en: "Mandir" }, href: "/mandir", icon: Landmark },
  { label: { hi: "गैलरी", en: "Gallery" }, href: "/gallery", icon: Camera },
  { label: { hi: "संपर्क", en: "Contact" }, href: "/contact", icon: Phone },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { openBookingModal } = usePujaBooking();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-amber-200/90 shadow-[0_-4px_24px_rgba(74,12,22,0.08)]"
      aria-label="Mobile Bottom Navigation"
    >
      {/* ================= PROTRUDING RED "पूजा बुकिंग" TAB (Matches User Screenshot) ================= */}
      <button
        type="button"
        onClick={() => openBookingModal()}
        aria-label={t({ hi: "पूजा बुकिंग फॉर्म खोलें", en: "Open Puja Booking Form" })}
        className="absolute -top-7 sm:-top-7.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-4 py-1 rounded-t-xl bg-gradient-to-r from-[#940706] via-[#B91C1C] to-[#8E0605] text-white shadow-[0_-4px_16px_rgba(185,28,28,0.5)] border-t border-x border-amber-300 hover:brightness-110 active:scale-95 transition-transform duration-150 cursor-pointer select-none"
      >
        <CalendarCheck className="h-3.5 w-3.5 text-amber-300 shrink-0 stroke-[2.5]" />
        <span className="font-extrabold text-[11px] sm:text-xs text-white tracking-wider uppercase font-sans whitespace-nowrap drop-shadow-xs">
          {t({ hi: "पूजा बुकिंग", en: "puja BOOKING" })}
        </span>
      </button>

      {/* Top Gold Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D89B18] to-transparent opacity-85" />

      <div className="mx-auto flex max-w-lg items-center justify-around px-1 py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          const labelText = t(item.label);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center justify-center py-0.5 px-0.5 text-center transition-colors focus:outline-hidden group min-w-0 ${
                isActive ? "text-[#AF0807]" : "text-stone-600 hover:text-[#AF0807]"
              }`}
            >
              {/* Icon Container with Active Pill Highlight */}
              <div
                className={`relative flex items-center justify-center px-2.5 xs:px-3 py-1 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500/20 via-red-500/15 to-amber-500/20 text-[#AF0807] ring-1 ring-amber-400/40 shadow-xs"
                    : "text-stone-500 group-hover:text-[#AF0807]"
                }`}
              >
                <Icon
                  className={`h-5 w-5 xs:h-[22px] xs:w-[22px] transition-transform duration-200 group-active:scale-90 ${
                    isActive
                      ? "text-[#AF0807] scale-105 stroke-[2.3]"
                      : "text-stone-600 group-hover:text-[#AF0807] stroke-[1.85]"
                  }`}
                />
              </div>

              {/* Text Label */}
              <span
                className={`text-[10px] xs:text-[11px] mt-0.5 leading-tight tracking-tight truncate w-full text-center transition-colors ${
                  isActive
                    ? "font-extrabold text-[#AF0807]"
                    : "font-semibold text-stone-600 group-hover:text-[#AF0807]"
                }`}
              >
                {labelText}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
