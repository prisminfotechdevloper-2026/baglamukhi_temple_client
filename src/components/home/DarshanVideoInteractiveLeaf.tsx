"use client";

/* eslint-disable @next/next/no-img-element */
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  Play,
  RotateCcw,
  Maximize2,
  ExternalLink,
  PhoneCall,
  CheckCircle2,
  Flame,
  X,
  ChevronLeft,
  ChevronRight,
  Tv,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

export interface DarshanVideoItem {
  id: string;
  title: string;
  desc: string;
  category: string;
  group: string; // filter tab
  tags: string[];
  duration: string;
  views: string;
}

export const DARSHAN_VIDEOS: DarshanVideoItem[] = [
  {
    id: "uq7Jn39CM5U",
    title: "हवन के लिए संपर्क करें 📞7223083313 Maa Baglamukhi Mandir Nalkheda",
    desc: "माँ बगलामुखी सिद्धपीठ नलखेड़ा में विधि-विधान से संपन्न शत्रु बाधा निवारण व कार्य सिद्धि महाहवन की दिव्य झलक।",
    category: "माँ बगलामुखी महाहवन",
    group: "हवन",
    tags: ["शत्रु बाधा निवारण", "कोर्ट केस विजय", "नलखेड़ा धाम"],
    duration: "0:58",
    views: "12.4K",
  },
  {
    id: "qw0geTVehC0",
    title: "गुप्त नवरात्रि हवन के लिए संपर्क करें पंडित दीपक शर्मा 📞7223083313",
    desc: "गुप्त नवरात्रि के पावन पर्व पर माँ पीताम्बरा के सवा लाख जप अनुष्ठान एवं विशेष तांत्रिक आहुति दर्शन।",
    category: "गुप्त नवरात्रि विशेष",
    group: "नवरात्रि",
    tags: ["गुप्त नवरात्रि", "पीताम्बरा हवन", "विशेष सिद्धि"],
    duration: "0:54",
    views: "8.9K",
  },
  {
    id: "pnslNXdbfWY",
    title: "हवन के लिए संपर्क करें 📞7223083313 MAA BAGLAMUKHI MANDIR NALKHEDA",
    desc: "यजमानों के नाम-गोत्र संकल्प सहित वैदिक ब्राह्मणों द्वारा संपन्न अखंड हवन कुंड की पावन आहुतियां।",
    category: "संकल्प सिद्धि हवन",
    group: "हवन",
    tags: ["ग्रह दोष शांति", "व्यापार वृद्धि", "वैदिक आहुति"],
    duration: "0:49",
    views: "15.1K",
  },
  {
    id: "3IKA30yn8AY",
    title: "Contact Pandit Deepak Sharma at 7223083313 for Baglamukhi Havan in Nalkheda",
    desc: "आचार्य पं. दीपक शर्मा जी के सानिध्य में नलखेड़ा पीठ पर महायज्ञ एवं पूर्णाहूति का पावन क्षण।",
    category: "वैदिक कर्मकाण्ड",
    group: "हवन",
    tags: ["सवा लाख जप", "नाम-गोत्र संकल्प", "पूर्णाहूति"],
    duration: "0:52",
    views: "9.7K",
  },
  {
    id: "Y0YmOlfQT6I",
    title: "हवन के लिए संपर्क करें 📞7223083313 MAA BAGLAMUKHI MANDIR NALKHEDA",
    desc: "मंगलवार एवं शनिवार विशेष माँ बगलामुखी हवन एवं पीताम्बरी वस्त्र-हल्दी आहुति अनुष्ठान।",
    category: "माँ बगलामुखी दिव्य दर्शन",
    group: "हवन",
    tags: ["नलखेड़ा सिद्धपीठ", "मंगलवार विशेष", "महाआरती"],
    duration: "0:45",
    views: "11.2K",
  },
  {
    id: "4ablb_f1nB8",
    title: "Nalkheda Maa Baglamukhi Temple Ujjain - मंदिर दर्शन",
    desc: "पावन लखुंदर नदी तट स्थित महाभारत कालीन स्वयंभू त्रिमुखी माँ बगलामुखी माता का साक्षात दर्शन।",
    category: "स्वयंभू सिद्धपीठ दर्शन",
    group: "मंदिर दर्शन",
    tags: ["महाभारत कालीन पीठ", "लखुंदर नदी तट", "त्रिशक्ति दर्शन"],
    duration: "0:38",
    views: "18.3K",
  },
  {
    id: "CB4ZnHEnD00",
    title: "Maa Baglamukhi Temple Nalkheda Navratri near Ujjain",
    desc: "नवरात्रि महापर्व पर माँ बगलामुखी का दिव्य शृंगार, छप्पन भोग एवं अखंड दीप दर्शन।",
    category: "शारदीय नवरात्रि महोत्सव",
    group: "नवरात्रि",
    tags: ["नवरात्रि दर्शन", "अखंड ज्योति", "दीप दर्शन"],
    duration: "0:56",
    views: "14.6K",
  },
  {
    id: "2L1inKj8i10",
    title: "Baglamukhi Mandir Nalkheda Navratri - विशेष पूजन",
    desc: "पीली सरसों, हल्दी गांठ, एवं विशिष्ट तांत्रिक औषधियों से निर्मित विशेष आहुति समर्पण।",
    category: "विशेष हवन आहुति",
    group: "नवरात्रि",
    tags: ["हल्दी आहुति", "पीले पुष्प अर्पण", "संकल्प सिद्धि"],
    duration: "0:50",
    views: "7.8K",
  },
  {
    id: "MPlkfRpCcJU",
    title: "Maa Baglamukhi Nalkheda Ujjain - दिव्य स्वरूप दर्शन",
    desc: "विश्व प्रसिद्ध माँ बगलामुखी का प्रातःकालीन महामस्तकाभिषेक एवं राजभोग शृंगार दर्शन।",
    category: "दिव्य शृंगार दर्शन",
    group: "मंदिर दर्शन",
    tags: ["पीताम्बरा शृंगार", "स्वर्ण आभूषण", "मंगल आरती"],
    duration: "0:42",
    views: "10.5K",
  },
  {
    id: "lEQ9EuAa3Ss",
    title: "Maa Baglamukhi Mandir Nalkheda 7223083313",
    desc: "पंडित दीपक शर्मा जी से हवन, अनुष्ठान व कुंडली परामर्श हेतु संपर्क एवं मार्ग दर्शन।",
    category: "पंडित जी परामर्श एवं बुकिंग",
    group: "परामर्श",
    tags: ["कुंडली विश्लेषण", "दोष शांति", "अनुष्ठान मार्गदर्शन"],
    duration: "0:48",
    views: "6.9K",
  },
];

