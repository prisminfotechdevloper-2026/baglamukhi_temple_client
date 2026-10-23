import { TranslationPair } from "@/context/LanguageContext";

export interface MandirArticleSection {
  id: string;
  shortPill: TranslationPair;
  h2: TranslationPair;
  paragraphs: TranslationPair[];
}

export const mandirHeader = {
  label: { hi: "मंदिर", en: "Mandir" },
  title: {
    hi: "माँ बगलामुखी मंदिर, नलखेड़ा",
    en: "Maa Baglamukhi Temple, Nalkheda",
  },
  standfirst: {
    hi: "लखुन्दर नदी के किनारे बसा नलखेड़ा का यह मंदिर देश के प्राचीन सिद्धपीठों में गिना जाता है, जहाँ तंत्र-साधना और हवन की परंपरा सदियों से चली आ रही है।",
    en: "Situated on the sacred banks of Lakhundar River, this ancient Siddhapeeth of Nalkheda is revered across India for centuries of authentic Tantra Sadhana, Vedic Hawan rituals, and miraculous divine blessings.",
  },
  dateline: {
    hi: "नलखेड़ा, आगर-मालवा, मध्यप्रदेश",
    en: "Nalkheda, Agar-Malwa, Madhya Pradesh",
  },
  leadImage: {
    src: "/images/baglamukhi-mandir-real.webp",
    alt: {
      hi: "माँ बगलामुखी मंदिर नलखेड़ा शिखर एवं सिंहद्वार",
      en: "Maa Baglamukhi Temple Nalkheda Sanctum & Main Gate",
    },
  },
};

export const mandirStatsRibbonData = [
  {
    iconName: "Landmark",
    title: { hi: "प्राचीन सिद्धपीठ", en: "Ancient Siddhapeeth" },
    subtitle: { hi: "महाभारत कालीन मान्यता", en: "Mahabharata Era Lore" },
    desc: {
      hi: "देश के सर्वाधिक प्रतिष्ठित व जाग्रत तांत्रिक सिद्धपीठों में परिगणित।",
      en: "Ranked among India's most prestigious and spiritually active Tantric Siddhapeeths.",
    },
  },
  {
    iconName: "Compass",
    title: { hi: "पावन नदी तट", en: "Sacred Riverbank" },
    subtitle: { hi: "लखुन्दर नदी संगम", en: "Lakhundar River Confluence" },
    desc: {
      hi: "शांत व पवित्र लखुन्दर नदी के पावन तट पर स्थित अलौकिक तपोभूमि।",
      en: "A divine hermitage situated on the peaceful and sacred banks of the Lakhundar River.",
    },
  },
  {
    iconName: "ShieldCheck",
    title: { hi: "स्वयंभू त्रिमुखी स्वरूप", en: "Swayambhu Trishakti" },
    subtitle: { hi: "त्रिशक्ति माता", en: "Three Sacred Forms" },
    desc: {
      hi: "माँ बगलामुखी के संग महालक्ष्मी व महासरस्वती की दिव्य उपस्थिति।",
      en: "Divine presence of Mahalakshmi and Mahasaraswati alongside Maa Baglamukhi.",
    },
  },
  {
    iconName: "MapPin",
    title: { hi: "उज्जैन से 105 किमी", en: "105 km from Ujjain" },
    subtitle: { hi: "सुगम सड़क संपर्क", en: "Seamless Road Route" },
    desc: {
      hi: "उज्जैन, आगर, कोटा एवं इंदौर से सीधा व सुगम पक्का मार्ग।",
      en: "Direct, smooth highway access from Ujjain, Agar, Kota, and Indore.",
    },
  },
];

export const mandirArticlesMeta = {
  eyebrow: {
    hi: "श्री माँ बगलामुखी नलखेड़ा तीर्थ • विस्तृत प्रामाणिक आलेख",
    en: "Shree Maa Baglamukhi Nalkheda Peeth • Authentic Comprehensive Chronicle",
  },
  chapterCount: {
    hi: "५ पावन अध्याय • संपूर्ण विवरण",
    en: "5 Sacred Chapters • Complete Chronicle",
  },
  tocLabel: {
    hi: "विषय सूची:",
    en: "Table of Contents:",
  },
  chapterPrefix: {
    hi: "अध्याय",
    en: "Chapter",
  },
  pullQuote: {
    hi: "यहाँ माँ त्रिशक्ति स्वरूप में विराजमान मानी जाती हैं।",
    en: "Here, the Supreme Mother resides in Her rare and powerful Trishakti manifestation.",
  },
};

