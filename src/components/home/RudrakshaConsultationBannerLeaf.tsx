"use client";

import Image from "next/image";
import { PhoneCall } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  phone: string;
}

export default function RudrakshaConsultationBannerLeaf({ phone }: Props) {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    t({
      hi: "जय श्री माँ बगलामुखी! पंडित जी, मुझे अपने लिए सही रुद्राक्ष और रत्न के चयन हेतु मार्गदर्शन चाहिए।",
      en: "Jai Shri Maa Baglamukhi! Pandit Ji, I need guidance for selecting the right Rudraksha and Gemstone for myself.",
    })
  )}`;

  return (
    <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#2E1206] via-[#451B0A] to-[#2E1206] border border-[#6E3618] p-5 sm:p-6 md:p-7 text-white shadow-md overflow-hidden">
      {/* Subtle Inner Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/15 blur-2xl" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        {/* Left: Temple Graphic & Headline */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
          {/* Temple Icon/Graphic Container */}
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl overflow-hidden border border-amber-500/40 bg-black/40 p-1 flex items-center justify-center">
            <Image
              src="/images/baglamukhi-logo.png"
              alt={t({
                hi: "माँ बगलामुखी मंदिर नलखेड़ा",
                en: "Maa Baglamukhi Temple Nalkheda",
              })}
              width={64}
              height={64}
              className="object-contain filter drop-shadow-md"
            />
          </div>

          <div>
            <h4 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#FFF5E6] leading-tight">
              {t({
                hi: "अपने लिए सही रुद्राक्ष और रत्न का चयन करें",
                en: "Select the Right Rudraksha & Gemstone for Yourself",
              })}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {t({
                hi: "अधिक जानकारी के लिए अभी WhatsApp पर संपर्क करें या पंडित जी से मार्गदर्शन लें।",
                en: "Contact via WhatsApp or speak directly with Pandit Ji for divine Vedic guidance.",
              })}
            </p>
          </div>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 shrink-0 w-full sm:w-auto">
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#18A058] hover:bg-[#138547] px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors shadow-xs"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>{t({ hi: "WhatsApp पर पूछें", en: "Ask on WhatsApp" })}</span>
          </a>

          {/* Talk to Pandit Ji Button */}
          <a
            href={`tel:+91${phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#854522] bg-[#220B02]/90 hover:bg-[#1A0701] px-5 py-2.5 text-xs sm:text-sm font-bold text-amber-200 hover:text-white transition-colors shadow-xs"
          >
            <PhoneCall className="h-4 w-4 text-amber-300" />
            <span>{t({ hi: "पंडित जी से बात करें", en: "Talk to Pandit Ji" })}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
