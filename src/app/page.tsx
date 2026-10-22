import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import SacredSiddhiBar from "@/components/home/SacredSiddhiBar";
import KundaliRashiSection from "@/components/home/KundaliRashiSection";
import TempleOverviewSection from "@/components/home/TempleOverviewSection";
import DarshanVideoSection from "@/components/home/DarshanVideoSection";
import PanditProfileSection from "@/components/home/PanditProfileSection";
import RudrakshaRatnaSection from "@/components/home/RudrakshaRatnaSection";
import PanditWelcomeDialog from "@/components/home/PanditWelcomeDialog";

export const metadata: Metadata = {
  title: "Maa Baglamukhi Havan Booking in Nalkheda | Pt. Deepak Sharma",
  description:
    "माँ बगलामुखी पूजा और हवन की जानकारी, उपलब्ध सेवाएँ और ऑनलाइन बुकिंग संबंधी सहायता प्राप्त करें। तारीख, प्रक्रिया और शुभ मुहूर्त की पुष्टि के लिए संपर्क करें। पं. दीपक शर्मा (+91 72230 83313)।",
  keywords: [
    "Maa Baglamukhi Havan Booking in Nalkheda",
    "Baglamukhi Puja Nalkheda",
    "बगलामुखी हवन बुकिंग नलखेड़ा",
    "Pandit Deepak Sharma Nalkheda",
    "Shatru Badha Nivaran Hawan",
    "Court Case Victory Baglamukhi Puja",
    "Nalkheda Mandir Havan",
    "7223083313",
    "9575664204",
  ],
  alternates: {
    canonical: "https://baglamukhi-temple-hazel.vercel.app",
  },
  openGraph: {
    title: "Maa Baglamukhi Havan Booking in Nalkheda | Pt. Deepak Sharma",
    description:
      "माँ बगलामुखी पूजा और हवन की जानकारी, उपलब्ध सेवाएँ और ऑनलाइन बुकिंग सहायता प्राप्त करें। तारीख, प्रक्रिया और शुभ मुहूर्त की पुष्टि हेतु संपर्क करें।",
    url: "https://baglamukhi-temple-hazel.vercel.app",
    siteName: "Shri Maa Baglamukhi Dham Nalkheda",
    type: "website",
    locale: "hi_IN",
    images: [
      {
        url: "/images/baglamukhi-logo.png",
        width: 1200,
        height: 1200,
        alt: "माँ बगलामुखी दिव्य स्वरूप नलखेड़ा",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Baglamukhi Havan Booking in Nalkheda | Pt. Deepak Sharma",
    description:
      "माँ बगलामुखी पूजा और हवन की जानकारी, उपलब्ध सेवाएँ और ऑनलाइन बुकिंग सहायता प्राप्त करें।",
    images: ["/images/baglamukhi-logo.png"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PlaceOfWorship",
        "@id": "https://baglamukhi-temple-hazel.vercel.app/#temple",
        name: "श्री माँ बगलामुखी मंदिर सिद्धपीठ नलखेड़ा (Shri Maa Baglamukhi Temple)",
        alternateName: ["Maa Baglamukhi Mandir Nalkheda", "Pitambara Peeth Nalkheda"],
        description:
          "महाभारत कालीन स्वयंभू त्रिमुखी माँ बगलामुखी सिद्धपीठ नलखेड़ा। शत्रु बाधा निवारण, कोर्ट केस विजय, तंत्र दोष शांति एवं सवा लाख जप महाहवन का पावन तीर्थ।",
        url: "https://baglamukhi-temple-hazel.vercel.app",
        telephone: "+91-7223083313",
        address: {
          "@type": "PostalAddress",
          streetAddress: "लखुंदर नदी तट, माँ बगलामुखी मार्ग",
          addressLocality: "नलखेड़ा",
          addressRegion: "मध्य प्रदेश",
          postalCode: "465445",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "23.8344",
          longitude: "76.2239",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "06:00",
            closes: "21:30",
          },
        ],
      },
      {
        "@type": "Person",
        "@id": "https://baglamukhi-temple-hazel.vercel.app/#priest",
        name: "आचार्य पं. दीपक शर्मा (Acharya Pt. Deepak Sharma)",
        jobTitle: "मुख्य उपासक एवं वैदिक कर्मकाण्ड मर्मज्ञ",
        worksFor: {
          "@type": "PlaceOfWorship",
          name: "श्री माँ बगलामुखी मंदिर नलखेड़ा",
        },
        telephone: "+91-7223083313",
        description:
          "महामृत्युंजय वेद विद्यालय (उज्जैन) से कर्मकाण्ड प्रशिक्षित एवं श्री वशिष्ठ ज्योतिष संस्थान संबद्ध, 5+ वर्षों का साधना अनुभव।",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "मुख्य पृष्ठ (Home)",
            item: "https://baglamukhi-temple-hazel.vercel.app",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="w-full max-w-full overflow-x-clip min-h-screen flex flex-col bg-[#FFF8E7]">
        {/* 1. Hero Section with Responsive Divine Backgrounds & Sacred Mantra Box */}
        <HeroSection />

        {/* 2. 8 Sacred Siddhi & Hawan Anushthan Medallions Bar */}
        <SacredSiddhiBar />

        {/* 3. Janam Kundali, 12 Rashi & Dosha Nivaran Section (Interactive) */}
        <KundaliRashiSection />

        {/* 5. Temple Overview (Left) & Timings/Aarti Schedule (Right) */}
        <TempleOverviewSection />

        {/* 6. Sacred Hawan & Darshan Video Reels (In Motion - Nikhar Style) */}
        <DarshanVideoSection />

        {/* 7. Chief Priest Acharya Pt. Deepak Sharma Profile & Credentials */}
        <PanditProfileSection />

        {/* 8. Original Rudraksha & Navgraha Ratna Highlight Showcase */}
        <RudrakshaRatnaSection />

        {/* 9. Pandit Ji Welcome Dialog (Triggered on Scroll) */}
        <PanditWelcomeDialog />
      </main>
    </>
  );
}
