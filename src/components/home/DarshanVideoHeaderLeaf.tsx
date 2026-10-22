"use client";

import { CheckCircle2, ShieldCheck, Flame } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DarshanVideoHeaderLeaf() {
  const { t } = useLanguage();

  const trustBadges = [
    {
      icon: CheckCircle2,
      text: { hi: "100% प्रामाणिक वैदिक कर्मकाण्ड", en: "100% Authentic Vedic Rituals" },
      color: "text-amber-600",
    },
    {
      icon: ShieldCheck,
      text: { hi: "नलखेड़ा सिद्धपीठ से सीधा दर्शन", en: "Direct Darshan from Nalkheda" },
      color: "text-amber-600",
    },
    {
      icon: Flame,
      text: { hi: "सवा लाख जप व नाम-गोत्र संकल्प", en: "1.25 Lakh Japa & Name-Gotra Sankalp" },
      color: "text-red-600 fill-red-600",
    },
  ];

  return (
    <header className="mb-8 sm:mb-10 max-w-3xl">
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
        <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
          {t({
            hi: "प्रत्यक्ष प्रमाण • दिव्य हवन एवं दर्शन आर्काइव",
            en: "Authentic Darshan & Sacred Hawan Reels",
          })}
        </span>
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-[#4A0C16] tracking-tight leading-snug pt-1">
        {t({
          hi: "दिव्य अनुष्ठान एवं हवन दर्शन इन मोशन",
          en: "Sacred Hawan & Darshan in Motion",
        })}
      </h2>
      <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#5C3A21] leading-relaxed">
        {t({
          hi: "माँ बगलामुखी सिद्धपीठ नलखेड़ा में आचार्य पं. दीपक शर्मा जी द्वारा विधि-विधान से संपन्न किए गए वैदिक हवन, विशेष तंत्र पूजा, एवं माता के प्रत्यक्ष दर्शन की वास्तविक वीडियो झलकियां।",
          en: "Watch authentic video reels of Vedic Hawan, specialized Tantrik anushthan, and holy darshan performed by Acharya Pt. Deepak Sharma at Nalkheda Siddhapeeth.",
        })}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
        {trustBadges.map(({ icon: Icon, text, color }) => (
          <div
            key={text.en}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8D8B8] bg-white/90 px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-bold text-[#3B1E08] shadow-xs"
          >
            <Icon className={`h-3.5 w-3.5 shrink-0 ${color}`} />
            <span>{t(text)}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
