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

interface BottomNavItem {
  label: string;
  sub: string;
  href: string;
  icon: typeof Home;
}

const navItems: BottomNavItem[] = [
  { label: "Home", sub: "होम", href: "/", icon: Home },
  { label: "About", sub: "परिचय", href: "/pandit-ji", icon: Users },
  { label: "Pujas", sub: "पूजा", href: "/pujas", icon: CalendarCheck },
  { label: "Mandir", sub: "मंदिर", href: "/mandir", icon: Landmark },
  { label: "Gallery", sub: "गैलरी", href: "/gallery", icon: ImageIcon },
  { label: "Contact", sub: "संपर्क", href: "/contact", icon: Phone },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-stone-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="mx-auto flex max-w-md items-center justify-around px-1 py-1.5 pb-safe">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center justify-center py-1.5 px-0.5 text-center transition-colors focus:outline-hidden group ${
                isActive
                  ? "text-[#AF0807] font-bold"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              <div className="relative">
                <Icon
                  className={`h-5 w-5 transition-transform duration-200 group-active:scale-90 ${
                    isActive
                      ? "text-[#AF0807] scale-110"
                      : "text-stone-500 group-hover:text-amber-800"
                  }`}
                />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#AF0807]" />
                )}
              </div>
              <span
                className={`text-[10px] mt-1 leading-tight tracking-tight truncate w-full ${
                  isActive
                    ? "font-bold text-[#AF0807]"
                    : "font-medium text-stone-500"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
