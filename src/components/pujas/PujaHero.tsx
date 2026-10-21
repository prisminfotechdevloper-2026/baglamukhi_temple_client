import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  PhoneCall,
  MessageCircle,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  Scroll,
} from "lucide-react";

export default function PujaHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF8F5] pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-stone-200/80 overflow-hidden">
      {/* Decorative Warm Sacred Glows */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 -mb-28 h-96 w-96 rounded-full bg-red-100/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Divine Micro-Ribbon */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-6 font-medium">
          <Link href="/" className="hover:text-[#AF0807] transition-colors">
            मुख्य पृष्ठ (Home)
          </Link>
          <span>/</span>
          <span className="text-[#AF0807] font-semibold">
            पूजा एवं महाहवन (Sacred Pujas)
          </span>
          <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            माँ बगलामुखी सिद्धपीठ नलखेड़ा • 16+ शास्त्रोक्त विधान
          </span>
        </div>

        {/* 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: Text & Key Highlights ================= */}
          <div className="lg:col-span-7 text-left">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
                विश्वविख्यात सिद्ध तंत्र पीठ • नलखेड़ा (म.प्र.)
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#3E0B02] tracking-tight leading-tight mb-3">
              माँ बगलामुखी महाहवन, तांत्रिक अनुष्ठान एवं अखंड जाप
            </h1>

            <p className="font-serif text-base sm:text-lg font-bold text-[#AF0807] mb-4">
              शत्रु विजय • कोर्ट केस निवारण • सवा लाख अखंड जप • व्यापार समृद्धि • दोष शांति
            </p>

            <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed mb-6">
              महाभारत कालीन स्वयंभू त्रिमुखी माँ बगलामुखी सिद्धपीठ (नलखेड़ा) में <strong>पंडित दीपक शर्मा जी</strong> द्वारा पूर्ण वैदिक व सात्विक तांत्रिक विधि-विधान से विशेष अनुष्ठान संपन्न कराए जाते हैं। यजमान स्वयं मंदिर आकर अथवा घर बैठे <strong>लाइव वीडियो कॉल</strong> द्वारा अग्नि के सम्मुख प्रत्यक्ष नाम-गोत्र संकल्प ले सकते हैं।
            </p>

            {/* 3 Trust Bullets */}
            <div className="space-y-2.5 mb-7 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#AF0807] shrink-0" />
                <span>
                  <strong>व्यक्तिगत नाम-गोत्र संकल्प:</strong> कोई सामूहिक या अस्पष्ट आहुति नहीं, केवल यजमान का व्यक्तिगत संकल्प।
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#AF0807] shrink-0" />
                <span>
                  <strong>100% सात्विक पीताम्बरा पद्धति:</strong> हल्दी माला, पीले वस्त्र, पीली सरसों व शुद्ध गो-घृत की दशांश आहुतियां।
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#AF0807] shrink-0" />
                <span>
                  <strong>अभिमंत्रित रक्षा सूत्र व भस्म:</strong> अनुष्ठान उपरांत सिद्ध भस्म, रक्षा सूत्र व प्रसाद स्पीड पोस्ट द्वारा प्रेषित।
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-stone-200">
              <a
                href="#puja-catalog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <CalendarCheck className="h-4 w-4 text-amber-300" />
                <span>समस्त 16+ पूजा सूची देखें</span>
              </a>

              <a
                href="https://wa.me/917726815642?text=%E0%A4%9C%E0%A4%AF%20%E0%A4%AE%E0%A4%BE%E0%A4%81%20%E0%A4%AC%E0%A4%97%E0%A4%B2%E0%A4%BE%E0%A4%AE%E0%A4%81%E0%A4%96%E0%A4%B0!%20%E0%A4%AA%E0%A4%82%E0%A4%A1%E0%A4%BF%E0%A4%A4%20%E0%A4%A6%E0%A4%80%E0%A4%AA%E0%A4%95%20%E0%A4%B6%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%BE%20%E0%A4%9C%E0%A4%80%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%AC%E0%A4%97%E0%A4%B2%E0%A4%BE%E0%A4%AE%E0%A4%81%E0%A4%96%E0%A4%B0%20%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B7%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20/%20%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%B9%E0%A4%B5%E0%A4%A8%20%E0%A4%AC%E0%A5%81%E0%A4%95%20%E0%A4%95%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-amber-50 text-[#3E0B02] hover:text-[#AF0807] text-xs sm:text-sm font-bold border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-sm transition-all"
              >
                <MessageCircle className="h-4 w-4 text-[#AF0807]" />
                <span>पंडित जी से सीधा परामर्श लें</span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Visual Feature Card ================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/4.5] rounded-3xl overflow-hidden border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_12px_40px_-6px_rgba(217,119,6,0.18)] bg-gradient-to-b from-amber-100 to-stone-100 transition-all duration-300 group">
              <Image
                src="/images/baglamukhi-mandir-real.png"
                alt="माँ बगलामुखी मंदिर नलखेड़ा - पावन हवन वेदी"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Bottom Scrim */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md border border-amber-400/80 px-3.5 py-1 text-xs font-bold text-amber-300 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span>स्वयंभू त्रिमुखी सिद्धपीठ</span>
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <div className="font-serif text-lg sm:text-xl font-bold text-amber-200 leading-tight">
                  नलखेड़ा सिद्ध पीठ हवन वेदी
                </div>
                <div className="text-xs text-stone-200 mt-1 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                  <span>लखुंदर नदी तट, नलखेड़ा, आगर-मालवा (म.प्र.)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
