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
  title: "Best Hawan Puja Pandit in Nalkheda | Maa Baglamukhi Hawan Booking Online",
  description:
    "नलखेड़ा सिद्धपीठ में माँ बगलामुखी पूजा और हवन की ऑनलाइन बुकिंग। शत्रु बाधा निवारण, कोर्ट केस विजय, तंत्र दोष शांति व ग्रह शांति। आचार्य पं. दीपक शर्मा (+91 72240 83313)।",
  keywords: [
    "Best Hawan Puja Pandit in Nalkheda",
    "Best website for puja hawan",
    "Nalkheda Mata Baglamukhi puja hawan",
    "Best pandit for hawan in Nalkheda",
    "Maa Baglamukhi Havan Booking in Nalkheda",
    "Baglamukhi Puja Nalkheda",
    "बगलामुखी हवन बुकिंग नलखेड़ा",
    "Pandit Deepak Sharma Nalkheda",
    "Shatru Badha Nivaran Hawan",
    "Court Case Victory Baglamukhi Puja",
    "Ghar Shanti Puja Hawan",
    "Nalkheda Mandir Havan",
    "Tantra Puja Nalkheda",
    "Pandit in Agar Malwa",
    "Best Hawan Pandit Ujjain Indore MP India",
    "7224083313",
    "9575664204",
  ],
  alternates: {
    canonical: "https://www.baglamukhipujanalkheda.com",
    languages: {
      "hi-IN": "https://www.baglamukhipujanalkheda.com",
      "en-US": "https://www.baglamukhipujanalkheda.com",
      "x-default": "https://www.baglamukhipujanalkheda.com",
    },
  },
  openGraph: {
    title: "Best Hawan Puja Pandit in Nalkheda | Maa Baglamukhi Hawan Booking Online",
    description:
      "माँ बगलामुखी पूजा और हवन की जानकारी, उपलब्ध सेवाएँ और ऑनलाइन बुकिंग सहायता प्राप्त करें। पं. दीपक शर्मा (+91 72240 83313)।",
    url: "https://www.baglamukhipujanalkheda.com",
    siteName: "Shri Maa Baglamukhi Dham Nalkheda",
    type: "website",
    locale: "hi_IN",
    alternateLocale: ["en_US", "en_IN"],
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
    title: "Best Hawan Puja Pandit in Nalkheda | Maa Baglamukhi Hawan Booking Online",
    description:
      "माँ बगलामुखी पूजा और हवन की जानकारी, उपलब्ध सेवाएँ और ऑनलाइन बुकिंग सहायता प्राप्त करें। पं. दीपक शर्मा (+91 72240 83313)।",
    images: ["/images/baglamukhi-logo.webp"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PlaceOfWorship",
        "@id": "https://www.baglamukhipujanalkheda.com/#temple",
        name: "श्री माँ बगलामुखी मंदिर सिद्धपीठ नलखेड़ा (Shri Maa Baglamukhi Temple)",
        alternateName: ["Maa Baglamukhi Mandir Nalkheda", "Pitambara Peeth Nalkheda"],
        description:
          "महाभारत कालीन स्वयंभू त्रिमुखी माँ बगलामुखी सिद्धपीठ नलखेड़ा। शत्रु बाधा निवारण, कोर्ट केस विजय, तंत्र दोष शांति एवं सवा लाख जप महाहवन का पावन तीर्थ।",
        url: "https://www.baglamukhipujanalkheda.com",
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
            opens: "05:00",
            closes: "23:00",
          },
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.baglamukhipujanalkheda.com/#priest",
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
        "@id": "https://www.baglamukhipujanalkheda.com/#gurudev",
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
            item: "https://www.baglamukhipujanalkheda.com",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "नलखेड़ा में माँ बगलामुखी पूजा और हवन कैसे बुक करें?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "माँ बगलामुखी मंदिर नलखेड़ा में हवन-पूजा कराने के लिए आप मुख्य पुरोहित आचार्य पं. दीपक शर्मा जी से सीधे +91 72240 83313 पर कॉल या व्हाट्सएप के माध्यम से संपर्क करके शुभ मुहूर्त और तिथि अनुसार बुकिंग करा सकते हैं।",
            },
          },
          {
            "@type": "Question",
            name: "Who is the best pandit for Hawan & Puja in Nalkheda?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Acharya Pt. Deepak Sharma (+91 72240 83313) is recognized among the most authentic and knowledgeable purohits for Maa Baglamukhi Tantra & Vedic Hawan in Nalkheda, trained at Mahamrityunjaya Ved Vidyalaya Ujjain.",
            },
          },
          {
            "@type": "Question",
            name: "माँ बगलामुखी हवन किस-किस कार्य के लिए कराया जाता है?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "माँ बगलामुखी महाहवन विशेष रूप से शत्रु बाधा निवारण, कोर्ट केस व मुकदमों में विजय, व्यापार वृद्धि, ग्रह दोष शांति, संतान गोपाल अनुष्ठान और असाध्य संकटों से रक्षा हेतु कराया जाता है।",
            },
          },
          {
            "@type": "Question",
            name: "क्या नलखेड़ा आए बिना ऑनलाइन संकल्प से हवन कराया जा सकता है?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "हाँ, यदि आप स्वयं नलखेड़ा नहीं आ सकते तो यजमान के नाम, गोत्र और फोटो के साथ पूर्ण विधि-विधान से ऑनलाइन संकल्प पूजा और हवन कराया जाता है, जिसका लाइव वीडियो दर्शन एवं प्रसाद प्रेषित किया जाता है।",
            },
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
