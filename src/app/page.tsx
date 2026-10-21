import HeroSection from "@/components/home/HeroSection";
import SacredSiddhiBar from "@/components/home/SacredSiddhiBar";
import ServicesMarquee from "@/components/home/ServicesMarquee";
import KundaliRashiSection from "@/components/home/KundaliRashiSection";
import TempleOverviewSection from "@/components/home/TempleOverviewSection";
import PanditProfileSection from "@/components/home/PanditProfileSection";
import PanditWelcomeDialog from "@/components/home/PanditWelcomeDialog";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#FFF8E7]">
      {/* 1. Hero Section with Responsive Divine Backgrounds & Sacred Mantra Box */}
      <HeroSection />

      {/* 2. 8 Sacred Siddhi & Hawan Anushthan Medallions Bar */}
      <SacredSiddhiBar />

      {/* 3. Full-Width Compact Services Slider / Marquee */}
      <ServicesMarquee />

      {/* 4. Janam Kundali, 12 Rashi & Dosha Nivaran Section (Interactive) */}
      <KundaliRashiSection />

      {/* 5. Temple Overview (Left) & Timings/Aarti Schedule (Right) */}
      <TempleOverviewSection />

      {/* 6. Chief Priest Acharya Pt. Deepak Sharma Profile & Credentials */}
      <PanditProfileSection />

      {/* 7. Pandit Ji Welcome Dialog (Triggered on Scroll) */}
      <PanditWelcomeDialog />
    </main>
  );
}
