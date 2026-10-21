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
        <header className="mb-8 sm:mb-10">
          {/* REC strip */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#8B0000]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#8B0000]/25 bg-[#8B0000]/10 px-3.5 py-1.5">
               REC • नलखेड़ा धाम रील आर्काइव
            </span>
            <span className="text-[#5C3A21]/80">{CHANNEL_HANDLE}</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-wider text-[#B45309]">
              प्रत्यक्ष प्रमाण • CINEMATIC EXPERIENCE
            </p>
            <h2 className="mt-2 font-serif text-2xl font-black leading-tight tracking-tight text-[#4A0C16] sm:text-3xl md:text-4xl lg:text-[40px]">
              दिव्य अनुष्ठान एवं हवन दर्शन इन मोशन
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5C3A21] sm:text-base">
              माँ बगलामुखी सिद्धपीठ नलखेड़ा में आचार्य पं. दीपक शर्मा जी द्वारा विधि-विधान से संपन्न
              किए गए वैदिक हवन, विशेष तंत्र पूजा, एवं माता के प्रत्यक्ष दर्शन की वास्तविक वीडियो
              झलकियां।
            </p>

            <ul className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-[#8B0000] sm:gap-3">
              {TRUST_BADGES.map(({ icon: Icon, text, color }) => (
                <li
                  key={text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E8D8B8] bg-white/80 px-3 py-1.5 shadow-sm"
                >
                  <Icon className={`h-3.5 w-3.5 ${color}`} />
                  {text}
                </li>
              ))}
            </ul>
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