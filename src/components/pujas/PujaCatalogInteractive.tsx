"use client";

import { useState, useEffect } from "react";
import {
  Flame,
  Scroll,
  Clock,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  ArrowRight,
  X,
  Search,
  MapPin,
  Layers,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PUJAS_DATABASE, type PujaItem, type PujaCategory } from "@/data/pujas";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/data/siteConfig";

export type { PujaItem };

type CategoryFilter = "all" | PujaCategory;

const ITEMS_PER_PAGE = 6;

export default function PujaCatalogInteractive() {
  const { t } = useLanguage();
  const pujasDatabase = PUJAS_DATABASE;
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [selectedPuja, setSelectedPuja] = useState<PujaItem | null>(null);

  // Lock body scroll when modal is open to prevent background page scroll bleed
  useEffect(() => {
    if (selectedPuja) {
      const originalOverflow = document.body.style.overflow;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = "";
      };
    }
  }, [selectedPuja]);

  const categories = [
    {
      key: "all" as CategoryFilter,
      label: { hi: "समस्त अनुष्ठान", en: "All Pujas" },
      count: pujasDatabase.length,
    },
    {
      key: "tantra" as CategoryFilter,
      label: { hi: "शत्रु बाधा व मुकदमा विजय", en: "Shatru Badha & Court Victory" },
      count: pujasDatabase.filter((p) => p.category === "tantra").length,
    },
    {
      key: "jaap" as CategoryFilter,
      label: { hi: "महामंत्र अखंड जाप", en: "Akhand Mantra Jaap" },
      count: pujasDatabase.filter((p) => p.category === "jaap").length,
    },
    {
      key: "dosh" as CategoryFilter,
      label: { hi: "दोष शांति (कालसर्प/शनि/पितृ)", en: "Dosha Shanti (Kaalsarp/Shani)" },
      count: pujasDatabase.filter((p) => p.category === "dosh").length,
    },
    {
      key: "samriddhi" as CategoryFilter,
      label: { hi: "व्यापार, समृद्धि व कर्ज मुक्ति", en: "Business & Financial Growth" },
      count: pujasDatabase.filter((p) => p.category === "samriddhi").length,
    },
    {
      key: "online" as CategoryFilter,
      label: { hi: "ई-संकल्प व ऑनलाइन सेवा", en: "E-Sankalp & Online Service" },
      count: pujasDatabase.filter((p) => p.category === "online").length,
    },
  ];

  const filteredPujas = pujasDatabase.filter((puja) => {
    const matchesCategory =
      activeCategory === "all" || puja.category === activeCategory;
    const matchesSearch =
      puja.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      puja.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      puja.idealFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      puja.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination calculation: 6 pujas at a time or full view
  const totalPages = showAll ? 1 : Math.ceil(filteredPujas.length / ITEMS_PER_PAGE);
  const paginatedPujas = showAll
    ? filteredPujas
    : filteredPujas.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      );

  const handleCategorySelect = (catKey: CategoryFilter) => {
    setActiveCategory(catKey);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleWhatsAppBooking = (title: string) => {
    // Phone 1 (+91 72240 83313) -> Hawan / Puja inquiries
    // Phone 2 (+91 95756 64204) -> Kundali / Jyotish / Rashi inquiries
    const isKundaliOrJyotish = /kundali|jyotish|rashi|पत्रिका|कुंडली|ज्योतिष|horoscope|birth\s*chart/i.test(title);
    const targetPhone = isKundaliOrJyotish ? siteConfig.contact.phone2Raw : siteConfig.contact.phone1Raw;
    const message = `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी सिद्धपीठ नलखेड़ा में "${title}" अनुष्ठान हेतु शुभ मुहूर्त, दक्षिणा व संकल्प प्रक्रिया की जानकारी चाहिए।`;
    window.open(getWhatsAppUrl(targetPhone, message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="puja-catalog" className="w-full bg-white py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER: Clean & Left-Aligned ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
                {t({
                  hi: "नलखेड़ा सिद्धपीठ • प्रामाणिक पूजा सूची",
                  en: "Nalkheda Siddhapeeth • Authentic Puja Catalog",
                })}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
              {t({
                hi: "16 विशिष्ट वैदिक एवं तांत्रिक महाअनुष्ठान",
                en: "16 Sacred Vedic & Tantric Mahahawans",
              })}
            </h2>
            <p className="font-serif text-xs sm:text-sm text-stone-600 mt-2">
              {t({
                hi: "बिना किसी मध्यस्थ के सीधे पंडित दीपक शर्मा जी से शास्त्रोक्त संकल्प एवं दशांश हवन संपन्न कराएं।",
                en: "Perform authentic Shastrokta Sankalp and Dashansh Hawan directly with Pandit Deepak Sharma Ji without any middlemen.",
              })}
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <label htmlFor="puja-catalog-search" className="sr-only">
              {t({
                hi: "अनुष्ठान या समस्या खोजें",
                en: "Search puja or concern",
              })}
            </label>
            <input
              id="puja-catalog-search"
              type="text"
              aria-label={t({
                hi: "अनुष्ठान या समस्या खोजें",
                en: "Search puja or concern",
              })}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={t({
                hi: "अनुष्ठान या समस्या खोजें (उदा. कोर्ट केस, शत्रु)...",
                en: "Search puja or concern (e.g. Court Case, Shatru)...",
              })}
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-full bg-stone-50 border border-stone-200 focus:border-amber-400 focus:bg-white focus:outline-hidden transition-colors placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                aria-label={t({ hi: "खोज साफ़ करें", en: "Clear search" })}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ================= CATEGORY TABS (Clean, Categorized, No Clutter) ================= */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategorySelect(cat.key)}
                className={`flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#AF0807] text-white shadow-md shadow-red-900/10 scale-[1.02]"
                    : "bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/80"
                }`}
              >
                <span>{t(cat.label)}</span>
                <span
                  className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-amber-400 text-stone-900"
                      : "bg-stone-200/80 text-stone-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= 16 UNIQUE PUJA CARDS GRID (Signature Borders - 3 at a time) ================= */}
        {filteredPujas.length === 0 ? (
          <div className="rounded-3xl bg-stone-50 border-y-0 border-x-2 border-amber-400 p-10 text-center text-stone-600">
            <Info className="h-8 w-8 text-amber-500 mx-auto mb-2" />
            <p className="font-serif text-base font-bold text-[#3E0B02]">
              {t({ hi: "कोई अनुष्ठान नहीं मिला", en: "No Puja Found" })}
            </p>
            <p className="text-xs text-stone-500 mt-1">
              {t({
                hi: "कृपया भिन्न शब्द खोजें अथवा अन्य श्रेणी चुनें।",
                en: "Please try a different search or choose another category.",
              })}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
                setCurrentPage(1);
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#AF0807] text-white text-xs font-bold"
            >
              {t({ hi: "समस्त 16 अनुष्ठान देखें", en: "View All 16 Pujas" })}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {paginatedPujas.map((puja) => {
              const Icon = puja.icon;
              return (
                <div
                  key={puja.id}
                  className="group rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-colors duration-300"
                >
                  {/* Top Header: Category & Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#AF0807] bg-red-50 border border-red-200/60 rounded-md px-2 py-0.5">
                        {puja.categoryLabel}
                      </span>
                      <span className="text-[10.5px] font-bold text-amber-900 bg-amber-100/70 border border-amber-300/60 rounded-full px-2.5 py-0.5">
                        {puja.badge}
                      </span>
                    </div>

                    {/* Location Pin */}
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-stone-500 mb-2">
                      <MapPin className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>{t({ hi: "माँ बगलामुखी सिद्धपीठ, नलखेड़ा", en: "Maa Baglamukhi Siddhapeeth, Nalkheda" })}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#3E0B02] leading-snug mb-2 group-hover:text-[#AF0807] transition-colors">
                      {puja.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {puja.shortDesc}
                    </p>

                    {/* Key Attributes Box */}
                    <div className="space-y-1.5 p-3 rounded-2xl bg-[#FFFDF9] border border-amber-200/60 text-[11.5px] text-stone-700 mb-5">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                        <span className="text-stone-500">{t({ hi: "अवधि:", en: "Duration:" })}</span>
                        <span className="font-semibold text-stone-800 truncate">
                          {puja.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Scroll className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                        <span className="text-stone-500">{t({ hi: "मंत्र संख्या:", en: "Mantra Count:" })}</span>
                        <span className="font-semibold text-stone-800 truncate">
                          {puja.mantraCount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Direct WhatsApp Booking & View Details */}
                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppBooking(puja.title)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white font-bold text-xs shadow-xs hover:shadow-md transition-colors active:scale-[0.98]"
                    >
                      <MessageCircle className="h-4 w-4 text-amber-300" />
                      <span>{t({ hi: "अनुष्ठान बुक करें / संकल्प लें", en: "Book Anushthan / Take Sankalp" })}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPuja(puja)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-white hover:bg-amber-50 text-[#3E0B02] hover:text-[#AF0807] text-xs font-semibold border border-stone-200 hover:border-amber-300 transition-colors"
                    >
                      <span>{t({ hi: "विधि व सामग्री विवरण देखें", en: "View Vidhi & Samagri Details" })}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#AF0807]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ================= PAGINATION & VIEW ALL CONTROLS ================= */}
        {filteredPujas.length > 0 && (
          <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
            {/* Devotional Count & Page Indicator */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-stone-600 font-medium">
              {showAll ? (
                <span>
                  {t({ hi: "समस्त", en: "All" })}{" "}
                  <span className="font-bold text-[#AF0807]">{filteredPujas.length}</span>{" "}
                  {t({ hi: "अनुष्ठान प्रदर्शित", en: "pujas displayed" })}
                </span>
              ) : (
                <span>
                  {t({ hi: "प्रदर्शित:", en: "Showing:" })}{" "}
                  <span className="font-bold text-[#3E0B02]">
                    {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
                    {Math.min(currentPage * ITEMS_PER_PAGE, filteredPujas.length)}
                  </span>{" "}
                  / {t({ hi: "कुल", en: "of" })}{" "}
                  <span className="font-bold text-[#AF0807]">{filteredPujas.length}</span>{" "}
                  {t({ hi: "अनुष्ठान", en: "pujas" })} (
                  {t({ hi: "पृष्ठ", en: "Page" })} {currentPage} / {totalPages})
                </span>
              )}

              {/* View All / Paginated Toggle Button */}
              {filteredPujas.length > ITEMS_PER_PAGE && (
                <button
                  type="button"
                  onClick={() => {
                    setShowAll((prev) => !prev);
                    setCurrentPage(1);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-300 text-[#AF0807] font-bold text-xs transition-colors cursor-pointer shadow-2xs"
                >
                  <Layers className="h-3.5 w-3.5 text-amber-700" />
                  <span>
                    {showAll
                      ? t({ hi: "पृष्ठवार देखें (6 प्रति पृष्ठ)", en: "Show Paginated (6 per page)" })
                      : t({
                          hi: `सभी ${filteredPujas.length} अनुष्ठान देखें`,
                          en: `View All ${filteredPujas.length} Pujas`,
                        })}
                  </span>
                </button>
              )}
            </div>

            {/* Pagination Controls (Only when not in showAll mode and multiple pages exist) */}
            {!showAll && totalPages > 1 && (
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Prev Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage((prev) => prev - 1);
                      const el = document.getElementById("puja-catalog");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-full border border-stone-200 bg-white text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  aria-label={t({ hi: "पिछला पृष्ठ", en: "Previous Page" })}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">{t({ hi: "पिछला", en: "Prev" })}</span>
                </button>

                {/* Numbered Page Buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => {
                        setCurrentPage(pageNum);
                        const el = document.getElementById("puja-catalog");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#AF0807] text-white shadow-md shadow-red-900/20 scale-105"
                          : "bg-white text-stone-700 hover:bg-amber-50 border border-stone-200"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (currentPage < totalPages) {
                      setCurrentPage((prev) => prev + 1);
                      const el = document.getElementById("puja-catalog");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-full border border-stone-200 bg-white text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  aria-label={t({ hi: "अगला पृष्ठ", en: "Next Page" })}
                >
                  <span className="hidden sm:inline">{t({ hi: "अगला", en: "Next" })}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ================= MODAL VIEW FOR DETAILED PUJA SPECS ================= */}
        {selectedPuja && (
          <div
            data-lenis-prevent="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedPuja(null)}
          >
            <div
              data-lenis-prevent="true"
              className="relative w-full max-w-2xl rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPuja(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                aria-label={t({ hi: "बंद करें", en: "Close" })}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Badges */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#AF0807] bg-red-50 border border-red-200/60 rounded-md px-2 py-0.5">
                  {selectedPuja.categoryLabel}
                </span>
                <span className="text-[10.5px] font-bold text-amber-900 bg-amber-100/70 border border-amber-300/60 rounded-full px-2.5 py-0.5">
                  {selectedPuja.badge}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3E0B02] leading-tight mb-2">
                {selectedPuja.title}
              </h3>

              {/* Mantra Snippet */}
              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs font-serif text-amber-950 font-semibold mb-4">
                {selectedPuja.mantraExcerpt}
              </div>

              {/* Significance */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
                {selectedPuja.significance}
              </p>

              {/* Detailed Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm text-stone-700 mb-6">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-[#AF0807]" />
                    <span>{t({ hi: "अवधि एवं मंत्र संख्या", en: "Duration & Mantra Count" })}</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedPuja.duration} • {selectedPuja.mantraCount}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <Flame className="h-4 w-4 text-[#AF0807]" />
                    <span>{t({ hi: "वैदिक एवं तांत्रिक सामग्री", en: "Vedic & Tantric Samagri" })}</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedPuja.samagri}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <CheckCircle2 className="h-4 w-4 text-[#AF0807]" />
                    <span>{t({ hi: "किन परिस्थितियों में विशेष फलदायी", en: "Recommended For" })}</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedPuja.idealFor}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <Scroll className="h-4 w-4 text-[#AF0807]" />
                    <span>{t({ hi: "प्रसाद एवं रक्षा सूत्र प्रेषण", en: "Prasad & Raksha Sutra Dispatch" })}</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedPuja.prasad}
                  </p>
                </div>
              </div>

              {/* Devotee Info Required */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300/80 mb-6 text-xs text-amber-950">
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  <Info className="h-4 w-4 text-[#AF0807]" />
                  <span>{t({ hi: "संकल्प हेतु आवश्यक विवरण:", en: "Details Required for Sankalp:" })}</span>
                </div>
                <p>
                  {t({
                    hi: "यजमान का पूरा नाम, गोत्र, निवास स्थान एवं समस्या का विवरण। पंडित जी द्वारा शुभ मुहूर्त सुनिश्चित कर आपको सूचित किया जाएगा।",
                    en: "Yajman's full name, Gotra, residence, and prayer details. Pandit Ji will determine the auspicious muhurta and coordinate with you.",
                  })}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleWhatsAppBooking(selectedPuja.title)}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-amber-300" />
                  <span>{t({ hi: "पंडित जी से संकल्प व बुकिंग हेतु बात करें", en: "Connect with Pandit Ji for Sankalp & Booking" })}</span>
                </button>

                <a
                  href={getTelUrl(siteConfig.contact.phone1)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-stone-100 hover:bg-stone-200 text-[#3E0B02] font-bold text-xs sm:text-sm transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-[#AF0807]" />
                  <span>{siteConfig.contact.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
