"use client";

import Link from "next/link";
import {
  Flame,
  Scale,
  Scroll,
  TrendingUp,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { usePujaBooking } from "@/context/PujaBookingContext";

export default function FeaturedPujasSection() {
  const { t } = useLanguage();
  const { openBookingModal } = usePujaBooking();

  const featuredPujas = [
    {
      id: "shatru-badha-hawan",
      title: {
        hi: "माँ बगलामुखी शत्रु बाधा एवं तंत्र दोष निवारण महाहवन",
        en: "Maa Baglamukhi Shatru Badha & Tantra Dosh Nivaran Hawan",
      },
      badge: {
        hi: "सर्वोच्च स्तम्भन",
        en: "Supreme Protection",
      },
      desc: {
        hi: "अकारण शत्रुता, गुप्त विरोध, नजर दोष व नकारात्मक ऊर्जा के शमन हेतु अमोघ वैदिक-तांत्रिक महाहवन।",
        en: "Scriptural Vedic-Tantrik Hawan to neutralize unwarranted enmities, evil eye, and hidden adversities.",
      },
      feature: {
        hi: "पीली सरसों व पीताम्बरा समिधा आहुति • रक्षा कवच",
        en: "Yellow Mustard & Sacred Samidha • Raksha Kavach",
      },
      icon: Flame,
      color: "from-amber-500/20 to-red-600/10",
      borderColor: "border-amber-400/80",
    },
    {
      id: "court-case-vijay",
      title: {
        hi: "कोर्ट-कचहरी, मुकदमा एवं विवाद विजय अनुष्ठान",
        en: "Court Case, Legal Dispute & Victory Anushthan",
      },
      badge: {
        hi: "न्यायालयीन विजय",
        en: "Legal Victory",
      },
      desc: {
        hi: "झूठे मुकदमों, संपत्ति विवाद, कानूनी अड़चनों व प्रशासनिक मामलों में सत्य व न्याय की विजय हेतु।",
        en: "Special Anushthan for victory in false litigations, property disputes, and administrative delays.",
      },
      feature: {
        hi: "वाक् स्तम्भन विधान • अभिमंत्रित विजय यंत्र",
        en: "Vak Stambhan Vidhan • Consecrated Vijay Yantra",
      },
      icon: Scale,
      color: "from-red-500/20 to-amber-600/10",
      borderColor: "border-red-400/80",
    },
    {
      id: "vyapar-dhan-laxmi",
      title: {
        hi: "व्यापार वृद्धि, धनलक्ष्मी एवं कनकधारा महाहवन",
        en: "Business Growth, Dhan Laxmi & Kanakdhara Hawan",
      },
      badge: {
        hi: "धनलक्ष्मी प्राप्ति",
        en: "Wealth & Prosperity",
      },
      desc: {
        hi: "व्यापार में निरंतर रुकावट, भारी आर्थिक तंगी, कर्ज मुक्ति एवं नए व्यावसायिक लाभ के द्वार खोलने हेतु।",
        en: "Sacred fire ritual for reviving stalled business, clearing debts, and attracting steady prosperity.",
      },
      feature: {
        hi: "कनकधारा व श्री सूक्त सम्पुट • व्यापारिक उन्नति",
        en: "Kanakdhara & Shri Sukta Samput • Business Growth",
      },
      icon: TrendingUp,
      color: "from-amber-500/20 to-yellow-600/10",
      borderColor: "border-amber-400/80",
    },
    {
      id: "sawa-lakh-jaap",
      title: {
        hi: "सवा लाख (1,25,000) बगलामुखी महामंत्र अखंड जाप",
        en: "1.25 Lakh Baglamukhi Maha Mantra Akhand Jaap",
      },
      badge: {
        hi: "सर्वोच्च महासाधना",
        en: "Highest Maha Sadhana",
      },
      desc: {
        hi: "असाध्य संकट, गंभीर कष्ट निवारण व सर्व मनोकामना सिद्धि हेतु नलखेड़ा सिद्धपीठ का सर्वोच्च महायज्ञ।",
        en: "The supreme Vedic yajna at Nalkheda Siddhapeeth for severe life crises and wish fulfillment.",
      },
      feature: {
        hi: "विद्वान ब्राह्मणों द्वारा सस्वर पाठ • दशांश हवन",
        en: "Chanted by Vedic Scholars • Dashansh Hawan Included",
      },
      icon: Scroll,
      color: "from-yellow-500/20 to-amber-600/10",
      borderColor: "border-yellow-500/80",
    },
  ];

  return (
    <section
      id="featured-pujas"
      className="w-full bg-gradient-to-b from-[#FFF8E7] via-[#FFFDF8] to-[#FFF9ED] py-10 sm:py-14 lg:py-16 border-b border-[#EBDCB9]/80"
      aria-label="मुख्य पूजा एवं हवन सेवाएँ"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER (Optimized Left-Aligned) ================= */}
        <div className="text-left max-w-3xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
              {t({
                hi: "नलखेड़ा सिद्धपीठ • प्रमुख महाहवन",
                en: "Nalkheda Siddhapeeth • Main Hawan Services",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#4A0C16] tracking-tight leading-snug pt-1 mb-2.5">
            {t({
              hi: "मुख्य पूजा एवं सिद्ध महाहवन सेवाएँ",
              en: "Principal Hawan & Puja Services",
            })}
          </h2>

          <p className="text-[#5C3A21] text-xs sm:text-sm md:text-base leading-relaxed">
            {t({
              hi: "अपनी समस्या या मनोकामना के अनुसार शास्त्रोक्त पूजा चुनें। आप स्वयं मंदिर आकर अथवा घर बैठे लाइव वीडियो संकल्प ले सकते हैं।",
              en: "Select a scriptural puja tailored to your circumstance. Participate in person at Nalkheda or take a live video Sankalp from home.",
            })}
          </p>
        </div>

        {/* ================= 4 PUJA CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {featuredPujas.map((puja) => {
            const Icon = puja.icon;
            return (
              <div
                key={puja.id}
                className="group relative rounded-2xl sm:rounded-3xl bg-white border border-[#EBD9B8] border-l-[6px] border-l-[#D89B18] hover:border-l-[#8B0000] p-5 sm:p-6 shadow-[0_4px_20px_rgba(74,38,24,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#FAEDD2] to-[#F5DEB3] border border-[#D89B18]/60 flex items-center justify-center text-[#AF0807] shadow-xs group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-300/80 text-[11px] font-bold text-[#8B0000]">
                      {t(puja.badge)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-extrabold text-[#3E0B02] group-hover:text-[#AF0807] text-base sm:text-lg leading-snug transition-colors mb-2">
                    {t(puja.title)}
                  </h3>

                  {/* Plain Language Description */}
                  <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed mb-3.5">
                    {t(puja.desc)}
                  </p>

                  {/* Key Highlights Pill */}
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#78350F] bg-[#FFF9ED] border border-amber-200/80 rounded-xl px-2.5 py-1.5 mb-5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{t(puja.feature)}</span>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => openBookingModal(puja.title.hi)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <CalendarCheck className="h-4 w-4 text-amber-300 shrink-0" />
                    <span>
                      {t({
                        hi: "यह पूजा बुक करें",
                        en: "Book This Puja",
                      })}
                    </span>
                  </button>

                  <Link
                    href={`/puja#${puja.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B0000] hover:text-[#5C0D15] px-2 py-2 transition-colors shrink-0"
                  >
                    <span>{t({ hi: "विवरण", en: "Details" })}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= EXPLORE ALL PUJAS CTA ================= */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/puja"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAEDD2]/60 border border-[#D89B18]/70 text-[#3E0B02] hover:text-[#AF0807] font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-200"
          >
            <span>
              {t({
                hi: "सभी 12+ पूजा एवं विशेष अनुष्ठान देखें",
                en: "View All 12+ Puja & Anushthan Services",
              })}
            </span>
            <ArrowRight className="h-4 w-4 text-[#AF0807]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
