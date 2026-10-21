"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  MessageCircle,
  Award,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PanditHero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF8F5] pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-stone-200/80 overflow-hidden">
      {/* Decorative Sacred Background Accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-red-100/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Divine Micro-Ribbon */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-6 font-medium">
          <Link href="/" className="hover:text-[#AF0807] transition-colors">
            {t({ hi: "मुख्य पृष्ठ", en: "Home" })}
          </Link>
          <span>/</span>
          <span className="text-[#AF0807] font-semibold">
            {t({ hi: "पंडित दीपक शर्मा", en: "Pandit Deepak Sharma" })}
          </span>
          <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            {t({
              hi: "माँ बगलामुखी सिद्धपीठ नलखेड़ा • अधिकृत वैदिक पुरोहित",
              en: "Maa Baglamukhi Siddhapeeth Nalkheda • Authorized Vedic Purohit",
            })}
          </span>
        </div>

        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: Authentic Portrait Card ================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_12px_40px_-6px_rgba(217,119,6,0.18)] bg-gradient-to-b from-amber-100 to-stone-100 transition-all duration-300">
              
              {/* Pandit Ji Real Image */}
              <Image
                src="/images/pandit-deepak-sharma.jpg"
                alt="पंडित दीपक शर्मा - माँ बगलामुखी अनन्य साधक, नलखेड़ा"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Gradient Scrim for readable badges */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md border border-amber-400/80 px-3.5 py-1 text-xs font-bold text-amber-300 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{t({ hi: "माँ बगलामुखी अनन्य साधक", en: "Maa Baglamukhi Devout Sadhak" })}</span>
              </div>

              {/* Verified Experience Badge */}
              <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-xl bg-[#AF0807] px-3 py-1 text-xs font-bold text-white shadow-md border border-red-300/40">
                <Award className="h-3.5 w-3.5" />
                <span>{t({ hi: "5+ वर्ष सिद्धपीठ साधना", en: "5+ Yrs Siddhapeeth Sadhana" })}</span>
              </div>

              {/* Bottom Identification */}
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <div className="font-serif text-xl sm:text-2xl font-black text-amber-200 leading-tight">
                  {t({ hi: "पंडित दीपक शर्मा", en: "Pandit Deepak Sharma" })}
                </div>
                <div className="text-xs text-stone-200 mt-1 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                  <span>{t({ hi: "माँ बगलामुखी मंदिर, नलखेड़ा, आगर-मालवा (म.प्र.)", en: "Maa Baglamukhi Mandir, Nalkheda, Agar-Malwa (M.P.)" })}</span>
                </div>
              </div>
            </div>

            {/* Quick Trust Badges below photo */}
            <div className="w-full max-w-[420px] mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-stone-700">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-300/80 shadow-2xs">
                <CheckCircle2 className="h-4 w-4 text-[#AF0807] shrink-0" />
                <span className="truncate">{t({ hi: "उज्जैन वेद विद्यालय दीक्षित", en: "Ujjain Veda Vidyalaya Alumnus" })}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-300/80 shadow-2xs">
                <ShieldCheck className="h-4 w-4 text-[#AF0807] shrink-0" />
                <span className="truncate">{t({ hi: "100% शास्त्रोक्त संकल्प", en: "100% Shastrokta Sankalp" })}</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Bio, Lineage, Credentials & CTA ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Sacred Accent Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
                {t({
                  hi: "वैदिक कर्मकाण्ड व ज्योतिष मर्मज्ञ • नलखेड़ा सिद्धपीठ",
                  en: "Vedic Karmakand & Jyotish Scholar • Nalkheda Siddhapeeth",
                })}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#3E0B02] tracking-tight leading-tight">
              {t({ hi: "पंडित दीपक शर्मा", en: "Pandit Deepak Sharma" })}
            </h1>
            
            <p className="font-serif text-base sm:text-lg font-bold text-[#AF0807] mt-1.5 mb-4">
              {t({
                hi: "माँ बगलामुखी अनन्य उपासक • विशिष्ट तांत्रिक-वैदिक महाहवन एवं ज्योतिष यज्ञाचार्य",
                en: "Maa Baglamukhi Devout Upasak • Tantric-Vedic Mahahawan & Jyotish Yagyacharya",
              })}
            </p>

            <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed mb-5">
              {t({
                hi: "विश्व के एकमात्र स्वयंभू त्रिमुखी माँ बगलामुखी सिद्धपीठ (नलखेड़ा, लखुंदर नदी तट) में वैदिक मर्यादा एवं शास्त्रोक्त तांत्रिक पद्धति से अनुष्ठान संपन्न कराने वाले पंडित दीपक शर्मा जी को कर्मकाण्ड की प्रामाणिक दीक्षा महामृत्युंजय वेद विद्यालय, उज्जैन से प्राप्त हुई है। आप श्री वशिष्ठ ज्योतिष संस्थान केन्द्र से संबद्ध होकर 5+ वर्षों से अधिक समय से देश-विदेश के यजमानों को शत्रु बाधा निवारण, न्यायालय विजय, अखंड महामंत्र जाप एवं ग्रह शांति हेतु सफल आध्यात्मिक मार्गदर्शन प्रदान कर रहे हैं।",
                en: "Performing sacred Vedic-Tantric anushthans at the world-renowned Swayambhu Trimukhi Maa Baglamukhi Siddhapeeth (Nalkheda, Lakhundar riverbank), Pandit Deepak Sharma Ji received authentic Karmakand diksha from Mahamrityunjay Veda Vidyalaya, Ujjain. Affiliated with Shri Vashishtha Jyotish Sansthan, he has been guiding devotees globally for 5+ years in Shatru Badha Nivaran, Court Case Vijay, Sawa Lakh Jaap, and Kundali Grah Shanti.",
              })}
            </p>

            {/* 3 Key Authentic Strengths */}
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-[#AF0807] shrink-0 mt-0.5" />
                <span>
                  <strong>{t({ hi: "शुद्ध सात्विक तांत्रिक विधान: ", en: "100% Sattvic Tantric Vidhi: " })}</strong>
                  {t({
                    hi: "माँ पीताम्बरा के विशिष्ट पीले वस्त्र, हल्दी माला, पीत पुष्प एवं शुद्ध गो-घृत से शास्त्रोक्त आहुतियां।",
                    en: "Sacred Peetambara ahutis with yellow vastra, turmeric mala, yellow flowers, and pure cow ghee.",
                  })}
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-[#AF0807] shrink-0 mt-0.5" />
                <span>
                  <strong>{t({ hi: "पारदर्शी संकल्प पद्धति: ", en: "Transparent Sankalp Process: " })}</strong>
                  {t({
                    hi: "यजमान के नाम, गोत्र, नक्षत्र व स्थान का स्पष्ट संकल्प—व्यक्तिगत उपस्थिति अथवा लाइव वीडियो कॉल दर्शन।",
                    en: "Direct personal Sankalp with Yajman's name, Gotra, and Nakshatra—in-person or via Live Video Call.",
                  })}
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-[#AF0807] shrink-0 mt-0.5" />
                <span>
                  <strong>{t({ hi: "अभिमंत्रित रक्षा सूत्र व भस्म: ", en: "Abhimantrit Raksha Sutra & Bhasma: " })}</strong>
                  {t({
                    hi: "अनुष्ठान उपरांत सिद्ध पीताम्बरा रक्षा सूत्र, भस्म व प्रसाद डाक/कूरियर द्वारा घर तक प्रेषित।",
                    en: "Energized Peetambara Raksha Sutra, Siddha Bhasma, and Prasad dispatched via Speed Post.",
                  })}
                </span>
              </div>
            </div>

            {/* Direct Contact & WhatsApp Consultation CTA */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-stone-200">
              <a
                href="https://wa.me/917726815642?text=%E0%A4%9C%E0%A4%AF%20%E0%A4%AE%E0%A4%BE%E0%A4%81%20%E0%A4%AC%E0%A4%97%E0%A4%B2%E0%A4%BE%E0%A4%AE%E0%A4%81%E0%A4%96%E0%A4%B0!%20%E0%A4%AA%E0%A4%82%E0%A4%A1%E0%A4%BF%E0%A4%A4%20%E0%A4%A6%E0%A4%80%E0%A4%AA%E0%A4%95%20%E0%A4%B6%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%BE%20%E0%A4%9C%E0%A4%80%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%86%E0%A4%AA%E0%A4%B8%E0%A5%87%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20/%20%E0%A4%B9%E0%A4%B5%E0%A4%A8%20/%20%E0%A4%95%E0%A5%81%E0%A4%82%E0%A4%A1%E0%A4%B2%E0%A5%80%20%E0%A4%AA%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A5%8D%E0%A4%B6%20%E0%A4%B9%E0%A5%87%E0%A4%A4%E0%A5%81%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4 text-amber-300" />
                <span>{t({ hi: "पंडित जी से व्हाट्सएप पर परामर्श लें", en: "Consult Pandit Ji on WhatsApp" })}</span>
              </a>

              <a
                href="tel:+917726815642"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-amber-50 text-[#3E0B02] hover:text-[#AF0807] text-xs sm:text-sm font-bold border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-sm transition-all"
              >
                <PhoneCall className="h-4 w-4 text-[#AF0807]" />
                <span>{t({ hi: "सीधा कॉल: +91 77268 15642", en: "Direct Call: +91 77268 15642" })}</span>
              </a>
            </div>

          </div>

        </div>

        {/* 4 Trust Metrics Bar */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="rounded-2xl bg-white border-y-0 border-x-2 border-amber-400 shadow-[0_4px_20px_-4px_rgba(217,119,6,0.1)] p-4 text-center">
            <div className="font-serif text-2xl sm:text-3xl font-black text-[#AF0807]">
              2100+
            </div>
            <div className="text-xs font-semibold text-stone-600 mt-1">
              {t({ hi: "सफल महाहवन व अनुष्ठान", en: "Successful Mahahawans & Pujas" })}
            </div>
          </div>

          <div className="rounded-2xl bg-white border-y-0 border-x-2 border-amber-400 shadow-[0_4px_20px_-4px_rgba(217,119,6,0.1)] p-4 text-center">
            <div className="font-serif text-2xl sm:text-3xl font-black text-[#AF0807]">
              5+ {t({ hi: "वर्ष", en: "Years" })}
            </div>
            <div className="text-xs font-semibold text-stone-600 mt-1">
              {t({ hi: "नलखेड़ा सिद्धपीठ साधना अनुभव", en: "Nalkheda Siddhapeeth Experience" })}
            </div>
          </div>

          <div className="rounded-2xl bg-white border-y-0 border-x-2 border-amber-400 shadow-[0_4px_20px_-4px_rgba(217,119,6,0.1)] p-4 text-center">
            <div className="font-serif text-2xl sm:text-3xl font-black text-[#AF0807]">
              100%
            </div>
            <div className="text-xs font-semibold text-stone-600 mt-1">
              {t({ hi: "शास्त्रोक्त तांत्रिक-वैदिक विधि", en: "Authentic Vedic-Tantric Vidhi" })}
            </div>
          </div>

          <div className="rounded-2xl bg-white border-y-0 border-x-2 border-amber-400 shadow-[0_4px_20px_-4px_rgba(217,119,6,0.1)] p-4 text-center">
            <div className="font-serif text-2xl sm:text-3xl font-black text-[#AF0807]">
              {t({ hi: "देश-विदेश", en: "Worldwide" })}
            </div>
            <div className="text-xs font-semibold text-stone-600 mt-1">
              {t({ hi: "लाइव वीडियो संकल्प व डाक सेवा", en: "Live Video Sankalp & Post Service" })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
