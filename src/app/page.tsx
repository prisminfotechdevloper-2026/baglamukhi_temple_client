import Image from "next/image";
import Link from "next/link";
import { Sparkles, CalendarCheck, ShieldCheck, HeartHandshake } from "lucide-react";

export default function HomePage() {
  const colorSwatches = [
    { name: "Temple Gold", hex: "#E6840D", role: "Primary Gold" },
    { name: "Saffron Yellow", hex: "#FDB514", role: "Garments & Highlights" },
    { name: "Soft Gold", hex: "#F9D66F", role: "Jewellery & Borders" },
    { name: "Vermilion Red", hex: "#AF0807", role: "Sacred Accents" },
    { name: "Deep Maroon", hex: "#540902", role: "Contrast & Headings" },
    { name: "Crisp White", hex: "#FFFFFF", role: "Modern Background" },
  ];

  return (
    <main className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-4 py-16 bg-white relative overflow-hidden">
      {/* Subtle modern spiritual background gradient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-100/40 via-orange-50/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="w-full max-w-4xl rounded-3xl border border-stone-200/80 bg-white/95 p-8 sm:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl text-center relative">
        {/* Sacred Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/80 px-4 py-1.5 text-xs font-semibold text-[#AF0807] mb-6 shadow-2xs">
          <Sparkles className="h-3.5 w-3.5 text-amber-600" />
          <span>॥ ॐ ह्लीं बगलामुखिए नमः ॥</span>
        </div>

        {/* Sacred Deity Medallion */}
        <div className="mx-auto mb-6 relative h-44 w-44 sm:h-52 sm:w-52 drop-shadow-xl transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/logo.png"
            alt="माँ बगलामुखी दिव्य स्वरूप"
            fill
            priority
            sizes="(max-width: 640px) 176px, 208px"
            className="object-contain"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E0B02] font-serif tracking-tight">
          श्री माँ बगलामुखी मंदिर
        </h1>
        <p className="mt-2 text-sm sm:text-base font-medium text-amber-900/90">
          पं. दीपक शर्मा (मुख्य पुजारी) • विश्व प्रसिद्ध सिद्ध तंत्र पीठ
        </p>
        <p className="mt-4 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          दर्शन, विशेष शत्रु बाधा निवारण अनुष्ठान, कानूनी विजय हवन एवं वैदिक पूजा का प्रामाणिक केंद्र।
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/pujas"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#AF0807] to-[#730501] px-6 py-3 text-sm font-bold text-white shadow-md shadow-red-900/20 hover:shadow-lg hover:scale-105 transition-all"
          >
            <CalendarCheck className="h-4 w-4 text-amber-300" />
            <span>पूजा बुक करें (Book Puja)</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-stone-50 hover:bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-700 border border-stone-200 transition-colors"
          >
            <HeartHandshake className="h-4 w-4 text-amber-700" />
            <span>पंडित जी से संपर्क</span>
          </Link>
        </div>

        {/* Active Theme Color Palette Swatches */}
        <div className="mt-12 pt-8 border-t border-stone-100">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Modern White Background & Active Devotional Palette
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {colorSwatches.map((color) => (
              <div
                key={color.hex}
                className="flex flex-col items-center rounded-2xl p-2.5 bg-stone-50/70 border border-stone-200/60 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div
                  className="h-10 w-full rounded-xl mb-2 shadow-inner border border-black/10"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs font-semibold text-stone-800 leading-tight">
                  {color.name}
                </span>
                <span className="text-[11px] font-mono text-stone-400">
                  {color.hex}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
