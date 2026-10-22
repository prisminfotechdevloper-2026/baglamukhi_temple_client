import {
  FileText,
  Flame,
  Scroll,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function PanditAnushthanProcess() {
  const steps = [
    {
      step: "01",
      title: "नाम-गोत्र संकल्प व मुहूर्त",
      subtitle: "शुभ नक्षत्र एवं यजमान विवरण",
      description:
        "पंडित जी द्वारा यजमान का पूरा नाम, गोत्र, कुलदेवता, वर्तमान शहर एवं विशिष्ट मनोकामना (शत्रु शांति, मुकदमा, व्यापार वृद्धि, रोग निवारण) का शास्त्रोक्त संकल्प लिया जाता है।",
      highlight: "व्यक्तिगत या लाइव वीडियो संकल्प",
      icon: FileText,
    },
    {
      step: "02",
      title: "पीत वेदी व तांत्रिक सामग्री",
      subtitle: "माँ पीताम्बरा की प्रिय सामग्री",
      description:
        "पीले वस्त्र, हल्दी की सिद्ध माला, पीली सरसों, कमल गट्टा, शुद्ध गाय का घी, भोजपत्र एवं लखुंदर नदी के पवित्र जल से तांत्रिक वेदी व मंडप की स्थापना की जाती है।",
      highlight: "100% शुद्ध वैदिक समिधा",
      icon: Flame,
    },
    {
      step: "03",
      title: "अखंड मंत्र जाप व दशांश हवन",
      subtitle: "वेदपाठी ब्राह्मणों द्वारा आहुतियां",
      description:
        "संकल्पित संख्या अनुसार (11,000 / 36,000 / सवा लाख) शुद्ध सस्वर महामंत्र का जाप किया जाता है। इसके पश्चात शास्त्रोक्त विधि से दशांश हवन आहुतियां अर्पित की जाती हैं।",
      highlight: "दशांश आहुति व तर्पण-मार्जन",
      icon: Scroll,
    },
    {
      step: "04",
      title: "पूर्णाहुति व रक्षा सूत्र प्रेषण",
      subtitle: "सिद्ध भस्म व रक्षा कवच",
      description:
        "श्रीफल पूर्णाहुति, महाआरती एवं क्षमा प्रार्थना के पश्चात माँ के चरणों में अभिमंत्रित पीताम्बरा रक्षा सूत्र, सिद्ध भस्म एवं यंत्र यजमान को सौंपा जाता है अथवा स्पीड पोस्ट से भेजा जाता है।",
      highlight: "स्पीड पोस्ट ट्रैकिंग सुविधा",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: Left-Aligned */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              शास्त्रोक्त कार्यप्रणाली • नलखेड़ा परंपरा
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            अनुष्ठान की संपूर्ण वैदिक प्रक्रिया (चरण-दर-चरण)
          </h2>
          <p className="font-serif text-xs sm:text-sm text-stone-600 mt-2">
            पंडित दीपक शर्मा जी द्वारा माँ बगलामुखी सिद्धपीठ में प्रत्येक अनुष्ठan पूर्ण शुचिता, गोपनीयता एवं शास्त्रीय नियमों के साथ संपन्न किया जाता है।
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-colors duration-300"
              >
                <div>
                  {/* Step Number + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-black text-amber-500/80">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 border border-amber-300 text-[#AF0807]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#3E0B02] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#AF0807] mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Badge */}
                <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-bold text-amber-950">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#AF0807] shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 rounded-2xl bg-amber-50/70 border border-amber-300/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-700">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#AF0807] shrink-0" />
            <span>
              <strong>महत्वपूर्ण सूचना:</strong> बगलामुखी साधना में नियमों का पालन अत्यंत आवश्यक है। किसी भी प्रकार की गुप्त दक्षिणा या भ्रमित करने वाली बातें नहीं की जातीं। संपूर्ण विवरण यजमान को पहले से स्पष्ट बताया जाता है।
            </span>
          </div>
          <a
            href="tel:+917224083313"
            className="shrink-0 font-bold text-[#AF0807] hover:underline"
          >
            मार्गदर्शन हेतु कॉल करें (+91 72240 83313) →
          </a>
        </div>

      </div>
    </section>
  );
}
