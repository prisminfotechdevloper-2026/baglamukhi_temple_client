"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { usePujaBooking } from "@/context/PujaBookingContext";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function HawanPackagesSection() {
  const { t } = useLanguage();
  const { openBookingModal } = usePujaBooking();
  const [activeTab, setActiveTab] = useState<"hawan" | "anushthan" | "ashtak">("hawan");

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
        { hi: "व्यक्तिगत नाम-गोत्र संकल्प", en: "Personal Name-Gotra Sankalp" },
        { hi: "डाक द्वारा सिद्ध भस्म व प्रसाद", en: "Consecrated Bhasma by post" },
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
        { hi: "लाइव वीडियो दर्शन सुविधा", en: "Live video darshan option" },
        { hi: "सिद्ध पीताम्बरा रक्षा सूत्र", en: "Consecrated Raksha Sutra" },
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
        { hi: "लाइव HD संकल्प व विशेष प्रसाद", en: "Live HD Sankalp & Special Prasad" },
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
        hi: "जीवन के समस्त असाध्य संकटों का नाश, राजनीतिक विजय, भूमि-संपत्ति विवाद एवं सर्व मनोरथ पूर्ण करने हेतु सर्वोच्च हवन।",
        en: "Highest hawan for fulfilling any cherished desire, political triumph, and total adversity eradication.",
      },
      highlights: [
        { hi: "108 दुर्लभ जड़ी-बूटियों का महायज्ञ", en: "Grand yajna with 108 rare herbs" },
        { hi: "अखंड मंत्र सम्पुट व स्तम्भन", en: "Continuous mantra samput" },
        { hi: "सर्व मनोकामना व विजय आशीष", en: "Complete wish fulfillment" },
        { hi: "संपूर्ण सिद्ध पीताम्बरा कवच किट", en: "Complete consecrated kavach kit" },
      ],
      isPopular: false,
    },
  ];

  // ================= 2. SPECIAL ANUSHTHAN (विशेष अनुष्ठान एवं मंत्र जाप) =================
  const anushthanPackages = [
    {
      id: "anushthan-21k",
      title: { hi: "21,000 बगलामुखी महामंत्र जाप", en: "21,000 Baglamukhi Mantra Jaap" },
      price: "₹17,000",
      priceNum: 17000,
      duration: { hi: "1 से 2 दिवस", en: "1-2 Days" },
      desc: {
        hi: "वैदिक ब्राह्मणों द्वारा 36 अक्षरी मूल मंत्र का 21,000 सस्वर पाठ एवं तत्पश्चात दशांश हवन।",
        en: "21,000 chants of 36-akshari mul mantra followed by Dashansh hawan.",
      },
      brahmins: { hi: "5 वैदिक ब्राह्मण", en: "5 Vedic Brahmins" },
      includes: { hi: "दशांश हवन व महाविशेष आहुतियां सम्मिलित", en: "Dashansh Hawan & Mahavishesh Ahuti included" },
    },
    {
      id: "anushthan-36k",
      title: { hi: "36,000 बगलामुखी महामंत्र जाप", en: "36,000 Baglamukhi Mantra Jaap" },
      price: "₹21,000",
      priceNum: 21000,
      duration: { hi: "2 से 3 दिवस", en: "2-3 Days" },
      desc: {
        hi: "36 अक्षरी मूल मंत्र का 36,000 जप। शत्रुओं की वाणी व बुद्धि स्तम्भन एवं कानूनी विवादों में विजय।",
        en: "36,000 chants of 36-letter mul mantra for paralyzing disputes and winning legal cases.",
      },
      brahmins: { hi: "7 वैदिक ब्राह्मण", en: "7 Vedic Brahmins" },
      includes: { hi: "शाबर मंत्र सम्पुट व महाविशेष हवन", en: "Shabar mantra samput & Mahavishesh hawan" },
    },
    {
      id: "anushthan-51k",
      title: { hi: "51,000 बगलामुखी महामंत्र जाप", en: "51,000 Baglamukhi Mantra Jaap" },
      price: "₹36,000",
      priceNum: 36000,
      duration: { hi: "3 से 5 दिवस", en: "3-5 Days" },
      desc: {
        hi: "गंभीर संकट, असाध्य विरोधियों की शांति व व्यापारिक-राजनीतिक प्रतिष्ठा की रक्षा हेतु अति फलदायी अनुष्ठान।",
        en: "Highly effective sadhana for severe adversities and securing business & political prestige.",
      },
      brahmins: { hi: "11 वैदिक ब्राह्मण", en: "11 Vedic Brahmins" },
      includes: { hi: "11 ब्राह्मणों द्वारा जप व दशांश महायज्ञ", en: "Jaap by 11 priests & Dashansh Mahayajna" },
    },
    {
      id: "anushthan-125k",
      title: { hi: "1,25,000 (सवा लाख) महामंत्र अखंड साधना", en: "1.25 Lakh (Sawa Lakh) Akhand Jaap" },
      price: "₹51,000",
      priceNum: 51000,
      duration: { hi: "5 से 7 दिवस", en: "5-7 Days" },
      desc: {
        hi: "11 अथवा 21 ब्राह्मणों द्वारा 36 अक्षरी मूल मंत्र का सवा लाख अखंड जप, दिव्य साधना एवं दशांश महाविशेष हवन।",
        en: "The supreme 1.25 lakh Vedic-Tantric anushthan by 11/21 priests with Dashansh Mahavishesh hawan.",
      },
      brahmins: { hi: "11 अथवा 21 वैदिक ब्राह्मण", en: "11 or 21 Vedic Brahmins" },
      includes: { hi: "महाविशेष हवन, शाबर मंत्र व संपूर्ण प्रसाद किट", en: "Mahavishesh hawan, Shabar mantras & Complete Kit" },
      isSupreme: true,
    },
  ];

  // ================= 3. MAHA ASHTAK HAWAN & PATH (बगलामुखी अष्टक) =================
  const ashtakHawan = [
    {
      title: { hi: "बगलामुखी अष्टक हवन (51 औषधि)", en: "Ashtak Hawan (51 Herbs)" },
      price: "₹21,000",
      priceNum: 21000,
      duration: { hi: "3 घंटे", en: "3 Hours" },
      samagri: { hi: "51 प्रकार की औषधियां", en: "51 Consecrated Herbs" },
      brahmins: { hi: "2-3 वैदिक ब्राह्मणों के सानिध्य में", en: "Under 2-3 Vedic Brahmins" },
      desc: {
        hi: "माँ बगलामुखी अष्टक के दिव्य श्लोकों द्वारा 51 विशेष औषधियों से संकट नाशक महाहवन।",
        en: "Auspicious hawan chanting Maa Baglamukhi Ashtak with 51 medicinal herbs.",
      },
    },
    {
      title: { hi: "बगलामुखी अष्टक हवन (108 जड़ी-बूटी)", en: "Ashtak Hawan (108 Herbs)" },
      price: "₹51,000",
      priceNum: 51000,
      duration: { hi: "5 घंटे", en: "5 Hours" },
      samagri: { hi: "108 प्रकार की जड़ी-बूटियां", en: "108 Rare Herbs" },
      brahmins: { hi: "5 वैदिक ब्राह्मणों के सानिध्य में", en: "Under 5 Vedic Brahmins" },
      desc: {
        hi: "अत्यंत शक्तिशाली अष्टक हवन। 5 ब्राह्मणों द्वारा 108 दुर्लभ औषधियों से महाआहुतियां।",
        en: "Mighty Ashtak hawan with 108 rare herbs by 5 Vedic scholars.",
      },
    },
  ];

  const ashtakPathPackages = [
    {
      title: { hi: "11,000 बगलामुखी अष्टक पाठ एवं दशांश हवन", en: "11,000 Ashtak Path & Dashansh Hawan" },
      price: "₹1,00,000",
      priceNum: 100000,
      desc: { hi: "11,000 सस्वर अष्टक पाठ, दशांश हवन, तर्पण एवं मार्जन सहित।", en: "11,000 Ashtak recitations with Dashansh hawan & tarpan." },
    },
    {
      title: { hi: "21,000 बगलामुखी अष्टक पाठ एवं दशांश हवन", en: "21,000 Ashtak Path & Dashansh Hawan" },
      price: "₹2,00,000",
      priceNum: 200000,
      desc: { hi: "21,000 दिव्य अष्टक पाठ, विशेष तांत्रिक दशांश हवन एवं ब्राह्मण भोजन।", en: "21,000 divine recitations with special tantric Dashansh hawan." },
    },
    {
      title: { hi: "36,000 बगलामुखी अष्टक पाठ एवं दशांश हवन", en: "36,000 Ashtak Path & Dashansh Hawan" },
      price: "₹2,51,000",
      priceNum: 251000,
      desc: { hi: "36,000 सर्वोच्च अष्टक पाठ महायज्ञ, पूर्ण शास्त्रीय विधि व महाप्रसाद।", en: "Supreme 36,000 recitation mahayajna with full Vedic protocol." },
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

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-black text-[#4A0C16] tracking-tight leading-tight">
            {t({
              hi: "माँ बगलामुखी हवन एवं अनुष्ठान श्रेणियां",
              en: "Maa Baglamukhi Hawan & Anushthan Packages",
            })}
          </h2>

          <p className="mt-2 text-stone-700 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
            {t({
              hi: "अपनी समस्या या मनोकामना के अनुसार शास्त्रोक्त हवन का चयन करें। सभी हवन मुख्य यज्ञाचार्य पं. दीपक शर्मा जी के सानिध्य में नलखेड़ा सिद्धपीठ की पावन यज्ञशाला में संपन्न होते हैं।",
              en: "Select the consecrated Hawan matching your needs. All fire rituals are performed at Nalkheda Siddhapeeth under Chief Priest Pt. Deepak Sharma (+91 72240 83313).",
            })}
          </p>
        </div>

        {/* ================= TAB NAVIGATION BUTTONS ================= */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 border-b border-amber-300/60 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("hawan")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-serif text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "hawan"
                ? "bg-[#8B0000] text-white shadow-md border border-[#D89B18]"
                : "bg-[#FFFDF8] text-stone-700 hover:bg-white border border-[#EBD8B4]"
            }`}
          >
            <Flame className={`h-4 w-4 ${activeTab === "hawan" ? "text-amber-300" : "text-[#8B0000]"}`} />
            <span>{t({ hi: "1. मुख्य हवन श्रेणियां (₹2,500 - ₹21,000)", en: "1. Hawan Packages (₹2,500 - ₹21,000)" })}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("anushthan")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-serif text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "anushthan"
                ? "bg-[#8B0000] text-white shadow-md border border-[#D89B18]"
                : "bg-[#FFFDF8] text-stone-700 hover:bg-white border border-[#EBD8B4]"
            }`}
          >
            <Scroll className={`h-4 w-4 ${activeTab === "anushthan" ? "text-amber-300" : "text-[#8B0000]"}`} />
            <span>{t({ hi: "2. विशेष महामंत्र जाप (₹17,000 - ₹51,000)", en: "2. Special Jaap (₹17,000 - ₹51,000)" })}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("ashtak")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-serif text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "ashtak"
                ? "bg-[#8B0000] text-white shadow-md border border-[#D89B18]"
                : "bg-[#FFFDF8] text-stone-700 hover:bg-white border border-[#EBD8B4]"
            }`}
          >
            <BookOpen className={`h-4 w-4 ${activeTab === "ashtak" ? "text-amber-300" : "text-[#8B0000]"}`} />
            <span>{t({ hi: "3. बगलामुखी अष्टक हवन व पाठ", en: "3. Ashtak Hawan & Path" })}</span>
          </button>
        </div>

        {/* ================= TAB 1: CORE HAWAN PACKAGES ================= */}
        {activeTab === "hawan" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {hawanPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative bg-[#FFFDF8] rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between ${
                    pkg.isPopular
                      ? "border-l-[6px] border-l-[#8B0000] border-amber-400 shadow-lg ring-1 ring-amber-300/60"
                      : "border-[#EBD8B4] border-l-[6px] border-l-[#D89B18] hover:border-l-[#8B0000] shadow-xs hover:shadow-md"
                  }`}
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-[#8B0000] border border-amber-300/60 truncate">
                        {t(pkg.badge)}
                      </span>
                      {pkg.isPopular && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#8B0000] text-amber-300 uppercase tracking-wider shrink-0">
                          {t({ hi: "सर्वाधिक अनुशंसित", en: "Recommended" })}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-black text-[#4A0C16] leading-snug">
                      {t(pkg.title)}
                    </h3>

                    {/* Price & Duration Strip */}
                    <div className="mt-2.5 mb-3 p-2.5 rounded-lg bg-[#FFF3DC]/80 border border-[#EBD8B4] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase block font-medium">
                          {t({ hi: "प्रामाणिक दक्षिणा", en: "Dakshina" })}
                        </span>
                        <span className="font-serif text-xl sm:text-2xl font-black text-[#8B0000]">
                          {pkg.price}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-500 uppercase block font-medium flex items-center gap-1 justify-end">
                          <Clock className="h-3 w-3 text-amber-700" />
                          {t({ hi: "समय", en: "Time" })}
                        </span>
                        <span className="text-xs font-bold text-stone-800">
                          {t(pkg.duration)}
                        </span>
                      </div>
                    </div>

                    {/* Samagri & Priests Spec */}
                    <div className="space-y-1.5 mb-3 text-xs text-stone-700">
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

                    <p className="text-stone-600 text-xs leading-relaxed mb-3">
                      {t(pkg.desc)}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-1 mb-4 pt-2.5 border-t border-amber-200/50">
                      {pkg.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                          <CheckCircle2 className="h-3 w-3 text-amber-600 shrink-0" />
                          <span className="truncate">{t(h)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2 border-t border-amber-200/50">
                    <button
                      type="button"
                      onClick={() => openBookingModal(`${t(pkg.title)} - ${pkg.price}`)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                    >
                      <CalendarCheck className="h-4 w-4 text-amber-300" />
                      <span>{t({ hi: "हवन बुक करें", en: "Book This Hawan" })}</span>
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

            {/* Pandit Ji's Guidance Callout */}
            <div className="mt-6 p-4 rounded-xl bg-[#FFFDF8] border border-amber-300/80 border-l-[6px] border-l-[#D89B18] text-left">
              <p className="font-serif text-xs sm:text-sm font-bold text-[#8B0000] mb-1 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#D89B18]" />
                <span>{t({ hi: "पंडित दीपक शर्मा जी का विशेष मार्गदर्शन:", en: "Pt. Deepak Sharma's Guidance:" })}</span>
              </p>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                {t({
                  hi: "मान्यता है कि सामान्य हवन (₹2,500) भक्तजन घर की सुख-शांति हेतु करवाते हैं। वहीं विशेष (₹5,500), महाविशेष (₹11,000) अथवा सर्वमनोकामना सिद्धि हवन (₹21,000) अनेक विशिष्ट मनोकामनाओं—जैसे कि शत्रु बाधा, तंत्र बाधा, नजर दोष निवारण, कोर्ट-कचहरी में विजय, व्यापार वृद्धि एवं लक्ष्मी प्राप्ति आदि के लिए करवाए जाते हैं।",
                  en: "Samanya Hawan (₹2,500) is ideal for household peace. For intense crisis such as enemy obstacles, black magic, evil eye, court cases, and business revival, the Vishesh (₹5,500), Mahavishesh (₹11,000), or Sarva Manokamna Hawan (₹21,000) is prescribed.",
                })}
              </p>
            </div>
          </div>
        )}

        {/* ================= TAB 2: SPECIAL ANUSHTHAN & MANTRA JAAP ================= */}
        {activeTab === "anushthan" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {anushthanPackages.map((anu) => (
                <div
                  key={anu.id}
                  className={`bg-[#FFFDF8] rounded-2xl p-4 sm:p-5 border transition-all flex flex-col justify-between ${
                    anu.isSupreme
                      ? "border-l-[6px] border-l-[#8B0000] border-amber-400 shadow-md ring-1 ring-amber-300"
                      : "border-[#EBD8B4] border-l-[6px] border-l-[#D89B18] hover:border-l-[#8B0000] shadow-xs"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-sm font-black text-[#8B0000]">
                        {t(anu.title)}
                      </span>
                      {anu.isSupreme && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#8B0000] text-amber-300">
                          {t({ hi: "सर्वोच्च महासाधना", en: "Supreme Sadhana" })}
                        </span>
                      )}
                    </div>

                    <div className="p-3 rounded-lg bg-[#FFF3DC]/70 border border-[#EBD8B4] flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase block font-medium">
                          {t({ hi: "संपूर्ण अनुष्ठान दक्षिणा", en: "Complete Dakshina" })}
                        </span>
                        <span className="font-serif text-2xl font-black text-[#8B0000]">
                          {anu.price}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-stone-800 block">
                          {t(anu.duration)}
                        </span>
                        <span className="text-[11px] text-[#B45309] font-semibold">
                          {t(anu.brahmins)}
                        </span>
                      </div>
                    </div>

                    <p className="text-stone-700 text-xs sm:text-[13px] leading-relaxed mb-3">
                      {t(anu.desc)}
                    </p>

                    <div className="p-2 rounded bg-amber-50 text-[11px] text-[#8B0000] font-semibold flex items-center gap-1.5 mb-4">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#D89B18] shrink-0" />
                      <span>{t(anu.includes)}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-amber-200/50">
                    <button
                      type="button"
                      onClick={() => openBookingModal(`${t(anu.title)} - ${anu.price}`)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#8B0000] hover:bg-[#A00000] text-white font-bold text-xs shadow-xs cursor-pointer"
                    >
                      <CalendarCheck className="h-3.5 w-3.5 text-amber-300" />
                      <span>{t({ hi: "अनुष्ठान बुक करें", en: "Book Anushthan" })}</span>
                    </button>

                    <a
                      href={getWhatsAppUrl(
                        `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे ${t(anu.title)} (${anu.price}) के अनुष्ठान विधान की जानकारी चाहिए।`,
                        "primary"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white text-stone-800 font-bold text-xs border border-stone-300 hover:border-[#25D366]"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                      <span>{t({ hi: "WhatsApp परामर्श", en: "Consult" })}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Anushthan Features Summary Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#2B0609] to-[#4A0C16] text-white border border-[#D89B18]/50 text-left">
              <h4 className="font-serif text-sm sm:text-base font-bold text-amber-200 mb-2">
                {t({ hi: "माँ बगलामुखी विशेष अनुष्ठान की वैदिक विशेषताएं:", en: "Key Highlights of Special Anushthan:" })}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs text-stone-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>{t({ hi: "11/21 ब्राह्मणों द्वारा जप", en: "11/21 Vedic Priests" })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>{t({ hi: "36 अक्षरी मूल महामंत्र", en: "36-Akshari Mul Mantra" })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>{t({ hi: "दशांश हवन व शाबर मंत्र", en: "Dashansh Hawan & Shabar" })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>{t({ hi: "महाविशेष हवन सम्मिलित", en: "Mahavishesh Hawan included" })}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: ASHTAK HAWAN & PATH ================= */}
        {activeTab === "ashtak" && (
          <div className="space-y-6 text-left">
            {/* Ashtak Hawan Grid */}
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A0C16] mb-3 flex items-center gap-2">
                <Flame className="h-4 w-4 text-[#8B0000]" />
                <span>{t({ hi: "अत्यंत शक्तिशाली माँ बगलामुखी अष्टक हवन:", en: "Potent Maa Baglamukhi Ashtak Hawan:" })}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ashtakHawan.map((ash, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFDF8] rounded-2xl p-4 sm:p-5 border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18] hover:border-l-[#8B0000] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-base font-bold text-[#4A0C16]">
                          {t(ash.title)}
                        </span>
                        <span className="font-serif text-xl font-black text-[#8B0000]">
                          {ash.price}
                        </span>
                      </div>

                      <div className="text-xs text-stone-600 space-y-1 mb-3">
                        <p><strong>{t({ hi: "समय: ", en: "Time: " })}</strong>{t(ash.duration)}</p>
                        <p><strong>{t({ hi: "सामग्री: ", en: "Herbs: " })}</strong>{t(ash.samagri)}</p>
                        <p><strong>{t({ hi: "सानिध्य: ", en: "Priests: " })}</strong>{t(ash.brahmins)}</p>
                      </div>

                      <p className="text-stone-700 text-xs leading-relaxed mb-4">
                        {t(ash.desc)}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-amber-200/50">
                      <button
                        type="button"
                        onClick={() => openBookingModal(`${t(ash.title)} - ${ash.price}`)}
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#8B0000] hover:bg-[#A00000] text-white font-bold text-xs cursor-pointer"
                      >
                        <CalendarCheck className="h-3.5 w-3.5 text-amber-300" />
                        <span>{t({ hi: "हवन बुक करें", en: "Book Hawan" })}</span>
                      </button>

                      <a
                        href={getWhatsAppUrl(
                          `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे ${t(ash.title)} (${ash.price}) के बारे में जानकारी चाहिए।`,
                          "primary"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white text-stone-800 font-bold text-xs border border-stone-300 hover:border-[#25D366]"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                        <span>{t({ hi: "WhatsApp", en: "WhatsApp" })}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ashtak Path & Dashansh Hawan List */}
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A0C16] mb-3 flex items-center gap-2">
                <Scroll className="h-4 w-4 text-[#8B0000]" />
                <span>{t({ hi: "दिव्य वैदिक बगलामुखी अष्टक पाठ एवं दशांश हवन:", en: "Divine Vedic Ashtak Recitations & Dashansh Hawan:" })}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ashtakPathPackages.map((pathPkg, i) => (
                  <div
                    key={i}
                    className="bg-[#FFFDF8] rounded-xl p-4 border border-[#EBD8B4] border-l-[4px] border-l-[#D89B18] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#4A0C16] mb-1">
                        {t(pathPkg.title)}
                      </h4>
                      <p className="font-serif text-xl font-black text-[#8B0000] mb-2">
                        {pathPkg.price}
                      </p>
                      <p className="text-stone-600 text-xs leading-relaxed mb-3">
                        {t(pathPkg.desc)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openBookingModal(`${t(pathPkg.title)} - ${pathPkg.price}`)}
                      className="w-full inline-flex items-center justify-center gap-1 py-1.5 px-3 rounded bg-[#8B0000] hover:bg-[#A00000] text-white font-bold text-xs transition-colors cursor-pointer"
                    >
                      <CalendarCheck className="h-3.5 w-3.5 text-amber-300" />
                      <span>{t({ hi: "पाठ बुक करें", en: "Book Recitation" })}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
