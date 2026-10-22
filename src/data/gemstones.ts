/**
 * 10 Authentic Lab-Certified Vedic Gemstones (Navratna) Dataset
 * Maa Baglamukhi Siddhapeeth Nalkheda
 */

export interface GemstoneItem {
  id: string;
  nameHi: string;
  nameEn: string;
  planetHi: string;
  planetEn: string;
  summaryHi: string;
  summaryEn: string;
  image: string;
  rashi: string;
  metal: string;
  finger: string;
  day: string;
  mantra: string;
  benefits: string[];
}

export const GEMSTONES_DATA: GemstoneItem[] = [
  {
    id: "ruby",
    nameHi: "माणिक",
    nameEn: "Ruby",
    planetHi: "सूर्य",
    planetEn: "Sun",
    summaryHi: "आत्मविश्वास, नेतृत्व और मान-सम्मान में वृद्धि करता है।",
    summaryEn: "Enhances confidence, leadership skills and social prestige.",
    image: "/images/gemstones/ruby-isolated.png",
    rashi: "सिंह (Leo)",
    metal: "तांबा (Copper) / स्वर्ण (Gold)",
    finger: "अनामिका (Ring Finger)",
    day: "रविवार (Sunday प्रातःकाल)",
    mantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः",
    benefits: [
      "सरकारी नौकरी, प्रशासनिक पद और नेतृत्व क्षमता में वृद्धि।",
      "हृदय, हड्डियों और नेत्र ज्योति के लिए शुभ फलदायी।",
      "पिता के साथ संबंधों में सुधार और मान-सम्मान में वृद्धि।",
    ],
  },
  {
    id: "pearl",
    nameHi: "मोती",
    nameEn: "Pearl",
    planetHi: "चंद्रमा",
    planetEn: "Moon",
    summaryHi: "मानसिक शांति, भावनात्मक संतुलन और स्वास्थ्य के लिए लाभकारी है।",
    summaryEn: "Brings mental peace, emotional harmony and sound health.",
    image: "/images/gemstones/pearl-isolated.png",
    rashi: "कर्क (Cancer)",
    metal: "चांदी (Silver)",
    finger: "कनिष्ठिका (Little Finger)",
    day: "सोमवार (Monday प्रातःकाल)",
    mantra: "ॐ श्रां श्रीं श्रौं सः चंद्रमसे नमः",
    benefits: [
      "अनिद्रा, तनाव, अवसाद और अत्यधिक क्रोध से तत्काल राहत।",
      "माता के स्वास्थ्य और संबंधों में स्नेह व अनुकूलता।",
      "एकाग्रता, रचनात्मकता और अंतःप्रेरणा में वृद्धि।",
    ],
  },
  {
    id: "coral",
    nameHi: "मूँगा",
    nameEn: "Red Coral",
    planetHi: "मंगल",
    planetEn: "Mars",
    summaryHi: "साहस, ऊर्जा और नकारात्मक ऊर्जा से रक्षा करता है।",
    summaryEn: "Imparts courage, vital energy and protection from negative forces.",
    image: "/images/gemstones/coral-isolated.png",
    rashi: "मेष, वृश्चिक (Aries, Scorpio)",
    metal: "तांबा / पीतल / सोना",
    finger: "अनामिका (Ring Finger)",
    day: "मंगलवार (Tuesday प्रातःकाल)",
    mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः",
    benefits: [
      "मांगलिक दोष शांति और रक्त संबंधी विकारों से मुक्ति।",
      "भूमि, भवन, अचल संपत्ति और पुलिस/सेना में सफलता।",
      "आत्मविश्वास, शारीरिक बल और शत्रुओं पर विजय।",
    ],
  },
  {
    id: "emerald",
    nameHi: "पन्ना",
    nameEn: "Emerald",
    planetHi: "बुध",
    planetEn: "Mercury",
    summaryHi: "बुद्धि, वाणी, एकाग्रता और व्यापार में सफलता देता है।",
    summaryEn: "Bestows sharp intellect, eloquent speech and business success.",
    image: "/images/gemstones/emerald-isolated.png",
    rashi: "मिथुन, कन्या (Gemini, Virgo)",
    metal: "स्वर्ण / कांसा / चांदी",
    finger: "कनिष्ठिका (Little Finger)",
    day: "बुधवार (Wednesday प्रातःकाल)",
    mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः",
    benefits: [
      "व्यापार, कॉमर्स, शेयर बाजार और संचार में अप्रत्याशित सफलता।",
      "वाणी का प्रभाव, वाकपटुता और तीव्र स्मरण शक्ति।",
      "त्वचा, स्नायु तंत्र और श्वसन रोगों में शांति।",
    ],
  },
  {
    id: "yellow-sapphire",
    nameHi: "पुखराज",
    nameEn: "Yellow Sapphire",
    planetHi: "बृहस्पति",
    planetEn: "Jupiter",
    summaryHi: "धन, ज्ञान, विवाह और संतान सुख में सहायक है।",
    summaryEn: "Attracts wealth, spiritual wisdom, marriage harmony and progeny.",
    image: "/images/gemstones/yellow-sapphire-isolated.png",
    rashi: "धनु, मीन (Sagittarius, Pisces)",
    metal: "स्वर्ण (Gold) / पीतल",
    finger: "तर्जनी (Index Finger)",
    day: "गुरुवार (Thursday प्रातःकाल)",
    mantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः",
    benefits: [
      "विवाह में आ रहे विलंब व बाधाओं का निवारण और दांपत्य सुख।",
      "उच्च शिक्षा, प्रशासनिक परीक्षाओं और आध्यात्मिक ज्ञान में वृद्धि।",
      "आर्थिक संपन्नता, मान-सम्मान और संतान सुख में सहायक।",
    ],
  },
  {
    id: "diamond",
    nameHi: "हीरा",
    nameEn: "Diamond",
    planetHi: "शुक्र",
    planetEn: "Venus",
    summaryHi: "सौंदर्य, प्रेम और भौतिक सुख-समृद्धि प्रदान करता है।",
    summaryEn: "Bestows luxury, aesthetic beauty, love and worldly prosperity.",
    image: "/images/gemstones/diamond-isolated.png",
    rashi: "वृषभ, तुला (Taurus, Libra)",
    metal: "सफेद सोना / प्लेटिनम / चांदी",
    finger: "मध्यमा / अनामिका",
    day: "शुक्रवार (Friday प्रातःकाल)",
    mantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः",
    benefits: [
      "आकर्षण, कला, अभिनय, मॉडलिंग और लग्जरी जीवन में उन्नति।",
      "वैवाहिक जीवन में प्रेम, सामंजस्य और मधुरता।",
      "आर्थिक संपन्नता, वाहन सुख और वैभव में सतत वृद्धि।",
    ],
  },
  {
    id: "blue-sapphire",
    nameHi: "नीलम",
    nameEn: "Blue Sapphire",
    planetHi: "शनि",
    planetEn: "Saturn",
    summaryHi: "कर्म में सफलता, स्थिरता और बाधाओं से मुक्ति देता है।",
    summaryEn: "Grants rapid success in career, stability and removal of obstacles.",
    image: "/images/gemstones/blue-sapphire-isolated.png",
    rashi: "मकर, कुंभ (Capricorn, Aquarius)",
    metal: "पंचधातु / अष्टधातु / चांदी",
    finger: "मध्यमा (Middle Finger)",
    day: "शनिवार (Saturday सायंकाल)",
    mantra: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः",
    benefits: [
      "शनि की साढ़ेसाती व ढैय्या के दुष्प्रभावों से अभय रक्षा।",
      "त्वरित वित्तीय लाभ, न्याय और कानूनी विवादों में विजय।",
      "कठिन परिश्रम का पूर्ण फल और दीर्घकालिक लक्ष्यों की सिद्धि।",
    ],
  },
  {
    id: "hessonite",
    nameHi: "गोमेद",
    nameEn: "Hessonite",
    planetHi: "राहु",
    planetEn: "Rahu",
    summaryHi: "भ्रम, मानसिक तनाव और अनिश्चितताओं से राहत देता है।",
    summaryEn: "Dispels illusions, mental anxiety and brings sudden financial gains.",
    image: "/images/gemstones/hessonite-isolated.png",
    rashi: "राहु महादशा / अंतर्दशा",
    metal: "अष्टधातु / चांदी",
    finger: "मध्यमा (Middle Finger)",
    day: "शनिवार (Saturday रात्रिकाल)",
    mantra: "ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः",
    benefits: [
      "अज्ञात भय, मानसिक अशांति और डिप्रेशन का शमन।",
      "राजनीति, सट्टा, आयात-निर्यात और आकस्मिक धन लाभ।",
      "कालसर्प दोष और प्रेत बाधाओं से सुरक्षा।",
    ],
  },
  {
    id: "cats-eye",
    nameHi: "लहसुनिया",
    nameEn: "Cat's Eye",
    planetHi: "केतु",
    planetEn: "Ketu",
    summaryHi: "अचानक संकटों से रक्षा और आध्यात्मिक उन्नति में सहायक है।",
    summaryEn: "Shields against unexpected crises and accelerates spiritual progress.",
    image: "/images/gemstones/cats-eye-isolated.png",
    rashi: "केतु महादशा / अंतर्दशा",
    metal: "पंचधातु / चांदी",
    finger: "कनिष्ठिका / मध्यमा",
    day: "मंगलवार / गुरुवार (रात्रिकाल)",
    mantra: "ॐ स्त्रां स्त्रीं स्त्रौं सः केतवे नमः",
    benefits: [
      "अचानक होने वाली दुर्घटनाओं, गुप्त शत्रुओं और तंत्र बाधा से रक्षा।",
      "ध्यान, मोक्ष साधना, छठी इंद्री (Intuition) में तीव्रता।",
      "व्यापार या सट्टे में हुए अचानक बड़े नुकसान की भरपाई।",
    ],
  },
  {
    id: "navratna",
    nameHi: "नवरत्न",
    nameEn: "Navratna",
    planetHi: "सभी ग्रह",
    planetEn: "All Planets",
    summaryHi: "नौ ग्रहों की संतुलित ऊर्जा के लिए अत्यंत शुभ और शक्तिशाली संयोजन।",
    summaryEn: "A powerful combination that balances the energies of all 9 planets.",
    image: "/images/gemstones/navratna-isolated.png",
    rashi: "सभी राशियां (Sarva Rashi)",
    metal: "अष्टधातु / पंचधातु / स्वर्ण",
    finger: "अनामिका / लॉकेट रूप में",
    day: "रविवार / शुभ मुहूर्त",
    mantra: "ॐ ब्रह्मा मुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च गुरुश्च शुक्रः शनि राहु केतवः सर्वे ग्रहाः शान्तिकरा भवन्तु",
    benefits: [
      "समस्त 9 नवग्रहों की शांति और संतुलित ऊर्जा का प्रवाह।",
      "किसी भी विपरीत ग्रह दशा के दुष्प्रभावों का शमन।",
      "पारिवारिक सुख, आरोग्य, आयु वृद्धि और सर्वांगीण समृद्धि।",
    ],
  },
];
