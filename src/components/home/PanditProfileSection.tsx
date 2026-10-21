import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Flame,
  ArrowRight,
  PhoneCall,
  Compass,
  CheckCircle2,
} from "lucide-react";

export default function PanditProfileSection() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "वैदिक कर्मकाण्ड व संस्कृत",
      desc: "महामृत्युंजय वेद विद्यालय (उज्जैन) से विधिवत कर्मकाण्ड प्रशिक्षित एवं 12वीं संस्कृत अध्ययन।",
      badge: "वैदिक शिक्षा",
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50/70",
      borderColor: "border-amber-200/80",
    },
    {
      icon: Award,
      title: "श्री वशिष्ट ज्योतिष संस्थान",
      desc: "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र से संबद्ध, 5+ वर्षों का गहन ज्योतिषीय व पूजा अनुभव।",
      badge: "5+ वर्ष अनुभव",
      iconColor: "text-red-700",
      bgColor: "bg-red-50/60",
      borderColor: "border-red-200/80",
    },
    {
      icon: Flame,
      title: "बगलामुखी महाहवन विशेषज्ञ",
      desc: "माँ पीताम्बरा के विशिष्ट तांत्रिक-वैदिक अनुष्ठान, शत्रु बाधा निवारण एवं संकल्पित हवन।",
      badge: "मुख्य साधना",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50/60",
      borderColor: "border-orange-200/80",
    },
    {
      icon: Compass,
      title: "सटीक जन्म कुंडली परामर्श",
      desc: "ग्रह शांति, कालसर्प, पितृ दोष, मांगलिक विचार एवं व्यक्तिगत जीवन समस्याओं का समाधान।",
      badge: "ज्योतिष मर्मज्ञ",
      iconColor: "text-amber-700",
      bgColor: "bg-amber-50/70",
      borderColor: "border-amber-200/80",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 border-b border-stone-200/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= MOBILE HEADER (Visible on Mobile only, Hidden on lg) ================= */}
        <div className="block lg:hidden text-left mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              वैदिक आचार्य परिचय • नलखेड़ा सिद्धपीठ
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            पंडित दीपक शर्मा
          </h2>
          <p className="font-serif text-xs sm:text-sm font-semibold text-[#AF0807] mt-1.5">
            माँ बगलामुखी अनन्य साधक • वैदिक कर्मकाण्ड एवं ज्योतिष मर्मज्ञ
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: Pandit Ji Photo with Floating Badges ================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-amber-300/80 shadow-2xl bg-gradient-to-b from-amber-100 to-stone-100">
              
              {/* Pandit Ji Image */}
              <Image
                src="/images/pandit-deepak-sharma.jpg"
                alt="पंडित दीपक शर्मा - माँ बगलामुखी उपासक नलखेड़ा"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                priority
              />

              {/* Bottom Subtle Gradient for contrast */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

              {/* Floating Top Badge: Upasak */}
              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/60 px-3.5 py-1 text-xs font-bold text-amber-300 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span>माँ बगलामुखी अनन्य उपासक</span>
              </div>

              {/* Bottom Title on Image */}
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <div className="font-serif text-lg sm:text-xl font-bold text-amber-200 leading-tight">
                  पंडित दीपक शर्मा
                </div>
                <div className="text-xs text-stone-200 mt-0.5">
                  नलखेड़ा सिद्धपीठ, आगर-मालवा (म.प्र.)
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute bottom-4 right-4 z-20 hidden sm:inline-flex items-center gap-1 rounded-xl bg-[#AF0807] px-2.5 py-1 text-[11px] font-bold text-white shadow-md border border-red-300/40">
                <Award className="h-3.5 w-3.5" />
                <span>5+ वर्ष अनुभव</span>
              </div>
            </div>

            {/* Verification / Certified Note */}
            <div className="mt-4 flex items-center gap-2.5 text-xs font-bold text-stone-700 bg-gradient-to-r from-amber-50 to-stone-50 border border-amber-300/80 rounded-xl px-4 py-2 shadow-2xs">
              <CheckCircle2 className="h-4 w-4 text-[#AF0807] shrink-0" />
              <span>प्रमाणित वैदिक कर्मकाण्ड एवं ज्योतिष परामर्श</span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Profile Overview Details ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Desktop Header (Hidden on Mobile, Visible on lg) */}
            <div className="hidden lg:block text-left mb-2.5">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
                  वैदिक आचार्य परिचय • नलखेड़ा सिद्धपीठ
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight mt-1 mb-1.5">
                पंडित दीपक शर्मा
              </h2>
              <p className="font-serif text-base font-semibold text-[#AF0807] mb-3">
                माँ बगलामुखी अनन्य साधक • वैदिक कर्मकाण्ड एवं ज्योतिष मर्मज्ञ
              </p>
            </div>

            {/* Short Engaging Bio */}
            <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed mb-6">
              विश्व प्रसिद्ध माँ बगलामुखी सिद्धपीठ (नलखेड़ा) में वैदिक परंपरा अनुसार अनुष्ठान संपन्न कराने वाले
              पंडित दीपक शर्मा जी ने <strong>महामृत्युंजय वेद विद्यालय, उज्जैन</strong> से कर्मकाण्ड की शास्त्रीय
              दीक्षा प्राप्त की है। आप <strong>श्री वशिष्ठ ज्योतिष संस्थान केन्द्र</strong> से संबद्ध होकर पिछले
              5+ वर्षों से भक्तों को जन्मपत्रिका, ग्रह शांति एवं शत्रु-बाधा मुक्ति हेतु प्रामाणिक मार्गदर्शन प्रदान कर रहे हैं।
            </p>

            {/* 4 Clean Credential Tiles (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {credentials.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`relative p-3.5 sm:p-4 rounded-2xl ${item.bgColor} border ${item.borderColor} hover:shadow-sm transition-all`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-stone-200/80 shadow-2xs">
                          <Icon className={`h-4 w-4 ${item.iconColor}`} />
                        </div>
                        <span className="font-serif text-sm font-bold text-[#3E0B02]">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-stone-600 bg-white/80 rounded-md px-1.5 py-0.5 border border-stone-200/60">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[12px] text-stone-600 leading-normal pl-9">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons: Consultation + View Full Profile */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 border-t border-stone-100">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <PhoneCall className="h-4 w-4" />
                <span>पंडित जी से परामर्श / संकल्प लें</span>
              </Link>

              <Link
                href="/pandit-deepak-sharma"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-amber-50 text-[#3E0B02] hover:text-[#AF0807] text-xs sm:text-sm font-bold border border-amber-300 transition-colors group"
              >
                <span>विस्तृत जीवन परिचय एवं सिद्धियां पढ़ें</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#AF0807]" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
