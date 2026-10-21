"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  RotateCcw,
  Maximize2,
  ExternalLink,
  PhoneCall,
  CheckCircle2,
  Flame,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Tv,
} from "lucide-react";

export interface DarshanVideoItem {
  id: string;
  title: string;
  desc: string;
  category: string;
  tags: string[];
  duration: string;
  views: string;
}

export const DARSHAN_VIDEOS: DarshanVideoItem[] = [
  {
    id: "uq7Jn39CM5U",
    title: "हवन के लिए संपर्क करें 📞7223083313 Maa Baglamukhi Mandir Nalkheda",
    desc: "माँ बगलामुखी सिद्धपीठ नलखेड़ा में विधि-विधान से संपन्न शत्रु बाधा निवारण व कार्य सिद्धि महाहवन की दिव्य झलक।",
    category: "माँ बगलामुखी महाहवन",
    tags: ["शत्रु बाधा निवारण", "कोर्ट केस विजय", "नलखेड़ा धाम"],
    duration: "0:58",
    views: "12.4K",
  },
  {
    id: "qw0geTVehC0",
    title: "गुप्त नवरात्रि हवन के लिए संपर्क करें पंडित दीपक शर्मा 📞7223083313",
    desc: "गुप्त नवरात्रि के पावन पर्व पर माँ पीताम्बरा के सवा लाख जप अनुष्ठान एवं विशेष तांत्रिक आहुति दर्शन।",
    category: "गुप्त नवरात्रि विशेष",
    tags: ["गुप्त नवरात्रि", "पीताम्बरा हवन", "विशेष सिद्धि"],
    duration: "0:54",
    views: "8.9K",
  },
  {
    id: "pnslNXdbfWY",
    title: "हवन के लिए संपर्क करें 📞7223083313 MAA BAGLAMUKHI MANDIR NALKHEDA",
    desc: "यजमानों के नाम-गोत्र संकल्प सहित वैदिक ब्राह्मणों द्वारा संपन्न अखंड हवन कुंड की पावन आहुतियां।",
    category: "संकल्प सिद्धि हवन",
    tags: ["ग्रह दोष शांति", "व्यापार वृद्धि", "वैदिक आहुति"],
    duration: "0:49",
    views: "15.1K",
  },
  {
    id: "3IKA30yn8AY",
    title: "Contact Pandit Deepak Sharma at 7223083313 for Baglamukhi Havan in Nalkheda",
    desc: "आचार्य पं. दीपक शर्मा जी के सानिध्य में नलखेड़ा पीठ पर महायज्ञ एवं पूर्णाहूति का पावन क्षण।",
    category: "वैदिक कर्मकाण्ड",
    tags: ["सवा लाख जप", "नाम-गोत्र संकल्प", "पूर्णाहूति"],
    duration: "0:52",
    views: "9.7K",
  },
  {
    id: "Y0YmOlfQT6I",
    title: "हवन के लिए संपर्क करें 📞7223083313 MAA BAGLAMUKHI MANDIR NALKHEDA",
    desc: "मंगलवार एवं शनिवार विशेष माँ बगलामुखी हवन एवं पीताम्बरी वस्त्र-हल्दी आहुति अनुष्ठान।",
    category: "माँ बगलामुखी दिव्य दर्शन",
    tags: ["नलखेड़ा सिद्धपीठ", "मंगलवार विशेष", "महाआरती"],
    duration: "0:45",
    views: "11.2K",
  },
  {
    id: "4ablb_f1nB8",
    title: "Nalkheda Maa Baglamukhi Temple Ujjain - मंदिर दर्शन",
    desc: "पावन लखुंदर नदी तट स्थित महाभारत कालीन स्वयंभू त्रिमुखी माँ बगलामुखी माता का साक्षात दर्शन।",
    category: "स्वयंभू सिद्धपीठ दर्शन",
    tags: ["महाभारत कालीन पीठ", "लखुंदर नदी तट", "त्रिशक्ति दर्शन"],
    duration: "0:38",
    views: "18.3K",
  },
  {
    id: "CB4ZnHEnD00",
    title: "Maa Baglamukhi Temple Nalkheda Navratri near Ujjain",
    desc: "नवरात्रि महापर्व पर माँ बगलामुखी का दिव्य शृंगार, छप्पन भोग एवं अखंड दीप दर्शन।",
    category: "शारदीय नवरात्रि महोत्सव",
    tags: ["नवरात्रि दर्शन", "अखंड ज्योति", "दीप दर्शन"],
    duration: "0:56",
    views: "14.6K",
  },
  {
    id: "2L1inKj8i10",
    title: "Baglamukhi Mandir Nalkheda Navratri - विशेष पूजन",
    desc: "पीली सरसों, हल्दी गांठ, एवं विशिष्ट तांत्रिक औषधियों से निर्मित विशेष आहुति समर्पण।",
    category: "विशेष हवन आहुति",
    tags: ["हल्दी आहुति", "पीले पुष्प अर्पण", "संकल्प सिद्धि"],
    duration: "0:50",
    views: "7.8K",
  },
  {
    id: "MPlkfRpCcJU",
    title: "Maa Baglamukhi Nalkheda Ujjain - दिव्य स्वरूप दर्शन",
    desc: "विश्व प्रसिद्ध माँ बगलामुखी का प्रातःकालीन महामस्तकाभिषेक एवं राजभोग शृंगार दर्शन।",
    category: "दिव्य शृंगार दर्शन",
    tags: ["पीताम्बरा शृंगार", "स्वर्ण आभूषण", "मंगल आरती"],
    duration: "0:42",
    views: "10.5K",
  },
  {
    id: "lEQ9EuAa3Ss",
    title: "Maa Baglamukhi Mandir Nalkheda 7223083313",
    desc: "पंडित दीपक शर्मा जी से हवन, अनुष्ठान व कुंडली परामर्श हेतु संपर्क एवं मार्ग दर्शन।",
    category: "पंडित जी परामर्श एवं बुकिंग",
    tags: ["कुंडली विश्लेषण", "दोष शांति", "अनुष्ठान मार्गदर्शन"],
    duration: "0:48",
    views: "6.9K",
  },
];

