"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  CalendarCheck,
  Home,
  Users,
  Flame,
  Landmark,
  Image as ImageIcon,
} from "lucide-react";
import LanguageToggle from "./LanguageToggle";

interface NavItem {
  label: string;
  sub: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { label: "Home", sub: "Top page", href: "/", icon: "home" },
  { label: "About", sub: "पंडित जी", href: "/pandit-ji", icon: "pandit" },
  { label: "Pujas", sub: "16+ विधान", href: "/pujas", icon: "puja" },
  { label: "Mandir", sub: "Itihas", href: "/mandir", icon: "mandir" },
  { label: "Gallery", sub: "Photo, video", href: "/gallery", icon: "gallery" },
  { label: "Contact", sub: "Call, WhatsApp", href: "/contact", icon: "contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const renderIcon = (type: string) => {
    const iconClass = "h-4 w-4 text-amber-600";
    switch (type) {
      case "home":
        return <Home className={iconClass} />;
      case "pandit":
        return <Users className={iconClass} />;
      case "puja":
        return <Flame className={iconClass} />;
      case "mandir":
        return <Landmark className={iconClass} />;
      case "gallery":
        return <ImageIcon className={iconClass} />;
      case "contact":
        return <Phone className={iconClass} />;
      default:
        return <Landmark className={iconClass} />;
    }
  };

  return (
    <div className="lg:hidden flex items-center gap-2">
      <LanguageToggle />

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-xl p-2.5 text-stone-700 hover:text-[#AF0807] hover:bg-stone-100 transition-colors focus:outline-hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Modern Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Modern Slide-over Sheet */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 px-6 py-5 bg-gradient-to-r from-amber-50/50 to-white">
          <div>
            <h3 className="font-serif font-bold text-lg text-[#540902] leading-tight">
              श्री माँ बगलामुखी मंदिर
            </h3>
            <p className="text-xs font-semibold text-amber-800 mt-0.5">
              पं. दीपक शर्मा <span className="text-stone-400 font-normal">• मुख्य पुजारी</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Links List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-stone-700 hover:bg-amber-50/60 hover:text-[#AF0807] transition-all group border border-transparent hover:border-amber-200/50"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-50 border border-stone-200/60 group-hover:bg-white group-hover:border-amber-300 transition-colors shadow-2xs">
                  {renderIcon(item.icon)}
                </span>
                <div>
                  <div className="text-[14px] font-semibold text-stone-800 group-hover:text-[#AF0807] transition-colors">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-stone-400 font-medium">
                    {item.sub}
                  </div>
                </div>
              </div>
              <span className="text-stone-300 group-hover:text-[#AF0807] group-hover:translate-x-0.5 transition-all text-sm font-bold">
                ›
              </span>
            </Link>
          ))}

          {/* Quick Support Actions */}
          <div className="pt-4 mt-3 border-t border-stone-100 space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-2">
              सहायता एवं संपर्क
            </p>
            <a
              href="tel:+917726815642"
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 bg-stone-50 hover:bg-amber-50 text-stone-700 hover:text-amber-900 border border-stone-200/60 text-xs font-semibold transition-colors"
            >
              <Phone className="h-4 w-4 text-[#AF0807]" />
              <span>कॉल करें (Pt. Deepak Sharma)</span>
            </a>
            <a
              href="https://wa.me/917726815642"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 bg-amber-50 hover:bg-amber-100/70 text-amber-950 border border-amber-200/80 text-xs font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[#AF0807]" />
              <span>व्हाट्सएप पर बात करें</span>
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-5 border-t border-stone-100 bg-stone-50/60">
          <Link
            href="/pujas"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#690501] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-red-900/15 hover:shadow-lg transition-all active:scale-[0.99] border border-amber-400/30"
          >
            <CalendarCheck className="h-4 w-4 text-amber-300" />
            <span>Book Puja (पूजा बुक करें)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
