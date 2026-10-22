import RudrakshaRatnaInteractiveLeaf from "./RudrakshaRatnaInteractiveLeaf";
import { ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function RudrakshaRatnaSection() {
  const trustHighlights = [
    {
      icon: ShieldCheck,
      text: "माँ बगलामुखी पीठ नलखेड़ा से सिद्ध",
      color: "text-amber-700",
    },
    {
      icon: CheckCircle2,
      text: "प्रामाणिक एवं लैब सर्टिफाइड उपलब्ध",
      color: "text-emerald-700",
    },
    {
      icon: Sparkles,
      text: "नाम-गोत्र संकल्प सहित अभिमंत्रित",
      color: "text-red-700",
    },
  ];

  return (
    <section
      id="rudraksha-ratna-collection"
      aria-label="प्रामाणिक सिद्ध रुद्राक्ष एवं नवग्रह रत्न संग्रह"
      className="relative w-full overflow-hidden border-b border-[#EBD8B4] bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF4E0] py-12 sm:py-16"
    >
      {/* Soft Divine Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ SECTION HEADER ============ */}
        <header className="mb-8 sm:mb-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
              ॥ ॐ नमः शिवाय • नवग्रह कृपा ॥
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-[#4A0C16] tracking-tight leading-tight">
            प्रामाणिक सिद्ध रुद्राक्ष एवं नवग्रह रत्न संग्रह
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#5C3A21] leading-relaxed">
            माँ बगलामुखी सिद्धपीठ नलखेड़ा में आचार्य पं. दीपक शर्मा जी द्वारा आपकी जन्म पत्रिका, ग्रह दशा व आवश्यकताओं के अनुरूप अनुशंसित एवं वैदिक विधि-विधान से अभिमंत्रित मूल रुद्राक्ष व प्राकृतिक रत्न।
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            {trustHighlights.map(({ icon: Icon, text, color }) => (
              <div
                key={text}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8D8B8] bg-white/90 px-3 py-1.5 text-xs font-bold text-[#3B1E08] shadow-xs"
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${color}`} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ============ INTERACTIVE LEAF (Tabs + Products Grid + Consultation CTA) ============ */}
        <RudrakshaRatnaInteractiveLeaf />
      </div>
    </section>
  );
}
