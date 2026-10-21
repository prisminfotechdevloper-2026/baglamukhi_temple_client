"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  sub: string;
  href: string;
}

interface DesktopNavLinksProps {
  items: NavItem[];
}

export default function DesktopNavLinks({ items }: DesktopNavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1 xl:gap-2">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group relative flex flex-col items-center px-3.5 xl:px-4 py-2 text-center transition-colors focus:outline-hidden"
            >
              {/* Primary Label - Standard Website Navbar Size (15px-16px) */}
              <span
                className={`text-[15px] xl:text-[16px] leading-tight transition-colors duration-200 tracking-normal ${
                  isActive
                    ? "font-bold text-[#AF0807]"
                    : "font-semibold text-stone-800 group-hover:text-[#AF0807]"
                }`}
              >
                {item.label}
              </span>

              {/* Sub-label - Clear and Readable (11.5px-12px) */}
              

              {/* Left-to-Right Animated Underline (only on hover) */}
              <span
                className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#AF0807] via-[#E6840D] to-[#AF0807] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
