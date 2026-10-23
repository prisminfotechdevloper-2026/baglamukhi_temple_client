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
  Scroll,
  BookOpen,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title:
    "आचार्य वशिष्ठ विशाल शर्मा (विश्वेश्वरप्रपन्न रामानुज दास) | वशिष्ठ ज्योतिष संस्थानम् - जीवन परिचय व कुंडली सेवा",
  description:
    "आचार्य वशिष्ठ विशाल शर्मा जी का परिचय, संस्कृत साहित्य M.A., B.Ed., Ph.D. शोधार्थी, 10+ वर्ष महाविद्या व कर्मकांड साधना, काशी विद्वत् परिषद् सम्मानित। फोन: +91 95756 64204।",
  keywords: [
    "आचार्य वशिष्ठ विशाल शर्मा",
    "वशिष्ठ ज्योतिष संस्थानम्",
    "विश्वेश्वरप्रपन्न रामानुज दास",
    "काशी विद्वत् परिषद् सम्मानित ज्योतिषी",
    "जन्म कुंडली विश्लेषण नलखेड़ा",
    "कुंडली फलादेश 1100",
    "सम्पूर्ण कुंडली विश्लेषण 2100",
    "कालसर्प दोष शांति",
    "9575664204",
  ],
  alternates: {
    canonical: "https://baglamukhi-temple-hazel.vercel.app/vishal-ji",
  },
  openGraph: {
    title:
      "आचार्य वशिष्ठ विशाल शर्मा परिचय | वशिष्ठ ज्योतिष संस्थानम् - वरिष्ठ ज्योतिषाचार्य",
    description:
      "विगत 10 वर्षों की गूढ़ साधना एवं अखिल भारतीय काशी विद्वत् परिषद् से सम्मानित आदरणीय गुरुदेव आचार्य वशिष्ठ विशाल शर्मा जी द्वारा शास्त्रोक्त जन्म पत्रिका फलादेश व सम्पूर्ण जीवन विश्लेषण।",
    url: "https://baglamukhi-temple-hazel.vercel.app/vishal-ji",
    type: "profile",
    images: [
      {
        url: "/images/acharya-vashishtha-vishal-sharma.webp",
        width: 1024,
        height: 1024,
        alt: "आचार्य वशिष्ठ विशाल शर्मा - वशिष्ठ ज्योतिष संस्थानम्",
      },
    ],
  },
};

