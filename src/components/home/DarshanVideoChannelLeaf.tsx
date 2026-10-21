"use client";

import { Play, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CHANNEL_HANDLE = "@ASHTHAMMAHVIDHYA";
const CHANNEL_URL = "https://www.youtube.com/@ASHTHAMMAHVIDHYA/shorts";

export default function DarshanVideoChannelLeaf() {
  const { t } = useLanguage();

  return (
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
              {t({ hi: "आधिकारिक चैनल", en: "Official Channel" })}
            </span>
          </div>
          <p className="mt-1 text-sm text-[#5C3A21]/80">
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
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-red-700"
      >
        <Play className="h-4 w-4 fill-white" />
        <span>{t({ hi: "YouTube पर सब्सक्राइब करें", en: "Subscribe on YouTube" })}</span>
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
