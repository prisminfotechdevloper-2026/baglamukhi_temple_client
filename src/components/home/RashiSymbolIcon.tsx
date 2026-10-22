import { memo } from "react";

interface RashiSymbolIconProps {
  id: string;
  className?: string;
  iconClassName?: string;
}

const RASHI_COLORS: Record<string, { bg: string; ring: string }> = {
  aries: {
    bg: "bg-gradient-to-br from-[#DC2626] to-[#991B1B]",
    ring: "ring-red-400/30",
  },
  taurus: {
    bg: "bg-gradient-to-br from-[#EA580C] to-[#C2410C]",
    ring: "ring-orange-400/30",
  },
  gemini: {
    bg: "bg-gradient-to-br from-[#F59E0B] to-[#D97706]",
    ring: "ring-amber-400/30",
  },
  cancer: {
    bg: "bg-gradient-to-br from-[#EAB308] to-[#CA8A04]",
    ring: "ring-yellow-400/30",
  },
  leo: {
    bg: "bg-gradient-to-br from-[#84CC16] to-[#4D7C0F]",
    ring: "ring-lime-400/30",
  },
  virgo: {
    bg: "bg-gradient-to-br from-[#10B981] to-[#047857]",
    ring: "ring-emerald-400/30",
  },
  libra: {
    bg: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E]",
    ring: "ring-teal-400/30",
  },
  scorpio: {
    bg: "bg-gradient-to-br from-[#06B6D4] to-[#0E7490]",
    ring: "ring-cyan-400/30",
  },
  sagittarius: {
    bg: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    ring: "ring-blue-400/30",
  },
  capricorn: {
    bg: "bg-gradient-to-br from-[#6366F1] to-[#4338CA]",
    ring: "ring-indigo-400/30",
  },
  aquarius: {
    bg: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    ring: "ring-purple-400/30",
  },
  pisces: {
    bg: "bg-gradient-to-br from-[#EC4899] to-[#BE185D]",
    ring: "ring-pink-400/30",
  },
};

function ZodiacSvg({ id, className = "h-4 w-4" }: { id: string; className?: string }) {
  switch (id) {
    case "aries":
      // Ram horns
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 8C4 5.5 5.5 4 7.5 4C9.5 4 10.5 5.5 11 8C11.5 12 12 19 12 20M20 8C20 5.5 18.5 4 16.5 4C14.5 4 13.5 5.5 13 8C12.5 12 12 19 12 20" />
        </svg>
      );
    case "taurus":
      // Bull
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 5C6 7.5 8 9.5 12 9.5C16 9.5 18 7.5 18 5" />
          <circle cx="12" cy="15" r="4.5" />
        </svg>
      );
    case "gemini":
      // Twins (Roman II with curved arches)
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M5 4.5C9 6 15 6 19 4.5M5 19.5C9 18 15 18 19 19.5M9 5V19M15 5V19" />
        </svg>
      );
    case "cancer":
      // Crab claws
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <circle cx="7" cy="9" r="3" />
          <path d="M7 6C13 6 17 9 18 13" />
          <circle cx="17" cy="15" r="3" />
          <path d="M17 18C11 18 7 15 6 11" />
        </svg>
      );
    case "leo":
      // Lion mane & tail
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <circle cx="7.5" cy="14" r="3" />
          <path d="M10 12.5C10 8 13 5.5 16 5.5C18.5 5.5 19.5 7.5 19 10C18 14 15 15.5 16 18C16.5 19 18 19 19 18" />
        </svg>
      );
    case "virgo":
      // Maiden M with loop
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 6V16C4 17.5 5 18.5 6.5 18.5C8 18.5 9 17.5 9 16V6M9 16C9 17.5 10 18.5 11.5 18.5C13 18.5 14 17.5 14 16V6M14 14C15.5 14 17 15 17 17.5C17 20 15 21 13 20M15.5 17L18.5 21" />
        </svg>
      );
    case "libra":
      // Scales
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 19H20M4 15H8C8.5 11.5 11 9 12 9C13 9 15.5 11.5 16 15H20" />
        </svg>
      );
    case "scorpio":
      // Scorpion with arrow
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 6V15C4 16.5 5 17.5 6.5 17.5C8 17.5 9 16.5 9 15V6M9 15C9 16.5 10 17.5 11.5 17.5C13 17.5 14 16.5 14 15V6M14 15C14 17.5 15.5 18.5 18 18.5H19.5M17 16L20 18.5L17 21" />
        </svg>
      );
    case "sagittarius":
      // Archer arrow
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 18L19 5M19 5H13M19 5V11M9 15L15 9" />
        </svg>
      );
    case "capricorn":
      // Sea goat
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 6V14C5 16 6.5 17.5 8.5 17.5C10.5 17.5 12 16 12 14V6M12 14C12.5 11 15 8 18 10C20 11.5 20 14 18.5 16C17 18 15 20 16 21C16.8 21.8 18 21.5 19 20" />
        </svg>
      );
    case "aquarius":
      // Water waves
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 9L7.5 6L11 9L14.5 6L18 9L20 7.5M4 16L7.5 13L11 16L14.5 13L18 16L20 14.5" />
        </svg>
      );
    case "pisces":
      // Fishes
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 4C8.5 8 8.5 16 6 20M18 4C15.5 8 15.5 16 18 20M4 12H20" />
        </svg>
      );
    default:
      return null;
  }
}

export const RashiSymbolIcon = memo(function RashiSymbolIcon({
  id,
  className = "w-7 h-7 sm:w-8 sm:h-8",
  iconClassName = "h-4 w-4 sm:h-4.5 sm:w-4.5",
}: RashiSymbolIconProps) {
  const color = RASHI_COLORS[id] || {
    bg: "bg-gradient-to-br from-[#8B0000] to-[#5C0D15]",
    ring: "ring-amber-400/30",
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full text-white shadow-sm ring-1 ring-white/30 transition-transform duration-200 ${color.bg} ${className}`}
    >
      <ZodiacSvg id={id} className={iconClassName} />
    </span>
  );
});

export default RashiSymbolIcon;
