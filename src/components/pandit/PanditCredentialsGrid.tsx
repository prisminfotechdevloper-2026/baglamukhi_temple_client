"use client";

import {
  GraduationCap,
  Award,
  Flame,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PanditCredentialsGrid() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: GraduationCap,
      badge: { hi: "वैदिक शिक्षा", en: "Vedic Education" },
      title: { hi: "महामृत्युंजय वेद विद्यालय, उज्जैन", en: "Mahamrityunjay Veda Vidyalaya, Ujjain" },
      subtitle: { hi: "कर्मकाण्ड एवं संस्कृत शास्त्रीय दीक्षा", en: "Karmakand & Sanskrit Classical Initiation" },
      description: {
        hi: "धर्मनगरी उज्जैन स्थित प्रतिष्ठित महामृत्युंजय वेद विद्यालय से विधिवत कर्मकाण्ड, षोडशोपचार पूजन, रुद्राष्टाध्यायी एवं वेद मंत्रों के शुद्ध सस्वर पाठ की शास्त्रीय दीक्षा प्राप्त की। 12वीं संस्कृत अध्ययन के साथ वैदिक परंपरा का संवाहक।",
        en: "Formally initiated in Karmakand, Shodashopachara Puja, Rudrashtadhyayi, and Vedic mantra recitation at the renowned Mahamrityunjay Veda Vidyalaya in holy city Ujjain.",
      },
      tags: [
        { hi: "शुद्ध वैदिक स्वर", en: "Pure Vedic Chanting" },
        { hi: "कर्मकाण्ड विशारद", en: "Karmakand Scholar" },
        { hi: "शास्त्रोक्त विधान", en: "Shastric Vidhan" },
      ],
    },
    {
      icon: Award,
      badge: { hi: "ज्योतिष संस्थान", en: "Jyotish Sansthan" },
      title: { hi: "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र", en: "Shri Vashishtha Jyotish Sansthan Kendra" },
      subtitle: { hi: "वरिष्ठ ज्योतिषाचार्य व कुंडली मर्मज्ञ", en: "Senior Jyotishacharya & Kundali Expert" },
      description: {
        hi: "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र से निरंतर संबद्ध होकर 5+ वर्षों से जन्मपत्रिका शोध, दशा-अन्तर्दशा फलकथन, कालसर्प दोष, मांगलिक विचार व पितृ दोष का शास्त्रोक्त वैदिक समाधान एवं शांति अनुष्ठान करा रहे हैं।",
        en: "Affiliated with Shri Vashishtha Jyotish Sansthan Kendra for 5+ years, providing accurate horoscope analysis, Dasha-Antardasha readings, and Vedic remedies for Kaalsarp, Manglik, and Pitra doshas.",
      },
      tags: [
        { hi: "पराशर ज्योतिष", en: "Parashar Jyotish" },
        { hi: "ग्रह शांति विधान", en: "Grah Shanti Vidhan" },
        { hi: "रत्न व रुद्राक्ष परामर्श", en: "Gemstone Guidance" },
      ],
    },
    {
      icon: Flame,
      badge: { hi: "सिद्धपीठ साधना", en: "Siddhapeeth Sadhana" },
      title: { hi: "माँ बगलामुखी सिद्धपीठ नलखेड़ा", en: "Maa Baglamukhi Siddhapeeth Nalkheda" },
      subtitle: { hi: "स्वयंभू त्रिमुखी पीठ पर 5+ वर्ष साधना", en: "5+ Yrs Sadhana at Swayambhu Peeth" },
      description: {
        hi: "महाभारत कालीन विश्वविख्यात सिद्धपीठ नलखेड़ा (लखुंदर नदी तट) में माँ पीताम्बरा की छत्रछाया में 2100+ से अधिक महाहवन, शत्रु बाधा निवारण, न्यायालय विजय अनुष्ठान एवं अखंड सवा लाख महामंत्र जाप संपन्न करा चुके हैं।",
        en: "Conducted 2100+ sacred Mahahawans, Shatru Badha Nivaran, Court Case Vijay anushthans, and Akhand Sawa Lakh Mahamantra Jaap under the divine grace of Maa Peetambara at Nalkheda.",
      },
      tags: [
        { hi: "पीताम्बरा तंत्रोक्त हवन", en: "Peetambara Tantric Hawan" },
        { hi: "शत्रु स्तम्भन", en: "Shatru Stambhan" },
        { hi: "2100+ संपन्न यज्ञ", en: "2100+ Completed Yagyas" },
      ],
    },
    {
      icon: Globe2,
      badge: { hi: "वैश्विक सेवा", en: "Global Service" },
      title: { hi: "पारदर्शी ई-संकल्प व डाक प्रेषण", en: "Transparent E-Sankalp & Postal Service" },
      subtitle: { hi: "देश-विदेश के भक्तों हेतु लाइव दर्शन", en: "Live Darshan for Devotees Worldwide" },
      description: {
        hi: "दूर-दराज अथवा विदेश में रहने वाले भक्तों के लिए लाइव वीडियो कॉल पर प्रत्यक्ष नाम-गोत्र संकल्प, साक्षात अग्नि के दर्शन एवं अनुष्ठान उपरांत सिद्ध पीताम्बरा रक्षा सूत्र, अभिमंत्रित भस्म व प्रसाद स्पीड पोस्ट द्वारा प्रेषित किया जाता है।",
        en: "Offering live video call personal Sankalp with direct sacred fire darshan for devotees across India and abroad, with energized Peetambara Raksha Sutra, Bhasma, and Prasad dispatched via Speed Post.",
      },
      tags: [
        { hi: "लाइव वीडियो संकल्प", en: "Live Video Sankalp" },
        { hi: "स्पीड पोस्ट ट्रैकिंग", en: "Speed Post Tracking" },
        { hi: "100% गोपनीयता", en: "100% Confidentiality" },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left Aligned */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              {t({
                hi: "प्रामाणिक योग्यता एवं पृष्ठभूमि • पंडित दीपक शर्मा",
                en: "Authentic Credentials & Background • Pandit Deepak Sharma",
              })}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            {t({
              hi: "चार वैदिक स्तंभ: अनुभव, दीक्षा एवं शास्त्रीय प्रामाणिकता",
              en: "Four Vedic Pillars: Experience, Diksha & Shastric Authenticity",
            })}
          </h2>
          <p className="font-serif text-xs sm:text-sm text-stone-600 mt-2">
            {t({
              hi: "नलखेड़ा सिद्धपीठ में किसी भी अनुष्ठान की सफलता पुरोहित की साधना, शुद्ध उच्चारण एवं सात्विक संकल्प पर निर्भर करती है।",
              en: "The success of any anushthan at Nalkheda Siddhapeeth depends on the purohit's tapasya, pure Sanskrit pronunciation, and Sattvic sankalp.",
            })}
          </p>
        </div>

        {/* 4 Cards Grid (2x2 on md/lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-300/80 text-[#AF0807] shadow-xs">
                      <Icon className="h-6 w-6 text-[#AF0807]" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-900 bg-amber-100/70 border border-amber-300/60 rounded-full px-3 py-1">
                      {t(item.badge)}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3E0B02] mb-1">
                    {t(item.title)}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#AF0807] mb-3">
                    {t(item.subtitle)}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                    {t(item.description)}
                  </p>
                </div>

                {/* Tags / Highlights */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-700 bg-stone-50 border border-stone-200/80 rounded-lg px-2.5 py-1"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#AF0807]" />
                      <span>{t(tag)}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
