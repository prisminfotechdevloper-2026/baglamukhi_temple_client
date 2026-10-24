import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import VishalSharmaProfileSection from "@/components/home/VishalSharmaProfileSection";
import PawanSharmaProfileSection from "@/components/home/PawanSharmaProfileSection";
import PanditProfileSection from "@/components/home/PanditProfileSection";
import PanditHawanShowcase from "@/components/pandit/PanditHawanShowcase";
import PanditServicesSummary from "@/components/pandit/PanditServicesSummary";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PanditDirectBookingCard from "@/components/pandit/PanditDirectBookingCard";

export const metadata: Metadata = {
  title: "Best Hawan Puja Pandit in Nalkheda | Pt. Deepak Sharma - Chief Purohit",
  description:
    "माँ बगलामुखी सिद्धपीठ नलखेड़ा में Best Hawan Puja Pandit - आचार्य पं. दीपक शर्मा (+91 72240 83313), पूज्य आचार्य वशिष्ठ विशाल शर्मा एवं पं. पवन शर्मा। उज्जैन वेद विद्यालय कर्मकाण्ड दीक्षा एवं 10+ वर्ष साधना अनुभव।",
  keywords: [
    "Best Hawan Puja Pandit in Nalkheda",
    "Best pandit in Nalkheda",
    "Pandit in Agar Malwa",
    "Best hawan puja pandit in India",
    "Pandit for Baglamukhi puja",
    "Pt Deepak Sharma Nalkheda",
    "Pandit Deepak Sharma contact number",
    "Best Vedic purohit in Nalkheda",
    "Top pandit for Shatru Badha Nivaran hawan",
    "नलखेड़ा में सबसे अच्छे पंडित जी",
    "माँ बगलामुखी पंडित जी",
    "आचार्य वशिष्ठ विशाल शर्मा",
    "पंडित पवन शर्मा नलखेड़ा",
    "पंडित दीपक शर्मा नलखेड़ा",
    "बगलामुखी महाहवन नलखेड़ा",
    "उज्जैन वेद विद्यालय कर्मकाण्ड",
    "7224083313",
    "9575664204",
  ],
  alternates: {
    canonical: "https://www.baglamukhipujanalkheda.com/pandit-ji",
    languages: {
      "hi-IN": "https://www.baglamukhipujanalkheda.com/pandit-ji",
      "en-US": "https://www.baglamukhipujanalkheda.com/pandit-ji",
      "x-default": "https://www.baglamukhipujanalkheda.com/pandit-ji",
    },
  },
  openGraph: {
    title: "Best Hawan Puja Pandit in Nalkheda | Pt. Deepak Sharma - Chief Purohit",
    description:
      "विश्वविख्यात माँ बगलामुखी सिद्धपीठ नलखेड़ा में शास्त्रोक्त तांत्रिक-वैदिक अनुष्ठान, महाहवन, सवा लाख अखंड जाप एवं सटीक जन्म कुंडली परामर्श। पूज्य आचार्य वशिष्ठ विशाल शर्मा, पं. पवन शर्मा एवं पं. दीपक शर्मा।",
    url: "https://www.baglamukhipujanalkheda.com/pandit-ji",
    type: "profile",
    images: [
      {
        url: "/images/pandit-deepak-sharma-new.webp",
        width: 800,
        height: 1000,
        alt: "Best Hawan Puja Pandit in Nalkheda - Pt. Deepak Sharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hawan Puja Pandit in Nalkheda | Pt. Deepak Sharma",
    description:
      "माँ बगलामुखी सिद्धपीठ नलखेड़ा में प्रामाणिक यज्ञाचार्य पं. दीपक शर्मा (+91 72240 83313)।",
    images: ["/images/pandit-deepak-sharma-new.webp"],
  },
};

export default function PanditJiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "माँ बगलामुखी सिद्धपीठ नलखेड़ा - अधिकृत वैदिक आचार्य एवं पुरोहित मंडल",
    itemListElement: [
      {
        "@type": "Person",
        position: 1,
        name: "आचार्य वशिष्ठ विशाल शर्मा (Acharya Vashishtha Vishal Sharma)",
        alternateName: "विश्वेश्वरप्रपन्न रामानुज दास",
        jobTitle: "संस्थापक एवं वरिष्ठ ज्योतिषाचार्य (संस्कृत साहित्य Ph.D. शोधार्थी)",
        telephone: "+91-9575664204",
        award: "अखिल भारतीय काशी विद्वत् परिषद् सम्मान",
        image: "/images/acharya-vashishtha-vishal-sharma.webp",
      },
      {
        "@type": "Person",
        position: 2,
        name: "पंडित पवन शर्मा (Pandit Pawan Sharma)",
        jobTitle: "यज्ञाचार्य एवं वैदिक पुरोहित",
        telephone: "+91-9575664204",
        alumniOf: "महामृत्युंजय वेद विद्यालय, उज्जैन",
        image: "/images/pandit-pawan-sharma.webp",
      },
      {
        "@type": "Person",
        position: 3,
        name: "पंडित दीपक शर्मा (Pandit Deepak Sharma)",
        jobTitle: "मुख्य यज्ञाचार्य एवं वैदिक पुरोहित",
        telephone: "+91-7224083313",
        alumniOf: "महामृत्युंजय वेद विद्यालय, उज्जैन",
        image: "/images/pandit-deepak-sharma-new.webp",
      },
    ],
  };

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Structured Data (JSON-LD) for Search Engine Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ================= 1. PAGE HEADER & BREADCRUMB ================= */}
      <section className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF8F5] pt-8 sm:pt-10 pb-8 sm:pb-10 border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-4 font-medium">
            <Link href="/" className="hover:text-[#AF0807] transition-colors">
              मुख्य पृष्ठ
            </Link>
            <span>/</span>
            <span className="text-[#AF0807] font-semibold">
              पूज्य आचार्य एवं पुरोहित परिचय
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFF2DB] border border-[#ECD19A] text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="h-4 w-4 text-[#D89B18]" />
            <span>माँ बगलामुखी सिद्धपीठ नलखेड़ा • अधिकृत वैदिक पुरोहित मंडल</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A0C16] leading-tight">
            पूज्य आचार्य एवं वैदिक पुरोहित परिचय
          </h1>
          <p className="mt-2 text-stone-700 text-sm sm:text-base max-w-3xl leading-relaxed font-normal">
            विश्व प्रसिद्ध माँ बगलामुखी सिद्धपीठ (नलखेड़ा) में वैदिक मर्यादा एवं शास्त्रोक्त तांत्रिक पद्धति से अनुष्ठान, महाहवन, सवा लाख जाप एवं जन्म कुंडली विश्लेषण संपन्न कराने वाले पूज्य आचार्यों एवं पुरोहितों का प्रामाणिक परिचय।
          </p>
        </div>
      </section>

      {/* ================= 2. COLUMN-WISE PROFILES ORDER ================= */}
      {/* Order 1: Acharya Vashishtha Vishal Sharma */}
      <VishalSharmaProfileSection />

      {/* Order 2: Acharya Pt. Pawan Sharma */}
      <PawanSharmaProfileSection />

      {/* Order 3: Chief Priest Pt. Deepak Sharma */}
      <PanditProfileSection />

      {/* ================= 3. HAWAN SHOWCASE ================= */}
      <PanditHawanShowcase />

      {/* ================= 4. CORE SERVICES SUMMARY ================= */}
      <PanditServicesSummary />

      {/* ================= 5. TESTIMONIALS SLIDER ================= */}
      <TestimonialsSection />

      {/* ================= 6. DIRECT CONTACT CARD ================= */}
      <PanditDirectBookingCard />
    </main>
  );
}
