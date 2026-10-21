"use client";

import Image from "next/image";
import {
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PujaDirectHelpline() {
  const { t } = useLanguage();

  const whatsappUrl =
    "https://wa.me/918239239249?text=" +
    encodeURIComponent(
      "जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी सिद्धपीठ नलखेड़ा में विशेष अनुष्ठान / महाहवन के संदर्भ में शुभ मुहूर्त व दक्षिणा विवरण जानना है।"
    );

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Card with signature border */}
        <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_10px_36px_-4px_rgba(217,119,6,0.16)] p-6 sm:p-10 lg:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Text & Features */}
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
                  {t({
                    hi: "सीधा पंडित जी से परामर्श • नलखेड़ा सिद्धपीठ",
                    en: "Direct Consultation with Pandit Ji • Nalkheda Siddhapeeth",
                  })}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight mb-3">
                {t({
                  hi: "शुभ मुहूर्त एवं सही अनुष्ठान का चयन करें",
                  en: "Select Auspicious Muhurta & Appropriate Anushthan",
                })}
              </h2>

              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6">
                {t({
                  hi: "हर समस्या की प्रकृति अलग होती है। अपनी जन्म कुंडली व परिस्थिति के अनुसार कौन सा महाहवन या जप सर्वाधिक प्रभावशाली रहेगा, इसकी नि:शुल्क शास्त्रीय सलाह सीधे पंडित दीपक शर्मा जी से प्राप्त करें।",
                  en: "Every circumstance is unique. Obtain authentic Shastric guidance directly from Pandit Deepak Sharma Ji on which Mahahawan or Jaap is most effective for your horoscope.",
                })}
              </p>

              {/* 3 Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700">
                  <CheckCircle2 className="h-4 w-4 text-[#AF0807] shrink-0" />
                  <span className="font-semibold">{t({ hi: "कोई अग्रिम शुल्क नहीं", en: "No Advance Consultation Fee" })}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700">
                  <ShieldCheck className="h-4 w-4 text-[#AF0807] shrink-0" />
                  <span className="font-semibold">{t({ hi: "100% गोपनीय मार्गदर्शन", en: "100% Confidential Guidance" })}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700">
                  <CalendarCheck className="h-4 w-4 text-[#AF0807] shrink-0" />
                  <span className="font-semibold">{t({ hi: "सटीक नक्षत्र मुहूर्त", en: "Precise Nakshatra Muhurta" })}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4 text-amber-300" />
                  <span>{t({ hi: "व्हाट्सएप पर मुहूर्त जानें", en: "Find Muhurta on WhatsApp" })}</span>
                </a>

                <a
                  href="tel:+918239239249"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-[#3E0B02] text-xs sm:text-sm font-bold transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-[#AF0807]" />
                  <span>{t({ hi: "सीधा कॉल करें: +91 82392 39249", en: "Direct Call: +91 82392 39249" })}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Pandit Ji Mini Profile Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-white border border-amber-300/80 p-5 shadow-sm text-center">
                <div className="relative h-28 w-28 mx-auto rounded-full overflow-hidden border-2 border-amber-400 shadow-md mb-3">
                  <Image
                    src="/images/pandit-deepak-sharma.jpg"
                    alt="पंडित दीपक शर्मा"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#3E0B02]">
                  {t({ hi: "पंडित दीपक शर्मा", en: "Pandit Deepak Sharma" })}
                </h3>
                <p className="text-xs text-[#AF0807] font-semibold mt-0.5">
                  {t({ hi: "माँ बगलामुखी अनन्य साधक", en: "Maa Baglamukhi Devout Sadhak" })}
                </p>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  {t({ hi: "नलखेड़ा सिद्धपीठ (5+ वर्ष अनुभव)", en: "Nalkheda Siddhapeeth (5+ Yrs Exp)" })}
                </p>

                <div className="mt-4 pt-3 border-t border-amber-100 text-[11.5px] text-stone-600 space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">{t({ hi: "स्थान:", en: "Venue:" })}</span>
                    <span className="font-semibold text-stone-800">{t({ hi: "नलखेड़ा मंदिर परिसर", en: "Nalkheda Mandir Complex" })}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">{t({ hi: "परामर्श समय:", en: "Timings:" })}</span>
                    <span className="font-semibold text-stone-800">{t({ hi: "प्रातः 7:00 से रात्रि 9:30", en: "7:00 AM to 9:30 PM" })}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">{t({ hi: "सेवा:", en: "Services:" })}</span>
                    <span className="font-semibold text-amber-800">{t({ hi: "प्रत्यक्ष व ऑनलाइन लाइव", en: "In-Person & Online Live" })}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
