import RudrakshaFeatureCardsLeaf from "./RudrakshaFeatureCardsLeaf";
import RudrakshaSliderHeadingLeaf from "./RudrakshaSliderHeadingLeaf";
import RudrakshaPopularSliderLeaf from "./RudrakshaPopularSliderLeaf";
import RudrakshaConsultationBannerLeaf from "./RudrakshaConsultationBannerLeaf";
import { siteConfig } from "@/data/siteConfig";

const PHONE = siteConfig.contact.primaryPhone;

export default function RudrakshaRatnaSection() {
  return (
    <section
      id="rudraksha-ratna-collection"
      aria-label="सिद्ध रुद्राक्ष एवं नवग्रह रत्न संग्रह"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFFDF8] py-6 sm:py-8 border-b border-[#EBD8B4]"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        {/* ========================================================= */}
        {/* ============ 1. TOP 2 CARDS (RUDRAKSHA & RATNA) ============ */}
        {/* ========================================================= */}
        <RudrakshaFeatureCardsLeaf />

        {/* ========================================================= */}
        {/* ============ 2. POPULAR PRODUCTS SLIDER (हमारे लोकप्रिय उत्पाद) ============ */}
        {/* ========================================================= */}
        <div>
          {/* Section Divider with Centered Heading (Bilingual via useLanguage) */}
          <RudrakshaSliderHeadingLeaf />

          {/* Infinite Single-Direction 3s Auto-Slide Carousel Leaf (12 items) */}
          <div className="mt-3.5 sm:mt-4">
            <RudrakshaPopularSliderLeaf />
          </div>
        </div>

        {/* ========================================================= */}
        {/* ============ 3. BOTTOM CONSULTATION BANNER ============ */}
        {/* ========================================================= */}
        <RudrakshaConsultationBannerLeaf phone={PHONE} />
      </div>
    </section>
  );
}