export const mandirArticlesSections: MandirArticleSection[] = [
  {
    id: "who-is-goddess",
    shortPill: { hi: "१. माँ का स्वरूप", en: "1. Divine Form" },
    h2: { hi: "माँ बगलामुखी कौन हैं", en: "Who is Goddess Baglamukhi" },
    paragraphs: [
      {
        hi: "माँ बगलामुखी दस महाविद्याओं में आठवीं महाविद्या मानी जाती हैं। पीले रंग से जुड़े होने के कारण उन्हें पीताम्बरा देवी भी कहा जाता है। मान्यता है कि वे वाणी, शत्रु-बाधा और संकटों को स्तंभित कर अपने भक्तों की रक्षा करती हैं।",
        en: "Maa Baglamukhi is revered as the eighth Mahavidya among the Ten Mahavidyas. Associated with the sacred yellow color, She is affectionately known as Pitambara Devi. It is believed that She paralyzes speech, overcomes hostile forces, and eliminates adversities to protect Her devoted followers.",
      },
      {
        hi: "कथा के अनुसार, जगत को एक भीषण तूफ़ान से बचाने के लिए भगवान विष्णु ने हरिद्रा सरोवर के पास तपस्या की और वहीं माँ प्रकट हुईं। एक अन्य कथा में मदन नामक असुर को वरदान मिला था कि वह जो कहे वही हो जाए, तब माँ ने उसकी वाणी को स्तंभित कर दिया। ये कथाएँ अलग-अलग ग्रंथों और परंपराओं में भिन्न रूपों में मिलती हैं।",
        en: "According to sacred lore, to rescue the cosmos from a catastrophic storm, Lord Vishnu performed intense penance beside Haridra Sarovar, where Maa Baglamukhi manifested in Her golden radiance. In another legend, a demon named Madan possessed a boon that whatever he uttered would materialize, whereafter Maa immobilized his tongue and speech. These profound legends are celebrated across classical Vedic scriptures and Shakta traditions.",
      },
    ],
  },
  {
    id: "legend-history",
    shortPill: { hi: "२. पौराणिक कथा", en: "2. Mythological Legends" },
    h2: { hi: "मंदिर की कथा और मान्यता", en: "Temple Lore & Sacred Legends" },
    paragraphs: [
      {
        hi: "लोक-मान्यता है कि महाभारत काल में भगवान श्रीकृष्ण की सलाह पर युधिष्ठिर ने युद्ध में विजय के लिए यहाँ माँ की उपासना की और प्रतिमा की स्थापना की। इस बात का कोई लिखित या पुरातात्विक प्रमाण उपलब्ध नहीं है, यह श्रद्धा और परंपरा की बात है।",
        en: "Popular belief holds that during the Mahabharata era, guided by Lord Krishna, King Yudhishthira worshiped Maa Baglamukhi here and established Her deity to attain triumphant victory in the Kurukshetra war. Deeply rooted in age-old devotion and oral tradition, this lore has inspired pilgrims for generations.",
      },
      {
        hi: "बगलामुखी के तीन प्राचीन माने जाने वाले स्थलों में नलखेड़ा, दतिया और कांगड़ा (बनखंडी) की गिनती की जाती है।",
        en: "Among the three ancient and most revered seats of Maa Baglamukhi across India, Nalkheda Siddhapeeth is celebrated alongside Datia (M.P.) and Bankhandi Kangra (H.P.).",
      },
    ],
  },
  {
    id: "temple-form",
    shortPill: { hi: "३. मंदिर स्वरूप", en: "3. Temple Architecture" },
    h2: { hi: "मंदिर का स्वरूप", en: "Temple Architecture & Divine Form" },
    paragraphs: [
      {
        hi: "मान्यता के अनुसार यहाँ की प्रतिमा स्वयंभू है और तीन मुखों वाली मानी जाती है, इसलिए माँ को त्रिशक्ति माता भी कहा जाता है। माँ बगलामुखी के साथ माँ लक्ष्मी और माँ सरस्वती की उपस्थिति भी मानी जाती है।",
        en: "According to tradition, the idol here is self-manifested (Swayambhu) and features three sacred faces, hence celebrated as Trishakti Mata. In this sanctum, Goddess Mahalakshmi and Goddess Mahasaraswati are harmoniously embodied alongside Maa Baglamukhi.",
      },
      {
        hi: "मंदिर परिसर में भैरव, हनुमान और श्रीकृष्ण के विग्रह भी स्थापित हैं। मंदिर लखुन्दर नदी के तट पर स्थित है।",
        en: "Within the sacred temple complex, guardian shrines of Lord Bhairav, Lord Hanuman, and Lord Krishna are established. The temple complex is serenely nestled along the holy banks of the Lakhundar River.",
      },
    ],
  },
  {
    id: "sadhana-tradition",
    shortPill: { hi: "४. साधना व हवन", en: "4. Sadhana & Hawan" },
    h2: { hi: "साधना और हवन परंपरा", en: "Sadhana & Hawan Traditions" },
    paragraphs: [
      {
        hi: "यह स्थान तंत्र-साधना का केंद्र माना जाता है। यहाँ श्रद्धालु विजय और मनोकामना की भावना से यज्ञ, हवन और पूजा-पाठ कराते हैं। मिर्ची हवन यहाँ की प्रसिद्ध परंपराओं में गिना जाता है। अनुष्ठान के लिए देश-विदेश से श्रद्धालु यहाँ आते हैं।",
        en: "Nalkheda is renowned as a premier sanctum for authentic Vedic sadhana. Devotees and dignitaries from all across India and abroad perform solemn Yagyas, Mahahawans, and Anushthans to overcome court disputes, enemy impediments, and planetary afflictions. The sacred Mirchi Hawan and Peetambara Hawan are among its most venerated traditions.",
      },
    ],
  },
  {
    id: "festivals",
    shortPill: { hi: "५. प्रमुख पर्व", en: "5. Major Festivals" },
    h2: { hi: "प्रमुख पर्व", en: "Major Festivals & Celebrations" },
    paragraphs: [
      {
        hi: "वैशाख मास में मनाई जाने वाली बगलामुखी जयंती यहाँ का सबसे प्रमुख पर्व है। नवरात्रि में भी बड़ी संख्या में श्रद्धालु दर्शन के लिए पहुँचते हैं।",
        en: "Celebrated during the Shukla Paksha of the Vaishakha month, Maa Baglamukhi Jayanti is the pinnacle festival here. Both Chaitra and Sharadiya Navratri witness thousands of devotees arriving for darshan, special aartis, and night-long hawan ceremonies.",
      },
    ],
  },
];

