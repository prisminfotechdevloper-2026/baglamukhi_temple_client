import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import GuruJiKundaliSection from "@/components/home/GuruJiKundaliSection";
import HawanPackagesSection from "@/components/home/HawanPackagesSection";
import VisheshAnushthanSection from "@/components/home/VisheshAnushthanSection";
import MahaAshtakSection from "@/components/home/MahaAshtakSection";
import HawanBenefitsSection from "@/components/home/HawanBenefitsSection";
import HowBookingWorksSection from "@/components/home/HowBookingWorksSection";
import PriestsProfileSection from "@/components/home/PriestsProfileSection";
import RudrakshaRatnaSection from "@/components/home/RudrakshaRatnaSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "Maa Baglamukhi Havan Booking in Nalkheda | Pt. Deepak Sharma",
  description:
    "माँ बगलामुखी पूजा और हवन की जानकारी, उपलब्ध सेवाएँ और ऑनलाइन बुकिंग संबंधी सहायता प्राप्त करें। तारीख, प्रक्रिया और शुभ मुहूर्त की पुष्टि के लिए संपर्क करें। पं. दीपक शर्मा (+91 72240 83313)।",
  keywords: [
    "Maa Baglamukhi Havan Booking in Nalkheda",
    "Baglamukhi Puja Nalkheda",
    "बगलामुखी हवन बुकिंग नलखेड़ा",
    "Pandit Deepak Sharma Nalkheda",
    "Shatru Badha Nivaran Hawan",
    "Court Case Victory Baglamukhi Puja",
    "Nalkheda Mandir Havan",
    "7224083313",
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
        url: "/images/baglamukhi-logo.webp",
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
    images: ["/images/baglamukhi-logo.webp"],
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
        telephone: "+91-7224083313",
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
        telephone: "+91-7224083313",
        description:
          "महामृत्युंजय वेद विद्यालय (उज्जैन) से कर्मकाण्ड प्रशिक्षित एवं श्री वशिष्ठ ज्योतिष संस्थान संबद्ध, 5+ वर्षों का साधना अनुभव।",
      },
      {
        "@type": "Person",
        "@id": "https://baglamukhi-temple-hazel.vercel.app/#gurudev",
        name: "आचार्य वशिष्ठ विशाल शर्मा (Acharya Vashishtha Vishal Sharma)",
        jobTitle: "श्रद्धेय गुरुदेव एवं वरिष्ठ ज्योतिषाचार्य (संस्कृत साहित्य Ph.D. शोधार्थी)",
        worksFor: {
          "@type": "Organization",
          name: "श्री वशिष्ठ ज्योतिष संस्थान",
        },
        telephone: "+91-9575664204",
        award: "अखिल भारतीय काशी विद्वत् परिषद् सम्मान",
        description:
          "संस्कृत साहित्य से M.A., B.Ed. एवं Ph.D. शोधार्थी। 10+ वर्षों का साधना अनुभव एवं अखिल भारतीय काशी विद्वत् परिषद् से सम्मानित।",
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
        {/* 1. Hero Section: Clean, focused, reduced height with primary booking action */}
        <HeroSection />

        {/* 2. Revered Gurudev Seva: Janam Kundali & Vedic Jyotish (Acharya Vashishtha Vishal Sharma) */}
        <GuruJiKundaliSection />

        {/* 3. Authentic Hawan Packages & Transparent Dakshina (hawan_anusthan.png) */}
        <HawanPackagesSection />

        {/* 3. Special Anushthan: 1.25 Lakh Akhand Jaap (vishesh_anusthan.png) */}
        <VisheshAnushthanSection />

        {/* 4. Maa Baglamukhi Ashtak Hawan & Divine Recitations (maha_ashtak.png) */}
        <MahaAshtakSection />

        {/* 5. 15 Sacred Benefits of Maa Baglamukhi Hawan */}
        <HawanBenefitsSection />

        {/* 6. 3 Simple Steps: How Booking Works */}
        <HowBookingWorksSection />

        {/* 7. Unified Revered Priests Profile Showcase (With Top Highlight Row: Vishal -> Pawan -> Deepak) */}
        <PriestsProfileSection />

        {/* 8. Original Rudraksha & Navgraha Ratna Highlight Showcase */}
        <RudrakshaRatnaSection />

        {/* 9. Authentic Devotee Testimonials & Experiences Slider (Positioned at bottom before Footer) */}
        <TestimonialsSection />
      </main>
    </>
  );
}
