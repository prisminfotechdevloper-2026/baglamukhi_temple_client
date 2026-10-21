"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Flame,
  Scale,
  Compass,
  TrendingUp,
  Scroll,
  HeartHandshake,
  Moon,
  Video,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";

interface ServiceItem {
  id: string;
  title: TranslationPair;
  tag: TranslationPair;
  desc: TranslationPair;
  icon: typeof Flame;
  actionText: TranslationPair;
}

const services: ServiceItem[] = [
  {
    id: "shatru-badha",
    title: {
      hi: "शत्रु बाधा निवारण महाहवन",
      en: "Shatru Badha Nivaran Mahahawan",
    },
    tag: {
      hi: "पीताम्बरा महामंत्र",
      en: "Pitambara Mahamantra",
    },
    desc: {
      hi: "विरोधी शमन, तंत्र बाधा एवं गुप्त शत्रुओं से रक्षा",
      en: "Subdue adversaries, tantrik hurdles & evil-eye protection",
    },
    icon: Flame,
    actionText: {
      hi: "हवन बुक करें",
      en: "Book Hawan",
    },
  },
  {
    id: "court-case",
    title: {
      hi: "कोर्ट-कचहरी विजय अनुष्ठान",
      en: "Court Case Victory Anushthan",
    },
    tag: {
      hi: "विशेष तंत्र पद्धति",
      en: "Special Tantra Vidhan",
    },
    desc: {
      hi: "मुकदमों, कानूनी विवादों एवं झूठे आरोपों से मुक्ति",
      en: "Relief from lawsuits, legal disputes & false allegations",
    },
    icon: Scale,
    actionText: {
      hi: "अनुष्ठान जानें",
      en: "Know Anushthan",
    },
  },
  {
    id: "kundali-analysis",
    title: {
      hi: "जन्म कुंडली एवं राशि दोष निवारण",
      en: "Kundali & Rashi Dosh Nivaran",
    },
    tag: {
      hi: "जन्मपत्रिका फलकथन",
      en: "Janam Kundali Analysis",
    },
    desc: {
      hi: "कालसर्प, मांगलिक, पितृ दोष एवं ग्रह शांति",
      en: "Kaal Sarp, Manglik, Pitra Dosh & Graha Shanti",
    },
    icon: Compass,
    actionText: {
      hi: "कुंडली दिखाएं",
      en: "Consult Kundali",
    },
  },
  {
    id: "vyapar-vriddhi",
    title: {
      hi: "व्यापार वृद्धि एवं धनलक्ष्मी हवन",
      en: "Vyapar Vriddhi & Dhanlaxmi Hawan",
    },
    tag: {
      hi: "कनकधारा व श्री सूक्त",
      en: "Kanakdhara & Shri Suktam",
    },
    desc: {
      hi: "कर्ज मुक्ति, आर्थिक रुकावटें एवं व्यापार में निरंतर उन्नति",
      en: "Debt relief, financial clearance & business prosperity",
    },
    icon: TrendingUp,
    actionText: {
      hi: "पूजा बुक करें",
      en: "Book Puja",
    },
  },
  {
    id: "sawa-lakh-jaap",
    title: {
      hi: "सवा लाख महामंत्र अखंड जाप",
      en: "Sawa Lakh Mahamantra Akhand Jaap",
    },
    tag: {
      hi: "नाम-गोत्र संकल्प",
      en: "Naam-Gotra Sankalp",
    },
    desc: {
      hi: "3 से 7 दिवसीय महायज्ञ पूर्ण वैदिक विद्वानों द्वारा",
      en: "3 to 7 days Mahayagya by learned Vedic scholars",
    },
    icon: Scroll,
    actionText: {
      hi: "सवा लाख जाप",
      en: "Sawa Lakh Jaap",
    },
  },
  {
    id: "health-puja",
    title: {
      hi: "रोग-कष्ट एवं महामृत्युंजय पूजा",
      en: "Rog-Kasht & Mahamrityunjaya Puja",
    },
    tag: {
      hi: "दीर्घायु रक्षा विधान",
      en: "Longevity & Health Vidhan",
    },
    desc: {
      hi: "असाध्य शारीरिक कष्ट, मानसिक भय एवं आरोग्य लाभ",
      en: "Protection from severe illness, mental distress & healing",
    },
    icon: HeartHandshake,
    actionText: {
      hi: "आरोग्य पूजा",
      en: "Arogya Puja",
    },
  },
  {
    id: "graha-shanti",
    title: {
      hi: "शनि साढ़े साती व राहु-केतु शांति",
      en: "Shani Sade Sati & Rahu-Ketu Shanti",
    },
    tag: {
      hi: "नवग्रह पीड़ा शमन",
      en: "Navagraha Shanti Vidhan",
    },
    desc: {
      hi: "ग्रहों की क्रूर दृष्टि एवं बुरी नजर से संपूर्ण रक्षा",
      en: "Complete shield from planetary afflictions & negative energies",
    },
    icon: Moon,
    actionText: {
      hi: "ग्रह शांति",
      en: "Graha Shanti",
    },
  },
  {
    id: "online-puja",
    title: {
      hi: "ऑनलाइन लाइव संकल्प एवं पूजा",
      en: "Online Live Sankalp & Puja",
    },
    tag: {
      hi: "घर बैठे दर्शन",
      en: "Live E-Darshan",
    },
    desc: {
      hi: "लाइव वीडियो दर्शन, संकल्प एवं डाक द्वारा अभिमंत्रित प्रसाद",
      en: "Live video call Darshan, Sankalp & Prasad home delivery",
    },
    icon: Video,
    actionText: {
      hi: "लाइव पूजा",
      en: "Live Puja",
    },
  },
];

