"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";

interface PopularProduct {
  id: string;
  name: TranslationPair;
  sub: TranslationPair;
  image: string;
  category: "rudraksha" | "ratna";
}

const POPULAR_PRODUCTS: PopularProduct[] = [
  // 6 Rudraksha Products
  {
    id: "rudraksha-mala",
    name: { hi: "रुद्राक्ष माला", en: "Rudraksha Mala" },
    sub: { hi: "108 मनके सिद्ध जप माला", en: "108 Beads Energized Japa Mala" },
    image: "/images/popular-rudraksha-mala.webp",
    category: "rudraksha",
  },
  {
    id: "1-mukhi",
    name: { hi: "1 मुखी रुद्राक्ष", en: "1 Mukhi Rudraksha" },
    sub: { hi: "अत्यंत दुर्लभ • शिव स्वरूप", en: "Extremely Rare • Shiva Form" },
    image: "/images/popular-1-mukhi.webp",
    category: "rudraksha",
  },
  {
    id: "7-mukhi",
    name: { hi: "7 मुखी रुद्राक्ष", en: "7 Mukhi Rudraksha" },
    sub: { hi: "महालक्ष्मी कृपा • धन समृद्धि", en: "Mahalakshmi Grace • Wealth & Prosperity" },
    image: "/images/popular-7-mukhi.webp",
    category: "rudraksha",
  },
  {
    id: "gauri-shankar",
    name: { hi: "गौरी शंकर रुद्राक्ष", en: "Gauri Shankar Rudraksha" },
    sub: { hi: "दांपत्य सुख • अखंड सौभाग्य", en: "Marital Harmony • Divine Union" },
    image: "/images/popular-gauri-shankar.webp",
    category: "rudraksha",
  },
  {
    id: "ganesh-rudraksha",
    name: { hi: "गणेश रुद्राक्ष", en: "Ganesh Rudraksha" },
    sub: { hi: "विघ्न विनाशक • रिद्धि-सिद्धि", en: "Obstacle Remover • Wisdom & Success" },
    image: "/images/popular-ganesh.webp",
    category: "rudraksha",
  },
  {
    id: "5-mukhi",
    name: { hi: "5 मुखी रुद्राक्ष", en: "5 Mukhi Rudraksha" },
    sub: { hi: "मानसिक शांति • आरोग्य", en: "Mental Peace • Good Health" },
    image: "/images/rudraksha-feature.webp",
    category: "rudraksha",
  },

  // 6 Navratna (Gemstones)
  {
    id: "manikya-ruby",
    name: { hi: "माणिक (Ruby)", en: "Ruby (Manikya)" },
    sub: { hi: "सूर्य ग्रह • मान-सम्मान", en: "Sun Planet • Prestige & Leadership" },
    image: "/images/gemstones/ruby-isolated.webp",
    category: "ratna",
  },
  {
    id: "moti-pearl",
    name: { hi: "मोती (Pearl)", en: "Pearl (Moti)" },
    sub: { hi: "चंद्र ग्रह • चित्त शीतलता", en: "Moon Planet • Peace of Mind" },
    image: "/images/gemstones/pearl-isolated.webp",
    category: "ratna",
  },
  {
    id: "panna-emerald",
    name: { hi: "पन्ना (Emerald)", en: "Emerald (Panna)" },
    sub: { hi: "बुध ग्रह • बुद्धि व व्यापार", en: "Mercury Planet • Intellect & Business" },
    image: "/images/gemstones/emerald-isolated.webp",
    category: "ratna",
  },
  {
    id: "pukhraj-sapphire",
    name: { hi: "पुखराज (Yellow Sapphire)", en: "Yellow Sapphire (Pukhraj)" },
    sub: { hi: "बृहस्पति ग्रह • ज्ञान व विवाह", en: "Jupiter Planet • Wisdom & Marriage" },
    image: "/images/gemstones/yellow-sapphire-isolated.webp",
    category: "ratna",
  },
  {
    id: "neelam-blue-sapphire",
    name: { hi: "नीलम (Blue Sapphire)", en: "Blue Sapphire (Neelam)" },
    sub: { hi: "शनि ग्रह • त्वरित उन्नति", en: "Saturn Planet • Rapid Growth" },
    image: "/images/gemstones/blue-sapphire-isolated.webp",
    category: "ratna",
  },
  {
    id: "heera-diamond",
    name: { hi: "हीरा (Diamond)", en: "Diamond (Heera)" },
    sub: { hi: "शुक्र ग्रह • आकर्षण व वैभव", en: "Venus Planet • Luxury & Glamour" },
    image: "/images/gemstones/diamond-angled.webp",
    category: "ratna",
  },
];

const TOTAL_ORIGINAL = POPULAR_PRODUCTS.length; // 12 items
// Duplicate list with unique IDs to achieve seamless infinite single-direction loop without duplicate keys
const EXTENDED_ITEMS = [
  ...POPULAR_PRODUCTS.map((item) => ({ ...item, uniqueKey: `first-${item.id}` })),
  ...POPULAR_PRODUCTS.map((item) => ({ ...item, uniqueKey: `second-${item.id}` })),
];

