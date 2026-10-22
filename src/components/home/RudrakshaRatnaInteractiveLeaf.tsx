"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  PhoneCall,
  Clock,
  Compass,
  ArrowRight,
  HelpCircle,
  Award,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

const PHONE = "7223083313";

export interface SpiritualProductItem {
  id: string;
  category: "rudraksha" | "ratna";
  nameHi: string;
  nameEn: string;
  ruling: { hi: string; en: string };
  tradition: { hi: string; en: string };
  availability: {
    hi: string;
    en: string;
    status: "in_stock" | "limited" | "on_request";
  };
  certification: { hi: string; en: string };
  image: string;
  accentBg: string;
  accentText: string;
}

const PRODUCTS: SpiritualProductItem[] = [
  // ----------------- RUDRAKSHA -----------------
  {
    id: "ek-mukhi-rudraksha",
    category: "rudraksha",
    nameHi: "1 मुखी रुद्राक्ष (नेपाली / दुर्लभ)",
    nameEn: "1 Mukhi Rudraksha (Rare Authentic)",
    ruling: { hi: "सूर्य देव एवं साक्षात् शिव स्वरूप", en: "Lord Shiva & Sun (Surya)" },
    tradition: {
      hi: "एकाग्रता, आत्म-चेतना, आध्यात्मिक उन्नति व शिव कृपा की पारंपरिक मान्यता।",
      en: "Traditional belief for supreme concentration, self-realization and divine consciousness.",
    },
    availability: { hi: "सीमित स्टॉक (दुर्लभ)", en: "Limited Stock (Rare)", status: "limited" },
    certification: { hi: "लैब टेस्टेड / सर्टिफाइड उपलब्ध", en: "Lab Tested & Certified" },
    image: "/images/rudraksha-collection.jpg",
    accentBg: "bg-red-50 text-red-700 border-red-200",
    accentText: "text-red-700",
  },
  {
    id: "panch-mukhi-mala",
    category: "rudraksha",
    nameHi: "5 मुखी रुद्राक्ष जप माला (108 मनके)",
    nameEn: "5 Mukhi Rudraksha Japa Mala (108 Beads)",
    ruling: { hi: "बृहस्पति (गुरु) व पंच ब्रह्म", en: "Jupiter (Guru) & Pancha Brahma" },
    tradition: {
      hi: "दैनिक गायत्री व माँ बगलामुखी मंत्र जप, मानसिक शांति व स्वास्थ्य संतुलन हेतु सर्वोत्तम।",
      en: "Preferred traditional mala for daily Gayatri, Baglamukhi japa, and spiritual grounding.",
    },
    availability: { hi: "उपलब्ध (In Stock)", en: "In Stock", status: "in_stock" },
    certification: { hi: "100% प्राकृतिक नेपाली दाने", en: "100% Natural Selected Beads" },
    image: "/images/rudraksha-collection.jpg",
    accentBg: "bg-amber-50 text-amber-800 border-amber-200",
    accentText: "text-amber-800",
  },
  {
    id: "saat-mukhi-rudraksha",
    category: "rudraksha",
    nameHi: "7 मुखी रुद्राक्ष (महालक्ष्मी स्वरूप)",
    nameEn: "7 Mukhi Rudraksha (Mahalakshmi)",
    ruling: { hi: "माँ महालक्ष्मी एवं शनि ग्रह", en: "Goddess Mahalakshmi & Saturn (Shani)" },
    tradition: {
      hi: "व्यापारिक वृद्धि, आर्थिक स्थिरता, ऋण मुक्ति व शनि दोष शांति की शास्त्र सम्मत मान्यता।",
      en: "Traditional Vedic belief for business growth, financial stability and Saturn pacification.",
    },
    availability: { hi: "उपलब्ध (In Stock)", en: "In Stock", status: "in_stock" },
    certification: { hi: "प्राकृतिक एवं अभिमंत्रित", en: "Natural & Energized" },
    image: "/images/rudraksha-collection.jpg",
    accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    accentText: "text-emerald-800",
  },
  {
    id: "gauri-shankar-rudraksha",
    category: "rudraksha",
    nameHi: "गौरी शंकर रुद्राक्ष (शिव-पार्वती युति)",
    nameEn: "Gauri Shankar Rudraksha (Shiva-Parvati)",
    ruling: { hi: "साक्षात् शिव-शक्ति युगल स्वरूप", en: "Divine Union of Shiva & Parvati" },
    tradition: {
      hi: "दांपत्य सुख, वैवाहिक कलह शांति, योग्य जीवनसाथी व पारिवारिक सौहार्द का पावन प्रतीक।",
      en: "Cherished traditional symbol for marital harmony, domestic peace and family unity.",
    },
    availability: { hi: "परामर्श उपरांत (On Request)", en: "On Consultation", status: "on_request" },
    certification: { hi: "प्राकृतिक जोड़ प्रमाणित", en: "Naturally Joined Certified" },
    image: "/images/rudraksha-collection.jpg",
    accentBg: "bg-rose-50 text-rose-800 border-rose-200",
    accentText: "text-rose-800",
  },
  {
    id: "siddha-rudraksha-bracelet",
    category: "rudraksha",
    nameHi: "सिद्ध रुद्राक्ष रक्षा कवच ब्रेसलेट",
    nameEn: "Siddha Rudraksha Protection Bracelet",
    ruling: { hi: "त्रिमुखी व पंचमुखी संयोजन", en: "Trimukhi & Panchamukhi Harmony" },
    tradition: {
      hi: "नकारात्मक ऊर्जा से रक्षा, कार्यक्षेत्र में सकारात्मक ऊर्जा व दैनिक रक्षा सूत्र हेतु।",
      en: "Everyday wearable energized beads for positivity and traditional spiritual protection.",
    },
    availability: { hi: "उपलब्ध (In Stock)", en: "In Stock", status: "in_stock" },
    certification: { hi: "नलखेड़ा सिद्धपीठ अभिमंत्रित", en: "Consecrated at Nalkheda Peeth" },
    image: "/images/rudraksha-collection.jpg",
    accentBg: "bg-amber-50 text-amber-800 border-amber-200",
    accentText: "text-amber-800",
  },
  {
    id: "nau-mukhi-rudraksha",
    category: "rudraksha",
    nameHi: "9 मुखी रुद्राक्ष (नवदुर्गा स्वरूप)",
    nameEn: "9 Mukhi Rudraksha (Navdurga Shakti)",
    ruling: { hi: "माँ भगवती नवदुर्गा एवं केतु ग्रह", en: "Goddess Navdurga & Ketu" },
    tradition: {
      hi: "शत्रु भय निवारण, अदृश्य बाधा शांति, अदम्य साहस व तंत्र रक्षा की पारंपरिक मान्यता।",
      en: "Traditional belief for inner fearlessness, overcoming obstacles and Durga protection.",
    },
    availability: { hi: "सीमित स्टॉक (Limited)", en: "Limited Stock", status: "limited" },
    certification: { hi: "लैब टेस्टेड उपलब्ध", en: "Lab Certificate Included" },
    image: "/images/rudraksha-collection.jpg",
    accentBg: "bg-orange-50 text-orange-800 border-orange-200",
    accentText: "text-orange-800",
  },

  // ----------------- RATNA (GEMSTONES) -----------------
  {
    id: "manikya-ruby",
    category: "ratna",
    nameHi: "माणिक्य (Natural Ruby - सूर्य रत्न)",
    nameEn: "Natural Ruby / Manikya (Sun)",
    ruling: { hi: "सूर्य ग्रह (Sun / Surya)", en: "Sun (Surya)" },
    tradition: {
      hi: "मान-सम्मान, प्रशासनिक सफलता, नेतृत्व क्षमता व सरकारी कार्य सिद्धि की मान्यता।",
      en: "Traditional belief for leadership, administrative success and vitality of the Sun.",
    },
    availability: { hi: "उपलब्ध (विभिन्न कैरेट)", en: "Available in Various Carats", status: "in_stock" },
    certification: { hi: "गवर्नमेंट/लैब प्रमाणित उपलब्ध", en: "Govt / Lab Certified Available" },
    image: "/images/ratna-collection.jpg",
    accentBg: "bg-red-50 text-red-800 border-red-200",
    accentText: "text-red-800",
  },
  {
    id: "moti-pearl",
    category: "ratna",
    nameHi: "सच्चा मोती (Natural Pearl - चंद्र रत्न)",
    nameEn: "Natural Pearl / Moti (Moon)",
    ruling: { hi: "चंद्रमा (Moon / Chandra)", en: "Moon (Chandra)" },
    tradition: {
      hi: "मानसिक शांति, क्रोध नियंत्रण, सकारात्मक विचार व शीतलता प्रदान करने की शास्त्रीय मान्यता।",
      en: "Vedic tradition for calming the mind, emotional balance and overcoming restlessness.",
    },
    availability: { hi: "उपलब्ध (साउथ सी / प्राकृतिक)", en: "South Sea / Natural", status: "in_stock" },
    certification: { hi: "100% प्राकृतिक प्रमाणित", en: "100% Genuine Natural Pearl" },
    image: "/images/ratna-collection.jpg",
    accentBg: "bg-blue-50 text-blue-800 border-blue-200",
    accentText: "text-blue-800",
  },
  {
    id: "moonga-red-coral",
    category: "ratna",
    nameHi: "मूंगा / रक्तमणि (Red Coral - मंगल रत्न)",
    nameEn: "Red Coral / Moonga (Mars)",
    ruling: { hi: "मंगल ग्रह (Mars / Mangal)", en: "Mars (Mangal)" },
    tradition: {
      hi: "साहस, मांगलिक दोष शमन, भूमि-संपत्ति लाभ व रक्त ऊर्जा संतुलन की पारंपरिक मान्यता।",
      en: "Traditional belief for courage, mitigating Manglik dosha, and property endeavors.",
    },
    availability: { hi: "उपलब्ध (इटालियन / त्रिकोणीय)", en: "Italian / Triangular Available", status: "in_stock" },
    certification: { hi: "प्राकृतिक अनहीटेड प्रमाणित", en: "Natural Unheated Certified" },
    image: "/images/ratna-collection.jpg",
    accentBg: "bg-rose-50 text-rose-800 border-rose-200",
    accentText: "text-rose-800",
  },
  {
    id: "panna-emerald",
    category: "ratna",
    nameHi: "पन्ना (Natural Emerald - बुध रत्न)",
    nameEn: "Natural Emerald / Panna (Mercury)",
    ruling: { hi: "बुध ग्रह (Mercury / Budh)", en: "Mercury (Budh)" },
    tradition: {
      hi: "कुशाग्र बुद्धि, व्यापारिक चातुर्य, वित्तीय उन्नति, वाणी कौशल व अध्ययन में सफलता।",
      en: "Traditional Vedic association with sharp intellect, business acumen and eloquence.",
    },
    availability: { hi: "उपलब्ध (जाम्बियन / कोलंबियन)", en: "Zambian & Colombian Available", status: "in_stock" },
    certification: { hi: "लैब टेस्टेड / प्रामाणिक", en: "Lab Tested & Verified" },
    image: "/images/ratna-collection.jpg",
    accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    accentText: "text-emerald-800",
  },
  {
    id: "pukhraj-yellow-sapphire",
    category: "ratna",
    nameHi: "पुखराज (Yellow Sapphire - गुरु रत्न)",
    nameEn: "Yellow Sapphire / Pukhraj (Jupiter)",
    ruling: { hi: "बृहस्पति देवगुरु (Jupiter / Guru)", en: "Jupiter (Devaguru Brihaspati)" },
    tradition: {
      hi: "ज्ञान, विवाह योग, संतान सुख, आध्यात्मिक उन्नति व आर्थिक समृद्धि का प्रमुख रत्न।",
      en: "Revered traditional stone for marital bliss, higher wisdom, and Jupiter's grace.",
    },
    availability: { hi: "उपलब्ध (सीलोन / बैंकॉक)", en: "Ceylon / Natural Available", status: "in_stock" },
    certification: { hi: "नेचुरल अनहीटेड प्रमाणित", en: "Natural Unheated Certified" },
    image: "/images/ratna-collection.jpg",
    accentBg: "bg-amber-50 text-amber-800 border-amber-200",
    accentText: "text-amber-800",
  },
  {
    id: "heera-zircon",
    category: "ratna",
    nameHi: "हीरा / जरकन (Diamond / Zircon - शुक्र)",
    nameEn: "Diamond / White Zircon (Venus)",
    ruling: { hi: "शुक्र ग्रह (Venus / Shukra)", en: "Venus (Shukra)" },
    tradition: {
      hi: "ऐश्वर्य, कलात्मक सफलता, दांपत्य आकर्षण, वैभव व भौतिक सुख-साधनों की वृद्धि।",
      en: "Traditional Vedic connection to luxury, artistic success, and Venusian prosperity.",
    },
    availability: { hi: "उपलब्ध (विभिन्न ग्रेड)", en: "Available in Various Grades", status: "in_stock" },
    certification: { hi: "आईजीआई / लैब प्रमाणित", en: "IGI / Gem Lab Certified" },
    image: "/images/ratna-collection.jpg",
    accentBg: "bg-sky-50 text-sky-800 border-sky-200",
    accentText: "text-sky-800",
  },
  {
    id: "neelam-blue-sapphire",
    category: "ratna",
    nameHi: "नीलम (Blue Sapphire - शनि रत्न)",
    nameEn: "Blue Sapphire / Neelam (Saturn)",
    ruling: { hi: "शनिदेव (Saturn / Shani)", en: "Saturn (Shani Dev)" },
    tradition: {
      hi: "कर्मक्षेत्र में त्वरित उन्नति, अप्रत्याशित सफलता व शनि साढ़े साती प्रभाव शमन।",
      en: "Potent traditional stone for swift career breakthrough and Saturn pacification.",
    },
    availability: { hi: "विशेष परामर्श उपरांत", en: "Upon Astrological Check", status: "on_request" },
    certification: { hi: "सीलोन टेस्टेड उपलब्ध", en: "Certified Ceylon Quality" },
    image: "/images/ratna-collection.jpg",
    accentBg: "bg-indigo-50 text-indigo-800 border-indigo-200",
    accentText: "text-indigo-800",
  },
  {
    id: "gomed-hessonite",
    category: "ratna",
    nameHi: "गोमेद (Hessonite - राहु रत्न)",
    nameEn: "Hessonite / Gomed (Rahu)",
    ruling: { hi: "राहु ग्रह (Rahu)", en: "Rahu" },
    tradition: {
      hi: "आकस्मिक बाधा शांति, कोर्ट-कचहरी, मानसिक भ्रम व कालसर्प योग दोष शमन की मान्यता।",
      en: "Traditional belief for neutralizing sudden halts, legal complexities and Rahu affliction.",
    },
    availability: { hi: "उपलब्ध (शहद रंगी)", en: "Available (Honey Color)", status: "in_stock" },
    certification: { hi: "प्राकृतिक प्रमाणित", en: "100% Natural Certified" },
    image: "/images/ratna-collection.jpg",
    accentBg: "bg-yellow-50 text-yellow-900 border-yellow-200",
    accentText: "text-yellow-900",
  },
  {
    id: "lahsuniya-cats-eye",
    category: "ratna",
    nameHi: "लहसुनिया (Cat's Eye - केतु रत्न)",
    nameEn: "Cat's Eye / Lahsuniya (Ketu)",
    ruling: { hi: "केतु ग्रह (Ketu)", en: "Ketu" },
    tradition: {
      hi: "गुप्त शत्रुओं से रक्षा, आकस्मिक दुर्घटना बचाव व आध्यात्मिक अंतर्ज्ञान वृद्धि।",
      en: "Traditional belief for protection against hidden adversaries and spiritual intuition.",
    },
    availability: { hi: "उपलब्ध (क्रिसबेरिल)", en: "Available (Chrysoberyl)", status: "in_stock" },
    certification: { hi: "लैब टेस्टेड प्रमाणित", en: "Lab Tested Certified" },
    image: "/images/ratna-collection.jpg",
    accentBg: "bg-stone-100 text-stone-800 border-stone-200",
    accentText: "text-stone-800",
  },
];

