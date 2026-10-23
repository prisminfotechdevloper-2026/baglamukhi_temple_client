"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Flame,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Maximize2,
  X,
  Eye,
  BookOpen,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { usePujaBooking } from "@/context/PujaBookingContext";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function MahaAshtakSection() {
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

  const ashtakHawan = [
    {
      title: { hi: "अष्टक हवन (51 औषधि)", en: "Ashtak Hawan (51 Herbs)" },
      price: "₹21,000",
      priceNum: 21000,
      duration: { hi: "3 घंटे", en: "3 Hours" },
      samagri: { hi: "51 प्रकार की औषधियां", en: "51 Consecrated Herbs" },
      brahmins: { hi: "2-3 वैदिक ब्राह्मण", en: "2-3 Vedic Brahmins" },
      badge: { hi: "शत्रु स्तम्भन", en: "Enemy Stambhan" },
      desc: {
        hi: "माँ बगलामुखी अष्टक के दिव्य श्लोकों द्वारा 51 विशेष औषधियों से संकट नाशक महाहवन।",
        en: "Auspicious hawan chanting Maa Baglamukhi Ashtak with 51 medicinal herbs.",
      },
    },
    {
      title: { hi: "अष्टक हवन (108 जड़ी-बूटी)", en: "Ashtak Hawan (108 Herbs)" },
      price: "₹51,000",
      priceNum: 51000,
      duration: { hi: "5 घंटे", en: "5 Hours" },
      samagri: { hi: "108 प्रकार की जड़ी-बूटियां", en: "108 Rare Herbs" },
      brahmins: { hi: "5 वैदिक ब्राह्मण", en: "5 Vedic Brahmins" },
      badge: { hi: "सर्व संकट नाशक", en: "Total Crisis Shield" },
      desc: {
        hi: "अत्यंत शक्तिशाली अष्टक हवन। 5 ब्राह्मणों द्वारा 108 दुर्लभ औषधियों से महाआहुतियां।",
        en: "Mighty Ashtak hawan with 108 rare herbs by 5 Vedic scholars.",
      },
    },
  ];

  const ashtakPathPackages = [
    {
      title: { hi: "11,000 अष्टक पाठ", en: "11,000 Recitations" },
      price: "₹1,00,000",
      priceNum: 100000,
      desc: { hi: "सस्वर पाठ, दशांश हवन, तर्पण एवं मार्जन सहित।", en: "With Dashansh hawan & tarpan." },
    },
    {
      title: { hi: "21,000 अष्टक पाठ", en: "21,000 Recitations" },
      price: "₹2,00,000",
      priceNum: 200000,
      desc: { hi: "विशेष तांत्रिक दशांश हवन एवं ब्राह्मण भोजन।", en: "With special Dashansh hawan." },
    },
    {
      title: { hi: "36,000 अष्टक पाठ", en: "36,000 Recitations" },
      price: "₹2,51,000",
      priceNum: 251000,
      desc: { hi: "सर्वोच्च अष्टक पाठ महायज्ञ, पूर्ण शास्त्रीय विधान।", en: "Supreme Ashtak recitation yajna." },
    },
  ];

  return (
    <section id="ashtak-packages" className="relative w-full py-10 sm:py-14 bg-[#FFF8E7] overflow-hidden border-b border-[#EBD8B4]">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-start text-left mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[3px] w-8 bg-[#D89B18] rounded-full shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B45309] font-serif">
              {t({
                hi: "अत्यंत शक्तिशाली साधना • विरोधियों की वाणी व बुद्धि स्तम्भन",
                en: "Most Potent Sadhana • Paralyzing Enemy Speech & Intellect",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[38px] font-black text-[#4A0C16] tracking-tight leading-tight">
            {t({
              hi: "माँ बगलामुखी अष्टक हवन एवं दिव्य वैदिक पाठ",
              en: "Maa Baglamukhi Ashtak Hawan & Divine Recitations",
            })}
          </h2>

          <p className="mt-2 text-stone-700 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
            {t({
              hi: "माँ बगलामुखी अष्टक के 8 दिव्य श्लोक जीवन के असाध्य संकटों, कोर्ट-कचहरी मुकदमों एवं गुप्त शत्रुओं के षड्यंत्रों का नाश करने हेतु अमोघ अस्त्र माने गए हैं।",
              en: "The divine Ashtak verses paralyze harmful conspiracies, hostile speech, and chronic litigation. Consecrated with rare herbs and Dashansh hawan.",
            })}
          </p>
        </div>

        {/* ================= UNIFIED ARCHITECTURE: SIDE-BY-SIDE ON DESKTOP ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* ============ LEFT COLUMN: ASHTAK SWAROOP PHOTO & CONTEXT (lg:col-span-4) ============ */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-amber-300/80 border-l-[6px] border-l-[#D89B18] shadow-sm flex flex-col justify-between">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100 text-[#8B0000] text-xs font-bold border border-amber-300/80 mb-3 w-fit">
                <BookOpen className="h-3.5 w-3.5 text-[#D89B18]" />
                <span>{t({ hi: "माँ बगलामुखी अष्टक स्तम्भन शक्ति स्वरूप", en: "Maa Baglamukhi Ashtak Sacred Swaroop" })}</span>
              </div>

              {/* Photo with Zoom Trigger */}
              <div
                onClick={() => setLightbox(true)}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#D89B18] shadow-md group cursor-pointer bg-stone-900"
              >
                <Image
                  src="/images/maha_ashtak.webp"
                  alt="अत्यंत शक्तिशाली माँ बगलामुखी अष्टक स्वरूप"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 360px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-95 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <Maximize2 className="h-3.5 w-3.5 text-amber-300" />
                    {t({ hi: "स्वरूप बड़ा देखें (Click to Zoom)", en: "View Sacred Form" })}
                  </span>
                  <span className="text-[10.5px] text-stone-300 mt-0.5">
                    {t({ hi: "अष्टक स्तम्भन शक्ति स्वरूप", en: "Stambhan Shakti Swaroop" })}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-3.5 space-y-2">
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-100 hover:bg-amber-200 text-[#8B0000] font-bold text-xs border border-amber-300 transition-colors cursor-pointer"
                >
                  <Eye className="h-4 w-4" />
                  <span>{t({ hi: "स्वरूप बड़ा देखें (Full View)", en: "View Sacred Form" })}</span>
                </button>

                <p className="text-[11px] text-stone-600 leading-relaxed text-left pt-1">
                  {t({
                    hi: "माँ बगलामुखी अष्टक के दिव्य श्लोकों द्वारा शत्रुओं की वाणी, बुद्धि एवं कुटिल षड्यंत्रों का तत्काल स्तम्भन होता है।",
                    en: "Divine Ashtak verses paralyze hostile speech, intellect, and harmful conspiracies of hidden enemies.",
                  })}
                </p>
              </div>
            </div>

            {/* Pandit Ji's Guidance Callout */}
            <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-amber-300/80 border-l-[6px] border-l-[#D89B18] text-left">
              <p className="font-serif text-xs font-bold text-[#8B0000] mb-1 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D89B18]" />
                <span>{t({ hi: "अष्टक पाठ का फल:", en: "Fruits of Ashtak Recitation:" })}</span>
              </p>
              <p className="text-stone-700 text-xs leading-relaxed">
                {t({
                  hi: "अष्टक हवन 51 या 108 औषधियों से संपन्न होता है। जब संकट अत्यधिक गहरा हो, तब 11,000, 21,000 या 36,000 अष्टक पाठ का अनुष्ठान अचूक कवच सिद्ध होता है।",
                  en: "Ashtak hawan uses 51 or 108 herbs. In severe crisis, 11k, 21k, or 36k Ashtak recitations form an impenetrable shield.",
                })}
              </p>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: ASHTAK HAWAN & PATH OFFERINGS (lg:col-span-8) ============ */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* 1. Two Ashtak Hawan Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ashtakHawan.map((ash, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFDF8] rounded-2xl p-4 sm:p-4.5 border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18] hover:border-l-[#8B0000] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-[#8B0000] border border-amber-300/60">
                        {t(ash.badge)}
                      </span>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-black text-[#4A0C16] leading-snug mb-2">
                      {t(ash.title)}
                    </h3>

                    {/* Price & Duration Strip */}
                    <div className="p-2 rounded-lg bg-[#FFF3DC]/80 border border-[#EBD8B4] flex items-center justify-between mb-2.5">
                      <div>
                        <span className="text-[9.5px] text-stone-500 uppercase block font-medium">
                          {t({ hi: "प्रामाणिक दक्षिणा", en: "Dakshina" })}
                        </span>
                        <span className="font-serif text-xl sm:text-2xl font-black text-[#8B0000]">
                          {ash.price}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9.5px] text-stone-500 uppercase block font-medium flex items-center gap-1 justify-end">
                          <Clock className="h-3 w-3 text-amber-700" />
                          {t(ash.duration)}
                        </span>
                        <span className="text-xs font-bold text-stone-800">
                          {t(ash.brahmins)}
                        </span>
                      </div>
                    </div>

                    <p className="text-stone-700 text-xs leading-relaxed mb-3 line-clamp-2">
                      {t(ash.desc)}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] text-amber-900 font-bold mb-3 pt-2 border-t border-amber-200/50">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>{t({ hi: "सामग्री: ", en: "Herbs: " })}{t(ash.samagri)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-1.5 pt-2 border-t border-amber-200/50">
                    <button
                      type="button"
                      onClick={() => openBookingModal(`अष्टक हवन - ${t(ash.title)} (${ash.price})`)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                    >
                      <CalendarCheck className="h-3.5 w-3.5 text-amber-300" />
                      <span>{t({ hi: "अष्टक हवन बुक करें", en: "Book Ashtak Hawan" })}</span>
                    </button>

                    <a
                      href={getWhatsAppUrl(
                        `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी ${t(ash.title)} (${ash.price}) के बारे में संपूर्ण जानकारी चाहिए।`,
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

            {/* 2. Vedic Ashtak Path Mahayajna (सस्वर पाठ महायज्ञ) */}
            <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-amber-300/80 border-l-[6px] border-l-[#8B0000] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-[#EBD8B4] mb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                    {t({ hi: "सर्वोच्च वैदिक साधना", en: "Supreme Recitation Yajna" })}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-black text-[#4A0C16]">
                    {t({ hi: "माँ बगलामुखी अष्टक सस्वर पाठ महायज्ञ", en: "Maa Baglamukhi Ashtak Path Mahayajna" })}
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#8B0000] bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300/70 w-fit">
                  {t({ hi: "11 से 21 वैदिक ब्राह्मण", en: "11 to 21 Priests" })}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3.5">
                {ashtakPathPackages.map((pathPkg, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-[#FFF3DC]/80 border border-[#EBD8B4] flex flex-col justify-between">
                    <div>
                      <h5 className="font-serif font-black text-stone-900 text-xs sm:text-[13px] leading-tight">
                        {t(pathPkg.title)}
                      </h5>
                      <span className="font-serif text-lg font-black text-[#8B0000] block mt-1">
                        {pathPkg.price}
                      </span>
                      <p className="text-[10.5px] text-stone-600 mt-1 leading-snug line-clamp-2">
                        {t(pathPkg.desc)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-[#EBD8B4]">
                <button
                  type="button"
                  onClick={() => openBookingModal("माँ बगलामुखी अष्टक सस्वर पाठ महायज्ञ (₹1,00,000 - ₹2,51,000)")}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#8B0000] hover:bg-[#A00000] text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                >
                  <CalendarCheck className="h-3.5 w-3.5 text-amber-300" />
                  <span>{t({ hi: "पाठ महायज्ञ बुक करें", en: "Book Path Mahayajna" })}</span>
                </button>

                <a
                  href={getWhatsAppUrl("जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी अष्टक सस्वर पाठ महायज्ञ के संदर्भ में विस्तृत परामर्श चाहिए।", "primary")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs border border-stone-300 hover:border-[#25D366] transition-all"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                  <span>{t({ hi: "WhatsApp पर समझें", en: "Consult on WhatsApp" })}</span>
                </a>
              </div>
            </div>

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
                      hi: "माँ बगलामुखी अष्टक साधना - पावन शक्ति स्वरूप",
                      en: "Maa Baglamukhi Ashtak Sadhana - Sacred Swaroop",
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
                    src="/images/maha_ashtak.webp"
                    alt="अत्यंत शक्तिशाली माँ बगलामुखी अष्टक स्वरूप"
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
                    hi: "माँ बगलामुखी अष्टक स्तम्भन शक्ति स्वरूप • नलखेड़ा सिद्धपीठ यज्ञाचार्य पं. दीपक शर्मा (+91 72240 83313)",
                    en: "Ashtak Stambhan Shakti Swaroop • Chief Priest Pt. Deepak Sharma (+91 72240 83313).",
                  })}
                </p>
                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setLightbox(false);
                      openBookingModal("माँ बगलामुखी अष्टक हवन व पाठ");
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-[#D89B18] hover:bg-[#C08512] text-stone-900 font-bold text-xs shadow-md transition-colors cursor-pointer"
                  >
                    <CalendarCheck className="h-3.5 w-3.5" />
                    <span>{t({ hi: "अनुष्ठान बुक करें", en: "Book Anushthan" })}</span>
                  </button>
                  <a
                    href={getWhatsAppUrl("जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी अष्टक हवन के बारे में जानकारी चाहिए।", "primary")}
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