export default function DarshanVideoInteractiveLeaf() {
  const [activeVideo, setActiveVideo] = useState<DarshanVideoItem>(DARSHAN_VIDEOS[0]);
  const [isPlayingInline, setIsPlayingInline] = useState<boolean>(false);
  const [isTheatreOpen, setIsTheatreOpen] = useState<boolean>(false);

  // Close theatre on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsTheatreOpen(false);
      }
    };
    if (isTheatreOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTheatreOpen]);

  // Handle switching video
  const handleSelectVideo = (video: DarshanVideoItem) => {
    setActiveVideo(video);
    setIsPlayingInline(true);
  };

  // Find index for next/prev
  const currentIndex = DARSHAN_VIDEOS.findIndex((v) => v.id === activeVideo.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + DARSHAN_VIDEOS.length) % DARSHAN_VIDEOS.length;
    setActiveVideo(DARSHAN_VIDEOS[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % DARSHAN_VIDEOS.length;
    setActiveVideo(DARSHAN_VIDEOS[nextIdx]);
  };

  return (
    <div className="w-full">
      {/* 2-Column Responsive Layout - Nikhar style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* ================= LEFT COLUMN: CINEMATIC REEL PLAYER ================= */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Main Reel Frame (Vertical 9:16 aspect ratio styled as a sacred golden device) */}
          <div className="w-full max-w-[420px] rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_15px_50px_rgba(139,0,0,0.22)] bg-gradient-to-b from-[#1C120A] via-[#100B05] to-[#0A0703] relative group transition-all duration-300">
            
            {/* Top Reel Header Bar (Inside Frame) */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-3.5 bg-gradient-to-b from-black/85 via-black/50 to-transparent pointer-events-none">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-sm pointer-events-auto">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span>नलखेड़ा धाम LIVE</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/20 text-[#FBBF24] text-[10px] font-semibold backdrop-blur-md pointer-events-auto">
                <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>{activeVideo.views} VIEWS</span>
              </div>
            </div>

            {/* Video Container (9:16 Aspect Ratio) */}
            <div className="relative w-full aspect-[9/16] bg-black overflow-hidden flex items-center justify-center">
              {isPlayingInline ? (
                <div className="relative w-full h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&playsinline=1&modestbranding=1&loop=1&playlist=${activeVideo.id}`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                  {/* Reset overlay button */}
                  <button
                    onClick={() => setIsPlayingInline(false)}
                    aria-label="Stop Video"
                    className="absolute bottom-4 right-4 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs font-medium border border-white/20 backdrop-blur-md transition-all shadow-lg cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                    <span>कवर देखें</span>
                  </button>
                </div>
              ) : (
                /* Static Cover with Play Overlay */
                <div
                  onClick={() => setIsPlayingInline(true)}
                  className="relative w-full h-full cursor-pointer group/cover select-none"
                >
                  {/* Thumbnail Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover object-center group-hover/cover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Gradients for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/60 transition-opacity duration-300" />

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="relative flex items-center justify-center">
                      {/* Pulsing Outer Ring */}
                      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-amber-500 to-red-600 opacity-75 blur-md animate-pulse" />
                      
                      {/* Play Button Circle */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#B45309] via-[#D97706] to-[#F59E0B] p-1 shadow-2xl flex items-center justify-center transform group-hover/cover:scale-110 transition-transform duration-300 border-2 border-white/40">
                        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#78350F] to-[#451A03] flex items-center justify-center pl-1">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 text-amber-200 fill-amber-300 transition-colors" />
                        </div>
                      </div>
                    </div>

                    <span className="mt-4 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-amber-400/40 text-amber-300 font-bold text-xs sm:text-sm tracking-wide shadow-lg group-hover/cover:border-amber-400 transition-colors">
                      दर्शन करें • Play Short
                    </span>
                  </div>

                  {/* Bottom Info Overlay on Cover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                      {activeVideo.category}
                    </span>
                    <h3 className="text-white font-serif font-bold text-sm sm:text-base line-clamp-2 leading-snug drop-shadow-md">
                      {activeVideo.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-[11px] text-amber-200/80">
                      <span>@ASHTHAMMAHVIDHYA</span>
                      <span>•</span>
                      <span>आचार्य पं. दीपक शर्मा</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom In-Frame Bar */}
            <div className="bg-[#140D07] px-4 py-2.5 border-t border-[#D4AF37]/30 flex items-center justify-between text-xs text-amber-200/90">
              <span className="font-semibold text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                नलखेड़ा धाम प्रामाणिक वीडियो
              </span>
              <span className="text-[11px] text-zinc-400">{activeVideo.duration} Reel</span>
            </div>
          </div>

          {/* Player Controls & Action Details Below Frame */}
          <div className="w-full max-w-[420px] mt-4 bg-white/95 dark:bg-[#1C140C] border border-[#E8D8B8] dark:border-[#3D2C1C] rounded-2xl p-4 sm:p-5 shadow-lg">
            
            {/* Active Title and Description */}
            <div className="mb-3">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold text-[#8B0000] dark:text-amber-400 uppercase tracking-wider">
                  {activeVideo.category}
                </span>
                <span className="text-[11px] text-zinc-500 font-medium">
                  {activeVideo.duration} • {activeVideo.views} views
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-serif font-bold text-[#3B1E08] dark:text-[#F3E8D6] leading-snug">
                {activeVideo.title}
              </h4>
              <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {activeVideo.desc}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {activeVideo.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#FFF7E6] dark:bg-[#2A1D11] border border-[#F0D59E] dark:border-[#523A24] text-[10.5px] font-semibold text-[#8B0000] dark:text-amber-300"
                >
                  <Flame className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              
              {/* Primary: Direct Call for Hawan Booking */}
              <a
                href="tel:+917223083313"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B0000] via-[#A51D1D] to-[#8B0000] hover:brightness-110 text-white font-bold text-xs sm:text-[13px] shadow-md transition-all active:scale-95"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>हवन बुक करें 7223083313</span>
              </a>

              {/* Theatre Mode Button */}
              <button
                onClick={() => setIsTheatreOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-[#8B0000] dark:text-amber-300 border border-amber-500/30 font-semibold text-xs transition-colors cursor-pointer"
                title="फुलस्क्रीन थिएटर मोड में देखें"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">थिएटर व्यू</span>
              </button>

              {/* YouTube Channel Link */}
              <a
                href={`https://www.youtube.com/shorts/${activeVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-red-600/10 hover:bg-red-600/20 text-red-700 dark:text-red-400 border border-red-500/30 font-semibold text-xs transition-colors"
                title="YouTube पर खोलें"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>
            </div>

          </div>

        </div>

        {/* ================= RIGHT COLUMN: CURATED REEL PLAYLIST ================= */}
        <div className="lg:col-span-5 flex flex-col">
          
          {/* Playlist Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8D8B8] dark:border-[#3D2C1C]">
            <div className="flex items-center gap-2">
              <Tv className="w-4 h-4 text-[#8B0000] dark:text-amber-400" />
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#3B1E08] dark:text-[#F3E8D6]">
                वैदिक अनुष्ठान एवं दर्शन प्लेलिस्ट
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#8B0000]/10 dark:bg-amber-500/20 border border-[#8B0000]/25 dark:border-amber-500/30 text-[#8B0000] dark:text-amber-300 text-xs font-bold">
              {DARSHAN_VIDEOS.length} REELS
            </span>
          </div>

          <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">
            किसी भी वीडियो कार्ड पर क्लिक करके सीधा दर्शन करें और हवन विधि का प्रत्यक्ष प्रमाण देखें:
          </p>

          {/* Scrollable Playlist Cards */}
          <div className="space-y-2.5 max-h-[580px] lg:max-h-[660px] overflow-y-auto pr-1.5 focus:outline-none">
            {DARSHAN_VIDEOS.map((item, idx) => {
              const isSelected = item.id === activeVideo.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectVideo(item)}
                  className={`group/card relative flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl cursor-pointer transition-all duration-200 select-none ${
                    isSelected
                      ? "bg-gradient-to-r from-[#FFF4DB] to-[#FFE8B3] dark:from-[#2F1F10] dark:to-[#1F140A] border-2 border-[#D97706] shadow-md shadow-amber-500/10"
                      : "bg-white/80 dark:bg-[#18110B]/80 hover:bg-[#FFFDF7] dark:hover:bg-[#22170E] border border-[#EBDCC2] dark:border-[#382819] hover:border-[#D97706]/50 shadow-xs"
                  }`}
                >
                  {/* Left Thumbnail (Vertical 9:14 format) */}
                  <div className="relative w-16 sm:w-20 aspect-[9/13] rounded-xl overflow-hidden shrink-0 bg-black shadow-xs">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                    />

                    {/* Small Play Badge */}
                    <div className="absolute inset-0 bg-black/30 group-hover/card:bg-black/10 transition-colors flex items-center justify-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isSelected ? "bg-amber-500 text-black" : "bg-black/60 text-white group-hover/card:bg-amber-500 group-hover/card:text-black"} transition-colors`}>
                        <Play className="w-3 h-3 fill-current pl-0.5" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/80 text-[9px] font-mono text-zinc-200 font-semibold">
                      {item.duration}
                    </span>
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5 mb-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider truncate ${isSelected ? "text-[#8B0000] dark:text-amber-400" : "text-amber-700 dark:text-amber-500"}`}>
                        {item.category}
                      </span>
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#8B0000] text-white text-[9.5px] font-extrabold uppercase animate-pulse shrink-0">
                          ▶ सक्रिय
                        </span>
                      ) : (
                        <span className="text-[10px] text-zinc-500 shrink-0">
                          {item.views}
                        </span>
                      )}
                    </div>

                    <h4 className={`text-xs sm:text-[13px] font-bold leading-snug line-clamp-2 ${isSelected ? "text-[#3B1E08] dark:text-white" : "text-zinc-800 dark:text-zinc-200 group-hover/card:text-[#8B0000] dark:group-hover/card:text-amber-300"}`}>
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-2 mt-1.5 text-[10.5px] text-zinc-500 dark:text-zinc-400">
                      <span>पं. दीपक शर्मा</span>
                      <span>•</span>
                      <span>नलखेड़ा धाम</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* YouTube Channel Promotion Box at bottom of playlist */}
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-red-50 to-amber-50 dark:from-[#24120D] dark:to-[#1C1209] border border-red-200 dark:border-red-900/40 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow-md">
                <Play className="w-5 h-5 text-white fill-white pl-0.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  आधिकारिक YouTube चैनल
                </p>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                  @ASHTHAMMAHVIDHYA • दैनिक दर्शन एवं हवन लाइव
                </p>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@ASHTHAMMAHVIDHYA/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all shrink-0"
            >
              <span>चैनल पर जाएं</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>

      {/* ================= FULLSCREEN THEATRE MODAL ================= */}
      {isTheatreOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
        >
          {/* Backdrop Click to Close */}
          <div
            className="absolute inset-0"
            onClick={() => setIsTheatreOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-lg max-h-[95vh] flex flex-col items-center bg-[#140D07] border-2 border-amber-500/50 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Top Modal Header */}
            <div className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#24160C] to-[#140D07] border-b border-amber-500/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                  नलखेड़ा धाम दिव्य दर्शन • {activeVideo.category}
                </span>
              </div>
              <button
                onClick={() => setIsTheatreOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Theatre View"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player in Modal */}
            <div className="relative w-full aspect-[9/16] max-h-[70vh] bg-black flex items-center justify-center">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />

              {/* Prev Video Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-amber-300 border border-amber-500/40 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Previous Video"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Video Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-amber-300 border border-amber-500/40 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Next Video"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Modal Actions */}
            <div className="w-full p-4 bg-[#1C120A] border-t border-amber-500/30 flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-white truncate">
                  {activeVideo.title}
                </p>
                <p className="text-[11px] text-amber-300/80">
                  {activeVideo.views} views • पं. दीपक शर्मा (7223083313)
                </p>
              </div>

              <a
                href="tel:+917223083313"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-600 text-white text-xs font-bold shrink-0 shadow-md hover:brightness-110 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>हवन बुक करें</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
