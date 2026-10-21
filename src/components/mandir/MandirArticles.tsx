import React from "react";
import { Quote, BookOpen } from "lucide-react";

interface ArticleSection {
  id: string;
  h2: string;
  paragraphs: string[];
  confirmedNotes?: string[];
}

interface MandirArticlesProps {
  sections: ArticleSection[];
  pullQuote: string;
}

export default function MandirArticles({ sections, pullQuote }: MandirArticlesProps) {
  const isConfirmed = (val: string | undefined | null) => {
    return Boolean(val && !val.includes("TODO_CONFIRM") && !val.startsWith("[CONFIRM]"));
  };

  const sectionPills = [
    { id: "who-is-goddess", short: "१. माँ का स्वरूप" },
    { id: "legend-history", short: "२. पौराणिक कथा" },
    { id: "temple-form", short: "३. मंदिर स्वरूप" },
    { id: "sadhana-tradition", short: "४. साधना व हवन" },
    { id: "festivals", short: "५. प्रमुख पर्व" },
  ];

  return (
    <div className="w-full">
      {/* ================= UNIFIED GRAND READING CANVAS (NO MULTI-CARD FRAGMENTATION) ================= */}
      <article id="mandir-article-top" className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_8px_36px_-4px_rgba(217,119,6,0.14)] p-6 sm:p-10 md:p-12 transition-colors duration-300">
        
        {/* Top Editorial Eyebrow & Chapter Meta */}
        <div className="pb-5 border-b border-amber-100/80 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[#AF0807] text-xs font-bold tracking-wide">
              <BookOpen className="h-3.5 w-3.5 text-[#AF0807]" />
              <span>श्री माँ बगलामुखी नलखेड़ा तीर्थ • विस्तृत प्रामाणिक आलेख</span>
            </div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
              ५ पावन अध्याय • संपूर्ण विवरण
            </span>
          </div>

          {/* Quick Chapter Navigation Jump-Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-bold text-stone-500 mr-1 hidden sm:inline">
              विषय सूची:
            </span>
            {sectionPills.map((pill) => (
              <a
                key={pill.id}
                href={`#${pill.id}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-stone-50 hover:bg-amber-100/70 text-[#3E0B02] hover:text-[#AF0807] border border-stone-200/80 hover:border-amber-400 transition-colors cursor-pointer"
              >
                {pill.short}
              </a>
            ))}
          </div>
        </div>

        {/* Seamless Flowing Reading Body */}
        <div className="space-y-10 sm:space-y-12">
          {sections.map((section, sIdx) => {
            const confirmedNotes = (section.confirmedNotes || []).filter((note) =>
              isConfirmed(note)
            );

            return (
              <React.Fragment key={section.id}>
                {/* Chapter Section */}
                <section id={section.id} className="scroll-mt-28">
                  {/* Chapter Header */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807] bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20 shrink-0">
                      अध्याय ०{sIdx + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#3E0B02] leading-snug">
                      {section.h2}
                    </h2>
                  </div>

                  {/* Flowing Narrative Text */}
                  <div className="space-y-4 text-stone-700 text-[15px] sm:text-[16.5px] leading-[1.85]">
                    {section.paragraphs.map((p, pIdx) => {
                      const isFirstParagraph = sIdx === 0 && pIdx === 0;

                      return (
                        <p
                          key={pIdx}
                          className={`text-justify sm:text-left ${
                            isFirstParagraph
                              ? "first-letter:text-5xl first-letter:font-serif first-letter:font-extrabold first-letter:text-[#AF0807] first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1 font-medium text-stone-800"
                              : ""
                          }`}
                        >
                          {p}
                        </p>
                      );
                    })}

                    {confirmedNotes.map((note, nIdx) => (
                      <div
                        key={nIdx}
                        className="p-4 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 text-xs sm:text-sm text-stone-700 italic font-medium mt-3"
                      >
                        {note}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Royal Inset Pull Quote (Between Section 2 and Section 3) */}
                {sIdx === 1 && pullQuote && (
                  <div className="my-8 sm:my-10">
                    <blockquote className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#3E0B02] via-[#5C1004] to-[#2B0701] border-y-0 border-x-4 border-amber-400 p-6 sm:p-8 text-center text-white shadow-[0_10px_32px_-4px_rgba(62,11,2,0.35)] relative overflow-hidden">
                      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                        <div className="h-9 w-9 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center mb-2.5">
                          <Quote className="h-4 w-4 text-amber-300" />
                        </div>
                        <p className="font-serif text-xl sm:text-2xl font-bold text-amber-200 leading-snug tracking-wide">
                          “{pullQuote}”
                        </p>
                        <div className="mt-2.5 flex items-center gap-2">
                          <span className="h-0.5 w-6 bg-amber-400/60" />
                          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300/90">
                            पावन मान्यता एवं महात्म्य
                          </span>
                          <span className="h-0.5 w-6 bg-amber-400/60" />
                        </div>
                      </div>
                    </blockquote>
                  </div>
                )}

                {/* Subtle Sacred Divider between sections (except the last one) */}
                {sIdx < sections.length - 1 && sIdx !== 1 && (
                  <div className="pt-8 sm:pt-10 flex items-center justify-center gap-3 opacity-75">
                    <span className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-amber-300 to-amber-400" />
                    <span className="h-2 w-2 rotate-45 bg-[#AF0807] rounded-[1px]" />
                    <span className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent via-amber-300 to-amber-400" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Editorial Stamp */}
        <div className="mt-12 pt-6 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 font-medium">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span>इति श्री माँ बगलामुखी नलखेड़ा तीर्थ महात्म्य आलेख</span>
          </div>
          <a
            href="#mandir-article-top"
            className="text-[#AF0807] font-bold hover:underline"
          >
            ↑ शीर्ष पर वापस जाएँ
          </a>
        </div>
      </article>
    </div>
  );
}
