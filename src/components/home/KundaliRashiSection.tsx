"use client";

import { useState } from "react";
import {
  Compass,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sun,
  ShieldAlert,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

interface RashiItem {
  id: string;
  nameHi: string;
  nameEn: string;
  symbol: string;
  lord: string;
  element: string;
  gem: string;
}

const rashis: RashiItem[] = [
  { id: "aries", nameHi: "मेष", nameEn: "Aries", symbol: "♈", lord: "मंगल", element: "अग्नि", gem: "मूंगा (रक्तमणि)" },
  { id: "taurus", nameHi: "वृषभ", nameEn: "Taurus", symbol: "♉", lord: "शुक्र", element: "पृथ्वी", gem: "ओपल / हीरा" },
  { id: "gemini", nameHi: "मिथुन", nameEn: "Gemini", symbol: "♊", lord: "बुध", element: "वायु", gem: "पन्ना" },
  { id: "cancer", nameHi: "कर्क", nameEn: "Cancer", symbol: "♋", lord: "चंद्रमा", element: "जल", gem: "सच्चा मोती" },
  { id: "leo", nameHi: "सिंह", nameEn: "Leo", symbol: "♌", lord: "सूर्य", element: "अग्नि", gem: "माणिक्य" },
  { id: "virgo", nameHi: "कन्या", nameEn: "Virgo", symbol: "♍", lord: "बुध", element: "पृथ्वी", gem: "पन्ना" },
  { id: "libra", nameHi: "तुला", nameEn: "Libra", symbol: "♎", lord: "शुक्र", element: "वायु", gem: "हीरा / जरकन" },
  { id: "scorpio", nameHi: "वृश्चिक", nameEn: "Scorpio", symbol: "♏", lord: "मंगल", element: "जल", gem: "मूंगा" },
  { id: "sagittarius", nameHi: "धनु", nameEn: "Sagittarius", symbol: "♐", lord: "गुरु", element: "अग्नि", gem: "पुखराज" },
  { id: "capricorn", nameHi: "मकर", nameEn: "Capricorn", symbol: "♑", lord: "शनि", element: "पृथ्वी", gem: "नीलम" },
  { id: "aquarius", nameHi: "कुम्भ", nameEn: "Aquarius", symbol: "♒", lord: "शनि", element: "वायु", gem: "नीलम / जामुनिया" },
  { id: "pisces", nameHi: "मीन", nameEn: "Pisces", symbol: "♓", lord: "गुरु", element: "जल", gem: "पुखराज" },
];

interface KundaliDoshItem {
  id: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  symptoms: string[];
}

const kundaliDoshas: KundaliDoshItem[] = [
  {
    id: "kaal-sarp",
    titleHi: "कालसर्प दोष निवारण",
    titleEn: "Kaal Sarp Dosh Nivaran",
    descHi: "राहु और केतु के मध्य सभी ग्रहों के आ जाने से जीवन में अचानक रुकावटें, मानसिक तनाव व आर्थिक संकट उत्पन्न होता है। 12 प्रकार के कालसर्प योगों का शास्त्रोक्त समाधान।",
    descEn: "When all planets sit between Rahu and Ketu, causing sudden career halts and mental distress. Consecrated Shastric remedies for all 12 Kaal Sarp types.",
    symptoms: ["कार्य में अकारण रुकावट", "डरावने स्वप्न व अशांति", "धन संचय में विफलता"],
  },
  {
    id: "manglik-dosh",
    titleHi: "मांगलिक दोष एवं विवाह बाधा",
    titleEn: "Manglik Dosh & Marriage Delay",
    descHi: "जन्म पत्रिका में मंगल के लग्न, चतुर्थ, सप्तम, अष्टम या द्वादश भाव में स्थित होने पर विवाह में विलंब अथवा वैवाहिक कलह की स्थिति बनती है।",
    descEn: "Affliction of Mars leading to marriage delays, relationship disharmony, and marital strife. Effective Vedic Shanti.",
    symptoms: ["विवाह रिश्ते तय होकर टूटना", "दांपत्य जीवन में कलह", "क्रोध व आवेश की अधिकता"],
  },
  {
    id: "shani-sade-sati",
    titleHi: "शनि साढ़े साती एवं ढैय्या",
    titleEn: "Shani Sade Sati & Dhaiya",
    descHi: "शनिदेव की साढ़े सात वर्ष की महादशा में स्वास्थ्य, व्यापार एवं मानसिक कष्टों से सुरक्षा हेतु माँ बगलामुखी एवं शनि शांति महाहवन।",
    descEn: "Pacification of Saturn's 7.5 year transit to protect health, reputation, business vitality and overcome severe obstacles.",
    symptoms: ["अचानक भारी धन हानि", "शारीरिक कष्ट व रोग", "मानहानि व झूठे आरोप"],
  },
  {
    id: "pitra-dosh",
    titleHi: "पितृ दोष एवं चांडाल योग",
    titleEn: "Pitra Dosh & Guru Chandal Dosh",
    descHi: "पितरों की अतृप्ति अथवा गुरु-राहु की युति से वंश वृद्धि में रुकावट, संतान कष्ट एवं परिवार में निरंतर अशांति का स्थायी निवारण।",
    descEn: "Ancestral unrest or Jupiter-Rahu conjunction causing lineage delays, child-related challenges and domestic discord.",
    symptoms: ["संतान प्राप्ति में विलंब", "घर में बार-बार बीमारी", "उन्नति में अदृश्य रुकावट"],
  },
  {
    id: "navgraha-shanti",
    titleHi: "नवग्रह शांति एवं ग्रह महादशा",
    titleEn: "Navgraha Shanti & Mahadasha",
    descHi: "सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु व केतु के अशुभ प्रभाव को शांत कर जीवन में सुख, शांति, समृद्धि व सौभाग्य की प्राप्ति।",
    descEn: "Neutralizing malefic planetary influences of all nine cosmic grahas to usher peace, prosperity, and auspicious fortune.",
    symptoms: ["ग्रहों की विपरीत महादशा", "भाग्य का साथ न मिलना", "मानसिक अस्थिरता व तनाव"],
  },
  {
    id: "career-business-kundali",
    titleHi: "आजीविका, नौकरी व व्यापार कुंडली",
    titleEn: "Career, Job & Business Horoscope",
    descHi: "दशम भाव, भाग्य भाव एवं धनेश का सूक्ष्म परीक्षण कर सरकारी नौकरी, पदोन्नति, विदेश गमन एवं व्यापारिक लाभ के शास्त्रोक्त वैदिक उपाय।",
    descEn: "In-depth analysis of 10th and 9th houses for government job success, career promotions, and business profitability.",
    symptoms: ["नौकरी में प्रमोशन में रुकावट", "व्यापार में लगातार मंदी", "इंटरव्यू में बार-बार असफलता"],
  },
];

export default function KundaliRashiSection() {
  const { t } = useLanguage();
  const [selectedRashi, setSelectedRashi] = useState<RashiItem>(rashis[0]);

  // Number 2 (+91 95756 64204) -> Dedicated WhatsApp routing for Kundali / Jyotish inquiries
  const targetPhone = "919575664204";

  const handleRashiWhatsApp = (rashi: RashiItem) => {
    const text = encodeURIComponent(
      `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मेरी राशि "${rashi.nameHi} (${rashi.nameEn})" है। मुझे अपनी जन्म कुंडली, राशि फलादेश एवं शुभ रत्न/उपाय के संबंध में मार्गदर्शन प्राप्त करना है।`
    );
    window.open(`https://wa.me/${targetPhone}?text=${text}`, "_blank");
  };

  const handleDoshWhatsApp = (doshTitle: string) => {
    const text = encodeURIComponent(
      `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे अपनी जन्म पत्रिका में "${doshTitle}" के प्रभाव व शास्त्रोक्त निवारण अनुष्ठान के संबंध में परामर्श चाहिए।`
    );
    window.open(`https://wa.me/${targetPhone}?text=${text}`, "_blank");
  };

  return (
    <section
      id="kundali-rashi"
      className="w-full bg-gradient-to-b from-[#FFF9ED] via-[#FFFDF8] to-[#FFF6E3] py-12 sm:py-16 md:py-20 border-b border-[#EBDCB9]/80 relative overflow-hidden"
    >
      {/* Decorative Golden Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#D89B18]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-[#8B0000]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-left max-w-3xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
              {t({
                hi: "वैदिक ज्योतिष एवं संपूर्ण जन्म पत्रिका विश्लेषण",
                en: "Vedic Astrology & Comprehensive Horoscope Analysis",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4A0C16] tracking-tight leading-tight mb-2.5">
            {t({
              hi: "12 राशियां, जन्म कुंडली फलादेश एवं ग्रह दोष शांति",
              en: "12 Rashis, Janam Kundali Analysis & Planetary Shanti",
            })}
          </h2>

          <p className="text-[#5C3A21] text-xs sm:text-sm md:text-base leading-relaxed">
            {t({
              hi: "माँ बगलामुखी सिद्धपीठ नलखेड़ा में मुख्य यज्ञाचार्य पंडित दीपक शर्मा जी द्वारा आपकी जन्म पत्रिका, ग्रह दशा एवं गोचर का सूक्ष्म परीक्षण कर शास्त्रोक्त समाधान प्रदान किया जाता है।",
              en: "Precise astrological analysis of your birth chart, planetary transits, and mahadasha by Chief Purohit Pandit Deepak Sharma Ji at Nalkheda Siddhapeeth.",
            })}
          </p>
        </div>

        {/* ================= 1. INTERACTIVE 12 RASHIS WHEEL / GRID ================= */}
        <div className="mb-14 sm:mb-16 rounded-3xl bg-white border border-[#EBD9B8] border-l-[6px] border-l-[#D89B18] p-5 sm:p-8 shadow-[0_10px_32px_rgba(74,38,24,0.06)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#EBD9B8]/70">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807] block mb-1">
                {t({ hi: "अपनी राशि चुनें", en: "Select Your Rashi" })}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3E0B02]">
                {t({
                  hi: "द्वादश राशि चक्र • स्वामी ग्रह, तत्व व अनुकूल रत्न",
                  en: "12 Zodiac Signs • Ruling Planet, Element & Gemstone",
                })}
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAEDD2] border border-[#D89B18]/50 text-xs font-semibold text-[#78350F]">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>{t({ hi: "प्रत्यक्ष परामर्श उपलब्ध", en: "Direct Consultation Available" })}</span>
            </div>
          </div>

          {/* 12 Rashi Buttons Grid */}
          <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-2.5 mb-6">
            {rashis.map((rashi) => {
              const isSelected = selectedRashi.id === rashi.id;
              return (
                <button
                  key={rashi.id}
                  type="button"
                  onClick={() => setSelectedRashi(rashi)}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border transition-all duration-200 cursor-pointer text-center ${isSelected
                      ? "bg-gradient-to-b from-[#8B0000] to-[#5C0D15] text-white border-[#D89B18] shadow-md scale-105"
                      : "bg-[#FFFDF9] hover:bg-[#FAEDD2]/50 text-[#3E0B02] border-[#EBD9B8]/90 hover:border-[#D89B18]"
                    }`}
                >
                  <span className="text-xl sm:text-2xl leading-none mb-1 select-none">
                    {rashi.symbol}
                  </span>
                  <span className="font-serif font-bold text-xs sm:text-[13px] leading-tight">
                    {rashi.nameHi}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Rashi Highlight Detail Box */}
          <div className="rounded-2xl bg-gradient-to-r from-[#FFF9ED] via-[#FFFDF8] to-[#FFF9ED] border border-[#EBD9B8] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 text-left w-full md:w-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#8B0000] to-[#4E0204] text-amber-200 border-2 border-[#D89B18] flex items-center justify-center text-3xl font-serif shadow-md shrink-0">
                {selectedRashi.symbol}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-xl sm:text-2xl font-black text-[#4A0C16]">
                    {selectedRashi.nameHi} राशि
                  </h4>
                  <span className="px-2 py-0.5 rounded-full bg-[#FAEDD2] border border-[#D89B18]/50 text-[11px] font-bold text-[#8B0000]">
                    सक्रिय
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-700 mt-1">
                  <span>
                    <strong>स्वामी ग्रह:</strong> {selectedRashi.lord}
                  </span>
                  <span>•</span>
                  <span>
                    <strong>तत्व:</strong> {selectedRashi.element}
                  </span>
                  <span>•</span>
                  <span>
                    <strong>शुभ रत्न:</strong> {selectedRashi.gem}
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA for Selected Rashi */}
            <button
              type="button"
              onClick={() => handleRashiWhatsApp(selectedRashi)}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#159E4A] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shrink-0"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>
                {t({
                  hi: `${selectedRashi.nameHi} राशि का फलादेश व उपाय व्हाट्सएप पर पूछें`,
                  en: `Consult ${selectedRashi.nameEn} Remedies on WhatsApp`,
                })}
              </span>
            </button>
          </div>
        </div>

        {/* ================= 2. 6 KUNDALI DOSH CARDS ================= */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807] block mb-1">
                {t({ hi: "प्रमुख ग्रह दोष निवारण", en: "Key Astrological Dosha Remedies" })}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3E0B02]">
                {t({
                  hi: "जीवन के अवरोधों का शास्त्रोक्त कुंडली समाधान",
                  en: "Scriptural Horoscope Remedies for Life Obstacles",
                })}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {kundaliDoshas.map((dosh) => (
              <div
                key={dosh.id}
                className="group relative rounded-2xl sm:rounded-3xl bg-white border border-[#EBD9B8] border-l-[5px] border-l-[#C2841F] hover:border-l-[#8B0000] p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAEDD2] border border-[#D89B18]/60 flex items-center justify-center text-[#8B0000] shrink-0">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-bold text-[#8B0000]">
                      शास्त्रोक्त विधान
                    </span>
                  </div>

                  <h4 className="font-serif font-extrabold text-[#4A0C16] group-hover:text-[#8B0000] text-base sm:text-lg leading-snug transition-colors mb-2">
                    {t({ hi: dosh.titleHi, en: dosh.titleEn })}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {t({ hi: dosh.descHi, en: dosh.descEn })}
                  </p>

                  {/* Symptoms Checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-stone-100 mb-4">
                    <span className="text-[11px] font-bold text-[#78350F] block">
                      {t({ hi: "प्रमुख लक्षण व संकेत:", en: "Key Signs & Symptoms:" })}
                    </span>
                    {dosh.symptoms.map((symp, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-stone-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000] shrink-0" />
                        <span>{symp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <button
                  type="button"
                  onClick={() => handleDoshWhatsApp(dosh.titleHi)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FFF8E7] hover:bg-[#8B0000] text-[#78350F] hover:text-white font-serif font-bold text-xs border border-[#D89B18]/60 hover:border-transparent transition-all duration-200 cursor-pointer shadow-xs"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366] group-hover:text-amber-200" />
                  <span>
                    {t({
                      hi: "इस दोष के निवारण हेतु बात करें",
                      en: "Consult on WhatsApp",
                    })}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 3. ASTROLOGY DEDICATED HELPLINE BANNER ================= */}
        <div className="rounded-3xl bg-gradient-to-r from-[#240307] via-[#38040B] to-[#1A0205] border-2 border-[#D89B18]/80 p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#FFD572] to-transparent opacity-90" />

          <div className="text-center md:text-left max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
              {t({
                hi: "सटीक जन्म कुंडली फलादेश • पं. दीपक शर्मा",
                en: "Accurate Janam Kundali Analysis • Pt. Deepak Sharma",
              })}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-200 leading-tight">
              {t({
                hi: "अपनी जन्मपत्रिका का संपूर्ण विश्लेषण एवं सटीक उपाय प्राप्त करें",
                en: "Receive In-Depth Birth Chart Analysis & Vedic Remedies",
              })}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
              {t({
                hi: "जन्म समय, जन्म तिथि एवं जन्म स्थान साझा करके अपनी कुंडली के राजयोग, ग्रह बाधा एवं आने वाले समय के शुभ-अशुभ प्रभावों की संपूर्ण जानकारी प्राप्त करें।",
                en: "Share birth date, time, and birthplace on WhatsApp to discover rajyogas, planetary afflictions, and auspicious muhurats.",
              })}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            {/* WhatsApp Booking (Routes to Number 2: 9575664204 for Kundali/Rashi) */}
            <a
              href={`https://wa.me/${targetPhone}?text=${encodeURIComponent(
                "जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे अपनी जन्म कुंडली एवं राशि का संपूर्ण विश्लेषण व मार्गदर्शन प्राप्त करना है। कृपया शुभ समय बताएं।"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#159E4A] hover:brightness-110 text-white text-xs sm:text-sm font-bold shadow-xl transition-all cursor-pointer"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>
                {t({
                  hi: "कुंडली व्हाट्सएप करें (+91 95756 64204)",
                  en: "Send Kundali on WhatsApp (+91 95756 64204)",
                })}
              </span>
            </a>

            {/* Direct Calling (Primary number: 72230 83313) */}
            <a
              href="tel:+917223083313"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-300/40 text-xs sm:text-sm font-bold backdrop-blur-md transition-all cursor-pointer"
            >
              <PhoneCall className="h-4 w-4 text-amber-300" />
              <span>
                {t({
                  hi: "कॉल करें: +91 72230 83313",
                  en: "Call Helpline: +91 72230 83313",
                })}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
