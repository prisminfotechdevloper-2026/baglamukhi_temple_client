"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonialsData, Testimonial } from "@/data/testimonialsData";

function subscribeResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getVisibleCountSnapshot() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function getVisibleCountServerSnapshot() {
  return 3;
}

export default function TestimonialsSlider() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const visibleCount = useSyncExternalStore(
    subscribeResize,
    getVisibleCountSnapshot,
    getVisibleCountServerSnapshot
  );

  const maxIndex = Math.max(0, testimonialsData.length - visibleCount);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const current = Math.min(prev, maxIndex);
      return current > 0 ? current - 1 : maxIndex;
    });
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const current = Math.min(prev, maxIndex);
      return current < maxIndex ? current + 1 : 0;
    });
  }, [maxIndex]);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Calculate slide percentage width based on visibleCount
  const slideWidthPercent = 100 / visibleCount;
  const trackTranslateX = safeIndex * slideWidthPercent;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Controls: Top Right on Desktop */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold text-amber-900 bg-amber-100/70 border border-amber-300/80 px-3 py-1 rounded-md">
            {t({
              hi: `9 में से ${safeIndex + 1}–${Math.min(safeIndex + visibleCount, testimonialsData.length)} अनुभव`,
              en: `Showing ${safeIndex + 1}–${Math.min(safeIndex + visibleCount, testimonialsData.length)} of 9`,
            })}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-stone-500 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            {t({ hi: "100% वास्तविक यजमान समीक्षा", en: "100% Genuine Devotee Reviews" })}
          </span>
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label={t({ hi: "पिछला अनुभव देखें", en: "Previous Testimonial" })}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white border border-amber-300 shadow-sm hover:bg-amber-50 active:scale-95 text-[#AF0807] flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label={t({ hi: "अगला अनुभव देखें", en: "Next Testimonial" })}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white border border-amber-300 shadow-sm hover:bg-amber-50 active:scale-95 text-[#AF0807] flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Overflow Container */}
      <div className="overflow-hidden w-full pb-4">
        {/* Sliding Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${trackTranslateX}%)`,
          }}
        >
          {testimonialsData.map((item: Testimonial) => (
            <div
              key={item.id}
              className="shrink-0 px-2 sm:px-3"
              style={{ width: `${slideWidthPercent}%` }}
            >
              <article className="h-full rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_8px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_16px_36px_-4px_rgba(175,8,7,0.16)] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative group">
                
                {/* Top Row: Hawan Tag & 5 Star Rating */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-wide text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md inline-block max-w-[200px] truncate">
                      {t(item.hawan)}
                    </span>
                    <div className="flex items-center gap-0.5 shrink-0" aria-label="5 Star Rating">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sacred Quote Icon & Text */}
                  <div className="relative my-2 sm:my-3">
                    <Quote className="h-6 w-6 text-amber-200/90 fill-amber-100/50 mb-1 shrink-0" />
                    <p className="text-stone-700 text-xs sm:text-[13.5px] leading-relaxed italic font-sans min-h-[96px] sm:min-h-[105px]">
                      &ldquo;{t(item.quote)}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Devotee Profile (Photo + Name + Location + Verification) */}
                <div className="pt-4 mt-2 border-t border-amber-100/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative h-12 w-12 sm:h-13 sm:w-13 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 shadow-sm bg-amber-50">
                      <Image
                        src={item.image}
                        alt={t(item.name)}
                        fill
                        unoptimized
                        sizes="52px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-[#3E0B02] leading-tight truncate">
                        {t(item.name)}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-stone-500 font-medium mt-0.5 truncate">
                        <MapPin className="h-3 w-3 text-[#AF0807] shrink-0" />
                        <span className="truncate">{t(item.location)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Verification Pill */}
                  <div className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/70 text-[10px] sm:text-[11px] font-bold text-emerald-800">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                    <span className="hidden xs:inline">{t({ hi: "सत्यापित", en: "Verified" })}</span>
                  </div>
                </div>

              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
        {[...Array(maxIndex + 1)].map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={t({
              hi: `स्लाइड ${idx + 1} पर जाएं`,
              en: `Go to slide ${idx + 1}`,
            })}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              safeIndex === idx
                ? "w-7 h-2 bg-[#AF0807]"
                : "w-2 h-2 bg-stone-300 hover:bg-amber-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