export default function RudrakshaPopularSliderLeaf() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [stepWidth, setStepWidth] = useState(280);
  const { t } = useLanguage();

  // Measure card width + gap dynamically across all screens
  const updateStepWidth = useCallback(() => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      // Gap: 16px on mobile (< 640px), 20px on sm/desktop (matches mr-4 / sm:mr-5)
      const gap = window.innerWidth < 640 ? 16 : 20;
      setStepWidth(cardWidth + gap);
    }
  }, []);

  useEffect(() => {
    updateStepWidth();
    window.addEventListener("resize", updateStepWidth);
    return () => window.removeEventListener("resize", updateStepWidth);
  }, [updateStepWidth]);

  // Advance by 1 card every 3 seconds (3000ms) in single direction
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // When reaching the end of the first set (index === 12), seamlessly reset to 0
  useEffect(() => {
    if (currentIndex >= TOTAL_ORIGINAL) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 650); // Matches the 600ms transition duration + small buffer

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Touch swipe support for mobile devices
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const diffX = touchStartX.current - e.changedTouches[0].clientX;
      if (diffX > 40) {
        // Swiped left -> advance
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(true);
      } else if (diffX < -40 && currentIndex > 0) {
        // Swiped right -> previous
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(true);
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <div
      role="region"
      aria-label={t({
        hi: "लोकप्रिय रुद्राक्ष एवं नवग्रह रत्न स्लाइडर",
        en: "Popular Rudraksha & Navgrah Gemstones Slider",
      })}
      className="relative w-full overflow-hidden py-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sliding Track - Left & Right edge blur masks removed */}
      <div
        ref={trackRef}
        className="flex items-center"
        style={{
          transform: `translateX(-${currentIndex * stepWidth}px)`,
          transition: isTransitioning
            ? "transform 600ms cubic-bezier(0.25, 1, 0.5, 1)"
            : "none",
        }}
      >
        {EXTENDED_ITEMS.map((item, idx) => {
          const isFirstCard = idx === 0;

          return (
            <div
              key={item.uniqueKey}
              ref={isFirstCard ? cardRef : undefined}
              className="shrink-0 w-[245px] xs:w-[265px] sm:w-[285px] md:w-[305px] mr-3 sm:mr-4 select-none"
            >
              <Link
                href={item.category === "rudraksha" ? "/rudraksha" : "/ratna"}
                className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-white border border-[#EBDCC5] shadow-xs hover:border-[#D4AF37] hover:shadow-md transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 group cursor-pointer"
                title={t({
                  hi: item.category === "rudraksha" ? "रुद्राक्ष संग्रह देखें" : "रत्न संग्रह देखें",
                  en: item.category === "rudraksha" ? "View Rudraksha Collection" : "View Gemstone Collection",
                })}
              >
                {/* Compact, clear, high-resolution product thumbnail */}
                <div className="relative h-14 w-14 xs:h-15 xs:w-15 sm:h-16 sm:w-16 shrink-0 rounded-xl overflow-hidden bg-stone-50 border border-stone-200/90 shadow-2xs flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={t(item.name)}
                    fill
                    sizes="(max-width: 640px) 64px, 72px"
                    className={
                      item.category === "ratna"
                        ? "object-contain p-1 group-hover:scale-108 transition-transform duration-300"
                        : "object-cover group-hover:scale-108 transition-transform duration-300"
                    }
                  />
                </div>

                {/* Name & Subtitle */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                        item.category === "rudraksha"
                          ? "bg-[#8B5A14]"
                          : "bg-[#AF0807]"
                      }`}
                    />
                    <h4 className="font-serif text-[13px] xs:text-[13.5px] sm:text-[14.5px] font-bold text-[#3B1E08] group-hover:text-[#AF0807] transition-colors truncate leading-tight">
                      {t(item.name)}
                    </h4>
                  </div>
                  <p className="text-[11px] xs:text-[11.5px] sm:text-xs text-[#7A5B48] truncate font-medium pl-3">
                    {t(item.sub)}
                  </p>
                </div>

                {/* Right Arrow */}
                <div className="shrink-0 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-amber-50/80 group-hover:bg-[#5A2C18] text-[#8B5A14] group-hover:text-white transition-[color,background-color] duration-200">
                  <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Progress Dots Indicator */}
      <div className="mt-5 flex items-center justify-center gap-1.5">
        {POPULAR_PRODUCTS.map((prod, idx) => {
          const isActive = (currentIndex % TOTAL_ORIGINAL) === idx;
          return (
            <button
              key={prod.id}
              type="button"
              aria-label={t({ hi: `स्लाइड ${idx + 1}`, en: `Slide ${idx + 1}` })}
              onClick={() => {
                setCurrentIndex(idx);
                setIsTransitioning(true);
              }}
              className={`h-2 rounded-full transition-[width,background-color] duration-300 cursor-pointer ${
                isActive
                  ? "w-7 bg-[#5A2C18]"
                  : "w-2 bg-[#D8C4A5] hover:bg-[#B59975]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
