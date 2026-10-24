import React from "react";
import type { Metadata } from "next";
import { mandirHeader } from "@/data/mandirContent";
import MandirHero from "@/components/mandir/MandirHero";
import MandirStatsRibbon from "@/components/mandir/MandirStatsRibbon";
import MandirArticles from "@/components/mandir/MandirArticles";
import MandirFactSidebar from "@/components/mandir/MandirFactSidebar";
import MandirTimeline from "@/components/mandir/MandirTimeline";
import MandirHowToReach from "@/components/mandir/MandirHowToReach";
import MandirTraditionNotice from "@/components/mandir/MandirTraditionNotice";
import TempleOverviewSection from "@/components/home/TempleOverviewSection";

export const metadata: Metadata = {
  title: "Maa Baglamukhi Mandir Nalkheda | Temple History, Darshan & Aarti Timings",
  description:
    "पावन लखुन्दर नदी के तट पर स्थित महाभारत कालीन स्वयंभू त्रिमुखी माँ बगलामुखी सिद्धपीठ नलखेड़ा (आगर-मालवा, म.प्र.) का इतिहास, दर्शन समय, आरती समय, हवन परंपरा एवं यात्रा मार्ग।",
  keywords: [
    "Maa Baglamukhi Mandir Nalkheda",
    "Maa Baglamukhi Temple Nalkheda darshan timings",
    "बगलामुखी मंदिर नलखेड़ा",
    "Nalkheda temple aarti time",
    "पीताम्बरा सिद्धपीठ नलखेड़ा",
    "Best hawan puja pandit in Nalkheda",
    "त्रिशक्ति स्वरूप बगलामुखी",
    "बगलामुखी मंदिर इतिहास",
    "हवन परंपरा नलखेड़ा",
    "नलखेड़ा कैसे पहुंचे",
    "Agar Malwa Baglamukhi Mandir",
  ],
  alternates: {
    canonical: "https://www.baglamukhipujanalkheda.com/mandir",
    languages: {
      "hi-IN": "https://www.baglamukhipujanalkheda.com/mandir",
      "en-US": "https://www.baglamukhipujanalkheda.com/mandir",
      "x-default": "https://www.baglamukhipujanalkheda.com/mandir",
    },
  },
  openGraph: {
    title: "Maa Baglamukhi Mandir Nalkheda | Temple History, Darshan & Aarti Timings",
    description:
      "लखुन्दर नदी के किनारे बसा नलखेड़ा का यह मंदिर देश के प्राचीन सिद्धपीठों में गिना जाता है, जहाँ तंत्र-साधना और हवन की परंपरा सदियों से चली आ रही है।",
    url: "https://www.baglamukhipujanalkheda.com/mandir",
    siteName: "श्री माँ बगलामुखी मंदिर नलखेड़ा",
    images: [
      {
        url: "/images/baglamukhi-mandir-real.webp",
        width: 1200,
        height: 675,
        alt: "माँ बगलामुखी मंदिर नलखेड़ा शिखर एवं सिंहद्वार",
      },
    ],
    locale: "hi_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Baglamukhi Mandir Nalkheda | Darshan Timings & History",
    description: "माँ बगलामुखी सिद्धपीठ नलखेड़ा का संपूर्ण दर्शन, इतिहास व आरती विवरण।",
    images: ["/images/baglamukhi-mandir-real.webp"],
  },
};

export default function MandirPage() {
  // JSON-LD for rich snippets (PlaceOfWorship + Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HinduTemple",
        "@id": "https://www.baglamukhipujanalkheda.com/#mandir",
        name: mandirHeader.title.hi,
        description: mandirHeader.standfirst.hi,
        url: "https://www.baglamukhipujanalkheda.com/mandir",
        address: {
          "@type": "PostalAddress",
          streetAddress: "शासकीय माँ बगलामुखी सिद्धपीठ, नलखेड़ा, जिला - आगर मालवा",
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
        image: "https://www.baglamukhipujanalkheda.com/images/baglamukhi-mandir-real.webp",
        telephone: "+91-7224083313",
      },
      {
        "@type": "Article",
        headline: mandirHeader.title.hi,
        description: mandirHeader.standfirst.hi,
        image: "https://www.baglamukhipujanalkheda.com/images/baglamukhi-mandir-real.webp",
        inLanguage: "hi",
        publisher: {
          "@type": "Organization",
          name: "श्री माँ बगलामुखी मंदिर सिद्धपीठ",
          url: "https://www.baglamukhipujanalkheda.com",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. Hero Section with dynamic bilingual headline & dateline */}
      <MandirHero />

      {/* 2. Highlights Ribbon with bilingual cards */}
      <MandirStatsRibbon />

      {/* 3. Temple Overview, Live Darshan & Aarti Timings, and Sacred Images */}
      <TempleOverviewSection />

      {/* 4. Main Content Area: 2-Column Responsive Grid with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 5 Article Chapters (Bilingual & Smoothly Scrolls) */}
          <div className="lg:col-span-8 order-2 lg:order-1 min-w-0">
            <MandirArticles />
          </div>

          {/* Right Column: Fact Box & Direct Helpline Sidebar (Bilingual & Sticky on Desktop) */}
          <div className="lg:col-span-4 order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <MandirFactSidebar />
          </div>
        </div>

        {/* 4. Timeline "इतिहास एक नज़र में" / "History & Heritage at a Glance" */}
        <MandirTimeline />

        {/* 5. How to reach ("कैसे पहुँचें" / "How to Reach") */}
        <MandirHowToReach />

        {/* 6. Tradition Note & Direct Helpline CTA (Bilingual) */}
        <MandirTraditionNotice />
      </div>
    </main>
  );
}
