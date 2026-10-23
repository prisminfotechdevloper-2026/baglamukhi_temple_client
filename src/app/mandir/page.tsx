import React from "react";
import type { Metadata } from "next";
import mandirData from "../../../content/mandir.json";
import MandirHero from "@/components/mandir/MandirHero";
import MandirStatsRibbon from "@/components/mandir/MandirStatsRibbon";
import MandirArticles from "@/components/mandir/MandirArticles";
import MandirFactSidebar from "@/components/mandir/MandirFactSidebar";
import MandirTimeline from "@/components/mandir/MandirTimeline";
import MandirHowToReach from "@/components/mandir/MandirHowToReach";
import MandirTraditionNotice from "@/components/mandir/MandirTraditionNotice";
import TempleOverviewSection from "@/components/home/TempleOverviewSection";

export const metadata: Metadata = {
  title: "माँ बगलामुखी मंदिर, नलखेड़ा | इतिहास, मान्यता व दर्शन जानकारी",
  description:
    "पावन लखुन्दर नदी के तट पर स्थित माँ बगलामुखी मंदिर नलखेड़ा (आगर-मालवा, म.प्र.) का इतिहास, कथा, मान्यताएँ, स्वयंभू त्रिमुखी स्वरूप एवं दर्शन संबंधी संपूर्ण विवरण।",
  keywords: [
    "माँ बगलामुखी मंदिर",
    "बगलामुखी नलखेड़ा",
    "Baglamukhi Mandir Nalkheda",
    "त्रिशक्ति स्वरूप",
    "पीताम्बरा देवी नलखेड़ा",
    "बगलामुखी इतिहास",
    "हवन परंपरा नलखेड़ा",
    "माँ बगलामुखी दर्शन",
    "नलखेड़ा कैसे पहुंचे",
  ],
  openGraph: {
    title: "माँ बगलामुखी मंदिर, नलखेड़ा — विस्तृत आलेख एवं दर्शन विवरण",
    description:
      "लखुन्दर नदी के किनारे बसा नलखेड़ा का यह मंदिर देश के प्राचीन सिद्धपीठों में गिना जाता है, जहाँ तंत्र-साधना और हवन की परंपरा सदियों से चली आ रही है।",
    url: "https://baglamukhi-temple-hazel.vercel.app/mandir",
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
  alternates: {
    canonical: "https://baglamukhi-temple-hazel.vercel.app/mandir",
  },
};

export default function MandirPage() {
  const {
    header,
    articleBody,
    pullQuote,
    factBox,
    timingBox,
    timeline,
    howToReach,
    footerNote,
  } = mandirData;

  // JSON-LD for rich snippets (PlaceOfWorship + Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PlaceOfWorship",
        "@id": "https://baglamukhi-temple-hazel.vercel.app/#mandir",
        name: header.title,
        description: header.standfirst,
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
          latitude: "23.8329",
          longitude: "76.0125",
        },
        image: "https://baglamukhi-temple-hazel.vercel.app/images/baglamukhi-mandir-real.webp",
        telephone: "+91-7224083313",
      },
      {
        "@type": "Article",
        headline: header.title,
        description: header.standfirst,
        image: "https://baglamukhi-temple-hazel.vercel.app/images/baglamukhi-mandir-real.webp",
        inLanguage: "hi",
        publisher: {
          "@type": "Organization",
          name: "श्री माँ बगलामुखी मंदिर सिद्धपीठ",
          url: "https://baglamukhi-temple-hazel.vercel.app",
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

      {/* 1. Hero Section matching site aesthetic */}
      <MandirHero
        title={header.title}
        standfirst={header.standfirst}
        dateline={header.dateline}
        imageSrc={header.leadImage.src}
        mapsUrl={howToReach.mapsUrl}
      />

      {/* 2. Highlights Ribbon with signature left-right amber borders */}
      <MandirStatsRibbon />

      {/* 3. Temple Overview, Live Darshan & Aarti Timings, and Sacred Images */}
      <TempleOverviewSection />

      {/* 4. Main Content Area: 2-Column Responsive Grid with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 5 Article Sections (Smoothly Scrolls) */}
          <div className="lg:col-span-8 order-2 lg:order-1 min-w-0">
            <MandirArticles sections={articleBody} pullQuote={pullQuote} />
          </div>

          {/* Right Column: Fact Box & Direct Helpline Sidebar (Stays Fixed / Sticky on Desktop) */}
          <div className="lg:col-span-4 order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <MandirFactSidebar
              title={factBox.title}
              facts={factBox.facts}
              mapsUrl={howToReach.mapsUrl}
            />
          </div>
        </div>

        {/* 4. Timeline "इतिहास एक नज़र में" */}
        <MandirTimeline title={timeline.title} events={timeline.events} />

        {/* 5. How to reach ("कैसे पहुँचें") */}
        <MandirHowToReach
          title={howToReach.title}
          mapsUrl={howToReach.mapsUrl}
        />

        {/* 6. Tradition Note & Direct Helpline CTA */}
        <MandirTraditionNotice traditionNote={footerNote.traditionNote} />
      </div>
    </main>
  );
}
