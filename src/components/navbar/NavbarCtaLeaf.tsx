"use client";

import { CalendarCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { usePujaBooking } from "@/context/PujaBookingContext";

export default function NavbarCtaLeaf() {
  const { t } = useLanguage();
  const { openBookingModal } = usePujaBooking();

  return (
    <button
      type="button"
      onClick={() => openBookingModal()}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#AF0807] via-[#960706] to-[#730501] px-5 xl:px-6 py-2.5 text-sm xl:text-[15px] font-bold text-white shadow-md shadow-red-900/20 hover:shadow-lg hover:shadow-red-900/30 border border-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 focus:outline-hidden whitespace-nowrap cursor-pointer"
      aria-label={t({
        hi: "माँ बगलामुखी पूजा बुक करें",
        en: "Book Maa Baglamukhi Puja",
      })}
    >
      <CalendarCheck className="h-4 w-4 xl:h-5 xl:w-5 text-amber-300" />
      <div className="flex flex-col text-left leading-none">
        <span className="tracking-wide text-sm xl:text-[15px]">
          {t({
            hi: "पूजा बुक करें",
            en: "Book Puja",
          })}
        </span>
      </div>
    </button>
  );
}