export const mandirFactBox = {
  badge: { hi: "प्रामाणिक तथ्य", en: "AUTHENTIC FACTS" },
  title: { hi: "एक नज़र में", en: "At a Glance" },
  tag: { hi: "नलखेड़ा धाम", en: "Nalkheda Dham" },
  facts: [
    {
      label: { hi: "स्थान", en: "Location" },
      value: {
        hi: "शासकीय माँ बगलामुखी सिद्धपीठ, नलखेड़ा, जिला - आगर मालवा (म.प्र.) - 465445",
        en: "Govt. Shree Maa Baglamukhi Siddhapeeth, Nalkheda, Dist - Agar Malwa (M.P.) - 465445",
      },
    },
    {
      label: { hi: "नदी तट", en: "River Bank" },
      value: { hi: "लखुन्दर नदी", en: "Lakhundar River" },
    },
    {
      label: { hi: "उज्जैन से दूरी", en: "Distance from Ujjain" },
      value: { hi: "लगभग 105 किमी", en: "Approx. 105 km" },
    },
    {
      label: { hi: "देवी स्वरूप", en: "Deity Manifestation" },
      value: {
        hi: "त्रिशक्ति (स्वयंभू प्रतिमा, मान्यता के अनुसार)",
        en: "Trishakti (Self-Manifested Swayambhu Idol)",
      },
    },
    {
      label: { hi: "अन्य विग्रह", en: "Other Shrines" },
      value: {
        hi: "भैरव, हनुमान, श्रीकृष्ण",
        en: "Bhairav, Hanuman, Shri Krishna",
      },
    },
    {
      label: { hi: "प्रमुख पर्व", en: "Major Festivals" },
      value: {
        hi: "बगलामुखी जयंती (वैशाख), नवरात्रि",
        en: "Baglamukhi Jayanti (Vaishakh), Navratri",
      },
    },
  ],
  consultation: {
    badge: { hi: "दर्शन व अनुष्ठान परामर्श", en: "Darshan & Puja Guidance" },
    priest: {
      hi: "पं. दीपक शर्मा (मुख्य पुजारी) • नलखेड़ा",
      en: "Pt. Deepak Sharma (Head Priest) • Nalkheda",
    },
    callBtn: { hi: "सीधा कॉल", en: "Direct Call" },
    waBtn: { hi: "व्हाट्सएप", en: "WhatsApp" },
    mapBtn: {
      hi: "गूगल मैप्स पर सटीक लोकेशन देखें →",
      en: "View Exact Location on Google Maps →",
    },
  },
};

