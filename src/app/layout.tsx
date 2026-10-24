import type { Metadata } from "next";
import { Geist, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import BottomNav from "@/components/navbar/BottomNav";
import Footer from "@/components/footer/Footer";
import FloatingQuickContact from "@/components/common/FloatingQuickContact";
import SmoothScroll from "@/components/common/SmoothScroll";
import SitePreloader from "@/components/common/SitePreloader";
import { LanguageProvider } from "@/context/LanguageContext";
import { PujaBookingProvider } from "@/context/PujaBookingContext";
import QuickPujaBookingModal from "@/components/booking/QuickPujaBookingModal";
import PanditWelcomeDialog from "@/components/home/PanditWelcomeDialog";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteUrl = (() => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) {
    try {
      return new URL(envUrl);
    } catch {
      // Fallback if envUrl is invalid
    }
  }
  return new URL("https://www.baglamukhipujanalkheda.com");
})();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Best Hawan Puja Pandit in Nalkheda | Maa Baglamukhi Temple Puja Booking",
    template: "%s | Maa Baglamukhi Puja Hawan Nalkheda",
  },
  description:
    "नलखेड़ा सिद्धपीठ में माँ बगलामुखी पूजा और महाहवन ऑनलाइन बुकिंग। शत्रु बाधा निवारण, कोर्ट केस विजय, तंत्र दोष शांति व ग्रह शांति। पं. दीपक शर्मा (+91 72240 83313)।",
  keywords: [
    "Best Hawan Puja Pandit in Nalkheda",
    "Best website for puja hawan",
    "Nalkheda Mata Baglamukhi puja hawan",
    "Best pandit for hawan in Nalkheda",
    "Maa Baglamukhi Havan Booking in Nalkheda",
    "Maa Baglamukhi Temple Nalkheda",
    "Baglamukhi Mandir Nalkheda Puja Booking",
    "Pandit in Agar Malwa",
    "Hawan puja pandit in Ujjain Indore Madhya Pradesh India",
    "Pt Deepak Sharma Nalkheda",
    "Shatru Badha Nivaran Hawan",
    "Court Case Victory Baglamukhi Puja",
    "Ghar Shanti Puja Hawan",
    "Pitambara Devi Siddhapeeth Nalkheda",
    "Vedic Tantra Hawan Anushthan",
    "Online Puja Booking Nalkheda",
    "7224083313",
    "9575664204",
    "बगलामुखी मंदिर नलखेड़ा पूजा बुकिंग",
    "नलखेड़ा में सबसे अच्छे पंडित जी",
    "बगलामुखी हवन पूजा नलखेड़ा",
    "शत्रु बाधा निवारण हवन",
    "गृह शांति पूजा हवन",
  ],
  authors: [{ name: "Acharya Pt. Deepak Sharma - Chief Purohit Nalkheda" }],
  category: "Religion & Spirituality",
  classification: "Vedic Puja, Hawan & Hindu Temple Services",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.baglamukhipujanalkheda.com",
    languages: {
      "hi-IN": "https://www.baglamukhipujanalkheda.com",
      "en-US": "https://www.baglamukhipujanalkheda.com",
      "x-default": "https://www.baglamukhipujanalkheda.com",
    },
  },
  openGraph: {
    title: "Best Hawan Puja Pandit in Nalkheda | Maa Baglamukhi Temple Puja Booking",
    description:
      "माँ बगलामुखी पूजा और हवन की प्रामाणिक वैदिक बुकिंग। शत्रु बाधा निवारण, कोर्ट केस विजय, ग्रह शांति एवं तंत्र अनुष्ठान। पं. दीपक शर्मा (+91 72240 83313)।",
    url: "https://www.baglamukhipujanalkheda.com",
    siteName: "Shri Maa Baglamukhi Temple Nalkheda",
    images: [
      {
        url: "/images/baglamukhi-logo.webp",
        width: 1200,
        height: 1200,
        alt: "माँ बगलामुखी दिव्य स्वरूप नलखेड़ा",
      },
    ],
    locale: "hi_IN",
    alternateLocale: ["en_US", "en_IN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hawan Puja Pandit in Nalkheda | Maa Baglamukhi Temple Puja Booking",
    description:
      "माँ बगलामुखी पूजा और हवन की जानकारी एवं ऑनलाइन बुकिंग। आचार्य पं. दीपक शर्मा (+91 72240 83313)।",
    images: ["/images/baglamukhi-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Nalkheda, Agar Malwa",
    "geo.position": "23.8344;76.2239",
    "ICBM": "23.8344, 76.2239",
    "format-detection": "telephone=yes",
  },
};

const rootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.baglamukhipujanalkheda.com/#website",
      url: "https://www.baglamukhipujanalkheda.com",
      name: "Maa Baglamukhi Hawan & Puja Booking Nalkheda",
      alternateName: [
        "Best Website for Puja Hawan Nalkheda",
        "Maa Baglamukhi Mandir Nalkheda Online Puja",
      ],
      description:
        "Best Hawan Puja Pandit in Nalkheda | Official Vedic and Tantra Hawan Puja Booking with Pt. Deepak Sharma at Maa Baglamukhi Siddhapeeth.",
      inLanguage: ["hi-IN", "en-US"],
    },
    {
      "@type": "HinduTemple",
      "@id": "https://www.baglamukhipujanalkheda.com/#temple",
      name: "शासकीय माँ बगलामुखी सिद्धपीठ नलखेड़ा (Shri Maa Baglamukhi Temple)",
      alternateName: ["Maa Baglamukhi Mandir Nalkheda", "Pitambara Peeth Nalkheda"],
      description:
        "महाभारत कालीन स्वयंभू त्रिमुखी माँ बगलामुखी सिद्धपीठ नलखेड़ा। शत्रु बाधा निवारण, कोर्ट केस विजय, तंत्र दोष शांति एवं सवा लाख जप महाहवन का पावन तीर्थ।",
      url: "https://www.baglamukhipujanalkheda.com",
      telephone: "+91-7224083313",
      image: "https://www.baglamukhipujanalkheda.com/images/baglamukhi-mandir-real.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "शासकीय माँ बगलामुखी सिद्धपीठ, लखुंदर नदी तट",
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
      hasMap: "https://maps.google.com/?q=23.8344,76.2239",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.baglamukhipujanalkheda.com/#pandit-service",
      name: "Pt. Deepak Sharma - Best Hawan Puja Pandit in Nalkheda",
      alternateName: "आचार्य पं. दीपक शर्मा - मुख्य पुरोहित नलखेड़ा",
      description:
        "Top Hawan Puja Pandit in Nalkheda, Agar Malwa, Ujjain, India. Expert in Maa Baglamukhi Maha Hawan, Shatru Badha Nivaran, Court Case Victory, Grah Shanti.",
      url: "https://www.baglamukhipujanalkheda.com/pandit-ji",
      telephone: "+91-7224083313",
      priceRange: "₹₹",
      image: "https://www.baglamukhipujanalkheda.com/images/pandit-deepak-sharma.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "माँ बगलामुखी मंदिर परिसर",
        addressLocality: "नलखेड़ा",
        addressRegion: "मध्य प्रदेश",
        postalCode: "465445",
        addressCountry: "IN",
      },
      areaServed: [
        "Nalkheda",
        "Agar Malwa",
        "Ujjain",
        "Indore",
        "Bhopal",
        "Madhya Pradesh",
        "Delhi",
        "Mumbai",
        "India",
        "Worldwide",
      ],
      sameAs: [
        "https://www.instagram.com/maa_baglamukhi_mandir_nalkheda",
        "https://www.youtube.com/@PanditDeepakSharmaNalkheda",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${geistSans.variable} ${cinzel.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rootJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-screen max-w-full overflow-x-clip bg-[#FFF8E7] text-[#3D1B10] antialiased flex flex-col selection:bg-[#D89B18]/30 selection:text-[#8B0000]">
        <LanguageProvider>
          <PujaBookingProvider>
            <SitePreloader />
            <SmoothScroll />
            <Navbar />
            <div className="flex-1 flex flex-col pb-20 lg:pb-0 max-w-full overflow-x-clip">
              {children}
              <Footer />
            </div>
            <BottomNav />
            <FloatingQuickContact />
            <QuickPujaBookingModal />
            <PanditWelcomeDialog />
          </PujaBookingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
