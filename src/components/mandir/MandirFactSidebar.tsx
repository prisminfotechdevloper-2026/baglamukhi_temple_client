"use client";

import { Landmark, PhoneCall, MapPin, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";
import { mandirFactBox } from "@/data/mandirContent";

interface FactItem {
  label: string | TranslationPair;
  value: string | TranslationPair;
}

interface MandirFactSidebarProps {
  title?: string;
  facts?: FactItem[];
  mapsUrl?: string;
}

export default function MandirFactSidebar({
  title,
  facts,
  mapsUrl = "https://maps.app.goo.gl/3w6U7f8qT4Lh5F4z7",
}: MandirFactSidebarProps) {
  const { t } = useLanguage();

  const displayTitle = title || t(mandirFactBox.title);
  const factItems = facts && facts.length > 0 ? facts : mandirFactBox.facts;

  return (
    <aside className="w-full">
      {/* ================= SINGLE UNIFIED HIGH-END CARD ================= */}
      <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_8px_32px_-4px_rgba(217,119,6,0.14)] p-5 sm:p-6 transition-colors duration-300">
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-amber-100/90 mb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0">
              <Landmark className="h-4.5 w-4.5 text-[#AF0807]" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#AF0807] block">
                {t(mandirFactBox.badge)}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#3E0B02] leading-tight">
                {displayTitle}
              </h3>
            </div>
          </div>
          <span className="text-[11px] font-bold text-amber-800 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
            {t(mandirFactBox.tag)}
          </span>
        </div>

        {/* Fact Rows - Clean & Ultra-Compact Key-Value Pairs */}
        <div className="divide-y divide-amber-100/70 text-xs sm:text-sm">
          {factItems.map((fact, fIdx) => {
            const labelStr = typeof fact.label === "string" ? fact.label : t(fact.label);
            const valueStr = typeof fact.value === "string" ? fact.value : t(fact.value);

            return (
              <div
                key={fIdx}
                className="py-2.5 flex justify-between items-baseline gap-3"
              >
                <span className="font-bold text-stone-500 shrink-0 text-xs">
                  {labelStr}
                </span>
                <span className="text-right font-semibold text-[#221510] text-xs sm:text-sm leading-snug">
                  {valueStr}
                </span>
              </div>
            );
          })}
        </div>

        {/* Integrated Consultation & Helpline Block */}
        <div className="mt-4 pt-4 border-t border-amber-100/90">
          <div className="rounded-2xl bg-gradient-to-br from-[#3E0B02] to-[#240401] border-y-0 border-x-2 border-amber-400 p-4 text-white shadow-md">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
              <span>{t(mandirFactBox.consultation.badge)}</span>
            </div>
            <p className="text-xs text-stone-200 font-medium mb-3">
              {t(mandirFactBox.consultation.priest)}
            </p>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+917224083313"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#AF0807] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-[11px] font-bold shadow-md border border-amber-400/80 transition-colors cursor-pointer"
              >
                <PhoneCall className="h-3 w-3 text-amber-300" />
                <span>{t(mandirFactBox.consultation.callBtn)}</span>
              </a>

              <a
                href="https://wa.me/917224083313?text=%E0%A4%9C%E0%A4%AF%20%E0%A4%AE%E0%A4%BE%E0%A4%81%20%E0%A4%AC%E0%A4%97%E0%A4%B2%E0%A4%BE%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%80!%20%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0%20%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8%20%E0%A4%B5%20%E0%A4%B9%E0%A4%B5%E0%A4%A8%20%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%82%E0%A4%A7%E0%A5%80%20%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-black/40 hover:bg-black/60 text-amber-200 hover:text-white text-[11px] font-bold border border-amber-400/70 transition-colors cursor-pointer group"
              >
                <div className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-[#25D366] text-white shrink-0 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="h-2.5 w-2.5 text-white" />
                </div>
                <span>{t(mandirFactBox.consultation.waBtn)}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Map Link */}
        {mapsUrl && (
          <div className="mt-3 pt-2 text-center">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#AF0807] hover:text-[#7A0C00] transition-colors"
            >
              <MapPin className="h-3.5 w-3.5 text-amber-600" />
              <span>{t(mandirFactBox.consultation.mapBtn)}</span>
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}
