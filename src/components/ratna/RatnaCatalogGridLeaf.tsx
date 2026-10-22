"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, X, PhoneCall, Sparkles, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

import { GEMSTONES_DATA, type GemstoneItem } from "@/data/gemstones";
import { siteConfig } from "@/data/siteConfig";

const PHONE = siteConfig.contact.primaryPhone;

export default function RatnaCatalogGridLeaf() {
  const { t } = useLanguage();
  const [selectedGem, setSelectedGem] = useState<GemstoneItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedGem(null);
    }
    if (selectedGem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedGem]);

  const getWhatsappUrl = (gem: GemstoneItem) => {
    const text = `जय श्री माँ बगलामुखी! पंडित जी, मुझे प्रमाणित ${gem.nameHi} (${gem.nameEn}) रत्न के पूजन, प्राण-प्रतिष्ठा व धारण विधि हेतु जानकारी चाहिए।`;
    return `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="ratna-catalog"
      aria-label="प्राकृतिक एवं प्रमाणित नवरत्न संग्रह"
      className="relative w-full py-8 sm:py-12 md:py-16 bg-[#FFFDF8] border-b border-[#EBDCC5]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ SECTION HEADER: Clean & Left-Aligned ============ */}
        <div className="text-left max-w-3xl mb-5 sm:mb-7">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="h-3.5 sm:h-4 w-1 bg-[#5A2C18] rounded-xs" />
            <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-widest text-[#8C5824]">
              {t({ hi: "100% प्राकृतिक एवं लैब प्रमाणित संग्रह", en: "100% Natural & Certified Collection" })}
            </span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-black text-[#3B1E08] tracking-tight leading-tight">
            {t({ hi: "असली एवं प्रमाणित रत्न संग्रह", en: "Authentic Certified Gemstones" })}
          </h2>

          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#6B5A52] leading-relaxed">
            {t({
              hi: "अपनी जन्मकुंडली व ग्रह दशा के अनुसार 100% असली व वैदिक प्राण-प्रतिष्ठित रत्न प्राप्त करें।",
              en: "Get authentic energized Vedic gemstones according to your birth chart and planetary alignments.",
            })}
          </p>
        </div>

        {/* 10-Item Responsive Grid: 5 columns on xl desktop (2 full rows of 5 cards) */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4">
          {GEMSTONES_DATA.map((gem) => (
            <div
              key={gem.id}
              className="group relative flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#EBDCC5] bg-white p-3 sm:p-3.5 shadow-[0_2px_10px_rgba(90,44,24,0.03)] hover:shadow-[0_6px_20px_rgba(90,44,24,0.08)] transition-all duration-300 hover:border-[#D4AF37]"
            >
              {/* Top Details & Gemstone Image */}
              <div>
                {/* Image Container with 3D drop shadow */}
                <div className="relative w-22 h-22 sm:w-24 sm:h-24 mx-auto flex items-center justify-center mb-2">
                  <Image
                    src={gem.image}
                    alt={`${gem.nameHi} (${gem.nameEn})`}
                    width={96}
                    height={96}
                    className="object-contain filter drop-shadow-[0_3px_10px_rgba(0,0,0,0.14)] group-hover:scale-108 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[14.5px] sm:text-base font-bold text-[#3B1E08] text-center leading-tight">
                  {gem.nameHi} ({gem.nameEn})
                </h3>

                {/* Planet Subtitle */}
                <p className="text-[11px] sm:text-xs font-bold text-[#8C5824] text-center mt-0.5 mb-1.5">
                  {gem.planetHi}
                </p>

                {/* Summary Description (Hindi as requested) */}
                <p className="text-[11px] sm:text-[11.5px] text-[#6B5A52] text-center leading-snug font-normal line-clamp-2 min-h-[30px] sm:min-h-[34px] flex items-center justify-center px-0.5">
                  {gem.summaryHi}
                </p>
              </div>

              {/* Action Buttons: View Details + WhatsApp */}
              <div className="mt-2.5 space-y-1.5 pt-1.5 border-t border-[#F5EDE1]">
                {/* Button 1: View Details (Light Sand Background) */}
                <button
                  type="button"
                  onClick={() => setSelectedGem(gem)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg sm:rounded-xl border border-[#D8C6A5] bg-[#FAF3E3] hover:bg-[#F3E7CE] px-2.5 py-1.5 text-[11px] sm:text-xs font-bold text-[#5A2C18] transition-colors duration-200 cursor-pointer shadow-2xs"
                >
                  <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#5A2C18]" />
                  <span>{t({ hi: "विवरण देखें", en: "View Details" })}</span>
                </button>

                {/* Button 2: WhatsApp (Sacred Green) */}
                <a
                  href={getWhatsappUrl(gem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg sm:rounded-xl bg-[#155E38] hover:bg-[#114E2E] px-2.5 py-1.5 text-[11px] sm:text-xs font-bold text-[#FFF9EE] transition-colors duration-200 cursor-pointer shadow-2xs"
                >
                  <WhatsAppIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
                  <span>{t({ hi: "WhatsApp पर पूछें", en: "Ask on WhatsApp" })}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL: 2-COLUMN BALANCED GEMSTONE DETAILS ================= */}
      {selectedGem && (
        <dialog
          open
          aria-label={`${selectedGem.nameHi} विवरण`}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs border-0 w-full h-full max-w-none max-h-none m-0"
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedGem(null);
          }}
        >
          {/* Backdrop Click Dismiss */}
          <button
            type="button"
            className="fixed inset-0 cursor-pointer bg-transparent border-0 w-full h-full"
            onClick={() => setSelectedGem(null)}
            aria-label="बंद करें"
          />

          {/* Modal Container */}
          <div
            data-lenis-prevent
            className="relative z-10 w-full max-w-2xl lg:max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-[#D4AF37]/50 bg-[#FFFDF8] p-5 sm:p-7 shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedGem(null)}
              className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF3E3] text-[#5A2C18] hover:bg-[#5A2C18] hover:text-[#FFF9EE] transition-colors duration-200 cursor-pointer shadow-xs"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Body: 2-Column Responsive Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 items-center">
              {/* Left Column: Image, Badge, Heading */}
              <div className="md:col-span-5 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#EBDCC5] pb-4 md:pb-0 md:pr-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/60 bg-[#FAF3E3] px-3 py-1 text-[11px] font-bold text-[#8C5824] mb-3">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#8C5824]" />
                  <span>100% लैब प्रमाणित रत्न</span>
                </span>

                <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-3">
                  <Image
                    src={selectedGem.image}
                    alt={selectedGem.nameHi}
                    width={176}
                    height={176}
                    className="object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
                  />
                </div>

                <h3
                  id="gem-modal-title"
                  className="font-serif text-2xl font-bold text-[#3B1E08]"
                >
                  {selectedGem.nameHi} ({selectedGem.nameEn})
                </h3>
                <p className="text-sm font-bold text-[#8C5824] mt-0.5">
                  स्वामी ग्रह: {selectedGem.planetHi} ({selectedGem.planetEn})
                </p>
              </div>

              {/* Right Column: Attributes, Benefits, Actions */}
              <div className="md:col-span-7 flex flex-col">
                {/* 4 Attributes Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-4 text-xs">
                  <div className="rounded-xl border border-[#EBDCC5] bg-[#FAF6EE] p-2.5">
                    <span className="block text-[11px] font-bold text-[#8C5824]">अनुकूल राशि:</span>
                    <span className="font-semibold text-[#3B1E08]">{selectedGem.rashi}</span>
                  </div>
                  <div className="rounded-xl border border-[#EBDCC5] bg-[#FAF6EE] p-2.5">
                    <span className="block text-[11px] font-bold text-[#8C5824]">धारण धातु:</span>
                    <span className="font-semibold text-[#3B1E08]">{selectedGem.metal}</span>
                  </div>
                  <div className="rounded-xl border border-[#EBDCC5] bg-[#FAF6EE] p-2.5">
                    <span className="block text-[11px] font-bold text-[#8C5824]">धारण अंगुली:</span>
                    <span className="font-semibold text-[#3B1E08]">{selectedGem.finger}</span>
                  </div>
                  <div className="rounded-xl border border-[#EBDCC5] bg-[#FAF6EE] p-2.5">
                    <span className="block text-[11px] font-bold text-[#8C5824]">शुभ दिन:</span>
                    <span className="font-semibold text-[#3B1E08]">{selectedGem.day}</span>
                  </div>
                </div>

                {/* Vedic Mantra */}
                <div className="rounded-xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#FAF3E3] to-[#FFFDF8] p-3 mb-4">
                  <p className="text-[11px] font-bold text-[#8C5824] uppercase tracking-wide">
                    वैदिक बीज मंत्र
                  </p>
                  <p className="font-serif text-sm font-bold text-[#5A2C18] mt-0.5">
                    {selectedGem.mantra}
                  </p>
                </div>

                {/* Astrological Benefits */}
                <div className="mb-5">
                  <p className="text-xs font-bold text-[#3B1E08] mb-1.5">
                    प्रमुख लाभ एवं प्रभाव:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#554035]">
                    {selectedGem.benefits.map((b) => (
                      <li key={`${selectedGem.id}-${b.slice(0, 10)}`} className="flex items-start gap-1.5">
                        <span className="text-[#8C5824] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultation Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2 border-t border-[#EBDCC5]">
                  <a
                    href={getWhatsappUrl(selectedGem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#155E38] hover:bg-[#114E2E] px-4 py-2.5 text-xs font-bold text-[#FFF9EE] transition-colors duration-200 shadow-sm"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-white" />
                    <span>WhatsApp पर परामर्श लें</span>
                  </a>

                  <a
                    href={`tel:+91${PHONE}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#5A2C18] bg-[#FAF3E3] hover:bg-[#F3E7CE] px-4 py-2.5 text-xs font-bold text-[#5A2C18] transition-colors duration-200 shadow-2xs"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-[#5A2C18]" />
                    <span>कॉल करें</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
