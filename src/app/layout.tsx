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
  return new URL("https://baglamukhi-temple-hazel.vercel.app");
})();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Maa Baglamukhi Havan Booking in Nalkheda | Pt. Deepak Sharma",
    template: "%s | Maa Baglamukhi Mandir Nalkheda",
  },
  description:
    "माँ बगलामुखी पूजा और हवन की जानकारी, उपलब्ध सेवाएँ और ऑनलाइन बुकिंग संबंधी सहायता प्राप्त करें। तारीख, प्रक्रिया और शुभ मुहूर्त की पुष्टि के लिए संपर्क करें। पं. दीपक शर्मा (+91 72240 83313)।",
  keywords: [
    "Maa Baglamukhi Havan Booking in Nalkheda",
    "Maa Baglamukhi Temple Nalkheda",
    "बगलामुखी मंदिर नलखेड़ा",
    "Pitambara Devi Siddhapeeth",
    "Baglamukhi Puja Booking",
    "Pt Deepak Sharma Nalkheda",
    "Tantra Puja Nalkheda",
    "Shatru Badha Nivaran",
    "7224083313",
    "9575664204",
  ],
  authors: [{ name: "Acharya Pt. Deepak Sharma - Chief Purohit Nalkheda" }],
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
    canonical: "https://baglamukhi-temple-hazel.vercel.app",
  },
  openGraph: {
    title: "Maa Baglamukhi Havan Booking in Nalkheda | Pt. Deepak Sharma",
    description:
      "माँ बगलामुखी पूजा और हवन की जानकारी, उपलब्ध सेवाएँ और ऑनलाइन बुकिंग संबंधी सहायता प्राप्त करें। तारीख, प्रक्रिया और शुभ मुहूर्त की पुष्टि के लिए संपर्क करें।",
    url: "https://baglamukhi-temple-hazel.vercel.app",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Baglamukhi Havan Booking in Nalkheda | Pt. Deepak Sharma",
    description:
      "माँ बगलामुखी पूजा और हवन की जानकारी, उपलब्ध सेवाएँ और ऑनलाइन बुकिंग संबंधी सहायता प्राप्त करें।",
    images: ["/images/baglamukhi-logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${geistSans.variable} ${cinzel.variable}`}>
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
