"use client";

import { Landmark, Compass, ShieldCheck, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { mandirStatsRibbonData } from "@/data/mandirContent";

const iconMap = {
  Landmark,
  Compass,
  ShieldCheck,
  MapPin,
};

export default function MandirStatsRibbon() {
  const { t } = useLanguage();

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {mandirStatsRibbonData.map((item, idx) => {
          const Icon = iconMap[item.iconName as keyof typeof iconMap] || Landmark;
          const title = t(item.title);
          const subtitle = t(item.subtitle);
          const desc = t(item.desc);

          return (
            <div
              key={idx}
              className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1 transition-colors duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-[#AF0807]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#3E0B02]">
                      {title}
                    </h3>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                      {subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
