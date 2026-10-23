"use client";

import { Info, PhoneCall } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { mandirTraditionNoticeData } from "@/data/mandirContent";

interface MandirTraditionNoticeProps {
  traditionNote?: string;
}

export default function MandirTraditionNotice({
  traditionNote,
}: MandirTraditionNoticeProps) {
  const { t } = useLanguage();

  const noteText = traditionNote || t(mandirTraditionNoticeData.traditionNote);

  return (
    <section className="mt-12 sm:mt-16 mb-8 sm:mb-12">
      {/* Tradition Note Card */}
      <div className="rounded-2xl sm:rounded-3xl bg-amber-50/70 border-y-0 border-x-2 border-amber-400 p-5 sm:p-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center gap-3.5 shadow-2xs">
        <div className="h-9 w-9 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center shrink-0">
          <Info className="h-5 w-5 text-[#AF0807]" />
        </div>
        <p className="text-xs sm:text-sm text-stone-700 italic font-medium leading-relaxed">
          {noteText}
        </p>
      </div>

      {/* Direct Contact Ribbon */}
      <div className="rounded-3xl bg-gradient-to-r from-[#3E0B02] via-[#5C1004] to-[#2B0701] border-y-0 border-x-4 border-amber-400 p-8 sm:p-10 lg:p-12 text-white shadow-[0_12px_40px_-6px_rgba(62,11,2,0.35)] flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-400/30">
            {t(mandirTraditionNoticeData.ribbon.badge)}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-200 leading-tight">
            {t(mandirTraditionNoticeData.ribbon.title)}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-200 leading-relaxed">
            {t(mandirTraditionNoticeData.ribbon.desc)}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="tel:+917224083313"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-xs sm:text-sm font-bold shadow-xl border border-amber-400/80 hover:border-amber-300 transition-colors cursor-pointer"
          >
            <PhoneCall className="h-4 w-4 text-amber-300" />
            <span>{mandirTraditionNoticeData.ribbon.callBtn}</span>
          </a>

          <a
            href="https://wa.me/917224083313?text=%E0%A4%9C%E0%A4%AF%20%E0%A4%AE%E0%A4%BE%E0%A4%81%20%E0%A4%AC%E0%A4%97%E0%A4%B2%E0%A4%BE%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%80!%20%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0%20%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8%20%E0%A4%B5%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-amber-200 text-xs sm:text-sm font-bold border-2 border-amber-400 backdrop-blur-md shadow-xl transition-colors cursor-pointer group"
          >
            <div className="flex h-4 w-4 items-center justify-center rounded-xs bg-[#25D366] text-white shrink-0 group-hover:scale-110 transition-transform">
              <WhatsAppIcon className="h-3 w-3 text-white" />
            </div>
            <span>{t(mandirTraditionNoticeData.ribbon.waBtn)}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
