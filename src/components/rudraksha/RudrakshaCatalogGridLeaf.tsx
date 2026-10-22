"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Eye, ChevronLeft, ChevronRight, X, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

const PHONE = "7223083313";
const ITEMS_PER_PAGE = 8;

export interface RudrakshaCardItem {
  id: string;
  hindiName: string;
  mukhi: string;
  description: string;
  image: string;
  deity: string;
  planet: string;
  mantra: string;
  detailedBenefits: string[];
}

const RUDRAKSHA_PRODUCTS: RudrakshaCardItem[] = [
  {
    id: "1-mukhi",
    hindiName: "एक मुखी रुद्राक्ष",
    mukhi: "(1 Mukhi)",
    description: "आत्मज्ञान, मोक्ष और परम शांति का प्रतीक माना जाता है।",
    image: "/images/rudraksha-1-mukhi.png",
    deity: "भगवान शिव (साक्षात ओंकार स्वरूप)",
    planet: "सूर्य ग्रह (Sun)",
    mantra: "ॐ ह्रीं नमः",
    detailedBenefits: [
      "आत्मज्ञान, मोक्ष और परम चेतना की प्राप्ति में सहायक।",
      "सूर्य जनित दोषों का निवारण व समाज में मान-सम्मान व उच्च प्रतिष्ठा।",
      "अहंकार का शमन और नेतृत्व क्षमता में अद्भुत वृद्धि।",
    ],
  },
  {
    id: "2-mukhi",
    hindiName: "दो मुखी रुद्राक्ष",
    mukhi: "(2 Mukhi)",
    description: "मानसिक शांति, रिश्तों में प्रगाढ़ता और दांपत्य सुख का प्रतीक।",
    image: "/images/rudraksha-2-mukhi.png",
    deity: "अर्द्धनारीश्वर (भगवान शिव व माता पार्वती)",
    planet: "चंद्रमा ग्रह (Moon)",
    mantra: "ॐ नमः",
    detailedBenefits: [
      "पति-पत्नी व पारिवारिक संबंधों में अटूट प्रेम और सामंजस्य की स्थापना।",
      "चंद्रमा जनित मानसिक अशांति, तनाव, अनिद्रा और अवसाद का निवारण।",
      "भावनात्मक स्थिरता और सही समय पर सही निर्णय लेने की क्षमता।",
    ],
  },
  {
    id: "3-mukhi",
    hindiName: "तीन मुखी रुद्राक्ष",
    mukhi: "(3 Mukhi)",
    description: "आत्मविश्वास, आत्मशुद्धि और भूतकाल के पापों से मुक्ति दिलाने वाला।",
    image: "/images/rudraksha-3-mukhi.png",
    deity: "अग्नि देव (पावक)",
    planet: "मंगल ग्रह (Mars)",
    mantra: "ॐ क्लीं नमः",
    detailedBenefits: [
      "हीनभावना, आत्मग्लानि, भय और आलस्य से स्थायी मुक्ति।",
      "शरीर में नई ऊर्जा, तेज, स्फूर्ति और पराक्रम का निरंतर संचार।",
      "अग्नि तत्व को संतुलित कर पाचन व आंतरिक बल में वृद्धि।",
    ],
  },
  {
    id: "4-mukhi",
    hindiName: "चार मुखी रुद्राक्ष",
    mukhi: "(4 Mukhi)",
    description: "ज्ञान, बुद्धि, स्मरण शक्ति और संचार कौशल को प्रखर करने वाला।",
    image: "/images/rudraksha-4-mukhi.png",
    deity: "चतुरानन भगवान ब्रह्मा",
    planet: "बुध ग्रह (Mercury)",
    mantra: "ॐ ह्रीं नमः",
    detailedBenefits: [
      "विद्यार्थियों, लेखकों व वक्ताओं के लिए बौद्धिक वरदान।",
      "तीव्र स्मरण शक्ति, तार्किक सोच और एकाग्रता में असाधारण वृद्धि।",
      "वाणी दोष, संकोच और संचार संबंधी समस्याओं का निवारण।",
    ],
  },
  {
    id: "5-mukhi",
    hindiName: "पंच मुखी रुद्राक्ष",
    mukhi: "(5 Mukhi)",
    description: "सामान्य, सर्वाधिक लोकप्रिय और सर्वसुलभ रुद्राक्ष।",
    image: "/images/rudraksha-5-mukhi.png",
    deity: "कालाग्नि रुद्र (भगवान शिव)",
    planet: "बृहस्पति ग्रह (Jupiter)",
    mantra: "ॐ ह्रीं नमः",
    detailedBenefits: [
      "रक्तचाप व हृदय स्वास्थ्य के संतुलन में परंपरागत सहायक।",
      "मानसिक तनाव, चिंता और नकारात्मक विचारों से मुक्ति।",
      "ज्ञान, बुद्धि, दीर्घायु और आध्यात्मिक चेतना का जागरण।",
    ],
  },
  {
    id: "6-mukhi",
    hindiName: "छह मुखी रुद्राक्ष",
    mukhi: "(6 Mukhi)",
    description: "बुद्धि, ज्ञान और ध्यान शक्ति में वृद्धि करने वाला।",
    image: "/images/rudraksha-6-mukhi.png",
    deity: "भगवान कार्तिकेय",
    planet: "शुक्र ग्रह (Venus)",
    mantra: "ॐ ह्रीं हुं नमः",
    detailedBenefits: [
      "एकाग्रता, तीव्र स्मरण शक्ति और वाणी में सम्मोहन शक्ति।",
      "विद्यार्थियों, शिक्षकों और बौद्धिक कार्य करने वालों हेतु सर्वोत्तम।",
      "आलस्य, सुस्ती और मानसिक भ्रम का निवारण।",
    ],
  },
  {
    id: "7-mukhi",
    hindiName: "सात मुखी रुद्राक्ष",
    mukhi: "(7 Mukhi)",
    description: "धन, समृद्धि और जीवन में स्थिरता प्रदान करने वाला।",
    image: "/images/rudraksha-7-mukhi.png",
    deity: "माता महालक्ष्मी व सप्तर्षि",
    planet: "शनि ग्रह (Saturn)",
    mantra: "ॐ हुं नमः",
    detailedBenefits: [
      "आर्थिक तंगी, ऋण और व्यापारिक बाधाओं का स्थायी निवारण।",
      "शनि की साढ़ेसाती व ढैय्या के दुष्प्रभावों में परम शांति।",
      "अखंड सौभाग्य, मान-प्रतिष्ठा और पारिवारिक स्थिरता।",
    ],
  },
  {
    id: "8-mukhi",
    hindiName: "आठ मुखी रुद्राक्ष",
    mukhi: "(8 Mukhi)",
    description: "विघ्नों से रक्षा, साहस और आत्मबल बढ़ाने वाला।",
    image: "/images/rudraksha-8-mukhi.png",
    deity: "विघ्नहर्ता भगवान गणेश",
    planet: "राहु ग्रह (Rahu)",
    mantra: "ॐ हुं नमः",
    detailedBenefits: [
      "सभी कार्यों में आने वाले अप्रत्याशित विघ्नों व रुकावटों का नाश।",
      "राहु जनित भय, अज्ञात चिंता और आकस्मिक संकटों से सुरक्षा।",
      "अदम्य साहस, धैर्य और सही निर्णय लेने की क्षमता।",
    ],
  },
  {
    id: "9-mukhi",
    hindiName: "नौ मुखी रुद्राक्ष",
    mukhi: "(9 Mukhi)",
    description: "शक्ति, सुरक्षा और नकारात्मक ऊर्जा से रक्षा करने वाला।",
    image: "/images/rudraksha-9-mukhi.png",
    deity: "माँ नवदुर्गा (आदिशक्ति भगवती)",
    planet: "केतु ग्रह (Ketu)",
    mantra: "ॐ ह्रीं हुं नमः",
    detailedBenefits: [
      "माँ भगवती के नौ स्वरूपों की कृपा और अभेद्य सुरक्षा कवच।",
      "अज्ञात भय, शत्रु बाधा और नकारात्मक ऊर्जा से पूर्ण सुरक्षा।",
      "दृढ़ इच्छाशक्ति, आत्मविश्वास और सकारात्मक ऊर्जा का संचार।",
    ],
  },
  {
    id: "10-mukhi",
    hindiName: "दस मुखी रुद्राक्ष",
    mukhi: "(10 Mukhi)",
    description: "भय, बाधाओं और नकारात्मक प्रभावों से संरक्षण देता है।",
    image: "/images/rudraksha-10-mukhi.png",
    deity: "भगवान विष्णु (दशावतार)",
    planet: "सभी नवग्रह शांति (Navgrah)",
    mantra: "ॐ ह्रीं नमः",
    detailedBenefits: [
      "दसों दिशाओं से रक्षा कवच और नजर दोष व तंत्र बाधा शांति।",
      "कोर्ट-कचहरी, कानूनी अड़चनों व गुप्त विरोधियों पर विजय।",
      "पारिवारिक कलह से मुक्ति व घर में सुख-शांति का वास।",
    ],
  },
  {
    id: "11-mukhi",
    hindiName: "ग्यारह मुखी रुद्राक्ष",
    mukhi: "(11 Mukhi)",
    description: "इच्छा शक्ति, सफलता और आध्यात्मिक बल प्रदान करता है।",
    image: "/images/rudraksha-11-mukhi.png",
    deity: "रुद्र अवतार संकटमोचन श्री हनुमान जी",
    planet: "मंगल ग्रह (Mars)",
    mantra: "ॐ ह्रीं हुं नमः",
    detailedBenefits: [
      "शारीरिक बल, स्फूर्ति, पराक्रम और रोग प्रतिरोधक क्षमता में वृद्धि।",
      "संकटों और प्रतिकूल परिस्थितियों में त्वरित विजय प्राप्ति।",
      "इंद्रियों पर नियंत्रण, ध्यान साधना और आध्यात्मिक सिद्धि।",
    ],
  },
  {
    id: "12-mukhi",
    hindiName: "बारह मुखी रुद्राक्ष",
    mukhi: "(12 Mukhi)",
    description: "प्रभुत्व, तेज, आत्मविश्वास और नेतृत्व क्षमता बढ़ाने वाला।",
    image: "/images/rudraksha-12-mukhi.png",
    deity: "द्वादश आदित्य (भगवान सूर्य)",
    planet: "सूर्य ग्रह (Sun)",
    mantra: "ॐ क्रौं क्षौं रौं नमः",
    detailedBenefits: [
      "सूर्य के समान ओज, तेज, आभा और व्यक्तित्व में आकर्षण।",
      "प्रशासनिक, राजनीतिक, व्यापारिक व उच्च पदों पर अभूतपूर्व सफलता।",
      "आंतरिक हीनभावना, संकोच और भय का समूल निवारण।",
    ],
  },
  {
    id: "13-mukhi",
    hindiName: "तेरह मुखी रुद्राक्ष",
    mukhi: "(13 Mukhi)",
    description: "आकर्षण, समृद्धि और सकारात्मक अवसर प्रदान करता है।",
    image: "/images/rudraksha-13-mukhi.png",
    deity: "कामदेव एवं देवराज इंद्र",
    planet: "शुक्र ग्रह (Venus)",
    mantra: "ॐ ह्रीं नमः",
    detailedBenefits: [
      "व्यक्तिगत सम्मोहन, चुंबकीय आकर्षण और वाक्पटुता की सिद्धि।",
      "व्यापारिक साझेदारियों, जनसंपर्क और नेटवर्किंग में असाधारण लाभ।",
      "समस्त भौतिक सुख, समृद्धि, कला व ऐश्वर्य की प्राप्ति।",
    ],
  },
  {
    id: "14-mukhi",
    hindiName: "चौदह मुखी रुद्राक्ष",
    mukhi: "(14 Mukhi)",
    description: "अंतर्ज्ञान, निर्णय क्षमता और आध्यात्मिक जागरण का प्रतीक।",
    image: "/images/rudraksha-14-mukhi.png",
    deity: "साक्षात भगवान शिव (देवमणि रुद्राक्ष)",
    planet: "शनि ग्रह (Saturn)",
    mantra: "ॐ नमः",
    detailedBenefits: [
      "दिव्य अंतर्ज्ञान (Sixth Sense) व भविष्य की घटनाओं का पूर्वाभास।",
      "सर्वोच्च आध्यात्मिक सुरक्षा और कालसर्प व शनि दोष शांति।",
      "जीवन के अत्यंत जटिल और महत्वपूर्ण निर्णयों में अचूक स्पष्टता।",
    ],
  },
  {
    id: "gauri-shankar",
    hindiName: "गौरी शंकर रुद्राक्ष",
    mukhi: "गौरी शंकर",
    description: "शिव और शक्ति की एकता का प्रतीक, वैवाहिक सुख और रिश्तों में सामंजस्य प्रदान करता है।",
    image: "/images/rudraksha-gauri-shankar.png",
    deity: "भगवान शिव एवं माता पार्वती",
    planet: "चंद्र व शुक्र ग्रह (Moon & Venus)",
    mantra: "ॐ गौरीशंकराय नमः",
    detailedBenefits: [
      "विवाह में आ रहे विलंब, बाधाओं और दोषों का शीघ्र निवारण।",
      "पति-पत्नी के दांपत्य जीवन में अटूट प्रेम, सम्मान और सामंजस्य।",
      "संतान सुख, वंश वृद्धि और घर में अखंड सौभाग्य की स्थापना।",
    ],
  },
  {
    id: "ganesha",
    hindiName: "गणेश रुद्राक्ष",
    mukhi: "गणेश स्वरूप",
    description: "प्राकृतिक सूंड सदृश उभार युक्त, समस्त विघ्नों का नाश व कार्यों में सिद्धि देने वाला।",
    image: "/images/rudraksha-ganesha.png",
    deity: "विघ्नहर्ता भगवान श्री गणेश",
    planet: "बुध व राहु ग्रह शांति",
    mantra: "ॐ गं गणपतये नमः",
    detailedBenefits: [
      "नए व्यापार, विद्या व शुभ कार्यों में आने वाली अड़चनों का नाश।",
      "बुद्धि, विवेक और एकाग्रता में वृद्धि।",
      "रिद्धि-सिद्धि व घर में सकारात्मक वातावरण का निर्माण।",
    ],
  },
];

