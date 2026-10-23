"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";

interface GalleryItem {
  id: number;
  title: TranslationPair;
  category: string;
  categories: string[];
  src: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: {
      hi: "आचार्य वशिष्ठ विशाल शर्मा (गुरु प्रदत्त नाम: विश्वेश्वरप्रपन्न रामानुज दास) - वशिष्ठ ज्योतिष संस्थानम्, अखिल भारतीय विद्वत्परिषद् सम्मान",
      en: "Acharya Vashishtha Vishal Sharma (Guru-Pradatta Naam: Vishveshwara Prapanna Ramanuja Das) - Vashishtha Jyotish Sansthanam, Akhil Bharatiya Vidwat Parishad Honor",
    },
    category: "pandit-ji",
    categories: ["pandit-ji"],
    src: "/images/acharya-vashishtha-vishal-sharma-samman.webp",
  },
  {
    id: 18,
    title: {
      hi: "आचार्य वशिष्ठ विशाल शर्मा - वशिष्ठ ज्योतिष संस्थानम् (वरिष्ठ ज्योतिषाचार्य)",
      en: "Acharya Vashishtha Vishal Sharma - Vashishtha Jyotish Sansthanam (Senior Astrologer)",
    },
    category: "pandit-ji",
    categories: ["pandit-ji"],
    src: "/images/acharya-vashishtha-vishal-sharma.webp",
  },
  {
    id: 19,
    title: {
      hi: "पंडित पवन शर्मा जी - माँ बगलामुखी साधक एवं वैदिक पुरोहित (7+ वर्ष अनुभव)",
      en: "Pandit Pawan Sharma Ji - Maa Baglamukhi Sadhak & Vedic Priest (7+ Yrs Exp)",
    },
    category: "pandit-ji",
    categories: ["pandit-ji"],
    src: "/images/pandit-pawan-sharma.webp",
  },

  {
    id: 2,
    title: {
      hi: "माँ बगलामुखी मंदिर प्रांगण एवं परिक्रमा मार्ग",
      en: "Maa Baglamukhi Mandir Complex & Parikrama Path",
    },
    category: "mandir",
    categories: ["mandir"],
    src: "/images/mandir_parisar.webp",
  },
  {
    id: 3,
    title: {
      hi: "माँ बगलामुखी मंदिर नलखेड़ा शिखर एवं सिंहद्वार",
      en: "Maa Baglamukhi Mandir Nalkheda Shikhar & Lion Gate",
    },
    category: "mandir",
    categories: ["mandir"],
    src: "/images/baglamukhi-mandir-real.webp",
  },
  {
    id: 4,
    title: {
      hi: "दिव्य महाहवन एवं घृत आहुति धारा",
      en: "Divya Mahahawan & Sacred Ghee Ahuti Stream",
    },
    category: "hawan",
    categories: ["hawan", "pandit-ji"],
    src: "/images/hawan-anushthan-1.webp",
  },
  {
    id: 5,
    title: {
      hi: "शास्त्रोक्त यज्ञ वेदी एवं समिधा अर्पण",
      en: "Shastriya Yagya Vedi & Samidha Arpan",
    },
    category: "hawan",
    categories: ["hawan", "pandit-ji"],
    src: "/images/hawan-anushthan-2.webp",
  },
  {
    id: 6,
    title: {
      hi: "पंडित दीपक शर्मा जी (मुख्य यज्ञाचार्य)",
      en: "Pandit Deepak Sharma Ji (Chief Yagyacharya)",
    },
    category: "pandit-ji",
    categories: ["pandit-ji"],
    src: "/images/pandit-deepak-sharma-new.webp",
  },
    {
    id: 7,
    title: {
      hi: "माँ पीताम्बरा बगलामुखी माता रानी दिव्य दर्शन",
      en: "Maa Pitambara Baglamukhi Mata Rani Divya Darshan",
    },
    category: "mandir",
    categories: ["mandir"],
    src: "/images/mata_rani.webp",
  },
  {
    id: 16,
    title: {
      hi: "पंडित दीपक शर्मा जी यजमान के साथ नलखेड़ा सिद्धपीठ यज्ञशाला में",
      en: "Pandit Deepak Sharma Ji with Devotee at Nalkheda Siddhapeeth Yajnashala",
    },
    category: "pandit-ji",
    categories: ["pandit-ji", "hawan"],
    src: "/images/pandit-deepak-sharma-yajnashala.webp",
  },
  {
    id: 17,
    title: {
      hi: "पंडित दीपक शर्मा जी यजमान परिवार के साथ अनुष्ठान उपरांत",
      en: "Pandit Deepak Sharma Ji with Devotee Family after Sacred Anushthan",
    },
    category: "pandit-ji",
    categories: ["pandit-ji", "hawan"],
    src: "/images/pandit-deepak-sharma-yajman-family.webp",
  },
  {
    id: 8,
    title: {
      hi: "माँ पीताम्बरा त्रिमुखी दिव्य विग्रह स्वरूप",
      en: "Maa Pitambara Trimukhi Divya Vigraha Swaroop",
    },
    category: "mandir",
    categories: ["mandir"],
    src: "/images/baglamukhi-mata.webp",
  },
  {
    id: 9,
    title: {
      hi: "नलखेड़ा मंदिर परिसर एवं दीप स्तम्भ",
      en: "Nalkheda Mandir Complex & Deep Stambha",
    },
    category: "mandir",
    categories: ["mandir"],
    src: "/images/mandir-darshan-1.webp",
  },
  {
    id: 10,
    title: {
      hi: "पावन गर्भगृह एवं शिखर दर्शन",
      en: "Pawan Garbhagriha & Shikhar Darshan",
    },
    category: "mandir",
    categories: ["mandir"],
    src: "/images/mandir-darshan-2.webp",
  },
  {
    id: 11,
    title: {
      hi: "लखुन्दर नदी तट एवं सिद्धपीठ परिसर",
      en: "Lakhundar River Bank & Siddhapeeth Complex",
    },
    category: "mandir",
    categories: ["mandir"],
    src: "/images/mandir-darshan-3.webp",
  },
  {
    id: 12,
    title: {
      hi: "श्री माँ बगलामुखी सिद्धपीठ बोर्ड नलखेड़ा",
      en: "Shri Maa Baglamukhi Siddhapeeth Board Nalkheda",
    },
    category: "mandir",
    categories: ["mandir"],
    src: "/images/temple-board-header.webp",
  },
  {
    id: 13,
    title: {
      hi: "माँ बगलामुखी महाविशेष हवन एवं अनुष्ठान - अधिकृत विवरण पत्र",
      en: "Maa Baglamukhi Mahavishesh Hawan - Official Document",
    },
    category: "hawan",
    categories: ["hawan", "pandit-ji"],
    src: "/images/hawan_anusthan.webp",
  },
  {
    id: 14,
    title: {
      hi: "माँ बगलामुखी विशेष अनुष्ठान - पावन वेदी एवं सर्वतोभद्र मण्डल",
      en: "Maa Baglamukhi Vishesh Anushthan - Sacred Altar & Mandala",
    },
    category: "hawan",
    categories: ["hawan"],
    src: "/images/vishesh_anusthan.webp",
  },
  {
    id: 15,
    title: {
      hi: "माँ बगलामुखी अष्टक - परम स्तम्भन शक्ति स्वरूप",
      en: "Maa Baglamukhi Ashtak - Supreme Stambhan Shakti Swaroop",
    },
    category: "mandir",
    categories: ["mandir", "hawan"],
    src: "/images/maha_ashtak.webp",
  },
];