export default function ServicesMarquee() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [stepWidth, setStepWidth] = useState(336); // default fallback (320px + 16px gap)
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  // Triple array for seamless wrap-around looping
  const items = [...services, ...services, ...services];

  // Dynamically compute exact card width + 16px gap on mount and window resize
  const measureStep = useCallback(() => {
    if (trackRef.current && trackRef.current.children.length > 0) {
      const firstChild = trackRef.current.children[0] as HTMLElement;
      if (firstChild) {
        setStepWidth(firstChild.offsetWidth + 16);
      }
    }
  }, []);

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, [measureStep]);

  // Next slide handler
  const nextSlide = useCallback(() => {
    setIsTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Previous slide handler
  const prevSlide = useCallback(() => {
    setIsTransitionEnabled(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  }, []);

  // Auto-slide every 2 seconds with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Handle transition end for seamless infinite loop
  const handleTransitionEnd = () => {
    if (currentIndex >= services.length) {
      setIsTransitionEnabled(false);
      const resetIndex = currentIndex % services.length;
      setCurrentIndex(resetIndex);

      // Re-enable smooth transition in next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
  };

  return (
    <section
      className="w-full bg-gradient-to-b from-[#FFFDF9] via-amber-50/25 to-white border-y border-amber-200/80 py-4 sm:py-5 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Strip with Controls */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Title */}
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#AF0807] text-white shadow-xs">
            <Flame className="h-3.5 w-3.5 text-amber-300" />
          </span>
          <h2 className="font-serif font-bold text-sm sm:text-base text-[#3E0B02] tracking-tight">
            {t({
              hi: "पं. दीपक शर्मा द्वारा सिद्ध वैदिक सेवाएँ एवं अनुष्ठान",
              en: "Vedic Pujas & Anushthan by Pt. Deepak Sharma",
            })}
          </h2>
        </div>

        {/* Right: Status Pill & Prev/Next Arrows */}
        <div className="flex items-center gap-2.5">
          <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-[#AF0807] bg-amber-500/15 border border-amber-400/50 rounded-full px-3 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#AF0807] animate-pulse" />
            <span>
              {t({
                hi: "ऑनलाइन व प्रत्यक्ष पूजा उपलब्ध",
                en: "Online & In-Person Puja Available",
              })}
            </span>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white hover:bg-amber-100 text-stone-700 hover:text-[#AF0807] border border-amber-300/80 shadow-2xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Slide"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white hover:bg-amber-100 text-stone-700 hover:text-[#AF0807] border border-amber-300/80 shadow-2xs transition-colors cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Slider Track Container (WITHOUT any left/right white fade masks) */}
      <div className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex gap-4 py-1"
          style={{
            transform: `translate3d(-${currentIndex * stepWidth}px, 0, 0)`,
            transition: isTransitionEnabled
              ? "transform 600ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
            willChange: "transform",
          }}
        >
          {items.map((item, idx) => {
            const Icon = item.icon;

            return (
              <Link
                key={`${item.id}-${idx}`}
                href={`/pujas#${item.id}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-4 border border-amber-300/80 shadow-xs hover:shadow-md hover:border-[#AF0807]/60 hover:-translate-y-0.5 transition-all duration-300 w-[270px] sm:w-[320px] shrink-0 text-left"
              >
                {/* Card Top: Icon & Tag */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 border border-amber-300 text-[#AF0807] group-hover:bg-[#AF0807] group-hover:text-amber-200 transition-colors shadow-2xs">
                    <Icon className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="rounded-full bg-amber-100/70 border border-amber-300/60 px-2.5 py-0.5 text-[10px] font-semibold text-amber-950">
                    {t(item.tag)}
                  </span>
                </div>

                {/* Card Middle: Title & Description */}
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-[15px] text-[#3E0B02] group-hover:text-[#AF0807] transition-colors leading-snug">
                    {t(item.title)}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {t(item.desc)}
                  </p>
                </div>

                {/* Card Bottom: Action Link */}
                <div className="mt-3.5 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-[#AF0807] group-hover:text-[#7A0505] transition-colors">
                  <span>{t(item.actionText)}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
