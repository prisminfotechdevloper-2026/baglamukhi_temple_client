import Link from "next/link";
import { Camera } from "lucide-react";

export default function GalleryHeader() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF8F5] pt-8 sm:pt-12 pb-6 sm:pb-8 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-stone-500 mb-4 font-medium"
        >
          <Link href="/" className="hover:text-[#AF0807] transition-colors">
            मुख्य पृष्ठ (Home)
          </Link>
          <span>/</span>
          <span className="text-[#AF0807] font-semibold">
            फोटो एवं वीडियो दीर्घा (Gallery)
          </span>
        </nav>

        {/* Section Title & Subtitle */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
              पावन दर्शन, अनुष्ठान एवं वीडियो दीर्घा
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#3E0B02] tracking-tight leading-snug pt-1">
            श्री माँ बगलामुखी मंदिर एवं महाहवन गैलरी
          </h1>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed">
            नलखेड़ा सिद्धपीठ, पावन लखुन्दर नदी तट, माँ बगलामुखी के दिव्य स्वरूप, महाहवन यज्ञ एवं मुख्य यज्ञाचार्य पंडित दीपक शर्मा जी की वास्तविक पावन छवियां व दर्शन वीडियो।
          </p>
        </div>

      </div>
    </section>
  );
}
