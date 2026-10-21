import TempleRightInteractiveCard from "./TempleRightInteractiveCard";
import TempleLeftOverviewCard from "./TempleLeftOverviewCard";
import TempleOverviewHeaderLeaf from "./TempleOverviewHeaderLeaf";

export default function TempleOverviewSection() {
  return (
    <section id="temple-darshan-section" className="w-full bg-gradient-to-b from-[#FFF8E7] to-[#FFFDF8] py-8 sm:py-12 border-b border-[#EBD8B4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left Aligned Bilingual Leaf */}
        <TempleOverviewHeaderLeaf />

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
