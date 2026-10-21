"use client";

import {
  ShieldCheck,
  Video,
  Flame,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PujaTrustRibbon() {
  const { t } = useLanguage();

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: { hi: "व्यक्तिगत नाम-गोत्र संकल्प", en: "Individual Name-Gotra Sankalp" },
      desc: {
        hi: "प्रत्येक यजमान का उनके नाम, पिता का नाम, गोत्र व विशिष्ट संकट के साथ अलग संकल्प।",
        en: "Every Yajman receives a personalized Sankalp with their Name, Gotra, and specific prayer.",
      },
    },
    {
      icon: Flame,
      title: { hi: "100% सात्विक पीताम्बरा विधि", en: "100% Sattvic Peetambara Vidhi" },
      desc: {
        hi: "हल्दी माला, पीले वस्त्र, पीली सरसों, कमल गट्टा व शुद्ध गो-घृत से शास्त्रोक्त आहुतियां।",
        en: "Sacred ahutis with turmeric mala, yellow vastra, yellow mustard, and pure cow ghee.",
      },
    },
    {
      icon: Video,
      title: { hi: "लाइव वीडियो दर्शन सुविधा", en: "Live Video Darshan Facility" },
      desc: {
        hi: "दूर रहने वाले भक्तों के लिए WhatsApp / Zoom पर सीधे लाइव जुड़कर संकल्प की पारदर्शी व्यवस्था।",
        en: "Transparent live video streaming on WhatsApp / Zoom for remote devotees worldwide.",
      },
    },
    {
      icon: PackageCheck,
      title: { hi: "डाक द्वारा सिद्ध भस्म व प्रसाद", en: "Postal Delivery of Sacred Prasad" },
      desc: {
        hi: "हवन के बाद अभिमंत्रित पीताम्बरा रक्षा सूत्र, सिद्ध भस्म एवं प्रसाद स्पीड पोस्ट द्वारा घर तक।",
        en: "Energized Peetambara raksha sutra, consecrated bhasma, and prasad delivered via Speed Post.",
      },
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-10 sm:py-12 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustPoints.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 border border-amber-300 text-[#AF0807] mb-3 shadow-2xs">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#3E0B02] mb-1.5 leading-snug">
                    {t(pt.title)}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    {t(pt.desc)}
                  </p>
                </div>
                <div className="pt-2.5 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-bold text-amber-950">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#AF0807] shrink-0" />
                  <span>{t({ hi: "विश्वसनीय परंपरा", en: "Vedic Tradition" })}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
