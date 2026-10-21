"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MessageCircle,
  PhoneCall,
  X,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PanditWelcomeDialog() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [progress, setProgress] = useState(100);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if user already dismissed in this session
    if (typeof window !== "undefined") {
      const alreadyDismissed = sessionStorage.getItem("pandit_welcome_dismissed");
      if (alreadyDismissed) return;
    }

    const triggerPopup = () => {
      if (hasTriggered) return;
      setHasTriggered(true);

      // Smooth delayed appearance
      setTimeout(() => {
        setIsOpen(true);

        // Auto-dismiss after 1 minute (60 seconds)
        const DURATION = 60000;
        const INTERVAL = 100;
        let elapsed = 0;

        intervalRef.current = setInterval(() => {
          elapsed += INTERVAL;
          const remaining = Math.max(0, 100 - (elapsed / DURATION) * 100);
          setProgress(remaining);
        }, INTERVAL);

        timerRef.current = setTimeout(() => {
          handleClose();
        }, DURATION);
      }, 500);
    };

    // Scroll Observer: Trigger when user scrolls to Temple Darshan Section
    const targetElement = document.getElementById("temple-darshan-section");

    if (targetElement && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            triggerPopup();
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(targetElement);

      return () => {
        observer.disconnect();
        if (timerRef.current) clearTimeout(timerRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    } else {
      // Fallback: Trigger on scroll past 450px
      const handleScroll = () => {
        if (window.scrollY > 450) {
          triggerPopup();
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (timerRef.current) clearTimeout(timerRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [hasTriggered]);

  const handleClose = () => {
    setIsOpen(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("pandit_welcome_dismissed", "true");
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे आपसे पूजा / अनुष्ठान / कुंडली परामर्श हेतु मार्गदर्शन प्राप्त करना है।"
    );
    window.open(`https://wa.me/917726815642?text=${text}`, "_blank");
    handleClose();
  };

  if (!hasTriggered && !isOpen) return null;

  return (
    <>
      {/* ================= MOBILE VIEW (Full Height / Screen Bottom Sheet) ================= */}
      <div
        className={`fixed inset-0 z-50 sm:hidden flex flex-col justify-end bg-black/60 backdrop-blur-xs transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      >
        <div
          className={`w-full h-[92vh] rounded-t-3xl bg-gradient-to-b from-white via-[#FFFDF9] to-[#FFF9F2] border-t-2 border-amber-400 p-5 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-out overflow-y-auto ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Top Header & Close Button */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-amber-200/60 mb-4">
              <div className="flex items-center gap-2">
                 <span className="font-serif text-xs font-bold text-amber-900">
                  ॥ ॐ ह्लीं बगलामुख्यै नमः ॥
                </span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                aria-label="बंद करें"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Pandit Ji Profile Card on Mobile */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
                <Image
                  src="/images/pandit-deepak-sharma.jpg"
                  alt="पंडित दीपक शर्मा"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h4 className="font-serif text-base font-extrabold text-[#3E0B02] leading-tight">
                  {t({
                    hi: "पंडित दीपक शर्मा",
                    en: "Pandit Deepak Sharma",
                  })}
                </h4>
                <p className="text-xs text-[#AF0807] font-semibold mt-0.5">
                  {t({
                    hi: "माँ बगलामुखी अनन्य उपासक",
                    en: "Devout Maa Baglamukhi Upasak",
                  })}
                </p>
                <p className="text-[11px] text-stone-500">
                  {t({
                    hi: "नलखेड़ा सिद्धपीठ • 5+ वर्ष अनुभव",
                    en: "Nalkheda Siddhapeeth • 5+ Yrs Exp",
                  })}
                </p>
              </div>
            </div>

            {/* Sacred Welcoming Message */}
            <div className="p-4 rounded-2xl bg-white border border-amber-200/70 shadow-xs mb-4">
              <h3 className="font-serif text-lg font-extrabold text-[#AF0807] mb-2 leading-tight">
                {t({
                  hi: "जय माँ बगलामुखी!",
                  en: "Jai Maa Baglamukhi!",
                })}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                {t({
                  hi: "मैं पंडित दीपक शर्मा आपका स्वागत करता हूँ। जीवन में कोई परेशानी हो या मन किसी चिंता से घिरा हो, निःसंकोच अपनी बात साझा करें। मैं आपकी समस्या को समझकर उचित आध्यात्मिक मार्गदर्शन देने का प्रयास करूँगा।",
                  en: "I, Pandit Deepak Sharma, warmly welcome you. If you are facing any troubles in life or have spiritual queries regarding Hawan, Anushthan or Kundali, feel free to connect directly. I will guide you with authentic Vedic guidance.",
                })}
              </p>
              <div className="mt-3 pt-2.5 border-t border-amber-100 flex items-center gap-1.5 text-xs font-bold text-amber-950">
                <span>
                  {t({
                    hi: "माँ पीताम्बरा आप पर अपनी कृपा बनाए रखें।",
                    en: "May Maa Pitambara bestow her divine blessings upon you.",
                  })}
                </span>
              </div>
            </div>

            {/* Reassurance Badges */}
            <div className="space-y-1.5 text-xs text-stone-600 px-1 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                <span>
                  {t({
                    hi: "100% गोपनीय व व्यक्तिगत परामर्श",
                    en: "100% Confidential & Personal Guidance",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                <span>
                  {t({
                    hi: "हवन, अनुष्ठान व जन्म कुंडली विचार",
                    en: "Hawan, Anushthan & Kundali Analysis",
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons on Mobile */}
          <div className="space-y-2.5 pt-3 border-t border-stone-200">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white font-bold text-sm shadow-md border border-amber-300/40"
            >
              <MessageCircle className="h-4 w-4 text-amber-300" />
              <span>
                {t({
                  hi: "पंडित जी से व्हाट्सएप पर बात करें",
                  en: "Connect with Pandit Ji on WhatsApp",
                })}
              </span>
            </button>

            <a
              href="tel:+917726815642"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white font-bold text-xs shadow-xs"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>
                {t({
                  hi: "सीधा कॉल करें (+91 7726815642)",
                  en: "Call Directly (+91 7726815642)",
                })}
              </span>
            </a>

            <button
              type="button"
              onClick={handleClose}
              className="w-full py-2 text-center text-xs text-stone-500 font-semibold"
            >
              {t({
                hi: "दर्शन जारी रखें (बाद में बात करें)",
                en: "Continue Darshan (Talk Later)",
              })}
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW (Floating Left-Center Dialog with Spring Slide Animation) ================= */}
      <div
        className={`hidden sm:block fixed left-6 top-1/2 -translate-y-1/2 z-50 w-[390px] max-w-[90vw] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-[125%] opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative rounded-3xl bg-gradient-to-b from-white via-[#FFFDF9] to-[#FFF9F2] border-2 border-amber-300 shadow-[0_20px_60px_-15px_rgba(175,8,7,0.3)] p-6 overflow-hidden">
          
          {/* Top Decorative Bar with Close Button */}
          <div className="flex items-center justify-between pb-3 border-b border-amber-200/70 mb-3.5">
            <div className="flex items-center gap-2">
              <span className="font-serif text-[11px] font-bold text-amber-900 tracking-wide">
                ॥ ॐ ह्लीं बगलामुख्यै नमः ॥
              </span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 hover:bg-[#AF0807] hover:text-white text-stone-600 transition-colors cursor-pointer"
              aria-label="संवाद बंद करें"
              title="बंद करें"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Pandit Ji Mini Profile Banner */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/70 mb-3.5">
            <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-amber-400 shadow-sm shrink-0">
              <Image
                src="/images/pandit-deepak-sharma.jpg"
                alt="पंडित दीपक शर्मा"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <h4 className="font-serif text-base font-extrabold text-[#3E0B02] leading-tight truncate">
                {t({
                  hi: "पंडित दीपक शर्मा",
                  en: "Pandit Deepak Sharma",
                })}
              </h4>
              <p className="text-xs text-[#AF0807] font-semibold truncate">
                {t({
                  hi: "माँ बगलामुखी अनन्य उपासक",
                  en: "Devout Maa Baglamukhi Upasak",
                })}
              </p>
              <p className="text-[10.5px] text-stone-500">
                {t({
                  hi: "नलखेड़ा सिद्धपीठ • 5+ वर्ष अनुभव",
                  en: "Nalkheda Siddhapeeth • 5+ Yrs Exp",
                })}
              </p>
            </div>
          </div>

          {/* Sacred Welcome Message */}
          <div className="space-y-2 mb-4">
            <h3 className="font-serif text-lg font-extrabold text-[#AF0807] leading-snug">
              {t({
                hi: "जय माँ बगलामुखी!",
                en: "Jai Maa Baglamukhi!",
              })}
            </h3>
            <p className="text-stone-700 text-xs sm:text-[13px] leading-relaxed">
              {t({
                hi: "मैं पंडित दीपक शर्मा आपका स्वागत करता हूँ। जीवन में कोई परेशानी हो या मन किसी चिंता से घिरा हो, निःसंकोच अपनी बात साझा करें। मैं आपकी समस्या को समझकर उचित आध्यात्मिक मार्गदर्शन देने का प्रयास करूँगा।",
                en: "I, Pandit Deepak Sharma, warmly welcome you. If you are facing any troubles in life or have spiritual queries regarding Hawan, Anushthan or Kundali, feel free to connect directly. I will guide you with authentic Vedic guidance.",
              })}
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#3E0B02]">
              <span>
                {t({
                  hi: "माँ पीताम्बरा आप पर अपनी कृपा बनाए रखें।",
                  en: "May Maa Pitambara bestow her divine blessings upon you.",
                })}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2 border-t border-stone-200/80">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-[1.01] border border-amber-300/40"
            >
              <MessageCircle className="h-4 w-4 text-amber-300" />
              <span>
                {t({
                  hi: "पंडित जी से व्हाट्सएप पर बात करें",
                  en: "Connect with Pandit Ji on WhatsApp",
                })}
              </span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href="tel:+917726815642"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-stone-100 hover:bg-stone-200 text-[#3E0B02] font-bold text-[11px] transition-colors"
              >
                <PhoneCall className="h-3 w-3 text-[#AF0807]" />
                <span>
                  {t({
                    hi: "कॉल: 7726815642",
                    en: "Call: 7726815642",
                  })}
                </span>
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="px-3 py-2 text-[11px] font-semibold text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
              >
                {t({
                  hi: "बाद में",
                  en: "Later",
                })}
              </button>
            </div>
          </div>

          {/* Auto-Dismiss Timer Progress Line */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-stone-100">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-[#AF0807] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>
      </div>
    </>
  );
}
