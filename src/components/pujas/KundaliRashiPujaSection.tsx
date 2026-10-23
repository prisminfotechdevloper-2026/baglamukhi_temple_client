"use client";

import React, { useState } from "react";
import {
  Compass,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  PhoneCall,
  Flame,
  SunMedium,
  Scroll,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { usePujaBooking } from "@/context/PujaBookingContext";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";

export default function KundaliRashiPujaSection() {
  const { t } = useLanguage();
  const { openBookingModal } = usePujaBooking();
  const [activeTab, setActiveTab] = useState<"doshas" | "rashis" | "kundali">("doshas");
  const [selectedRashi, setSelectedRashi] = useState<number>(0);

  // 1. Kundali Dosh Shanti Services (Concise, short text, easy to understand)
  const doshServices = [
    {
      id: "kaal-sarp-dosh",
      title: { hi: "कालसर्प दोष शांति महायज्ञ", en: "Kaal Sarp Dosh Shanti Yajna" },
      tag: { hi: "12 प्रकार के कालसर्प", en: "All 12 Kaal Sarp" },
      location: { hi: "लखुंदर नदी पावन तट, नलखेड़ा", en: "Lakhundar Riverbank, Nalkheda" },
      symptoms: {
        hi: "अचानक रुकावटें, मानसिक तनाव, डरावने स्वप्न व धन हानि।",
        en: "Sudden setbacks, chronic anxiety, nightmares, and financial drainage.",
      },
      solution: {
        hi: "राहु-केतु शांति, चांदी के नाग-नागिन आहुति एवं सिद्ध पीताम्बरा महाहवन।",
        en: "Rahu-Ketu pacification, sacred silver serpent ahutis, and Pitambara hawan.",
      },
      dakshina: { hi: "दक्षिणा एवं शुभ मुहूर्त हेतु संपर्क करें", en: "Contact for Dakshina & Muhurta" },
    },
    {
      id: "manglik-dosh",
      title: { hi: "मांगलिक दोष एवं विवाह बाधा निवारण", en: "Manglik Dosh & Marriage Remedy" },
      tag: { hi: "शीघ्र विवाह योग", en: "Early Marriage Yogas" },
      location: { hi: "नलखेड़ा सिद्धपीठ गर्भगृह सानिध्य", en: "Nalkheda Siddhapeeth Sanctum" },
      symptoms: {
        hi: "विवाह में अकारण विलंब, रिश्ते बार-बार टूटना एवं दांपत्य कलह।",
        en: "Repeated delays in marriage, broken alliances, and marital discord.",
      },
      solution: {
        hi: "मंगल ग्रह शांति, कुंभ/अर्क विवाह विधान एवं सुखी दांपत्य संकल्प।",
        en: "Mars propitiation, scriptural wedding rituals, and marital bliss sankalp.",
      },
      dakshina: { hi: "दक्षिणा एवं शुभ मुहूर्त हेतु संपर्क करें", en: "Contact for Dakshina & Muhurta" },
    },
    {
      id: "pitru-dosh",
      title: { hi: "पितृ दोष निवारण एवं नारायण बलि", en: "Pitru Dosh & Narayan Bali" },
      tag: { hi: "वंश वृद्धि व शांति", en: "Family Prosperity" },
      location: { hi: "नलखेड़ा सिद्धपीठ तीर्थ", en: "Nalkheda Siddhapeeth Pilgrimage" },
      symptoms: {
        hi: "वंश वृद्धि में रुकावट, घर में अशांति, रोग एवं निरंतर आर्थिक तंगी।",
        en: "Obstacles in progeny, recurring sickness, and chronic scarcity.",
      },
      solution: {
        hi: "पितृ तृप्ति तर्पण, नारायण बलि विधान एवं शास्त्रोक्त शांति आहुतियां।",
        en: "Ancestral tarpan, Narayan Bali rituals, and scriptural peace ahutis.",
      },
      dakshina: { hi: "दक्षिणा एवं शुभ मुहूर्त हेतु संपर्क करें", en: "Contact for Dakshina & Muhurta" },
    },
    {
      id: "shani-sade-sati",
      title: { hi: "शनि साढ़ेसाती, ढैय्या एवं महादशा शांति", en: "Shani Sade Sati & Dhayya Shanti" },
      tag: { hi: "शनि दोष निवारक", en: "Saturn Shield" },
      location: { hi: "नलखेड़ा सिद्धपीठ यज्ञशाला", en: "Nalkheda Yagyashala" },
      symptoms: {
        hi: "अचानक नौकरी छूटना, शारीरिक कष्ट, झूठे आरोप व भारी कर्ज।",
        en: "Job loss, physical illnesses, false accusations, and mounting debt.",
      },
      solution: {
        hi: "शनि स्तम्भन, तिल-उड़द आहुतियां व माँ बगलामुखी कवच धारण।",
        en: "Saturn stambhan, sesame ahutis, and sacred Baglamukhi armor.",
      },
      dakshina: { hi: "दक्षिणा एवं शुभ मुहूर्त हेतु संपर्क करें", en: "Contact for Dakshina & Muhurta" },
    },
    {
      id: "chandal-dosh",
      title: { hi: "गुरु चांडाल एवं सूर्य-राहु ग्रहण दोष", en: "Guru Chandal & Grahan Dosh" },
      tag: { hi: "विद्या व मान-सम्मान", en: "Wisdom & Honor" },
      location: { hi: "नलखेड़ा सिद्धपीठ", en: "Nalkheda Siddhapeeth" },
      symptoms: {
        hi: "करियर में विफलता, अपयश, निर्णय क्षमता का ह्रास व पिता से मतभेद।",
        en: "Career downfalls, loss of reputation, poor decisions, and father discord.",
      },
      solution: {
        hi: "बृहस्पति-राहु सम्पुट जाप, पीत समिधा आहुतियां एवं दोष शांति हवन।",
        en: "Jupiter-Rahu samput jaap, yellow samidha ahutis, and dosha shanti.",
      },
      dakshina: { hi: "दक्षिणा एवं शुभ मुहूर्त हेतु संपर्क करें", en: "Contact for Dakshina & Muhurta" },
    },
    {
      id: "navgrah-shanti",
      title: { hi: "सम्पूर्ण नवग्रह शांति एवं ग्रह दोष महायज्ञ", en: "Complete Navgrah Shanti Mahayajna" },
      tag: { hi: "9 ग्रहों की अनुकूलता", en: "All 9 Planets Alignment" },
      location: { hi: "नलखेड़ा सिद्धपीठ महायज्ञशाला", en: "Nalkheda Mahayagyashala" },
      symptoms: {
        hi: "एक साथ कई क्षेत्रों में परेशानियां, बनते काम बिगड़ना व अशांति।",
        en: "Multi-front crises, repeated failures at the last moment, and chaos.",
      },
      solution: {
        hi: "9 ग्रहों की 9 विशेष समिधाओं से वैदिक आहुतियां व नवग्रह यंत्र पूजन।",
        en: "Vedic ahutis using 9 sacred wood species and consecrated Navgrah Yantra.",
      },
      dakshina: { hi: "दक्षिणा एवं शुभ मुहूर्त हेतु संपर्क करें", en: "Contact for Dakshina & Muhurta" },
    },
  ];

  // 2. 12 Rashis Data with Lord, Element, Lucky Gem & Puja
  const rashiList = [
    {
      nameHi: "मेष",
      nameEn: "Aries",
      symbol: "♈",
      lord: "मंगल देव",
      element: "अग्नि",
      gem: "मूंगा (रक्तमणि)",
      mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
      shanti: "मंगल शांति एवं बगलामुखी स्तम्भन हवन",
    },
    {
      nameHi: "वृषभ",
      nameEn: "Taurus",
      symbol: "♉",
      lord: "शुक्र देव",
      element: "पृथ्वी",
      gem: "ओपल / हीरा",
      mantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः",
      shanti: "शुक्र शांति एवं कनकधारा महाहवन",
    },
    {
      nameHi: "मिथुन",
      nameEn: "Gemini",
      symbol: "♊",
      lord: "बुध देव",
      element: "वायु",
      gem: "पन्ना (Emerald)",
      mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः",
      shanti: "बुध ग्रह शांति व व्यापार वृद्धि हवन",
    },
    {
      nameHi: "कर्क",
      nameEn: "Cancer",
      symbol: "♋",
      lord: "चंद्र देव",
      element: "जल",
      gem: "सच्चा मोती (Pearl)",
      mantra: "ॐ श्रां श्रीं श्रौं सः चंद्रमसे नमः",
      shanti: "चंद्र ग्रह शांति व मानसिक शांति अनुष्ठान",
    },
    {
      nameHi: "सिंह",
      nameEn: "Leo",
      symbol: "♌",
      lord: "सूर्य देव",
      element: "अग्नि",
      gem: "माणिक्य (Ruby)",
      mantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः",
      shanti: "सूर्य शांति, आदित्य हृदय व राजयोग हवन",
    },
    {
      nameHi: "कन्या",
      nameEn: "Virgo",
      symbol: "♍",
      lord: "बुध देव",
      element: "पृथ्वी",
      gem: "पन्ना (Emerald)",
      mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः",
      shanti: "बुध शांति एवं वाणी-बुद्धि सिद्धि हवन",
    },
    {
      nameHi: "तुला",
      nameEn: "Libra",
      symbol: "♎",
      lord: "शुक्र देव",
      element: "वायु",
      gem: "हीरा / जरकन",
      mantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः",
      shanti: "शुक्र दोष शांति व वैवाहिक सुख अनुष्ठान",
    },
    {
      nameHi: "वृश्चिक",
      nameEn: "Scorpio",
      symbol: "♏",
      lord: "मंगल देव",
      element: "जल",
      gem: "मूंगा (Coral)",
      mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
      shanti: "शत्रु बाधा व भूमि विवाद निवारण हवन",
    },
    {
      nameHi: "धनु",
      nameEn: "Sagittarius",
      symbol: "♐",
      lord: "गुरु (बृहस्पति)",
      element: "अग्नि",
      gem: "पुखराज (Yellow Sapphire)",
      mantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः",
      shanti: "गुरु ग्रह शांति व भाग्योदय महाहवन",
    },
    {
      nameHi: "मकर",
      nameEn: "Capricorn",
      symbol: "♑",
      lord: "शनि देव",
      element: "पृथ्वी",
      gem: "नीलम (Blue Sapphire)",
      mantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः",
      shanti: "शनि साढ़ेसाती शांति व पीड़ा निवारण",
    },
    {
      nameHi: "कुम्भ",
      nameEn: "Aquarius",
      symbol: "♒",
      lord: "शनि देव",
      element: "वायु",
      gem: "नीलम / जामुनिया",
      mantra: "ॐ शं शनैश्चराय नमः",
      shanti: "शनि महादशा व कर्मकाण्ड शुद्धि हवन",
    },
    {
      nameHi: "मीन",
      nameEn: "Pisces",
      symbol: "♓",
      lord: "गुरु (बृहस्पति)",
      element: "जल",
      gem: "पुखराज (Yellow Sapphire)",
      mantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः",
      shanti: "सर्व मनोकामना व आध्यात्मिक शांति अनुष्ठान",
    },
  ];

  return (
    <section className="relative w-full py-10 sm:py-14 bg-[#FFF8E7] overflow-hidden border-b border-[#EBD8B4]">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-start text-left mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[3px] w-8 bg-[#D89B18] rounded-full shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B45309] font-serif">
              {t({
                hi: "ज्योतिषीय कर्मकाण्ड • उज्जैन वेद विद्यालय परंपरा",
                en: "Vedic Astrology Remedies • Ujjain Veda Tradition",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-black text-[#4A0C16] tracking-tight leading-tight">
            {t({
              hi: "कुंडली दोष निवारण एवं राशि ग्रह शांति सेवाएं",
              en: "Kundali Dosha Shanti & Rashi Planetary Services",
            })}
          </h2>

          <p className="mt-2 text-stone-700 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
            {t({
              hi: "जन्म कुंडली में ग्रहों के अनिष्ट प्रभाव, कालसर्प, मांगलिक या पितृ दोष होने पर जीवन में आकस्मिक संकट आते हैं। मुख्य यज्ञाचार्य पं. दीपक शर्मा जी द्वारा नलखेड़ा सिद्धपीठ में शास्त्रोक्त तांत्रिक-वैदिक पद्धति से दोष निवारण संपन्न कराया जाता है।",
              en: "Neutralize Kaal Sarp, Manglik, and Pitru doshas through consecrated Vedic-Tantric anushthans performed by Pt. Deepak Sharma at Nalkheda Siddhapeeth.",
            })}
          </p>
        </div>

        {/* ================= TAB BUTTONS ================= */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 border-b border-amber-300/60 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("doshas")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-serif text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "doshas"
                ? "bg-[#8B0000] text-white shadow-md border border-[#D89B18]"
                : "bg-[#FFFDF8] text-stone-700 hover:bg-white border border-[#EBD8B4]"
            }`}
          >
            <ShieldCheck className={`h-4 w-4 ${activeTab === "doshas" ? "text-amber-300" : "text-[#8B0000]"}`} />
            <span>{t({ hi: "1. प्रमुख कुंडली दोष शांति (6 अनुष्ठान)", en: "1. Core Kundali Dosha Remedies (6 Pujas)" })}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("rashis")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-serif text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "rashis"
                ? "bg-[#8B0000] text-white shadow-md border border-[#D89B18]"
                : "bg-[#FFFDF8] text-stone-700 hover:bg-white border border-[#EBD8B4]"
            }`}
          >
            <Compass className={`h-4 w-4 ${activeTab === "rashis" ? "text-amber-300" : "text-[#8B0000]"}`} />
            <span>{t({ hi: "2. 12 राशि ग्रह शांति व रत्न परामर्श", en: "2. 12 Rashi Planetary Remedies & Gems" })}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("kundali")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-serif text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "kundali"
                ? "bg-[#8B0000] text-white shadow-md border border-[#D89B18]"
                : "bg-[#FFFDF8] text-stone-700 hover:bg-white border border-[#EBD8B4]"
            }`}
          >
            <Scroll className={`h-4 w-4 ${activeTab === "kundali" ? "text-amber-300" : "text-[#8B0000]"}`} />
            <span>{t({ hi: "3. व्यक्तिगत जन्म पत्रिका विश्लेषण", en: "3. Personal Kundali Consultation" })}</span>
          </button>
        </div>

        {/* ================= TAB 1: 6 CORE KUNDALI DOSHA SERVICES ================= */}
        {activeTab === "doshas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {doshServices.map((dosh) => (
              <div
                key={dosh.id}
                className="bg-[#FFFDF8] rounded-2xl p-4 sm:p-5 border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18] hover:border-l-[#8B0000] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10.5px] font-bold px-2 py-0.5 rounded bg-amber-100 text-[#8B0000] border border-amber-300/60">
                      {t(dosh.tag)}
                    </span>
                    <span className="text-[11px] text-stone-500 font-medium">
                      {t(dosh.location)}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A0C16] mb-2 leading-snug">
                    {t(dosh.title)}
                  </h3>

                  <div className="p-2.5 rounded-lg bg-[#FFF3DC]/60 border border-[#EBD8B4] text-xs text-stone-700 space-y-1 mb-3">
                    <p className="leading-relaxed">
                      <strong className="text-[#8B0000]">{t({ hi: "कष्ट/लक्षण: ", en: "Symptoms: " })}</strong>
                      {t(dosh.symptoms)}
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-[#B45309]">{t({ hi: "शास्त्रोक्त समाधान: ", en: "Remedy: " })}</strong>
                      {t(dosh.solution)}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-stone-600 mb-4">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D89B18] shrink-0" />
                    <span>{t({ hi: "व्यक्तिगत नाम-गोत्र संकल्प व लाइव वीडियो सुविधा", en: "Name-Gotra Sankalp & Live Video" })}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-amber-200/50">
                  <button
                    type="button"
                    onClick={() => openBookingModal(t(dosh.title))}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#8B0000] hover:bg-[#A00000] text-white font-bold text-xs shadow-xs cursor-pointer"
                  >
                    <CalendarCheck className="h-3.5 w-3.5 text-amber-300" />
                    <span>{t({ hi: "अनुष्ठान बुक करें", en: "Book Ritual" })}</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे ${t(dosh.title)} के निवारण विधान एवं शुभ मुहूर्त के संदर्भ में जानकारी चाहिए।`,
                      "primary"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white text-stone-800 font-bold text-xs border border-stone-300 hover:border-[#25D366]"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                    <span>{t({ hi: "WhatsApp परामर्श", en: "WhatsApp" })}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= TAB 2: 12 RASHIS QUICK INTERACTIVE GRID ================= */}
        {activeTab === "rashis" && (
          <div className="space-y-6">
            {/* 12 Rashi Selection Chips */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {rashiList.map((rashi, idx) => {
                const isSelected = selectedRashi === idx;
                return (
                  <button
                    key={rashi.nameEn}
                    type="button"
                    onClick={() => setSelectedRashi(idx)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#8B0000] text-white border-[#D89B18] shadow-md scale-[1.02]"
                        : "bg-[#FFFDF8] text-stone-800 border-[#EBD8B4] hover:bg-white"
                    }`}
                  >
                    <span className="text-xl block mb-0.5">{rashi.symbol}</span>
                    <span className="font-serif text-xs sm:text-sm font-bold block">{rashi.nameHi}</span>
                    <span className={`text-[10px] block ${isSelected ? "text-amber-200" : "text-stone-500"}`}>{rashi.nameEn}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Rashi Detail Card (Short, Simple, Direct) */}
            <div className="bg-[#FFFDF8] rounded-2xl p-5 sm:p-6 border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18] shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{rashiList[selectedRashi].symbol}</span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-black text-[#4A0C16]">
                      {rashiList[selectedRashi].nameHi} राशि ({rashiList[selectedRashi].nameEn})
                    </h3>
                    <p className="text-xs text-stone-600">
                      <strong>स्वामी ग्रह: </strong>{rashiList[selectedRashi].lord} • <strong>तत्व: </strong>{rashiList[selectedRashi].element}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-stone-700">
                  <div className="p-2 rounded bg-amber-50 border border-amber-200/60">
                    <strong className="text-[#8B0000]">अनुकूल भाग्य रत्न: </strong>
                    <span>{rashiList[selectedRashi].gem}</span>
                  </div>
                  <div className="p-2 rounded bg-amber-50 border border-amber-200/60">
                    <strong className="text-[#8B0000]">ग्रह शांति अनुष्ठान: </strong>
                    <span>{rashiList[selectedRashi].shanti}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 italic">
                  <strong>दैनिक बीज मंत्र: </strong>{rashiList[selectedRashi].mantra}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-56 shrink-0">
                <button
                  type="button"
                  onClick={() => openBookingModal(`${rashiList[selectedRashi].nameHi} राशि ग्रह शांति अनुष्ठान`)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-[#8B0000] hover:bg-[#A00000] text-white font-bold text-xs shadow-xs cursor-pointer"
                >
                  <CalendarCheck className="h-4 w-4 text-amber-300" />
                  <span>{t({ hi: "ग्रह शांति बुक करें", en: "Book Planetary Puja" })}</span>
                </button>

                <a
                  href={getWhatsAppUrl(
                    `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मेरी राशि ${rashiList[selectedRashi].nameHi} (${rashiList[selectedRashi].nameEn}) है। मुझे ग्रह शांति एवं अनुकूल रत्न के बारे में परामर्श चाहिए।`,
                    "primary"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{t({ hi: "WhatsApp परामर्श", en: "WhatsApp" })}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: PERSONAL KUNDALI CONSULTATION ================= */}
        {activeTab === "kundali" && (
          <div className="bg-[#FFFDF8] rounded-2xl p-6 border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18] shadow-sm text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-100 text-[#8B0000] text-xs font-bold border border-amber-300/60">
                  <SunMedium className="h-3.5 w-3.5 text-[#B45309]" />
                  <span>{t({ hi: "प्रत्यक्ष अथवा ऑनलाइन जन्म कुंडली विश्लेषण", en: "In-Person or Online Kundali Analysis" })}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A0C16]">
                  {t({
                    hi: "पं. दीपक शर्मा जी द्वारा संपूर्ण जन्म कुंडली एवं हस्तरेखा परामर्श",
                    en: "Complete Kundali & Palmistry Guidance by Pt. Deepak Sharma",
                  })}
                </h3>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  {t({
                    hi: "महामृत्युंजय वेद विद्यालय (उज्जैन) से कर्मकाण्ड प्रशिक्षित एवं श्री वशिष्ठ ज्योतिष संस्थान संबद्ध पंडित दीपक शर्मा जी आपकी जन्म पत्रिका का गहन अध्ययन कर ग्रह दोष, व्यापार, विवाह, संतान एवं कोर्ट-केस में अचूक शास्त्रोक्त समाधान प्रदान करते हैं।",
                    en: "Pt. Deepak Sharma thoroughly analyzes your birth chart to provide precise Shastric remedies for business hurdles, marital delays, legal disputes, and planetary afflictions.",
                  })}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-stone-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D89B18] shrink-0" />
                    <span>{t({ hi: "जन्म, समय व स्थान विश्लेषण", en: "Birth time & place study" })}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D89B18] shrink-0" />
                    <span>{t({ hi: "सटीक रत्न व रुद्राक्ष चयन", en: "Authentic Gem & Rudraksha" })}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D89B18] shrink-0" />
                    <span>{t({ hi: "सिद्धपीठ हवन व अनुष्ठान विधान", en: "Siddhapeeth Hawan Rituals" })}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-2.5">
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#8B0000] hover:bg-[#A00000] text-white font-bold text-xs sm:text-sm shadow-md"
                >
                  <PhoneCall className="h-4 w-4 text-amber-300" />
                  <span>{t({ hi: "कॉल करें: +91 72240 83313", en: "Call: +91 72240 83313" })}</span>
                </a>

                <a
                  href={getWhatsAppUrl(
                    "जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे अपनी जन्म कुंडली विश्लेषण एवं ग्रह शांति के संदर्भ में परामर्श चाहिए।",
                    "primary"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{t({ hi: "WhatsApp पर जन्म विवरण भेजें", en: "Send Details on WhatsApp" })}</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
