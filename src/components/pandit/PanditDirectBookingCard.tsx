import Image from "next/image";
import {
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function PanditDirectBookingCard() {
  const whatsappUrl =
    "https://wa.me/917726815642?text=" +
    encodeURIComponent(
      "जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे आपसे पूजा / अनुष्ठान / जन्म कुंडली परामर्श हेतु मार्गदर्शन प्राप्त करना है। कृपया शुभ समय बताएं।"
    );

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Container with signature border */}
        <div className="rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_10px_36px_-4px_rgba(217,119,6,0.16)] p-6 sm:p-10 lg:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Pandit Ji Quick Profile Photo + Text */}
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
                  सीधा आध्यात्मिक परामर्श • पंडित दीपक शर्मा
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight mb-3">
                जीवन के संकटों का शास्त्रीय समाधान जानें
              </h2>

              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6">
                चाहे कोर्ट केस की चिंता हो, व्यापार में भारी रुकावट, अकारण शत्रुता अथवा विवाह में विलंब—माँ पीताम्बरा की अमोघ कृपा से हर संकट का निवारण संभव है। पंडित दीपक शर्मा जी से निःसंकोच अपनी समस्या साझा करें।
              </p>

              {/* 3 Trust Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700">
                  <CheckCircle2 className="h-4 w-4 text-[#AF0807] shrink-0" />
                  <span className="font-semibold">100% पूर्ण गोपनीयता</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700">
                  <ShieldCheck className="h-4 w-4 text-[#AF0807] shrink-0" />
                  <span className="font-semibold">सीधे पंडित जी से बात</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700">
                  <Clock className="h-4 w-4 text-[#AF0807] shrink-0" />
                  <span className="font-semibold">शीघ्र उत्तर व मार्गदर्शन</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4 text-amber-300" />
                  <span>व्हाट्सएप पर सीधी बात करें</span>
                </a>

                <a
                  href="tel:+917726815642"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-[#3E0B02] text-xs sm:text-sm font-bold transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-[#AF0807]" />
                  <span>कॉल करें: +91 77268 15642</span>
                </a>
              </div>
            </div>

            {/* Right Column: Mini Card with Pandit Ji Photo & Verification */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-white border border-amber-300/80 p-5 shadow-sm text-center">
                <div className="relative h-28 w-28 mx-auto rounded-full overflow-hidden border-2 border-amber-400 shadow-md mb-3">
                  <Image
                    src="/images/pandit-deepak-sharma.jpg"
                    alt="पंडित दीपक शर्मा"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#3E0B02]">
                  पंडित दीपक शर्मा
                </h3>
                <p className="text-xs text-[#AF0807] font-semibold mt-0.5">
                  माँ बगलामुखी अनन्य साधक
                </p>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  नलखेड़ा सिद्धपीठ, आगर-मालवा (म.प्र.)
                </p>

                <div className="mt-4 pt-3 border-t border-amber-100 text-[11.5px] text-stone-600 space-y-1 text-left">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-stone-500">परामर्श समय:</span>
                    <span className="font-semibold text-stone-800">प्रातः 7:00 से रात्रि 9:30</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-stone-500">उपलब्धता:</span>
                    <span className="font-semibold text-amber-800">दैनिक (वर्ष भर)</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-stone-500">स्थान:</span>
                    <span className="font-semibold text-stone-800">नलखेड़ा मंदिर परिसर</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
