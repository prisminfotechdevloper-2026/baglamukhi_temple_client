import TempleRightInteractiveCard from "./TempleRightInteractiveCard";
import TempleLeftOverviewCard from "./TempleLeftOverviewCard";

export default function TempleOverviewSection() {

  return (
    <section id="temple-darshan-section" className="w-full bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF8] py-8 sm:py-12 border-b border-[#EBD8B4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left Aligned */}
        <div className="text-left max-w-3xl mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
              महाभारत कालीन सिद्धपीठ • नलखेड़ा धाम
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#4A0C16] tracking-tight leading-tight">
            मंदिर दर्शन परिचय एवं आरती समय सारिणी
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#5C3A21] leading-relaxed">
            पावन लखुंदर नदी तट पर विराजी माँ बगलामुखी के दर्शन एवं दैनिक पूजा-अर्चना का संपूर्ण विवरण
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* ================= LEFT COLUMN: Mandir Overview & Significance (Bilingual Leaf) ================= */}
          <div className="lg:col-span-6 flex flex-col">
            <TempleLeftOverviewCard />
          </div>

          {/* ================= RIGHT COLUMN: Interactive Timings & 3 Darshan Images Gallery ================= */}
          <div className="lg:col-span-6 flex flex-col">
            <TempleRightInteractiveCard />
          </div>

        </div>
      </div>
    </section>
  );
}
