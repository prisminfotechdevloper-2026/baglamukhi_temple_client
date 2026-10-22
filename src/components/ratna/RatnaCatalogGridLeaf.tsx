"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, X, PhoneCall, Sparkles, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

const PHONE = "7223083313";

interface GemstoneItem {
  id: string;
  nameHi: string;
  nameEn: string;
  planetHi: string;
  planetEn: string;
  summaryHi: string;
  summaryEn: string;
  image: string;
  rashi: string;
  metal: string;
  finger: string;
  day: string;
  mantra: string;
  benefits: string[];
}

const GEMSTONES_DATA: GemstoneItem[] = [
  {
    id: "ruby",
    nameHi: "माणिक",
    nameEn: "Ruby",
    planetHi: "सूर्य",
    planetEn: "Sun",
    summaryHi: "आत्मविश्वास, नेतृत्व और मान-सम्मान में वृद्धि करता है।",
    summaryEn: "Enhances confidence, leadership skills and social prestige.",
    image: "/images/gemstones/ruby-isolated.png",
    rashi: "सिंह (Leo)",
    metal: "तांबा (Copper) / स्वर्ण (Gold)",
    finger: "अनामिका (Ring Finger)",
    day: "रविवार (Sunday प्रातःकाल)",
    mantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः",
    benefits: [
      "सरकारी नौकरी, प्रशासनिक पद और नेतृत्व क्षमता में वृद्धि।",
      "हृदय, हड्डियों और नेत्र ज्योति के लिए शुभ फलदायी।",
      "पिता के साथ संबंधों में सुधार और मान-सम्मान में वृद्धि।",
    ],
  },
  {
    id: "pearl",
    nameHi: "मोती",
    nameEn: "Pearl",
    planetHi: "चंद्रमा",
    planetEn: "Moon",
    summaryHi: "मानसिक शांति, भावनात्मक संतुलन और स्वास्थ्य के लिए लाभकारी है।",
    summaryEn: "Brings mental peace, emotional harmony and sound health.",
    image: "/images/gemstones/pearl-isolated.png",
    rashi: "कर्क (Cancer)",
    metal: "चांदी (Silver)",
    finger: "कनिष्ठिका (Little Finger)",
    day: "सोमवार (Monday प्रातःकाल)",
    mantra: "ॐ श्रां श्रीं श्रौं सः चंद्रमसे नमः",
    benefits: [
      "अनिद्रा, तनाव, अवसाद और अत्यधिक क्रोध से तत्काल राहत।",
      "माता के स्वास्थ्य और संबंधों में स्नेह व अनुकूलता।",
      "एकाग्रता, रचनात्मकता और अंतःप्रेरणा में वृद्धि।",
    ],
  },
  {
    id: "coral",
    nameHi: "मूँगा",
    nameEn: "Red Coral",
    planetHi: "मंगल",
    planetEn: "Mars",
    summaryHi: "साहस, ऊर्जा और नकारात्मक ऊर्जा से रक्षा करता है।",
    summaryEn: "Imparts courage, vital energy and protection from negative forces.",
    image: "/images/gemstones/coral-isolated.png",
    rashi: "मेष, वृश्चिक (Aries, Scorpio)",
    metal: "तांबा / पीतल / सोना",
    finger: "अनामिका (Ring Finger)",
    day: "मंगलवार (Tuesday प्रातःकाल)",
    mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
    benefits: [
      "मांगलिक दोष शांति और रक्त संबंधी विकारों से मुक्ति।",
      "भूमि, भवन, अचल संपत्ति और पुलिस/सेना में सफलता।",
      "आत्मविश्वास, शारीरिक बल और शत्रुओं पर विजय।",
    ],
  },
  {
    id: "emerald",
    nameHi: "पन्ना",
    nameEn: "Emerald",
    planetHi: "बुध",
    planetEn: "Mercury",
    summaryHi: "बुद्धि, वाणी, एकाग्रता और व्यापार में सफलता देता है।",
    summaryEn: "Bestows sharp intellect, eloquent speech and business success.",
    image: "/images/gemstones/emerald-isolated.png",
    rashi: "मिथुन, कन्या (Gemini, Virgo)",
    metal: "स्वर्ण / कांसा / चांदी",
    finger: "कनिष्ठिका (Little Finger)",
    day: "बुधवार (Wednesday प्रातःकाल)",
    mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः",
    benefits: [
      "व्यापार, कॉमर्स, शेयर बाजार और संचार में अप्रत्याशित सफलता।",
      "वाणी का प्रभाव, वाकपटुता और तीव्र स्मरण शक्ति।",
      "त्वचा, स्नायु तंत्र और श्वसन रोगों में शांति।",
    ],
  },
  {
    id: "yellow-sapphire",
    nameHi: "पुखराज",
    nameEn: "Yellow Sapphire",
    planetHi: "बृहस्पति",
    planetEn: "Jupiter",
    summaryHi: "धन, ज्ञान, विवाह और संतान सुख में सहायक है।",
    summaryEn: "Attracts wealth, spiritual wisdom, marriage harmony and progeny.",
    image: "/images/gemstones/yellow-sapphire-isolated.png",
    rashi: "धनु, मीन (Sagittarius, Pisces)",
    metal: "स्वर्ण (Gold) / पीतल",
    finger: "तर्जनी (Index Finger)",
    day: "गुरुवार (Thursday प्रातःकाल)",
    mantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः",
    benefits: [
      "विवाह में आ रहे विलंब व बाधाओं का निवारण और दांपत्य सुख।",
      "उच्च शिक्षा, प्रशासनिक परीक्षाओं और आध्यात्मिक ज्ञान में वृद्धि।",
      "आर्थिक संपन्नता, मान-सम्मान और संतान सुख में सहायक।",
    ],
  },
  {
    id: "diamond",
    nameHi: "हीरा",
    nameEn: "Diamond",
    planetHi: "शुक्र",
    planetEn: "Venus",
    summaryHi: "सौंदर्य, प्रेम और भौतिक सुख-समृद्धि प्रदान करता है।",
    summaryEn: "Bestows luxury, aesthetic beauty, love and worldly prosperity.",
    image: "/images/gemstones/diamond-isolated.png",
    rashi: "वृषभ, तुला (Taurus, Libra)",
    metal: "सफेद सोना / प्लेटिनम / चांदी",
    finger: "मध्यमा / अनामिका",
    day: "शुक्रवार (Friday प्रातःकाल)",
    mantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः",
    benefits: [
      "आकर्षण, कला, अभिनय, मॉडलिंग और लग्जरी जीवन में उन्नति।",
      "वैवाहिक जीवन में प्रेम, सामंजस्य और मधुरता।",
      "आर्थिक संपन्नता, वाहन सुख और वैभव में सतत वृद्धि।",
    ],
  },
  {
    id: "blue-sapphire",
    nameHi: "नीलम",
    nameEn: "Blue Sapphire",
    planetHi: "शनि",
    planetEn: "Saturn",
    summaryHi: "कर्म में सफलता, स्थिरता और बाधाओं से मुक्ति देता है।",
    summaryEn: "Grants rapid success in career, stability and removal of obstacles.",
    image: "/images/gemstones/blue-sapphire-isolated.png",
    rashi: "मकर, कुंभ (Capricorn, Aquarius)",
    metal: "पंचधातु / अष्टधातु / चांदी",
    finger: "मध्यमा (Middle Finger)",
    day: "शनिवार (Saturday सायंकाल)",
    mantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः",
    benefits: [
      "शनि की साढ़ेसाती व ढैय्या के दुष्प्रभावों से अभय रक्षा।",
      "त्वरित वित्तीय लाभ, न्याय और कानूनी विवादों में विजय।",
      "कठिन परिश्रम का पूर्ण फल और दीर्घकालिक लक्ष्यों की सिद्धि।",
    ],
  },
  {
    id: "hessonite",
    nameHi: "गोमेद",
    nameEn: "Hessonite",
    planetHi: "राहु",
    planetEn: "Rahu",
    summaryHi: "भ्रम, मानसिक तनाव और अनिश्चितताओं से राहत देता है।",
    summaryEn: "Dispels illusions, mental anxiety and brings sudden financial gains.",
    image: "/images/gemstones/hessonite-isolated.png",
    rashi: "राहु महादशा / अंतर्दशा",
    metal: "अष्टधातु / चांदी",
    finger: "मध्यमा (Middle Finger)",
    day: "शनिवार (Saturday रात्रिकाल)",
    mantra: "ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः",
    benefits: [
      "अज्ञात भय, मानसिक अशांति और डिप्रेशन का शमन।",
      "राजनीति, सट्टा, आयात-निर्यात और आकस्मिक धन लाभ।",
      "कालसर्प दोष और प्रेत बाधाओं से सुरक्षा।",
    ],
  },
  {
    id: "cats-eye",
    nameHi: "लहसुनिया",
    nameEn: "Cat's Eye",
    planetHi: "केतु",
    planetEn: "Ketu",
    summaryHi: "अचानक संकटों से रक्षा और आध्यात्मिक उन्नति में सहायक है।",
    summaryEn: "Shields against unexpected crises and accelerates spiritual progress.",
    image: "/images/gemstones/cats-eye-isolated.png",
    rashi: "केतु महादशा / अंतर्दशा",
    metal: "पंचधातु / चांदी",
    finger: "कनिष्ठिका / मध्यमा",
    day: "मंगलवार / गुरुवार (रात्रिकाल)",
    mantra: "ॐ स्त्रां स्त्रीं स्त्रौं सः केतवे नमः",
    benefits: [
      "अचानक होने वाली दुर्घटनाओं, गुप्त शत्रुओं और तंत्र बाधा से रक्षा।",
      "ध्यान, मोक्ष साधना, छठी इंद्री (Intuition) में तीव्रता।",
      "व्यापार या सट्टे में हुए अचानक बड़े नुकसान की भरपाई।",
    ],
  },
  {
    id: "navratna",
    nameHi: "नवरत्न",
    nameEn: "Navratna",
    planetHi: "सभी ग्रह",
    planetEn: "All Planets",
    summaryHi: "नौ ग्रहों की संतुलित ऊर्जा के लिए अत्यंत शुभ और शक्तिशाली संयोजन।",
    summaryEn: "A powerful combination that balances the energies of all 9 planets.",
    image: "/images/gemstones/navratna-isolated.png",
    rashi: "सभी राशियां (Sarva Rashi)",
    metal: "अष्टधातु / पंचधातु / स्वर्ण",
    finger: "अनामिका / लॉकेट रूप में",
    day: "रविवार / शुभ मुहूर्त",
    mantra: "ॐ ब्रह्मा मुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च गुरुश्च शुक्रः शनि राहु केतवः सर्वे ग्रहाः शान्तिकरा भवन्तु",
    benefits: [
      "समस्त 9 नवग्रहों की शांति और संतुलित ऊर्जा का प्रवाह।",
      "किसी भी विपरीत ग्रह दशा के दुष्प्रभावों का शमन।",
      "पारिवारिक सुख, आरोग्य, आयु वृद्धि और सर्वांगीण समृद्धि।",
    ],
  },
];

