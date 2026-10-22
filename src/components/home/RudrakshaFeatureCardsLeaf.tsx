"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function RudrakshaFeatureCardsLeaf() {
  const [rudrakshaOpen, setRudrakshaOpen] = useState(false);
  const [ratnaOpen, setRatnaOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
      {/* ========================================================= */}
      {/* ============ CARD 1: RUDRAKSHA FEATURE CARD ============ */}
      {/* ========================================================= */}
      <article className="group relative rounded-3xl border border-[#EADCC7] bg-[#FBF7EE] shadow-[0_4px_20px_rgba(90,44,24,0.04)] hover:border-[#D4AF37] hover:shadow-[0_8px_30px_rgba(90,44,24,0.08)] transition-[border-color,box-shadow] overflow-hidden">
        {/* ============ DESKTOP VIEW (lg:flex side-by-side) ============ */}
        <div className="hidden lg:flex items-center gap-6 p-6">
          {/* Top-Right Quick Redirect Arrow Button (Desktop) */}
          <Link
            href="/rudraksha"
            aria-label={t({
              hi: "रुद्राक्ष पेज पर जाएं",
              en: "Go to Rudraksha page",
            })}
            title={t({
              hi: "रुद्राक्ष पेज पर जाएं",
              en: "Go to Rudraksha page",
            })}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#5A2C18]/10 hover:bg-[#5A2C18] text-[#5A2C18] hover:text-[#FFF9EE] border border-[#E5D4BC] hover:border-transparent transition-[color,background-color,border-color,transform] duration-300 cursor-pointer group/desktop-arrow"
          >
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/desktop-arrow:translate-x-0.5 group-hover/desktop-arrow:-translate-y-0.5" />
          </Link>

          {/* Left Image Box */}
          <div className="relative h-48 w-48 xl:h-52 xl:w-52 shrink-0 rounded-2xl overflow-hidden border border-[#E5D4BC] shadow-xs bg-stone-100">
            <Image
              src="/images/rudraksha-feature.jpg"
              alt="रुद्राक्ष - आध्यात्मिक शांति एवं मानसिक संतुलन"
              fill
              sizes="208px"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Right Text Content */}
          <div className="flex flex-1 flex-col justify-center min-w-0">
            {/* Badge */}
            <div className="w-fit">
              <span className="inline-block rounded-md bg-[#F7E7BE]/90 px-2.5 py-1 text-[11px] font-bold text-[#8B5A14] tracking-wide border border-[#EDD59B]">
                आध्यात्मिक शक्ति
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="mt-2 font-serif text-2xl font-black text-[#3B1E08] leading-tight tracking-tight">
              Rudraksha
            </h3>
            <p className="font-serif text-lg font-bold text-[#3B1E08] leading-snug">
              रुद्राक्ष
            </p>

            {/* Description (Always Hindi as requested) */}
            <p className="mt-2 text-xs xl:text-[13px] text-[#6B5A52] leading-relaxed line-clamp-3">
              रुद्राक्ष शिव का पवित्र प्रतीक माना जाता है। यह आध्यात्मिक शांति, मानसिक संतुलन और सकारात्मक ऊर्जा प्रदान करने में सहायक माना जाता है।
            </p>

            {/* Button */}
            <div className="mt-4">
              <Link
                href="/rudraksha"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5A2C18] hover:bg-[#431F10] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#FFF9EE] transition-colors shadow-xs group-hover:shadow-md cursor-pointer"
              >
                <span>{t({ hi: "रुद्राक्ष कलेक्शन देखें", en: "View Rudraksha Collection" })}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ============ MOBILE VIEW (Enlarged Image + Interactive Slide-in Content Panel) ============ */}
        <div className="block lg:hidden relative h-[360px] xs:h-[390px] sm:h-[420px] w-full overflow-hidden">
          {/* 1. Large High-Resolution Dominant Image */}
          <Image
            src="/images/rudraksha-feature.jpg"
            alt="रुद्राक्ष - आध्यात्मिक शांति एवं मानसिक संतुलन"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover transition-transform duration-700 ease-out"
            priority={false}
          />

          {/* Gradient Scrim at bottom to give depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

          {/* Top-Right Direct Page Redirect Button (↗ Arrow) */}
          <Link
            href="/rudraksha"
            aria-label={t({
              hi: "रुद्राक्ष कलेक्शन पेज पर जाएं",
              en: "Go to Rudraksha collection page",
            })}
            className={`absolute top-4 right-4 z-20 flex h-11 w-11 xs:h-12 xs:w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-md border border-white/30 hover:bg-white/90 hover:text-[#5A2C18] hover:border-white/60 active:scale-95 transition-[transform,background-color,color,border-color,opacity] duration-300 cursor-pointer group/arrow ${
              rudrakshaOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5" />
          </Link>

          {/* Default Overlay State on Image: Badge & Title */}
          <div className="absolute bottom-4 left-4 right-18 z-10 text-white">
            <span className="inline-block rounded-md bg-[#F7E7BE] px-2.5 py-0.5 text-[10.5px] font-bold text-[#8B5A14] shadow-xs mb-1.5 border border-[#EDD59B]">
              आध्यात्मिक शक्ति
            </span>
            <h3 className="font-serif text-2xl font-black text-white leading-tight drop-shadow-md">
              Rudraksha
            </h3>
            <p className="font-serif text-base font-bold text-amber-200 drop-shadow-md">
              रुद्राक्ष
            </p>
          </div>

          {/* Floating Bottom-Right Arrow Button to slide in content (points left to pull content in) */}
          <button
            type="button"
            onClick={() => setRudrakshaOpen(true)}
            aria-label={t({
              hi: "रुद्राक्ष विवरण एवं कलेक्शन लिंक देखें",
              en: "View Rudraksha details and collection",
            })}
            aria-expanded={rudrakshaOpen}
            className={`absolute bottom-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5A2C18] text-[#FFF9EE] shadow-lg border border-amber-300/40 hover:bg-[#431F10] active:scale-95 transition-[transform,background-color] cursor-pointer ${
              rudrakshaOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* 2. Slide-In Content Drawer Panel (Slides Right-to-Left) */}
          <div
            className={`absolute inset-0 z-30 flex flex-col justify-between p-5 xs:p-6 bg-[#FBF7EE]/95 backdrop-blur-md border border-[#EADCC7] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              rudrakshaOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Top Bar with Reverse / Close Button */}
            <div className="flex items-center justify-between pb-2 border-b border-[#E8D9C5]">
              <span className="inline-block rounded-md bg-[#F7E7BE]/90 px-2.5 py-1 text-[11px] font-bold text-[#8B5A14] border border-[#EDD59B]">
                आध्यात्मिक शक्ति
              </span>

              {/* Reverse Hide Button (points right to slide panel back out) */}
              <button
                type="button"
                onClick={() => setRudrakshaOpen(false)}
                aria-label={t({ hi: "विवरण बंद करें", en: "Close details" })}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#5A2C18]/10 hover:bg-[#5A2C18]/20 px-3 py-1.5 text-xs font-bold text-[#5A2C18] transition-colors cursor-pointer"
              >
                <span>{t({ hi: "वापस", en: "Back" })}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Middle Content */}
            <div className="my-auto py-2">
              <h3 className="font-serif text-2xl font-black text-[#3B1E08] leading-tight">
                Rudraksha
              </h3>
              <p className="font-serif text-lg font-bold text-[#3B1E08] leading-snug">
                रुद्राक्ष
              </p>
              {/* Description (Always Hindi as requested) */}
              <p className="mt-2.5 text-xs xs:text-sm text-[#6B5A52] leading-relaxed">
                रुद्राक्ष शिव का पवित्र प्रतीक माना जाता है। यह आध्यात्मिक शांति, मानसिक संतुलन और सकारात्मक ऊर्जा प्रदान करने में सहायक माना जाता है।
              </p>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-2">
              <Link
                href="/rudraksha"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#5A2C18] hover:bg-[#431F10] px-5 py-3 text-sm font-bold text-[#FFF9EE] transition-colors shadow-md cursor-pointer"
              >
                <span>{t({ hi: "रुद्राक्ष कलेक्शन देखें", en: "View Rudraksha Collection" })}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* ========================================================= */}
      {/* ============ CARD 2: RATNA FEATURE CARD ============ */}
      {/* ========================================================= */}
      <article className="group relative rounded-3xl border border-[#EADCC7] bg-[#FBF7EE] shadow-[0_4px_20px_rgba(90,44,24,0.04)] hover:border-[#D4AF37] hover:shadow-[0_8px_30px_rgba(90,44,24,0.08)] transition-[border-color,box-shadow] overflow-hidden">
        {/* ============ DESKTOP VIEW (lg:flex side-by-side) ============ */}
        <div className="hidden lg:flex items-center gap-6 p-6">
          {/* Top-Right Quick Redirect Arrow Button (Desktop) */}
          <Link
            href="/ratna"
            aria-label={t({
              hi: "रत्न पेज पर जाएं",
              en: "Go to Gemstones page",
            })}
            title={t({
              hi: "रत्न पेज पर जाएं",
              en: "Go to Gemstones page",
            })}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#5A2C18]/10 hover:bg-[#5A2C18] text-[#5A2C18] hover:text-[#FFF9EE] border border-[#E5D4BC] hover:border-transparent transition-[color,background-color,border-color,transform] duration-300 cursor-pointer group/desktop-arrow"
          >
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/desktop-arrow:translate-x-0.5 group-hover/desktop-arrow:-translate-y-0.5" />
          </Link>

          {/* Left Image Box */}
          <div className="relative h-48 w-48 xl:h-52 xl:w-52 shrink-0 rounded-2xl overflow-hidden border border-[#E5D4BC] shadow-xs bg-stone-100">
            <Image
              src="/images/gemstones-feature.jpg"
              alt="रत्न (नवरत्न) - ग्रहों का संतुलन एवं सकारात्मक ऊर्जा"
              fill
              sizes="208px"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Right Text Content */}
          <div className="flex flex-1 flex-col justify-center min-w-0">
            {/* Badge */}
            <div className="w-fit">
              <span className="inline-block rounded-md bg-[#F7E7BE]/90 px-2.5 py-1 text-[11px] font-bold text-[#8B5A14] tracking-wide border border-[#EDD59B]">
                नवग्रहों की कृपा
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="mt-2 font-serif text-2xl font-black text-[#3B1E08] leading-tight tracking-tight">
              Ratna (Gemstones)
            </h3>
            <p className="font-serif text-lg font-bold text-[#3B1E08] leading-snug">
              रत्न (नवरत्न)
            </p>

            {/* Description (Always Hindi as requested) */}
            <p className="mt-2 text-xs xl:text-[13px] text-[#6B5A52] leading-relaxed line-clamp-3">
              ज्योतिष में रत्नों का उपयोग ग्रहों के संतुलन और सकारात्मक ऊर्जा के लिए किया जाता है। यहाँ सभी प्रकार के प्रमुख रत्न उपलब्ध हैं।
            </p>

            {/* Button */}
            <div className="mt-4">
              <Link
                href="/ratna"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5A2C18] hover:bg-[#431F10] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#FFF9EE] transition-colors shadow-xs group-hover:shadow-md cursor-pointer"
              >
                <span>{t({ hi: "रत्न कलेक्शन देखें", en: "View Gemstone Collection" })}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ============ MOBILE VIEW (Enlarged Image + Interactive Slide-in Content Panel) ============ */}
        <div className="block lg:hidden relative h-[360px] xs:h-[390px] sm:h-[420px] w-full overflow-hidden">
          {/* 1. Large High-Resolution Dominant Image */}
          <Image
            src="/images/gemstones-feature.jpg"
            alt="रत्न (नवरत्न) - ग्रहों का संतुलन एवं सकारात्मक ऊर्जा"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover transition-transform duration-700 ease-out"
            priority={false}
          />

          {/* Gradient Scrim at bottom to give depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

          {/* Top-Right Direct Page Redirect Button (↗ Arrow) */}
          <Link
            href="/ratna"
            aria-label={t({
              hi: "रत्न कलेक्शन पेज पर जाएं",
              en: "Go to Gemstones collection page",
            })}
            className={`absolute top-4 right-4 z-20 flex h-11 w-11 xs:h-12 xs:w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-md border border-white/30 hover:bg-white/90 hover:text-[#5A2C18] hover:border-white/60 active:scale-95 transition-[transform,background-color,color,border-color,opacity] duration-300 cursor-pointer group/arrow ${
              ratnaOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5" />
          </Link>

          {/* Default Overlay State on Image: Badge & Title */}
          <div className="absolute bottom-4 left-4 right-18 z-10 text-white">
            <span className="inline-block rounded-md bg-[#F7E7BE] px-2.5 py-0.5 text-[10.5px] font-bold text-[#8B5A14] shadow-xs mb-1.5 border border-[#EDD59B]">
              नवग्रहों की कृपा
            </span>
            <h3 className="font-serif text-2xl font-black text-white leading-tight drop-shadow-md">
              Ratna (Gemstones)
            </h3>
            <p className="font-serif text-base font-bold text-amber-200 drop-shadow-md">
              रत्न (नवरत्न)
            </p>
          </div>

          {/* Floating Bottom-Right Arrow Button to slide in content (points left to pull content in) */}
          <button
            type="button"
            onClick={() => setRatnaOpen(true)}
            aria-label={t({
              hi: "रत्न विवरण एवं कलेक्शन लिंक देखें",
              en: "View Gemstones details and collection",
            })}
            aria-expanded={ratnaOpen}
            className={`absolute bottom-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5A2C18] text-[#FFF9EE] shadow-lg border border-amber-300/40 hover:bg-[#431F10] active:scale-95 transition-[transform,background-color] cursor-pointer ${
              ratnaOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* 2. Slide-In Content Drawer Panel (Slides Right-to-Left) */}
          <div
            className={`absolute inset-0 z-30 flex flex-col justify-between p-5 xs:p-6 bg-[#FBF7EE]/95 backdrop-blur-md border border-[#EADCC7] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              ratnaOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Top Bar with Reverse / Close Button */}
            <div className="flex items-center justify-between pb-2 border-b border-[#E8D9C5]">
              <span className="inline-block rounded-md bg-[#F7E7BE]/90 px-2.5 py-1 text-[11px] font-bold text-[#8B5A14] border border-[#EDD59B]">
                नवग्रहों की कृपा
              </span>

              {/* Reverse Hide Button (points right to slide panel back out) */}
              <button
                type="button"
                onClick={() => setRatnaOpen(false)}
                aria-label={t({ hi: "विवरण बंद करें", en: "Close details" })}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#5A2C18]/10 hover:bg-[#5A2C18]/20 px-3 py-1.5 text-xs font-bold text-[#5A2C18] transition-colors cursor-pointer"
              >
                <span>{t({ hi: "वापस", en: "Back" })}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Middle Content */}
            <div className="my-auto py-2">
              <h3 className="font-serif text-2xl font-black text-[#3B1E08] leading-tight">
                Ratna (Gemstones)
              </h3>
              <p className="font-serif text-lg font-bold text-[#3B1E08] leading-snug">
                रत्न (नवरत्न)
              </p>
              {/* Description (Always Hindi as requested) */}
              <p className="mt-2.5 text-xs xs:text-sm text-[#6B5A52] leading-relaxed">
                ज्योतिष में रत्नों का उपयोग ग्रहों के संतुलन और सकारात्मक ऊर्जा के लिए किया जाता है। यहाँ सभी प्रकार के प्रमुख रत्न उपलब्ध हैं।
              </p>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-2">
              <Link
                href="/ratna"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#5A2C18] hover:bg-[#431F10] px-5 py-3 text-sm font-bold text-[#FFF9EE] transition-colors shadow-md cursor-pointer"
              >
                <span>{t({ hi: "रत्न कलेक्शन देखें", en: "View Gemstone Collection" })}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
