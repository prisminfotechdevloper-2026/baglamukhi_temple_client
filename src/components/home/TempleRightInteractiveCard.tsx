"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Maximize2,
  X,
} from "lucide-react";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";

interface AartiItem {
  time: TranslationPair;
  title: TranslationPair;
  desc: TranslationPair;
  icon: typeof Sun;
  iconColor: string;
  bgColor: string;
  borderColor: string;
}

const AARTI_SCHEDULE: AartiItem[] = [
  {
    time: {
      hi: "प्रातः 06:00 बजे",
      en: "06:00 AM",
    },
    title: {
      hi: "मंगला आरती",
      en: "Mangala Aarti",
    },
    desc: {
      hi: "प्रातःकालीन प्रथम दिव्य श्रृंगार एवं मंगला पूजन आरती",
      en: "Morning first sacred Shringar & Mangala Puja Aarti",
    },
    icon: Sun,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50/70",
    borderColor: "border-amber-200/80",
  },
  {
    time: {
      hi: "सायं 07:30 बजे",
      en: "07:30 PM",
    },
    title: {
      hi: "संध्या महाआरती",
      en: "Sandhya Maha Aarti",
    },
    desc: {
      hi: "सांध्यकालीन शंखनाद, दीप ज्योति एवं दिव्य महाआरती",
      en: "Evening Shankhanaad, Deep Jyoti & Divya Maha Aarti",
    },
    icon: Moon,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50/60",
    borderColor: "border-orange-200/80",
  },
];

interface TimingItem {
  label: TranslationPair;
  time: TranslationPair;
  desc: TranslationPair;
  badge: TranslationPair;
}

const TIMING_POINTS: TimingItem[] = [
  {
    label: {
      hi: "दैनिक सामान्य दर्शन",
      en: "Daily General Darshan",
    },
    time: {
      hi: "प्रातः 06:00 बजे से रात्रि 09:30 बजे तक",
      en: "06:00 AM to 09:30 PM",
    },
    desc: {
      hi: "समस्त श्रद्धालुओं एवं आगंतुकों हेतु मंदिर के मुख्य कपाट खुले रहते हैं।",
      en: "Main temple gates remain open for all devotees and visitors.",
    },
    badge: {
      hi: "प्रतिदिन खुला",
      en: "Open Daily",
    },
  },
  {
    label: {
      hi: "हवन एवं अनुष्ठान समय",
      en: "Hawan & Anushthan Hours",
    },
    time: {
      hi: "आरती समय को छोड़कर संपूर्ण दिवस",
      en: "Throughout the day (except Aarti)",
    },
    desc: {
      hi: "विशेष मनोकामना एवं तांत्रिक-वैदिक हवन दिनभर विधिवत संपन्न होते हैं।",
      en: "Special Sankalp & Tantrik-Vedic Hawans conducted round the clock.",
    },
    badge: {
      hi: "नियमित",
      en: "Regular",
    },
  },
  {
    label: {
      hi: "नवरात्रि एवं विशेष पर्व",
      en: "Navratri & Special Parva",
    },
    time: {
      hi: "प्रातः 06:00 बजे से रात्रि 11:00 बजे तक",
      en: "06:00 AM to 11:00 PM",
    },
    desc: {
      hi: "चैत्र व शारदीय नवरात्रि, गुप्त नवरात्रि तथा विशेष चतुर्दशी पर विस्तारित समय।",
      en: "Extended timings during Chaitra, Shardiya & Gupt Navratri festivals.",
    },
    badge: {
      hi: "विशेष पर्व",
      en: "Special Occasion",
    },
  },
];

const DARSHAN_IMAGES = [
  {
    src: "/images/mandir-darshan-1.webp",
    title: "माँ पीताम्बरा दिव्य स्वर्ण श्रृंगार",
    subtitle: "प्रातःकालीन स्वर्ण श्रृंगार दर्शन",
    desc: "माँ बगलामुखी के दिव्य त्रिमुखी स्वरूप का प्रातःकालीन अलौकिक स्वर्ण दर्शन।",
  },
  {
    src: "/images/mandir-darshan-2.webp",
    title: "माँ बगलामुखी नील वस्त्र महाशृंगार",
    subtitle: "विशेष पर्व दिव्य दर्शन",
    desc: "नील वस्त्र, छत्र एवं रजत मुकुट से सुशोभित माँ का पावन तेजस्वी स्वरूप।",
  },
  {
    src: "/images/mandir-darshan-3.webp",
    title: "त्रिशक्ति दिव्य पीताम्बर स्वरूप",
    subtitle: "गर्भगृह अखंड दर्शन",
    desc: "महासरस्वती, माँ बगलामुखी एवं महालक्ष्मी का सम्मिलित अलौकिक दरबार।",
  },
];