export default function RatnaCatalogGridLeaf() {
  const { t } = useLanguage();
  const [selectedGem, setSelectedGem] = useState<GemstoneItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedGem(null);
    }
    if (selectedGem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedGem]);

  const getWhatsappUrl = (gem: GemstoneItem) => {
    const text = `जय श्री माँ बगलामुखी! पंडित जी, मुझे प्रमाणित ${gem.nameHi} (${gem.nameEn}) रत्न के पूजन, प्राण-प्रतिष्ठा व धारण विधि हेतु जानकारी चाहिए।`;
    return `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="ratna-catalog"
      aria-label="प्राकृतिक एवं प्रमाणित नवरत्न संग्रह"
      className="relative w-full py-8 sm:py-12 md:py-16 bg-[#FFFDF8] border-b border-[#EBDCC5]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ SECTION HEADER: Clean & Left-Aligned ============ */}
        <div className="text-left max-w-3xl mb-5 sm:mb-7">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="h-3.5 sm:h-4 w-1 bg-[#5A2C18] rounded-xs" />
            <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-widest text-[#8C5824]">
              {t({ hi: "100% प्राकृतिक एवं लैब प्रमाणित संग्रह", en: "100% Natural & Certified Collection" })}
            </span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-black text-[#3B1E08] tracking-tight leading-tight">
            {t({ hi: "असली एवं प्रमाणित रत्न संग्रह", en: "Authentic Certified Gemstones" })}
          </h2>

          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#6B5A52] leading-relaxed">
            {t({
              hi: "अपनी जन्मकुंडली व ग्रह दशा के अनुसार 100% असली व वैदिक प्राण-प्रतिष्ठित रत्न प्राप्त करें।",
              en: "Get authentic energized Vedic gemstones according to your birth chart and planetary alignments.",
            })}
          </p>
        </div>

        {/* 10-Item Responsive Grid: 5 columns on xl desktop (2 full rows of 5 cards) */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {GEMSTONES_DATA.map((gem) => (
            <div
              key={gem.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#EBDCC5] bg-white p-4 sm:p-4.5 shadow-[0_2px_12px_rgba(90,44,24,0.04)] hover:shadow-[0_8px_24px_rgba(90,44,24,0.1)] transition-shadow duration-300 hover:border-[#D4AF37]"
            >
              {/* Top Details & Gemstone Image */}
              <div>
                {/* Image Container with 3D drop shadow */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto flex items-center justify-center mb-3">
                  <Image
                    src={gem.image}
                    alt={`${gem.nameHi} (${gem.nameEn})`}
                    width={128}
                    height={128}
                    className="object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:scale-108 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-base sm:text-[17px] font-bold text-[#3B1E08] text-center leading-tight">
                  {gem.nameHi} ({gem.nameEn})
                </h3>

                {/* Planet Subtitle */}
                <p className="text-xs sm:text-[13px] font-bold text-[#8C5824] text-center mt-1 mb-2">
                  {gem.planetHi}
                </p>

                {/* Summary Description (Hindi as requested) */}
                <p className="text-[11.5px] xs:text-xs text-[#6B5A52] text-center leading-relaxed font-normal min-h-[44px] flex items-center justify-center px-1">
                  {gem.summaryHi}
                </p>
              </div>

              {/* Action Buttons: View Details + WhatsApp */}
              <div className="mt-4 space-y-2 pt-2 border-t border-[#F5EDE1]">
                {/* Button 1: View Details (Light Sand Background) */}
                <button
                  type="button"
                  onClick={() => setSelectedGem(gem)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#D8C6A5] bg-[#FAF3E3] hover:bg-[#F3E7CE] px-3 py-2 text-xs font-bold text-[#5A2C18] transition-colors duration-200 cursor-pointer shadow-2xs"
                >
                  <Eye className="h-3.5 w-3.5 text-[#5A2C18]" />
                  <span>{t({ hi: "विवरण देखें", en: "View Details" })}</span>
                </button>

                {/* Button 2: WhatsApp (Sacred Green) */}
                <a
                  href={getWhatsappUrl(gem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#155E38] hover:bg-[#114E2E] px-3 py-2 text-xs font-bold text-[#FFF9EE] transition-colors duration-200 cursor-pointer shadow-2xs"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
                  <span>{t({ hi: "WhatsApp पर पूछें", en: "Ask on WhatsApp" })}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL: 2-COLUMN BALANCED GEMSTONE DETAILS ================= */}
      {selectedGem && (
        <dialog
          open
          aria-label={`${selectedGem.nameHi} विवरण`}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs border-0 w-full h-full max-w-none max-h-none m-0"
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedGem(null);
          }}
        >
          {/* Backdrop Click Dismiss */}
          <button
            type="button"
            className="fixed inset-0 cursor-pointer bg-transparent border-0 w-full h-full"
            onClick={() => setSelectedGem(null)}
            aria-label="बंद करें"
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-2xl lg:max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-[#D4AF37]/50 bg-[#FFFDF8] p-5 sm:p-7 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedGem(null)}
              className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF3E3] text-[#5A2C18] hover:bg-[#5A2C18] hover:text-[#FFF9EE] transition-colors duration-200 cursor-pointer shadow-xs"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Body: 2-Column Responsive Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 items-center">
              {/* Left Column: Image, Badge, Heading */}
              <div className="md:col-span-5 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#EBDCC5] pb-4 md:pb-0 md:pr-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/60 bg-[#FAF3E3] px-3 py-1 text-[11px] font-bold text-[#8C5824] mb-3">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#8C5824]" />
                  <span>100% लैब प्रमाणित रत्न</span>
                </span>

                <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-3">
                  <Image
                    src={selectedGem.image}
                    alt={selectedGem.nameHi}
                    width={176}
                    height={176}
                    className="object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
                  />
                </div>

                <h3
                  id="gem-modal-title"
                  className="font-serif text-2xl font-bold text-[#3B1E08]"
                >
                  {selectedGem.nameHi} ({selectedGem.nameEn})
                </h3>
                <p className="text-sm font-bold text-[#8C5824] mt-0.5">
                  स्वामी ग्रह: {selectedGem.planetHi} ({selectedGem.planetEn})
                </p>
              </div>

              {/* Right Column: Attributes, Benefits, Actions */}
              <div className="md:col-span-7 flex flex-col">
                {/* 4 Attributes Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-4 text-xs">
                  <div className="rounded-xl border border-[#EBDCC5] bg-[#FAF6EE] p-2.5">
                    <span className="block text-[11px] font-bold text-[#8C5824]">अनुकूल राशि:</span>
                    <span className="font-semibold text-[#3B1E08]">{selectedGem.rashi}</span>
                  </div>
                  <div className="rounded-xl border border-[#EBDCC5] bg-[#FAF6EE] p-2.5">
                    <span className="block text-[11px] font-bold text-[#8C5824]">धारण धातु:</span>
                    <span className="font-semibold text-[#3B1E08]">{selectedGem.metal}</span>
                  </div>
                  <div className="rounded-xl border border-[#EBDCC5] bg-[#FAF6EE] p-2.5">
                    <span className="block text-[11px] font-bold text-[#8C5824]">धारण अंगुली:</span>
                    <span className="font-semibold text-[#3B1E08]">{selectedGem.finger}</span>
                  </div>
                  <div className="rounded-xl border border-[#EBDCC5] bg-[#FAF6EE] p-2.5">
                    <span className="block text-[11px] font-bold text-[#8C5824]">शुभ दिन:</span>
                    <span className="font-semibold text-[#3B1E08]">{selectedGem.day}</span>
                  </div>
                </div>

                {/* Vedic Mantra */}
                <div className="rounded-xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#FAF3E3] to-[#FFFDF8] p-3 mb-4">
                  <p className="text-[11px] font-bold text-[#8C5824] uppercase tracking-wide">
                    वैदिक बीज मंत्र
                  </p>
                  <p className="font-serif text-sm font-bold text-[#5A2C18] mt-0.5">
                    {selectedGem.mantra}
                  </p>
                </div>

                {/* Astrological Benefits */}
                <div className="mb-5">
                  <p className="text-xs font-bold text-[#3B1E08] mb-1.5">
                    प्रमुख लाभ एवं प्रभाव:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#554035]">
                    {selectedGem.benefits.map((b) => (
                      <li key={`${selectedGem.id}-${b.slice(0, 10)}`} className="flex items-start gap-1.5">
                        <span className="text-[#8C5824] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultation Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2 border-t border-[#EBDCC5]">
                  <a
                    href={getWhatsappUrl(selectedGem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#155E38] hover:bg-[#114E2E] px-4 py-2.5 text-xs font-bold text-[#FFF9EE] transition-colors duration-200 shadow-sm"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-white" />
                    <span>WhatsApp पर परामर्श लें</span>
                  </a>

                  <a
                    href={`tel:+91${PHONE}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#5A2C18] bg-[#FAF3E3] hover:bg-[#F3E7CE] px-4 py-2.5 text-xs font-bold text-[#5A2C18] transition-colors duration-200 shadow-2xs"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-[#5A2C18]" />
                    <span>कॉल करें</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
