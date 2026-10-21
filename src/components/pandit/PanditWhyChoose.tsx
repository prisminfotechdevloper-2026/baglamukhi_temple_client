import {
  GraduationCap,
  ShieldCheck,
  UserCheck,
  Video,
  PhoneCall,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";

export default function PanditWhyChoose() {
  const points = [
    {
      icon: GraduationCap,
      title: "उज्जैन वेद विद्यालय शास्त्रीय दीक्षा",
      desc: "महामृत्युंजय वेद विद्यालय (उज्जैन) से कर्मकाण्ड एवं संस्कृत का विधिवत शास्त्रीय अध्ययन। मंत्रों के शुद्ध सस्वर उच्चारण की वैदिक परंपरा।",
    },
    {
      icon: ShieldCheck,
      title: "100% सात्विक पीताम्बरा पद्धति",
      desc: "माँ बगलामुखी के शास्त्रीय नियमों, पीले वस्त्र, हल्दी की माला एवं शुद्ध गाय के घी और विशिष्ट जड़ी-बूटियों से अनुष्ठान।",
    },
    {
      icon: UserCheck,
      title: "व्यक्तिगत नाम-गोत्र साक्षात संकल्प",
      desc: "प्रत्येक यजमान का अलग, व्यक्तिगत नाम-गोत्र संकल्प लिया जाता है। किसी भी प्रकार का सामूहिक या अस्पष्ट संकल्प नहीं होता।",
    },
    {
      icon: Video,
      title: "लाइव वीडियो दर्शन व ई-संकल्प",
      desc: "दूर रहने वाले भक्तों के लिए WhatsApp / Zoom पर सीधे लाइव जुड़कर संकल्प कराने और हवन के साक्षात दर्शन की पारदर्शी सुविधा।",
    },
    {
      icon: PhoneCall,
      title: "सीधा संपर्क — कोई बिचौलिया नहीं",
      desc: "मंदिर परिसर में किसी एजेंट या मध्यस्थ के बिना, सीधे पंडित दीपक शर्मा जी से व्यक्तिगत परामर्श एवं मार्गदर्शन।",
    },
    {
      icon: PackageCheck,
      title: "डाक द्वारा सिद्ध भस्म व रक्षा सूत्र",
      desc: "हवन के बाद अभिमंत्रित पीताम्बरा रक्षा सूत्र, सिद्ध भस्म एवं माँ का प्रसाद स्पीड पोस्ट ट्रैकिंग के साथ सुरक्षित घर तक।",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: Left Aligned */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              शुद्धता एवं प्रामाणिकता • विश्वास का आधार
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            पंडित दीपक शर्मा जी से ही अनुष्ठान क्यों कराएं?
          </h2>
          <p className="font-serif text-xs sm:text-sm text-stone-600 mt-2">
            माँ बगलामुखी तंत्र साधना अत्यंत संवेदनशील और शक्तिशाली होती है; इसमें शुद्धता, नियम एवं गुरु परंपरा का होना अनिवार्य है।
          </p>
        </div>

        {/* 6 Cards Grid (3x2 on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 border border-amber-300 text-[#AF0807] shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-extrabold text-amber-900 bg-amber-100/70 border border-amber-300/60 rounded-full px-2.5 py-0.5">
                      नियम 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#3E0B02] mb-2 leading-snug">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-4">
                    {pt.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-bold text-amber-950">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#AF0807] shrink-0" />
                  <span>100% प्रामाणिक परंपरा</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
