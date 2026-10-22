"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Flame,
  CalendarCheck,
  ShieldCheck,
  Compass,
  Train,
  Plane,
  Info,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import InstagramIcon from "@/components/common/InstagramIcon";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: { hi: "मुख्य पृष्ठ", en: "Home" }, href: "/" },
    { label: { hi: "आचार्य पं. दीपक शर्मा", en: "About Pandit Ji" }, href: "/pandit-ji" },
    { label: { hi: "पूजा एवं अनुष्ठान", en: "Pujas & Hawan" }, href: "/pujas" },
    { label: { hi: "मंदिर का इतिहास", en: "Mandir History" }, href: "/mandir" },
    { label: { hi: "फोटो दीर्घा", en: "Photo Gallery" }, href: "/gallery" },
    { label: { hi: "संपर्क सूत्र", en: "Contact Us" }, href: "/contact" },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-[#180306] via-[#200408] to-[#0F0204] text-stone-300 border-t-2 border-[#D89B18]/50 pt-10 pb-24 lg:pt-12 lg:pb-8 relative overflow-hidden">
      {/* Decorative Golden Accent Top Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Sacred Mantra Ribbon */}
        <div className="text-center pb-8 border-b border-amber-900/40">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/60 border border-amber-400/40 px-4 py-1 text-xs text-amber-300 mb-2.5 backdrop-blur-md">
            <span className="font-serif">॥ अमोघ रक्षा महामंत्र ॥</span>
          </div>
          <p className="font-serif text-sm sm:text-base md:text-lg font-bold text-amber-200 tracking-wide leading-relaxed max-w-4xl mx-auto drop-shadow-sm">
            {t({
              hi: "॥ ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥",
              en: "॥ Om Hleem Baglamukhi Sarvadushtanam Vacham Mukham Padam Stambhaya Jihvam Keelaya Buddhim Vinashaya Hleem Om Swaha ॥",
            })}
          </p>
          <p className="text-xs text-amber-300/80 mt-1.5 font-medium">
            {t({
              hi: "विश्व प्रसिद्ध महाभारत कालीन सिद्ध शक्तिपीठ • नलखेड़ा धाम, आगर-मालवा (म.प्र.)",
              en: "World-Renowned Mahabharata-Era Siddha Shakti Peeth • Nalkheda Dham, Agar-Malwa (M.P.)",
            })}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-8">

          {/* Column 1: Brand & Priest Info (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 flex items-center justify-center rounded-2xl bg-black/40 border border-amber-400/30 p-1">
                <Image
                  src="/images/baglamukhi-logo.png"
                  alt="माँ बगलामुखी मंदिर लोगो"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain filter drop-shadow-md"
                />
              </div>
              <div>
                <h3 className="font-serif font-black text-lg sm:text-xl text-white leading-tight">
                  {t({
                    hi: "श्री माँ बगलामुखी धाम",
                    en: "Shri Maa Baglamukhi Dham",
                  })}
                </h3>
                <p className="text-xs text-amber-400 font-bold">
                  {t({
                    hi: "सिद्ध तंत्र पीठ • नलखेड़ा",
                    en: "Siddha Tantra Peeth • Nalkheda",
                  })}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-normal">
              {t({
                hi: "विश्व विख्यात शक्तिपीठ नलखेड़ा में मुख्य उपासक पं. दीपक शर्मा जी द्वारा शास्त्रोक्त वैदिक पद्धति एवं तांत्रिक विधान से शत्रु संहारक, कोर्ट केस विजय व ग्रह शांति अनुष्ठान संपन्न कराए जाते हैं।",
                en: "Under the guidance of Chief Priest Pt. Deepak Sharma, authentic Vedic & Tantrik Hawan rituals are conducted at Nalkheda for enemy suppression, court cases, and horoscope relief.",
              })}
            </p>

            <div className="flex flex-col gap-1.5 w-full pt-1">
              <div className="inline-flex items-center gap-2 rounded-xl bg-amber-950/50 border border-amber-500/30 px-3 py-1.5 text-xs text-amber-200">
                <ShieldCheck className="h-4 w-4 text-amber-400 shrink-0" />
                <span>
                  {t({
                    hi: "100% प्रामाणिक वैदिक परंपरा • 5+ वर्ष अनुभव",
                    en: "100% Authentic Tradition • 5+ Yrs Experience",
                  })}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-red-950/50 border border-red-500/30 px-3 py-1.5 text-xs text-amber-100">
                <Compass className="h-4 w-4 text-amber-400 shrink-0" />
                <span>
                  {t({
                    hi: "कुंडली व राशि परामर्श: +91 95756 64204",
                    en: "Kundali & Rashi Desk: +91 95756 64204",
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-sm sm:text-base text-amber-300 mb-3.5 flex items-center gap-2">
              <Flame className="h-4 w-4 text-amber-400" />
              <span>
                {t({
                  hi: "त्वरित लिंक",
                  en: "Quick Links",
                })}
              </span>
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-400 font-bold">›</span>
                    <span>{t(item.label)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Daily Timings & Pujas (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm sm:text-base text-amber-300 mb-3.5 flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-400" />
              <span>
                {t({
                  hi: "दर्शन एवं आरती समय",
                  en: "Darshan & Aarti Timings",
                })}
              </span>
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="bg-black/50 border border-amber-900/40 rounded-xl p-2.5">
                <span className="text-amber-300 font-bold block">
                  {t({
                    hi: "दैनिक दर्शन:",
                    en: "Daily Darshan:",
                  })}
                </span>
                <span>
                  {t({
                    hi: "प्रातः 06:00 से रात्रि 09:30 (पट खुले हैं)",
                    en: "06:00 AM to 09:30 PM (Sanctum Open)",
                  })}
                </span>
              </div>
              <div className="bg-black/50 border border-amber-900/40 rounded-xl p-2.5">
                <span className="text-amber-300 font-bold block">
                  {t({
                    hi: "दैनिक महाआरती समय:",
                    en: "Daily Maha Aarti:",
                  })}
                </span>
                <span>
                  {t({
                    hi: "प्रातः आरती: 06:00 AM | सायं: 07:30 PM",
                    en: "Morning Aarti: 06:00 AM | Evening: 07:30 PM",
                  })}
                </span>
              </div>
            </div>

            <div className="mt-3">
              <Link
                href="/pujas"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-100 transition-colors"
              >
                <CalendarCheck className="h-3.5 w-3.5" />
                <span>
                  {t({
                    hi: "विशेष पूजा एवं हवन सूची देखें →",
                    en: "View Special Puja Catalog →",
                  })}
                </span>
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Travel Guide (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm sm:text-base text-amber-300 mb-3.5 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-400" />
              <span>
                {t({
                  hi: "स्थान एवं आवागमन",
                  en: "Location & Transit",
                })}
              </span>
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-stone-300">
                <MapPin className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {t({
                    hi: "लखुंदर नदी तट, नलखेड़ा, जिला आगर मालवा, मध्य प्रदेश",
                    en: "Lakhundar River Bank, Nalkheda, Dist. Agar Malwa, M.P.",
                  })}
                </span>
              </div>

              {/* Transit Details */}
              <div className="bg-black/40 border border-amber-900/30 rounded-xl p-2.5 space-y-1.5 text-[11px] text-stone-300">
                <div className="flex items-center gap-2">
                  <Train className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>
                    {t({
                      hi: "निकटतम स्टेशन: नागदा (85 किमी) / उज्जैन (98 किमी)",
                      en: "Nearest Station: Nagda (85 km) / Ujjain (98 km)",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>
                    {t({
                      hi: "निकटतम हवाई अड्डा: इंदौर (155 किमी)",
                      en: "Nearest Airport: Indore (155 km)",
                    })}
                  </span>
                </div>
              </div>

              {/* Main Phone Call (Hawan & Puja) */}
              <div className="flex items-center gap-2 pt-1">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <a
                  href="tel:+917223083313"
                  className="text-amber-200 hover:text-white transition-colors font-bold text-xs"
                >
                  +91 72230 83313 {t({ hi: "(हवन व पूजा बुकिंग)", en: "(Hawan & Puja Booking)" })}
                </a>
              </div>

              {/* Official Email */}
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:AshthamMahavidhya@gmail.com"
                  className="text-amber-200 hover:text-white transition-colors font-medium text-xs break-all"
                >
                  AshthamMahavidhya@gmail.com
                </a>
              </div>

              {/* Official Instagram */}
              <div className="flex items-center gap-2">
                <InstagramIcon className="h-4 w-4 text-pink-400 shrink-0" />
                <a
                  href="https://www.instagram.com/ashtham_mahavidhya?dlrf=c2kxa2h4dGl6ZG1x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-200 hover:text-pink-300 transition-colors font-medium text-xs truncate"
                >
                  @ashtham_mahavidhya
                </a>
              </div>

              {/* Instant WhatsApp */}
              <div className="pt-1">
                <a
                  href="https://wa.me/917223083313?text=जय%20माँ%20बगलामुखी!%20पंडित%20जी%2C%20मुझे%20हवन%20व%20पूजा%20अनुष्ठान%20की%20जानकारी%20चाहिए।"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8B0000] via-[#AF0807] to-[#7A0505] hover:brightness-110 border border-amber-400/50 px-3.5 py-2.5 text-xs font-bold text-white shadow-md transition-colors w-full justify-center group"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#25D366] text-white shrink-0 group-hover:scale-110 transition-transform">
                    <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span>
                    {t({
                      hi: "व्हाट्सएप पर तुरंत संपर्क करें",
                      en: "Connect Instantly on WhatsApp",
                    })}
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ================= TRUST & TRANSPARENCY NOTICE (Resolves Issue #4) ================= */}
        <div className="mt-4 p-4 rounded-2xl bg-black/45 border border-amber-400/25 text-stone-300 text-xs leading-relaxed">
          <div className="flex items-center gap-2 text-amber-300 font-bold mb-1.5">
            <Info className="h-4 w-4 text-amber-400 shrink-0" />
            <span>
              {t({
                hi: "पारदर्शिता, शुल्क एवं धार्मिक सूचना",
                en: "Transparency, Fee & Religious Notice",
              })}
            </span>
          </div>
          <p className="text-stone-300 text-[11px] sm:text-xs">
            {t({
              hi: "यह वेबसाइट माँ बगलामुखी सिद्धपीठ (नलखेड़ा) के मुख्य उपासक आचार्य पं. दीपक शर्मा जी द्वारा संचालित अधिकृत पूजा, हवन व वैदिक परामर्श सेवा है। वेबसाइट पर दी गई सभी सेवाएं प्रारंभिक पूछताछ, संकल्प एवं शुभ मुहूर्त आरक्षण हेतु हैं। विशिष्ट पूजन सामग्री, आहुति संख्या एवं वैदिक दक्षिणा का विवरण संकल्प से पूर्व पारदर्शी रूप से साझा किया जाता है। सभी अनुष्ठान शास्त्रोक्त वैदिक परंपरा एवं यजमान के नाम-गोत्र से संपन्न होते हैं; यह पोर्टल किसी भी प्रकार के अंधविश्वास या अनुचित गारंटी का दावा नहीं करता है।",
              en: "This website is an authorized Vedic Puja, Hawan, and Astrological guidance service operated under Chief Purohit Acharya Pt. Deepak Sharma at Nalkheda Siddhapeeth. All bookings on this portal are for preliminary inquiry, Muhurat reservation, and personal Sankalp. Ritual fees, sacrificial samagri, and dakshina are communicated with complete transparency before payment. All rituals follow authentic Vedic & Tantrik scriptures; no guaranteed supernatural or financial outcomes are promised.",
            })}
          </p>
        </div>

        {/* Bottom Bar with Prism Infotech Solution credit */}
        <div className="pt-6 mt-4 border-t border-amber-900/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-400 text-center md:text-left">
          <p>
            {t({
              hi: "© 2026 श्री माँ बगलामुखी धाम नलखेड़ा। सर्वाधिकार सुरक्षित।",
              en: "© 2026 Shri Maa Baglamukhi Dham Nalkheda. All Rights Reserved.",
            })}
          </p>

          <p className="text-amber-200/90 font-medium">
            {t({
              hi: "मुख्य उपासक: आचार्य पं. दीपक शर्मा",
              en: "Chief Purohit: Acharya Pt. Deepak Sharma",
            })}
          </p>

          {/* Designed by Prism Infotech Solution */}
          <div className="flex items-center gap-1.5 text-stone-300">
            <span>
              {t({
                hi: "डिज़ाइन एवं विकसित:",
                en: "Designed & Developed by:",
              })}
            </span>
            <a
              href="https://prisminfotechsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-300 hover:text-white transition-colors underline decoration-amber-400/60 hover:decoration-white underline-offset-4 inline-flex items-center gap-1"
            >
              <span>Prism Infotech Solution</span>
              <span className="text-[10px] text-amber-300">↗</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
