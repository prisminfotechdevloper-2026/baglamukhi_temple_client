import Link from "next/link";
import { ShieldAlert, Flame, Scale, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PanditServicesSummary() {
  const mainServices = [
    {
      icon: ShieldAlert,
      title: "शत्रु बाधा एवं तंत्र दोष निवारण महाहवन",
      subtitle: "अकारण शत्रुता व षड्यंत्र से सुरक्षा",
      description:
        "गुप्त शत्रुओं, व्यावसायिक ईर्ष्या, तंत्र-दोष एवं नजर-बाधा को स्तंभित कर जीवन में शांति, सुरक्षा व विजय की स्थापना।",
      badge: "सर्वाधिक प्रसिद्ध अनुष्ठान",
    },
    {
      icon: Flame,
      title: "सवा लाख (1,25,000) महामंत्र अखंड जाप",
      subtitle: "दशांश महाहवन सहित सर्वोच्च महासाधना",
      description:
        "वेदपाठी विद्वान ब्राह्मणों द्वारा 1,25,000 सिद्ध बगलामुखी मूल मंत्रों का अखंड अनुष्ठान एवं दशांश आहुति यज्ञ।",
      badge: "अखंड तांत्रिक महासाधना",
    },
    {
      icon: Scale,
      title: "कोर्ट-कचहरी व मुकदमा विजय अनुष्ठान",
      subtitle: "न्यायालय विवाद एवं कानूनी सुरक्षा",
      description:
        "वर्षों से लंबित कानूनी विवाद, संपत्ति झगड़े एवं झूठे मुकदमों में सत्य, न्याय व विजय प्राप्ति हेतु विशेष बगलामुखी विधान।",
      badge: "न्यायालयीय मामलों में अचूक",
    },
    {
      icon: TrendingUp,
      title: "व्यापार वृद्धि एवं धनलक्ष्मी महाहवन",
      subtitle: "व्यापारिक मंदी व कर्ज मुक्ति",
      description:
        "दुकान या उद्योग में निरंतर घाटे, धन हानि, अटके हुए धन की प्राप्ति एवं स्थायी समृद्धि हेतु कनकधारा-बगलामुखी यज्ञ।",
      badge: "व्यापार व आर्थिक उन्नति",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              मुख्य अनुष्ठान सेवाएँ • पंडित दीपक शर्मा
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            माँ बगलामुखी मंदिर में संपन्न मुख्य महाहवन
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed">
            पंडित दीपक शर्मा जी द्वारा शास्त्रोक्त वैदिक-तांत्रिक पद्धति से संपन्न कराए जाने वाले प्रमुख अनुष्ठान। व्यक्तिगत उपस्थिति अथवा देश-विदेश से लाइव ई-संकल्प द्वारा सुलभ।
          </p>
        </div>

        {/* 4 Clean Signature Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {mainServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-4">
                    <div className="h-11 w-11 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-[#AF0807]" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      सेवा 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-extrabold text-[#AF0807] uppercase tracking-wider block mb-1">
                    {service.badge}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-[#3E0B02] mb-2 leading-snug group-hover:text-[#AF0807] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-1 text-xs font-semibold text-stone-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#AF0807]" />
                  <span>शास्त्रोक्त संकल्प सहित</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Link Banner to Dedicated /pujas Page */}
        <div className="rounded-3xl bg-gradient-to-r from-[#3E0B02] via-[#5C1004] to-[#2B0701] border-y-0 border-x-4 border-amber-400 p-6 sm:p-8 lg:p-10 text-white shadow-[0_12px_40px_-6px_rgba(62,11,2,0.35)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
              सम्पूर्ण अनुष्ठान सूची
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-200">
              क्या आप सभी 16+ शास्त्रोक्त पूजा एवं महाहवन देखना चाहते हैं?
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-xl">
              कालसर्प दोष, मांगलिक शांति, महामृत्युंजय जाप, राजयोग हवन आदि समस्त अनुष्ठानों का विस्तृत विवरण हमारे पूजा पृष्ठ पर उपलब्ध है।
            </p>
          </div>

          <Link
            href="/pujas"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-xs sm:text-sm font-bold shadow-xl border border-amber-400/80 hover:border-amber-300 transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>सभी 16+ अनुष्ठानों का विवरण देखें</span>
            <ArrowRight className="h-4 w-4 text-amber-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}
