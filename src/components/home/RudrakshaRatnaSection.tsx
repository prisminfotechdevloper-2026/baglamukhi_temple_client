import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

const PHONE = "7223083313";

interface PopularProduct {
  name: string;
  sub: string;
  image: string;
}

const POPULAR_PRODUCTS: PopularProduct[] = [
  {
    name: "रुद्राक्ष माला",
    sub: "विभिन्न मुखी माला",
    image: "/images/popular-rudraksha-mala.jpg",
  },
  {
    name: "1 मुखी रुद्राक्ष",
    sub: "अत्यंत दुर्लभ",
    image: "/images/popular-1-mukhi.jpg",
  },
  {
    name: "माणिक (Ruby)",
    sub: "सूर्य ग्रह",
    image: "/images/popular-ruby.jpg",
  },
  {
    name: "मोती (Pearl)",
    sub: "चंद्र ग्रह",
    image: "/images/popular-pearl.jpg",
  },
  {
    name: "पन्ना (Emerald)",
    sub: "बुध ग्रह",
    image: "/images/popular-emerald.jpg",
  },
  {
    name: "पुखराज (Yellow Sapphire)",
    sub: "बृहस्पति ग्रह",
    image: "/images/popular-yellow-sapphire.jpg",
  },
];

export default function RudrakshaRatnaSection() {
  const whatsappUrl = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
    "जय श्री माँ बगलामुखी! पंडित जी, मुझे अपने लिए सही रुद्राक्ष और रत्न के चयन हेतु मार्गदर्शन चाहिए।"
  )}`;

  return (
    <section
      id="rudraksha-ratna-collection"
      aria-label="सिद्ध रुद्राक्ष एवं नवग्रह रत्न संग्रह"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFFDF8] py-10 sm:py-14 border-b border-[#EBD8B4]"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* ========================================================= */}
        {/* ============ 1. TOP 2 CARDS (RUDRAKSHA & RATNA) ============ */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* ============ CARD 1: RUDRAKSHA ============ */}
          <article className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-3xl border border-[#EADCC7] bg-[#FBF7EE] p-4 sm:p-5 md:p-6 shadow-[0_4px_20px_rgba(90,44,24,0.04)] hover:border-[#D4AF37] hover:shadow-[0_8px_30px_rgba(90,44,24,0.08)] transition-[border-color,box-shadow]">
            {/* Left Image Box */}
            <div className="relative h-44 w-44 sm:h-48 sm:w-48 md:h-52 md:w-52 shrink-0 rounded-2xl overflow-hidden border border-[#E5D4BC] shadow-xs bg-stone-100">
              <Image
                src="/images/rudraksha-feature.jpg"
                alt="रुद्राक्ष - आध्यात्मिक शांति एवं मानसिक संतुलन"
                fill
                sizes="(max-width: 640px) 176px, 208px"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Right Text Content */}
            <div className="flex flex-1 flex-col justify-center text-center sm:text-left min-w-0">
              {/* Badge */}
              <div className="mx-auto sm:mx-0 w-fit">
                <span className="inline-block rounded-md bg-[#F7E7BE]/90 px-2.5 py-1 text-[11px] font-bold text-[#8B5A14] tracking-wide border border-[#EDD59B]">
                  आध्यात्मिक शक्ति
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="mt-2 font-serif text-2xl sm:text-[26px] font-black text-[#3B1E08] leading-tight tracking-tight">
                Rudraksha
              </h3>
              <p className="font-serif text-lg sm:text-xl font-bold text-[#3B1E08] leading-snug">
                रुद्राक्ष
              </p>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-[13px] text-[#6B5A52] leading-relaxed line-clamp-3">
                रुद्राक्ष शिव का पवित्र प्रतीक माना जाता है। यह आध्यात्मिक शांति, मानसिक संतुलन और सकारात्मक ऊर्जा प्रदान करने में सहायक माना जाता है।
              </p>

              {/* Button */}
              <div className="mt-4">
                <Link
                  href="/rudraksha"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5A2C18] hover:bg-[#431F10] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#FFF9EE] transition-colors shadow-xs group-hover:shadow-md cursor-pointer"
                >
                  <span>रुद्राक्ष कलेक्शन देखें</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* ============ CARD 2: RATNA (GEMSTONES) ============ */}
          <article className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-3xl border border-[#EADCC7] bg-[#FBF7EE] p-4 sm:p-5 md:p-6 shadow-[0_4px_20px_rgba(90,44,24,0.04)] hover:border-[#D4AF37] hover:shadow-[0_8px_30px_rgba(90,44,24,0.08)] transition-[border-color,box-shadow]">
            {/* Left Image Box */}
            <div className="relative h-44 w-44 sm:h-48 sm:w-48 md:h-52 md:w-52 shrink-0 rounded-2xl overflow-hidden border border-[#E5D4BC] shadow-xs bg-stone-100">
              <Image
                src="/images/gemstones-feature.jpg"
                alt="रत्न (नवरत्न) - ग्रहों का संतुलन एवं सकारात्मक ऊर्जा"
                fill
                sizes="(max-width: 640px) 176px, 208px"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Right Text Content */}
            <div className="flex flex-1 flex-col justify-center text-center sm:text-left min-w-0">
              {/* Badge */}
              <div className="mx-auto sm:mx-0 w-fit">
                <span className="inline-block rounded-md bg-[#F7E7BE]/90 px-2.5 py-1 text-[11px] font-bold text-[#8B5A14] tracking-wide border border-[#EDD59B]">
                  नवग्रहों की कृपा
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="mt-2 font-serif text-2xl sm:text-[26px] font-black text-[#3B1E08] leading-tight tracking-tight">
                Ratna (Gemstones)
              </h3>
              <p className="font-serif text-lg sm:text-xl font-bold text-[#3B1E08] leading-snug">
                रत्न (नवरत्न)
              </p>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-[13px] text-[#6B5A52] leading-relaxed line-clamp-3">
                ज्योतिष में रत्नों का उपयोग ग्रहों के संतुलन और सकारात्मक ऊर्जा के लिए किया जाता है। यहाँ सभी प्रकार के प्रमुख रत्न उपलब्ध हैं।
              </p>

              {/* Button */}
              <div className="mt-4">
                <Link
                  href="/gemstones"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5A2C18] hover:bg-[#431F10] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#FFF9EE] transition-colors shadow-xs group-hover:shadow-md cursor-pointer"
                >
                  <span>रत्न कलेक्शन देखें</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* ========================================================= */}
        {/* ============ 2. POPULAR PRODUCTS (हमारे लोकप्रिय उत्पाद) ============ */}
        {/* ========================================================= */}
        <div>
          {/* Section Divider with Centered Heading */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 my-2">
            <span className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#4A1E0D] tracking-tight">
              हमारे लोकप्रिय उत्पाद
            </h3>
            <span className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* 6 Popular Product Chips */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
            {POPULAR_PRODUCTS.map((prod) => (
              <div
                key={prod.name}
                className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-2xl bg-white border border-[#EBDCC5] shadow-xs hover:border-[#D4AF37] hover:shadow-sm transition-[border-color,box-shadow]"
              >
                {/* Product Thumbnail */}
                <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-xl overflow-hidden bg-stone-50 border border-stone-200/80">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                {/* Name & Subtitle */}
                <div className="min-w-0 flex-1">
                  <h4 className="font-serif text-xs sm:text-[13px] font-bold text-[#3B1E08] truncate leading-tight">
                    {prod.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#8B6B58] truncate mt-0.5">
                    {prod.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* ============ 3. BOTTOM CONSULTATION BANNER ============ */}
        {/* ========================================================= */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#2E1206] via-[#451B0A] to-[#2E1206] border border-[#6E3618] p-5 sm:p-6 md:p-7 text-white shadow-md overflow-hidden">
          {/* Subtle Inner Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/15 blur-2xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            {/* Left: Temple Graphic & Headline */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
              {/* Temple Icon/Graphic Container */}
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl overflow-hidden border border-amber-500/40 bg-black/40 p-1 flex items-center justify-center">
                <Image
                  src="/images/baglamukhi-logo.png"
                  alt="माँ बगलामुखी मंदिर नलखेड़ा"
                  width={64}
                  height={64}
                  className="object-contain filter drop-shadow-md"
                />
              </div>

              <div>
                <h4 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#FFF5E6] leading-tight">
                  अपने लिए सही रुद्राक्ष और रत्न का चयन करें
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  अधिक जानकारी के लिए अभी WhatsApp पर संपर्क करें या पंडित जी से मार्गदर्शन लें।
                </p>
              </div>
            </div>

            {/* Right: CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 shrink-0 w-full sm:w-auto">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#18A058] hover:bg-[#138547] px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors shadow-xs"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp पर पूछें</span>
              </a>

              {/* Talk to Pandit Ji Button */}
              <a
                href={`tel:+91${PHONE}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#854522] bg-[#220B02]/90 hover:bg-[#1A0701] px-5 py-2.5 text-xs sm:text-sm font-bold text-amber-200 hover:text-white transition-colors shadow-xs"
              >
                <PhoneCall className="h-4 w-4 text-amber-300" />
                <span>पंडित जी से बात करें</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
