"use client";

import { Car, Train, Navigation, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { mandirHowToReachData } from "@/data/mandirContent";

interface MandirHowToReachProps {
  title?: string;
  mapsUrl?: string;
}

const routeIcons = [Car, Train, Navigation];

export default function MandirHowToReach({
  title,
  mapsUrl = "https://maps.app.goo.gl/3w6U7f8qT4Lh5F4z7",
}: MandirHowToReachProps) {
  const { t } = useLanguage();

  const displayTitle = title || t(mandirHowToReachData.title);

  return (
    <section className="mt-12 sm:mt-16">
      {/* Section Header */}
      <div className="flex items-start gap-3.5 mb-6 sm:mb-8">
        <div className="flex gap-1 shrink-0 pt-1">
          <div className="w-1.5 h-8 rounded-full bg-[#AF0807]" />
          <div className="w-1 h-8 rounded-full bg-amber-400" />
        </div>
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#AF0807]">
            {t(mandirHowToReachData.badge)}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
            {displayTitle}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
            {t(mandirHowToReachData.subtitle)}
          </p>
        </div>
      </div>

      {/* 3 Transport Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {mandirHowToReachData.routes.map((rt, idx) => {
          const Icon = routeIcons[idx] || Car;
          return (
            <div
              key={idx}
              className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-colors duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-3.5 pb-3 border-b border-stone-100">
                  <div className="h-10 w-10 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-[#AF0807]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#3E0B02]">
                      {t(rt.mode)}
                    </h3>
                    <p className="text-[11px] font-bold text-amber-700 uppercase">
                      {t(rt.highlight)}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {t(rt.detail)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Google Maps Direction Card */}
      <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-300">
        <div className="flex items-center gap-3 text-left">
          <div className="h-11 w-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
            <MapPin className="h-6 w-6 text-[#AF0807]" />
          </div>
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#3E0B02]">
              {t(mandirHowToReachData.mapCard.title)}
            </h4>
            <p className="text-xs text-stone-600 font-medium">
              {t(mandirHowToReachData.mapCard.address)}
            </p>
          </div>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-xs sm:text-sm font-bold shadow-lg border border-amber-400/80 hover:border-amber-300 transition-colors shrink-0 cursor-pointer"
        >
          <Navigation className="h-4 w-4 text-amber-300" />
          <span>{t(mandirHowToReachData.mapCard.btn)}</span>
        </a>
      </div>
    </section>
  );
}
