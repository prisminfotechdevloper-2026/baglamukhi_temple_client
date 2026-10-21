import Image from "next/image";
import Link from "next/link";
import { MapPin, PhoneCall, Navigation } from "lucide-react";

interface MandirHeroProps {
  title: string;
  standfirst: string;
  dateline: string;
  imageSrc: string;
  mapsUrl: string;
}

export default function MandirHero({
  title,
  standfirst,
  dateline,
  imageSrc,
  mapsUrl,
}: MandirHeroProps) {
  return (
    <section className="relative w-full h-[54vh] min-h-[440px] sm:min-h-[480px] max-h-[580px] pb-6 sm:pb-8 flex items-center overflow-hidden bg-stone-900">
      {/* Background Temple Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft Multi-stop Dark Gradient Overlay for Maximum Legibility */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0502]/90 via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-left flex flex-col items-start justify-center">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-200 mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
        >
          <Link href="/" className="hover:text-white transition-colors">
            होम
          </Link>
          <span className="text-amber-400 font-bold">/</span>
          <span className="text-white font-bold">माँ बगलामुखी मंदिर परिचय</span>
        </nav>

        {/* Sacred Temple Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-amber-400/80 text-amber-300 text-xs sm:text-sm font-semibold mb-3.5 backdrop-blur-md shadow-md">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span>श्री माँ बगलामुखी सिद्धपीठ • नलखेड़ा धाम</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] max-w-4xl">
          {title}
        </h1>

        {/* Standfirst / Summary Paragraph */}
        <p className="mt-3 text-xs sm:text-sm md:text-base text-stone-100 font-medium max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          {standfirst}
        </p>

        {/* Dateline & Location Tag */}
        <div className="mt-3.5 inline-flex items-center gap-2 text-xs sm:text-sm text-amber-200 font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
          <span>{dateline}</span>
        </div>

        {/* Quick Action CTAs */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
          <a
            href="tel:+917726815642"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-xs sm:text-sm font-bold shadow-2xl border border-amber-400/70 hover:border-amber-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <PhoneCall className="h-4 w-4 text-amber-300" />
            <span>दर्शन व पूजा मार्गदर्शन (+91 7726815642)</span>
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/45 hover:bg-black/65 text-white hover:text-amber-200 text-xs sm:text-sm font-bold border-2 border-amber-400 backdrop-blur-md shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Navigation className="h-4 w-4 text-amber-300" />
            <span>गूगल मैप्स पर मार्ग देखें</span>
          </a>
        </div>
      </div>
    </section>
  );
}
