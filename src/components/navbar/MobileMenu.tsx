"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, CalendarCheck, Home, Users, Flame, Landmark, Image as ImageIcon } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

interface NavItem {
  label: string;
  sub: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { label: "Home", sub: "Top page", href: "/", icon: "home" },
  { label: "Pandit ji", sub: "2 profiles", href: "/pandit-ji", icon: "pandit" },
  { label: "Pujas", sub: "Booking", href: "/pujas", icon: "puja" },
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
    switch (type) {
      case "home":
        return <Home className="h-4 w-4 text-[#E6840D]" />;
      case "pandit":
        return <Users className="h-4 w-4 text-[#E6840D]" />;
      case "puja":
        return <Flame className="h-4 w-4 text-[#E6840D]" />;
      case "mandir":
        return <Landmark className="h-4 w-4 text-[#E6840D]" />;
      case "gallery":
        return <ImageIcon className="h-4 w-4 text-[#E6840D]" />;
      case "contact":
        return <Phone className="h-4 w-4 text-[#E6840D]" />;
      default:
        return null;
    }
  };

  return (
    <div className="lg:hidden flex items-center gap-2">
      <LanguageToggle />

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-xl p-2 text-[#540902] hover:bg-[#E6840D]/10 hover:text-[#AF0807] focus:outline-hidden transition-colors"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Slide-out Backdrop & Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-[#FEFBDB] border-l-2 border-[#E6840D]/30 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#E6840D]/20 px-5 py-4 bg-white/70">
          <div>
            <h3 className="font-serif font-bold text-base text-[#540902]">
              श्री माँ बगलामुखी मंदिर
            </h3>
            <p className="text-xs text-[#AF0807] font-medium">
              पं. दीपक शर्मा (मुख्य पुजारी)
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-1.5 text-[#540902] hover:bg-[#E6840D]/20 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[#540902] hover:bg-[#E6840D]/15 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-white/80 border border-[#E6840D]/20 shadow-xs group-hover:scale-105 transition-transform">
                  {renderIcon(item.icon)}
                </span>
                <div>
                  <div className="text-sm font-semibold group-hover:text-[#AF0807] transition-colors">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-[#540902]/65">
                    {item.sub}
                  </div>
                </div>
              </div>
              <span className="text-xs text-[#E6840D] font-bold">›</span>
            </Link>
          ))}

          {/* Quick Call & WhatsApp contact options */}
          <div className="pt-4 mt-2 border-t border-[#E6840D]/20 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#540902]/60 px-2">
              सीधा संपर्क (Direct Contact)
            </p>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2.5 rounded-xl px-3.5 py-2 bg-white/90 border border-[#E6840D]/20 text-xs font-semibold text-[#540902] hover:bg-[#FEFBDB] transition-colors"
            >
              <Phone className="h-4 w-4 text-[#AF0807]" />
              <span>कॉल करें (Pt. Deepak Sharma)</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-xl px-3.5 py-2 bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-semibold text-[#128C7E] hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              <span>व्हाट्सएप संदेश भेजें</span>
            </a>
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-[#E6840D]/20 bg-white/70">
          <Link
            href="/pujas"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#AF0807] via-[#8B0605] to-[#540902] px-4 py-3 text-sm font-bold text-[#FEFBDB] shadow-md hover:shadow-lg transition-all active:scale-[0.98] border border-[#FDB514]/40"
          >
            <CalendarCheck className="h-4 w-4 text-[#FDB514]" />
            <span>Book Puja (पूजा बुक करें)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
