"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Flame,
  CalendarCheck,
  CheckCircle2,
  Users,
  ShieldCheck,
  Maximize2,
  X,
  Eye,
  Clock,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { usePujaBooking } from "@/context/PujaBookingContext";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function VisheshAnushthanSection() {
  const { t } = useLanguage();
  const { openBookingModal } = usePujaBooking();
  const [lightbox, setLightbox] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
    };
    if (lightbox) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  const anushthanPackages = [
    {
      id: "anushthan-21k",
      title: { hi: "21,000 महामंत्र जाप", en: "21,000 Mantra Jaap" },
      price: "₹17,000",
      priceNum: 17000,
      duration: { hi: "1 से 2 दिवस", en: "1-2 Days" },
      desc: {
        hi: "वैदिक ब्राह्मणों द्वारा 36 अक्षरी मूल मंत्र का 21,000 सस्वर पाठ एवं तत्पश्चात दशांश हवन।",
        en: "21,000 chants of 36-akshari mul mantra followed by Dashansh hawan.",
      },
      brahmins: { hi: "5 वैदिक ब्राह्मण", en: "5 Vedic Brahmins" },
      includes: { hi: "दशांश हवन व आहुतियां सम्मिलित", en: "Dashansh Hawan & Ahutis" },
      isSupreme: false,
    },
    {
      id: "anushthan-36k",
      title: { hi: "36,000 महामंत्र जाप", en: "36,000 Mantra Jaap" },
      price: "₹21,000",
      priceNum: 21000,
      duration: { hi: "2 से 3 दिवस", en: "2-3 Days" },
      desc: {
        hi: "36 अक्षरी मूल मंत्र का 36,000 जप। शत्रुओं की वाणी व बुद्धि स्तम्भन एवं कानूनी विवादों में विजय।",
        en: "36,000 chants of 36-letter mul mantra for paralyzing disputes and winning legal cases.",
      },
      brahmins: { hi: "7 वैदिक ब्राह्मण", en: "7 Vedic Brahmins" },
      includes: { hi: "शाबर मंत्र सम्पुट व विशेष हवन", en: "Shabar mantra & Vishesh hawan" },
      isSupreme: false,
    },
    {
      id: "anushthan-51k",
      title: { hi: "51,000 महामंत्र जाप", en: "51,000 Mantra Jaap" },
      price: "₹36,000",
      priceNum: 36000,
      duration: { hi: "3 से 5 दिवस", en: "3-5 Days" },
      desc: {
        hi: "गंभीर संकट, असाध्य विरोधियों की शांति व व्यापारिक प्रतिष्ठा की रक्षा हेतु अति फलदायी अनुष्ठान।",
        en: "Highly effective sadhana for severe adversities and securing business prestige.",
      },
      brahmins: { hi: "11 वैदिक ब्राह्मण", en: "11 Vedic Brahmins" },
      includes: { hi: "11 ब्राह्मणों द्वारा दशांश महायज्ञ", en: "Jaap by 11 priests & Mahayajna" },
      isSupreme: false,
    },
    {
      id: "anushthan-125k",
      title: { hi: "1,25,000 (सवा लाख) अखंड साधना", en: "1.25 Lakh Akhand Jaap" },
      price: "₹51,000",
      priceNum: 51000,
      duration: { hi: "5 से 7 दिवस", en: "5-7 Days" },
      desc: {
        hi: "11 अथवा 21 ब्राह्मणों द्वारा 36 अक्षरी मूल मंत्र का सवा लाख अखंड जप, दिव्य साधना एवं दशांश महाविशेष हवन।",
        en: "The supreme 1.25 lakh Vedic-Tantric anushthan by 11/21 priests with Dashansh Mahavishesh hawan.",
      },
      brahmins: { hi: "11-21 वैदिक ब्राह्मण", en: "11-21 Vedic Brahmins" },
      includes: { hi: "महाविशेष हवन व संपूर्ण सिद्ध किट", en: "Mahavishesh hawan & Consecrated Kit" },
      isSupreme: true,
    },
  ];

  return (
    <section id="vishesh-anushthan" className="relative w-full py-10 sm:py-14 bg-[#FFF8E7] overflow-hidden border-b border-[#EBD8B4]">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-start text-left mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[3px] w-8 bg-[#D89B18] rounded-full shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B45309] font-serif">
              {t({
                hi: "नलखेड़ा सिद्धपीठ वैदिक साधना • 11/21 ब्राह्मणों द्वारा अखंड जप",
                en: "Nalkheda Siddhapeeth Vedic Sadhana • Akhand Jaap by 11/21 Priests",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[38px] font-black text-[#4A0C16] tracking-tight leading-tight">
            {t({
              hi: "माँ बगलामुखी विशेष अनुष्ठान – सवा लाख महामंत्र साधना",
              en: "Maa Baglamukhi Vishesh Anushthan – 1.25 Lakh Jaap",
            })}
          </h2>

          <p className="mt-2 text-stone-700 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
            {t({
              hi: "असाध्य संकटों, कोर्ट-कचहरी मुकदमों, राजनीतिक प्रतिष्ठा एवं सर्व कार्य सिद्धि हेतु 11 अथवा 21 वैदिक ब्राह्मणों द्वारा 36 अक्षरी मूल मंत्र का शास्त्रोक्त जप एवं दशांश महाविशेष हवन।",
              en: "Consecrated chanting of 36-letter mul mantra by 11 or 21 Vedic Brahmins followed by Dashansh Mahavishesh Hawan at Nalkheda Siddhapeeth.",
            })}
          </p>
        </div>

        {/* ================= UNIFIED ARCHITECTURE: SIDE-BY-SIDE ON DESKTOP ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* ============ LEFT COLUMN: ALTAR PHOTO & CONTEXT (lg:col-span-4) ============ */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-amber-300/80 border-l-[6px] border-l-[#D89B18] shadow-sm flex flex-col justify-between">
              
              {/* Sacred Tag */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100 text-[#8B0000] text-xs font-bold border border-amber-300/80 mb-3 w-fit">
                <Flame className="h-3.5 w-3.5 text-[#D89B18]" />
                <span>{t({ hi: "नलखेड़ा सिद्धपीठ प्रत्यक्ष पावन वेदी दर्शन", en: "Nalkheda Siddhapeeth Direct Altar Darshan" })}</span>
              </div>

              {/* Altar Photo with Zoom Trigger */}
              <div
                onClick={() => setLightbox(true)}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#D89B18] shadow-md group cursor-pointer bg-stone-900"
              >
                <Image
                  src="/images/vishesh_anusthan.webp"
                  alt="माँ बगलामुखी विशेष अनुष्ठान पावन वेदी एवं सर्वतोभद्र मण्डल"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 360px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-95 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <Maximize2 className="h-3.5 w-3.5 text-amber-300" />
                    {t({ hi: "वेदी दर्शन बड़ा करें (Click to Zoom)", en: "View Sacred Altar" })}
                  </span>
                  <span className="text-[10.5px] text-stone-300 mt-0.5">
                    {t({ hi: "प्रत्यक्ष पावन वेदी • सर्वतोभद्र मण्डल", en: "Sanctum Altar • Sarvatobhadra" })}
                  </span>
                </div>
              </div>

              {/* Altar Action Buttons */}
              <div className="mt-3.5 space-y-2">
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-100 hover:bg-amber-200 text-[#8B0000] font-bold text-xs border border-amber-300 transition-colors cursor-pointer"
                >
                  <Eye className="h-4 w-4" />
                  <span>{t({ hi: "वेदी दर्शन बड़ा करें (Full Photo)", en: "View Full Altar Photo" })}</span>
                </button>

                <p className="text-[11px] text-stone-600 leading-relaxed text-left pt-1">
                  {t({
                    hi: "तस्वीर में नलखेड़ा सिद्धपीठ की पावन वेदी प्रदर्शित है जहाँ सवा लाख अखंड जप की वेदी सर्वतोभद्र मण्डल व अखंड दीप के साथ तैयार की जाती है।",
                    en: "Sanctum altar prepared at Nalkheda Siddhapeeth with Sarvatobhadra Mandala and Akhand Deep for 1.25 Lakh Jaap.",
                  })}
                </p>
              </div>
            </div>

            {/* Pandit Ji's Guidance Callout */}
            <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-amber-300/80 border-l-[6px] border-l-[#D89B18] text-left">
              <p className="font-serif text-xs font-bold text-[#8B0000] mb-1 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D89B18]" />
                <span>{t({ hi: "सवा लाख महामंत्र की महत्ता:", en: "Significance of Sawa Lakh Jaap:" })}</span>
              </p>
              <p className="text-stone-700 text-xs leading-relaxed">
                {t({
                  hi: "शास्त्रों में माँ बगलामुखी के सवा लाख (1,25,000) महामंत्र जाप को अत्यंत दुर्लभ एवं अचूक सिद्धिदायक विधान माना गया है। अनुष्ठान की संपूर्ण पूर्णाहुति पर दशांश हवन अनिवार्य है।",
                  en: "1.25 Lakh chants of Maa Baglamukhi mantra is considered the supreme Siddhi-granting ritual, followed by mandatory Dashansh Hawan.",
                })}
              </p>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: 4 ANUSHTHAN TIERS IN A 2x2 GRID (lg:col-span-8) ============ */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {anushthanPackages.map((anu) => (
              <div
                key={anu.id}
                className={`bg-[#FFFDF8] rounded-2xl p-4 sm:p-4.5 border transition-all duration-300 flex flex-col justify-between ${
                  anu.isSupreme
                    ? "border-l-[6px] border-l-[#8B0000] border-amber-400 shadow-md ring-1 ring-amber-300/60"
                    : "border-[#EBD8B4] border-l-[6px] border-l-[#D89B18] hover:border-l-[#8B0000] shadow-xs hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="font-serif text-base sm:text-lg font-black text-[#8B0000] leading-snug">
                      {t(anu.title)}
                    </span>
                    {anu.isSupreme && (
                      <span className="text-[9.5px] font-black px-2 py-0.5 rounded bg-[#8B0000] text-amber-300 uppercase tracking-wider shrink-0">
                        {t({ hi: "सर्वोच्च महासाधना", en: "Supreme Sadhana" })}
                      </span>
                    )}
                  </div>

                  {/* Price & Duration Strip */}
                  <div className="p-2 rounded-lg bg-[#FFF3DC]/80 border border-[#EBD8B4] flex items-center justify-between mb-2.5">
                    <div>
                      <span className="text-[9.5px] text-stone-500 uppercase block font-medium">
                        {t({ hi: "संपूर्ण अनुष्ठान दक्षिणा", en: "Dakshina" })}
                      </span>
                      <span className="font-serif text-xl sm:text-2xl font-black text-[#8B0000]">
                        {anu.price}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9.5px] text-stone-500 uppercase block font-medium flex items-center gap-1 justify-end">
                        <Clock className="h-3 w-3 text-amber-700" />
                        {t(anu.duration)}
                      </span>
                      <span className="text-xs font-bold text-stone-800">
                        {t(anu.brahmins)}
                      </span>
                    </div>
                  </div>

                  <p className="text-stone-700 text-xs leading-relaxed mb-2.5 line-clamp-2">
                    {t(anu.desc)}
                  </p>

                  <div className="flex items-center gap-1.5 text-[11px] text-amber-900 font-bold mb-3 pt-2 border-t border-amber-200/50">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>{t(anu.includes)}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-1.5 pt-2 border-t border-amber-200/50">
                  <button
                    type="button"
                    onClick={() => openBookingModal(`विशेष अनुष्ठान - ${t(anu.title)} (${anu.price})`)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                  >
                    <CalendarCheck className="h-3.5 w-3.5 text-amber-300" />
                    <span>{t({ hi: "अनुष्ठान बुक करें", en: "Book Anushthan" })}</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी ${t(anu.title)} (${anu.price}) के बारे में संपूर्ण मार्गदर्शन चाहिए।`,
                      "primary"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs border border-stone-300 hover:border-[#25D366] transition-all"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                    <span>{t({ hi: "WhatsApp परामर्श", en: "Ask on WhatsApp" })}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================= LIGHTBOX PREVIEW MODAL ================= */}
        {lightbox && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setLightbox(false)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] bg-[#1E0407] border-2 border-[#D89B18] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 bg-[#2B0609] border-b border-[#D89B18]/40">
                <div className="flex items-center gap-2 min-w-0 pr-3">
                  <Flame className="h-4 w-4 text-[#D89B18] shrink-0" />
                  <h4 className="font-serif text-sm sm:text-base font-bold text-amber-200 truncate">
                    {t({
                      hi: "नलखेड़ा सिद्धपीठ - माँ बगलामुखी विशेष अनुष्ठान पावन वेदी",
                      en: "Nalkheda Siddhapeeth - Sanctum Anushthan Altar",
                    })}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setLightbox(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative flex-1 min-h-[300px] max-h-[66vh] w-full bg-black/50 flex items-center justify-center p-2 sm:p-4">
                <div className="relative w-full h-full min-h-[300px] max-h-[64vh]">
                  <Image
                    src="/images/vishesh_anusthan.webp"
                    alt="माँ बगलामुखी विशेष अनुष्ठान पावन वेदी एवं सर्वतोभद्र मण्डल"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 896px"
                    priority
                  />
                </div>
              </div>

              <div className="px-4 py-3 bg-[#2B0609] border-t border-[#D89B18]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-stone-300 text-left line-clamp-2">
                  {t({
                    hi: "माँ बगलामुखी विशेष अनुष्ठान प्रत्यक्ष वेदी दर्शन • नलखेड़ा सिद्धपीठ यज्ञाचार्य पं. दीपक शर्मा (+91 72240 83313)",
                    en: "Consecrated Sanctum Altar • Chief Priest Pt. Deepak Sharma (+91 72240 83313).",
                  })}
                </p>
                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setLightbox(false);
                      openBookingModal("विशेष अनुष्ठान - सवा लाख अखंड साधना (₹51,000)");
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-[#D89B18] hover:bg-[#C08512] text-stone-900 font-bold text-xs shadow-md transition-colors cursor-pointer"
                  >
                    <CalendarCheck className="h-3.5 w-3.5" />
                    <span>{t({ hi: "अनुष्ठान बुक करें", en: "Book Anushthan" })}</span>
                  </button>
                  <a
                    href={getWhatsAppUrl("जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी विशेष अनुष्ठान (सवा लाख जप) की विधि एवं मुहूर्त जानना है।", "primary")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