export const mandirTimelineData = {
  badge: { hi: "ऐतिहासिक कालक्रम", en: "HISTORICAL TIMELINE" },
  title: { hi: "इतिहास एक नज़र में", en: "History & Heritage at a Glance" },
  subtitle: {
    hi: "पौराणिक काल से लेकर वर्तमान समय तक माँ बगलामुखी नलखेड़ा तीर्थ की मान्यता एवं विकास",
    en: "Evolution and sacred legends of Shree Maa Baglamukhi Nalkheda from mythological eras to the present day.",
  },
  stagePrefix: { hi: "चरण 0", en: "Stage 0" },
  category: { hi: "कालक्रम", en: "Chronology" },
  footer: { hi: "ऐतिहासिक परंपरा", en: "Historical Tradition" },
  events: [
    {
      period: { hi: "पौराणिक काल", en: "Mythological Era" },
      text: {
        hi: "दस महाविद्याओं में माँ बगलामुखी का स्थान। हरिद्रा सरोवर और मदन असुर की कथाएँ (कथा के अनुसार)।",
        en: "Maa Baglamukhi's sacred emergence as the 8th Mahavidya, manifesting at Haridra Sarovar to paralyze destructive cosmic forces.",
      },
    },
    {
      period: { hi: "महाभारत काल", en: "Mahabharata Era" },
      text: {
        hi: "श्रीकृष्ण की सलाह और युधिष्ठिर द्वारा उपासना की लोक-मान्यता।",
        en: "Legendary worship and idol consecration by Dharmaraj Yudhishthira under Lord Krishna's guidance before the Kurukshetra War.",
      },
    },
    {
      period: { hi: "मध्यकाल एवं वर्तमान", en: "Medieval to Modern Era" },
      text: {
        hi: "तंत्र-साधना और हवन परंपरा का केंद्र बनने की मान्यता। लाखों श्रद्धालुओं की आस्था का जाग्रत सिद्धपीठ।",
        en: "Evolution as India's premier Tantric Siddhapeeth with an unbroken lineage of authentic Vedic Hawans, attracting devotees worldwide.",
      },
    },
  ],
};

