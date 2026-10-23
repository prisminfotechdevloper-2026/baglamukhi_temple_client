"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PanditHawanShowcase() {
  const { t } = useLanguage();

  const photos = [
    {
      src: "/images/hawan-anushthan-1.webp",
      title: {
        hi: "माँ बगलामुखी दिव्य महाहवन एवं अग्नि आहुति",
        en: "Maa Baglamukhi Divine Mahahawan & Sacred Ahutis",
      },
      badge: {
        hi: "प्रत्यक्ष महाहवन दर्शन",
        en: "Direct Mahahawan Darshan",
      },
      location: {
        hi: "माँ बगलामुखी मंदिर प्रांगण, नलखेड़ा",
        en: "Maa Baglamukhi Mandir Courtyard, Nalkheda",
      },
      desc: {
        hi: "लखुन्दर नदी तट स्थित सिद्धपीठ में पंडित दीपक शर्मा जी द्वारा संपन्न कराया जा रहा दिव्य बगलामुखी महाहवन। शुद्ध गो-घृत, पीली सरसों व विशेष वनौषधियों की निरंतर धारा से जाग्रत पावन यज्ञ अग्नि।",
        en: "Divine Baglamukhi Mahahawan conducted by Pandit Deepak Sharma Ji at the Lakhundar riverbank Siddhapeeth. Sacred flames energized with pure cow ghee, yellow mustard seeds, and sacred herbal samagri.",
      },
      highlight: {
        hi: "शत्रु बाधा निवारण व मनोकामना पूर्ति",
        en: "Shatru Badha Nivaran & Wish Fulfillment",
      },
      aspectRatio: "aspect-[4/5] sm:aspect-[4/5]",
      objectPosition: "object-[center_28%]",
    },
    {
      src: "/images/hawan-anushthan-2.webp",
      title: {
        hi: "शास्त्रोक्त वेदी निर्माण व समिधा अर्पण",
        en: "Shastric Vedi Construction & Sacred Samidha Offering",
      },
      badge: {
        hi: "वैदिक कुंड प्रज्वलन",
        en: "Vedic Kunda Ignition",
      },
      location: {
        hi: "यज्ञशाला, नलखेड़ा सिद्धपीठ",
        en: "Yagyashala, Nalkheda Siddhapeeth",
      },
      desc: {
        hi: "पंडित दीपक शर्मा जी द्वारा पूर्ण शास्त्रीय मर्यादा से हवन कुंड पूजन, पवित्र समिधा प्रतिष्ठा एवं मंत्रोच्चार पूर्वक अग्नि प्रज्वलन। प्रत्येक आहुति यजमान के नाम व गोत्र से विधिवत समर्पित की जाती है।",
        en: "Hawan Kunda consecration, sacred samidha placement, and mantra-chanted fire ignition by Pandit Deepak Sharma Ji. Every ahuti is dedicated in the Yajman's specific name and Gotra.",
      },
      highlight: {
        hi: "100% प्रामाणिक वैदिक पद्धति",
        en: "100% Authentic Vedic Tradition",
      },
      aspectRatio: "aspect-[16/10] sm:aspect-[16/10]",
      objectPosition: "object-top",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header: Left Aligned with Vedic Danda */}
        <div className="text-left max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              {t({
                hi: "प्रत्यक्ष यज्ञ दर्शन • नलखेड़ा सिद्धपीठ",
                en: "Direct Yagya Darshan • Nalkheda Siddhapeeth",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            {t({
              hi: "पंडित दीपक शर्मा जी द्वारा संपन्न पावन महाहवन",
              en: "Sacred Mahahawan Performed by Pandit Deepak Sharma Ji",
            })}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed">
            {t({
              hi: "माँ पीताम्बरा बगलामुखी जी के पावन धाम नलखेड़ा में शास्त्रोक्त तांत्रिक-वैदिक पद्धति से आयोजित विशिष्ट महाहवन एवं अग्नि अनुष्ठान की वास्तविक पावन झलकियां।",
              en: "Authentic glimpses of sacred Mahahawans and Vedic fire rituals performed strictly according to Shastric Vedic-Tantric traditions at Maa Baglamukhi Dham, Nalkheda.",
            })}
          </p>
        </div>

        {/* 2 Real Hawan Photos Grid with 100% Width Fit and ZERO Left-Right Extra Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {photos.map((item) => (
            <div
              key={item.src}
              className="group rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_8px_32px_-4px_rgba(217,119,6,0.14)] hover:shadow-[0_16px_40px_-4px_rgba(175,8,7,0.18)] p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1 transition-colors duration-300"
            >
              <div>
                {/* Photo Container: Width Fit 100% Edge-to-Edge with clean photo */}
                <div className={`relative w-full ${item.aspectRatio} rounded-2xl overflow-hidden bg-stone-900 mb-5 shadow-inner`}>
                  <Image
                    src={item.src}
                    alt={t(item.title)}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 768px) 100vw, 650px"
                    className={`w-full h-full object-cover ${item.objectPosition} group-hover:scale-105 transition-transform duration-700`}
                  />
                </div>

                {/* Text Content */}
                <div className="mb-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                      {t(item.highlight)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-stone-500 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-[#AF0807] shrink-0" />
                      <span>{t(item.location)}</span>
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3E0B02] leading-snug group-hover:text-[#AF0807] transition-colors">
                    {t(item.title)}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {t(item.desc)}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3.5 border-t border-amber-100/80 flex items-center justify-between text-xs font-bold">
                <span className="text-[#AF0807] flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#AF0807]" />
                  {t({ hi: "यज्ञ अनुष्ठान दर्शन", en: "Yagya Anushthan Darshan" })}
                </span>
                <span className="text-amber-800 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-300/60">
                  {t({ hi: "पं. दीपक शर्मा", en: "Pt. Deepak Sharma" })}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
