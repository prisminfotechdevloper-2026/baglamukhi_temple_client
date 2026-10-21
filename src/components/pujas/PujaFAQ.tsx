"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";

interface FAQItem {
  id: number;
  q: TranslationPair;
  a: TranslationPair;
}

const pujaFaqs: FAQItem[] = [
  {
    id: 1,
    q: {
      hi: "विशेष अनुष्ठान अथवा महाहवन हेतु कितने दिन पूर्व बुकिंग करानी चाहिए?",
      en: "How many days in advance should I book for a Mahahawan or Anushthan?",
    },
    a: {
      hi: "तांत्रिक सामग्रियों की शुद्धता, पीत द्रव्यों की व्यवस्था एवं शुभ नक्षत्र/मुहूर्त के निर्धारण हेतु कम से कम 2 से 3 दिवस पूर्व संपर्क करना उत्तम रहता है, ताकि संपूर्ण वैदिक तैयारी समय पर हो सके।",
      en: "To arrange authentic Tantric samagri, yellow sacred offerings, and calculate auspicious Nakshatra muhurtas, contacting 2 to 3 days in advance is recommended.",
    },
  },
  {
    id: 2,
    q: {
      hi: "क्या मैं घर बैठे ऑनलाइन लाइव वीडियो संकल्प से अनुष्ठान करा सकता हूँ?",
      en: "Can I participate in the Anushthan from home via online Live Video Sankalp?",
    },
    a: {
      hi: "हाँ, जो यजमान कार्य, स्वास्थ्य अथवा दूरी के कारण नलखेड़ा नहीं आ सकते, वे WhatsApp अथवा Zoom वीडियो कॉल पर साक्षात अग्नि के सम्मुख अपने नाम, गोत्र व स्थान से संकल्प ले सकते हैं। इसका फल प्रत्यक्ष उपस्थिति के समान ही प्राप्त होता है।",
      en: "Yes, devotees unable to visit Nalkheda due to distance or health can join via WhatsApp or Zoom Live Video Call before the consecrated fire. You receive direct personal Name-Gotra Sankalp with equal spiritual merit.",
    },
  },
  {
    id: 3,
    q: {
      hi: "हवन के उपरांत सिद्ध रक्षा सूत्र, भस्म एवं प्रसाद मुझे कैसे प्राप्त होगा?",
      en: "How will I receive the energized Raksha Sutra, holy Bhasma, and Prasad after Hawan?",
    },
    a: {
      hi: "अनुष्ठान की पूर्णाहुति के पश्चात माँ पीताम्बरा के चरणों में अभिमंत्रित रक्षा सूत्र, सिद्ध भस्म एवं यंत्र को सुरक्षित वाटरप्रूफ वैदिक पैकिंग में स्पीड पोस्ट / कूरियर द्वारा आपके पते पर भेजा जाता है। स्पीड पोस्ट की ट्रैकिंग आईडी भी यजमान को व्हाट्सएप पर साझा की जाती है।",
      en: "Following Purnahuti, consecrated Peetambara Raksha Sutra, sacred Bhasma, and energized Yantra are securely packed in waterproof Vedic packaging and sent via Speed Post with tracking ID shared on WhatsApp.",
    },
  },
  {
    id: 4,
    q: {
      hi: "क्या एक ही अनुष्ठान में पूरे परिवार के सदस्यों के नाम जोड़े जा सकते हैं?",
      en: "Can names of entire family members be included in a single Anushthan?",
    },
    a: {
      hi: "हाँ, मुख्य यजमान के साथ उनकी धर्मपत्नी, बच्चों एवं माता-पिता के नाम-गोत्र भी संकल्प में सम्मिलित किए जा सकते हैं, जिससे संपूर्ण कुल को माँ बगलामुखी की छत्रछाया और रक्षा कवच प्राप्त होता है।",
      en: "Yes, alongside the primary Yajman, names and Gotra of spouse, children, and parents can be included in the Sankalp for comprehensive divine protection and prosperity of the entire family.",
    },
  },
  {
    id: 5,
    q: {
      hi: "बगलामुखी साधना के दौरान यजमान को किन नियमों का पालन करना होता है?",
      en: "What guidelines should the Yajman follow during Baglamukhi Sadhana?",
    },
    a: {
      hi: "अनुष्ठान अवधि के दौरान यजमान को पूर्ण सात्विक आहार (मांसाहार, मदिरा, लहसुन-प्याज का त्याग) एवं शुद्ध आचरण का पालन करना चाहिए। संकल्प के समय पीले वस्त्र धारण करना अत्यंत कल्याणकारी माना गया है।",
      en: "During the anushthan period, the Yajman must observe a Sattvic lifestyle (avoiding non-vegetarian food, alcohol, onion, and garlic). Wearing yellow attire during Sankalp is highly auspicious.",
    },
  },
  {
    id: 6,
    q: {
      hi: "दक्षिणा, सामग्री एवं बुकिंग प्रक्रिया के लिए किससे संपर्क करना होगा?",
      en: "Who should I contact for Dakshina, samagri details, and booking?",
    },
    a: {
      hi: "मंदिर में किसी भी प्रकार का एजेंट या बिचौलिया नहीं है। आप सीधे पंडित दीपक शर्मा जी के आधिकारिक मोबाइल नंबर +91 72230 83313 पर कॉल अथवा व्हाट्सएप संदेश भेजकर संपूर्ण जानकारी प्राप्त कर सकते हैं।",
      en: "There are no middlemen or agents. You can directly contact authorized purohit Pandit Deepak Sharma Ji on +91 72230 83313 via phone or WhatsApp for authentic details.",
    },
  },
];

export default function PujaFAQ() {
  const { t } = useLanguage();
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const leftFaqs = pujaFaqs.slice(0, 3);
  const rightFaqs = pujaFaqs.slice(3, 6);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 border-t border-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: Strictly Left Aligned on max-w-7xl */}
        <div className="text-left mb-10 sm:mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              {t({
                hi: "जिज्ञासा एवं समाधान • पूजा संबंधी अक्सर पूछे जाने वाले प्रश्न",
                en: "Inquiry & Resolution • Frequently Asked Questions",
              })}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            {t({
              hi: "अनुष्ठान बुकिंग, मुहूर्त एवं संकल्प संबंधी महत्वपूर्ण प्रश्न",
              en: "Important Questions on Puja Booking, Muhurta & Sankalp",
            })}
          </h2>
          <p className="font-serif text-xs sm:text-sm text-stone-600 mt-2">
            {t({
              hi: "नलखेड़ा सिद्धपीठ में महाहवन एवं पूजा संपन्न कराने से पूर्व यजमानों के प्रमुख प्रश्न।",
              en: "Key answers for devotees before organizing Mahahawan and Pujas at Nalkheda Siddhapeeth.",
            })}
          </p>
        </div>

        {/* 2-Column Layout (3 Left, 3 Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: First 3 Questions ================= */}
          <div className="space-y-4">
            {leftFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl sm:rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_4px_16px_-4px_rgba(217,119,6,0.1)] transition-all duration-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#3E0B02]">
                      {t(faq.q)}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-50 text-[#AF0807] border border-amber-300 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      <p>{t(faq.a)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ================= RIGHT COLUMN: Next 3 Questions ================= */}
          <div className="space-y-4">
            {rightFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl sm:rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_4px_16px_-4px_rgba(217,119,6,0.1)] transition-all duration-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#3E0B02]">
                      {t(faq.q)}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-50 text-[#AF0807] border border-amber-300 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      <p>{t(faq.a)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
