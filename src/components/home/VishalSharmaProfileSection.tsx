"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Flame,
  ArrowRight,
  PhoneCall,
  Compass,
} from "lucide-react";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";
import { siteConfig, getTelUrl } from "@/data/siteConfig";

interface CredentialItem {
  icon: typeof GraduationCap;
  title: TranslationPair;
  desc: TranslationPair;
  badge: TranslationPair;
  iconColor: string;
}

export default function VishalSharmaProfileSection() {
  const { t } = useLanguage();

  const credentials: CredentialItem[] = [
    {
      icon: GraduationCap,
      title: {
        hi: "संस्कृत साहित्य मर्मज्ञ एवं शोध",
        en: "Sanskrit Literature & Research",
      },
      desc: {
        hi: "संस्कृत साहित्य से विधिवत M.A., B.Ed. उपाधि प्राप्त एवं वर्तमान में Ph.D. उच्च शैक्षिक शोधार्थी।",
        en: "M.A., B.Ed. in Sanskrit Literature and actively pursuing advanced Ph.D. research.",
      },
      badge: {
        hi: "M.A. • B.Ed. • Ph.D.",
        en: "Academic Excellence",
      },
      iconColor: "text-amber-700",
    },
    {
      icon: Flame,
      title: {
        hi: "10+ वर्ष गूढ़ तंत्र-साधना",
        en: "10+ Yrs Tantrik-Vedic Sadhana",
      },
      desc: {
        hi: "विगत 10 वर्षों से शीर्ष पूज्य आचार्यों के पावन सानिध्य में रहकर महाविद्याओं, कर्मकांड एवं ज्योतिष की गूढ़तम साधनाएं सिद्ध की हैं।",
        en: "Over a decade of rigorous sadhana in Mahavidyas, Shastric Karmakand, and astrology under revered Acharyas.",
      },
      badge: {
        hi: "10+ वर्ष साधना",
        en: "10+ Yrs Sadhana",
      },
      iconColor: "text-red-700",
    },
    {
      icon: Award,
      title: {
        hi: "काशी विद्वत् परिषद् सम्मान",
        en: "Kashi Vidwat Parishad Honor",
      },
      desc: {
        hi: "धर्म ज्योतिष महाकुम्भ एवं निस्वार्थ ज्योतिष सेवा हेतु 'अखिल भारतीय काशी विद्वत् परिषद्' द्वारा राष्ट्रीय स्तर पर सम्मानित।",
        en: "Prestigious national honor conferred by Akhil Bharatiya Kashi Vidwat Parishad for astrological welfare.",
      },
      badge: {
        hi: "राष्ट्रीय सम्मान",
        en: "National Award",
      },
      iconColor: "text-amber-600",
    },
    {
      icon: Compass,
      title: {
        hi: "वशिष्ठ ज्योतिष संस्थानम्",
        en: "Vashishtha Jyotish Sansthanam",
      },
      desc: {
        hi: "संस्थान के माध्यम से 12 भावों, ग्रह दोष शांति (कालसर्प, मांगलिक, पितृ) एवं जन्म पत्रिका का शास्त्रोक्त फलादेश प्रदान करते हैं।",
        en: "Providing authentic Janam Kundali diagnosis, dosha remedies (Kaal Sarp, Manglik, Pitra), and life guidance.",
      },
      badge: {
        hi: "संस्थान संस्थापक",
        en: "Sansthan Founder",
      },
      iconColor: "text-orange-700",
    },
  ];

  return (
    <section
      id="acharya-vishal-sharma-profile"
      className="w-full bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EC] to-[#FFF3DC] py-12 sm:py-16 md:py-20 border-b border-[#EBD8B4] relative overflow-hidden"
    >
      {/* Background Decorative Watermarks */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= MOBILE HEADER ================= */}
        <div className="block lg:hidden text-left mb-6">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
              {t({
                hi: "श्रद्धेय गुरुदेव परिचय • वशिष्ठ ज्योतिष संस्थानम्",
                en: "Revered Gurudev Profile • Vashishtha Jyotish Sansthanam",
              })}
            </span>
          </div>
          <h2 className="font-serif text-3xl font-black text-[#4A0C16] tracking-tight leading-snug pt-1">
            {t({
              hi: "आचार्य वशिष्ठ विशाल शर्मा",
              en: "Acharya Vashishtha Vishal Sharma",
            })}
          </h2>
          <p className="font-serif text-sm font-semibold text-[#8B0000] mt-1">
            {t({
              hi: "गुरु प्रदत्त नाम: विश्वेश्वरप्रपन्न रामानुज दास • वरिष्ठ ज्योतिषाचार्य",
              en: "Guru-Pradatta Naam: Vishveshwara Prapanna Ramanuja Das • Senior Astrologer",
            })}
          </p>
        </div>

        {/* ================= MAIN 2-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ================= LEFT COLUMN: Acharya Ji Portrait with Sacred Halo ================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px]">
              {/* Rotating Divine Sanskrit Halo Ring */}
              <div className="absolute -inset-2.5 rounded-[2rem] bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-70 blur-md animate-pulse" />

              <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden border-2 border-[#D89B18]/70 shadow-2xl bg-gradient-to-b from-[#FFFDF8] to-[#FFF3DC]">
                {/* Acharya Vishal Sharma Image */}
                <Image
                  src="/images/acharya-vashishtha-vishal-sharma.webp"
                  alt="आचार्य वशिष्ठ विशाल शर्मा - वशिष्ठ ज्योतिष संस्थानम्"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Subtle Gradient for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A0306] via-[#1A0306]/75 to-transparent z-10" />

                {/* Bottom Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <div className="font-serif text-xl sm:text-2xl font-black text-amber-300 leading-tight">
                    {t({
                      hi: "आचार्य वशिष्ठ विशाल शर्मा",
                      en: "Acharya Vashishtha Vishal Sharma",
                    })}
                  </div>
                  <div className="text-xs text-amber-100/90 mt-0.5 font-medium">
                    {t({
                      hi: "वशिष्ठ ज्योतिष संस्थानम् • काशी विद्वत् परिषद् सम्मानित",
                      en: "Vashishtha Jyotish Sansthanam • Kashi Vidwat Parishad Honored",
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Counter Ribbon Under Photo */}
            <div className="mt-4 w-full max-w-[420px] grid grid-cols-2 gap-2.5">
              <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#FFFDF8] border border-[#EBD8B4] shadow-xs text-center">
                <span className="font-serif text-base sm:text-lg font-black text-[#8B0000]">
                  {t({ hi: "10+ वर्ष", en: "10+ Years" })}
                </span>
                <span className="text-[11px] font-bold text-[#4A0C16]">
                  {t({ hi: "गूढ़ तांत्रिक-वैदिक साधना", en: "Vedic & Tantrik Sadhana" })}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#FFFDF8] border border-[#EBD8B4] shadow-xs text-center">
                <span className="font-serif text-base sm:text-lg font-black text-[#D89B18]">
                  {t({ hi: "काशी विद्वत् परिषद्", en: "Vidwat Parishad" })}
                </span>
                <span className="text-[11px] font-bold text-[#4A0C16]">
                  {t({ hi: "राष्ट्रीय स्तर पर सम्मानित", en: "Nationally Honored" })}
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Profile Overview Details ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Desktop Header */}
            <div className="hidden lg:block text-left mb-3">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
                  {t({
                    hi: "श्रद्धेय गुरुदेव परिचय • वशिष्ठ ज्योतिष संस्थानम्",
                    en: "Revered Gurudev Profile • Vashishtha Jyotish Sansthanam",
                  })}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-[#4A0C16] tracking-tight leading-snug pt-1 mt-1 mb-1.5">
                {t({
                  hi: "आचार्य वशिष्ठ विशाल शर्मा",
                  en: "Acharya Vashishtha Vishal Sharma",
                })}
              </h2>
              <p className="font-serif text-base sm:text-lg font-semibold text-[#8B0000] mb-3">
                {t({
                  hi: "गुरु प्रदत्त नाम: विश्वेश्वरप्रपन्न रामानुज दास • वरिष्ठ ज्योतिषाचार्य",
                  en: "Guru-Pradatta Naam: Vishveshwara Prapanna Ramanuja Das • Senior Astrologer",
                })}
              </p>
            </div>

            {/* Engaging Bio */}
            <p className="text-[#3D1B10] text-sm sm:text-base leading-relaxed mb-6 font-normal text-left">
              {t({
                hi: "वशिष्ठ ज्योतिष संस्थानम् के संस्थापक एवं पूज्य गुरुदेव आचार्य वशिष्ठ विशाल शर्मा जी (गुरु प्रदत्त नाम: विश्वेश्वरप्रपन्न रामानुज दास) संस्कृत साहित्य से M.A., B.Ed. उपाधि प्राप्त एवं वर्तमान में Ph.D. शोधार्थी हैं। विगत 10 वर्षों से शीर्ष पूज्य आचार्यों के पावन सानिध्य में रहकर आपने वैदिक ज्योतिष, कर्मकांड एवं महाविद्याओं की गूढ़तम साधनाएं सिद्ध की हैं। ज्योतिष सेवा एवं शास्त्रोक्त अनुसंधान हेतु आप 'अखिल भारतीय काशी विद्वत् परिषद्' से सम्मानित हैं और भक्तों को जन्म पत्रिका फलादेश व सम्पूर्ण जीवन विश्लेषण द्वारा कल्याणकारी मार्गदर्शन प्रदान करते हैं।",
                en: "Founder of Vashishtha Jyotish Sansthanam, Acharya Vashishtha Vishal Sharma Ji (Guru-Pradatta name: Vishveshwara Prapanna Ramanuja Das) holds M.A. and B.Ed. in Sanskrit Literature and is actively pursuing Ph.D. research. Having spent over 10 years undergoing rigorous discipline in Vedic Astrology, Karmakand, and Mahavidyas under supreme Acharyas, he is nationally honored by Akhil Bharatiya Kashi Vidwat Parishad.",
              })}
            </p>

            {/* 4 Clean Credential Tiles (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-7">
              {credentials.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title.en}
                    className="relative p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] hover:border-[#D89B18] hover:shadow-md transition-colors group text-left"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-200/60 border border-amber-300/80 shadow-2xs group-hover:scale-105 transition-transform">
                          <Icon className={`h-4 w-4 ${item.iconColor}`} />
                        </div>
                        <span className="font-serif text-sm font-bold text-[#4A0C16]">
                          {t(item.title)}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-[#78350F] bg-amber-500/15 rounded-md px-2 py-0.5 border border-amber-500/30">
                        {t(item.badge)}
                      </span>
                    </div>
                    <p className="text-[12px] text-stone-700 leading-normal pl-10 font-normal">
                      {t(item.desc)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons: Call Guru Ji & View Profile */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#EBD8B4]">
              {/* Call Guru Ji Helpline */}
              <a
                href={getTelUrl("kundali")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#8B0000] via-[#A00B1A] to-[#68060F] hover:from-[#68060F] hover:to-[#4A0C16] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-red-950/25 border border-amber-400/50 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="h-4 w-4 text-amber-300" />
                <span>
                  {t({
                    hi: `गुरुदेव को कॉल करें: ${siteConfig.contact.kundaliPhoneFormatted}`,
                    en: `Call Gurudev: ${siteConfig.contact.kundaliPhoneFormatted}`,
                  })}
                </span>
              </a>

              {/* View Full Profile */}
              <Link
                href="/vishal-ji"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FFFDF8] hover:bg-amber-100/60 text-[#4A0C16] text-xs sm:text-sm font-bold border border-[#D89B18]/70 shadow-xs transition-colors group"
              >
                <span>
                  {t({
                    hi: "विस्तृत जीवन परिचय व ज्योतिष पीठ पढ़ें",
                    en: "Read Full Profile & Jyotish Peeth",
                  })}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#8B0000]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
