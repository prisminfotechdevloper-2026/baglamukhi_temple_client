"use client";

import { useState, useEffect } from "react";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/data/siteConfig";
import {
  Flame,
  Scroll,
  Compass,
  Scale,
  TrendingUp,
  HeartHandshake,
  Moon,
  Video,
  ShieldCheck,
  CheckCircle2,
  Clock,
  PhoneCall,
  MessageCircle,
  X,
  ArrowRight,
  Info,
  Calendar,
  Layers,
  Search,
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  category: "hawan" | "jaap" | "jyotish" | "esankalp";
  categoryLabel: string;
  title: string;
  badge: string;
  shortDesc: string;
  significance: string;
  duration: string;
  mantraCount: string;
  samagri: string;
  idealFor: string;
  prasad: string;
  icon: typeof Flame;
}

const servicesData: ServiceDetail[] = [
  // ================= CATEGORY 1: HAWAN & TANTRA ANUSHTHAN =================
  {
    id: "shatru-badha-hawan",
    category: "hawan",
    categoryLabel: "महाहवन व अनुष्ठान",
    title: "माँ बगलामुखी शत्रु बाधा एवं तंत्र निवारण महाहवन",
    badge: "मुख्य तांत्रिक अनुष्ठान",
    shortDesc:
      "अकारण शत्रुता, तंत्र-बाधा, गुप्त षड्यंत्र एवं ईर्ष्या से स्थायी सुरक्षा हेतु माँ पीताम्बरा का सर्वोच्च स्तम्भन हवन।",
    significance:
      "माँ बगलामुखी को शत्रुओं की वाक् एवं बुद्धि स्तम्भित करने वाली अधिष्ठात्री माना गया है। यह महाहवन विरोधियों के प्रभाव को शून्य कर यजमान के चारों ओर सुरक्षा कवच स्थापित करता है।",
    duration: "1 से 3 दिवस (शुभ नक्षत्र अनुसार)",
    mantraCount: "36,000 अथवा सवा लाख (1,25,000) जप",
    samagri: "पीली सरसों, हल्दी की गांठें, विशेष तांत्रिक समिधा, कमल गट्टा, शुद्ध गाय का घी व पीताम्बरा धूप।",
    idealFor: "राजनीतिक, व्यापारिक या व्यक्तिगत जीवन में गुप्त शत्रुओं व तंत्र बाधा से पीड़ित यजमान।",
    prasad: "सिद्ध पीताम्बरा रक्षा सूत्र, अभिमंत्रित भस्म एवं रक्षा ताबीज।",
    icon: Flame,
  },
  {
    id: "court-case-vijay",
    category: "hawan",
    categoryLabel: "महाहवन व अनुष्ठान",
    title: "कोर्ट-कचहरी, मुकदमा एवं विवाद विजय अनुष्ठान",
    badge: "विशेष स्तम्भन कर्म",
    shortDesc:
      "झूठे आरोपों, भूमि-संपत्ति विवाद, पारिवारिक मुकदमों एवं कानूनी उलझनों में सत्य व न्याय की विजय हेतु।",
    significance:
      "माँ बगलामुखी का स्तम्भन रूप न्याय व्यवस्था में विरोधी पक्ष के कुतर्कों व झूठे प्रमाणों को प्रभावहीन कर यजमान को न्यायालयीन विजय दिलाता है।",
    duration: "3 दिवसीय विशेष अनुष्ठान",
    mantraCount: "51,000 मंत्र जाप एवं दशांश हवन",
    samagri: "भोजपत्र, अष्टगंध, पीली कौड़ियां, हल्दी, राई, पीत चंदन व विशेष हवन औषधियां।",
    idealFor: "लंबे समय से कोर्ट-कचहरी व कानूनी मुकदमों में फंसे व्यक्ति एवं व्यापारी।",
    prasad: "अभिमंत्रित विजय यंत्र, रक्षा सूत्र एवं माँ के चरणों में अर्पित प्रसाद।",
    icon: Scale,
  },
  {
    id: "vyapar-dhan-laxmi",
    category: "hawan",
    categoryLabel: "महाहवन व अनुष्ठान",
    title: "व्यापार वृद्धि, धनलक्ष्मी एवं कर्ज मुक्ति महाहवन",
    badge: "समृद्धि व आकर्षण",
    shortDesc:
      "व्यापार में निरंतर घाटा, दुकान में ग्राहकों की कमी, रुका हुआ धन एवं भारी कर्ज से मुक्ति हेतु कनकधारा हवन।",
    significance:
      "माँ बगलामुखी एवं महालक्ष्मी का संयुक्त विधान व्यापार स्थल की नकारात्मक ऊर्जा का नाश कर निरंतर धन-वृद्धि व साख मजबूत करता है।",
    duration: "1 दिवस (3 से 4 घंटे की विशेष आहुति)",
    mantraCount: "21,000 मंत्र एवं श्री सूक्त संपूटित आहुतियां",
    samagri: "कमल के पुष्प, शुद्ध शहद, खीर, हल्दी, पीताम्बरा समिधा व गाय का घी।",
    idealFor: "दुकानदार, उद्योगपति, रियल एस्टेट एवं कर्ज से परेशान व्यापारी।",
    prasad: "सिद्ध व्यापार वृद्धि यंत्र, पीली कौड़ियां एवं अभिमंत्रित महालक्ष्मी भस्म।",
    icon: TrendingUp,
  },
  {
    id: "sarva-karya-siddhi",
    category: "hawan",
    categoryLabel: "महाहवन व अनुष्ठान",
    title: "सर्व कार्य सिद्धि एवं अखंड बाधा निवारण महाहवन",
    badge: "सर्व मनोकामना पूर्ति",
    shortDesc:
      "हर बनते काम का अंतिम समय में बिगड़ना, विवाह में अड़चनें, संतान बाधा एवं जीवन में गतिरोध दूर करने हेतु।",
    significance:
      "यह सर्वतोभद्र विधान जीवन के सभी क्षेत्रों में आ रही अदृश्य रुकावटों को जड़ से समाप्त कर सफलता के मार्ग प्रशस्त करता है।",
    duration: "1 से 2 दिवस",
    mantraCount: "21,000 मंत्र जाप",
    samagri: "पंचमेवा, पीत द्रव्य, गुग्गल, लोबान, शुद्ध घृत एवं नौ प्रकार की औषधियां।",
    idealFor: "कैरियर में रुकावट, विवाह में अकारण देरी एवं पारिवारिक कलह से पीड़ित जन।",
    prasad: "रक्षा कवच, सिद्ध सिंदूर एवं चरणामृत प्रसाद।",
    icon: ShieldCheck,
  },

  // ================= CATEGORY 2: AKHAND JAAP VIDHAN =================
  {
    id: "sawa-lakh-jaap",
    category: "jaap",
    categoryLabel: "वैदिक अखंड जाप",
    title: "माँ बगलामुखी सवा लाख (1,25,000) महामंत्र अनुष्ठान",
    badge: "सर्वोच्च महासाधना",
    shortDesc:
      "जीवन के गंभीर संकट, असाध्य बाधा एवं असंभव दिखने वाले कार्यों को सिद्ध करने हेतु शास्त्रोक्त सवा लाख जाप।",
    significance:
      "योग्य एवं दीक्षित वेदपाठी ब्राह्मणों द्वारा 3 से 7 दिनों तक शुद्ध उच्चारण के साथ सवा लाख जाप, दशांश हवन (12,500 आहुति), तर्पण व मार्जन।",
    duration: "3 से 7 दिवस (पूर्ण वैदिक नियम पालन)",
    mantraCount: "1,25,000 (सवा लाख) पूर्ण मंत्र",
    samagri: "हल्दी की सिद्ध माला, पीत वस्त्र, पीताम्बरा समिधा, दशांश हवन सामग्री।",
    idealFor: "प्राण संकट, गंभीर राजनीतिक प्रतिष्ठा दांव पर होना, असाध्य रोग एवं विकट शत्रु बाधा।",
    prasad: "सिद्ध पीताम्बरा यंत्र, अखंड जाप भस्म, रक्षा सूत्र व विस्तृत अनुष्ठान रिपोर्ट।",
    icon: Scroll,
  },
  {
    id: "chattis-hazar-jaap",
    category: "jaap",
    categoryLabel: "वैदिक अखंड जाप",
    title: "36,000 पीताम्बरा एकादश दिवसीय जप विधान",
    badge: "शीघ्र फलदायी संकल्प",
    shortDesc:
      "अल्प समय में तीव्र सुरक्षा एवं कार्य सिद्धि हेतु 36 हजार मंत्रों का विधिवत जप एवं दशांश हवन।",
    significance:
      "यह विधान मध्यम अवधि में मनोकामना पूर्ति व ग्रह पीड़ा शमन के लिए अत्यंत प्रभावी माना जाता है।",
    duration: "3 से 5 दिवस",
    mantraCount: "36,000 जप + 3,600 हवन आहुतियां",
    samagri: "पीत द्रव्य, गाय का घी, तिल, जौ, हल्दी व सिद्ध समिधा।",
    idealFor: "परीक्षा, इंटरव्यू, संपत्ति क्रय-विक्रय एवं शीघ्र कार्य सिद्धि हेतु।",
    prasad: "अभिमंत्रित रक्षा सूत्र व भस्म।",
    icon: Scroll,
  },
  {
    id: "mahamrityunjay-jaap",
    category: "jaap",
    categoryLabel: "वैदिक अखंड जाप",
    title: "महामृत्युंजय महाजाप एवं अकाल मृत्यु निवारण अनुष्ठान",
    badge: "आरोग्य व दीर्घायु",
    shortDesc:
      "असाध्य शारीरिक रोग, ICU में भर्ती स्वजन, अकाल मृत्यु भय एवं मानसिक अवसाद से मुक्ति हेतु।",
    significance:
      "उज्जैन के महामृत्युंजय वेद विद्यालय परंपरा अनुसार भगवान शिव एवं माँ बगलामुखी के संयुक्त रक्षा कवच का पाठ।",
    duration: "3 से 5 दिवस",
    mantraCount: "1,25,000 अथवा 51,000 महामृत्युंजय जप",
    samagri: "दूर्वा, गिलोय, शुद्ध गो-घृत, शहद, बेलपत्र एवं महामृत्युंजय समिधा।",
    idealFor: "गंभीर बीमारी, एक्सीडेंट भय, डिप्रेशन व अकाल मृत्यु के योग का शमन।",
    prasad: "आरोग्य रक्षा सूत्र, सिद्ध भस्म एवं महामृत्युंजय यंत्र।",
    icon: HeartHandshake,
  },

  // ================= CATEGORY 3: JYOTISH & DOSH NIVARAN =================
  {
    id: "kundali-paramarsh",
    category: "jyotish",
    categoryLabel: "ज्योतिष व दोष निवारण",
    title: "सटीक जन्म कुंडली विश्लेषण एवं व्यक्तिगत मार्गदर्शन",
    badge: "संपूर्ण जीवन फलादेश",
    shortDesc:
      "कैरियर, व्यापार, विवाह, संतान, स्वास्थ्य एवं दशा-महादशा का गहन शास्त्रीय ज्योतिषीय विश्लेषण।",
    significance:
      "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र के माध्यम से पराशर एवं लाल किताब पद्धति पर आधारित सटीक उपाय एवं रत्न परामर्श।",
    duration: "30 से 45 मिनट (फोन / वीडियो कॉल अथवा व्यक्तिगत)",
    mantraCount: "ग्रह अनुकूलन मंत्र परामर्श",
    samagri: "जन्म दिनांक, जन्म समय एवं जन्म स्थान विवरण।",
    idealFor: "सही दिशा, सही समय पर सही निर्णय लेने एवं भविष्य की सटीक योजना बनाने वाले जातक।",
    prasad: "लिखित कुंडली फलादेश रिपोर्ट व अनुकूलित ग्रह उपाय।",
    icon: Compass,
  },
  {
    id: "kaalsarp-pitru-dosh",
    category: "jyotish",
    categoryLabel: "ज्योतिष व दोष निवारण",
    title: "कालसर्प दोष एवं पितृ दोष शांति विधान",
    badge: "वंश वृद्धि व शांति",
    shortDesc:
      "बनते काम बिगड़ना, विवाह में विलंब, संतान सुख में कमी एवं घर में अशांति हेतु लखुंदर तट पर शांति पूजा।",
    significance:
      "नलखेड़ा सिद्धपीठ में लखुंदर नदी के पावन तट पर नाग बलि, पितृ तर्पण एवं वैदिक मंत्रों से स्थायी दोष निवारण।",
    duration: "1 दिवस (लगभग 3 से 4 घंटे)",
    mantraCount: "वैदिक पितृ सूक्त एवं सर्प सूक्त पाठ",
    samagri: "चांदी के नाग-नागिन जोड़ा, काले तिल, जौ, दूध, शुद्ध घृत व तर्पण सामग्री।",
    idealFor: "कालसर्प या पितृ दोष से पीड़ित परिवार।",
    prasad: "शांति रक्षा सूत्र एवं पितृ शांति प्रसाद।",
    icon: Moon,
  },
  {
    id: "manglik-dosh-vivah",
    category: "jyotish",
    categoryLabel: "ज्योतिष व दोष निवारण",
    title: "मांगलिक दोष, कुंभ विवाह एवं विवाह बाधा निवारण",
    badge: "वैवाहिक सुख",
    shortDesc:
      "मांगलिक दोष के कारण विवाह में अड़चन, संबंध टूटना अथवा दांपत्य कलह के शमन हेतु शास्त्रोक्त विधान।",
    significance:
      "कुंभ विवाह / अर्क विवाह एवं मंगल ग्रह की वैदिक शांति कराकर वैवाहिक जीवन को सुखमय व दीर्घायु बनाया जाता है।",
    duration: "1 दिवस",
    mantraCount: "मंगल गायत्री एवं शांति पाठ",
    samagri: "मिट्टी का कलश, हल्दी, लाल पुष्प, पीला वस्त्र व मंगल समिधा।",
    idealFor: "विवाह योग्य युवक-युवती एवं मांगलिक दोष से ग्रसित जातक।",
    prasad: "मंगल रक्षा कवच एवं सिंदूर।",
    icon: HeartHandshake,
  },
  {
    id: "graha-shanti-shani",
    category: "jyotish",
    categoryLabel: "ज्योतिष व दोष निवारण",
    title: "शनि साढ़े साती, ढैय्या एवं राहु-केतु पीड़ा शमन",
    badge: "ग्रह बाधा मुक्ति",
    shortDesc:
      "शनि की साढ़े साती, महादशा, राहु के भ्रम एवं केतु के अचानक नुकसान से रक्षा हेतु नवग्रह शांति यज्ञ।",
    significance:
      "अशुभ ग्रहों के दुष्प्रभावों को शांत कर जीवन में स्थिरता, मानसिक शांति एवं भाग्य का साथ सुनिश्चित करता है।",
    duration: "1 दिवस",
    mantraCount: "नवग्रह वैदिक मंत्र जाप एवं आहुतियां",
    samagri: "काले तिल, उड़द, सरसों तेल, नवग्रह समिधा व शुद्ध घृत।",
    idealFor: "साढ़े साती या राहु की अंतर्दशा से जूझ रहे जातक।",
    prasad: "नवग्रह रक्षा ताबीज एवं भस्म।",
    icon: Moon,
  },

  // ================= CATEGORY 4: E-SANKALP & ONLINE SEVA =================
  {
    id: "live-video-sankalp",
    category: "esankalp",
    categoryLabel: "ई-संकल्प व डाक सेवा",
    title: "ऑनलाइन लाइव वीडियो कॉल संकल्प अनुष्ठान",
    badge: "घर बैठे दर्शन",
    shortDesc:
      "देश-विदेश में रहने वाले भक्तों के लिए WhatsApp / Zoom पर सीधे पंडित जी से जुड़कर अग्नि के समक्ष संकल्प।",
    significance:
      "दूरी अब बाधा नहीं। पंडित जी यजमान का नाम, गोत्र, फोटो एवं स्थान का उच्चारण कर साक्षात अग्नि के समक्ष संकल्प कराते हैं।",
    duration: "लाइव संकल्प (20-30 मिनट) + पूर्ण अनुष्ठान (2-4 घंटे)",
    mantraCount: "यजमान के नाम से संपूर्ण शास्त्रोक्त जाप",
    samagri: "यजमान द्वारा घर पर पीत वस्त्र धारण व एक घी का दीपक प्रज्वलन।",
    idealFor: "एनआरआई (NRI), वृद्धजन, व्यस्त अथवा दूरस्थ राज्यों में रहने वाले भक्त।",
    prasad: "लाइव दर्शन के उपरांत संपूर्ण सामग्री डाक द्वारा प्रेषित।",
    icon: Video,
  },
  {
    id: "dak-prasad-raksha-sutra",
    category: "esankalp",
    categoryLabel: "ई-संकल्प व डाक सेवा",
    title: "सिद्ध पीताम्बरा रक्षा सूत्र, भस्म व डाक प्रसाद सेवा",
    badge: "डाक द्वारा प्रेषण",
    shortDesc:
      "हवन उपरांत माँ बगलामुखी के चरणों में अभिमंत्रित रक्षा सूत्र, सिद्ध भस्म एवं प्रसाद स्पीड पोस्ट द्वारा घर तक।",
    significance:
      "प्रत्येक पैकेट वैदिक विधि से सील किया जाता है और यजमान को स्पीड पोस्ट / कूरियर की ट्रैकिंग आईडी साझा की जाती है।",
    duration: "3 से 5 कार्य दिवस में पूरे भारत में डिलीवरी",
    mantraCount: "अनुष्ठान में अभिमंत्रित",
    samagri: "सिद्ध भस्म, हल्दी रक्षा सूत्र, पीताम्बरा यंत्र, इलायची दाना व माँ का कुमकुम।",
    idealFor: "सभी यजमान जो अनुष्ठान के बाद दिव्य प्रसाद व रक्षा सूत्र प्राप्त करना चाहते हैं।",
    prasad: "सुरक्षित वाटरप्रूफ पैकिंग में घर तक प्रेषित।",
    icon: Scroll,
  },
];

