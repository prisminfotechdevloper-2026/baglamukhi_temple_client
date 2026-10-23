"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Eye, ChevronLeft, ChevronRight, X, ShieldCheck, PhoneCall } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

import { RUDRAKSHA_PRODUCTS, type RudrakshaCardItem } from "@/data/rudraksha";
import { siteConfig } from "@/data/siteConfig";

const PHONE = siteConfig.contact.primaryPhone;
const ITEMS_PER_PAGE = 8;

export default function RudrakshaCatalogGridLeaf() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<RudrakshaCardItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Close modal on Escape key press and lock background scrolling
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedProduct(null);
    }
    if (selectedProduct) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  const totalPages = Math.ceil(RUDRAKSHA_PRODUCTS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = RUDRAKSHA_PRODUCTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getWhatsAppUrl = (item: RudrakshaCardItem) => {
    const text = `जय श्री माँ बगलामुखी! पंडित जी, मुझे "${item.hindiName} ${item.mukhi}" के मूल्य, लैब प्रमाणिकता और धारण विधि के बारे में जानकारी चाहिए।`;
    return `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="rudraksha-catalog"
      ref={sectionRef}
      aria-label="प्रामाणिक रुद्राक्ष संग्रह"
      className="relative w-full overflow-hidden bg-[#FAF6EE] py-2 sm:py-4 lg:py-5 border-b border-[#EADCC7]"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ SECTION HEADER: Clean & Left-Aligned ============ */}
        <div className="text-left max-w-3xl mb-5 sm:mb-7">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="h-3.5 sm:h-4 w-1 bg-[#5A2C18] rounded-xs" />
            <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-widest text-[#8C5824]">
              {t({ hi: "100% प्राकृतिक एवं लैब प्रमाणित संग्रह", en: "100% Natural & Lab Certified Collection" })}
            </span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-black text-[#3B1E08] tracking-tight leading-tight">
            {t({ hi: "सिद्ध रुद्राक्ष संग्रह", en: "Energized Rudraksha Collection" })}
          </h2>

          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#6B5A52] leading-relaxed">
            {t({
              hi: "माँ बगलामुखी धाम नलखेड़ा से अभिमंत्रित 1 से 14 मुखी व दुर्लभ रुद्राक्ष। अपनी राशि व समस्या अनुसार सही रुद्राक्ष का चयन करें।",
              en: "Energized 1 to 14 Mukhi and rare divine Rudraksha from Maa Baglamukhi Dham Nalkheda.",
            })}
          </p>
        </div>

        {/* ============ PRODUCT GRID (4 CARDS PER ROW ON BIG SCREENS) ============ */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4.5">
          {currentProducts.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-xl border border-[#EBDCC5] bg-[#FDFBF7] p-3 sm:p-3.5 shadow-[0_2px_10px_rgba(90,44,24,0.03)] hover:border-[#D4AF37] hover:shadow-[0_6px_18px_rgba(90,44,24,0.07)] transition-[border-color,box-shadow]"
            >
              {/* Top Bead Image Container - fills properly with crisp bead */}
              <div className="relative h-24 xs:h-26 sm:h-28 w-full flex items-center justify-center bg-gradient-to-b from-[#FAF4EA]/80 to-[#F5ECE0]/50 rounded-lg p-1.5 mb-2 border border-[#EFE5D6]/80 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt={`${item.hindiName} ${item.mukhi}`}
                    fill
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
                    className="object-contain drop-shadow-[0_4px_8px_rgba(90,44,24,0.12)] group-hover:scale-108 transition-transform duration-300 ease-out"
                  />
                </div>
              </div>

              {/* Title & Mukhi */}
              <div className="text-center mb-1">
                <h3 className="font-serif text-sm sm:text-[15px] font-black text-[#3B1E08] leading-tight">
                  {item.hindiName}
                </h3>
                <p className="text-[11px] sm:text-xs font-bold text-[#8B5A14] mt-0.5">
                  {item.mukhi}
                </p>
              </div>

              {/* Short Description */}
              <p className="text-[11px] sm:text-[11.5px] text-[#6B5A52] text-center leading-snug px-0.5 mb-2.5 line-clamp-2 min-h-[28px] sm:min-h-[30px]">
                {item.description}
              </p>

              {/* Action Buttons: 1. विवरण देखें + 2. WhatsApp पर पूछें */}
              <div className="space-y-1.5 pt-2 border-t border-[#F0E3D1]">
                {/* View Details Button (Opens Modal) */}
                <button
                  type="button"
                  onClick={() => setSelectedProduct(item)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#F5ECD7] hover:bg-[#EBDDC0] border border-[#E2D2B8] py-1.5 px-2.5 text-xs font-bold text-[#5A2C18] transition-colors cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5 text-[#8B5A14]" />
                  <span>{t({ hi: "विवरण देखें", en: "View Details" })}</span>
                </button>

                {/* WhatsApp Inquiry Button */}
                <a
                  href={getWhatsAppUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#1B6D3E] hover:bg-[#145630] py-1.5 px-2.5 text-xs font-bold text-white transition-colors shadow-xs cursor-pointer"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>{t({ hi: "WhatsApp पर पूछें", en: "Ask on WhatsApp" })}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ============ PAGINATION CONTROLS (8 AT A TIME, FULL 4-COL ROWS) ============ */}
        <div className="mt-6 sm:mt-8 pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E8D8BF]">
          {/* Page Count Info */}
          <p className="text-xs sm:text-[13px] font-semibold text-[#8B5A14]">
            {t({
              hi: `पेज ${currentPage} / ${totalPages} • (कुल ${RUDRAKSHA_PRODUCTS.length} प्रमाणित रुद्राक्ष)`,
              en: `Page ${currentPage} of ${totalPages} • (${RUDRAKSHA_PRODUCTS.length} Certified Rudraksha)`,
            })}
          </p>

          {/* Page Navigation Buttons */}
          <div className="inline-flex items-center gap-1.5">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              aria-label="पिछला पेज"
              className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs sm:text-[13px] font-bold border transition-colors cursor-pointer ${
                currentPage === 1
                  ? "border-[#E5D4BC] bg-stone-100 text-stone-400 cursor-not-allowed"
                  : "border-[#854522] bg-[#FAF3E3] text-[#5A2C18] hover:bg-[#F3E7CE]"
              }`}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>{t({ hi: "पिछला", en: "Prev" })}</span>
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => handlePageChange(pageNum)}
                aria-current={currentPage === pageNum ? "page" : undefined}
                className={`h-8 w-8 rounded-lg text-xs sm:text-[13px] font-bold transition-colors cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-[#5A2C18] text-[#FFF9EE] shadow-xs"
                    : "border border-[#E5D4BC] bg-white text-[#5A2C18] hover:bg-[#FAF3E3]"
                }`}
              >
                {pageNum}
              </button>
            ))}

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              aria-label="अगला पेज"
              className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs sm:text-[13px] font-bold border transition-colors cursor-pointer ${
                currentPage === totalPages
                  ? "border-[#E5D4BC] bg-stone-100 text-stone-400 cursor-not-allowed"
                  : "border-[#854522] bg-[#FAF3E3] text-[#5A2C18] hover:bg-[#F3E7CE]"
              }`}
            >
              <span>{t({ hi: "अगला", en: "Next" })}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ============ POPUP MODAL: "विवरण देखें" DETAILS ============ */}
      {/* ========================================================= */}
      {selectedProduct && (
        <dialog
          open
          aria-label={`${selectedProduct.hindiName} विवरण`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs border-0 w-full h-full max-w-none max-h-none m-0"
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedProduct(null);
          }}
        >
          {/* Backdrop Button to Close */}
          <button
            type="button"
            className="absolute inset-0 cursor-pointer bg-transparent border-0 w-full h-full"
            onClick={() => setSelectedProduct(null)}
            aria-label="बंद करें"
          />

          {/* Modal Container */}
          <div
            data-lenis-prevent
            className="relative z-10 w-full max-w-2xl lg:max-w-3xl rounded-3xl bg-[#FFFDF9] border border-[#E0D0B6] p-4 sm:p-6 shadow-2xl max-h-[92vh] overflow-y-auto"
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="बंद करें"
              className="absolute top-3.5 right-3.5 h-8 w-8 rounded-full bg-[#5A2C18]/10 hover:bg-[#5A2C18]/20 flex items-center justify-center text-[#5A2C18] transition-colors cursor-pointer z-20"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Grid: 2 Columns on md/lg, responsive stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
              {/* ===== LEFT COLUMN: Product Image, Title, Mukhi, Trust Badge ===== */}
              <div className="md:col-span-5 flex flex-col items-center justify-between bg-gradient-to-b from-[#FAF4EA] to-[#F5ECE0]/60 p-4 sm:p-5 rounded-2xl border border-[#EBDCC5]/80 text-center">
                {/* Trust Badge at top */}
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10.5px] font-bold mb-2">
                  <ShieldCheck className="h-3 w-3 text-emerald-600" />
                  <span>100% प्राकृतिक • सिद्ध</span>
                </div>

                {/* Bead Image */}
                <div className="relative h-32 w-32 xs:h-36 xs:w-36 sm:h-40 sm:w-40 my-1 sm:my-2 flex items-center justify-center">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.hindiName}
                    fill
                    sizes="(max-width: 768px) 144px, 160px"
                    className="object-contain drop-shadow-[0_8px_18px_rgba(90,44,24,0.22)]"
                  />
                </div>

                {/* Title & Mukhi */}
                <div className="mt-1">
                  <h3 className="font-serif text-lg xs:text-xl sm:text-2xl font-black text-[#3B1E08] leading-tight">
                    {selectedProduct.hindiName}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#8B5A14] mt-0.5">
                    {selectedProduct.mukhi}
                  </p>
                </div>
              </div>

              {/* ===== RIGHT COLUMN: Attributes, Detailed Benefits, Action Buttons ===== */}
              <div className="md:col-span-7 flex flex-col justify-between">
                {/* Key Attributes 3-Column Box */}
                <div className="w-full grid grid-cols-3 gap-2 bg-[#FAF4EA] border border-[#E8D8BF] rounded-xl p-2.5 sm:p-3 text-left mb-3">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#8B5A14]">अधिष्ठाता देव</p>
                    <p className="text-[11.5px] font-bold text-[#3B1E08] mt-0.5 leading-tight">
                      {selectedProduct.deity}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#8B5A14]">स्वामी ग्रह</p>
                    <p className="text-[11.5px] font-bold text-[#3B1E08] mt-0.5 leading-tight">
                      {selectedProduct.planet}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#8B5A14]">बीज मंत्र</p>
                    <p className="text-[11.5px] font-bold text-[#8B5A14] mt-0.5 leading-tight">
                      {selectedProduct.mantra}
                    </p>
                  </div>
                </div>

                {/* Detailed Benefits List */}
                <div className="w-full text-left bg-white border border-[#EBDCC5] rounded-xl p-3 sm:p-3.5 mb-3.5 flex-1">
                  <h4 className="font-serif text-xs sm:text-[13px] font-bold text-[#3B1E08] mb-2 border-b border-[#F2E5D5] pb-1 flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#8B5A14]" />
                    <span>धार्मिक एवं आध्यात्मिक लाभ</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProduct.detailedBenefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-[#554035] leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8B5A14] mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTAs: WhatsApp + Phone */}
                <div className="w-full flex flex-col xs:flex-row gap-2 pt-1">
                  <a
                    href={getWhatsAppUrl(selectedProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1B6D3E] hover:bg-[#145630] py-2.5 px-3 text-xs sm:text-[13px] font-bold text-white transition-colors shadow-sm cursor-pointer"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>WhatsApp पर पूछें</span>
                  </a>

                  <a
                    href={`tel:+91${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#854522] bg-[#FAF3E3] hover:bg-[#F3E7CE] py-2.5 px-3 text-xs sm:text-[13px] font-bold text-[#5A2C18] transition-colors shadow-xs cursor-pointer"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-[#854522]" />
                    <span>पंडित जी से बात करें</span>
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
