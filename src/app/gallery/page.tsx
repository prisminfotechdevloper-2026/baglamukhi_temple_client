import type { Metadata } from "next";
import GalleryHeader from "@/components/gallery/GalleryHeader";
import GalleryInteractive from "@/components/gallery/GalleryInteractive";
import DarshanVideoSection from "@/components/home/DarshanVideoSection";

export const metadata: Metadata = {
  title:
    "फोटो एवं वीडियो दीर्घा (Gallery) | श्री माँ बगलामुखी मंदिर नलखेड़ा - दर्शन, हवन व आरती",
  description:
    "विश्वविख्यात माँ बगलामुखी सिद्धपीठ नलखेड़ा के पावन दर्शन, मंदिर, महाहवन यज्ञ, आरती एवं पंडित दीपक शर्मा जी की वास्तविक फोटो व वीडियो दीर्घा।",
  keywords: [
    "माँ बगलामुखी मंदिर फोटो",
    "बगलामुखी नलखेड़ा गैलरी",
    "Baglamukhi Mandir Photos",
    "बगलामुखी महाहवन फोटो",
    "पंडित दीपक शर्मा फोटो",
    "नलखेड़ा मंदिर दर्शन",
    "पीताम्बरा देवी विग्रह फोटो",
  ],
  openGraph: {
    title:
      "फोटो दीर्घा | श्री माँ बगलामुखी मंदिर नलखेड़ा - मंदिर, महाहवन एवं पंडित जी",
    description:
      "नलखेड़ा सिद्धपीठ, पावन लखुन्दर नदी, दिव्य महाहवन एवं मुख्य यज्ञाचार्य पंडित दीपक शर्मा जी की वास्तविक पावन फोटो दीर्घा।",
    url: "https://baglamukhi-temple-hazel.vercel.app/gallery",
    type: "website",
    locale: "hi_IN",
    images: [
      {
        url: "/images/baglamukhi-mandir-real.png",
        width: 1200,
        height: 675,
        alt: "माँ बगलामुखी मंदिर नलखेड़ा फोटो गैलरी",
      },
    ],
  },
  alternates: {
    canonical: "https://baglamukhi-temple-hazel.vercel.app/gallery",
  },
};

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "श्री माँ बगलामुखी मंदिर नलखेड़ा फोटो दीर्घा",
    description:
      "माँ बगलामुखी सिद्धपीठ नलखेड़ा के पावन मंदिर दर्शन, तांत्रिक महाहवन एवं पंडित दीपक शर्मा जी की प्रामाणिक फोटो गैलरी।",
    url: "https://baglamukhi-temple-hazel.vercel.app/gallery",
    publisher: {
      "@type": "PlaceOfWorship",
      name: "श्री माँ बगलामुखी मंदिर सिद्धपीठ नलखेड़ा",
      address: {
        "@type": "PostalAddress",
        streetAddress: "शासकीय माँ बगलामुखी सिद्धपीठ, नलखेड़ा, जिला - आगर मालवा",
        addressLocality: "नलखेड़ा",
        addressRegion: "मध्य प्रदेश",
        postalCode: "465445",
        addressCountry: "IN",
      },
    },
  };

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5]">
      {/* Search Engine Rich Snippet JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. Header with Breadcrumb and Title */}
      <GalleryHeader />

      {/* 2. Interactive Category Tabs, Grid with Bottom-Left Hover Title, and Lightbox */}
      <GalleryInteractive />

      {/* 3. Sacred Darshan & Mahahawan Video Player Section */}
      <DarshanVideoSection />
    </main>
  );
}
