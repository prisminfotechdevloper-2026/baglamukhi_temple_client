"use client";

import Link from "next/link";
import { Flame, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TempleLeftOverviewCard() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#FFFDF8] p-6 sm:p-8 md:p-9 border border-[#EBD8B4] shadow-sm hover:shadow-md transition-shadow h-full">
      <div>
        {/* Top Editorial Eyebrow */}
        <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-5">
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#3E0B02]">
              {t({
                hi: "पौराणिक इतिहास एवं परिचय",
                en: "Ancient History & Heritage",
              })}
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#AF0807] bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-lg shadow-2xs">
            <MapPin className="h-3.5 w-3.5 text-[#AF0807]" />
            <span>
              {t({
                hi: "नलखेड़ा, आगर-मालवा (म.प्र.)",
                en: "Nalkheda, Agar-Malwa (M.P.)",
              })}
            </span>
          </div>
        </div>

        {/* Card Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#AF0807] leading-snug mb-6">
          {t({
            hi: "मंदिर के बारे में जानें",
            en: "About the Holy Temple",
          })}
        </h3>

        {/* Content Block 1: Sthapana & Location */}
        <div className="flex gap-4 mb-5">
          <div className="flex gap-1 shrink-0 pt-1">
            <div className="w-1 rounded-full bg-[#AF0807]" />
            <div className="w-0.5 rounded-full bg-amber-400" />
          </div>
          <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed">
            {t({
              hi: "माँ बगलामुखी माता का यह अलौकिक व दिव्य मंदिर मध्य प्रदेश के आगर-मालवा जिले के नलखेड़ा में पावन लखुंदर नदी के तट पर स्थित है। यह पावन तीर्थ धार्मिक, आध्यात्मिक और तांत्रिक दोनों ही तरह की साधनाओं एवं सिद्धियों के लिए विश्वविख्यात है।",
              en: "This sacred temple of Maa Baglamukhi is situated on the holy banks of Lakhundar River in Nalkheda, Agar-Malwa district, Madhya Pradesh. The holy shrine is world-renowned for Vedic devotion, spiritual sadhana, and Tantrik siddhi rituals.",
            })}
          </p>
        </div>

        {/* Content Block 2: Havan & History */}
        <div className="flex gap-4 mb-6">
          <div className="flex gap-1 shrink-0 pt-1">
            <div className="w-1 rounded-full bg-[#AF0807]" />
            <div className="w-0.5 rounded-full bg-amber-400" />
          </div>
          <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed">
            {t({
              hi: "यहाँ संपन्न होने वाला बगलामुखी महाहवन (अग्नि अनुष्ठान) संपूर्ण विश्व में अद्वितीय माना जाता है। भारत तथा विदेशों से श्रद्धालु शत्रु बाधा निवारण, न्यायालयीय विजय और विशेष मनोकामना पूर्ति हेतु दर्शन व हवन के लिए आते हैं।",
              en: "The divine Baglamukhi Mahahawan (fire ritual) conducted here is revered worldwide. Devotees from across India and abroad visit for divine darshan and hawan for victory in disputes, protection from obstacles, and fulfillment of heartfelt wishes.",
            })}
          </p>
        </div>

        {/* Highlights Pill Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-100">
          <div className="flex items-center gap-2 rounded-xl bg-amber-50/50 p-2.5 border border-amber-200/60 text-xs font-semibold text-[#3E0B02]">
            <ShieldCheck className="h-4 w-4 text-[#AF0807] shrink-0" />
            <span>
              {t({
                hi: "महाभारत कालीन सिद्ध पीठ",
                en: "Mahabharata-Era Siddha Peeth",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-amber-50/50 p-2.5 border border-amber-200/60 text-xs font-semibold text-[#3E0B02]">
            <Flame className="h-4 w-4 text-orange-600 shrink-0" />
            <span>
              {t({
                hi: "अखंड जाग्रत हवन कुंड",
                en: "Perpetual Sacred Hawan Kund",
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Link */}
      <div className="mt-8 pt-5 border-t border-stone-100 flex items-center justify-between">
        <Link
          href="/mandir"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#AF0807] hover:text-[#7A0505] transition-colors group"
        >
          <span>
            {t({
              hi: "विस्तृत मंदिर इतिहास एवं पौराणिक गाथा पढ़ें",
              en: "Read Full Temple History & Legends",
            })}
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