export default function RudrakshaRatnaInteractiveLeaf() {
  const { t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState<"all" | "rudraksha" | "ratna">("all");

  const filteredProducts =
    selectedTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedTab);

  const getWhatsAppUrl = (product: SpiritualProductItem) => {
    const text = `जय माँ बगलामुखी! पंडित जी, मुझे ${product.nameHi} (${product.nameEn}) के बारे में जानकारी, उपलब्धता व अभिमंत्रित कराने की विधि जाननी है। मेरी राशि/कुंडली अनुसार क्या यह मेरे लिए उपयुक्त है?`;
    return `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;
  };

  const getGeneralConsultationUrl = () => {
    const text =
      "जय माँ बगलामुखी! पंडित जी, मेरी जन्म पत्रिका और ग्रह दशा अनुसार मुझे कौन सा रुद्राक्ष अथवा रत्न धारण करना चाहिए? कृपया उचित मार्गदर्शन करें।";
    return `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full max-w-full min-w-0">
      {/* ============ 1. CATEGORY TABS ============ */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
        <button
          type="button"
          onClick={() => setSelectedTab("all")}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-serif font-bold transition-colors duration-200 cursor-pointer ${
            selectedTab === "all"
              ? "bg-gradient-to-r from-[#8B0000] via-[#A51D1D] to-[#8B0000] text-white shadow-md ring-2 ring-[#D89B18]/50 scale-[1.02]"
              : "bg-white hover:bg-amber-50 text-[#5C3A21] border border-[#E8D8B8]"
          }`}
        >
          {t({ hi: "सभी संग्रह (15)", en: "All Collection (15)" })}
        </button>
        <button
          type="button"
          onClick={() => setSelectedTab("rudraksha")}
          className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-serif font-bold transition-colors duration-200 cursor-pointer ${
            selectedTab === "rudraksha"
              ? "bg-gradient-to-r from-[#8B0000] via-[#A51D1D] to-[#8B0000] text-white shadow-md ring-2 ring-[#D89B18]/50 scale-[1.02]"
              : "bg-white hover:bg-amber-50 text-[#5C3A21] border border-[#E8D8B8]"
          }`}
        >
          <span>📿</span>
          <span>{t({ hi: "सिद्ध रुद्राक्ष संग्रह (6)", en: "Siddha Rudraksha (6)" })}</span>
        </button>
        <button
          type="button"
          onClick={() => setSelectedTab("ratna")}
          className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-serif font-bold transition-colors duration-200 cursor-pointer ${
            selectedTab === "ratna"
              ? "bg-gradient-to-r from-[#8B0000] via-[#A51D1D] to-[#8B0000] text-white shadow-md ring-2 ring-[#D89B18]/50 scale-[1.02]"
              : "bg-white hover:bg-amber-50 text-[#5C3A21] border border-[#E8D8B8]"
          }`}
        >
          <span>💎</span>
          <span>{t({ hi: "नवग्रह प्रामाणिक रत्न (9)", en: "Navgraha Gemstones (9)" })}</span>
        </button>
      </div>

      {/* ============ 2. OVERVIEW BANNER (BILINGUAL) ============ */}
      <div className="mb-8 sm:mb-10 overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[#EBDCC2] bg-gradient-to-r from-[#FFFBF0] via-[#FFF9EE] to-[#FFF3DC] p-5 sm:p-7 shadow-[0_10px_30px_rgba(139,0,0,0.05)]">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-full md:w-48 h-36 md:h-36 shrink-0 overflow-hidden rounded-2xl border border-[#D89B18]/40 shadow-sm">
            <Image
              src={selectedTab === "ratna" ? "/images/ratna-collection.jpg" : "/images/rudraksha-collection.jpg"}
              alt="प्रामाणिक रुद्राक्ष एवं नवग्रह रत्न"
              fill
              sizes="(max-width: 768px) 100vw, 200px"
              className="object-cover object-center"
            />
          </div>
          <div className="min-w-0 flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/25 text-[11px] font-bold text-[#8B0000] mb-2">
              <Sparkles className="h-3 w-3 text-[#8B0000]" />
              <span>{t({ hi: "माँ बगलामुखी पीठ नलखेड़ा से अभिमंत्रित", en: "Consecrated at Nalkheda Peeth" })}</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3B1E08]">
              {selectedTab === "ratna"
                ? t({
                    hi: "नवग्रह शांति एवं अनुकूलता हेतु प्रामाणिक रत्न",
                    en: "Authentic Gemstones for Planetary Harmony",
                  })
                : selectedTab === "rudraksha"
                ? t({
                    hi: "दिव्य शिव शक्ति ऊर्जा से अभिमंत्रित मुखी रुद्राक्ष",
                    en: "Divine Mukhi Rudraksha Energized with Vedic Mantras",
                  })
                : t({
                    hi: "शास्त्र सम्मत रुद्राक्ष एवं नवग्रह रत्न संग्रह",
                    en: "Authentic Vedic Rudraksha & Gemstone Collection",
                  })}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#5C3A21]/90 leading-relaxed">
              {t({
                hi: "वैदिक ज्योतिष एवं शिव पुराण की शास्त्रीय परंपरा अनुसार प्रत्येक रुद्राक्ष व रत्न का विशिष्ट ग्रहों व ऊर्जा केंद्रों से संबंध माना गया है। पंडित दीपक शर्मा जी द्वारा प्रत्येक दाने व रत्न की शुद्धता जांचकर यजमान के नाम-गोत्र संकल्प सहित अभिमंत्रित किया जाता है।",
                en: "In Vedic astrological tradition, each Rudraksha and gemstone corresponds to specific planetary energies. Consecrated by Pt. Deepak Sharma Ji with personal Name-Gotra Sankalp before wearing.",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* ============ 3. PRODUCT CARDS GRID ============ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
        {filteredProducts.map((product) => {
          const isRudraksha = product.category === "rudraksha";
          return (
            <article
              key={product.id}
              className="group flex flex-col justify-between overflow-hidden rounded-[22px] sm:rounded-[24px] border border-[#EBDCC2] bg-white p-5 shadow-[0_8px_24px_rgba(74,38,24,0.06)] hover:border-[#D89B18] hover:shadow-[0_12px_32px_rgba(139,0,0,0.12)] transition-[border-color,box-shadow] duration-300"
            >
              <div>
                {/* Top Row: Category Pill & Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold border ${product.accentBg}`}
                  >
                    <span>{isRudraksha ? "📿" : "💎"}</span>
                    <span>{isRudraksha ? t({ hi: "रुद्राक्ष", en: "Rudraksha" }) : t({ hi: "रत्न", en: "Ratna" })}</span>
                  </span>

                  {/* Availability Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      product.availability.status === "in_stock"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : product.availability.status === "limited"
                        ? "bg-amber-50 text-amber-800 border border-amber-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        product.availability.status === "in_stock"
                          ? "bg-emerald-600 animate-pulse"
                          : product.availability.status === "limited"
                          ? "bg-amber-500"
                          : "bg-blue-500"
                      }`}
                    />
                    <span>{t(product.availability)}</span>
                  </span>
                </div>

                {/* Product Title */}
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#3B1E08] group-hover:text-[#8B0000] transition-colors leading-snug">
                  {t({ hi: product.nameHi, en: product.nameEn })}
                </h4>

                {/* Ruling Deity / Planet Tag */}
                <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-[#78350F]">
                  <Compass className="h-3.5 w-3.5 shrink-0 text-[#B45309]" />
                  <span>
                    <strong>{t({ hi: "अधिष्ठाता / ग्रह:", en: "Ruling Energy:" })}</strong> {t(product.ruling)}
                  </span>
                </div>

                {/* Traditional Belief / Significance */}
                <p className="mt-2.5 text-xs text-[#5C3A21]/85 leading-relaxed line-clamp-3">
                  {t(product.tradition)}
                </p>

                {/* Certification Pill */}
                <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-lg bg-[#FFFDF8] border border-[#E8D8B8] px-2.5 py-1 text-[11px] text-[#3B1E08]/90 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>{t(product.certification)}</span>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-5 pt-3.5 border-t border-[#EBDCC2]/70 flex flex-col gap-2">
                <a
                  href={getWhatsAppUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#159E4A] hover:brightness-110 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-transform active:scale-95"
                  aria-label={t({
                    hi: `${product.nameHi} हेतु व्हाट्सएप पर पूछताछ करें`,
                    en: `Inquire about ${product.nameEn} on WhatsApp`,
                  })}
                >
                  <WhatsAppIcon className="h-4 w-4 text-white shrink-0" />
                  <span>{t({ hi: "व्हाट्सएप पर उपलब्धता जानें", en: "Inquire on WhatsApp" })}</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* ============ 4. SECONDARY "ASK PANDIT JI" CONSULTATION CTA BANNER ============ */}
      <div className="overflow-hidden rounded-[26px] sm:rounded-[30px] border-2 border-[#D89B18]/70 bg-gradient-to-br from-[#2D060B] via-[#4A0C16] to-[#1A0306] p-6 sm:p-8 text-white shadow-xl relative">
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 px-3 py-1 text-xs font-bold text-amber-300 mb-3">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              <span>{t({ hi: "व्यक्तिगत जन्म पत्रिका मार्गदर्शन", en: "Personalized Kundali Guidance" })}</span>
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-100 leading-snug">
              {t({
                hi: "कौन सा रुद्राक्ष या रत्न आपके लिए शास्त्र सम्मत है?",
                en: "Which Rudraksha or Gemstone Suits Your Birth Chart?",
              })}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-amber-100/80 leading-relaxed">
              {t({
                hi: "गलत रत्न अथवा प्रतिकूल रुद्राक्ष धारण करने से विपरीत प्रभाव हो सकता है। पं. दीपक शर्मा जी से अपनी जन्म पत्रिका, दशा व लग्न का सूक्ष्म परीक्षण कराकर ही अभिमंत्रित रत्न या रुद्राक्ष धारण करें।",
                en: "Wearing an incompatible gemstone can cause adverse effects. Consult Pt. Deepak Sharma Ji for a thorough birth chart analysis before wearing.",
              })}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={getGeneralConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#159E4A] hover:brightness-110 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-transform active:scale-95"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>{t({ hi: "पंडित जी से सलाह लें", en: "Ask Pandit Ji on WhatsApp" })}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <a
              href={`tel:+91${PHONE}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-amber-400/50 bg-white/10 hover:bg-white/20 px-5 py-3 text-xs sm:text-sm font-bold text-amber-200 transition-colors"
            >
              <PhoneCall className="h-4 w-4 text-amber-300" />
              <span>{t({ hi: `कॉल करें ${PHONE}`, en: `Direct Call ${PHONE}` })}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ============ 5. SCRIPTURAL TRADITION DISCLAIMER ============ */}
      <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-[#EBD9B8]/70 bg-[#FFFDF8] p-3.5 text-[11px] text-[#5C3A21]/80 leading-relaxed">
        <HelpCircle className="h-4 w-4 shrink-0 text-[#B45309] mt-0.5" />
        <p>
          {t({
            hi: "पारंपरिक शास्त्रीय मान्यता: सनातन परंपरा एवं वैदिक ज्योतिष में रुद्राक्ष एवं रत्नों का उपयोग ग्रहों के सांकेतिक प्रभावों एवं आध्यात्मिक संतुलन हेतु अनुशंसित है। यह किसी चिकित्सीय उपचार का विकल्प नहीं है। धारण करने से पूर्व योग्य ब्राह्मण से अपनी पत्रिका का परीक्षण अवश्य कराएं।",
            en: "Traditional Vedic Context: In Sanatan astrological tradition, Rudraksha and gemstones are recommended for planetary harmony and spiritual alignment. They are not medical substitutes. A personal horoscope consultation is advised prior to wearing.",
          })}
        </p>
      </div>
    </div>
  );
}