export default function RudrakshaCatalogGridLeaf() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<RudrakshaCardItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const totalPages = Math.ceil(RUDRAKSHA_PRODUCTS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = RUDRAKSHA_PRODUCTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getWhatsAppUrl = (item: RudrakshaCardItem) => {
    const text = `जय श्री माँ बगलामुखी! पंडित जी, मुझे "${item.hindiName} ${item.mukhi}" के मूल्य, लैब प्रमाणिकता और धारण विधि के बारे में जानकारी चाहिए।`;
    return `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="rudraksha-catalog"
      ref={sectionRef}
      aria-label="प्रामाणिक रुद्राक्ष संग्रह"
      className="relative w-full overflow-hidden bg-[#FAF6EE] py-2 sm:py-4 lg:py-5 border-b border-[#EADCC7]"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ SECTION HEADER: Clean & Left-Aligned ============ */}
        <div className="text-left max-w-3xl mb-5 sm:mb-7">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="h-3.5 sm:h-4 w-1 bg-[#5A2C18] rounded-xs" />
            <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-widest text-[#8C5824]">
              {t({ hi: "100% प्राकृतिक एवं लैब प्रमाणित संग्रह", en: "100% Natural & Lab Certified Collection" })}
            </span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-black text-[#3B1E08] tracking-tight leading-tight">
            {t({ hi: "सिद्ध रुद्राक्ष संग्रह", en: "Energized Rudraksha Collection" })}
          </h2>

          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#6B5A52] leading-relaxed">
            {t({
              hi: "माँ बगलामुखी धाम नलखेड़ा से अभिमंत्रित 1 से 14 मुखी व दुर्लभ रुद्राक्ष। अपनी राशि व समस्या अनुसार सही रुद्राक्ष का चयन करें।",
              en: "Energized 1 to 14 Mukhi and rare divine Rudraksha from Maa Baglamukhi Dham Nalkheda.",
            })}
          </p>
        </div>

        {/* ============ PRODUCT GRID (4 CARDS PER ROW ON BIG SCREENS) ============ */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4.5">
          {currentProducts.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-xl border border-[#EBDCC5] bg-[#FDFBF7] p-3 sm:p-3.5 shadow-[0_2px_10px_rgba(90,44,24,0.03)] hover:border-[#D4AF37] hover:shadow-[0_6px_18px_rgba(90,44,24,0.07)] transition-[border-color,box-shadow]"
            >
              {/* Top Bead Image Container - fills properly with crisp bead */}
              <div className="relative h-28 xs:h-30 sm:h-32 w-full flex items-center justify-center bg-gradient-to-b from-[#FAF4EA]/80 to-[#F5ECE0]/50 rounded-lg p-2 mb-2 border border-[#EFE5D6]/80 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt={`${item.hindiName} ${item.mukhi}`}
                    fill
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
                    className="object-contain drop-shadow-[0_4px_8px_rgba(90,44,24,0.12)] group-hover:scale-108 transition-transform duration-300 ease-out"
                  />
                </div>
              </div>

              {/* Title & Mukhi */}
              <div className="text-center mb-1">
                <h3 className="font-serif text-sm sm:text-[15px] font-black text-[#3B1E08] leading-tight">
                  {item.hindiName}
                </h3>
                <p className="text-[11px] sm:text-xs font-bold text-[#8B5A14] mt-0.5">
                  {item.mukhi}
                </p>
              </div>

              {/* Short Description */}
              <p className="text-[11px] sm:text-[11.5px] text-[#6B5A52] text-center leading-snug px-0.5 mb-2.5 line-clamp-2 min-h-[28px] sm:min-h-[30px]">
                {item.description}
              </p>

              {/* Action Buttons: 1. विवरण देखें + 2. WhatsApp पर पूछें */}
              <div className="space-y-1.5 pt-2 border-t border-[#F0E3D1]">
                {/* View Details Button (Opens Modal) */}
                <button
                  type="button"
                  onClick={() => setSelectedProduct(item)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#F5ECD7] hover:bg-[#EBDDC0] border border-[#E2D2B8] py-1.5 px-2.5 text-xs font-bold text-[#5A2C18] transition-colors cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5 text-[#8B5A14]" />
                  <span>{t({ hi: "विवरण देखें", en: "View Details" })}</span>
                </button>

                {/* WhatsApp Inquiry Button */}
                <a
                  href={getWhatsAppUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#1B6D3E] hover:bg-[#145630] py-1.5 px-2.5 text-xs font-bold text-white transition-colors shadow-xs cursor-pointer"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>{t({ hi: "WhatsApp पर पूछें", en: "Ask on WhatsApp" })}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ============ PAGINATION CONTROLS (8 AT A TIME, FULL 4-COL ROWS) ============ */}
        <div className="mt-6 sm:mt-8 pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E8D8BF]">
          {/* Page Count Info */}
          <p className="text-xs sm:text-[13px] font-semibold text-[#8B5A14]">
            {t({
              hi: `पेज ${currentPage} / ${totalPages} • (कुल ${RUDRAKSHA_PRODUCTS.length} प्रमाणित रुद्राक्ष)`,
              en: `Page ${currentPage} of ${totalPages} • (${RUDRAKSHA_PRODUCTS.length} Certified Rudraksha)`,
            })}
          </p>

          {/* Page Navigation Buttons */}
          <div className="inline-flex items-center gap-1.5">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              aria-label="पिछला पेज"
              className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs sm:text-[13px] font-bold border transition-colors cursor-pointer ${
                currentPage === 1
                  ? "border-[#E5D4BC] bg-stone-100 text-stone-400 cursor-not-allowed"
                  : "border-[#854522] bg-[#FAF3E3] text-[#5A2C18] hover:bg-[#F3E7CE]"
              }`}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>{t({ hi: "पिछला", en: "Prev" })}</span>
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => handlePageChange(pageNum)}
                aria-current={currentPage === pageNum ? "page" : undefined}
                className={`h-8 w-8 rounded-lg text-xs sm:text-[13px] font-bold transition-colors cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-[#5A2C18] text-[#FFF9EE] shadow-xs"
                    : "border border-[#E5D4BC] bg-white text-[#5A2C18] hover:bg-[#FAF3E3]"
                }`}
              >
                {pageNum}
              </button>
            ))}

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              aria-label="अगला पेज"
              className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs sm:text-[13px] font-bold border transition-colors cursor-pointer ${
                currentPage === totalPages
                  ? "border-[#E5D4BC] bg-stone-100 text-stone-400 cursor-not-allowed"
                  : "border-[#854522] bg-[#FAF3E3] text-[#5A2C18] hover:bg-[#F3E7CE]"
              }`}
            >
              <span>{t({ hi: "अगला", en: "Next" })}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ============ POPUP MODAL: "विवरण देखें" DETAILS ============ */}
      {/* ========================================================= */}
      {selectedProduct && (
        <dialog
          open
          aria-label={`${selectedProduct.hindiName} विवरण`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs border-0 w-full h-full max-w-none max-h-none m-0"
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedProduct(null);
          }}
        >
          {/* Backdrop Button to Close */}
          <button
            type="button"
            className="absolute inset-0 cursor-pointer bg-transparent border-0 w-full h-full"
            onClick={() => setSelectedProduct(null)}
            aria-label="बंद करें"
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-2xl lg:max-w-3xl rounded-3xl bg-[#FFFDF9] border border-[#E0D0B6] p-4 sm:p-6 shadow-2xl max-h-[92vh] overflow-y-auto">
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="बंद करें"
              className="absolute top-3.5 right-3.5 h-8 w-8 rounded-full bg-[#5A2C18]/10 hover:bg-[#5A2C18]/20 flex items-center justify-center text-[#5A2C18] transition-colors cursor-pointer z-20"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Grid: 2 Columns on md/lg, responsive stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
              {/* ===== LEFT COLUMN: Product Image, Title, Mukhi, Trust Badge ===== */}
              <div className="md:col-span-5 flex flex-col items-center justify-between bg-gradient-to-b from-[#FAF4EA] to-[#F5ECE0]/60 p-4 sm:p-5 rounded-2xl border border-[#EBDCC5]/80 text-center">
                {/* Trust Badge at top */}
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10.5px] font-bold mb-2">
                  <ShieldCheck className="h-3 w-3 text-emerald-600" />
                  <span>100% प्राकृतिक • सिद्ध</span>
                </div>

                {/* Bead Image */}
                <div className="relative h-32 w-32 xs:h-36 xs:w-36 sm:h-40 sm:w-40 my-1 sm:my-2 flex items-center justify-center">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.hindiName}
                    fill
                    sizes="(max-width: 768px) 144px, 160px"
                    className="object-contain drop-shadow-[0_8px_18px_rgba(90,44,24,0.22)]"
                  />
                </div>

                {/* Title & Mukhi */}
                <div className="mt-1">
                  <h3 className="font-serif text-lg xs:text-xl sm:text-2xl font-black text-[#3B1E08] leading-tight">
                    {selectedProduct.hindiName}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#8B5A14] mt-0.5">
                    {selectedProduct.mukhi}
                  </p>
                </div>
              </div>

              {/* ===== RIGHT COLUMN: Attributes, Detailed Benefits, Action Buttons ===== */}
              <div className="md:col-span-7 flex flex-col justify-between">
                {/* Key Attributes 3-Column Box */}
                <div className="w-full grid grid-cols-3 gap-2 bg-[#FAF4EA] border border-[#E8D8BF] rounded-xl p-2.5 sm:p-3 text-left mb-3">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#8B5A14]">अधिष्ठाता देव</p>
                    <p className="text-[11.5px] font-bold text-[#3B1E08] mt-0.5 leading-tight">
                      {selectedProduct.deity}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#8B5A14]">स्वामी ग्रह</p>
                    <p className="text-[11.5px] font-bold text-[#3B1E08] mt-0.5 leading-tight">
                      {selectedProduct.planet}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#8B5A14]">बीज मंत्र</p>
                    <p className="text-[11.5px] font-bold text-[#8B5A14] mt-0.5 leading-tight">
                      {selectedProduct.mantra}
                    </p>
                  </div>
                </div>

                {/* Detailed Benefits List */}
                <div className="w-full text-left bg-white border border-[#EBDCC5] rounded-xl p-3 sm:p-3.5 mb-3.5 flex-1">
                  <h4 className="font-serif text-xs sm:text-[13px] font-bold text-[#3B1E08] mb-2 border-b border-[#F2E5D5] pb-1 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#8B5A14]" />
                    <span>धार्मिक एवं आध्यात्मिक लाभ</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProduct.detailedBenefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-[#554035] leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8B5A14] mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTAs: WhatsApp + Phone */}
                <div className="w-full flex flex-col xs:flex-row gap-2 pt-1">
                  <a
                    href={getWhatsAppUrl(selectedProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1B6D3E] hover:bg-[#145630] py-2.5 px-3 text-xs sm:text-[13px] font-bold text-white transition-colors shadow-sm cursor-pointer"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>WhatsApp पर पूछें</span>
                  </a>

                  <a
                    href={`tel:+91${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#854522] bg-[#FAF3E3] hover:bg-[#F3E7CE] py-2.5 px-3 text-xs sm:text-[13px] font-bold text-[#5A2C18] transition-colors shadow-xs cursor-pointer"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-[#854522]" />
                    <span>पंडित जी से बात करें</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
