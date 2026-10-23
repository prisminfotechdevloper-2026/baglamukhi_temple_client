"use client";

import { useLanguage } from "@/context/LanguageContext";
import TestimonialsSlider from "./TestimonialsSlider";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left Aligned with Sacred Danda */}
        <div className="text-left max-w-3xl mb-8 sm:mb-10 pr-12 sm:pr-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              {t({
                hi: "भक्तों के पावन अनुभव • नलखेड़ा सिद्धपीठ",
                en: "Devotee Experiences • Nalkheda Siddhapeeth",
              })}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            {t({
              hi: "माँ बगलामुखी कृपा एवं हवन के साक्षात अनुभव",
              en: "Divine Grace & Real Experiences of Devotees",
            })}
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed">
            {t({
              hi: "माँ पीताम्बरा बगलामुखी सिद्धपीठ (नलखेड़ा) में शास्त्रोक्त तांत्रिक-वैदिक पद्धति से संपन्न महाहवन व अनुष्ठान उपरांत यजमानों द्वारा साझा किए गए सत्य एवं प्रेरणादायक अनुभव।",
              en: "Authentic, heartfelt reflections shared by devotees across the country after participating in sacred Vedic-Tantric Mahahawans at Maa Baglamukhi Dham, Nalkheda.",
            })}
          </p>
        </div>

        {/* 9 Testimonials Carousel Slider (3 cards on desktop, 1 on mobile) */}
        <TestimonialsSlider />

      </div>
    </section>
  );
}
