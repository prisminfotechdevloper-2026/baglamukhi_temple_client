import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Flame,
  PhoneCall,
  Compass,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  BookOpen,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata: Metadata = {
  title:
    "पं. पवन शर्मा (Pandit Pawan Sharma) | माँ बगलामुखी सिद्धपीठ नलखेड़ा - यज्ञाचार्य परिचय",
  description:
    "माँ बगलामुखी सिद्धपीठ नलखेड़ा में पूज्य यज्ञाचार्य पंडित पवन शर्मा जी का परिचय, उज्जैन वेद विद्यालय दीक्षा, 7+ वर्ष सिद्धपीठ साधना, वशिष्ठ ज्योतिष संस्थान संबद्ध। फोन: +91 95756 64204।",
  keywords: [
    "पंडित पवन शर्मा नलखेड़ा",
    "Pandit Pawan Sharma Nalkheda",
    "माँ बगलामुखी पंडित पवन शर्मा",
    "बगलामुखी महाहवन नलखेड़ा",
    "बगलामुखी सवा लाख जाप",
    "शत्रु बाधा निवारण हवन",
    "कोर्ट कचहरी मुकदमा विजय अनुष्ठान",
    "बगलामुखी ऑनलाइन पूजा ई-संकल्प",
    "पंडित पवन शर्मा फोन नंबर 9575664204",
    "उज्जैन वेद विद्यालय कर्मकाण्ड",
    "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र",
    "9575664204",
  ],
  alternates: {
    canonical: "https://www.baglamukhipujanalkheda.com/pawan-ji",
    languages: {
      "hi-IN": "https://www.baglamukhipujanalkheda.com/pawan-ji",
      "en-US": "https://www.baglamukhipujanalkheda.com/pawan-ji",
      "x-default": "https://www.baglamukhipujanalkheda.com/pawan-ji",
    },
  },
  openGraph: {
    title:
      "पंडित पवन शर्मा परिचय | माँ बगलामुखी सिद्धपीठ नलखेड़ा - यज्ञाचार्य एवं वैदिक साधक",
    description:
      "विश्वविख्यात माँ बगलामुखी सिद्धपीठ नलखेड़ा में शास्त्रोक्त तांत्रिक-वैदिक अनुष्ठान, महाहवन, सवा लाख अखंड जाप एवं सटीक जन्म कुंडली परामर्श। पंडित पवन शर्मा (+91 95756 64204)।",
    url: "https://www.baglamukhipujanalkheda.com/pawan-ji",
    type: "profile",
    images: [
      {
        url: "/images/pandit-pawan-sharma.webp",
        width: 768,
        height: 1024,
        alt: "पंडित पवन शर्मा - माँ बगलामुखी सिद्धपीठ नलखेड़ा",
      },
    ],
  },
};

