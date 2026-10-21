"use client";

export default function NavbarBrandLeaf() {
  return (
    <div className="flex flex-col text-left min-w-0">
      {/* Line 1: Sacred Shrine Location Eyebrow (Single Line) */}
      <div className="flex items-center gap-1.5 leading-none">
        <span className="h-1.5 w-1.5 rounded-full bg-[#AF0807] animate-pulse shrink-0" />
        <span className="font-serif text-[9.5px] xs:text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-wide text-[#AF0807] whitespace-nowrap truncate">
          Maa Baglamukhi Dham • Nalkheda
        </span>
      </div>

      {/* Line 2: Prominent Personal Priest Name (Single Line) */}
      <span className="font-serif font-black text-[15px] xs:text-base sm:text-xl md:text-[22px] text-[#3E0A10] leading-snug tracking-tight group-hover:text-[#AF0807] transition-colors mt-0.5 whitespace-nowrap truncate">
        Pt. Deepak Sharma
      </span>

      {/* Line 3: Specialized Service (Single Line - Luxury Gold Accent Line) */}
      <div className="flex items-center gap-1.5 mt-0.5">
        <span className="h-[2px] w-3 sm:w-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full shrink-0" />
        <span className="font-serif text-[10px] xs:text-[10.5px] sm:text-[11.5px] font-bold text-[#78350F] tracking-wide whitespace-nowrap truncate">
          Hawan • Puja • Kundali Seva
        </span>
      </div>
    </div>
  );
}
