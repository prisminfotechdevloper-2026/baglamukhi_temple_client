"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  TrendingUp,
  HeartHandshake,
  SunMedium,
  CheckCircle2,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { usePujaBooking } from "@/context/PujaBookingContext";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function HawanBenefitsSection() {
  const { t } = useLanguage();
  const { openBookingModal } = usePujaBooking();
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories = [
    {
      id: "shatru-vijay",
      title: {
        hi: "शत्रु व न्यायालयीन विजय",
        en: "Victory & Protection",
      },
      tagline: {
        hi: "शत्रु बाधा, कोर्ट-केस, तंत्र दोष व सुरक्षा",
        en: "Enemies, Court Cases, Tantra & Shield",
      },
      icon: ShieldAlert,
      benefits: [
        {
          num: "01",
          name: { hi: "शत्रुओं पर विजय", en: "Victory Over Enemies" },
          desc: {
            hi: "विरोधियों के षड्यंत्रों, ईर्ष्या व अकारण शत्रुता का शमन। शत्रुओं की वाणी व बुद्धि का स्तम्भन।",
            en: "Subdues hostile adversaries, jealousy, and malicious conspiracies through divine Stambhan.",
          },
        },
        {
          num: "02",
          name: { hi: "मुकदमों व कोर्ट-केस में सफलता", en: "Court Case & Legal Victory" },
          desc: {
            hi: "अदालती मामलों, झूठे मुकदमों, संपत्ति विवाद व कानूनी अड़चनों में सत्य व न्याय की विजय।",
            en: "Favorable resolutions in legal disputes, false litigations, and administrative delays.",
          },
        },
        {
          num: "03",
          name: { hi: "तंत्र-मंत्र व नजर दोष से मुक्ति", en: "Relief from Tantric Afflictions" },
          desc: {
            hi: "जादू-टोना, मारण-मोहन-उच्चाटन दोष, बुरी नजर एवं प्रेत बाधा का समूल निवारण।",
            en: "Total eradication of black magic, evil eye, and unseen psychic afflictions.",
          },
        },
        {
          num: "04",
          name: { hi: "अभेद्य सुरक्षा चक्र", en: "Impenetrable Divine Shield" },
          desc: {
            hi: "नकारात्मक ऊर्जा, आकस्मिक संकट व गुप्त शत्रुओं से यजमान व पूरे परिवार की 24/7 रक्षा।",
            en: "A continuous protective Vedic armor safeguarding your entire family from negativities.",
          },
        },
        {
          num: "05",
          name: { hi: "वाक्-स्तम्भन व सम्मोहन", en: "Speech Stambhan & Aura" },
          desc: {
            hi: "विरोधी पक्ष के झूठे तर्कों का स्तम्भन, प्रभावशीलता में वृद्धि व जन-सम्मोहन।",
            en: "Immobilizes misleading arguments of adversaries and enhances magnetic influence.",
          },
        },
      ],
    },
    {
      id: "dhan-vyapar",
      title: {
        hi: "धन, व्यापार व राजनीति",
        en: "Wealth, Business & Power",
      },
      tagline: {
        hi: "व्यापार वृद्धि, लक्ष्मी प्राप्ति व चुनाव विजय",
        en: "Business Growth, Prosperity & Politics",
      },
      icon: TrendingUp,
      benefits: [
        {
          num: "06",
          name: { hi: "व्यापार में अभूतपूर्व वृद्धि", en: "Business Growth & Revival" },
          desc: {
            hi: "व्यवसाय में निरंतर रुकावट, मंदी दूर कर नई उन्नति, ग्राहक वृद्धि व लाभ के नए द्वार खोलना।",
            en: "Revives stalled businesses, clears obstacles in commerce, and draws steady patronage.",
          },
        },
        {
          num: "07",
          name: { hi: "धन-समृद्धि व कर्ज मुक्ति", en: "Wealth & Debt Relief" },
          desc: {
            hi: "रुका हुआ धन वापस मिलना, स्थिर लक्ष्मी का वास और भारी ऋण/कर्ज के बोझ से मुक्ति।",
            en: "Facilitates recovery of blocked funds, blesses with financial stability and debt relief.",
          },
        },
        {
          num: "08",
          name: { hi: "राजनीतिक विजय व चुनाव सफलता", en: "Political Eminence & Victory" },
          desc: {
            hi: "राजनीतिक क्षेत्र में सफलता, चुनाव में प्रचंड जीत, संगठन में उच्च पद व प्रतिष्ठा प्राप्ति।",
            en: "Assists political aspirants, ensures election success, and establishes respected leadership.",
          },
        },
        {
          num: "09",
          name: { hi: "नौकरी व पदोन्नति में सहायता", en: "Career & Promotion Boost" },
          desc: {
            hi: "कार्यस्थल पर गुप्त विरोधियों की शांति, उच्च अधिकारियों की कृपा व मनचाही पदोन्नति।",
            en: "Neutralizes workplace politics, earns support of superiors, and hastens deserving promotions.",
          },
        },
      ],
    },
    {
      id: "swasthya-parivar",
      title: {
        hi: "आरोग्य, संतान व वैवाहिक सुख",
        en: "Health, Progeny & Harmony",
      },
      tagline: {
        hi: "रोग मुक्ति, विवाह बाधा व पारिवारिक शांति",
        en: "Relief from Illness, Marriage & Home",
      },
      icon: HeartHandshake,
      benefits: [
        {
          num: "10",
          name: { hi: "रोगों व असाध्य कष्टों से मुक्ति", en: "Freedom from Ailments" },
          desc: {
            hi: "दीर्घकालिक बीमारियों, अकारण शारीरिक पीड़ा एवं मृत्यु भय से मुक्ति व स्वास्थ्य लाभ।",
            en: "Alleviates chronic illnesses, inexplicable physical sufferings, and grants longevity.",
          },
        },
        {
          num: "11",
          name: { hi: "विवाह बाधा व मांगलिक शांति", en: "Removal of Marriage Delays" },
          desc: {
            hi: "विवाह में बार-बार आने वाली अड़चनें, मंगली दोष व संबंध टूटने की समस्या का स्थायी निवारण।",
            en: "Dissolves planetary delays in marriage and eliminates Manglik discord.",
          },
        },
        {
          num: "12",
          name: { hi: "संतान प्राप्ति व वंश वृद्धि", en: "Progeny Blessings & Well-being" },
          desc: {
            hi: "संतान सुख में आने वाली बाधाओं की शांति तथा संतान के स्वास्थ्य व उज्ज्वल भविष्य का आशीष।",
            en: "Blesses aspiring couples with virtuous progeny and protects children's well-being.",
          },
        },
        {
          num: "13",
          name: { hi: "गृह-क्लेश व मानसिक शांति", en: "Domestic Harmony & Peace" },
          desc: {
            hi: "पारिवारिक कलह की समाप्ति, पति-पत्नी में मधुर संबंध तथा घर में सुख-शांति का वातावरण।",
            en: "Resolves household tensions, fosters conjugal warmth, and brings profound serenity.",
          },
        },
      ],
    },
    {
      id: "atmabal-siddhi",
      title: {
        hi: "आत्मबल, सिद्धि व मनोकामना",
        en: "Inner Strength & Wishes",
      },
      tagline: {
        hi: "सर्व मनोकामना पूर्ति व आध्यात्मिक उत्थान",
        en: "Wish Fulfillment & Spiritual Awakening",
      },
      icon: SunMedium,
      benefits: [
        {
          num: "14",
          name: { hi: "सर्व मनोकामना सिद्धि", en: "All Wishes Fulfillment" },
          desc: {
            hi: "जीवन के किसी भी असंभव कार्य को सिद्ध करने एवं मनोवांछित फल की प्राप्ति हेतु अमोघ।",
            en: "Empowers the devotee to overcome impossible bottlenecks and fulfill cherished desires.",
          },
        },
        {
          num: "15",
          name: { hi: "आत्मविश्वास व तेज में वृद्धि", en: "Confidence & Radiance" },
          desc: {
            hi: "भय, हिचकिचाहट व अवसाद का नाश, ओजस्वी व्यक्तित्व एवं निर्णय क्षमता में भारी वृद्धि।",
            en: "Dispels fear, hesitation, and self-doubt, instilling immense courage and clarity of mind.",
          },
        },
        {
          num: "16",
          name: { hi: "आध्यात्मिक विकास व आत्म-साक्षात्कार", en: "Spiritual Awakening" },
          desc: {
            hi: "माँ पीताम्बरा की प्रत्यक्ष अनुकंपा, मंत्र चैतन्य, कुंडलिनी जागरण एवं आत्मिक शुद्धि।",
            en: "Deepens meditation, activates sacred mantras, and elevates the soul toward divine truth.",
          },
        },
      ],
    },
  ];

  const whatsappMessage =
    "जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी हवन के लाभ एवं अपनी समस्या के निवारण हेतु सही अनुष्ठान के संदर्भ में परामर्श चाहिए।";

  return (
    <section className="relative w-full py-10 sm:py-14 bg-[#FFF8E7] overflow-hidden border-b border-[#EBD8B4]">
      {/* Background Sacred Yantra Watermark Accent */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-[#D89B18]/10 via-[#8B0000]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER: Editorial Left-Aligned ================= */}
        <div className="flex flex-col items-start text-left mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[3px] w-8 bg-[#D89B18] rounded-full shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B45309] font-serif">
              {t({
                hi: "शास्त्रोक्त मान्यता एवं अनुभव • 15 पावन लाभ",
                en: "Scriptural Benefits & Experiences • 15 Blessings",
              })}
            </span>
          </div>
          
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-black text-[#4A0C16] tracking-tight leading-tight">
            {t({
              hi: "माँ बगलामुखी हवन के पावन लाभ",
              en: "Sacred Benefits of Maa Baglamukhi Hawan",
            })}
          </h2>

          <p className="mt-2 text-stone-700 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
            {t({
              hi: "नलखेड़ा सिद्धपीठ की पावन यज्ञशाला में संपन्न होने वाला पीताम्बरा महाहवन शत्रुओं के स्तम्भन, संकट निवारण एवं अभीष्ट कार्य सिद्धि के लिए जगत्-प्रसिद्ध है। जानिए यह हवन किन 15 प्रमुख कष्टों में अचूक फलदायी है:",
              en: "Performed in the sacred yagyashala of Nalkheda Siddhapeeth, Maa Pitambara Hawan is renowned worldwide for paralyzing adversities and bestowing miraculous success in 15 key areas of life:",
            })}
          </p>
        </div>

        {/* ================= CATEGORY SELECTOR TABS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#8B0000] text-white border-[#D89B18] shadow-md shadow-red-950/20 translate-y-[-1px]"
                    : "bg-[#FFFDF8] text-stone-800 border-[#EBD8B4] hover:border-[#D89B18] hover:bg-white"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? "bg-white/20 text-[#F5C26B]" : "bg-amber-100 text-[#8B0000]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold truncate">
                    {t(cat.title)}
                  </p>
                  <p
                    className={`text-[10px] sm:text-[11px] truncate ${
                      isActive ? "text-amber-200" : "text-stone-500"
                    }`}
                  >
                    {t(cat.tagline)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ================= ACTIVE CATEGORY BENEFIT CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {categories[activeCategory].benefits.map((benefit, i) => (
            <div
              key={i}
              className="group relative bg-[#FFFDF8] rounded-xl p-4 sm:p-5 border border-[#EBD8B4] border-l-[5px] border-l-[#D89B18] hover:border-l-[#8B0000] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-xs font-black text-[#D89B18] group-hover:text-[#8B0000] transition-colors">
                    लाभ #{benefit.num}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-[#D89B18] group-hover:text-[#8B0000] transition-colors" />
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A0C16] mb-1.5 leading-snug">
                  {t(benefit.name)}
                </h3>

                <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">
                  {t(benefit.desc)}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-amber-200/40 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#8B0000]">
                  {t({ hi: "शास्त्रोक्त फलदायी", en: "Vedic Proven" })}
                </span>
                <button
                  type="button"
                  onClick={() => openBookingModal(`हवन हेतु परामर्श: ${t(benefit.name)}`)}
                  className="text-xs font-bold text-[#D89B18] hover:text-[#8B0000] underline underline-offset-2 cursor-pointer"
                >
                  {t({ hi: "हवन अनुष्ठान कराएं →", en: "Book Ritual →" })}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= QUICK CONSULTATION STRIP ================= */}
        <div className="w-full rounded-2xl bg-gradient-to-r from-[#2B0609] via-[#4A0C16] to-[#2B0609] p-4 sm:p-6 border border-[#D89B18]/60 shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#8B0000] border border-[#D89B18] flex items-center justify-center shrink-0">
              <span className="font-serif font-black text-amber-300 text-lg">ॐ</span>
            </div>
            <div>
              <p className="font-serif text-sm sm:text-base font-bold text-amber-200">
                {t({
                  hi: "क्या आप भी किसी विशिष्ट संकट अथवा मनोकामना से जूझ रहे हैं?",
                  en: "Facing a specific crisis or personal aspiration?",
                })}
              </p>
              <p className="text-stone-300 text-xs sm:text-sm mt-0.5">
                {t({
                  hi: "अपनी कुंडली एवं समस्या के अनुसार सही हवन श्रेणी जानने हेतु सीधे यज्ञाचार्य से बात करें।",
                  en: "Speak directly with Pt. Deepak Sharma (+91 72240 83313) to select the ideal Hawan vidhi.",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-[#D89B18] hover:bg-[#C08512] text-stone-900 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <CalendarCheck className="h-4 w-4" />
              <span>{t({ hi: "हवन बुक करें", en: "Book Hawan" })}</span>
            </button>

            <a
              href={getWhatsAppUrl(whatsappMessage, "primary")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t({ hi: "WhatsApp मार्गदर्शन", en: "WhatsApp Advice" })}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
