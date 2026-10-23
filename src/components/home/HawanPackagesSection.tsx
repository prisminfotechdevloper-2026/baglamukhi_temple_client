"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Flame,
  Scroll,
  Clock,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Users,
  Leaf,
  ShieldCheck,
  Maximize2,
  X,
  Eye,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { usePujaBooking } from "@/context/PujaBookingContext";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function HawanPackagesSection() {
  const { t } = useLanguage();
  const { openBookingModal } = usePujaBooking();
  const [lightbox, setLightbox] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
    };
    if (lightbox) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  // ================= 1. CORE HAWAN PACKAGES (हवन श्रेणियां) =================
  const hawanPackages = [
    {
      id: "samanya-hawan",
      title: { hi: "सामान्य हवन", en: "Samanya Hawan" },
      price: "₹2,500",
      priceNum: 2500,
      duration: { hi: "45 मिनट", en: "45 Minutes" },
      samagri: { hi: "पीली सरसों व सिद्ध सामग्री", en: "Yellow Mustard & Vedic Samagri" },
      priests: { hi: "अधिकृत वैदिक पुरोहित", en: "Authorized Vedic Priest" },
      badge: { hi: "सुख-शांति हेतु", en: "Peace & Harmony" },
      desc: {
        hi: "गृह सुख-शांति, दैनिक शुद्धि, सामान्य मनोकामना एवं ग्रह शांति हेतु शास्त्रोक्त संपन्न।",
        en: "For domestic peace, general well-being, and daily spiritual purification.",
      },
      highlights: [
        { hi: "पारिवारिक सुख व शांति", en: "Family peace & harmony" },
        { hi: "पीली सरसों व हवन समिधा", en: "Yellow mustard & sacred wood" },
        { hi: "नाम-गोत्र संकल्प व सिद्ध भस्म", en: "Name-Gotra Sankalp & Bhasma" },
      ],
      isPopular: false,
    },
    {
      id: "vishesh-hawan",
      title: { hi: "विशेष हवन", en: "Vishesh Hawan" },
      price: "₹5,500",
      priceNum: 5500,
      duration: { hi: "1.5 घंटे", en: "1.5 Hours" },
      samagri: { hi: "21 प्रकार की विशेष जड़ी-बूटी व लाल मिर्च", en: "21 Sacred Herbs & Red Chili" },
      priests: { hi: "1-2 वैदिक ब्राह्मण", en: "1-2 Vedic Brahmins" },
      badge: { hi: "कष्ट व बाधा निवारण", en: "Obstacle Removal" },
      desc: {
        hi: "नजर दोष, व्यापारिक मंदी, गृह क्लेश एवं कार्यों में अकारण आने वाली रुकावटों को दूर करने हेतु।",
        en: "To dispel evil eye, household discord, and unexpected blockages in ventures.",
      },
      highlights: [
        { hi: "21 दिव्य औषधियों की आहुतियां", en: "21 Rare medicinal ahutis" },
        { hi: "लाल मिर्च द्वारा स्तम्भन क्रिया", en: "Red chili Stambhan ritual" },
        { hi: "लाइव वीडियो दर्शन व रक्षा सूत्र", en: "Live video & Raksha Sutra" },
      ],
      isPopular: false,
    },
    {
      id: "mahavishesh-hawan",
      title: { hi: "महाविशेष हवन", en: "Mahavishesh Hawan" },
      price: "₹11,000",
      priceNum: 11000,
      duration: { hi: "2 घंटे", en: "2 Hours" },
      samagri: { hi: "36 प्रकार की दुर्लभ औषधि व लाल मिर्च", en: "36 Rare Herbs & Red Chili" },
      priests: { hi: "2 वैदिक यज्ञाचार्य", en: "2 Vedic Yagyacharyas" },
      badge: { hi: "सर्वाधिक लोकप्रिय • शत्रु-तंत्र नाशक", en: "Most Popular • Enemy & Tantra Shield" },
      desc: {
        hi: "शत्रु बाधा, तंत्र-मंत्र दोष, कोर्ट-कचहरी मुकदमा, नजर बाधा निवारण, व्यापार वृद्धि एवं लक्ष्मी प्राप्ति हेतु।",
        en: "Supreme ritual for enemy subjugation, tantric shields, court cases, and business revival.",
      },
      highlights: [
        { hi: "36 प्रकार की दिव्य औषधियां", en: "36 Consecrated divine herbs" },
        { hi: "शत्रु, तंत्र व नजर बाधा निवारण", en: "Shield against enemies & tantra" },
        { hi: "कोर्ट-केस व व्यापार में सफलता", en: "Victory in litigation & commerce" },
      ],
      isPopular: true,
    },
    {
      id: "sarva-manokamna-hawan",
      title: { hi: "सर्व मनोकामना सिद्धि हवन", en: "Sarva Manokamna Siddhi Hawan" },
      price: "₹21,000",
      priceNum: 21000,
      duration: { hi: "3 घंटे", en: "3 Hours" },
      samagri: { hi: "108 प्रकार की दिव्य जड़ी-बूटी व लाल मिर्च", en: "108 Rare Herbs & Red Chili" },
      priests: { hi: "1-2 उच्चकोटि वैदिक ब्राह्मण", en: "1-2 High Vedic Brahmins" },
      badge: { hi: "सर्वोच्च सिद्धि विधान", en: "Supreme Fulfillment Vidhan" },
      desc: {
        hi: "जीवन के समस्त असाध्य संकटों का नाश, राजनीतिक विजय, भूमि विवाद एवं सर्व मनोरथ पूर्ण करने हेतु।",
        en: "Highest hawan for fulfilling any cherished desire, political triumph, and total adversity eradication.",
      },
      highlights: [
        { hi: "108 दुर्लभ जड़ी-बूटियों का महायज्ञ", en: "Grand yajna with 108 rare herbs" },
        { hi: "अखंड मंत्र सम्पुट व स्तम्भन", en: "Continuous mantra samput" },
        { hi: "संपूर्ण सिद्ध पीताम्बरा कवच किट", en: "Complete consecrated kavach kit" },
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="hawan-packages" className="relative w-full py-10 sm:py-14 bg-[#FFF8E7] overflow-hidden border-b border-[#EBD8B4]">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-start text-left mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[3px] w-8 bg-[#D89B18] rounded-full shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B45309] font-serif">
              {t({
                hi: "नलखेड़ा सिद्धपीठ अधिकृत हवन श्रेणियां एवं दक्षिणा",
                en: "Nalkheda Siddhapeeth Authorized Hawan & Dakshina",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[38px] font-black text-[#4A0C16] tracking-tight leading-tight">
            {t({
              hi: "माँ बगलामुखी मुख्य हवन श्रेणियां एवं दक्षिणा",
              en: "Maa Baglamukhi Hawan Packages & Dakshina",
            })}
          </h2>

          <p className="mt-2 text-stone-700 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
            {t({
              hi: "अपनी समस्या या मनोकामना के अनुसार शास्त्रोक्त हवन का चयन करें। सभी हवन मुख्य यज्ञाचार्य पं. दीपक शर्मा जी के सानिध्य में नलखेड़ा सिद्धपीठ की पावन यज्ञशाला में संपन्न होते हैं।",
              en: "Select the consecrated Hawan matching your needs. All fire rituals are performed at Nalkheda Siddhapeeth under Chief Priest Pt. Deepak Sharma (+91 72240 83313).",
            })}
          </p>

          {/* Quick Jump Navigation Anchors */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
              href="#hawan-packages"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#8B0000] text-white font-serif text-xs font-bold shadow-xs border border-[#D89B18]"
            >
              <Flame className="h-3.5 w-3.5 text-amber-300" />
              <span>{t({ hi: "1. मुख्य हवन श्रेणियां (₹2,500 - ₹21,000)", en: "1. Hawan Packages (₹2.5k - ₹21k)" })}</span>
            </a>
            <a
              href="#vishesh-anushthan"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF8] hover:bg-white text-stone-700 font-serif text-xs font-bold border border-[#EBD8B4] hover:border-[#D89B18] transition-all"
            >
              <Scroll className="h-3.5 w-3.5 text-[#8B0000]" />
              <span>{t({ hi: "2. विशेष अनुष्ठान (₹17,000 - ₹51,000)", en: "2. Special Jaap (₹17k - ₹51k)" })}</span>
            </a>
            <a
              href="#ashtak-packages"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF8] hover:bg-white text-stone-700 font-serif text-xs font-bold border border-[#EBD8B4] hover:border-[#D89B18] transition-all"
            >
              <BookOpen className="h-3.5 w-3.5 text-[#8B0000]" />
              <span>{t({ hi: "3. बगलामुखी अष्टक हवन व पाठ", en: "3. Ashtak Hawan & Path" })}</span>
            </a>
          </div>
        </div>

        {/* ================= UNIFIED ARCHITECTURE: SIDE-BY-SIDE ON DESKTOP ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* ============ LEFT COLUMN: OFFICIAL POSTER & VERIFICATION (lg:col-span-4) ============ */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-amber-300/80 border-l-[6px] border-l-[#D89B18] shadow-sm flex flex-col justify-between">
              
              {/* Authenticity Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100 text-[#8B0000] text-xs font-bold border border-amber-300/80 mb-3 w-fit">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D89B18]" />
                <span>{t({ hi: "अधिकृत विवरण पत्र • पं. दीपक शर्मा प्रमाणित", en: "Authorized Poster • Pt. Deepak Sharma" })}</span>
              </div>

              {/* Poster Image with Zoom Trigger */}
              <div
                onClick={() => setLightbox(true)}
                className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-[#D89B18] shadow-md group cursor-pointer bg-stone-900"
              >
                <Image
                  src="/images/hawan_anusthan.webp"
                  alt="माँ बगलामुखी महाविशेष हवन एवं अनुष्ठान अधिकृत विवरण पत्र"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 360px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-95 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <Maximize2 className="h-3.5 w-3.5 text-amber-300" />
                    {t({ hi: "बड़ा देखें (Click to Zoom)", en: "Click to Zoom" })}
                  </span>
                  <span className="text-[10.5px] text-stone-300 mt-0.5">
                    {t({ hi: "नलखेड़ा सिद्धपीठ अधिकृत विवरण पत्र", en: "Nalkheda Siddhapeeth Official Notice" })}
                  </span>
                </div>
              </div>

              {/* Poster Action Buttons */}
              <div className="mt-3.5 space-y-2">
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-100 hover:bg-amber-200 text-[#8B0000] font-bold text-xs border border-amber-300 transition-colors cursor-pointer"
                >
                  <Eye className="h-4 w-4" />
                  <span>{t({ hi: "विवरण पत्र पूरा देखें (Full View)", en: "View Full Poster" })}</span>
                </button>

                <p className="text-[11px] text-stone-600 leading-relaxed text-left pt-1">
                  {t({
                    hi: "हवन की तैयारी नलखेड़ा सिद्धपीठ की पावन यज्ञशाला में की जाती है। संकल्प यजमान के नाम व गोत्र से विधिवत लिया जाता है।",
                    en: "Hawan is conducted in the sacred Yajnashala at Nalkheda Siddhapeeth with individual name-gotra sankalp.",
                  })}
                </p>
              </div>
            </div>

            {/* Pandit Ji's Guidance Callout (Left Column) */}
            <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-amber-300/80 border-l-[6px] border-l-[#D89B18] text-left">
              <p className="font-serif text-xs font-bold text-[#8B0000] mb-1 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D89B18]" />
                <span>{t({ hi: "पंडित दीपक शर्मा जी का मार्गदर्शन:", en: "Pt. Deepak Sharma's Guidance:" })}</span>
              </p>
              <p className="text-stone-700 text-xs leading-relaxed">
                {t({
                  hi: "सामान्य हवन (₹2,500) घर की सुख-शांति हेतु उपयुक्त है। विशेष संकट—जैसे शत्रु बाधा, तंत्र दोष, कोर्ट-केस व व्यापार वृद्धि हेतु विशेष (₹5,500) या महाविशेष (₹11,000) हवन अनुशंसित है।",
                  en: "Samanya Hawan (₹2,500) is ideal for household peace. For intense enemy, tantra, or court crises, Vishesh (₹5,500) or Mahavishesh (₹11,000) is advised.",
                })}
              </p>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: 4 HAWAN PACKAGES IN A 2x2 GRID (lg:col-span-8) ============ */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hawanPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-[#FFFDF8] rounded-2xl p-4 sm:p-4.5 border transition-all duration-300 flex flex-col justify-between ${
                  pkg.isPopular
                    ? "border-l-[6px] border-l-[#8B0000] border-amber-400 shadow-md ring-1 ring-amber-300/60"
                    : "border-[#EBD8B4] border-l-[6px] border-l-[#D89B18] hover:border-l-[#8B0000] shadow-xs hover:shadow-sm"
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[10.5px] font-bold px-2 py-0.5 rounded bg-amber-100 text-[#8B0000] border border-amber-300/60 truncate">
                      {t(pkg.badge)}
                    </span>
                    {pkg.isPopular && (
                      <span className="text-[9.5px] font-black px-2 py-0.5 rounded bg-[#8B0000] text-amber-300 uppercase tracking-wider shrink-0">
                        {t({ hi: "सर्वाधिक अनुशंसित", en: "Recommended" })}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-black text-[#4A0C16] leading-snug">
                    {t(pkg.title)}
                  </h3>

                  {/* Price & Duration Strip */}
                  <div className="mt-2 mb-2.5 p-2 rounded-lg bg-[#FFF3DC]/80 border border-[#EBD8B4] flex items-center justify-between">
                    <div>
                      <span className="text-[9.5px] text-stone-500 uppercase block font-medium">
                        {t({ hi: "प्रामाणिक दक्षिणा", en: "Dakshina" })}
                      </span>
                      <span className="font-serif text-xl font-black text-[#8B0000]">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9.5px] text-stone-500 uppercase block font-medium flex items-center gap-1 justify-end">
                        <Clock className="h-3 w-3 text-amber-700" />
                        {t({ hi: "समय", en: "Time" })}
                      </span>
                      <span className="text-xs font-bold text-stone-800">
                        {t(pkg.duration)}
                      </span>
                    </div>
                  </div>

                  {/* Samagri & Priests Spec */}
                  <div className="space-y-1 mb-2.5 text-[11.5px] text-stone-700">
                    <div className="flex items-start gap-1.5">
                      <Leaf className="h-3.5 w-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span className="leading-tight">
                        <strong>{t({ hi: "सामग्री: ", en: "Herbs: " })}</strong>
                        {t(pkg.samagri)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-amber-700 shrink-0" />
                      <span>
                        <strong>{t({ hi: "पुरोहित: ", en: "Priests: " })}</strong>
                        {t(pkg.priests)}
                      </span>
                    </div>
                  </div>

                  <p className="text-stone-600 text-xs leading-relaxed mb-2.5 line-clamp-2">
                    {t(pkg.desc)}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1 mb-3 pt-2 border-t border-amber-200/50">
                    {pkg.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                        <CheckCircle2 className="h-3 w-3 text-amber-600 shrink-0" />
                        <span className="truncate">{t(h)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-1.5 pt-2 border-t border-amber-200/50">
                  <button
                    type="button"
                    onClick={() => openBookingModal(`${t(pkg.title)} - ${pkg.price}`)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                  >
                    <CalendarCheck className="h-3.5 w-3.5 text-amber-300" />
                    <span>{t({ hi: "हवन बुक करें", en: "Book Hawan" })}</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे ${t(pkg.title)} (${pkg.price}) के बारे में जानकारी एवं शुभ मुहूर्त जानना है।`,
                      "primary"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs border border-stone-300 hover:border-[#25D366] transition-all"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                    <span>{t({ hi: "WhatsApp परामर्श", en: "Ask on WhatsApp" })}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================= LIGHTBOX PREVIEW MODAL ================= */}
        {lightbox && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setLightbox(false)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] bg-[#1E0407] border-2 border-[#D89B18] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 bg-[#2B0609] border-b border-[#D89B18]/40">
                <div className="flex items-center gap-2 min-w-0 pr-3">
                  <ShieldCheck className="h-4 w-4 text-[#D89B18] shrink-0" />
                  <h4 className="font-serif text-sm sm:text-base font-bold text-amber-200 truncate">
                    {t({
                      hi: "माँ बगलामुखी महाविशेष हवन एवं अनुष्ठान - अधिकृत विवरण पत्र",
                      en: "Maa Baglamukhi Mahavishesh Hawan - Official Document",
                    })}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setLightbox(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative flex-1 min-h-[300px] max-h-[66vh] w-full bg-black/50 flex items-center justify-center p-2 sm:p-4">
                <div className="relative w-full h-full min-h-[300px] max-h-[64vh]">
                  <Image
                    src="/images/hawan_anusthan.webp"
                    alt="माँ बगलामुखी महाविशेष हवन एवं अनुष्ठान अधिकृत विवरण पत्र"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 896px"
                    priority
                  />
                </div>
              </div>

              <div className="px-4 py-3 bg-[#2B0609] border-t border-[#D89B18]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-stone-300 text-left line-clamp-2">
                  {t({
                    hi: "नलखेड़ा सिद्धपीठ मुख्य यज्ञाचार्य पं. दीपक शर्मा जी (+91 72240 83313) द्वारा प्रमाणित 4 हवन श्रेणियां एवं 15 दिव्य लाभ सूची",
                    en: "4 Authorized Hawan categories and 15 sacred blessings consecrated by Chief Priest Pt. Deepak Sharma (+91 72240 83313).",
                  })}
                </p>
                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setLightbox(false);
                      openBookingModal("माँ बगलामुखी महाविशेष हवन");
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-[#D89B18] hover:bg-[#C08512] text-stone-900 font-bold text-xs shadow-md transition-colors cursor-pointer"
                  >
                    <CalendarCheck className="h-3.5 w-3.5" />
                    <span>{t({ hi: "हवन बुक करें", en: "Book Hawan" })}</span>
                  </button>
                  <a
                    href={getWhatsAppUrl("जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी मुख्य हवन के संदर्भ में जानकारी चाहिए।", "primary")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