/* ------------------------------------------------------------------ */
/* HELPERS                                                             */
/* ------------------------------------------------------------------ */

const PHONE = "7223083313";
const ALL = "सभी";

const thumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const embed = (id: string, loop = false) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1&modestbranding=1${
    loop ? `&loop=1&playlist=${id}` : ""
  }`;
const IFRAME_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

const GROUPS = [ALL, ...Array.from(new Set(DARSHAN_VIDEOS.map((v) => v.group)))];
const GROUP_COUNTS = GROUPS.reduce<Record<string, number>>((acc, g) => {
  acc[g] = g === ALL ? DARSHAN_VIDEOS.length : DARSHAN_VIDEOS.filter((v) => v.group === g).length;
  return acc;
}, {});

function YoutubeLogo({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8z"
      />
      <path fill="#fff" d="M9.6 15.6V8.4l6.2 3.6z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* PLAYLIST ITEM                                                       */
/* ------------------------------------------------------------------ */

const PlaylistItem = memo(function PlaylistItem({
  item,
  number,
  active,
  onSelect,
}: {
  item: DarshanVideoItem;
  number: number;
  active: boolean;
  onSelect: (v: DarshanVideoItem) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-current={active}
      className={`group flex w-full items-center gap-3.5 rounded-[20px] p-3 text-left transition-colors ${
        active
          ? "border-2 border-[#D97706] bg-[#FFF4DB] shadow-md"
          : "border border-[#EBDCC2] bg-white hover:border-[#D97706]/60"
      }`}
    >
      {/* Thumbnail */}
      <span className="relative block aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-xl bg-black sm:w-36">
        <img
          src={thumb(item.id)}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute inset-0 grid place-items-center bg-black/25 transition-colors group-hover:bg-black/10">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#D97706] text-[#3B1E08]">
            <Play className="h-3.5 w-3.5 fill-current" />
          </span>
        </span>
        <span className="absolute bottom-1.5 right-1.5 rounded bg-black/80 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-white">
          {item.duration}
        </span>
      </span>

      {/* Text */}
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="truncate text-[11px] font-bold tracking-wide text-[#8B0000]/80">
            {item.category}
          </span>
          {active && (
            <span className="shrink-0 rounded-full bg-[#8B0000] px-2 py-0.5 text-[10px] font-extrabold text-white">
              ▶ सक्रिय
            </span>
          )}
        </span>
        <span className="mt-1 line-clamp-2 block text-[13px] font-semibold leading-snug text-[#3B1E08] sm:text-sm">
          {item.title}
        </span>
        <span className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#5C3A21]/70">
          <Flame className="h-3 w-3 text-[#8B0000]" />
          {item.views} Views
          <span aria-hidden>•</span>
          Video #{number}
        </span>
      </span>
    </button>
  );
});

/* ------------------------------------------------------------------ */
/* MAIN                                                                */
/* ------------------------------------------------------------------ */

export default function DarshanVideoInteractiveLeaf() {
  const [active, setActive] = useState<DarshanVideoItem>(DARSHAN_VIDEOS[0]);
  const [playing, setPlaying] = useState(false);
  const [theatre, setTheatre] = useState(false);
  const [group, setGroup] = useState(ALL);

  const list = useMemo(
    () => (group === ALL ? DARSHAN_VIDEOS : DARSHAN_VIDEOS.filter((v) => v.group === group)),
    [group]
  );

  // Theatre: ESC close + body scroll lock
  useEffect(() => {
    if (!theatre) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setTheatre(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [theatre]);

  const select = useCallback((v: DarshanVideoItem) => {
    setActive(v);
    setPlaying(true);
  }, []);

  const openTheatre = () => {
    setPlaying(false); // avoid two videos playing together
    setTheatre(true);
  };

  const step = (dir: 1 | -1) => {
    const n = DARSHAN_VIDEOS.length;
    const i = DARSHAN_VIDEOS.findIndex((v) => v.id === active.id);
    setActive(DARSHAN_VIDEOS[(i + dir + n) % n]);
  };

  return (
    <div className="w-full">
      {/* ============ FILTER TABS + COUNTER ============ */}
      

      {/* ============ 2-COLUMN GRID (Sticky Left Player + Natural Right Playlist Scroll) ============ */}
      <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
        {/* ---------- LEFT: PLAYER + INFO (STICKY ON DESKTOP) ---------- */}
        <div className="flex flex-col gap-4 lg:col-span-7 lg:sticky lg:top-24 lg:self-start">
          {/* Player card */}
          <div className="relative aspect-video overflow-hidden rounded-[28px] bg-[#120B06] shadow-[0_20px_50px_rgba(139,0,0,0.2)] ring-1 ring-[#D4AF37]/50 sm:rounded-[32px]">
            {playing ? (
              <>
                {/* blurred backdrop so the vertical Short sits in a wide frame */}
                <img
                  src={thumb(active.id)}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-125 object-cover opacity-40 blur-2xl"
                />
                <div className="absolute inset-y-0 left-1/2 aspect-[9/16] h-full -translate-x-1/2">
                  <iframe
                    key={active.id}
                    src={embed(active.id, true)}
                    title={active.title}
                    allow={IFRAME_ALLOW}
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setPlaying(false)}
                  className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md hover:bg-black cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5 text-amber-400" />
                  कवर देखें
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`चलाएं: ${active.title}`}
                className="group absolute inset-0 block h-full w-full text-left cursor-pointer"
              >
                <img
                  src={thumb(active.id)}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50" />

                {/* top pills */}
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[11px] font-bold tracking-wider text-white backdrop-blur-md sm:left-5 sm:top-5">
                  <YoutubeLogo />
                  ASHTHAM MAHAVIDHYA
                </span>
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#FBBF24] backdrop-blur-md sm:right-5 sm:top-5">
                  <Flame className="h-3.5 w-3.5" />
                  {active.views} VIEWS
                </span>

                {/* center play */}
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[#D97706] text-[#3B1E08] shadow-2xl ring-4 ring-white/25 transition-transform group-hover:scale-110 sm:h-[84px] sm:w-[84px]">
                    <Play className="ml-1 h-7 w-7 fill-current sm:h-9 sm:w-9" />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-white/90 sm:text-xs">
                    CLICK TO PLAY REEL
                  </span>
                </span>

                {/* bottom info */}
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
                  <span className="min-w-0">
                    <span className="block truncate text-[11px] font-bold tracking-wide text-[#FBBF24]">
                      {active.category}
                    </span>
                    <span className="mt-1 line-clamp-2 block font-serif text-base font-bold leading-snug text-white sm:text-xl">
                      {active.title}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-full border border-white/10 bg-black/70 px-2.5 py-1 font-mono text-[11px] font-semibold text-white">
                    {active.duration}
                  </span>
                </span>
              </button>
            )}
          </div>

          {/* Info card */}
          <div className="rounded-[24px] border border-[#E8D8B8] bg-white p-4 sm:p-5 shadow-[0_10px_30px_rgba(139,0,0,0.06)]">
            {/* title row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="text-xs font-bold tracking-wide text-[#8B0000]">
                  {active.category} • {active.views} VIEWS
                </p>
                <h3 className="mt-1 font-serif text-base sm:text-lg font-bold leading-snug text-[#3B1E08]">
                  {active.title}
                </h3>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={openTheatre}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8D8B8] bg-white px-3 py-1.5 text-xs font-medium text-[#3B1E08] transition-colors hover:bg-[#FFF7E6] cursor-pointer"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  थिएटर
                </button>
                <a
                  href={`https://www.youtube.com/shorts/${active.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8D8B8] bg-white px-3 py-1.5 text-xs font-medium text-[#3B1E08] transition-colors hover:bg-[#FFF7E6]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  YouTube
                </a>
              </div>
            </div>

            <hr className="my-3 border-[#EBDCC2]" />

            <p className="text-xs sm:text-sm leading-relaxed text-[#5C3A21]">{active.desc}</p>

            {/* chips */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {active.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 rounded-full border border-[#E8D8B8] bg-[#FFFDF8] px-2.5 py-1 text-[11px] font-medium text-[#3B1E08]"
                >
                  <CheckCircle2 className="h-3 w-3 text-[#B45309]" />
                  {t}
                </span>
              ))}
            </div>

            <hr className="my-3 border-[#EBDCC2]" />

            {/* CTA row */}
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[#5C3A21]/80">
                हवन या पूजा हेतु पं. दीपक शर्मा जी से संपर्क करें:
              </p>
              <a
                href={`tel:+91${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8B0000] via-[#A51D1D] to-[#8B0000] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:brightness-110 active:scale-95"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                हवन बुक करें {PHONE}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ---------- RIGHT: PLAYLIST (All 10 videos scroll naturally with page) ---------- */}
        <aside className="flex flex-col lg:col-span-5">
          <div className="mb-4 flex items-center justify-between px-1">
            <h3 className="flex items-center gap-2 text-sm font-bold tracking-wide text-[#8B0000]">
              <Tv className="h-4 w-4" />
              वैदिक अनुष्ठान एवं दर्शन प्लेलिस्ट
            </h3>
            <span className="rounded-full bg-[#8B0000]/10 px-2.5 py-0.5 text-xs font-bold text-[#8B0000]">
              {list.length} Videos
            </span>
          </div>

          <div className="space-y-3">
            {list.map((item) => (
              <PlaylistItem
                key={item.id}
                item={item}
                number={DARSHAN_VIDEOS.indexOf(item) + 1}
                active={item.id === active.id}
                onSelect={select}
              />
            ))}
          </div>
        </aside>
      </div>

      {/* ============ THEATRE MODAL ============ */}
      {theatre && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="थिएटर मोड"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-6"
        >
          <div className="absolute inset-0" onClick={() => setTheatre(false)} />

          <div className="relative z-10 flex max-h-[95vh] w-full max-w-xl flex-col overflow-hidden rounded-[28px] border border-amber-500/40 bg-[#140D07] shadow-2xl">
            {/* header */}
            <div className="flex items-center justify-between border-b border-amber-500/30 px-4 py-3">
              <span className="flex min-w-0 items-center gap-2 text-xs font-bold text-amber-300">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 animate-pulse" />
                <span className="truncate">नलखेड़ा धाम दिव्य दर्शन • {active.category}</span>
              </span>
              <button
                type="button"
                onClick={() => setTheatre(false)}
                aria-label="बंद करें"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* video + arrows */}
            <div className="relative flex justify-center bg-black">
              <div className="aspect-[9/16] h-[66vh] max-w-full">
                <iframe
                  key={active.id}
                  src={embed(active.id)}
                  title={active.title}
                  allow={IFRAME_ALLOW}
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              {(
                [
                  ["left-2", -1, ChevronLeft, "पिछला वीडियो"],
                  ["right-2", 1, ChevronRight, "अगला वीडियो"],
                ] as const
              ).map(([pos, dir, Icon, label]) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => step(dir)}
                  aria-label={label}
                  className={`absolute ${pos} top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-amber-500/40 bg-black/70 text-amber-300 hover:bg-black`}
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>

            {/* footer */}
            <div className="flex items-center justify-between gap-3 border-t border-amber-500/30 bg-[#1C120A] p-4">
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-white">{active.title}</p>
                <p className="text-[11px] text-amber-300/80">
                  {active.views} views • पं. दीपक शर्मा ({PHONE})
                </p>
              </div>
              <a
                href={`tel:+91${PHONE}`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-red-700 to-amber-600 px-3.5 py-2 text-xs font-bold text-white shadow-md hover:brightness-110"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                हवन बुक करें
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}