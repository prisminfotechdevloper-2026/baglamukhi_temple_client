"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Scroll,
  Clock,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ShieldCheck,
  Maximize2,
  X,
  Eye,
  Compass,
  UserCheck,
  Calendar,
  MapPin,
  User,
  MessageCircle,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/data/siteConfig";

export default function GuruJiKundaliSection() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<boolean>(false);

  // Interactive Birth Details Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"phaladesh" | "sampoorna">("phaladesh");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [pob, setPob] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(false);
        setIsModalOpen(false);
      }
    };
    if (lightbox || isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox, isModalOpen]);

  const handleOpenModal = (plan: "phaladesh" | "sampoorna") => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleSendDetails = (e: React.FormEvent) => {
    e.preventDefault();
    const planName =
      selectedPlan === "phaladesh"
        ? "जन्म पत्रिका फलादेश (₹1,100)"
        : "सम्पूर्ण जन्म कुंडली विश्लेषण (₹2,100)";

    const message = [
      `*॥ श्री गणेशाय नमः ॥*`,
      `*नमस्ते आचार्य वशिष्ठ विशाल शर्मा जी,*`,
      `मैं ${planName} सेवा हेतु अपना जन्म विवरण प्रेषित कर रहा/रही हूँ:`,
      ``,
      `• *नाम:* ${name.trim() || "उल्लेखित नहीं"}`,
      `• *जन्म तिथि:* ${dob.trim() || "उल्लेखित नहीं"}`,
      `• *जन्म समय:* ${tob.trim() || "उल्लेखित नहीं"}`,
      `• *जन्म स्थान:* ${pob.trim() || "उल्लेखित नहीं"}`,
      question.trim() ? `• *प्रमुख प्रश्न:* ${question.trim()}` : "",
      ``,
      `कृपया मार्गदर्शन एवं शुभ समय प्रदान करें।`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = getWhatsAppUrl(message, "kundali");
    window.open(url, "_blank", "noopener,noreferrer");
    setIsModalOpen(false);
  };

  // ================= 2 KUNDALI PACKAGES (फलादेश एवं सम्पूर्ण विश्लेषण) =================
  const kundaliPackages = [
    {
      id: "phaladesh",
      planKey: "phaladesh" as const,
      title: { hi: "जन्म पत्रिका फलादेश", en: "Janam Patrika Phaladesh" },
      price: "₹1,100",
      priceNum: 1100,
      duration: { hi: "20-30 मिनट", en: "20-30 Mins" },
      method: { hi: "वैदिक लग्न, गोचर व दशा फलादेश", en: "Vedic Lagna, Transit & Dasha" },
      guide: { hi: "आचार्य वशिष्ठ विशाल शर्मा", en: "Acharya Vashishtha Vishal Sharma" },
      badge: { hi: "सुख-शांति व त्वरित समाधान", en: "Quick Resolution" },
      desc: {
        hi: "वर्तमान ग्रह गोचर, महादशा एवं जीवन के 2-3 प्रमुख व्यक्तिगत प्रश्नों (करियर, विवाह, व्यापार) पर शास्त्रोक्त समाधान।",
        en: "Guidance on active Mahadasha, transit planets, and 2-3 specific life questions on career, business, or marriage.",
      },
      highlights: [
        { hi: "लग्न व चंद्र कुंडली की स्थिति का फलादेश", en: "Ascendant & Moon chart analysis" },
        { hi: "वर्तमान महादशा व अंतर्दशा का प्रभाव", en: "Impact of current Mahadasha & Antardasha" },
        { hi: "करियर, आजीविका व धन प्रश्नों पर मार्गदर्शन", en: "Career, livelihood & wealth guidance" },
        { hi: "सरल शास्त्रोक्त मंत्र जप एवं वैदिक उपाय", en: "Simple Vedic mantra chanting & remedies" },
      ],
      isPopular: false,
    },
    {
      id: "sampoorna",
      planKey: "sampoorna" as const,
      title: { hi: "सम्पूर्ण जन्म कुंडली विश्लेषण", en: "Complete Kundali Analysis" },
      price: "₹2,100",
      priceNum: 2100,
      duration: { hi: "विस्तृत व्यक्तिगत चर्चा", en: "In-Depth Call" },
      method: { hi: "12 भाव, नवमांश व षोडशवर्ग चक्र", en: "12 Houses, Navamsha & Shodashvarga" },
      guide: { hi: "आचार्य वशिष्ठ विशाल शर्मा", en: "Acharya Vashishtha Vishal Sharma" },
      badge: { hi: "सर्वोच्च सिद्धि • सम्पूर्ण जीवन चक्र", en: "Comprehensive Audit" },
      desc: {
        hi: "12 भावों की सूक्ष्म जांच, कालसर्प, मांगलिक व पितृ दोष परीक्षण, शिक्षा, विवाह, संतान योग तथा सटीक रत्न व रुद्राक्ष परामर्श।",
        en: "Microscopic audit of 12 houses, Kaal Sarp, Manglik & Pitra dosha diagnosis, gemstone & lifelong remedies.",
      },
      highlights: [
        { hi: "12 भावों एवं नवमांश चक्र का गहन परीक्षण", en: "Deep Shastric audit of 12 houses & Navamsha" },
        { hi: "कालसर्प, मांगलिक व पितृ दोष निवारण उपाय", en: "Remedies for Kaal Sarp, Manglik & Pitra doshas" },
        { hi: "शिक्षा, विवाह, संतान व व्यापार का दीर्घकालिक फलादेश", en: "Long-term forecast for career, marriage & progeny" },
        { hi: "सटीक रत्न (Gemstone), रुद्राक्ष व यंत्र निर्देश", en: "Precise Gemstone, Rudraksha & Yantra prescription" },
      ],
      isPopular: true,
    },
  ];

  return (
    <section
      id="guru-ji-kundali-seva"
      className="relative w-full py-10 sm:py-14 bg-[#FFF8E7] overflow-hidden border-b border-[#EBD8B4]"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-start text-left mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[3px] w-8 bg-[#D89B18] rounded-full shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B45309] font-serif">
              {t({
                hi: "वैदिक ज्योतिष एवं जन्म पत्रिका विश्लेषण",
                en: "Vedic Astrology & Janam Kundali Analysis",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[38px] font-black text-[#4A0C16] tracking-tight leading-tight">
            {t({
              hi: "जन्म पत्रिका विश्लेषण एवं दक्षिणा",
              en: "Janam Kundali Analysis & Dakshina",
            })}
          </h2>

          <p className="mt-2 text-stone-700 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
            {t({
              hi: "विद्वान ज्योतिषाचार्य आचार्य वशिष्ठ विशाल शर्मा जी द्वारा वैदिक पद्धति से जन्म पत्रिका का सूक्ष्म परीक्षण, ग्रह दोष शांति व जीवन मार्गदर्शन। अपनी आवश्यकता अनुसार फलादेश अथवा सम्पूर्ण विश्लेषण सेवा का चयन करें।",
              en: "Accurate Janam Kundali analysis, planetary dosha remedies, and life guidance by Vedic Astrologer Acharya Vashishtha Vishal Sharma Ji. Choose between Phaladesh or Complete Kundali Analysis.",
            })}
          </p>

          {/* Quick Jump Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => handleOpenModal("phaladesh")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#8B0000] text-white font-serif text-xs font-bold shadow-xs border border-[#D89B18] cursor-pointer hover:bg-[#700000] transition-colors"
            >
              <Scroll className="h-3.5 w-3.5 text-amber-300" />
              <span>
                {t({
                  hi: "1. जन्म पत्रिका फलादेश (₹1,100)",
                  en: "1. Kundali Phaladesh (₹1,100)",
                })}
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleOpenModal("sampoorna")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF8] hover:bg-white text-stone-700 font-serif text-xs font-bold border border-[#EBD8B4] hover:border-[#D89B18] transition-all cursor-pointer"
            >
              <BookOpen className="h-3.5 w-3.5 text-[#8B0000]" />
              <span>
                {t({
                  hi: "2. सम्पूर्ण जन्म कुंडली विश्लेषण (₹2,100)",
                  en: "2. Complete Kundali Analysis (₹2,100)",
                })}
              </span>
            </button>
          </div>
        </div>

        {/* ================= UNIFIED ARCHITECTURE: SIDE-BY-SIDE (MATCHING HAWAN) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          {/* ============ LEFT COLUMN: OFFICIAL POSTER & GUIDANCE (lg:col-span-4) ============ */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-amber-300/80 border-l-[6px] border-l-[#D89B18] shadow-sm flex flex-col justify-between">
              {/* Authenticity Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100 text-[#8B0000] text-xs font-bold border border-amber-300/80 mb-3 w-fit">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D89B18]" />
                <span>
                  {t({
                    hi: "अधिकृत विवरण पत्र • आचार्य वशिष्ठ विशाल शर्मा",
                    en: "Authorized Document • Acharya Vishal Sharma",
                  })}
                </span>
              </div>

              {/* Poster Image with Zoom Trigger */}
              <div
                onClick={() => setLightbox(true)}
                className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-[#D89B18] shadow-md group cursor-pointer bg-stone-900"
              >
                <Image
                  src="/images/vedic-kundali-patrika.webp"
                  alt="वैदिक जन्म पत्रिका अधिकृत विवरण पत्र - आचार्य वशिष्ठ विशाल शर्मा"
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
                    {t({
                      hi: "वैदिक जन्म पत्रिका अधिकृत विवरण पत्र",
                      en: "Vedic Janam Kundali Official Notice",
                    })}
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
                  <span>
                    {t({
                      hi: "विवरण पत्र पूरा देखें (Full View)",
                      en: "View Full Poster",
                    })}
                  </span>
                </button>

                <p className="text-[11px] text-stone-600 leading-relaxed text-left pt-1">
                  {t({
                    hi: "जन्म तिथि, समय व स्थान के आधार पर शास्त्रोक्त लग्न व नवमांश चक्र का व्यक्तिगत सूक्ष्म विश्लेषण किया जाता है।",
                    en: "Accurate planetary and divisional chart analysis based on birth date, time, and birthplace.",
                  })}
                </p>
              </div>
            </div>

            {/* Acharya Vishal Sharma Ji's Guidance Callout */}
            <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-amber-300/80 border-l-[6px] border-l-[#D89B18] text-left">
              <p className="font-serif text-xs font-bold text-[#8B0000] mb-1 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D89B18]" />
                <span>
                  {t({
                    hi: "आचार्य वशिष्ठ विशाल शर्मा जी का मार्गदर्शन:",
                    en: "Acharya Vishal Sharma Ji's Guidance:",
                  })}
                </span>
              </p>
              <p className="text-stone-700 text-xs leading-relaxed">
                {t({
                  hi: "यदि आप किसी तात्कालिक प्रश्न (करियर, विवाह या व्यापार) का समाधान चाहते हैं तो फलादेश (₹1,100) उपयुक्त है। जीवन के समस्त 12 भावों, ग्रह दोषों (कालसर्प/मांगलिक/पितृ) व संपूर्ण भविष्यफल हेतु सम्पूर्ण विश्लेषण (₹2,100) अनुशंसित है।",
                  en: "For immediate questions on career or marriage, Phaladesh (₹1,100) is suitable. For deep 12-house analysis and lifelong dosha remedies, Complete Analysis (₹2,100) is recommended.",
                })}
              </p>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: 2 KUNDALI PACKAGES (lg:col-span-8) ============ */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {kundaliPackages.map((pkg) => (
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

                  {/* Method & Astrologer Spec */}
                  <div className="space-y-1 mb-2.5 text-[11.5px] text-stone-700">
                    <div className="flex items-start gap-1.5">
                      <Compass className="h-3.5 w-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span className="leading-tight">
                        <strong>{t({ hi: "पद्धति: ", en: "Method: " })}</strong>
                        {t(pkg.method)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <UserCheck className="h-3.5 w-3.5 text-amber-700 shrink-0" />
                      <span>
                        <strong>{t({ hi: "ज्योतिषी: ", en: "Astrologer: " })}</strong>
                        {t(pkg.guide)}
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
                    onClick={() => handleOpenModal(pkg.planKey)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                  >
                    <CalendarCheck className="h-3.5 w-3.5 text-amber-300" />
                    <span>
                      {t({
                        hi: "कुंडली परामर्श बुक करें",
                        en: "Book Kundali Guidance",
                      })}
                    </span>
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      `नमस्ते आचार्य वशिष्ठ विशाल शर्मा जी, मुझे ${t(pkg.title)} (${pkg.price}) परामर्श प्राप्त करना है। कृपया समय प्रदान करें।`,
                      "kundali"
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
                      hi: "वैदिक जन्म पत्रिका विश्लेषण - अधिकृत विवरण पत्र",
                      en: "Vedic Janam Kundali Analysis - Official Notice",
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
                    src="/images/vedic-kundali-patrika.webp"
                    alt="वैदिक जन्म पत्रिका अधिकृत विवरण पत्र"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 896px"
                    priority
                  />
                </div>
              </div>

              <div className="p-3 bg-[#2B0609] border-t border-[#D89B18]/40 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-amber-200/90">
                  {t({
                    hi: "कुंडली परामर्श हेल्पलाइन: +91 95756 64204",
                    en: "Kundali Helpline: +91 95756 64204",
                  })}
                </span>
                <a
                  href={getTelUrl("kundali")}
                  className="px-3 py-1 bg-[#D89B18] text-[#2B0609] font-bold text-xs rounded hover:bg-amber-400 transition-colors"
                >
                  {t({ hi: "सीधे कॉल करें", en: "Call Directly" })}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ================= INTERACTIVE BIRTH DETAILS MODAL ================= */}
        {isModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative w-full max-w-lg bg-[#FFFDF9] border border-[#ECD4AA] rounded-2xl shadow-2xl p-5 sm:p-6 border-t-[6px] border-t-[#8B0000] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-[#6A4E2B] hover:bg-[#F3E5CA] hover:text-[#2A0E08] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="text-left mb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#FFF3DC] border border-[#ECD19A] rounded text-[#8B0000] text-[11px] font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="h-3 w-3 text-[#D89B18]" />
                  <span>
                    {selectedPlan === "phaladesh"
                      ? t({ hi: "फलादेश (₹1,100)", en: "Phaladesh (₹1,100)" })
                      : t({ hi: "सम्पूर्ण विश्लेषण (₹2,100)", en: "Full Analysis (₹2,100)" })}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#2A0E08]">
                  {t({
                    hi: "जन्म विवरण प्रेषित करें",
                    en: "Submit Birth Details",
                  })}
                </h3>
                <p className="text-xs text-[#6B5335] mt-0.5">
                  {t({
                    hi: "विवरण भरकर 1-क्लिक में WhatsApp पर आचार्य जी को भेजें।",
                    en: "Submit details and send directly to Acharya Ji on WhatsApp.",
                  })}
                </p>
              </div>

              {/* Plan Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#F5EAD3] rounded-lg mb-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setSelectedPlan("phaladesh")}
                  className={`py-2 px-3 rounded-md transition-all text-center cursor-pointer ${
                    selectedPlan === "phaladesh"
                      ? "bg-[#8B0000] text-amber-100 shadow-xs"
                      : "text-[#5A3F1F] hover:bg-[#EBDDC1]"
                  }`}
                >
                  {t({ hi: "फलादेश (₹1,100)", en: "Phaladesh (₹1,100)" })}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPlan("sampoorna")}
                  className={`py-2 px-3 rounded-md transition-all text-center cursor-pointer ${
                    selectedPlan === "sampoorna"
                      ? "bg-[#8B0000] text-amber-100 shadow-xs"
                      : "text-[#5A3F1F] hover:bg-[#EBDDC1]"
                  }`}
                >
                  {t({ hi: "सम्पूर्ण विश्लेषण (₹2,100)", en: "Full Analysis (₹2,100)" })}
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSendDetails} className="space-y-3 text-left text-xs">
                <div>
                  <label className="block text-xs font-semibold text-[#2A0E08] mb-1">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-[#8B0000]" />
                      {t({ hi: "जातक का नाम (Full Name) *", en: "Full Name *" })}
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t({ hi: "उदा. राहुल शर्मा", en: "e.g. Rahul Sharma" })}
                    className="w-full px-3 py-2 bg-white border border-[#DDCBB0] rounded-lg text-[#2A0E08] placeholder-[#9D886F] focus:outline-hidden focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#2A0E08] mb-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[#8B0000]" />
                        {t({ hi: "जन्म तिथि (Date of Birth) *", en: "Date of Birth *" })}
                      </span>
                    </label>
                    <input
                      type="text"
                      required
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      placeholder={t({ hi: "उदा. 15 अगस्त 1992", en: "e.g. 15 Aug 1992" })}
                      className="w-full px-3 py-2 bg-white border border-[#DDCBB0] rounded-lg text-[#2A0E08] placeholder-[#9D886F] focus:outline-hidden focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2A0E08] mb-1">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#8B0000]" />
                        {t({ hi: "जन्म समय (Time of Birth)", en: "Time of Birth" })}
                      </span>
                    </label>
                    <input
                      type="text"
                      value={tob}
                      onChange={(e) => setTob(e.target.value)}
                      placeholder={t({ hi: "उदा. 08:30 AM (लगभग)", en: "e.g. 08:30 AM (approx)" })}
                      className="w-full px-3 py-2 bg-white border border-[#DDCBB0] rounded-lg text-[#2A0E08] placeholder-[#9D886F] focus:outline-hidden focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A0E08] mb-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#8B0000]" />
                      {t({ hi: "जन्म स्थान / शहर (Place of Birth) *", en: "Place of Birth *" })}
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    value={pob}
                    onChange={(e) => setPob(e.target.value)}
                    placeholder={t({ hi: "उदा. उज्जैन, मध्य प्रदेश", en: "e.g. Ujjain, MP" })}
                    className="w-full px-3 py-2 bg-white border border-[#DDCBB0] rounded-lg text-[#2A0E08] placeholder-[#9D886F] focus:outline-hidden focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A0E08] mb-1">
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="h-3.5 w-3.5 text-[#8B0000]" />
                      {t({ hi: "प्रमुख प्रश्न / समस्या (वैकल्पिक)", en: "Key Question (Optional)" })}
                    </span>
                  </label>
                  <textarea
                    rows={2}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder={t({
                      hi: "उदा. करियर में रुकावट, विवाह में विलंब आदि",
                      en: "e.g. Career issues, marriage delay, etc.",
                    })}
                    className="w-full px-3 py-2 bg-white border border-[#DDCBB0] rounded-lg text-[#2A0E08] placeholder-[#9D886F] focus:outline-hidden focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-amber-100 font-bold text-xs sm:text-sm rounded-lg transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <WhatsAppIcon className="h-4 w-4 fill-amber-200" />
                    <span>
                      {t({
                        hi: "WhatsApp पर विवरण प्रेषित करें",
                        en: "Send Details on WhatsApp",
                      })}
                    </span>
                  </button>
                  <p className="text-[10.5px] text-center text-stone-500 mt-2">
                    {t({
                      hi: "सीधे आचार्य जी के ज्योतिष नंबर (+91 95756 64204) पर भेजा जाएगा",
                      en: "Directly sent to Acharya Ji (+91 95756 64204)",
                    })}
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
