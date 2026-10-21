import DarshanVideoInteractiveLeaf from "./DarshanVideoInteractiveLeaf";
import { CheckCircle2, ShieldCheck, Flame, Video } from "lucide-react";

export default function DarshanVideoSection() {
  return (
    <section
      id="darshan-video-reels"
      aria-label="माँ बगलामुखी दिव्य हवन एवं दर्शन वीडियो"
      className="w-full bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF4E0] py-10 sm:py-16 border-b border-[#EBD8B4] relative overflow-hidden"
    >
      {/* Subtle Background Sacred Amber Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER (NIKHAR STYLE) ================= */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/25 px-3.5 py-1 mb-3">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-xs font-black uppercase tracking-widest text-[#8B0000]">
              प्रत्यक्ष प्रमाण • LIVE DARSHAN & HAWAN IN MOTION
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-[#4A0C16] tracking-tight leading-tight">
            दिव्य अनुष्ठान एवं हवन दर्शन इन मोशन
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#5C3A21] leading-relaxed">
            माँ बगलामुखी सिद्धपीठ नलखेड़ा में आचार्य पं. दीपक शर्मा जी द्वारा विधि-विधान से संपन्न किए गए वैदिक हवन, विशेष तंत्र पूजा, एवं माता के प्रत्यक्ष दर्शन की वास्तविक वीडियो झलकियां।
          </p>

          {/* 3 Trust Metric Badges (Nikhar Style) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 text-xs font-bold text-[#8B0000]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#E8D8B8] shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
              <span>100% प्रामाणिक वैदिक कर्मकाण्ड</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#E8D8B8] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>नलखेड़ा सिद्धपीठ से सीधा दर्शन</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#E8D8B8] shadow-xs">
              <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
              <span>सवा लाख जप व नाम-गोत्र संकल्प</span>
            </div>
          </div>

        </div>

        {/* ================= INTERACTIVE PLAYER & PLAYLIST LEAF ================= */}
        <DarshanVideoInteractiveLeaf />

      </div>
    </section>
  );
}
