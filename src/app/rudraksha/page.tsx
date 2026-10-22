import type { Metadata } from "next";
import RudrakshaHero from "@/components/rudraksha/RudrakshaHero";
import RudrakshaOverviewBenefits from "@/components/rudraksha/RudrakshaOverviewBenefits";
import RudrakshaCatalogGridLeaf from "@/components/rudraksha/RudrakshaCatalogGridLeaf";
import RudrakshaMalaShowcase from "@/components/rudraksha/RudrakshaMalaShowcase";

export const metadata: Metadata = {
  title: "Original Rudraksha in Nalkheda | Lab Certified Nepal Rudraksha — Pt. Deepak Sharma",
  description:
    "माँ बगलामुखी धाम नलखेड़ा से 100% असली, प्राकृतिक एवं सिद्ध नेपाली रुद्राक्ष (1 से 14 मुखी, गौरी शंकर, गणेश व सिद्ध जप माला)। आचार्य पं. दीपक शर्मा जी से वैदिक पूजन व प्राण-प्रतिष्ठा युक्त रुद्राक्ष परामर्श प्राप्त करें।",
  keywords: [
    "Original Rudraksha",
    "असली रुद्राक्ष",
    "Nepali Rudraksha Nalkheda",
    "1 Mukhi Rudraksha",
    "5 Mukhi Rudraksha",
    "Gauri Shankar Rudraksha",
    "Siddha Rudraksha Mala",
    "Lab Certified Rudraksha",
    "Pandit Deepak Sharma Nalkheda",
    "Baglamukhi Mandir Rudraksha",
    "7223083313",
  ],
  alternates: {
    canonical: "https://baglamukhi-temple-hazel.vercel.app/rudraksha",
  },
  openGraph: {
    title: "Original Rudraksha | 100% Lab Certified & Energized — Maa Baglamukhi Dham",
    description:
      "माँ बगलामुखी सिद्धपीठ नलखेड़ा से प्रमाणित नेपाली रुद्राक्ष संग्रह। वैदिक मंत्रोच्चार व प्राण-प्रतिष्ठा युक्त रुद्राक्ष प्राप्त करें।",
    url: "https://baglamukhi-temple-hazel.vercel.app/rudraksha",
    siteName: "Shri Maa Baglamukhi Dham Nalkheda",
    type: "website",
    locale: "hi_IN",
    images: [
      {
        url: "/images/rudraksha-hero.jpg",
        width: 1200,
        height: 900,
        alt: "Original Rudraksha Mala - माँ बगलामुखी धाम नलखेड़ा",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Original Rudraksha | Certified Nepal Rudraksha — Pt. Deepak Sharma",
    description:
      "माँ बगलामुखी सिद्धपीठ नलखेड़ा से 100% असली, वैदिक प्राण-प्रतिष्ठित नेपाली रुद्राक्ष संग्रह।",
    images: ["/images/rudraksha-hero.jpg"],
  },
};

export default function RudrakshaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://baglamukhi-temple-hazel.vercel.app/rudraksha#webpage",
        name: "Original Rudraksha Collection - माँ बगलामुखी धाम",
        description:
          "100% Lab Certified and spiritually energized natural Nepal Rudraksha beads and malas by Pt. Deepak Sharma, Nalkheda.",
        url: "https://baglamukhi-temple-hazel.vercel.app/rudraksha",
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
        {/* 1. Hero Section matching the user's UI/UX screenshot */}
        <RudrakshaHero />

        {/* 2. Overview & Benefits Section matching the user's second UI/UX screenshot */}
        <RudrakshaOverviewBenefits />

        {/* 3. Product Catalog Grid with Pagination (8 at a time, 4 columns) */}
        <RudrakshaCatalogGridLeaf />

        {/* 4. Rudraksha Mala Showcase & Sacred Quote Section */}
        <RudrakshaMalaShowcase />
      </main>
    </>
  );
}
