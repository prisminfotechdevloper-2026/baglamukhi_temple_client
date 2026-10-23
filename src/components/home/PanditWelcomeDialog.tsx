"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  PhoneCall,
  X,
  Flame,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/data/siteConfig";

const DISMISSED_KEY = "pandit_welcome_dismissed_v2";

export default function PanditWelcomeDialog() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [, setHasTriggered] = useState(false);
  const [progress, setProgress] = useState(100);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    try {
      sessionStorage.setItem(DISMISSED_KEY, Date.now().toString());
    } catch {
      // ignore
    }
  }, []);

  const handleWhatsApp = useCallback(() => {
    const text =
      "जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे आपसे पूजा / अनुष्ठान / कुंडली परामर्श हेतु मार्गदर्शन प्राप्त करना है।";
    window.open(getWhatsAppUrl(text, "primary"), "_blank", "noopener,noreferrer");
    handleClose();
  }, [handleClose]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") return;

    // 1. Clear any legacy dismissed flag that might permanently block the popup
    try {
      sessionStorage.removeItem("pandit_welcome_dismissed");
    } catch {
      // ignore storage access issues
    }

    // 2. Check if dismissed within the last 15 minutes of this session
    try {
      const dismissedTime = sessionStorage.getItem(DISMISSED_KEY);
      if (dismissedTime && Date.now() - Number(dismissedTime) < 15 * 60 * 1000) {
        return;
      }
    } catch {
      // ignore
    }

    let triggered = false;
    const triggerPopup = () => {
      if (triggered) return;
      triggered = true;
      setHasTriggered(true);

      // Smooth opening animation delay
      setTimeout(() => {
        setIsOpen(true);

        // Auto-dismiss after 60 seconds
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
      }, 60);
    };

    // 3. Trigger immediately when customer starts scrolling (> 30px)
    const handleScroll = () => {
      if (window.scrollY > 30) {
        triggerPopup();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // If page is already scrolled down on load/refresh, trigger immediately
    if (window.scrollY > 30) {
      triggerPopup();
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    // 4. Fallback: If customer stays on the site for 5 seconds without scrolling, trigger smoothly
    const fallbackTimer = setTimeout(() => {
      triggerPopup();
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fallbackTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [pathname, handleClose]);

  if (pathname !== "/") return null;

  const PANDIT_BLUR =
    "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADQAQCdASoQABAABUB8JbACdACjIfDVAAD+1qp0wy31CYNrC32qh/n51NRbbyaZKxK0kqdmuPeyKZw6ediLer/9li1TFRP9GvJh/xB94u/8AAAA";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="पंडित दीपक शर्मा स्वागत संवाद"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 pb-28 sm:pb-4 pt-4 sm:pt-4 bg-black/70 backdrop-blur-xs transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") handleClose();
      }}
    >
      {/* Main Popup Modal Card */}
      <div
        className={`relative z-10 w-full max-w-[430px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#FFF9EE] border-2 border-[#D4AF37] shadow-[0_20px_60px_-15px_rgba(90,44,24,0.4)] p-4 sm:p-5 flex flex-col transition-all duration-300 ease-out overflow-hidden max-h-[calc(100dvh-8rem)] sm:max-h-[90vh] overflow-y-auto ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0"
        }`}
      >
        {/* Top Gold Accent Strip */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#AF0807] to-[#D4AF37]" />

        {/* Header Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#EADCC7] mt-1 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#FDF3D6] px-2.5 py-1 text-[11px] font-serif font-black text-[#7A1F0D] border border-[#E8D19F] tracking-wide leading-normal">
            ॥ ॐ ह्लीं बगलामुख्यै नमः ॥
          </span>

          <button
            type="button"
            onClick={handleClose}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-100 hover:bg-[#AF0807] hover:text-white text-stone-600 transition-colors cursor-pointer border border-stone-200"
            aria-label="संवाद बंद करें"
            title="बंद करें"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Pandit Ji Profile Spotlight */}
        <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-gradient-to-r from-[#FFF7EA] to-[#FFFDF9] border border-[#EBD7B2] shadow-xs mb-3">
          <div className="relative h-15 w-15 sm:h-16 sm:w-16 rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-sm shrink-0 bg-stone-100">
            <Image
              src="/images/pandit-deepak-sharma-new-thumb.webp"
              alt="पंडित दीपक शर्मा"
              fill
              sizes="64px"
              priority
              placeholder="blur"
              blurDataURL={PANDIT_BLUR}
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B5A14] bg-[#F7E7BE] px-2 py-0.5 rounded-md border border-[#EDD59B] w-fit mb-0.5">
              <ShieldCheck className="h-3 w-3 text-[#B45309]" />
              <span>{t({ hi: "नलखेड़ा सिद्धपीठ", en: "Nalkheda Siddhapeeth" })}</span>
            </div>
            <h4 className="font-serif text-base sm:text-lg font-black text-[#3E0B02] leading-snug pt-1 pb-0.5">
              {t({
                hi: "आचार्य पं. दीपक शर्मा",
                en: "Acharya Pt. Deepak Sharma",
              })}
            </h4>
            <p className="text-xs text-[#AF0807] font-bold">
              {t({
                hi: "माँ बगलामुखी अनन्य उपासक",
                en: "Devout Maa Baglamukhi Upasak",
              })}
            </p>
            <p className="text-[11px] text-stone-500 font-medium">
              {t({
                hi: "5+ वर्ष साधना अनुभव • वेद विद्यालय प्रशिक्षित",
                en: "5+ Yrs Sadhana • Ved Vidyalaya Trained",
              })}
            </p>
          </div>
        </div>

        {/* Welcoming Guidance Message */}
        <div className="p-3.5 rounded-2xl bg-white/90 border border-[#EBD7B2] shadow-xs mb-3 space-y-1.5">
          <h3 className="font-serif text-base sm:text-lg font-black text-[#AF0807] leading-tight">
            {t({
              hi: "जय माँ बगलामुखी! सादर प्रणाम",
              en: "Jai Maa Baglamukhi! Warm Welcome",
            })}
          </h3>
          <p className="text-stone-700 text-xs sm:text-[13px] leading-relaxed">
            {t({
              hi: "जीवन में शत्रु बाधा, कोर्ट-कचहरी, व्यापारिक रुकावट या ग्रह दोष संबंधी कोई भी चिंता हो—निःसंकोच अपनी बात साझा करें। माँ पीताम्बरा की कृपा से शास्त्र सम्मत वैदिक मार्गदर्शन प्राप्त करें।",
              en: "If you are facing enemy obstacles, court issues, business hurdles or planetary doshas, feel free to share your concerns for authentic Vedic guidance.",
            })}
          </p>
        </div>

        {/* 3 Trust Points */}
        <div className="grid grid-cols-3 gap-1.5 text-center text-[10.5px] font-bold text-stone-700 mb-3.5">
          <div className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-[#FFF7EA] border border-[#EADCC7]">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-700 mb-0.5" />
            <span className="leading-tight">100% गोपनीय</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-[#FFF7EA] border border-[#EADCC7]">
            <Flame className="h-3.5 w-3.5 text-[#AF0807] mb-0.5" />
            <span className="leading-tight">वैदिक अनुष्ठान</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-[#FFF7EA] border border-[#EADCC7]">
            <CheckCircle2 className="h-3.5 w-3.5 text-green-700 mb-0.5" />
            <span className="leading-tight">सीधा मार्गदर्शन</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2 border-t border-[#EADCC7]">
          {/* Primary WhatsApp CTA */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#940706] via-[#AF0807] to-[#7A0505] hover:from-[#7A0505] hover:to-[#5A0303] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 border border-amber-300/40 cursor-pointer group active:scale-[0.99]"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#25D366] text-white shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
            </div>
            <span>
              {t({
                hi: "पंडित जी से व्हाट्सएप पर बात करें",
                en: "Connect with Pandit Ji on WhatsApp",
              })}
            </span>
          </button>

          {/* Secondary Actions (Call & Dismiss) */}
          <div className="flex items-center gap-2">
            <a
              href={getTelUrl(siteConfig.contact.phone1)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FFF7EA] hover:bg-[#FBEED7] border border-[#E5D4BC] text-[#3E0B02] font-bold text-xs transition-colors"
            >
              <PhoneCall className="h-3.5 w-3.5 text-[#AF0807]" />
              <span>
                {t({
                  hi: `सीधा कॉल करें`,
                  en: `Call Directly`,
                })}
              </span>
            </a>

            <button
              type="button"
              onClick={handleClose}
              className="py-2.5 px-3.5 text-xs text-stone-500 hover:text-stone-800 font-semibold rounded-xl hover:bg-stone-200/50 transition-colors cursor-pointer"
            >
              {t({
                hi: "दर्शन जारी रखें",
                en: "Dismiss",
              })}
            </button>
          </div>
        </div>

        {/* Auto-Dismiss Timer Progress Line */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-stone-200/50">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-[#D4AF37] to-[#AF0807] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
