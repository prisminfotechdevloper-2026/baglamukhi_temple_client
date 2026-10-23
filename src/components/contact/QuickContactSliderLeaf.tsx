"use client";

import React, { useState, useEffect, useRef, TouchEvent } from "react";
import {
  Flame,
  Compass,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import InstagramIcon from "@/components/common/InstagramIcon";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function QuickContactSliderLeaf() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides = [
    {
      id: "hawan",
      title: "हवन व पूजा बुकिंग",
      phone: "+91 72240 83313",
      telLink: "tel:+917224083313",
      subtitle: "हवन, अनुष्ठान व मुहूर्त आरक्षण",
      icon: Flame,
      iconBg: "bg-amber-50 border-amber-400 text-[#AF0807]",
      actionLabel: "कॉल करें",
      whatsappText: "जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे हवन व पूजा बुकिंग के संदर्भ में जानकारी चाहिए।",
    },
    {
      id: "kundali",
      title: "कुंडली व ज्योतिष परामर्श",
      phone: "+91 95756 64204",
      telLink: "tel:+919575664204",
      subtitle: "जन्मपत्रिका, ग्रह दोष व उपाय",
      icon: Compass,
      iconBg: "bg-amber-50 border-amber-400 text-[#AF0807]",
      actionLabel: "कॉल करें",
      whatsappText: "जय माँ बगलामुखी! पंडित जी, मुझे जन्म कुंडली एवं ज्योतिष परामर्श हेतु मार्गदर्शन चाहिए।",
    },
    {
      id: "email",
      title: "आधिकारिक ईमेल व सोशल",
      email: "AshthamMahavidhya@gmail.com",
      mailLink: "mailto:AshthamMahavidhya@gmail.com",
      instagram: "@ashtham_mahavidhya",
      instaLink: "https://www.instagram.com/ashtham_mahavidhya?dlrf=c2kxa2h4dGl6ZG1x",
      subtitle: "ई-संकल्प, पत्राचार व मंदिर अपडेट्स",
      icon: Mail,
      iconBg: "bg-amber-50 border-amber-400 text-[#AF0807]",
    },
  ];

  const totalSlides = slides.length;

  // Auto-slide every 4.5 seconds unless paused by user interaction
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  // Touch Swipe Handlers for smooth mobile manual swiping
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
      // 40px threshold for swipe
      if (diff > 40) {
        nextSlide();
      } else if (diff < -40) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 6000);
  };

  return (
    <div
      className="block sm:hidden w-full relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fixed Container Frame (Strict fixed height to prevent layout shift) */}
      <div className="relative w-full h-[225px] overflow-hidden rounded-2xl bg-white border-y-0 border-x-2 border-amber-400 shadow-[0_8px_24px_-4px_rgba(217,119,6,0.14)]">
        
        {/* Horizontal Sliding Track */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, idx) => {
            const Icon = slide.icon;
            return (
              <div
                key={slide.id}
                className="w-full h-full shrink-0 p-4.5 flex flex-col justify-between items-center text-center select-none"
              >
                {/* Top Icon & Badge */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 ${slide.iconBg} mb-2 shadow-xs`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-950">
                    {slide.title}
                  </span>
                </div>

                {/* Center Content: Phone or Email/Insta */}
                <div className="my-auto">
                  {slide.phone ? (
                    <a
                      href={slide.telLink}
                      className="font-serif text-xl font-black text-[#AF0807] hover:text-[#7A0505] transition-colors tracking-tight block"
                    >
                      {slide.phone}
                    </a>
                  ) : (
                    <a
                      href={slide.mailLink}
                      className="font-serif text-[13.5px] font-bold text-[#3E0B02] hover:text-[#AF0807] transition-colors break-all block"
                    >
                      {slide.email}
                    </a>
                  )}
                  <p className="text-[11px] text-stone-600 mt-0.5">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Bottom Action CTAs */}
                <div className="w-full flex items-center justify-center gap-2 pt-2 border-t border-amber-100/80">
                  {slide.phone ? (
                    <>
                      <a
                        href={slide.telLink}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#AF0807] hover:bg-[#8B0605] text-white font-bold text-xs shadow-xs"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>सीधा कॉल करें</span>
                      </a>
                      <a
                        href={getWhatsAppUrl(slide.whatsappText || "", "primary")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-xs"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
                        <span>WhatsApp</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={slide.mailLink}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-amber-100 hover:bg-amber-200 text-[#8B0000] border border-amber-300 font-bold text-xs shadow-xs"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        <span>ईमेल भेजें</span>
                      </a>
                      <a
                        href={slide.instaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-bold text-xs shadow-xs"
                      >
                        <InstagramIcon className="h-3.5 w-3.5 text-white" />
                        <span>Instagram</span>
                      </a>
                    </>
                  )}
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
          className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-sm border border-stone-200 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Manual Right Arrow Control */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="अगला संपर्क"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-sm border border-stone-200 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Manual Pagination Dots (Fixed 3 Dots matching 3 sections) */}
      <div className="flex items-center justify-center gap-2 mt-2.5">
        {slides.map((_, dotIdx) => (
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
