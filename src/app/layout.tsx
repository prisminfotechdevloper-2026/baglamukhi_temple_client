import type { Metadata } from "next";
import { Geist, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import BottomNav from "@/components/navbar/BottomNav";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baglamukhitemple.org"),
  title: "श्री माँ बगलामुखी मंदिर | Shri Maa Baglamukhi Temple",
  description:
    "श्री माँ बगलामुखी जी का पावन दिव्य धाम। दर्शन, पूजा-अर्चना, अनुष्ठान, एवं आध्यात्मिक शांति का पावन केंद्र।",
  keywords: [
    "Baglamukhi Temple",
    "Maa Baglamukhi",
    "बगलामुखी मंदिर",
    "Pitambara Devi",
    "Tantra Puja",
    "Temple Darshan",
    "Baglamukhi Havan",
  ],
  authors: [{ name: "Shri Maa Baglamukhi Temple Trust" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "श्री माँ बगलामुखी मंदिर | Shri Maa Baglamukhi Temple",
    description:
      "श्री माँ बगlaमुखी जी का पावन दिव्य धाम। दर्शन, पूजा-अर्चना, अनुष्ठान, एवं आध्यात्मिक शांति का पावन केंद्र।",
    url: "https://baglamukhitemple.org",
    siteName: "Shri Maa Baglamukhi Temple",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 1060,
        alt: "माँ बगलामुखी दिव्य स्वरूप",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "श्री माँ बगलामुखी मंदिर",
    description: "श्री माँ बगलामुखी जी का पावन दिव्य धाम",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${geistSans.variable} ${cinzel.variable}`}>
      <body className="min-h-screen bg-white text-[#221510] antialiased flex flex-col selection:bg-[#FDB514]/30 selection:text-[#AF0807]">
        <Navbar />
        <div className="flex-1 flex flex-col pb-20 lg:pb-0">
          {children}
          <Footer />
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
