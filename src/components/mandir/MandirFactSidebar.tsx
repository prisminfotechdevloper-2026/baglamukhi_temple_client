import { Landmark, PhoneCall, MapPin, Sparkles as _no, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

interface FactItem {
  label: string;
  value: string;
}

interface MandirFactSidebarProps {
  title: string;
  facts: FactItem[];
  mapsUrl?: string;
}

export default function MandirFactSidebar({
  title,
  facts,
  mapsUrl,
}: MandirFactSidebarProps) {
  const isConfirmed = (val: string | undefined | null) => {
    return Boolean(val && !val.includes("TODO_CONFIRM") && !val.startsWith("[CONFIRM]"));
  };

  const confirmedFacts = facts.filter((f) => isConfirmed(f.value));

  return (
    <aside className="w-full">
      {/* ================= SINGLE UNIFIED HIGH-END CARD (NO INNER SCROLLBAR) ================= */}
      <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_8px_32px_-4px_rgba(217,119,6,0.14)] p-5 sm:p-6 transition-all duration-300">
        
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-amber-100/90 mb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0">
              <Landmark className="h-4.5 w-4.5 text-[#AF0807]" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#AF0807] block">
                प्रामाणिक तथ्य
              </span>
              <h3 className="font-serif text-lg font-bold text-[#3E0B02] leading-tight">
                {title}
              </h3>
            </div>
          </div>
          <span className="text-[11px] font-bold text-amber-800 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
            नलखेड़ा धाम
          </span>
        </div>

        {/* Fact Rows - Clean & Ultra-Compact Key-Value Pairs */}
        <div className="divide-y divide-amber-100/70 text-xs sm:text-sm">
          {confirmedFacts.map((fact, idx) => (
            <div key={idx} className="py-2.5 flex justify-between items-baseline gap-3">
              <span className="font-bold text-stone-500 shrink-0 text-xs">
                {fact.label}
              </span>
              <span className="text-right font-semibold text-[#221510] text-xs sm:text-sm leading-snug">
                {fact.value}
              </span>
            </div>
          ))}
        </div>

        {/* Integrated Consultation & Helpline Block */}
        <div className="mt-4 pt-4 border-t border-amber-100/90">
          <div className="rounded-2xl bg-gradient-to-br from-[#3E0B02] to-[#240401] border-y-0 border-x-2 border-amber-400 p-4 text-white shadow-md">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-1">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
              <span>दर्शन व अनुष्ठान परामर्श</span>
            </div>
            <p className="text-xs text-stone-200 font-medium mb-3">
              पं. दीपक शर्मा (मुख्य पुजारी) • नलखेड़ा
            </p>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+917223083313"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#AF0807] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-[11px] font-bold shadow-md border border-amber-400/80 transition-all cursor-pointer"
              >
                <PhoneCall className="h-3 w-3 text-amber-300" />
                <span>सीधा कॉल</span>
              </a>

              <a
                href="https://wa.me/917223083313?text=जय%20माँ%20बगलामुखी!%20मंदिर%20दर्शन%20व%20हवन%20संबंधी%20मार्गदर्शन%20चाहिए।"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-black/40 hover:bg-black/60 text-amber-200 hover:text-white text-[11px] font-bold border border-amber-400/70 transition-all cursor-pointer group"
              >
                <div className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-[#25D366] text-white shrink-0 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="h-2.5 w-2.5 text-white" />
                </div>
                <span>व्हाट्सएप</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Map Link */}
        {mapsUrl && (
          <div className="mt-3 pt-2 text-center">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#AF0807] hover:text-[#7A0C00] transition-colors"
            >
              <MapPin className="h-3.5 w-3.5 text-amber-600" />
              <span>गूगल मैप्स पर सटीक लोकेशन देखें →</span>
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}
