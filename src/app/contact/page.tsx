import type { Metadata } from "next";
import Image from "next/image";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Flame,
  Compass,
  Train,
  Car,
  Plane,
  Mail,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import InstagramIcon from "@/components/common/InstagramIcon";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "संपर्क करें | श्री माँ बगलामुखी मंदिर नलखेड़ा - पं. दीपक शर्मा",
  description:
    "श्री माँ बगलामुखी सिद्धपीठ नलखेड़ा में विशेष महाहवन, तांत्रिक-वैदिक अनुष्ठान एवं जन्म कुंडली ज्योतिषीय मार्गदर्शन हेतु पंडित दीपक शर्मा जी से संपर्क करें। हवन/पूजा: +91 72230 83313, कुंडली: +91 95756 64204, ईमेल: AshthamMahavidhya@gmail.com।",
  keywords: [
    "बगलामुखी मंदिर नलखेड़ा संपर्क",
    "पंडित दीपक शर्मा फोन नंबर",
    "बगलामुखी हवन बुकिंग",
    "नलखेड़ा कैसे पहुंचे",
    "बगलामुखी मंदिर टाइमिंग",
    "7223083313",
    "9575664204",
    "AshthamMahavidhya@gmail.com",
    "माँ बगलामुखी अनुष्ठान संपर्क",
  ],
  openGraph: {
    title: "संपर्क करें | श्री माँ बगलामुखी मंदिर नलखेड़ा - पं. दीपक शर्मा",
    description:
      "हवन-पूजा अनुष्ठान एवं कुंडली विश्लेषण हेतु पंडित दीपक शर्मा जी से संपर्क करें। फोन: 7223083313 / 9575664204। लखुंदर नदी तट, नलखेड़ा।",
    type: "website",
    locale: "hi_IN",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const faqList = [
    {
      q: "मंदिर में दर्शन का समय एवं महाआरती का समय क्या है?",
      a: "माँ बगलामुखी मंदिर के पट प्रातः 06:00 बजे से रात्रि 09:30 बजे तक खुले रहते हैं। प्रातः आरती 06:00 बजे एवं सायं महाआरती 07:30 बजे संपन्न होती है।",
    },
    {
      q: "क्या दूर रहने वाले भक्त ऑनलाइन संकल्प लेकर हवन करा सकते हैं?",
      a: "हाँ, जो भक्त स्वयं नलखेड़ा नहीं आ सकते, वे पंडित दीपक शर्मा जी द्वारा लाइव वीडियो कॉल पर संकल्प जुड़कर अनुष्ठान संपन्न करा सकते हैं। पूजन के पश्चात अभिमंत्रित रक्षा सूत्र व भस्म-प्रसाद डाक द्वारा भेजा जाता है।",
    },
    {
      q: "विशेष अनुष्ठान या महाहवन के लिए कितने दिन पूर्व संपर्क करना चाहिए?",
      a: "सामग्री की शुद्धता एवं शुभ मुहूर्त के चयन हेतु कम से कम 2 से 3 दिन पूर्व संपर्क करने की अनुशंसा की जाती है, ताकि संपूर्ण वैदिक तैयारी समय पर हो सके।",
    },
    {
      q: "नलखेड़ा में भक्तों के ठहरने (गेस्ट हाउस / धर्मशाला) की क्या व्यवस्था है?",
      a: "मंदिर परिसर एवं नलखेड़ा कस्बे में शासकीय प्रबंध समिति के अतिथि गृह एवं स्वच्छ निजी धर्मशालाएँ उपलब्ध हैं।",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] pb-16 sm:pb-24">
      {/* ================= 1. DEDICATED CONTACT HERO SECTION COMPONENT ================= */}
      <ContactHero />

      {/* ================= 2. QUICK CONTACT CARDS (4 CHANNELS: HAWAN PHONE, KUNDALI PHONE, EMAIL, INSTAGRAM) ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 lg:-mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Card 1: Hawan & Puja Booking Hotline */}
          <div className="rounded-2xl sm:rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-5 flex flex-col items-center text-center hover:-translate-y-1 transition-colors duration-300">
            <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-amber-50 border-2 border-amber-400 text-[#AF0807] mb-2.5 shadow-sm">
              <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-[#AF0807]" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-950 mb-1">
              हवन व पूजा बुकिंग
            </span>
            <a
              href="tel:+917223083313"
              className="font-serif text-base sm:text-lg lg:text-xl font-black text-[#AF0807] hover:text-[#7A0505] transition-colors"
            >
              +91 72230 83313
            </a>
            <p className="text-[11px] text-stone-600 mt-1">
              हवन, अनुष्ठान व मुहूर्त आरक्षण
            </p>
          </div>

          {/* Card 2: Kundali & Jyotish Desk */}
          <div className="rounded-2xl sm:rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-5 flex flex-col items-center text-center hover:-translate-y-1 transition-colors duration-300">
            <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-amber-50 border-2 border-amber-400 text-[#AF0807] mb-2.5 shadow-sm">
              <Compass className="h-5 w-5 sm:h-6 sm:w-6 text-[#AF0807]" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-950 mb-1">
              कुंडली व ज्योतिष परामर्श
            </span>
            <a
              href="tel:+919575664204"
              className="font-serif text-base sm:text-lg lg:text-xl font-black text-[#AF0807] hover:text-[#7A0505] transition-colors"
            >
              +91 95756 64204
            </a>
            <p className="text-[11px] text-stone-600 mt-1">
              जन्मपत्रिका, ग्रह दोष व उपाय
            </p>
          </div>

          {/* Card 3: Email / Official Inquiry */}
          <div className="rounded-2xl sm:rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-5 flex flex-col items-center text-center hover:-translate-y-1 transition-colors duration-300">
            <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-amber-50 border-2 border-amber-400 text-[#AF0807] mb-2.5 shadow-sm">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#AF0807]" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-950 mb-1">
              आधिकारिक ईमेल
            </span>
            <a
              href="mailto:AshthamMahavidhya@gmail.com"
              className="font-serif text-xs sm:text-sm font-bold text-[#3E0B02] hover:text-[#AF0807] transition-colors leading-tight break-all"
            >
              AshthamMahavidhya@gmail.com
            </a>
            <p className="text-[11px] text-stone-600 mt-1">
              ई-संकल्प एवं आधिकारिक पत्राचार
            </p>
          </div>

          {/* Card 4: Official Instagram */}
          <div className="rounded-2xl sm:rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-5 flex flex-col items-center text-center hover:-translate-y-1 transition-colors duration-300">
            <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-pink-50 border-2 border-pink-400 text-pink-600 mb-2.5 shadow-sm">
              <InstagramIcon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-pink-950 mb-1">
              आधिकारिक इंस्टाग्राम
            </span>
            <a
              href="https://www.instagram.com/ashtham_mahavidhya?dlrf=c2kxa2h4dGl6ZG1x"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-xs sm:text-sm font-bold text-[#3E0B02] hover:text-pink-600 transition-colors leading-tight truncate max-w-full"
            >
              @ashtham_mahavidhya
            </a>
            <p className="text-[11px] text-stone-600 mt-1">
              दैनिक दिव्य दर्शन व मंदिर अपडेट्स
            </p>
          </div>

        </div>
      </section>

      {/* ================= 3. "मंदिर कैसे पहुंचे" (HOW TO REACH NALKHEDA SIDDHAPEETH) - BEFORE FORM ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        {/* Left Aligned Section Header with Better UI */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-5 border-b border-amber-200/60 mb-8 sm:mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100/90 border border-amber-300 px-3 py-1 mb-2.5 shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-[#AF0807]" />
              <span className="text-xs font-bold text-[#AF0807] uppercase tracking-wider">
                यात्रा एवं मार्गदर्शिका
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-8 w-1.5 bg-gradient-to-b from-[#AF0807] via-[#940706] to-amber-500 rounded-full shrink-0" />
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight">
                माँ बगलामुखी मंदिर कैसे पहुंचे?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
              शासकीय माँ बगलामुखी सिद्धपीठ, नलखेड़ा (मध्य प्रदेश) देश के प्रमुख नगरों से रेल, सड़क व वायु मार्ग द्वारा सुगमता से जुड़ा हुआ है।
            </p>
          </div>

          <a
            href="https://www.google.com/maps/dir//23.8413611,76.2356389/@23.8392856,76.2303308,16z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-colors border border-amber-300/40 shrink-0 self-start md:self-auto cursor-pointer"
          >
            <MapPin className="h-4 w-4 text-amber-300" />
            <span>गूगल मैप्स नेविगेशन (दिशा-निर्देश)</span>
            <ExternalLink className="h-3.5 w-3.5 text-amber-200 opacity-90" />
          </a>
        </div>

        {/* 3 Transit Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          
          {/* 1. By Train */}
          <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 p-6 sm:p-7 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] hover:-translate-y-1 transition-colors duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-300 text-[#AF0807] group-hover:scale-105 transition-transform shadow-xs">
                  <Train className="h-6 w-6 text-[#AF0807]" />
                </div>
                <span className="text-[11px] font-bold text-amber-950 bg-amber-100/80 border border-amber-300/80 rounded-full px-3 py-0.5 shadow-2xs">
                  रेलवे जंक्शन
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#3E0B02] mb-2">
                ट्रेन द्वारा (By Train)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                निकटतम रेलवे स्टेशन <strong>शाजापुर (58 किमी)</strong> एवं <strong>उज्जैन जंक्शन (98 किमी)</strong> दूर है। उज्जैन रेलवे स्टेशन मुंबई, दिल्ली, हैदराबाद, भोपाल, कोटा, जयपुर व बैंगलोर जैसे प्रमुख शहरों से सीधा जुड़ा है।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-amber-100/70 flex items-center justify-between text-xs font-bold text-[#AF0807] bg-amber-50/70 rounded-2xl px-3.5 py-2.5 border border-amber-200/60">
              <span>शाजापुर: 58 किमी</span>
              <span className="text-amber-400">•</span>
              <span>उज्जैन: 98 किमी</span>
            </div>
          </div>

          {/* 2. By Road */}
          <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 p-6 sm:p-7 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] hover:-translate-y-1 transition-colors duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-300 text-[#AF0807] group-hover:scale-105 transition-transform shadow-xs">
                  <Car className="h-6 w-6 text-[#AF0807]" />
                </div>
                <span className="text-[11px] font-bold text-amber-950 bg-amber-100/80 border border-amber-300/80 rounded-full px-3 py-0.5 shadow-2xs">
                  सड़क मार्ग / हाइवे
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#3E0B02] mb-2">
                सड़क मार्ग द्वारा (By Road)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                नलखेड़ा सड़क मार्ग से अच्छी तरह जुड़ा है। आप यहाँ टैक्सी किराए पर लेकर या उज्जैन (98 किमी), इंदौर (156 किमी), भोपाल (182 किमी) और कोटा राजस्थान (191 किमी) से बस पकड़कर सीधे आ सकते हैं।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-amber-100/70 flex items-center justify-between text-xs font-bold text-[#AF0807] bg-amber-50/70 rounded-2xl px-3.5 py-2.5 border border-amber-200/60">
              <span>इंदौर: 156 किमी</span>
              <span className="text-amber-400">•</span>
              <span>भोपाल: 182 किमी</span>
            </div>
          </div>

          {/* 3. By Air */}
          <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 p-6 sm:p-7 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] hover:-translate-y-1 transition-colors duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-300 text-[#AF0807] group-hover:scale-105 transition-transform shadow-xs">
                  <Plane className="h-6 w-6 text-[#AF0807]" />
                </div>
                <span className="text-[11px] font-bold text-amber-950 bg-amber-100/80 border border-amber-300/80 rounded-full px-3 py-0.5 shadow-2xs">
                  अंतरराष्ट्रीय एयरपोर्ट
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#3E0B02] mb-2">
                वायु मार्ग द्वारा (By Air)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                निकटतम हवाई अड्डा <strong>देवी अहिल्या बाई होलकर अंतरराष्ट्रीय एयरपोर्ट, इंदौर (156 किमी)</strong> है। यह दिल्ली, मुंबई, हैदराबाद, अहमदाबाद, कोलकाता, बेंगलुरु और रायपुर से नियमित सीधी उड़ानों से जुड़ा हुआ है।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-amber-100/70 text-center text-xs font-bold text-[#AF0807] bg-amber-50/70 rounded-2xl px-3.5 py-2.5 border border-amber-200/60">
              इंदौर एयरपोर्ट: 156 किमी (~3.5 घंटे सड़क मार्ग)
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. 2-COLUMN MAIN CONTENT (FORM + RIGHT CARDS) ================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT COLUMN: Interactive Inquiry Form (col-span-7) ================= */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-3 w-1 bg-[#AF0807] rounded-full" />
                <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-[#3E0B02]">
                  सीधी ऑनलाइन पूछताछ व संकल्प फॉर्म
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-stone-600">
                नीचे अपनी आवश्यकता चुनें (हवन-अनुष्ठान अथवा जन्म कुंडली विचार) और विवरण दर्ज करें।
              </p>
            </div>
            <ContactForm />
          </div>

          {/* ================= RIGHT COLUMN: Direct Info Cards (col-span-5) ================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Pandit Deepak Sharma Profile Card */}
            <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 sm:p-7 relative overflow-hidden transition-colors duration-300">
              <div className="flex items-center gap-4 pb-5 border-b border-stone-100">
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0 shadow-sm">
                  <Image
                    src="/images/pandit-deepak-sharma.jpg"
                    alt="पंडित दीपक शर्मा"
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#AF0807] bg-amber-500/15 border border-amber-400/50 rounded-md px-2 py-0.5 mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>परामर्श हेतु उपलब्ध</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#3E0B02]">
                    पंडित दीपक शर्मा
                  </h3>
                  <p className="text-xs text-stone-500">
                    माँ बगलामुखी अनन्य उपासक • 5+ वर्ष अनुभव
                  </p>
                </div>
              </div>

              {/* Pandit Ji Credentials Highlights */}
              <div className="mt-4 space-y-2 text-xs text-stone-700">
                <p>
                  <strong>दीक्षा व शिक्षा:</strong> कर्मकांड — महामृत्युंजय वेद विद्यालय (उज्जैन)
                </p>
                <p>
                  <strong>संस्थान:</strong> श्री वशिष्ठ ज्योतिष संस्थान केन्द्र संबद्ध
                </p>
                <p>
                  <strong>विशेषज्ञता:</strong> माँ बगलामुखी महाहवन, तांत्रिक अनुष्ठान, शत्रु दमन, मुकदमा विजय एवं सूक्ष्म कुंडली विश्लेषण।
                </p>
              </div>

              {/* Direct Calling & WhatsApp */}
              <div className="mt-5 bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-center">
                <span className="text-xs font-semibold text-stone-600 uppercase tracking-wider block">
                  सीधा संपर्क नंबर (Calling & WhatsApp)
                </span>
                <a
                  href="tel:+917223083313"
                  className="font-serif text-2xl sm:text-3xl font-extrabold text-[#AF0807] hover:text-[#7A0505] transition-colors mt-1 inline-block"
                >
                  +91 72230 83313
                </a>
                <p className="text-[11px] text-stone-500 mt-1">
                  समय: प्रातः 06:00 बजे से रात्रि 09:30 बजे तक
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <a
                  href="tel:+917223083313"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#AF0807] hover:bg-[#8B0605] text-white text-xs font-bold shadow-sm transition-colors"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>कॉल करें</span>
                </a>
                <a
                  href="https://wa.me/917223083313?text=जय%20माँ%20बगलामुखी!%20पंडित%20दीपक%20शर्मा%20जी%2C%20मुझे%20पूजा%20व%20परामर्श%20के%20बारे%20में%20जानकारी%20चाहिए।"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-xs font-bold shadow-sm transition-colors border border-amber-300/40"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-amber-300" />
                  <span>व्हाट्सएप करें</span>
                </a>
              </div>
            </div>

            {/* Card 2: Temple Darshan Timings */}
            <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 sm:p-7 transition-colors duration-300">
              <div className="flex items-center gap-2.5 mb-3 text-[#AF0807]">
                <Clock className="h-5 w-5" />
                <h3 className="font-serif text-base font-bold text-[#3E0B02]">
                  दैनिक दर्शन एवं आरती समय सारणी
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs text-stone-700">
                <li className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span className="font-semibold text-stone-900">दर्शन समय (पट खुले हैं)</span>
                  <span className="font-bold text-[#AF0807]">प्रातः 06:00 - रात्रि 09:30</span>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span>प्रातः महाआरती</span>
                  <span className="font-semibold text-stone-900">प्रातः 06:00 बजे</span>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span>भोग एवं शृंगार</span>
                  <span className="font-semibold text-stone-900">दोपहर 12:00 बजे</span>
                </li>
                <li className="flex items-center justify-between py-1.5">
                  <span>संध्या दिव्य महाआरती</span>
                  <span className="font-semibold text-stone-900">सायं 07:30 बजे</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Vedic Credential Badges */}
            <div className="rounded-3xl bg-amber-50/60 border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] p-5 sm:p-6 space-y-3.5 transition-colors duration-300">
              <div className="flex items-start gap-2.5 text-xs text-[#3E0B02]">
                <ShieldCheck className="h-4 w-4 text-[#AF0807] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">100% शास्त्रीय एवं गोपनीय संकल्प:</span>
                  <p className="text-[11px] text-stone-600 mt-0.5">
                    प्रत्येक यजमान का नाम, गोत्र व समस्या अनुसार व्यक्तिगत अनुष्ठान।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#3E0B02]">
                <Flame className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">प्रत्यक्ष एवं ऑनलाइन (ई-संकल्प) सुविधा:</span>
                  <p className="text-[11px] text-stone-600 mt-0.5">
                    देश-विदेश के यजमान लाइव वीडियो दर्शन एवं संकल्प के साथ हवन करा सकते हैं।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#3E0B02]">
                <Award className="h-4 w-4 text-[#AF0807] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">डाक द्वारा अभिमंत्रित रक्षा सूत्र व भस्म:</span>
                  <p className="text-[11px] text-stone-600 mt-0.5">
                    अनुष्ठान पूर्ण होने पर माता जी का पवित्र रक्षा सूत्र व प्रसाद आपके पते पर भेजा जाता है।
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ================= 5. INTERACTIVE GOOGLE MAP EMBED ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-4 sm:p-6 overflow-hidden transition-colors duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-stone-100 mb-4">
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#3E0B02]">
                माँ बगलामुखी मंदिर नलखेड़ा - सैटेलाइट एवं जीपीएस लोकेशन
              </h3>
              <p className="text-xs text-stone-500">
                लखुंदर नदी तट, तहसील नलखेड़ा, जिला आगर मालवा (म.प्र.)
              </p>
            </div>
            <a
              href="https://www.google.com/maps/dir//23.8413611,76.2356389"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#AF0807] hover:underline"
            >
              <span>बड़ा नक्शा देखें</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3649.359324470771!2d76.235637!3d23.841371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDUwJzI4LjkiTiA3NsKwMTQnMDguMyJF!5e0!3m2!1sen!2sin!4v1739616954385!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maa Baglamukhi Mandir Nalkheda Location Map"
              sandbox="allow-scripts allow-popups"
            />
          </div>
        </div>
      </section>

      {/* ================= 6. DEVOTEE FAQS (अक्सर पूछे जाने वाले प्रश्न) ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14 sm:mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 mb-2">
              <HelpCircle className="h-3.5 w-3.5 text-[#AF0807]" />
              <span className="text-xs font-bold text-[#AF0807] uppercase tracking-wider">
                भक्त सहायता केंद्र
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#3E0B02]">
              अक्सर पूछे जाने वाले प्रश्न (FAQs)
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqList.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 p-5 shadow-[0_4px_16px_-4px_rgba(217,119,6,0.10)] transition-colors duration-300"
              >
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#3E0B02] mb-1.5 flex items-start gap-2">
                  <span className="text-[#AF0807] font-bold">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
