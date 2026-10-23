"use client";

import { CheckCircle2, PhoneCall, Calendar, Flame, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/data/siteConfig";
import { usePujaBooking } from "@/context/PujaBookingContext";

export default function HowBookingWorksSection() {
  const { t } = useLanguage();
  const { openBookingModal } = usePujaBooking();

  const steps = [
    {
      stepNumber: "01",
      title: {
        hi: "पूजा व अनुष्ठान चुनें",
        en: "Select Puja & Anushthan",
      },
      desc: {
        hi: "अपनी समस्या (शत्रु बाधा, कोर्ट केस, व्यापार वृद्धि अथवा मनोकामना) के अनुसार उपयुक्त हवन चुनें।",
        en: "Choose the appropriate Hawan according to your need—protection, legal victory, or prosperity.",
      },
      icon: Flame,
    },
    {
      stepNumber: "02",
      title: {
        hi: "जानकारी दें या संपर्क करें",
        en: "Share Details or Connect",
      },
      desc: {
        hi: "ऑनलाइन बुकिंग फॉर्म भरें या सीधे WhatsApp / कॉल पर अपना नाम, पिता का नाम व गोत्र बताएं।",
        en: "Submit the simple enquiry form or share your name, father's name, and gotra directly via WhatsApp/Call.",
      },
      icon: Calendar,
    },
    {
      stepNumber: "03",
      title: {
        hi: "शुभ मुहूर्त व संकल्प",
        en: "Muhurat Confirmation & Sankalp",
      },
      desc: {
        hi: "पंडित दीपक शर्मा जी द्वारा शुभ मुहूर्त में प्रत्यक्ष या लाइव वीडियो कॉल पर शास्त्रोक्त संकल्प। प्रसाद डाक द्वारा प्राप्त करें।",
        en: "Participate in person or via live video call as Pandit Ji conducts the Vedic Sankalp. Receive consecrated prasad by post.",
      },
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-[#FFFDF8] py-10 sm:py-14 lg:py-16 border-b border-[#EBDCB9]/80"
      aria-label="पूजा बुकिंग प्रक्रिया"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-left max-w-3xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
              {t({
                hi: "सरल एवं पारदर्शी प्रक्रिया",
                en: "Simple & Transparent Process",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#4A0C16] tracking-tight leading-snug pt-1 mb-2.5">
            {t({
              hi: "3 आसान चरणों में पूजा बुकिंग",
              en: "How Booking Works in 3 Simple Steps",
            })}
          </h2>

          <p className="text-[#5C3A21] text-xs sm:text-sm md:text-base leading-relaxed">
            {t({
              hi: "बिना किसी बिचौलिए या एजेंट के सीधे नलखेड़ा सिद्धपीठ के मुख्य यज्ञाचार्य से जुड़ें।",
              en: "Connect directly with the Chief Priest at Nalkheda Siddhapeeth without any agents or intermediaries.",
            })}
          </p>
        </div>

        {/* ================= 3 STEPS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stepNumber}
                className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#EBD9B8] border-l-[5px] border-l-[#D89B18] hover:border-l-[#8B0000] p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-black text-[#D89B18] tracking-wider">
                      {step.stepNumber}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-white border border-[#D89B18]/60 flex items-center justify-center text-[#AF0807] shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-[#3E0B02] text-lg mb-2">
                    {t(step.title)}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {t(step.desc)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= REASSURANCE BAR ================= */}
        <div className="mt-8 sm:mt-10 rounded-2xl bg-[#FFF9ED] border border-amber-300/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#AF0807] text-white flex items-center justify-center shrink-0">
              <PhoneCall className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#3E0B02]">
                {t({
                  hi: "कोई संशय या प्रश्न है? सीधे पंडित जी से पूछें",
                  en: "Have questions? Speak directly with Pandit Ji",
                })}
              </h4>
              <p className="text-xs text-stone-600">
                {t({
                  hi: "आधिकारिक हेल्पलाइन: +91 72240 83313 • नलखेड़ा सिद्धपीठ",
                  en: "Official Helpline: +91 72240 83313 • Nalkheda Siddhapeeth",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#AF0807] hover:bg-[#8B0605] text-white font-bold text-xs sm:text-sm shadow-xs cursor-pointer"
            >
              <span>{t({ hi: "पूजा बुक करें", en: "Book Puja" })}</span>
            </button>
            <a
              href={getWhatsAppUrl("जय माँ बगलामुखी! पंडित जी, मुझे पूजा बुकिंग के संदर्भ में जानकारी चाहिए।")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-xs"
            >
              <WhatsAppIcon className="h-4 w-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
