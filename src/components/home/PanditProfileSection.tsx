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

interface CredentialItem {
  icon: typeof GraduationCap;
  title: TranslationPair;
  desc: TranslationPair;
  badge: TranslationPair;
  iconColor: string;
}

export default function PanditProfileSection() {
  const { t } = useLanguage();

  const credentials: CredentialItem[] = [
    {
      icon: GraduationCap,
      title: {
        hi: "वैदिक कर्मकाण्ड व संस्कृत",
        en: "Vedic Karmakand & Sanskrit",
      },
      desc: {
        hi: "महामृत्युंजय वेद विद्यालय (उज्जैन) से विधिवत कर्मकाण्ड प्रशिक्षित एवं 12वीं संस्कृत अध्ययन।",
        en: "Formally trained in Karmakand at Mahamrityunjaya Veda Vidyalaya (Ujjain) with Sanskrit studies.",
      },
      badge: {
        hi: "वैदिक दीक्षा",
        en: "Vedic Initiation",
      },
      iconColor: "text-amber-600",
    },
    {
      icon: Award,
      title: {
        hi: "श्री वशिष्ठ ज्योतिष संस्थान",
        en: "Shri Vashishtha Jyotish Sansthan",
      },
      desc: {
        hi: "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र से संबद्ध, 5+ वर्षों का गहन ज्योतिषीय व तांत्रिक अनुभव।",
        en: "Associated with Shri Vashishtha Jyotish Sansthan, 5+ years deep astrological & tantrik experience.",
      },
      badge: {
        hi: "5+ वर्ष अनुभव",
        en: "5+ Yrs Experience",
      },
      iconColor: "text-red-700",
    },
    {
      icon: Flame,
      title: {
        hi: "बगलामुखी महाहवन विशेषज्ञ",
        en: "Baglamukhi Mahahawan Specialist",
      },
      desc: {
        hi: "माँ पीताम्बरा के विशिष्ट तांत्रिक-वैदिक अनुष्ठान, शत्रु बाधा निवारण एवं संकट मोचन हवन।",
        en: "Specialized in Tantrik-Vedic Anushthan, Shatru Badha Nivaran & personal Sankalp Hawan.",
      },
      badge: {
        hi: "मुख्य साधना",
        en: "Core Sadhana",
      },
      iconColor: "text-orange-600",
    },
    {
      icon: Compass,
      title: {
        hi: "सटीक जन्म कुंडली परामर्श",
        en: "Accurate Janam Kundali Guidance",
      },
      desc: {
        hi: "ग्रह शांति, कालसर्प, पितृ दोष, मांगलिक विचार एवं व्यक्तिगत जीवन समस्याओं का शास्त्रोक्त वैदिक समाधान।",
        en: "Graha Shanti, Kaal Sarp, Pitra Dosh, Manglik Vichar & personal Vedic remedies.",
      },
      badge: {
        hi: "ज्योतिष मर्मज्ञ",
        en: "Jyotish Expert",
      },
      iconColor: "text-amber-700",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF4DE] py-12 sm:py-16 md:py-20 border-b border-[#EBD8B4] relative overflow-hidden">
      {/* Background Decorative Temple Halo Watermark */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= MOBILE HEADER ================= */}
        <div className="block lg:hidden text-left mb-6">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
              {t({
                hi: "मुख्य उपासक परिचय • नलखेड़ा सिद्धपीठ",
                en: "Chief Priest Introduction • Nalkheda Siddhapeeth",
              })}
            </span>
          </div>
          <h2 className="font-serif text-3xl font-black text-[#4A0C16] tracking-tight leading-snug pt-1">
            {t({
              hi: "आचार्य पं. दीपक शर्मा जी",
              en: "Acharya Pt. Deepak Sharma Ji",
            })}
          </h2>
          <p className="font-serif text-sm font-semibold text-[#8B0000] mt-1">
            {t({
              hi: "माँ पीताम्बरा अनन्य साधक • वैदिक कर्मकाण्ड व ज्योतिष मर्मज्ञ",
              en: "Devout Maa Pitambara Sadhak • Vedic Karmakand & Jyotish Scholar",
            })}
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: Pandit Ji Photo with Sacred Halo ================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Rotating Divine Sanskrit Halo Ring */}
              <div className="absolute -inset-2.5 rounded-[2rem] bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-70 blur-md animate-pulse" />
              
              <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden border-2 border-[#D89B18]/70 shadow-2xl bg-gradient-to-b from-[#FFFDF8] to-[#FFF3DC]">
                {/* Pandit Ji Image */}
                <Image
                  src="/images/pandit-deepak-sharma.webp"
                  alt="पंडित दीपक शर्मा - माँ बगलामुखी उपासक नलखेड़ा"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle Gradient for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A0306] via-[#1A0306]/70 to-transparent z-10" />



                {/* Bottom Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <div className="font-serif text-xl sm:text-2xl font-black text-amber-300 leading-tight">
                    {t({
                      hi: "पं. दीपक शर्मा",
                      en: "Pt. Deepak Sharma",
                    })}
                  </div>
                  <div className="text-xs text-amber-100/90 mt-0.5 font-medium">
                    {t({
                      hi: "नलखेड़ा सिद्धपीठ, आगर-मालवा (म.प्र.)",
                      en: "Nalkheda Siddhapeeth, Agar-Malwa (M.P.)",
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* Stats Counter Ribbon Under Photo */}
            <div className="mt-4 w-full max-w-[420px] grid grid-cols-2 gap-2.5">
              <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#FFFDF8] border border-[#EBD8B4] shadow-xs text-center">
                <span className="font-serif text-base sm:text-lg font-black text-[#8B0000]">{t({ hi: "शुद्ध संकल्प", en: "Pure Sankalp" })}</span>
                <span className="text-[11px] font-bold text-[#4A0C16]">{t({ hi: "व्यक्तिगत नाम-गोत्र विधान", en: "Individual Name-Gotra" })}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#FFFDF8] border border-[#EBD8B4] shadow-xs text-center">
                <span className="font-serif text-base sm:text-lg font-black text-[#D89B18]">100%</span>
                <span className="text-[11px] font-bold text-[#4A0C16]">{t({ hi: "शास्त्रोक्त वैदिक विधान", en: "Vedic Tradition" })}</span>
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
                    hi: "वैदिक आचार्य परिचय • नलखेड़ा सिद्धपीठ",
                    en: "Vedic Acharya Introduction • Nalkheda Siddhapeeth",
                  })}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-[#4A0C16] tracking-tight leading-snug pt-1 mt-1 mb-1.5">
                {t({
                  hi: "आचार्य पं. दीपक शर्मा",
                  en: "Acharya Pt. Deepak Sharma",
                })}
              </h2>
              <p className="font-serif text-base sm:text-lg font-semibold text-[#8B0000] mb-3">
                {t({
                  hi: "माँ बगलामुखी अनन्य साधक • वैदिक कर्मकाण्ड एवं ज्योतिष मर्मज्ञ",
                  en: "Devout Maa Baglamukhi Sadhak • Vedic Karmakand & Jyotish Scholar",
                })}
              </p>
            </div>

            {/* Short Engaging Bio */}
            <p className="text-[#3D1B10] text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {t({
                hi: "विश्व प्रसिद्ध माँ बगलामुखी सिद्धपीठ (नलखेड़ा) में वैदिक परंपरा अनुसार अनुष्ठान संपन्न कराने वाले पंडित दीपक शर्मा जी ने महामृत्युंजय वेद विद्यालय, उज्जैन से कर्मकाण्ड की शास्त्रीय दीक्षा प्राप्त की है। आप श्री वशिष्ठ ज्योतिष संस्थान केन्द्र से निरंतर संबद्ध होकर भक्तों को जन्मपत्रिका, ग्रह शांति, कालसर्प-मांगलिक दोष एवं शत्रु-बाधा निवारण हेतु प्रामाणिक शास्त्रोक्त मार्गदर्शन प्रदान कर रहे हैं।",
                en: "Conducting authentic Vedic & Tantrik Hawans at world-renowned Maa Baglamukhi Siddhapeeth (Nalkheda), Pandit Deepak Sharma Ji was formally initiated in Karmakand at Mahamrityunjaya Veda Vidyalaya, Ujjain. Associated with Shri Vashishtha Jyotish Sansthan, he guides devotees in Janampatrika, Graha Shanti, and authentic ritual guidance.",
              })}
            </p>

            {/* 4 Clean Credential Tiles (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-7">
              {credentials.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title.en}
                    className="relative p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] hover:border-[#D89B18] hover:shadow-md transition-colors group"
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

            {/* Action Buttons: Dual direct contact with glowing aesthetics */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#EBD8B4]">
              {/* Call Pandit Ji */}
              <a
                href="tel:+917224083313"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#8B0000] via-[#A00B1A] to-[#68060F] hover:from-[#68060F] hover:to-[#4A0C16] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-red-950/25 border border-amber-400/50 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="h-4 w-4 text-amber-300" />
                <span>
                  {t({
                    hi: "पंडित जी को कॉल करें: +91 72240 83313",
                    en: "Call Pandit Ji: +91 72240 83313",
                  })}
                </span>
              </a>

              {/* View Full Profile */}
              <Link
                href="/pandit-ji"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FFFDF8] hover:bg-amber-100/60 text-[#4A0C16] text-xs sm:text-sm font-bold border border-[#D89B18]/70 shadow-xs transition-colors group"
              >
                <span>
                  {t({
                    hi: "विस्तृत जीवन परिचय एवं सिद्धियां पढ़ें",
                    en: "Read Full Profile & Siddhis",
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