export const mandirHowToReachData = {
  badge: { hi: "तीर्थ यात्रा मार्गदर्शन", en: "PILGRIMAGE TRAVEL GUIDE" },
  title: { hi: "कैसे पहुँचें (मार्गदर्शन)", en: "How to Reach Nalkheda" },
  subtitle: {
    hi: "देश के किसी भी कोने से श्री माँ बगलामुखी सिद्धपीठ नलखेड़ा पहुँचने के सुगम साधन",
    en: "Convenient travel options to reach Shree Maa Baglamukhi Siddhapeeth Nalkheda from across India.",
  },
  routes: [
    {
      mode: { hi: "सड़क मार्ग (By Road)", en: "By Road (Highway Route)" },
      highlight: { hi: "उज्जैन-आगर-नलखेड़ा रूट", en: "Ujjain - Agar - Nalkheda Route" },
      detail: {
        hi: "उज्जैन से लगभग 105 किमी, इंदौर से 160 किमी एवं आगर-मालवा से 35 किमी। पक्का एवं सुगम राजमार्ग उपलब्ध है।",
        en: "Approx. 105 km from Ujjain, 160 km from Indore, and 35 km from Agar-Malwa. Excellent 4-lane state highway and well-connected roads.",
      },
    },
    {
      mode: { hi: "रेल मार्ग (By Train)", en: "By Train (Railway Junctions)" },
      highlight: { hi: "उज्जैन या मक्सी स्टेशन", en: "Ujjain or Maksi Junction" },
      detail: {
        hi: "निकटतम प्रमुख रेलवे जंक्शन उज्जैन (105 किमी), मक्सी (70 किमी) या झालावाड़ रोड स्टेशन हैं, जहाँ से टैक्सी/बस सहज उपलब्ध हैं।",
        en: "Nearest major railway stations are Ujjain Junction (105 km), Maksi (70 km), and Jhalawar Road, with round-the-clock taxi and bus connections.",
      },
    },
    {
      mode: { hi: "वायु मार्ग (By Air)", en: "By Air (Airport Connectivity)" },
      highlight: { hi: "इंदौर एयरपोर्ट (IDR)", en: "Indore Airport (IDR)" },
      detail: {
        hi: "निकटतम हवाई अड्डा 'देवी अहिल्याबाई होल्कर अंतरराष्ट्रीय हवाई अड्डा, इंदौर' (लगभग 165 किमी) है, जहाँ से सीधी टैक्सी उपलब्ध है।",
        en: "Nearest airport is Devi Ahilyabai Holkar International Airport in Indore (approx. 165 km), offering direct domestic flights and taxi rentals.",
      },
    },
  ],
  mapCard: {
    title: { hi: "सीधे नेविगेशन से मंदिर पहुंचें", en: "Navigate Directly to Temple" },
    address: {
      hi: "शासकीय माँ बगलामुखी सिद्धपीठ, नलखेड़ा, जिला - आगर मालवा (म.प्र.) - 465445",
      en: "Govt. Shree Maa Baglamukhi Siddhapeeth, Nalkheda, Dist - Agar Malwa (M.P.) - 465445",
    },
    btn: { hi: "Google Maps पर देखें →", en: "View on Google Maps →" },
  },
};

export const mandirTraditionNoticeData = {
  traditionNote: {
    hi: "परंपरा और मान्यता के अनुसार नलखेड़ा मंदिर की स्थापना महाभारत काल से मानी जाती है। मंदिर दर्शन, हवन-अनुष्ठान और परंपरा संबंधी अधिकृत जानकारी हेतु मंदिर परिसर अथवा मुख्य पुरोहित जी से मार्गदर्शन प्राप्त करें।",
    en: "According to tradition and sacred belief, Nalkheda temple traces its spiritual roots to the Mahabharata era. For official darshan timings, authentic Hawan Anushthan, and ritual guidance, kindly consult the temple sanctum or Chief Priest Pt. Deepak Sharma Ji.",
  },
  ribbon: {
    badge: { hi: "माँ बगलामुखी नलखेड़ा तीर्थ दर्शन", en: "MAA BAGLAMUKHI NALKHEDA PILGRIMAGE" },
    title: {
      hi: "मंदिर दर्शन एवं अनुष्ठान हेतु संपर्क करें",
      en: "Contact for Mandir Darshan & Vedic Rituals",
    },
    desc: {
      hi: "माँ पीताम्बरा बगलामुखी जी के पावन धाम नलखेड़ा में दर्शन समय, विशेष हवन एवं पूजन व्यवस्था के लिए सीधे पंडित दीपक शर्मा जी से संपर्क करें।",
      en: "For darshan timings, special hawan dakshina, and ritual arrangements at Maa Baglamukhi Dham Nalkheda, contact Pt. Deepak Sharma Ji directly.",
    },
    callBtn: "+91 72240 83313",
    waBtn: { hi: "व्हाट्सएप पर संपर्क करें", en: "Contact via WhatsApp" },
  },
};
