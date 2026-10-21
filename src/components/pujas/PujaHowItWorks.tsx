import {
  Search,
  FileText,
  Flame,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";

export default function PujaHowItWorks() {
  const steps = [
    {
      step: "01",
      title: "पूजा / अनुष्ठान का चयन",
      desc: "अपनी समस्या (शत्रु बाधा, मुकदमा, व्यापार हानि, रोग, या कुंडली दोष) अनुसार उपयुक्त अनुष्ठान का चयन करें।",
      icon: Search,
    },
    {
      step: "02",
      title: "नाम-गोत्र विवरण साझा करें",
      desc: "पंडित दीपक शर्मा जी को फोन अथवा व्हाट्सएप पर अपना नाम, पिता का नाम, गोत्र एवं संकल्प की विशिष्ट कामना बताएं।",
      icon: FileText,
    },
    {
      step: "03",
      title: "सिद्धपीठ पर संकल्प व महाहवन",
      desc: "शुभ मुहूर्त में नलखेड़ा सिद्धपीठ पर साक्षात अग्नि के समक्ष प्रत्यक्ष अथवा लाइव वीडियो कॉल पर संकल्प संपन्न होता है।",
      icon: Flame,
    },
    {
      step: "04",
      title: "रक्षा सूत्र व सिद्ध प्रसाद प्राप्ति",
      desc: "हवन उपरांत अभिमंत्रित पीताम्बरा रक्षा सूत्र, भस्म एवं माँ का सिद्ध प्रसाद स्पीड पोस्ट ट्रैकिंग द्वारा घर तक प्रेषित।",
      icon: PackageCheck,
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: Left Aligned */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              सरल एवं पारदर्शी प्रक्रिया • नलखेड़ा सिद्धपीठ
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            अनुष्ठान बुकिंग एवं संपन्न कराने की 4 सरल विधियाँ
          </h2>
          <p className="font-serif text-xs sm:text-sm text-stone-600 mt-2">
            चाहे आप स्वयं नलखेड़ा आएं या घर बैठे लाइव संकल्प लें, प्रक्रिया पूरी तरह पारदर्शी और शास्त्रोक्त रहती है।
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-[#FFFDF9] border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-black text-amber-500/80">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 border border-amber-300 text-[#AF0807]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#3E0B02] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-bold text-amber-950">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#AF0807] shrink-0" />
                  <span>चरण {item.step} संपन्न</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
