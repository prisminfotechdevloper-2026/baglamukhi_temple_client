"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactHero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[52vh] min-h-[420px] sm:min-h-[460px] max-h-[560px] pb-5 sm:pb-6 flex items-center overflow-hidden bg-stone-900">
      {/* ================= BACKGROUND: USER-PROVIDED TEMPLE IMAGE WITH SOFT MILD DARK OVERLAY ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/baglamukhi-mandir-real.png"
          alt="माँ बगलामुखी मंदिर नलखेड़ा सिंह द्वार एवं शिखर"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft, reduced dark overlay so the colorful temple entrance is bright & clearly visible */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15 pointer-events-none" />
      </div>

      {/* ================= CONTENT: LEFT-ALIGNED TEXT FORMAT (NO WHITE CARD) ================= */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-left flex flex-col items-start justify-center">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-200 mb-2.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
        >
          <Link href="/" className="hover:text-white transition-colors">
            {t({ hi: "मुख्य पृष्ठ", en: "Home" })}
          </Link>
          <span className="text-amber-400 font-bold">/</span>
          <span className="text-white font-bold">{t({ hi: "संपर्क एवं मंदिर मार्गदर्शन", en: "Contact & Temple Guidance" })}</span>
        </nav>

        {/* Sacred Temple Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-amber-400/70 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-md shadow-md">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span>{t({ hi: "श्री माँ बगलामुखी सिद्धपीठ • नलखेड़ा धाम", en: "Shri Maa Baglamukhi Siddhapeeth • Nalkheda Dham" })}</span>
        </div>

        {/* Main Heading - Left Aligned Bold */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] max-w-3xl">
          {t({ hi: "संपर्क एवं अनुष्ठान परामर्श", en: "Contact & Puja Consultation" })}
        </h1>

        {/* Subtitle Paragraph */}
        <p className="mt-3 text-xs sm:text-sm md:text-base text-stone-100 font-medium max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          {t({
            hi: "माँ पीताम्बरा बगलामुखी जी के पावन सिद्धपीठ में विशेष महाहवन, शत्रु बाधा निवारण एवं जन्म कुंडली ज्योतिषीय मार्गदर्शन हेतु मुख्य पुजारी पंडित दीपक शर्मा जी से सीधे संपर्क करें।",
            en: "For sacred Mahahawan, Shatru Badha Nivaran, and Kundali astrological guidance at the holy Maa Peetambara Baglamukhi Siddhapeeth, contact chief purohit Pandit Deepak Sharma Ji directly.",
          })}
        </p>

        {/* Quick Action CTAs (Left-aligned) */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href="tel:+918239239249"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-xs sm:text-sm font-bold shadow-2xl border border-amber-400/60 hover:border-amber-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <PhoneCall className="h-4 w-4 text-amber-300" />
            <span>{t({ hi: "सीधा फोन करें (+91 82392 39249)", en: "Call Directly (+91 82392 39249)" })}</span>
          </a>

          <a
            href="https://wa.me/918239239249?text=जय%20माँ%20बगलामुखी!%20पंडित%20दीपक%20शर्मा%20जी%2C%20मुझे%20पूजा%20व%20परामर्श%20के%20बारे%20में%20जानकारी%20चाहिए।"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-amber-200 text-xs sm:text-sm font-bold border-2 border-amber-400 backdrop-blur-md shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <MessageCircle className="h-4 w-4 text-amber-300" />
            <span>{t({ hi: "व्हाट्सएप पर मार्गदर्शन लें", en: "Guidance on WhatsApp" })}</span>
          </a>
        </div>
      </div>
    </section>
  );
}