const categoryTabs = [
  { key: "all", label: { hi: "सभी", en: "All" } },
  { key: "mandir", label: { hi: "मंदिर", en: "Mandir" } },
  { key: "hawan", label: { hi: "हवन", en: "Hawan" } },
  { key: "pandit-ji", label: { hi: "पंडित जी एवं आचार्य", en: "Pandit Ji & Acharya" } },
];

export default function GalleryInteractive() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getCategoryLabel = (category: string) => {
    if (category === "mandir") {
      return t({ hi: "मंदिर दर्शन", en: "Mandir Darshan" });
    }
    if (category === "hawan") {
      return t({ hi: "हवन-अनुष्ठान", en: "Hawan & Yagya" });
    }
    if (category === "pandit-ji") {
      return t({ hi: "पंडित जी एवं आचार्य", en: "Pandit Ji & Acharya" });
    }
    return t({ hi: "दर्शन", en: "Darshan" });
  };

  // Filter items based on active category
  const filteredItems = galleryData.filter((item) => {
    if (activeTab === "all") return true;
    return item.categories.includes(activeTab);
  });

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  // Lock body scroll when lightbox modal is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lightboxIndex]);

  return (
    <section className="w-full bg-[#FAF8F5] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= CATEGORY FILTER TABS ================= */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-1.5 sm:gap-3 mb-8 sm:mb-10 px-1 py-1 max-w-full">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setLightboxIndex(null);
                }}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap ${
                  isActive
                    ? "bg-[#AF0807] text-white shadow-md border border-amber-400 scale-[1.02]"
                    : "bg-white text-stone-700 hover:text-[#AF0807] hover:bg-amber-50 border border-stone-200 shadow-2xs"
                }`}
              >
                <span>{t(tab.label)}</span>
                <span
                  className={`text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-semibold ${
                    isActive ? "bg-black/25 text-amber-200" : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {tab.key === "all"
                    ? galleryData.length
                    : galleryData.filter((i) => i.categories.includes(tab.key)).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= GALLERY GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={t(item.title)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 hover:border-amber-500 shadow-sm hover:shadow-xl aspect-[4/3] cursor-pointer transition-colors duration-300"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={t(item.title)}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Gradient Overlay on Hover / Active */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Image Name in Bottom Left on Hover / Active */}
              <div className="absolute bottom-4 left-4 right-4 z-20 text-left opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transform translate-y-1 group-hover:translate-y-0 group-active:translate-y-0 transition-colors duration-300 pointer-events-none">
                <p className="font-serif text-base sm:text-lg font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-snug">
                  {t(item.title)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-stone-500">
            {t({
              hi: "इस श्रेणी में कोई छवि उपलब्ध नहीं है।",
              en: "No images available in this category.",
            })}
          </div>
        )}

      </div>

      {/* ================= LIGHTBOX POPUP MODAL ================= */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <dialog
          open
          data-lenis-prevent="true"
          aria-label={t(filteredItems[lightboxIndex].title)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 border-0 w-full h-full max-w-none max-h-none m-0"
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightboxIndex(null);
          }}
        >
          {/* Backdrop Button to Close */}
          <button
            type="button"
            className="absolute inset-0 cursor-pointer bg-transparent border-0 w-full h-full"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          />
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            aria-label="Close"
            className="absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
              );
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Content Box */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-2xl bg-black">
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={t(filteredItems[lightboxIndex].title)}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

            {/* Bottom Caption in Modal */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="inline-block text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-1">
                {getCategoryLabel(filteredItems[lightboxIndex].category)} • {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                {t(filteredItems[lightboxIndex].title)}
              </h4>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
