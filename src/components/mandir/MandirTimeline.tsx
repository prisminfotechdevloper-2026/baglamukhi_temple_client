"use client";

import { Calendar, ChevronRight } from "lucide-react";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";
import { mandirTimelineData } from "@/data/mandirContent";

interface TimelineEvent {
  period: string | TranslationPair;
  text: string | TranslationPair;
}

interface MandirTimelineProps {
  title?: string;
  events?: TimelineEvent[];
}

export default function MandirTimeline({ title, events }: MandirTimelineProps) {
  const { t } = useLanguage();

  const displayTitle = title || t(mandirTimelineData.title);
  const activeEvents = events && events.length > 0 ? events : mandirTimelineData.events;

  return (
    <section className="mt-12 sm:mt-16">
      {/* Section Header - Left Aligned */}
      <div className="flex items-start gap-3.5 mb-6 sm:mb-8">
        <div className="flex gap-1 shrink-0 pt-1">
          <div className="w-1.5 h-8 rounded-full bg-[#AF0807]" />
          <div className="w-1 h-8 rounded-full bg-amber-400" />
        </div>
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#AF0807]">
            {t(mandirTimelineData.badge)}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            {displayTitle}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
            {t(mandirTimelineData.subtitle)}
          </p>
        </div>
      </div>

      {/* Stepped Timeline Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {activeEvents.map((item, idx) => {
          const periodStr = typeof item.period === "string" ? item.period : t(item.period);
          const textStr = typeof item.text === "string" ? item.text : t(item.text);

          return (
            <div
              key={idx}
              className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-colors duration-300 relative group"
            >
              <div>
                {/* Badge & Period Header */}
                <div className="flex items-center justify-between pb-3 border-b border-amber-100 mb-3.5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#AF0807] bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-full">
                    <Calendar className="h-3.5 w-3.5 text-[#AF0807]" />
                    <span>
                      {t(mandirTimelineData.stagePrefix)}
                      {idx + 1}
                    </span>
                  </div>
                  <span className="text-[11px] font-extrabold text-amber-700 uppercase tracking-wider">
                    {t(mandirTimelineData.category)}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3E0B02] mb-2.5 group-hover:text-[#AF0807] transition-colors">
                  {periodStr}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {textStr}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-amber-800 font-semibold">
                <span>{t(mandirTimelineData.footer)}</span>
                <ChevronRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