export default function PawanJiProfilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "पंडित पवन शर्मा (Pandit Pawan Sharma)",
    jobTitle: "यज्ञाचार्य एवं वैदिक पुरोहित",
    worksFor: {
      "@type": "PlaceOfWorship",
      name: "श्री माँ बगलामुखी मंदिर सिद्धपीठ नलखेड़ा",
      address: {
        "@type": "PostalAddress",
        streetAddress: "शासकीय माँ बगलामुखी सिद्धपीठ, नलखेड़ा, जिला - आगर मालवा",
        addressLocality: "नलखेड़ा",
        addressRegion: "मध्य प्रदेश",
        postalCode: "465445",
        addressCountry: "IN",
      },
    },
    alumniOf: "महामृत्युंजय वेद विद्यालय, उज्जैन",
    memberOf: "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र",
    telephone: "+91-9575664204",
    image: "/images/pandit-pawan-sharma.webp",
    description:
      "माँ बगलामुखी अनन्य साधक, 7+ वर्षों से नलखेड़ा सिद्धपीठ में तांत्रिक-वैदिक महाहवन, सवा लाख अखंड जप, शत्रु बाधा निवारण एवं जन्म कुंडली दोष शांति के विशेषज्ञ।",
    knowsAbout: [
      "माँ बगलामुखी महाहवन",
      "शत्रु बाधा एवं तंत्र निवारण",
      "सवा लाख पीताम्बरा महामंत्र जाप",
      "कोर्ट केस एवं मुकदमा विजय अनुष्ठान",
      "जन्म कुंडली एवं ग्रह शांति",
      "कालसर्प एवं पितृ दोष निवारण",
      "ई-संकल्प एवं लाइव वीडियो पूजा",
    ],
  };

  const whatsappMessage = encodeURIComponent(
    "नमस्ते पंडित पवन शर्मा जी, मुझे माँ बगलामुखी अनुष्ठान / जन्म कुंडली मार्गदर्शन हेतु जानकारी चाहिए।"
  );
  const whatsappUrl = `https://wa.me/919575664204?text=${whatsappMessage}`;

  return (
    <main className="w-full min-h-screen bg-[#FFFDF9]">
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#FFF8EC] via-[#FFF3DC] to-[#FFFDF9] border-b border-[#EBD8B4] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[400px]">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-400 to-[#D89B18] opacity-60 blur-md" />
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#D89B18] shadow-2xl bg-white">
                  <Image
                    src="/images/pandit-pawan-sharma.webp"
                    alt="पंडित पवन शर्मा - माँ बगलामुखी उपासक नलखेड़ा"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-amber-300 font-bold text-xl font-serif">
                      पं. पवन शर्मा
                    </span>
                    <span className="text-xs text-amber-100/90 font-medium">
                      माँ बगलामुखी उपासक • 7+ वर्ष वैदिक साधना अनुभव
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Ribbon */}
              <div className="mt-4 w-full max-w-[400px] grid grid-cols-2 gap-2.5">
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-[#EBD8B4] shadow-xs text-center">
                  <span className="font-serif text-lg font-black text-[#8B0000]">
                    7+ वर्ष
                  </span>
                  <span className="text-xs font-semibold text-stone-700">
                    सिद्धपीठ साधना अनुभव
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-[#EBD8B4] shadow-xs text-center">
                  <span className="font-serif text-lg font-black text-[#D89B18]">
                    100%
                  </span>
                  <span className="text-xs font-semibold text-stone-700">
                    शास्त्रोक्त वैदिक विधान
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Intro */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFF2DB] border border-[#ECD19A] text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="h-4 w-4 text-[#D89B18]" />
                <span>महामृत्युंजय वेद विद्यालय (उज्जैन) दीक्षित • 7+ वर्ष अनुभव</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A0C16] leading-tight mb-2">
                आचार्य पं. पवन शर्मा
              </h1>

              <p className="font-serif text-base sm:text-lg font-semibold text-[#8B0000] mb-4">
                माँ बगलामुखी अनन्य साधक • वैदिक कर्मकाण्ड एवं ज्योतिष मर्मज्ञ
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                विश्व प्रसिद्ध माँ बगलामुखी सिद्धपीठ (नलखेड़ा) में वैदिक परंपरा अनुसार अनुष्ठान संपन्न कराने वाले <strong>पंडित पवन शर्मा जी</strong> ने महामृत्युंजय वेद विद्यालय, उज्जैन से कर्मकाण्ड की शास्त्रीय दीक्षा प्राप्त की है। विगत <strong>7+ वर्षों</strong> के गहन साधना अनुभव के साथ आप <strong>श्री वशिष्ठ ज्योतिष संस्थान केन्द्र</strong> से निरंतर संबद्ध होकर भक्तों को जन्मपत्रिका, ग्रह शांति, कालसर्प-मांगलिक दोष एवं शत्रु-बाधा निवारण हेतु प्रामाणिक शास्त्रोक्त मार्गदर्शन प्रदान कर रहे हैं।
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919575664204"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-white text-xs sm:text-sm font-bold shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <PhoneCall className="h-4 w-4 text-amber-300" />
                  <span>सीधे कॉल करें: +91 95756 64204</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-bold border border-[#D89B18] shadow-xs transition-colors duration-200"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp परामर्श</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. FOUR CORE CREDENTIALS ================= */}
      <section className="py-12 sm:py-16 border-b border-[#EBD8B4] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
              शास्त्रोक्त पृष्ठभूमि एवं साधना
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#4A0C16] mt-1">
              वैदिक दीक्षा एवं मुख्य सिद्धियां
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18]">
              <GraduationCap className="h-7 w-7 text-[#8B0000] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#4A0C16] mb-1">
                महामृत्युंजय वेद विद्यालय (उज्जैन)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                उज्जैन की प्रतिष्ठित वैदिक पीठ से कर्मकाण्ड, वैदिक मंत्रोच्चार, पूजन विधान एवं संस्कृत वाङ्मय का विधिवत अध्ययन।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18]">
              <Award className="h-7 w-7 text-[#8B0000] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#4A0C16] mb-1">
                श्री वशिष्ठ ज्योतिष संस्थान
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                श्री वशिष्ठ ज्योतिष संस्थान केन्द्र से निरंतर संबद्ध। 7+ वर्षों के अनुभव के साथ वैदिक ज्योतिष व तांत्रिक साधनाओं का समन्वय।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18]">
              <Flame className="h-7 w-7 text-[#8B0000] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#4A0C16] mb-1">
                माँ बगलामुखी महाहवन विशेषज्ञ
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                माँ पीताम्बरा के विशिष्ट अनुष्ठान, शत्रु बाधा निवारण, कोर्ट केस विजय महाहवन एवं संकट मोचन तांत्रिक-वैदिक आहुति।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18]">
              <Compass className="h-7 w-7 text-[#8B0000] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#4A0C16] mb-1">
                सटीक जन्म कुंडली परामर्श
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                कालसर्प दोष, मांगलिक विचार, पितृ दोष, ग्रह शांति एवं व्यक्तिगत जीवन समस्याओं का संपूर्ण शास्त्रोक्त वैदिक समाधान।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. SPECIAL ANUSHTHAN & SERVICES ================= */}
      <section className="py-12 sm:py-16 bg-[#FFF8EC] border-b border-[#EBD8B4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B0000]">
              विशेष अनुष्ठान एवं सेवाएँ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#4A0C16] mt-1">
              पं. पवन शर्मा जी के सानिध्य में संपन्न होने वाले प्रमुख अनुष्ठान
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E8D4AF] shadow-sm border-l-[6px] border-l-[#D89B18]">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="h-6 w-6 text-[#8B0000]" />
                <h3 className="font-serif text-lg font-bold text-[#4A0C16]">
                  माँ बगलामुखी सवा लाख महामंत्र जाप
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                विद्वान ब्राह्मणों द्वारा 3 से 7 दिनों तक निरंतर विधि-विधान पूर्वक सवा लाख पीताम्बरा महामंत्र का अखंड जप एवं दशांश हवन।
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000]" />
                  <span>शत्रु शमन एवं भय मुक्ति</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000]" />
                  <span>राजकीय एवं प्रशासनिक विजय</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000]" />
                  <span>व्यापारिक गतिरोध व बाधा निवारण</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8D4AF] shadow-sm border-l-[6px] border-l-[#D89B18]">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-6 w-6 text-[#8B0000]" />
                <h3 className="font-serif text-lg font-bold text-[#4A0C16]">
                  कोर्ट केस एवं मुकदमा विजय अनुष्ठान
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                न्यायालयीय मामलों, संपत्ति विवादों एवं षड्यंत्रों से मुक्ति हेतु विशेष पीताम्बरा स्तम्भन महायज्ञ एवं सुरक्षा कवच पाठ।
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000]" />
                  <span>न्यायालयीन विजय एवं न्याय प्राप्ति</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000]" />
                  <span>विरोधियों का प्रभाव निष्प्रभावी</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000]" />
                  <span>मानसिक शांति व सुरक्षा कवच</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8D4AF] shadow-sm border-l-[6px] border-l-[#D89B18]">
              <div className="flex items-center gap-2 mb-3">
                <Compass className="h-6 w-6 text-[#8B0000]" />
                <h3 className="font-serif text-lg font-bold text-[#4A0C16]">
                  जन्म कुंडली एवं ग्रह दोष शांति
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                कालसर्प दोष, मंगल दोष, पितृ दोष, गुरु चांडाल योग एवं नवग्रहों की विशेष शांति हेतु शास्त्रोक्त आहुतियां व वैदिक मार्गदर्शन।
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000]" />
                  <span>कालसर्प एवं पितृ दोष निवारण</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000]" />
                  <span>विवाह बाधा एवं मांगलिक शांति</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000]" />
                  <span>कैरियर व आर्थिक स्थायित्व उपाय</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. REAL HAWAN SHOWCASE ================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#EBD8B4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
              प्रत्यक्ष हवन दर्शन
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#4A0C16] mt-1">
              सिद्धपीठ नलखेड़ा में शास्त्रोक्त हवन की पावन झलक
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#EBD8B4] shadow-md group">
              <Image
                src="/images/hawan-anushthan-1.webp"
                alt="माँ बगलामुखी दिव्य महाहवन - घृत आहुति"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <span className="font-serif font-bold text-sm text-amber-300">
                  दिव्य महाहवन एवं घृत आहुति धारा
                </span>
                <p className="text-xs text-stone-200">
                  शास्त्रोक्त वैदिक आहुतियां व समिधा अर्पण
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#EBD8B4] shadow-md group">
              <Image
                src="/images/hawan-anushthan-2.webp"
                alt="माँ बगलामुखी यज्ञशाला एवं वेदी दर्शन"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <span className="font-serif font-bold text-sm text-amber-300">
                  नलखेड़ा सिद्धपीठ यज्ञशाला
                </span>
                <p className="text-xs text-stone-200">
                  विधि-विधान से संपन्न तांत्रिक एवं वैदिक अनुष्ठान
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. TESTIMONIALS SLIDER ================= */}
      <TestimonialsSection />

      {/* ================= 6. DIRECT CONTACT & BOOKING CARD ================= */}
      <section className="py-12 sm:py-16 bg-[#FFF8EC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#D89B18] shadow-xl text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#FFF2DB] border border-[#ECD19A] text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-3">
              <CalendarCheck className="h-4 w-4 text-[#D89B18]" />
              <span>सीधा संपर्क एवं परामर्श</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#4A0C16] mb-3">
              पंडित पवन शर्मा जी से व्यक्तिगत परामर्श हेतु संपर्क करें
            </h2>

            <p className="text-stone-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
              माँ बगलामुखी सिद्धपीठ (नलखेड़ा) में अनुष्ठान, महाहवन, सवा लाख जाप अथवा जन्म पत्रिका विश्लेषण हेतु आप सीधे पंडित पवन शर्मा जी से संपर्क कर सकते हैं।
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+919575664204"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-white text-sm font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <PhoneCall className="h-4 w-4 text-amber-300" />
                <span>कॉल करें: +91 95756 64204</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-bold shadow-lg transition-colors duration-200"
              >
                <WhatsAppIcon className="h-4 w-4 text-white" />
                <span>WhatsApp पर बात करें</span>
              </a>

              <Link
                href="/puja"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-[#4A0C16] text-sm font-bold border border-[#D89B18] shadow-xs transition-colors"
              >
                <span>सभी पूजा एवं हवन पैकेज देखें</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
