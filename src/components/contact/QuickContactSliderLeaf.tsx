"use client";

import React, { useState, useEffect, useRef, TouchEvent } from "react";
import {
  Flame,
  Compass,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import InstagramIcon from "@/components/common/InstagramIcon";

export default function QuickContactSliderLeaf() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const cards = [
    {
      id: "hawan",
      icon: Flame,
      iconWrap: "bg-amber-50 border-amber-400 text-[#AF0807]",
      badge: "हवन व पूजा बुकिंग",
      badgeColor: "text-amber-950",
      link: "tel:+917224083313",
      linkText: "+91 72240 83313",
      linkColor: "text-[#AF0807] hover:text-[#7A0505]",
      linkSize: "text-base font-black",
      subtitle: "हवन, अनुष्ठान व मुहूर्त आरक्षण",
      external: false,
    },
    {
      id: "kundali",
      icon: Compass,
      iconWrap: "bg-amber-50 border-amber-400 text-[#AF0807]",
      badge: "कुंडली व ज्योतिष परामर्श",
      badgeColor: "text-amber-950",
      link: "tel:+919575664204",
      linkText: "+91 95756 64204",
      linkColor: "text-[#AF0807] hover:text-[#7A0505]",
      linkSize: "text-base font-black",
      subtitle: "जन्मपत्रिका, ग्रह दोष व उपाय",
      external: false,
    },
    {
      id: "email",
      icon: Mail,
      iconWrap: "bg-amber-50 border-amber-400 text-[#AF0807]",
      badge: "आधिकारिक ईमेल",
      badgeColor: "text-amber-950",
      link: "mailto:AshthamMahavidhya@gmail.com",
      linkText: "AshthamMahavidhya@gmail.com",
      linkColor: "text-[#3E0B02] hover:text-[#AF0807]",
      linkSize: "text-xs font-bold break-all",
      subtitle: "ई-संकल्प एवं आधिकारिक पत्राचार",
      external: false,
    },
    {
      id: "instagram",
      icon: InstagramIcon,
      iconWrap: "bg-pink-50 border-pink-400 text-pink-600",
      badge: "आधिकारिक इंस्टाग्राम",
      badgeColor: "text-pink-950",
      link: "https://www.instagram.com/ashtham_mahavidhya?dlrf=c2kxa2h4dGl6ZG1x",
      linkText: "@ashtham_mahavidhya",
      linkColor: "text-[#3E0B02] hover:text-pink-600",
      linkSize: "text-xs font-bold",
      subtitle: "दैनिक दिव्य दर्शन व मंदिर अपडेट्स",
      external: true,
    },
  ];

  const totalSlides = cards.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 40) {
        nextSlide();
      } else if (diff < -40) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <div
      className="block sm:hidden w-full relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fixed-height Slider Frame to prevent any layout shift */}
      <div className="relative w-full h-[185px] overflow-hidden">
        {/* Row-wise Sliding Track */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className="w-full h-full shrink-0 px-1">
                {/* Exact Original Card Design - Zero Extra Buttons */}
                <div className="h-full rounded-2xl bg-white border-y-0 border-x-2 border-amber-400 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] p-5 flex flex-col items-center justify-center text-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${card.iconWrap} mb-2.5 shadow-sm shrink-0`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${card.badgeColor} mb-1`}
                  >
                    {card.badge}
                  </span>
                  <a
                    href={card.link}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className={`font-serif ${card.linkSize} ${card.linkColor} transition-colors block`}
                  >
                    {card.linkText}
                  </a>
                  <p className="text-[11px] text-stone-600 mt-1">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Manual Left Arrow Control */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="पिछला संपर्क"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-sm border border-stone-200 active:scale-95 transition-transform cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Manual Right Arrow Control */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="अगला संपर्क"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-sm border border-stone-200 active:scale-95 transition-transform cursor-pointer"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Manual Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-2.5">
        {cards.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => goToSlide(dotIdx)}
            aria-label={`स्लाइड ${dotIdx + 1} पर जाएं`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === dotIdx
                ? "w-6 bg-[#AF0807] shadow-xs"
                : "w-2 bg-stone-300 hover:bg-stone-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
