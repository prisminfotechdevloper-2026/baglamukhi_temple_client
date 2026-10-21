import HeroSection from "@/components/home/HeroSection";
import ServicesMarquee from "@/components/home/ServicesMarquee";
import TempleOverviewSection from "@/components/home/TempleOverviewSection";
import PanditProfileSection from "@/components/home/PanditProfileSection";
import PanditWelcomeDialog from "@/components/home/PanditWelcomeDialog";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white">
      {/* 1. Hero Section with Responsive Backgrounds (Desktop Landscape + Mobile Portrait) */}
      <HeroSection />

      {/* 2. Full-Width Compact Services Slider */}
      <ServicesMarquee />

      {/* 3. Temple Overview (Left) & Timings/Aarti Schedule (Right) */}
      <TempleOverviewSection />

      {/* 4. Pandit Deepak Sharma Profile Overview Section */}
      <PanditProfileSection />

      {/* 5. Pandit Ji Welcome Dialog (Triggered on Scroll to Temple Section) */}
      <PanditWelcomeDialog />
    </main>
  );
}
