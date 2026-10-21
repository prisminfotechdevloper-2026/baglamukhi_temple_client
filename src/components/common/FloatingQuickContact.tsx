"use client";

import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingQuickContact() {
  const { t } = useLanguage();

  return (
    <aside
      aria-label={t({ hi: "त्वरित संपर्क", en: "Quick Contact" })}
      className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-center gap-2 select-none"
    >
      {/* Call Button */}
      <a
        href="tel:+917223083313"
        className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#BA1616] via-[#8C0608] to-[#4E0204] text-white shadow-[0_4px_16px_rgba(139,0,0,0.35)] border-2 border-amber-300 hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300 cursor-pointer"
        aria-label={t({
          hi: "पंडित जी को सीधे कॉल करें: +91 72230 83313",
          en: "Call Pandit Ji directly: +91 72230 83313",
        })}
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white group-hover:rotate-12 transition-transform duration-300 shrink-0" />
        <span className="hidden md:group-hover:inline-block absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1 rounded-xl bg-[#240307]/95 text-amber-200 border border-[#D89B18]/70 text-xs font-serif font-bold whitespace-nowrap shadow-2xl pointer-events-none transition-opacity">
          {t({
            hi: "सीधा कॉल: +91 72230 83313",
            en: "Direct Call: +91 72230 83313",
          })}
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917223083313?text=%E0%A4%9C%E0%A4%AF%20%E0%A4%AE%E0%A4%BE%E0%A4%81%20%E0%A4%AC%E0%A4%97%E0%A4%B2%E0%A4%BE%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%80!%20%E0%A4%AA%E0%A4%82%E0%A4%A1%E0%A4%BF%E0%A4%A4%20%E0%A4%A6%E0%A4%80%E0%A4%AA%E0%A4%95%20%E0%A4%B6%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%BE%20%E0%A4%9C%E0%A4%80%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20%E0%A4%B5%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%B7%E0%A5%8D%E0%A4%A0%E0%A4%BE%E0%A4%A8%20%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.35)] border-2 border-white hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] cursor-pointer"
        aria-label={t({
          hi: "व्हाट्सएप परामर्श",
          en: "WhatsApp Consultation",
        })}
      >
        <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white group-hover:scale-110 transition-transform duration-300 shrink-0" />
        <span className="hidden md:group-hover:inline-block absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1 rounded-xl bg-[#073D1A]/95 text-emerald-200 border border-[#25D366] text-xs font-serif font-bold whitespace-nowrap shadow-2xl pointer-events-none transition-opacity">
          {t({
            hi: "व्हाट्सएप परामर्श",
            en: "WhatsApp Consultation",
          })}
        </span>
      </a>
    </aside>
  );
}
