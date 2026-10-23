import type { Metadata } from "next";
import RatnaHero from "@/components/ratna/RatnaHero";
import RatnaOverviewBenefits from "@/components/ratna/RatnaOverviewBenefits";
import RatnaCatalogGridLeaf from "@/components/ratna/RatnaCatalogGridLeaf";
import RatnaShowcase from "@/components/ratna/RatnaShowcase";

export const metadata: Metadata = {
  title: "Original Navratna Gemstones in Nalkheda | 100% Certified Astrological Ratna — Pt. Deepak Sharma",
  description:
    "माँ बगलामुखी धाम नलखेड़ा से 100% असली, प्राकृतिक एवं लैब प्रमाणित नवरत्न (माणिक्य, मोती, मूंगा, पन्ना, पुखराज, हीरा, नीलम, गोमेद, लहसुनिया)। अपनी जन्मकुंडली व ग्रह शांति हेतु आचार्य पं. दीपक शर्मा जी से मार्गदर्शन लें।",
  keywords: [
    "Original Ratna",
    "असली रत्न",
    "Navratna Gemstones Nalkheda",
    "Certified Gemstones",
    "Manikya Ruby",
    "Panna Emerald",
    "Pukhraj Yellow Sapphire",
    "Neelam Blue Sapphire",
    "Munga Red Coral",
    "Astrological Gemstones India",
    "Pandit Deepak Sharma Nalkheda",
    "Baglamukhi Mandir Ratna",
    "7224083313",
  ],
  alternates: {
    canonical: "https://baglamukhi-temple-hazel.vercel.app/ratna",
  },
  openGraph: {
    title: "Original Ratna (Gemstones) | 100% Certified & Energized — Maa Baglamukhi Dham",
    description:
      "माँ बगलामुखी सिद्धपीठ नलखेड़ा से 100% प्रमाणित व प्राकृतिक नवरत्न संग्रह। कुंडली अनुसार वैदिक प्राण-प्रतिष्ठित रत्न प्राप्त करें।",
    url: "https://baglamukhi-temple-hazel.vercel.app/ratna",
    siteName: "Shri Maa Baglamukhi Dham Nalkheda",
    type: "website",
    locale: "hi_IN",
    images: [
      {
        url: "/images/ratna-hero-desktop.webp",
        width: 1024,
        height: 342,
        alt: "Original Ratna Gemstones - माँ बगलामुखी धाम नलखेड़ा",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Original Ratna | Certified Astrological Gemstones — Pt. Deepak Sharma",
    description:
      "माँ बगलामुखी सिद्धपीठ नलखेड़ा से 100% असली, वैदिक प्राण-प्रतिष्ठित नवरत्न संग्रह।",
    images: ["/images/ratna-hero-desktop.webp"],
  },
};

export default function RatnaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://baglamukhi-temple-hazel.vercel.app/ratna#webpage",
        name: "Original Ratna (Gemstones) Collection - माँ बगलामुखी धाम",
        description:
          "100% Lab Certified and spiritually energized natural Vedic Navratna gemstones by Pt. Deepak Sharma, Nalkheda.",
        url: "https://baglamukhi-temple-hazel.vercel.app/ratna",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://baglamukhi-temple-hazel.vercel.app/#website",
          name: "Shri Maa Baglamukhi Dham Nalkheda",
          url: "https://baglamukhi-temple-hazel.vercel.app",
        },
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
      <main className="w-full max-w-full overflow-x-clip min-h-screen flex flex-col bg-[#FFFDF8]">
        {/* 1. Hero Section matching the user's UI/UX screenshot with responsive backgrounds */}
        <RatnaHero />

        {/* 2. Overview & Benefits Section matching user UI screenshot */}
        <RatnaOverviewBenefits />

        {/* 3. Gemstones Product Catalog Grid matching user UI screenshot */}
        <RatnaCatalogGridLeaf />

        {/* 4. Gemstones Showcase & Sacred Quote Section */}
        <RatnaShowcase />
      </main>
    </>
  );
}
