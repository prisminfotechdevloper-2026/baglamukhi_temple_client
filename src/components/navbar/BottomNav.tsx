"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  CalendarCheck,
  Landmark,
  Camera,
  Phone,
} from "lucide-react";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";

interface BottomNavItem {
  label: TranslationPair;
  href: string;
  icon: typeof Home;
}

const navItems: BottomNavItem[] = [
  { label: { hi: "होम", en: "Home" }, href: "/", icon: Home },
  { label: { hi: "पूजा", en: "Puja" }, href: "/puja", icon: CalendarCheck },
  { label: { hi: "मंदिर", en: "Mandir" }, href: "/mandir", icon: Landmark },
  { label: { hi: "गैलरी", en: "Gallery" }, href: "/gallery", icon: Camera },
  { label: { hi: "संपर्क", en: "Contact" }, href: "/contact", icon: Phone },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-amber-200/90 shadow-[0_-4px_24px_rgba(74,12,22,0.08)]"
      aria-label="Mobile Bottom Navigation"
    >
      {/* Top Gold Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D89B18] to-transparent opacity-85" />

      <div className="mx-auto flex max-w-md items-center justify-around px-1.5 py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          const labelText = t(item.label);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center justify-center py-0.5 px-0.5 text-center transition-colors focus:outline-hidden group ${
                isActive ? "text-[#AF0807]" : "text-stone-600 hover:text-[#AF0807]"
              }`}
            >
              {/* Icon Container with Active Pill Highlight */}
              <div
                className={`relative flex items-center justify-center px-3.5 py-1 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500/20 via-red-500/15 to-amber-500/20 text-[#AF0807] ring-1 ring-amber-400/40 shadow-xs"
                    : "text-stone-500 group-hover:text-[#AF0807]"
                }`}
              >
                <Icon
                  className={`h-[22px] w-[22px] xs:h-6 xs:w-6 transition-transform duration-200 group-active:scale-90 ${
                    isActive
                      ? "text-[#AF0807] scale-105 stroke-[2.3]"
                      : "text-stone-600 group-hover:text-[#AF0807] stroke-[1.85]"
                  }`}
                />
              </div>

              {/* Text Label */}
              <span
                className={`text-[11px] xs:text-xs mt-0.5 leading-normal tracking-tight truncate w-full text-center transition-colors ${
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
