import { Info, PhoneCall } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

interface MandirTraditionNoticeProps {
  traditionNote: string;
}

export default function MandirTraditionNotice({
  traditionNote,
}: MandirTraditionNoticeProps) {
  return (
    <section className="mt-12 sm:mt-16 mb-8 sm:mb-12">
      {/* Tradition Note Card */}
      <div className="rounded-2xl sm:rounded-3xl bg-amber-50/70 border-y-0 border-x-2 border-amber-400 p-5 sm:p-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center gap-3.5 shadow-2xs">
        <div className="h-9 w-9 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center shrink-0">
          <Info className="h-5 w-5 text-[#AF0807]" />
        </div>
        <p className="text-xs sm:text-sm text-stone-700 italic font-medium leading-relaxed">
          {traditionNote} मंदिर दर्शन, हवन-अनुष्ठान और परंपरा संबंधी अधिकृत जानकारी हेतु मंदिर परिसर अथवा मुख्य पुरोहित जी से मार्गदर्शन प्राप्त करें।
        </p>
      </div>

      {/* Direct Contact Ribbon */}
      <div className="rounded-3xl bg-gradient-to-r from-[#3E0B02] via-[#5C1004] to-[#2B0701] border-y-0 border-x-4 border-amber-400 p-8 sm:p-10 lg:p-12 text-white shadow-[0_12px_40px_-6px_rgba(62,11,2,0.35)] flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-400/30">
            माँ बगलामुखी नलखेड़ा तीर्थ दर्शन
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-200 leading-tight">
            मंदिर दर्शन एवं अनुष्ठान हेतु संपर्क करें
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-200 leading-relaxed">
            माँ पीताम्बरा बगलामुखी जी के पावन धाम नलखेड़ा में दर्शन समय, विशेष हवन एवं पूजन व्यवस्था के लिए सीधे पंडित दीपक शर्मा जी से संपर्क करें।
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="tel:+917223083313"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-xs sm:text-sm font-bold shadow-xl border border-amber-400/80 hover:border-amber-300 transition-all cursor-pointer"
          >
            <PhoneCall className="h-4 w-4 text-amber-300" />
            <span>+91 72230 83313</span>
          </a>

          <a
            href="https://wa.me/917223083313?text=जय%20माँ%20बगलामुखी!%20मंदिर%20दर्शन%20व%20पूजा%20के%20लिए%20जानकारी%20चाहिए।"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-amber-200 text-xs sm:text-sm font-bold border-2 border-amber-400 backdrop-blur-md shadow-xl transition-all cursor-pointer group"
          >
            <div className="flex h-4 w-4 items-center justify-center rounded-xs bg-[#25D366] text-white shrink-0 group-hover:scale-110 transition-transform">
              <WhatsAppIcon className="h-3 w-3 text-white" />
            </div>
            <span>व्हाट्सएप पर संपर्क करें</span>
          </a>
        </div>
      </div>
    </section>
  );
}
