"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";

export interface NavItem {
  label: TranslationPair;
  href: string;
}

interface DesktopNavLinksProps {
  items: NavItem[];
}

export default function DesktopNavLinks({ items }: DesktopNavLinksProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <ul className="flex items-center gap-0.5 xl:gap-1.5">
      {items.map((item) => {
        const isActive = pathname === item.href;
        const displayLabel = t(item.label);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group relative flex flex-col items-center px-2 xl:px-3 py-1.5 text-center transition-colors focus:outline-hidden whitespace-nowrap"
            >
              {/* Primary Label - Sized for 8 nav links */}
              <span
                className={`text-[13px] xl:text-[14.5px] leading-tight transition-colors duration-200 tracking-normal ${
                  isActive
                    ? "font-bold text-[#AF0807]"
                    : "font-semibold text-stone-800 group-hover:text-[#AF0807]"
                }`}
              >
                {displayLabel}
              </span>

              {/* Left-to-Right Animated Underline */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#AF0807] via-[#E6840D] to-[#AF0807] transition-transform duration-300 ease-out ${
                  isActive
                    ? "scale-x-100 origin-left"
                    : "origin-left scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
