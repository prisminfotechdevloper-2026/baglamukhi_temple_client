"use client";

import { Play, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CHANNEL_HANDLE = "@ASHTHAMMAHVIDHYA";
const CHANNEL_URL = "https://www.youtube.com/@ASHTHAMMAHVIDHYA/shorts";

export default function DarshanVideoChannelLeaf() {
  const { t } = useLanguage();

  return (
    <div className="mt-8 flex w-full max-w-full min-w-0 flex-col gap-4 sm:gap-5 rounded-[22px] sm:rounded-[28px] border border-[#E8D8B8] bg-white p-4 sm:p-6 shadow-[0_10px_30px_rgba(139,0,0,0.06)] sm:mt-10 sm:flex-row sm:items-center sm:justify-between overflow-hidden">
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
        <span className="grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl bg-red-600 shadow-lg shadow-red-600/30">
          <Play className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6 fill-white text-white" />
        </span>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#3B1E08] truncate">
              {CHANNEL_HANDLE}
            </h3>
            <span className="shrink-0 rounded-full bg-red-50 px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold text-red-600">
              {t({ hi: "आधिकारिक चैनल", en: "Official Channel" })}
            </span>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-[#5C3A21]/80 line-clamp-2">
            {t({
              hi: "दैनिक दर्शन, हवन लाइव एवं अनुष्ठान वीडियो के लिए चैनल सब्सक्राइब करें।",
              en: "Subscribe to our official YouTube channel for daily live darshan and hawan videos.",
            })}
          </p>
        </div>
      </div>

      <a
        href={CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-full bg-red-600 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-colors hover:bg-red-700 active:scale-95"
      >
        <Play className="h-4 w-4 fill-white" />
        <span>{t({ hi: "YouTube पर सब्सक्राइब करें", en: "Subscribe on YouTube" })}</span>
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
