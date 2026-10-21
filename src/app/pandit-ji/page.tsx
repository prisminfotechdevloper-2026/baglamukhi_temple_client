import type { Metadata } from "next";
import PanditHero from "@/components/pandit/PanditHero";
import PanditHawanShowcase from "@/components/pandit/PanditHawanShowcase";
import PanditCredentialsGrid from "@/components/pandit/PanditCredentialsGrid";
import PanditServicesSummary from "@/components/pandit/PanditServicesSummary";
import PanditDirectBookingCard from "@/components/pandit/PanditDirectBookingCard";

export const metadata: Metadata = {
  title:
    "हमारे बारे में (About Pandit Deepak Sharma) | माँ बगलामुखी मंदिर नलखेड़ा - यज्ञाचार्य परिचय",
  description:
    "माँ बगलामुखी सिद्धपीठ नलखेड़ा में मुख्य यज्ञाचार्य पंडित दीपक शर्मा जी का परिचय, उज्जैन वेद विद्यालय दीक्षा, 5+ वर्ष सिद्धपीठ साधना एवं संपन्न महाहवन। फोन: +91 82392 39249।",
  keywords: [
    "पंडित दीपक शर्मा नलखेड़ा",
    "माँ बगलामुखी पंडित जी",
    "बगलामुखी महाहवन नलखेड़ा",
    "बगलामुखी सवा लाख जाप",
    "शत्रु बाधा निवारण हवन",
    "कोर्ट कचहरी मुकदमा विजय अनुष्ठान",
    "बगलामुखी ऑनलाइन पूजा ई-संकल्प",
    "पंडित दीपक शर्मा फोन नंबर 8239239249",
    "उज्जैन वेद विद्यालय कर्मकाण्ड",
    "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र",
  ],
  openGraph: {
    title:
      "पंडित दीपक शर्मा परिचय | माँ बगलामुखी सिद्धपीठ नलखेड़ा - यज्ञाचार्य एवं वैदिक पुरोहित",
    description:
      "विश्वविख्यात माँ बगलामुखी सिद्धपीठ नलखेड़ा में शास्त्रोक्त तांत्रिक-वैदिक अनुष्ठान, महाहवन, सवा लाख अखंड जाप एवं सटीक कुंडली परामर्श। पंडित दीपक शर्मा (+91 82392 39249)।",
    url: "https://baglamukhi-temple-hazel.vercel.app/pandit-ji",
    type: "profile",
    images: [
      {
        url: "/images/pandit-deepak-sharma.jpg",
        width: 800,
        height: 1000,
        alt: "पंडित दीपक शर्मा - माँ बगलामुखी सिद्धपीठ नलखेड़ा",
      },
    ],
  },
  alternates: {
    canonical: "/pandit-ji",
  },
};

export default function PanditJiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "पंडित दीपक शर्मा (Pandit Deepak Sharma)",
    jobTitle: "मुख्य यज्ञाचार्य एवं वैदिक पुरोहित",
    worksFor: {
      "@type": "PlaceOfWorship",
      name: "श्री माँ बगलामुखी मंदिर सिद्धपीठ नलखेड़ा",
      address: {
        "@type": "PostalAddress",
        streetAddress: "लखुंदर नदी तट, माँ बगलामुखी मंदिर मार्ग",
        addressLocality: "नलखेड़ा",
        addressRegion: "मध्य प्रदेश",
        postalCode: "465445",
        addressCountry: "IN",
      },
    },
    alumniOf: "महामृत्युंजय वेद विद्यालय, उज्जैन",
    memberOf: "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र",
    telephone: "+91-8239239249",
    image: "/images/pandit-deepak-sharma.jpg",
    description:
      "माँ बगलामुखी अनन्य साधक, 5+ वर्षों से नलखेड़ा सिद्धपीठ में तांत्रिक-वैदिक महाहवन, सवा लाख अखंड जप, शत्रु बाधा निवारण एवं जन्म कुंडली दोष शांति के विशेषज्ञ।",
    knowsAbout: [
      "माँ बगलामुखी महाहवन",
      "शत्रु बाधा एवं तंत्र निवारण",
      "सवा लाख पीताम्बरा महामंत्र जाप",
      "कोर्ट केस एवं मुकदमा विजय अनुष्ठान",
      "जन्म कुंडली एवं ग्रह शांति",
      "कालसर्प एवं पितृ दोष निवारण",
      "ई-संकल्प एवं लाइव वीडियो पूजा",
    ],
  };

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Structured Data (JSON-LD) for Search Engine Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Dignified Profile Hero: Pandit Deepak Sharma Bio, Lineage, Credentials & Trust Metrics */}
      <PanditHero />

      {/* 2. Authentic Hawan & Yagya Darshan Showcase (The 2 Real Hawan Photos) */}
      <PanditHawanShowcase />

      {/* 3. Four Core Credentials Pillars (Ujjain Ved Vidyalaya, Vashishtha Sansthan, Siddhapeeth, E-Sankalp) */}
      <PanditCredentialsGrid />

      {/* 4. Core Services Summary with Link to /pujas for complete 16+ catalog */}
      <PanditServicesSummary />

      {/* 5. Direct Contact, Address & Confidential Consultation Card */}
      <PanditDirectBookingCard />
    </main>
  );
}
