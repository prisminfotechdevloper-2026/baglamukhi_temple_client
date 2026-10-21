"use client";

import Link from "next/link";
import {
  Flame,
  ShieldCheck,
  Sparkles,
  Coins,
  Crown,
  Award,
  HeartPulse,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SacredSiddhiBar() {
  const { t } = useLanguage();

  const siddhis = [
    {
      id: "hawan-pujan",
      title: { hi: "हवन • पूजन", en: "Hawan • Pujan" },
      subtitle: { hi: "महाजाप अनुष्ठान", en: "Maha Japa" },
      icon: Flame,
      glyph: "ॐ",
    },
    {
      id: "shatru-stambhan",
      title: { hi: "शत्रु स्तम्भन", en: "Enemy Destruction" },
      subtitle: { hi: "अभेद्य रक्षा कवच", en: "Divine Armor" },
      icon: ShieldCheck,
    },
    {
      id: "divine-attraction",
      title: { hi: "दिव्य सम्मोहन", en: "Divine Attraction" },
      subtitle: { hi: "आकर्षण सिद्धि", en: "Sammohan Siddhi" },
      icon: Sparkles,
    },
    {
      id: "dhan-laxmi",
      title: { hi: "धनलक्ष्मी वृद्धि", en: "Wealth & Prosperity" },
      subtitle: { hi: "व्यापारिक उन्नति", en: "Financial Growth" },
      icon: Coins,
      glyph: "₹",
    },
    {
      id: "rajya-prapti",
      title: { hi: "राजकीय विजय", en: "Political Success" },
      subtitle: { hi: "उच्च पद प्रतिष्ठा", en: "High Authority" },
      icon: Crown,
    },
    {
      id: "yash-kirti",
      title: { hi: "मान-सम्मान", en: "Honor & Fame" },
      subtitle: { hi: "दिव्य यश व कीर्ति", en: "Divine Glory" },
      icon: Award,
    },
    {
      id: "rog-mukti",
      title: { hi: "रोग-शोक निवारण", en: "Disease Cure" },
      subtitle: { hi: "दीर्घायु व आरोग्य", en: "Health & Vitality" },
      icon: HeartPulse,
    },
    {
      id: "sarva-siddhi",
      title: { hi: "सर्व कार्य सिद्धि", en: "All Desires Siddhi" },
      subtitle: { hi: "मनोकामना पूर्ति", en: "Accomplishment" },
      icon: CheckCircle,
      glyph: "卐",
    },
  ];

  return (
    <section
      className="w-full max-w-full overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FFF9ED] to-[#FFF6E3] pt-6 pb-7 sm:pt-8 sm:pb-9 lg:pt-9 lg:pb-10 border-b border-[#EBDCB9]/70 relative z-10"
      aria-label="माँ बगलामुखी अष्ट सिद्धि एवं वैदिक अनुष्ठान सेवाएँ"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Subtle Section Title */}
        <div className="text-center mb-5 sm:mb-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAEDD2] border border-[#D89B18]/70 shadow-xs mb-2">
            <span className="font-serif text-[#78350F] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              {t({
                hi: "॥ माँ बगलामुखी अष्ट महासिद्धि एवं अनुष्ठान ॥",
                en: "॥ 8 Sacred Vedic Siddhi & Anushthan Services ॥",
              })}
            </span>
          </div>
          <h2 className="font-serif font-extrabold text-[#4A0C16] text-xl sm:text-2xl md:text-3xl leading-tight">
            {t({
              hi: "श्री माँ बगलामुखी नलखेड़ा धाम • सर्व मनोकामना सिद्धि",
              en: "Shree Maa Baglamukhi Nalkheda Dham • All Wishes Fulfillment",
            })}
          </h2>
        </div>

        {/* 8 Medallions Grid */}
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-y-5 sm:gap-y-6 gap-x-2 sm:gap-x-4 items-start justify-items-center">
          {siddhis.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href="/pujas"
                className="flex flex-col items-center group cursor-pointer w-full max-w-[115px] sm:max-w-[130px] transition-transform duration-300"
              >
                {/* Round Medallion */}
                <div className="w-13 h-13 xs:w-14 xs:h-14 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px] rounded-full aspect-square flex items-center justify-center bg-[radial-gradient(circle_at_center,#FFFFFF_25%,#FCF3DC_70%,#F0DDB8_100%)] border-[1.5px] border-[#DEB881]/90 shadow-[0_3px_12px_rgba(216,155,24,0.22),inset_0_1px_2px_rgba(255,255,255,0.9)] group-hover:scale-110 group-hover:shadow-[0_6px_22px_rgba(216,155,24,0.4)] group-hover:border-[#C99542] active:scale-95 transition-all duration-300 select-none shrink-0">
                  {item.glyph ? (
                    <span className="font-serif font-bold text-xl sm:text-2xl text-[#4A0D16] select-none leading-none">
                      {item.glyph}
                    </span>
                  ) : (
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#7E0A12] group-hover:scale-110 transition-transform" />
                  )}
                </div>

                {/* Title & Subtitle */}
                <div className="font-serif font-bold text-[#3E1014] text-[11px] sm:text-xs text-center leading-[1.25] mt-2 tracking-tight group-hover:text-[#8B0000] transition-colors duration-200 min-h-[38px] flex flex-col justify-start items-center w-full px-0.5">
                  <span className="whitespace-nowrap">{t(item.title)}</span>
                  <span className="block text-[10px] sm:text-[11px] text-[#8B0000] font-semibold mt-0.5 whitespace-nowrap">
                    {t(item.subtitle)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Sacred Divider */}
        <div className="mt-7 sm:mt-8 flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-md my-1.5 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D89B18] to-transparent" />
            <span className="text-[#D89B18] text-xs font-serif font-bold">॥ ॐ ॥</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D89B18] to-transparent" />
          </div>
          <p className="font-serif text-[#8F6A42] text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-center uppercase mt-1">
            NALKHEDA • AGAR MALWA • MADHYA PRADESH • INDIA
          </p>
        </div>
      </div>
    </section>
  );
}
