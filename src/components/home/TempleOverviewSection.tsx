import TempleRightInteractiveCard from "./TempleRightInteractiveCard";
import TempleLeftOverviewCard from "./TempleLeftOverviewCard";

export default function TempleOverviewSection() {

  return (
    <section id="temple-darshan-section" className="w-full bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF8] py-8 sm:py-12 border-b border-[#EBD8B4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left Aligned */}
        <div className="text-left max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/25 px-3 py-1 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#8B0000] animate-ping" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8B0000]">
              महाभारत कालीन सिद्ध पीठ • नलखेड़ा धाम
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#4A0C16] tracking-tight leading-tight">
            मंदिर दर्शन परिचय एवं आरती समय सारिणी
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5C3A21] leading-relaxed">
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
