"use client";

import Link from "next/link";
import { ShieldAlert, Flame, Scale, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PanditServicesSummary() {
  const { t } = useLanguage();

  const mainServices = [
    {
      icon: ShieldAlert,
      title: {
        hi: "शत्रु बाधा एवं तंत्र दोष निवारण महाहवन",
        en: "Shatru Badha & Tantra Dosha Nivaran Mahahawan",
      },
      subtitle: {
        hi: "अकारण शत्रुता व षड्यंत्र से सुरक्षा",
        en: "Protection from Enmity & Negative Energies",
      },
      description: {
        hi: "गुप्त शत्रुओं, व्यावसायिक ईर्ष्या, तंत्र-दोष एवं नजर-बाधा को स्तंभित कर जीवन में शांति, सुरक्षा व विजय की स्थापना।",
        en: "Neutralizes hidden enemies, business rivalry, negative energies, and evil eye to establish peace, security, and victory.",
      },
      badge: {
        hi: "सर्वाधिक प्रसिद्ध अनुष्ठान",
        en: "Most Revered Anushthan",
      },
    },
    {
      icon: Flame,
      title: {
        hi: "सवा लाख (1,25,000) महामंत्र अखंड जाप",
        en: "Sawa Lakh (125,000) Mahamantra Akhand Jaap",
      },
      subtitle: {
        hi: "दशांश महाहवन सहित सर्वोच्च महासाधना",
        en: "Highest Spiritual Sadhana with Dashansh Hawan",
      },
      description: {
        hi: "वेदपाठी विद्वान ब्राह्मणों द्वारा 1,25,000 सिद्ध बगलामुखी मूल मंत्रों का अखंड अनुष्ठान एवं दशांश आहुति यज्ञ।",
        en: "Continuous 1,25,000 Baglamukhi mool mantra chanting by Vedic scholars, concluded with 12,500 ahuti dashansh hawan.",
      },
      badge: {
        hi: "अखंड तांत्रिक महासाधना",
        en: "Akhand Tantric Mahasadhana",
      },
    },
    {
      icon: Scale,
      title: {
        hi: "कोर्ट-कचहरी व मुकदमा विजय अनुष्ठान",
        en: "Court Case & Legal Dispute Victory Anushthan",
      },
      subtitle: {
        hi: "न्यायालय विवाद एवं कानूनी सुरक्षा",
        en: "Litigation Victory & Legal Protection",
      },
      description: {
        hi: "वर्षों से लंबित कानूनी विवाद, संपत्ति झगड़े एवं झूठे मुकदमों में सत्य, न्याय व विजय प्राप्ति हेतु विशेष बगलामुखी विधान।",
        en: "Special Baglamukhi vidhi for triumph of truth and justice in prolonged court disputes, property conflicts, and false cases.",
      },
      badge: {
        hi: "न्यायालयीय मामलों में शास्त्रोक्त",
        en: "Effective for Legal Matters",
      },
    },
    {
      icon: TrendingUp,
      title: {
        hi: "व्यापार वृद्धि एवं धनलक्ष्मी महाहवन",
        en: "Vyapar Vriddhi & Dhanlaxmi Mahahawan",
      },
      subtitle: {
        hi: "व्यापारिक मंदी व कर्ज मुक्ति",
        en: "Business Revival & Debt Relief",
      },
      description: {
        hi: "दुकान या उद्योग में निरंतर घाटे, धन हानि, अटके हुए धन की प्राप्ति एवं स्थायी समृद्धि हेतु कनकधारा-बगलामुखी यज्ञ।",
        en: "Kanakadhara-Baglamukhi yagya to overcome losses, recover stuck funds, and bring enduring prosperity to business.",
      },
      badge: {
        hi: "व्यापार व आर्थिक उन्नति",
        en: "Business & Financial Growth",
      },
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              {t({
                hi: "मुख्य अनुष्ठान सेवाएँ • पंडित दीपक शर्मा",
                en: "Key Anushthan Services • Pandit Deepak Sharma",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            {t({
              hi: "माँ बगलामुखी मंदिर में संपन्न मुख्य महाहवन",
              en: "Key Mahahawans Performed at Maa Baglamukhi Mandir",
            })}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed">
            {t({
              hi: "पंडित दीपक शर्मा जी द्वारा शास्त्रोक्त वैदिक-तांत्रिक पद्धति से संपन्न कराए जाने वाले प्रमुख अनुष्ठान। व्यक्तिगत उपस्थिति अथवा देश-विदेश से लाइव ई-संकल्प द्वारा सुलभ।",
              en: "Major sacred anushthans performed by Pandit Deepak Sharma Ji following authentic Vedic-Tantric rites. Available in-person or via live video E-Sankalp worldwide.",
            })}
          </p>
        </div>

        {/* 4 Clean Signature Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {mainServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title.en}
                className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-colors duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-4">
                    <div className="h-11 w-11 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-[#AF0807]" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      {t({ hi: "सेवा", en: "Service" })} 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-extrabold text-[#AF0807] uppercase tracking-wider block mb-1">
                    {t(service.badge)}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-[#3E0B02] mb-2 leading-snug group-hover:text-[#AF0807] transition-colors">
                    {t(service.title)}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {t(service.description)}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-1 text-xs font-semibold text-stone-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#AF0807]" />
                  <span>{t({ hi: "शास्त्रोक्त संकल्प सहित", en: "With Shastrokta Sankalp" })}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Link Banner to Dedicated /pujas Page */}
        <div className="rounded-3xl bg-gradient-to-r from-[#3E0B02] via-[#5C1004] to-[#2B0701] border-y-0 border-x-4 border-amber-400 p-6 sm:p-8 lg:p-10 text-white shadow-[0_12px_40px_-6px_rgba(62,11,2,0.35)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
              {t({ hi: "सम्पूर्ण अनुष्ठान सूची", en: "Complete Anushthan Catalog" })}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-200">
              {t({
                hi: "क्या आप सभी 16+ शास्त्रोक्त पूजा एवं महाहवन देखना चाहते हैं?",
                en: "Looking for all 16+ Shastrokta Pujas & Mahahawans?",
              })}
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-xl">
              {t({
                hi: "कालसर्प दोष, मांगलिक शांति, महामृत्युंजय जाप, राजयोग हवन आदि समस्त अनुष्ठानों का विस्तृत विवरण हमारे पूजा पृष्ठ पर उपलब्ध है।",
                en: "Detailed information for Kaalsarp Dosh, Manglik Shanti, Mahamrityunjay Jaap, and Rajyog Hawan is available on our dedicated pujas page.",
              })}
            </p>
          </div>

          <Link
            href="/puja"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-xs sm:text-sm font-bold shadow-xl border border-amber-400/80 hover:border-amber-300 transition-colors shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{t({ hi: "सभी 16+ अनुष्ठानों का विवरण देखें", en: "Explore Full 16+ Puja Catalog" })}</span>
            <ArrowRight className="h-4 w-4 text-amber-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}
