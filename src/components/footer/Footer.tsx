"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Flame,
  CalendarCheck,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: { hi: "मुख्य पृष्ठ (Home)", en: "Home" }, href: "/" },
    { label: { hi: "हमारे बारे में (About)", en: "About Pandit Ji" }, href: "/pandit-ji" },
    { label: { hi: "पूजा एवं अनुष्ठान (Pujas)", en: "Pujas & Hawan" }, href: "/pujas" },
    { label: { hi: "मंदिर का इतिहास (Mandir)", en: "Mandir History" }, href: "/mandir" },
    { label: { hi: "फोटो दीर्घा (Gallery)", en: "Photo Gallery" }, href: "/gallery" },
    { label: { hi: "संपर्क सूत्र (Contact Us)", en: "Contact Us" }, href: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#1F0A05] text-stone-300 border-t-2 border-[#E6840D]/30 pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Mantra Ribbon */}
        <div className="text-center pb-10 border-b border-amber-900/40">
          <p className="font-serif text-sm sm:text-base font-semibold text-amber-300 tracking-wider">
            {t({
              hi: "॥ ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥",
              en: "॥ Om Hleem Baglamukhi Sarvadushtanam Vacham Mukham Padam Stambhaya Jihvam Keelaya Buddhim Vinashaya Hleem Om Swaha ॥",
            })}
          </p>
          <p className="text-xs text-stone-400 mt-1">
            {t({
              hi: "विश्व प्रसिद्ध सिद्ध शक्तिपीठ • समस्त संकटों से मुक्ति एवं रक्षा का पावन धाम",
              en: "World-Renowned Siddha Shakti Peeth • Holy Sanctuary for Obstacle Relief & Divine Grace",
            })}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-12">
          {/* Column 1: Brand & Priest Info */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/baglamukhi-logo.png"
                  alt="माँ बगलामुखी मंदिर लोगो"
                  width={60}
                  height={60}
                  className="h-full w-full object-contain drop-shadow-sm"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white leading-tight">
                  {t({
                    hi: "श्री माँ बगलामुखी मंदिर",
                    en: "Shri Maa Baglamukhi Temple",
                  })}
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  {t({
                    hi: "सिद्ध तंत्र पीठ • नलखेड़ा धाम",
                    en: "Siddha Tantra Peeth • Nalkheda Dham",
                  })}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {t({
                hi: "माँ पीताम्बरा बगलामुखी जी के पावन सानिध्य में मुख्य पुजारी पं. दीपक शर्मा जी द्वारा शास्त्रोक्त वैदिक एवं तांत्रिक पद्धतियों से विधिवत अनुष्ठान संपन्न कराए जाते हैं।",
                en: "Under the divine shelter of Maa Pitambara Baglamukhi, Chief Purohit Pt. Deepak Sharma conducts authentic Vedic and Tantrik Anushthans.",
              })}
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-amber-950/60 border border-amber-500/30 px-3 py-1 text-xs text-amber-200">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>
                {t({
                  hi: "100% प्रामाणिक वैदिक परंपरा",
                  en: "100% Authentic Vedic Tradition",
                })}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-4 flex items-center gap-2">
              <Flame className="h-4 w-4 text-[#AF0807]" />
              <span>
                {t({
                  hi: "त्वरित लिंक (Quick Links)",
                  en: "Quick Links",
                })}
              </span>
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#AF0807]">›</span>
                    <span>{t(item.label)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Daily Timings & Pujas */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-400" />
              <span>
                {t({
                  hi: "दर्शन एवं आरती समय",
                  en: "Darshan & Aarti Timings",
                })}
              </span>
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="bg-black/40 border border-white/5 rounded-xl p-2.5">
                <span className="text-amber-300 font-semibold block">
                  {t({
                    hi: "दैनिक दर्शन:",
                    en: "Daily Darshan:",
                  })}
                </span>
                <span>
                  {t({
                    hi: "प्रातः 06:00 से रात्रि 09:30",
                    en: "06:00 AM to 09:30 PM",
                  })}
                </span>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-xl p-2.5">
                <span className="text-amber-300 font-semibold block">
                  {t({
                    hi: "आरती समय:",
                    en: "Aarti Timings:",
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

            <div className="mt-4">
              <Link
                href="/pujas"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-white transition-colors"
              >
                <CalendarCheck className="h-3.5 w-3.5" />
                <span>
                  {t({
                    hi: "विशेष पूजा सूची देखें →",
                    en: "View Special Puja Catalog →",
                  })}
                </span>
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Help */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-4 flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-amber-400" />
              <span>
                {t({
                  hi: "संपर्क एवं परामर्श",
                  en: "Contact & Guidance",
                })}
              </span>
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span className="text-stone-300 leading-snug">
                  {t({
                    hi: "श्री माँ बगलामुखी सिद्ध शक्तिपीठ, नलखेड़ा, जिला आगर मालवा, मध्य प्रदेश",
                    en: "Shri Maa Baglamukhi Siddha Shakti Peeth, Nalkheda, Dist. Agar Malwa, Madhya Pradesh",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <a
                  href="tel:+917726815642"
                  className="text-stone-300 hover:text-amber-300 transition-colors font-medium"
                >
                  +91 77268 15642 (Pt. Deepak Sharma)
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/917726815642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] border border-amber-400/50 px-3.5 py-2.5 text-xs font-bold text-white shadow-md transition-all w-full justify-center"
                >
                  <MessageCircle className="h-4 w-4 text-amber-300" />
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

        {/* Bottom Bar */}
        <div className="pt-8 mt-6 border-t border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <p>
            {t({
              hi: "© 2026 श्री माँ बगलामुखी मंदिर ट्रस्ट। सर्वाधिकार सुरक्षित।",
              en: "© 2026 Shri Maa Baglamukhi Temple Trust. All Rights Reserved.",
            })}
          </p>
          <p className="text-stone-400">
            {t({
              hi: "मुख्य पुजारी: पं. दीपक शर्मा",
              en: "Chief Purohit: Pt. Deepak Sharma",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
