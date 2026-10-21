import type { Metadata } from "next";
import PujaHero from "@/components/pujas/PujaHero";
import PujaTrustRibbon from "@/components/pujas/PujaTrustRibbon";
import PujaHowItWorks from "@/components/pujas/PujaHowItWorks";
import PujaCatalogInteractive from "@/components/pujas/PujaCatalogInteractive";
import PujaDirectHelpline from "@/components/pujas/PujaDirectHelpline";
import PujaFAQ from "@/components/pujas/PujaFAQ";

export const metadata: Metadata = {
  title:
    "पूजा एवं महाहवन बुकिंग | श्री माँ बगलामुखी मंदिर नलखेड़ा - 16+ तांत्रिक-वैदिक अनुष्ठान",
  description:
    "विश्वविख्यात माँ बगलामुखी सिद्धपीठ नलखेड़ा में शत्रु बाधा निवारण, कोर्ट केस विजय, सवा लाख अखंड जाप, व्यापार वृद्धि एवं कालसर्प दोष शांति हेतु अधिकृत पूजा बुकिंग। पं. दीपक शर्मा (+91 82392 39249)।",
  keywords: [
    "बगलामुखी पूजा बुकिंग",
    "बगलामुखी महाहवन नलखेड़ा",
    "शत्रु बाधा निवारण हवन",
    "कोर्ट केस विजय बगलामुखी पूजा",
    "सवा लाख बगलामुखी महामंत्र जाप",
    "कालसर्प दोष शांति नलखेड़ा",
    "बगलामुखी ऑनलाइन ई-संकल्प",
    "पंडित दीपक शर्मा पूजा बुकिंग",
    "माँ बगलामुखी मंदिर हवन",
    "8239239249",
  ],
  openGraph: {
    title:
      "पूजा एवं महाहवन बुकिंग | श्री माँ बगलामुखी मंदिर नलखेड़ा - 16+ शास्त्रोक्त अनुष्ठान",
    description:
      "माँ बगलामुखी सिद्धपीठ नलखेड़ा में 16+ विशिष्ट तांत्रिक-वैदिक महाहवन, सवा लाख अखंड जाप एवं दोष निवारण अनुष्ठान। व्यक्तिगत व लाइव वीडियो संकल्प।",
    url: "https://www.baglamukhimandir.in/pujas",
    type: "website",
    locale: "hi_IN",
    images: [
      {
        url: "/images/baglamukhi-mandir-real.png",
        width: 1200,
        height: 630,
        alt: "माँ बगलामुखी मंदिर नलखेड़ा - पावन महाहवन",
      },
    ],
  },
};

export default function PujasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlaceOfWorship",
    name: "श्री माँ बगलामुखी मंदिर सिद्धपीठ नलखेड़ा (Shri Maa Baglamukhi Mandir Nalkheda)",
    description:
      "विश्वविख्यात स्वयंभू त्रिमुखी माँ बगलामुखी सिद्धपीठ जहाँ 16+ शास्त्रोक्त तांत्रिक-वैदिक महाहवन, सवा लाख जप एवं शत्रु बाधा निवारण अनुष्ठान संपन्न होते हैं।",
    address: {
      "@type": "PostalAddress",
      streetAddress: "लखुंदर नदी तट, माँ बगलामुखी मंदिर मार्ग",
      addressLocality: "नलखेड़ा",
      addressRegion: "मध्य प्रदेश",
      postalCode: "465445",
      addressCountry: "IN",
    },
    telephone: "+91-8239239249",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "माँ बगलामुखी मंदिर अधिकृत अनुष्ठान एवं महाहवन सूची",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "माँ बगलामुखी शत्रु बाधा एवं तंत्र दोष निवारण महाहवन",
            description: "अकारण शत्रुता, गुप्त षड्यंत्र एवं तांत्रिक बाधा से स्थायी सुरक्षा।",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "कोर्ट-कचहरी, मुकदमा एवं विवाद विजय अनुष्ठान",
            description: "झूठे मुकदमों, कानूनी विवादों एवं भूमि विवाद में सत्य व न्याय की विजय।",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "माँ बगलामुखी सवा लाख (1,25,000) महामंत्र अखंड जाप",
            description: "सर्वोच्च तांत्रिक महासाधना एवं 12,500 मंत्रों का दशांश महाहवन।",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "व्यापार वृद्धि, धनलक्ष्मी एवं कनकधारा महाहवन",
            description: "व्यापार में निरंतर घाटा, दुकान में मंदी एवं कर्ज मुक्ति हेतु।",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "महामृत्युंजय महाजाप एवं अकाल मृत्यु निवारण अनुष्ठान",
            description: "असाध्य रोग, अकाल मृत्यु भय एवं आरोग्य लाभ हेतु।",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "कालसर्प दोष शांति महायज्ञ (लखुंदर नदी तट)",
            description: "लखुंदर नदी तट पर 12 प्रकार के कालसर्प दोषों का स्थायी निवारण।",
          },
        },
      ],
    },
  };

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Search Engine Rich Snippet Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section with Devotional Temple Image, Badges & Fast CTAs */}
      <PujaHero />

      {/* 2. Four Sacred Trust Pillars Ribbon */}
      <PujaTrustRibbon />

      {/* 3. Simple 4-Step Booking Workflow */}
      <PujaHowItWorks />

      {/* 4. Interactive 16-Puja Catalog with Category Tabs, Search & Detail Modal */}
      <PujaCatalogInteractive />

      {/* 5. Pandit Deepak Sharma Direct Consultation & Muhurta Helpline */}
      <PujaDirectHelpline />

      {/* 6. Frequently Asked Questions with Smooth Accordion */}
      <PujaFAQ />
    </main>
  );
}