type CategoryKey = "all" | "hawan" | "jaap" | "jyotish" | "esankalp";

export default function PanditServicesCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null
  );

  // Lock body scroll when modal is open to prevent background page scroll bleed
  useEffect(() => {
    if (selectedService) {
      const originalOverflow = document.body.style.overflow;
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = "";
      };
    }
  }, [selectedService]);

  // Filter logic
  const filteredServices = servicesData.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.idealFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { key: "all" as CategoryKey, label: "समस्त सेवाएं", count: servicesData.length },
    {
      key: "hawan" as CategoryKey,
      label: "माँ बगलामुखी महाहवन",
      count: servicesData.filter((s) => s.category === "hawan").length,
    },
    {
      key: "jaap" as CategoryKey,
      label: "वैदिक अखंड जाप",
      count: servicesData.filter((s) => s.category === "jaap").length,
    },
    {
      key: "jyotish" as CategoryKey,
      label: "कुंडली व दोष निवारण",
      count: servicesData.filter((s) => s.category === "jyotish").length,
    },
    {
      key: "esankalp" as CategoryKey,
      label: "ई-संकल्प व डाक सेवा",
      count: servicesData.filter((s) => s.category === "esankalp").length,
    },
  ];

  const handleWhatsAppBooking = (serviceTitle: string) => {
    // Phone 1 (+91 72230 83313) -> Hawan / Puja inquiries
    // Phone 2 (+91 95756 64204) -> Kundali / Jyotish / Rashi inquiries
    const isKundaliOrJyotish = /kundali|jyotish|rashi|पत्रिका|कुंडली|ज्योतिष|horoscope|birth\s*chart/i.test(serviceTitle);
    const targetPhone = isKundaliOrJyotish ? siteConfig.contact.phone2Raw : siteConfig.contact.phone1Raw;
    const message = `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे आपसे "${serviceTitle}" के संदर्भ में विधि, शुभ मुहूर्त एवं संकल्प हेतु मार्गदर्शन प्राप्त करना है।`;
    window.open(getWhatsAppUrl(targetPhone, message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="services-catalog" className="w-full bg-white py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER: Clean & Left-Aligned ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
                पंडित दीपक शर्मा द्वारा संपन्न अनुष्ठान • नलखेड़ा सिद्धपीठ
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
              समस्त आध्यात्मिक सेवाएं, महाहवन एवं वैदिक विधान
            </h2>
            <p className="font-serif text-xs sm:text-sm text-stone-600 mt-2">
              बिना किसी बिचौलिए के सीधे पंडित जी से शास्त्रोक्त विधि अनुसार संकल्प, दशांश हवन व अनुष्ठान संपन्न कराएं।
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <label htmlFor="pandit-service-search" className="sr-only">
              सेवा या समस्या खोजें
            </label>
            <input
              id="pandit-service-search"
              type="text"
              aria-label="सेवा या समस्या खोजें"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="सेवा या समस्या खोजें (उदा. शत्रु, मुकदमा)..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-full bg-stone-50 border border-stone-200 focus:border-amber-400 focus:bg-white focus:outline-hidden transition-colors placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="खोज साफ़ करें"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ================= CATEGORY SWITCHER TABS (Clean, Categorized, No Clutter) ================= */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                }}
                className={`flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#AF0807] text-white shadow-md shadow-red-900/10 scale-[1.02]"
                    : "bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/80"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-amber-400 text-stone-900"
                      : "bg-stone-200/80 text-stone-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= CARDS GRID (Signature Left-Right Border) ================= */}
        {filteredServices.length === 0 ? (
          <div className="rounded-3xl bg-stone-50 border-y-0 border-x-2 border-amber-400 p-10 text-center text-stone-600">
            <Info className="h-8 w-8 text-amber-500 mx-auto mb-2" />
            <p className="font-serif text-base font-bold text-[#3E0B02]">
              कोई सेवा नहीं मिली
            </p>
            <p className="text-xs text-stone-500 mt-1">
              कृपया भिन्न शब्द खोजें अथवा श्रेणी बदलें।
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#AF0807] text-white text-xs font-bold"
            >
              समस्त सेवाएं देखें
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-colors duration-300"
                >
                  {/* Top Header: Category & Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#AF0807] bg-red-50 border border-red-200/60 rounded-md px-2 py-0.5">
                        {service.categoryLabel}
                      </span>
                      <span className="text-[10.5px] font-bold text-amber-900 bg-amber-100/70 border border-amber-300/60 rounded-full px-2.5 py-0.5">
                        {service.badge}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-start gap-3 mb-2.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-amber-300 text-[#AF0807] shadow-2xs group-hover:bg-[#AF0807] group-hover:text-amber-200 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#3E0B02] leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Clean Key Specifications */}
                    <div className="space-y-1.5 p-3 rounded-2xl bg-[#FFFDF9] border border-amber-200/60 text-[11.5px] text-stone-700 mb-5">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                        <span className="text-stone-500">अवधि:</span>
                        <span className="font-semibold text-stone-800 truncate">
                          {service.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Scroll className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                        <span className="text-stone-500">मंत्र संख्या:</span>
                        <span className="font-semibold text-stone-800 truncate">
                          {service.mantraCount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: View Details & WhatsApp Consultation */}
                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppBooking(service.title)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white font-bold text-xs shadow-xs hover:shadow-md transition-colors active:scale-[0.98]"
                    >
                      <MessageCircle className="h-4 w-4 text-amber-300" />
                      <span>पंडित जी से संकल्प लें</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-white hover:bg-amber-50 text-[#3E0B02] hover:text-[#AF0807] text-xs font-semibold border border-stone-200 hover:border-amber-300 transition-colors"
                    >
                      <span>विधि व सामग्री विवरण देखें</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#AF0807]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ================= MODAL FOR DETAILED RITUAL VIEW ================= */}
        {selectedService && (
          <div
            data-lenis-prevent="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedService(null)}
          >
            <div
              data-lenis-prevent="true"
              className="relative w-full max-w-2xl rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                aria-label="बंद करें"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#AF0807] bg-red-50 border border-red-200/60 rounded-md px-2 py-0.5">
                  {selectedService.categoryLabel}
                </span>
                <span className="text-[10.5px] font-bold text-amber-900 bg-amber-100/70 border border-amber-300/60 rounded-full px-2.5 py-0.5">
                  {selectedService.badge}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3E0B02] leading-tight mb-3">
                {selectedService.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6 bg-amber-50/50 p-4 rounded-2xl border border-amber-200/60">
                {selectedService.significance}
              </p>

              {/* Detailed Specs Grid */}
              <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 mb-6">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-[#AF0807]" />
                    <span>अनुष्ठान अवधि एवं मंत्र संख्या</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    अवधि: {selectedService.duration} • मंत्र: {selectedService.mantraCount}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <Flame className="h-4 w-4 text-[#AF0807]" />
                    <span>विशिष्ट वैदिक एवं तांत्रिक सामग्री</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedService.samagri}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <CheckCircle2 className="h-4 w-4 text-[#AF0807]" />
                    <span>किन परिस्थितियों में विशेष लाभकारी (Ideal For)</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedService.idealFor}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <Scroll className="h-4 w-4 text-[#AF0807]" />
                    <span>प्रसाद एवं रक्षा सूत्र प्रेषण</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedService.prasad}
                  </p>
                </div>
              </div>

              {/* Required Devotee Details */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300/80 mb-6 text-xs text-amber-950">
                <div className="font-bold mb-1.5 flex items-center gap-1.5">
                  <Info className="h-4 w-4 text-[#AF0807]" />
                  <span>संकल्प हेतु आवश्यक जानकारी:</span>
                </div>
                <p>
                  यजमान का पूरा नाम, गोत्र, वर्तमान पता/शहर, माता-पिता का नाम एवं जिस कार्य/संकट निवारण हेतु अनुष्ठान कराया जा रहा है, उसका विवरण।
                </p>
              </div>

              {/* CTA Inside Modal */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleWhatsAppBooking(selectedService.title)}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-amber-300" />
                  <span>पंडित जी से इस सेवा हेतु बात करें</span>
                </button>

                <a
                  href={getTelUrl(siteConfig.contact.phone1)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-stone-100 hover:bg-stone-200 text-[#3E0B02] font-bold text-xs sm:text-sm transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-[#AF0807]" />
                  <span>{siteConfig.contact.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
