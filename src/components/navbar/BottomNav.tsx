"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  CalendarCheck,
  Landmark,
  Image as ImageIcon,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BottomNavItem {
  label: { hi: string; en: string };
  href: string;
  icon: typeof Home;
}

const navItems: BottomNavItem[] = [
  { label: { hi: "होम", en: "Home" }, href: "/", icon: Home },
  { label: { hi: "परिचय", en: "About" }, href: "/pandit-ji", icon: Users },
  { label: { hi: "पूजा", en: "Pujas" }, href: "/pujas", icon: CalendarCheck },
  { label: { hi: "मंदिर", en: "Mandir" }, href: "/mandir", icon: Landmark },
  { label: { hi: "गैलरी", en: "Gallery" }, href: "/gallery", icon: ImageIcon },
  { label: { hi: "संपर्क", en: "Contact" }, href: "/contact", icon: Phone },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#FFFDF8]/98 backdrop-blur-xl border-t border-[#EBD8B4] shadow-[0_-4px_24px_rgba(74,12,22,0.08)]"
      aria-label="Mobile Bottom Navigation"
    >
      {/* Top Gold Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D89B18] to-transparent opacity-70" />

      <div className="mx-auto flex max-w-md items-center justify-around px-1 py-1.5 pb-safe">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center justify-center py-1 px-0.5 text-center transition-colors focus:outline-hidden group ${isActive
                  ? "text-[#8B0000] font-bold"
                  : "text-[#6B5A52] hover:text-[#4A0C16]"
                }`}
            >
              <div className="relative">
                <Icon
                  className={`h-5 w-5 transition-transform duration-200 group-active:scale-90 ${isActive
                      ? "text-[#8B0000] scale-110"
                      : "text-[#6B5A52] group-hover:text-[#8B0000]"
                    }`}
                />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#8B0000]" />
                )}
              </div>
              <span
                className={`text-[10px] mt-1 leading-tight tracking-tight truncate w-full ${isActive
                    ? "font-extrabold text-[#8B0000]"
                    : "font-semibold text-[#6B5A52]"
                  }`}
              >
                {t(item.label)}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
