"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    q: "क्या माँ बगलामुखी अनुष्ठान में यजमान की व्यक्तिगत उपस्थिति अनिवार्य है?",
    a: "नहीं, शास्त्रोक्त तंत्र विधान में 'संकल्प' और 'भाव' का महत्व सर्वोपरि है। यदि आप कार्य, स्वास्थ्य या अत्यधिक दूरी के कारण नलखेड़ा नहीं आ सकते, तो पंडित दीपक शर्मा जी द्वारा लाइव वीडियो कॉल पर अग्नि के समक्ष यजमान के नाम, गोत्र व स्थान से प्रत्यक्ष संकल्प कराया जाता है। इसका फल प्रत्यक्ष उपस्थिति के समान ही प्राप्त होता है।",
  },
  {
    id: 2,
    q: "पूजा अथवा महाहवन कराने हेतु यजमान को क्या विवरण उपलब्ध कराने होते हैं?",
    a: "संकल्प हेतु यजमान का पूरा नाम, गोत्र (यदि गोत्र ज्ञात न हो तो कश्यप गोत्र से संकल्प होता है), पिता का नाम, वर्तमान निवास शहर एवं जिस संकट (जैसे कोर्ट केस, शत्रु बाधा, व्यापार हानि, विवाह विलंब आदि) के निवारण हेतु अनुष्ठान कराया जा रहा है, उसका विवरण आवश्यक होता है।",
  },
  {
    id: 3,
    q: "अनुष्ठान उपरांत सिद्ध रक्षा सूत्र, भस्म एवं प्रसाद कैसे प्राप्त होगा?",
    a: "हवन की पूर्णाहुति के पश्चात माँ पीताम्बरा के चरणों में स्पर्शित व अभिमंत्रित रक्षा सूत्र, सिद्ध भस्म एवं यंत्र को सुरक्षित वाटरप्रूफ वैदिक पैकिंग में स्पीड पोस्ट / कूरियर द्वारा आपके दिए गए पते पर भेजा जाता है। स्पीड पोस्ट की ट्रैकिंग आईडी भी यजमान को व्हाट्सएप पर साझा की जाती है।",
  },
  {
    id: 4,
    q: "बगलामुखी साधना में पीले रंग (पीताम्बरा) का क्या शास्त्रीय महत्व है?",
    a: "माँ बगलामुखी को 'पीताम्बरा' कहा गया है। पीला रंग ज्ञान, गुरु तत्व, सूर्य का तेज एवं स्तम्भन शक्ति का प्रतीक है। अनुष्ठान में पीले वस्त्र, हल्दी की सिद्ध माला, पीली सरसों, पीत समिधा एवं पीले पुष्पों के प्रयोग से देवी का तेज शीघ्र जाग्रत होता है और विरोधियों की नकारात्मक ऊर्जा स्तम्भित होती है।",
  },
  {
    id: 5,
    q: "सवा लाख (1,25,000) महामंत्र अनुष्ठान और 36,000 जप में क्या अंतर है?",
    a: "सवा लाख महामंत्र अखंड अनुष्ठान 3 से 7 दिनों तक चलने वाली सर्वोच्च तांत्रिक-वैदिक महासाधना है, जो प्राण संकट, असाध्य मुकदमों, गंभीर तंत्र बाधा या राजनीति में सर्वोच्च विजय हेतु की जाती है। इसमें 12,500 आहुतियों का दशांश हवन होता है। वहीं 36,000 जप 3 से 5 दिनों में शीघ्र फलदायी संकल्प व मध्यम बाधाओं के निवारण हेतु किया जाता है।",
  },
  {
    id: 6,
    q: "पंडित दीपक शर्मा जी से कुंडली परामर्श अथवा हवन बुकिंग हेतु कैसे संपर्क करें?",
    a: "आप सीधे फोन नंबर +91 82392 39249 पर कॉल कर सकते हैं अथवा व्हाट्सएप संदेश भेजकर अपनी समस्या साझा कर सकते हैं। मंदिर में किसी भी प्रकार का बिचौलिया नहीं है; आपकी बात सीधे पंडित जी से होती है।",
  },
];

export default function PanditFAQ() {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 6);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 border-t border-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: Strictly Left Aligned on max-w-7xl */}
        <div className="text-left mb-10 sm:mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              जिज्ञासा एवं समाधान • अक्सर पूछे जाने वाले प्रश्न
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            अनुष्ठान, ई-संकल्प एवं दर्शन संबंधी महत्वपूर्ण प्रश्न
          </h2>
          <p className="font-serif text-xs sm:text-sm text-stone-600 mt-2">
            बगलामुखी अनुष्ठान से पूर्व यजमानों के मन में आने वाले प्रमुख प्रश्नों के शास्त्रीय उत्तर।
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
                      {faq.q}
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
                      <p>{faq.a}</p>
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
                      {faq.q}
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
                      <p>{faq.a}</p>
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