export default function TempleRightInteractiveCard() {
  const { t } = useLanguage();
  const [showGallery, setShowGallery] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % DARSHAN_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + DARSHAN_IMAGES.length) % DARSHAN_IMAGES.length);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#FFFDF8] border border-[#EBD8B4] shadow-sm hover:shadow-md transition-shadow min-h-[520px] flex flex-col justify-between p-6 sm:p-8 md:p-9">
      
      {/* ================= PANE 1: TIMINGS & AARTI (DEFAULT VIEW) ================= */}
      <div
        className={`flex flex-col justify-between h-full transition-colors duration-500 ${
          showGallery
            ? "-translate-x-full opacity-0 pointer-events-none absolute inset-6 sm:inset-8 md:inset-9"
            : "translate-x-0 opacity-100 relative"
        }`}
      >
        <div>
          {/* Top Real-World Status Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-5">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-1 bg-[#AF0807] rounded-full" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#3E0B02]">
                {t({
                  hi: "दैनिक दर्शन व आरती सारिणी",
                  en: "Daily Darshan & Aarti Schedule",
                })}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-400/50 px-2.5 py-1 rounded-lg text-[11px] font-bold text-[#AF0807] shadow-2xs">
              <Clock className="h-3.5 w-3.5 text-[#AF0807]" />
              <span>
                {t({
                  hi: "कपाट दर्शन खुले हैं",
                  en: "Darshan Doors Open",
                })}
              </span>
            </div>
          </div>

          {/* Card Title */}
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#AF0807] leading-snug mb-6">
            {t({
              hi: "मंदिर बंद होने एवं खुलने का समय",
              en: "Temple Opening & Closing Timings",
            })}
          </h3>

          {/* Aarti 2-Column Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            {AARTI_SCHEDULE.map((aarti) => {
              const Icon = aarti.icon;
              return (
                <div
                  key={aarti.title.hi}
                  className={`relative flex gap-3 p-3.5 rounded-2xl ${aarti.bgColor} border ${aarti.borderColor}`}
                >
                  <div className="flex gap-1 shrink-0 pt-0.5">
                    <div className="w-1 rounded-full bg-[#AF0807]" />
                    <div className="w-0.5 rounded-full bg-amber-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-xs font-bold text-[#3E0B02] mb-0.5">
                      <Icon className={`h-3.5 w-3.5 ${aarti.iconColor}`} />
                      <span>{t(aarti.title)}</span>
                    </div>
                    <div className="font-serif text-base sm:text-lg font-extrabold text-[#AF0807]">
                      {t(aarti.time)}
                    </div>
                    <p className="mt-0.5 text-[11px] text-stone-600 leading-tight">
                      {t(aarti.desc)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Darshan & Havan Timings List */}
          <div className="space-y-3">
            {TIMING_POINTS.map((item) => (
              <div
                key={item.label.hi}
                className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70 hover:border-amber-300 transition-colors"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-red-100/80 text-[#AF0807] text-xs font-bold shrink-0 mt-0.5 font-serif">
                  卐
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                    <span className="font-bold text-xs sm:text-sm text-[#3E0B02]">
                      {t(item.label)}
                    </span>
                    <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/70 rounded-md px-1.5 py-0.5">
                      {t(item.badge)}
                    </span>
                  </div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#AF0807]">
                    {t(item.time)}
                  </div>
                  <p className="text-[11px] text-stone-500 mt-0.5 leading-normal">
                    {t(item.desc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Left Contact Link & Right Arrow Button */}
        <div className="mt-8 pt-5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/contact"
            className="text-xs sm:text-sm font-semibold text-stone-600 hover:text-[#AF0807] transition-colors"
          >
            {t({
              hi: "दर्शन मार्गदर्शन",
              en: "Darshan Guidance",
            })}
          </Link>

          {/* Interactive Arrow Button */}
          <button
            type="button"
            onClick={() => setShowGallery(true)}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="माँ बगलामुखी के 3 दिव्य दर्शन देखें"
          >
            <span>
              {t({
                hi: "माँ के 3 दिव्य दर्शन",
                en: "Maa 3 Divya Darshan",
              })}
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-3.5 w-3.5 text-white" />
            </span>
          </button>
        </div>
      </div>

      {/* ================= PANE 2: 3 DARSHAN IMAGES GALLERY (SLIDES IN FROM RIGHT) ================= */}
      <div
        className={`absolute inset-0 bg-white p-4 sm:p-6 flex flex-col justify-between transition-colors duration-500 ease-out z-10 ${
          showGallery
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Gallery Header with Back Arrow Button */}
        <div className="flex items-center justify-between pb-2.5 border-b border-stone-100">
          <button
            type="button"
            onClick={() => setShowGallery(false)}
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#AF0807] hover:text-[#7A0505] bg-red-50 hover:bg-red-100 border border-red-200/80 rounded-full px-3 py-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>
              {t({
                hi: "समय सारिणी पर वापस",
                en: "Back to Schedule",
              })}
            </span>
          </button>

          <span className="text-xs font-bold text-amber-900 bg-amber-100/80 rounded-full px-2.5 py-0.5 border border-amber-300/60 font-serif">
            {t({ hi: "माँ के दर्शन", en: "Maa Darshan" })} {currentIdx + 1} / {DARSHAN_IMAGES.length}
          </span>
        </div>

        {/* Full-Fit Image Showcase with Prominent Slider Arrows */}
        <div className="relative flex-1 w-full my-2.5 rounded-2xl overflow-hidden bg-stone-950 border-2 border-amber-400/80 shadow-md group">
          {/* Ambient Blurred Background to Fill Space Naturally */}
          <Image
            src={DARSHAN_IMAGES[currentIdx].src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover blur-xl opacity-35 scale-110"
            aria-hidden
          />

          {/* Full-Fit Crisp Darshan Image (Crown to Charan completely visible) */}
          <Image
            src={DARSHAN_IMAGES[currentIdx].src}
            alt={DARSHAN_IMAGES[currentIdx].title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain relative z-10 p-1.5 transition-colors duration-300"
          />

          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/65 hover:bg-[#AF0807] text-white shadow-xl backdrop-blur-xs transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-white/20"
            aria-label={t({ hi: "पिछला दर्शन", en: "Previous Darshan" })}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/65 hover:bg-[#AF0807] text-white shadow-xl backdrop-blur-xs transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-white/20"
            aria-label={t({ hi: "अगला दर्शन", en: "Next Darshan" })}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Fullscreen Zoom Button */}
          <button
            type="button"
            onClick={() => setFullscreenImage(DARSHAN_IMAGES[currentIdx].src)}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-[#AF0807] text-white backdrop-blur-xs transition-colors cursor-pointer border border-white/20"
            title={t({ hi: "बड़ा करके देखें", en: "View Fullscreen" })}
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          {/* Title & Dots Overlay at Bottom */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3.5 pt-10 text-white flex items-end justify-between">
            <div className="min-w-0 pr-2">
              <div className="font-serif text-sm sm:text-base font-bold text-amber-200 truncate">
                {DARSHAN_IMAGES[currentIdx].title}
              </div>
              <p className="text-[11px] text-stone-200 line-clamp-1 mt-0.5">
                {DARSHAN_IMAGES[currentIdx].desc}
              </p>
            </div>

            {/* 3 Quick Dot Indicators */}
            <div className="flex items-center gap-1.5 pb-0.5 shrink-0">
              {DARSHAN_IMAGES.map((img, idx) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-1.5 rounded-full transition-colors cursor-pointer ${
                    currentIdx === idx
                      ? "w-5 bg-amber-400"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`दर्शन ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= LIGHTBOX / FULLSCREEN MODAL ================= */}
      {fullscreenImage && (
        <dialog
          open
          aria-label={t({ hi: "माँ बगलामुखी दर्शन ज़ूम", en: "Maa Baglamukhi Darshan Zoom" })}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 border-0 w-full h-full max-w-none max-h-none m-0"
        >
          {/* Backdrop Button to Close */}
          <button
            type="button"
            className="absolute inset-0 cursor-pointer bg-transparent border-0 w-full h-full"
            onClick={() => setFullscreenImage(null)}
            aria-label={t({ hi: "बंद करें", en: "Close" })}
          />
          <button
            type="button"
            onClick={() => setFullscreenImage(null)}
            className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white cursor-pointer"
            aria-label={t({ hi: "बंद करें", en: "Close" })}
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative z-10 max-w-2xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl"
          >
            <Image
              src={fullscreenImage}
              alt={t({ hi: "माँ बगलामुखी दर्शन", en: "Maa Baglamukhi Darshan" })}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain"
            />
          </div>
        </dialog>
      )}

    </div>
  );
}