export default function VishalJiProfilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "आचार्य वशिष्ठ विशाल शर्मा (Acharya Vashishtha Vishal Sharma)",
    alternateName: "विश्वेश्वरप्रपन्न रामानुज दास (Vishveshwara Prapanna Ramanuja Das)",
    jobTitle: "संस्थापक एवं वरिष्ठ ज्योतिषाचार्य (संस्कृत साहित्य Ph.D. शोधार्थी)",
    worksFor: {
      "@type": "Organization",
      name: "वशिष्ठ ज्योतिष संस्थानम्",
    },
    telephone: "+91-9575664204",
    award: "अखिल भारतीय काशी विद्वत् परिषद् सम्मान (धर्म ज्योतिष महाकुम्भ)",
    image: "/images/acharya-vashishtha-vishal-sharma.webp",
    description:
      "संस्कृत साहित्य से M.A., B.Ed. एवं वर्तमान में Ph.D. शोधार्थी। विगत 10 वर्षों से आचार्यों के सानिध्य में ज्योतिष, कर्मकांड एवं महाविद्याओं की गूढ़तम साधनाएं संपन्न की हैं।",
    knowsAbout: [
      "वैदिक जन्म कुंडली विश्लेषण",
      "जन्म पत्रिका फलादेश",
      "कालसर्प दोष एवं राहु-केतु शांति",
      "मांगलिक विचार एवं वैवाहिक समाधान",
      "पितृ दोष निवारण",
      "महाविद्या तांत्रिक-वैदिक साधना",
      "रत्न एवं रुद्राक्ष शास्त्रोक्त परामर्श",
    ],
  };

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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#D89B18] shadow-2xl bg-white">
                  <Image
                    src="/images/acharya-vashishtha-vishal-sharma.webp"
                    alt="आचार्य वशिष्ठ विशाल शर्मा"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-amber-300 font-bold text-lg font-serif">
                      आचार्य वशिष्ठ विशाल शर्मा
                    </span>
                    <span className="text-xs text-stone-200">
                      गुरु प्रदत्त नाम: विश्वेश्वरप्रपन्न रामानुज दास
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Intro */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFF2DB] border border-[#ECD19A] text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="h-4 w-4 text-[#D89B18]" />
                <span>अखिल भारतीय काशी विद्वत् परिषद् से सम्मानित</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A0C16] leading-tight mb-2">
                आचार्य वशिष्ठ विशाल शर्मा
              </h1>

              <p className="font-serif text-base sm:text-lg font-semibold text-[#8B0000] mb-4">
                संस्थापक: वशिष्ठ ज्योतिष संस्थानम् • गुरु प्रदत्त नाम: विश्वेश्वरप्रपन्न रामानुज दास
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                संस्कृत साहित्य से <strong>M.A., B.Ed.</strong> उपाधि प्राप्त एवं वर्तमान में <strong>Ph.D. शोधार्थी</strong> हैं। विगत 10 वर्षों से शीर्ष पूज्य आचार्यों के पावन सानिध्य में रहकर आपने वैदिक ज्योतिष, कर्मकांड एवं महाविद्याओं की गूढ़तम साधनाएं सिद्ध की हैं। जन-कल्याण एवं निष्काम ज्योतिषीय सेवा हेतु आप धर्म ज्योतिष महाकुम्भ में <strong>&apos;अखिल भारतीय काशी विद्वत् परिषद्&apos;</strong> द्वारा सम्मानित हुए हैं।
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={getTelUrl("kundali")}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  <PhoneCall className="h-4 w-4 text-amber-300" />
                  <span>सीधे कॉल करें: {siteConfig.contact.kundaliPhoneFormatted}</span>
                </a>

                <a
                  href={getWhatsAppUrl(
                    "नमस्ते आचार्य वशिष्ठ विशाल शर्मा जी, मुझे आपसे जन्म कुंडली विश्लेषण हेतु परामर्श प्राप्त करना है।",
                    "kundali"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-bold border border-[#D89B18] shadow-xs transition-colors"
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
              शैक्षिक योग्यता एवं आध्यात्मिक सिद्धियां
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18]">
              <GraduationCap className="h-7 w-7 text-[#8B0000] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#4A0C16] mb-1">
                M.A., B.Ed. • Ph.D. शोधार्थी
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                संस्कृत साहित्य में स्नातकोत्तर एवं शिक्षा शास्त्रीय उपाधि। वर्तमान में संस्कृत व ज्योतिषीय वाङ्मय पर Ph.D. उच्च शोध कार्य।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18]">
              <Flame className="h-7 w-7 text-[#8B0000] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#4A0C16] mb-1">
                10+ वर्ष गूढ़ साधना
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                विगत एक दशक से शीर्ष पूज्य आचार्यों के सानिध्य में रहकर महाविद्याओं, वैदिक कर्मकांड एवं गूढ़ तांत्रिक अनुष्ठान की प्रत्यक्ष साधना।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18]">
              <Award className="h-7 w-7 text-[#8B0000] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#4A0C16] mb-1">
                काशी विद्वत् परिषद् सम्मान
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                धर्म ज्योतिष महाकुम्भ के पावन मंच पर अखिल भारतीय विद्वत्परिषद् द्वारा उत्कृष्ट ज्योतिष सेवा हेतु राष्ट्रीय स्तर पर प्रशस्ति-पत्र से विभूषित।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18]">
              <Compass className="h-7 w-7 text-[#8B0000] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#4A0C16] mb-1">
                वशिष्ठ ज्योतिष संस्थानम्
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                संस्थान के संस्थापक के रूप में देश-विदेश के भक्तों को जन्मपत्रिका फलादेश, कालसर्प, मांगलिक व पितृ दोष शांति का शास्त्रोक्त विधान।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. HONOR PHOTOGRAPH SHOWCASE ================= */}
      <section className="py-12 sm:py-16 bg-[#FFF8EC] border-b border-[#EBD8B4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8D4AF] border-l-[8px] border-l-[#D89B18] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D89B18] shadow-lg bg-stone-900">
              <Image
                src="/images/acharya-vashishtha-vishal-sharma-samman.webp"
                alt="अखिल भारतीय विद्वत्परिषद् सम्मान पत्र प्राप्त करते आचार्य वशिष्ठ विशाल शर्मा"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B0000] block mb-2">
                धर्म ज्योतिष महाकुम्भ सम्मान
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#4A0C16] mb-3">
                अखिल भारतीय विद्वत्परिषद् द्वारा राष्ट्रीय सम्मान
              </h2>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                अखिल भारतीय विद्वत्परिषद् एवं श्रीनिम्बार्क के संयुक्त तत्त्वावधान में आयोजित <strong>धर्म ज्योतिष महाकुम्भ</strong> के पावन मंच पर पूज्य संतों एवं महामंडलेश्वरों द्वारा आचार्य वशिष्ठ विशाल शर्मा जी (गुरु प्रदत्त नाम: विश्वेश्वरप्रपन्न रामानुज दास) को ज्योतिष अनुसंधान एवं जन-कल्याणकारी सेवा हेतु विशेष सम्मान पत्र भेंट किया गया।
              </p>
              <div className="space-y-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B0000] shrink-0" />
                  <span>वैदिक ज्योतिष अनुसंधान एवं ज्योतिष सेवा में विशिष्ट योगदान</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B0000] shrink-0" />
                  <span>महाविद्याओं व कर्मकांड का 10 वर्षों का गहरा शास्त्रीय अभ्यास</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B0000] shrink-0" />
                  <span>हजारों भक्तों को जन्म पत्रिका द्वारा सटीक जीवन मार्गदर्शन</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. CONSULTATION PACKAGES (फलादेश ₹1,100 एवं सम्पूर्ण विश्लेषण ₹2,100) ================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#EBD8B4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-left mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
              पारदर्शी दक्षिणा एवं परामर्श सेवाएं
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#4A0C16] mt-1">
              जन्म पत्रिका विश्लेषण एवं परामर्श
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              अपनी जन्म तिथि, समय व स्थान भेजकर सीधे पूज्य गुरुदेव से व्यक्तिगत मार्गदर्शन प्राप्त करें।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Phaladesh */}
            <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-[6px] border-l-[#D89B18] shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-100 text-[#8B0000] text-xs font-bold mb-3">
                  <Scroll className="h-3.5 w-3.5" />
                  <span>त्वरित समाधान</span>
                </div>
                <h3 className="font-serif text-xl font-black text-[#4A0C16]">
                  जन्म पत्रिका फलादेश
                </h3>
                <div className="mt-3 mb-4 pb-3 border-b border-amber-200/60 flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-black text-[#8B0000]">₹1,100</span>
                  <span className="text-xs text-stone-500">दक्षिणा</span>
                </div>
                <ul className="space-y-2 text-xs text-stone-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>लग्न, चंद्र कुंडली व वर्तमान ग्रह गोचर की स्थिति</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>सक्रिय महादशा व अंतर्दशा का प्रभाव एवं विश्लेषण</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>करियर, व्यापार, विवाह अथवा स्वास्थ्य पर 2-3 मुख्य प्रश्नों का समाधान</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>शास्त्रोक्त सरल मंत्र जप एवं वैदिक उपाय</span>
                  </li>
                </ul>
              </div>

              <a
                href={getWhatsAppUrl(
                  "नमस्ते आचार्य वशिष्ठ विशाल शर्मा जी, मुझे जन्म पत्रिका फलादेश (₹1,100) हेतु मार्गदर्शन चाहिए। मेरा जन्म विवरण: ...",
                  "kundali"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-white text-xs sm:text-sm font-bold shadow-xs transition-all"
              >
                <CalendarCheck className="h-4 w-4 text-amber-300" />
                <span>फलादेश बुक करें (₹1,100)</span>
              </a>
            </div>

            {/* Card 2: Complete Analysis */}
            <div className="p-6 rounded-2xl bg-[#FFFDF8] border-2 border-[#D89B18] shadow-md flex flex-col justify-between relative bg-gradient-to-b from-[#FFFDF9] to-white">
              <div className="absolute -top-3 right-5 bg-[#8B0000] text-amber-200 text-[10px] font-bold px-3 py-0.5 rounded border border-amber-400 uppercase">
                सर्वाधिक अनुशंसित
              </div>

              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-100 text-[#8B0000] text-xs font-bold mb-3">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>सम्पूर्ण जीवन चक्र</span>
                </div>
                <h3 className="font-serif text-xl font-black text-[#4A0C16]">
                  सम्पूर्ण जन्म कुंडली विश्लेषण
                </h3>
                <div className="mt-3 mb-4 pb-3 border-b border-amber-200/60 flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-black text-[#8B0000]">₹2,100</span>
                  <span className="text-xs text-stone-500">सम्पूर्ण विश्लेषण दक्षिणा</span>
                </div>
                <ul className="space-y-2 text-xs text-stone-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000] shrink-0 mt-0.5" />
                    <span>12 भावों, नवमांश चक्र व षोडशवर्ग का सूक्ष्म शास्त्रीय परीक्षण</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000] shrink-0 mt-0.5" />
                    <span>कालसर्प, मांगलिक, पितृ, चांडाल व विष दोषों की विस्तृत जांच</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000] shrink-0 mt-0.5" />
                    <span>शिक्षा, वैवाहिक जीवन, संतान योग व स्वास्थ्य का दीर्घकालिक फलादेश</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000] shrink-0 mt-0.5" />
                    <span>सटीक रत्न (Gemstone), रुद्राक्ष, यंत्र व आजीवन ग्रह शांति निर्देश</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8B0000] shrink-0 mt-0.5" />
                    <span className="font-bold text-[#8B0000]">आचार्य जी के साथ सीधे WhatsApp/कॉल पर विस्तृत व्यक्तिगत चर्चा</span>
                  </li>
                </ul>
              </div>

              <a
                href={getWhatsAppUrl(
                  "नमस्ते आचार्य वशिष्ठ विशाल शर्मा जी, मुझे सम्पूर्ण जन्म कुंडली विश्लेषण (₹2,100) प्राप्त करना है। मैं अपना जन्म विवरण भेजना चाहता/चाहती हूँ।",
                  "kundali"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#680000] hover:from-[#A00000] hover:to-[#550000] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <CalendarCheck className="h-4 w-4 text-amber-300" />
                <span>सम्पूर्ण विश्लेषण बुक करें (₹2,100)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. FOOTER HELPLINE CARD ================= */}
      <section className="py-12 bg-[#FFF8EC]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EBD8B4] border-l-[8px] border-l-[#D89B18] shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#4A0C16] mb-2">
              सीधे आचार्य वशिष्ठ विशाल शर्मा जी से संपर्क करें
            </h3>
            <p className="text-stone-600 text-sm mb-5">
              कुंडली दिखाने अथवा शुभ मुहूर्त व ग्रह शांति संबंधी परामर्श हेतु कॉल अथवा WhatsApp करें।
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={getTelUrl("kundali")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8B0000] hover:bg-[#680000] text-white font-bold text-sm shadow-sm"
              >
                <PhoneCall className="h-4 w-4 text-amber-300" />
                <span>{siteConfig.contact.kundaliPhoneFormatted}</span>
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm"
              >
                <span>मुख्य पृष्ठ (Home)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
