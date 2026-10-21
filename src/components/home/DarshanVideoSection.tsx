import DarshanVideoInteractiveLeaf from "./DarshanVideoInteractiveLeaf";
import { CheckCircle2, ShieldCheck, Flame, Play, ExternalLink } from "lucide-react";

const CHANNEL_HANDLE = "@ASHTHAMMAHVIDHYA";
const CHANNEL_URL = "https://www.youtube.com/@ASHTHAMMAHVIDHYA/shorts";

const TRUST_BADGES = [
  { icon: CheckCircle2, text: "100% प्रामाणिक वैदिक कर्मकाण्ड", color: "text-amber-600" },
  { icon: ShieldCheck, text: "नलखेड़ा सिद्धपीठ से सीधा दर्शन", color: "text-amber-600" },
  { icon: Flame, text: "सवा लाख जप व नाम-गोत्र संकल्प", color: "text-red-600 fill-red-600" },
] as const;

export default function DarshanVideoSection() {
  return (
    <section
      id="darshan-video-reels"
      aria-label="माँ बगलामुखी दिव्य हवन एवं दर्शन वीडियो"
      className="relative w-full border-b border-[#EBD8B4] bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF4E0] py-12 sm:py-16"
    >
      {/* soft amber glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ SECTION HEADER ============ */}
        <header className="mb-8 sm:mb-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
              प्रत्यक्ष प्रमाण • दिव्य हवन एवं दर्शन आर्काइव
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-[#4A0C16] tracking-tight leading-tight">
            दिव्य अनुष्ठान एवं हवन दर्शन इन मोशन
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#5C3A21] leading-relaxed">
            माँ बगलामुखी सिद्धपीठ नलखेड़ा में आचार्य पं. दीपक शर्मा जी द्वारा विधि-विधान से संपन्न किए गए वैदिक हवन, विशेष तंत्र पूजा, एवं माता के प्रत्यक्ष दर्शन की वास्तविक वीडियो झलकियां।
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            {TRUST_BADGES.map(({ icon: Icon, text, color }) => (
              <div
                key={text}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8D8B8] bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[#3B1E08] shadow-xs"
              >
                <Icon className={`h-3.5 w-3.5 ${color}`} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ============ TABS + PLAYER + PLAYLIST ============ */}
        <DarshanVideoInteractiveLeaf />

        {/* ============ CHANNEL BAR ============ */}
        <div className="mt-8 flex flex-col gap-5 rounded-[28px] border border-[#E8D8B8] bg-white p-5 shadow-[0_10px_30px_rgba(139,0,0,0.06)] sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-red-600 shadow-lg shadow-red-600/30">
              <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-[#3B1E08] sm:text-xl">
                  {CHANNEL_HANDLE}
                </h3>
                <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-600">
                  आधिकारिक चैनल
                </span>
              </div>
              <p className="mt-1 text-sm text-[#5C3A21]/80">
                दैनिक दर्शन, हवन लाइव एवं अनुष्ठान वीडियो के लिए चैनल सब्सक्राइब करें।
              </p>
            </div>
          </div>

          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-red-700"
          >
            <Play className="h-4 w-4 fill-white" />
            YouTube पर सब्सक्राइब करें
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}