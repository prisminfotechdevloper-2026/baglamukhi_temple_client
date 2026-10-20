import Image from "next/image";

export default function HomePage() {
  const colorSwatches = [
    { name: "Temple Gold", hex: "#E6840D", role: "Primary Gold & Outlines" },
    { name: "Saffron Yellow", hex: "#FDB514", role: "Garments & Highlights" },
    { name: "Soft Gold", hex: "#F9D66F", role: "Jewellery & Borders" },
    { name: "Vermilion Red", hex: "#AF0807", role: "Arch & Sacred Accents" },
    { name: "Deep Maroon", hex: "#540902", role: "Shadows, Text & Contrast" },
    { name: "Warm Ivory", hex: "#FEFBDB", role: "Background & Negative Space" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl rounded-3xl border-2 border-[#E6840D]/30 bg-white/70 p-8 shadow-xl backdrop-blur-sm md:p-12 text-center">
        {/* Sacred Logo */}
        <div className="mx-auto mb-6 relative h-48 w-48 drop-shadow-md sm:h-56 sm:w-56">
          <Image
            src="/images/logo.png"
            alt="माँ बगलामुखी दिव्य स्वरूप"
            fill
            priority
            sizes="(max-width: 640px) 192px, 224px"
            className="object-contain"
          />
        </div>

        {/* Sacred Temple Header */}
        <p className="text-sm font-semibold tracking-widest uppercase text-[#AF0807] mb-2">
          ॥ ॐ ह्लीं बगलामुखिए नमः ॥
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#540902] font-serif tracking-tight">
          श्री माँ बगलामुखी मंदिर
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#540902]/80 max-w-xl mx-auto">
          परियोजना का आधार सफलतापूर्वक तैयार हो चुका है। नीचे दिए गए रंग और लोगो सेट कर दिए गए हैं।
        </p>

        {/* Brand Palette Swatches */}
        <div className="mt-10 pt-8 border-t border-[#E6840D]/20">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#540902]/70 mb-4">
            कलर पैलेट (Active Theme Tokens)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {colorSwatches.map((color) => (
              <div
                key={color.hex}
                className="flex flex-col items-center rounded-xl p-2.5 bg-white border border-[#E6840D]/20 shadow-sm"
              >
                <div
                  className="h-10 w-full rounded-lg shadow-inner mb-2 border border-black/10"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs font-semibold text-[#540902] leading-tight">
                  {color.name}
                </span>
                <span className="text-[11px] font-mono text-[#540902]/70">
                  {color.hex}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Status notice */}
        <div className="mt-8 rounded-xl bg-[#FEFBDB] border border-[#E6840D]/40 p-4 text-sm text-[#540902]">
          ✨ <strong>Project Reset Complete</strong>: Aap agla component ya section batayein, hum use step-by-step implement karenge.
        </div>
      </div>
    </main>
  );
}
