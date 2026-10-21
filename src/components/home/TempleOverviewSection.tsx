import Link from "next/link";
import {
  Flame,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import TempleRightInteractiveCard from "./TempleRightInteractiveCard";

export default function TempleOverviewSection() {

  return (
    <section id="temple-darshan-section" className="w-full bg-[#FAF8F5] py-7 sm:py-10 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left Aligned */}
        <div className="text-left max-w-3xl mb-6 sm:mb-8">
           
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            मंदिर दर्शन परिचय एवं आरती समय सारिणी
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
            पावन लखुंदर नदी तट पर विराजी माँ बगलामुखी के दर्शन एवं दैनिक पूजा-अर्चना का संपूर्ण विवरण
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* ================= LEFT COLUMN: Mandir Overview & Significance ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 md:p-9 border border-amber-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div>
              {/* Top Editorial Eyebrow */}
              <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-3.5 w-1 bg-[#AF0807] rounded-full" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#3E0B02]">
                    पौराणिक इतिहास एवं परिचय
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#AF0807] bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-lg shadow-2xs">
                  <MapPin className="h-3.5 w-3.5 text-[#AF0807]" />
                  <span>नलखेड़ा, आगर-मालवा (म.प्र.)</span>
                </div>
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#AF0807] leading-snug mb-6">
                मंदिर के बारे में जानें
              </h3>

              {/* Content Block 1: Sthapana & Location */}
              <div className="flex gap-4 mb-5">
                {/* Dual Vertical Line (Vedic Danda style) */}
                <div className="flex gap-1 shrink-0 pt-1">
                  <div className="w-1 rounded-full bg-[#AF0807]" />
                  <div className="w-0.5 rounded-full bg-amber-400" />
                </div>
                <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed">
                  माँ बगलामुखी माता का यह अलौकिक व दिव्य मंदिर मध्य प्रदेश के आगर-मालवा जिले के नलखेड़ा में
                  पावन <strong>लखुंदर नदी के तट पर</strong> स्थित है। यह पावन तीर्थ धार्मिक, आध्यात्मिक
                  और तांत्रिक दोनों ही तरह की साधनाओं एवं सिद्धियों के लिए विश्वविख्यात है।
                </p>
              </div>

              {/* Content Block 2: Havan & History */}
              <div className="flex gap-4 mb-6">
                {/* Dual Vertical Line (Vedic Danda style) */}
                <div className="flex gap-1 shrink-0 pt-1">
                  <div className="w-1 rounded-full bg-[#AF0807]" />
                  <div className="w-0.5 rounded-full bg-amber-400" />
                </div>
                <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed">
                  यहाँ संपन्न होने वाला <strong>बगलामुखी महाहवन (अग्नि अनुष्ठान)</strong> संपूर्ण विश्व
                  में अद्वितीय माना जाता है। भारत तथा विदेशों से श्रद्धालु शत्रु बाधा निवारण, न्यायालयीय विजय
                  और विशेष मनोकामना पूर्ति हेतु दर्शन व हवन के लिए आते हैं।
                </p>
              </div>

              {/* Highlights Pill Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2 rounded-xl bg-amber-50/50 p-2.5 border border-amber-200/60 text-xs font-semibold text-[#3E0B02]">
                  <ShieldCheck className="h-4 w-4 text-[#AF0807] shrink-0" />
                  <span>महाभारत कालीन सिद्ध पीठ</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-amber-50/50 p-2.5 border border-amber-200/60 text-xs font-semibold text-[#3E0B02]">
                  <Flame className="h-4 w-4 text-orange-600 shrink-0" />
                  <span>अखंड जाग्रत हवन कुंड</span>
                </div>
              </div>
            </div>

            {/* Bottom Link */}
            <div className="mt-8 pt-5 border-t border-stone-100 flex items-center justify-between">
              <Link
                href="/mandir"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#AF0807] hover:text-[#7A0505] transition-colors group"
              >
                <span>विस्तृत मंदिर इतिहास एवं पौराणिक गाथा पढ़ें</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Interactive Timings & 3 Darshan Images Gallery ================= */}
          <div className="lg:col-span-6 flex flex-col">
            <TempleRightInteractiveCard />
          </div>

        </div>
      </div>
    </section>
  );
}
