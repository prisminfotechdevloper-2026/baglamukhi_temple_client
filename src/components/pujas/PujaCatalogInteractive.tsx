"use client";

import { useState } from "react";
import {
  Flame,
  Scale,
  Scroll,
  TrendingUp,
  HeartHandshake,
  Moon,
  ShieldCheck,
  Video,
  Clock,
  Compass,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  ArrowRight,
  X,
  Search,
  MapPin,
  Layers,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface PujaItem {
  id: string;
  category: "tantra" | "jaap" | "dosh" | "samriddhi" | "online";
  categoryLabel: string;
  badge: string;
  title: string;
  mantraExcerpt: string;
  shortDesc: string;
  significance: string;
  duration: string;
  mantraCount: string;
  samagri: string;
  idealFor: string;
  prasad: string;
  icon: typeof Flame;
}

const pujasDatabase: PujaItem[] = [
  // ================= 1. SHATRU BADHA =================
  {
    id: "shatru-badha-hawan",
    category: "tantra",
    categoryLabel: "शत्रु बाधा व तंत्र",
    badge: "सर्वोच्च स्तम्भन",
    title: "माँ बगलामुखी शत्रु बाधा एवं तंत्र दोष निवारण महाहवन",
    mantraExcerpt: "ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय...",
    shortDesc:
      "अकारण शत्रुता, गुप्त षड्यंत्र, ईर्ष्या, तांत्रिक मारण-मोहन-उच्चाटन दोष एवं नजर दोष का समूल नाश।",
    significance:
      "माँ बगलामुखी की स्तम्भन शक्ति से शत्रुओं की बुद्धि, वाणी और कर्म स्तम्भित हो जाते हैं। नलखेड़ा सिद्धपीठ की पावन अग्नि में पीली सरसों व हल्दी की आहुति यजमान के चारों ओर अभेद्य सुरक्षा चक्र बनाती है।",
    duration: "1 से 3 दिवस",
    mantraCount: "36,000 अथवा 1,25,000 जप + दशांश हवन",
    samagri: "पीली सरसों, हल्दी गांठ, पीताम्बरा समिधा, कमल गट्टा, शुद्ध गाय का घी व भोजपत्र।",
    idealFor: "राजनीतिक, व्यापारिक या पारिवारिक जीवन में विरोधियों से प्रताड़ित जातक।",
    prasad: "सिद्ध पीताम्बरा रक्षा सूत्र, अभिमंत्रित भस्म व रक्षा कवच।",
    icon: Flame,
  },

  // ================= 2. COURT CASE =================
  {
    id: "court-case-vijay",
    category: "tantra",
    categoryLabel: "शत्रु बाधा व तंत्र",
    badge: "न्यायालयीन विजय",
    title: "कोर्ट-कचहरी, मुकदमा एवं विवाद विजय अनुष्ठान",
    mantraExcerpt: "ॐ ह्लीं क्लीं बगलामुखी देव्यै नमः • वाक् स्तम्भन विधान",
    shortDesc:
      "झूठे मुकदमों, संपत्ति विवाद, दीवानी व फौजदारी मुकदमों एवं प्रशासनिक अवरोधों में सत्य व न्याय की विजय हेतु।",
    significance:
      "शास्त्रों में माँ पीताम्बरा को वाक्-सिद्धि एवं स्तम्भन की स्वामिनी कहा गया है। यह अनुष्ठान विरोधी पक्ष के झूठे तर्कों को प्रभावहीन कर न्यायाधीश व अधिकारियों के समक्ष सत्य स्थापित करता है।",
    duration: "3 दिवसीय विशेष अनुष्ठान",
    mantraCount: "51,000 जप एवं 5,100 दशांश आहुतियां",
    samagri: "अष्टगंध, भोजपत्र, पीली कौड़ियां, हल्दी, राई, पीत चंदन व विशेष हवन औषधियां।",
    idealFor: "लंबे समय से कानूनी मुकदमों, पुलिस केस अथवा संपत्ति विवादों में फंसे व्यक्ति।",
    prasad: "अभिमंत्रित विजय यंत्र, रक्षा सूत्र एवं माँ का सिद्ध कुमकुम।",
    icon: Scale,
  },

  // ================= 3. SAWA LAKH JAAP =================
  {
    id: "sawa-lakh-jaap",
    category: "jaap",
    categoryLabel: "महामंत्र अखंड जाप",
    badge: "सर्वोच्च महासाधना",
    title: "माँ बगलामुखी सवा लाख (1,25,000) महामंत्र अखंड जाप",
    mantraExcerpt: "ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा",
    shortDesc:
      "जीवन के अत्यंत जटिल संकट, प्राण रक्षा, असाध्य बाधाओं एवं असंभव को संभव बनाने हेतु सर्वोच्च तांत्रिक-वैदिक यज्ञ।",
    significance:
      "उज्जैन वेद विद्यालय से दीक्षित विद्वान ब्राह्मणों द्वारा 3 से 7 दिनों तक शुद्ध सस्वर पाठ, 12,500 मंत्रों की दशांश आहुतियां, तर्पण, मार्जन एवं ब्राह्मण भोजन।",
    duration: "3 से 7 दिवस (पूर्ण शास्त्रीय नियम)",
    mantraCount: "1,25,000 (सवा लाख) पूर्ण मंत्र जाप",
    samagri: "हल्दी की सिद्ध माला, पीत वस्त्र, पीताम्बरा समिधा, दशांश हवन सामग्री व पंचामृत।",
    idealFor: "प्राण संकट, असाध्य रोग, उच्च स्तरीय राजनीतिक प्रतिष्ठा दांव पर होना, भारी आर्थिक बर्बादी।",
    prasad: "सिद्ध पीताम्बरा यंत्र, अखंड जाप भस्म, रक्षा सूत्र व विस्तृत यजमान रिपोर्ट।",
    icon: Scroll,
  },

  // ================= 4. VYAPAR VRIDDHI =================
  {
    id: "vyapar-dhan-laxmi",
    category: "samriddhi",
    categoryLabel: "व्यापार व समृद्धि",
    badge: "धनलक्ष्मी आकर्षण",
    title: "व्यापार वृद्धि, धनलक्ष्मी एवं कनकधारा महाहवन",
    mantraExcerpt: "ॐ श्रीं ह्रीं क्लीं त्रिभुवन महालक्ष्म्यै अस्मांक दारिद्र्य नाशय...",
    shortDesc:
      "व्यापार में निरंतर घाटा, दुकान में ग्राहकों की कमी, रुका हुआ धन एवं भारी कर्ज से मुक्ति हेतु कनकधारा हवन।",
    significance:
      "माँ बगलामुखी एवं महालक्ष्मी का संयुक्त विधान व्यापार स्थल की नकारात्मक ऊर्जा का नाश कर निरंतर धन-वृद्धि व साख मजबूत करता है।",
    duration: "1 दिवस (3 से 4 घंटे)",
    mantraCount: "21,000 मंत्र एवं श्री सूक्त संपूटित आहुतियां",
    samagri: "कमल के पुष्प, शुद्ध शहद, खीर, हल्दी, पीताम्बरा समिधा व गाय का घी।",
    idealFor: "दुकानदार, उद्योगपति, रियल एस्टेट एवं कर्ज से परेशान व्यापारी।",
    prasad: "सिद्ध व्यापार वृद्धि यंत्र, पीली कौड़ियां एवं अभिमंत्रित महालक्ष्मी भस्म।",
    icon: TrendingUp,
  },

  // ================= 5. CHATTIS HAZAR JAAP =================
  {
    id: "chattis-hazar-jaap",
    category: "jaap",
    categoryLabel: "महामंत्र अखंड जाप",
    badge: "शीघ्र फलदायी संकल्प",
    title: "36,000 पीताम्बरा एकादश दिवसीय जप विधान",
    mantraExcerpt: "ॐ ह्लीं बगलामुख्यै नमः • एकादश दिवसीय संकल्प",
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

  // ================= 6. MAHAMRITYUNJAY =================
  {
    id: "mahamrityunjay-jaap",
    category: "jaap",
    categoryLabel: "महामंत्र अखंड जाप",
    badge: "आरोग्य व दीर्घायु",
    title: "महामृत्युंजय महाजाप एवं अकाल मृत्यु निवारण अनुष्ठान",
    mantraExcerpt: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥",
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

  // ================= 7. KAAL SARP DOSH =================
  {
    id: "kaalsarp-dosh-shanti",
    category: "dosh",
    categoryLabel: "दोष शांति",
    badge: "कालसर्प मुक्ति",
    title: "कालसर्प दोष शांति महायज्ञ (लखुंदर नदी तट)",
    mantraExcerpt: "ॐ नवकुलाय विद्महे विषदन्ताय धीमहि तन्नो सर्पः प्रचोदयात्॥",
    shortDesc:
      "बनते काम बिगड़ना, मानसिक तनाव, भयावह स्वप्न एवं जीवन में अचानक पतन के निवारण हेतु लखुंदर तट पर शांति पूजा।",
    significance:
      "नलखेड़ा सिद्धपीठ लखुंदर नदी के पावन तट पर नाग बलि, 12 प्रकार के कालसर्प दोषों का विशेष हवन व चांदी के नाग-नागिन जोड़े का तर्पण।",
    duration: "1 दिवस (3 से 4 घंटे)",
    mantraCount: "नाग गायत्री एवं सर्प सूक्त पाठ",
    samagri: "चांदी का नाग-नागिन जोड़ा, काले तिल, जौ, दूध, शुद्ध घृत व तर्पण सामग्री।",
    idealFor: "अनंत, कुलिक, वासुकि, शंखपाल आदि 12 कालसर्प दोषों से ग्रसित जातक।",
    prasad: "कालसर्प शांति रक्षा सूत्र व सिद्ध भस्म।",
    icon: Moon,
  },

  // ================= 8. PITRU DOSH =================
  {
    id: "pitru-dosh-narayan-bali",
    category: "dosh",
    categoryLabel: "दोष शांति",
    badge: "पितृ तृप्ति व शांति",
    title: "पितृ दोष शांति, नारायण बलि एवं त्रिपिंडी श्राद्ध",
    mantraExcerpt: "ॐ देवताभ्यः पितृभ्यश्च महायोगिभ्य एव च। नमः स्वाहायै स्वधायै नित्यमेव नमो नमः॥",
    shortDesc:
      "वंश वृद्धि में रुकावट, संतान सुख में विलंब, घर में निरंतर कलह व अज्ञात पूर्वज दोषों की मुक्ति हेतु।",
    significance:
      "पूर्वजों की अतृप्त आत्माओं की शांति, पितृ ऋण से मुक्ति एवं कुल की निरंतर उन्नति हेतु शास्त्रोक्त नारायण बलि व त्रिपिंडी अनुष्ठान।",
    duration: "1 दिवस",
    mantraCount: "पितृ गायत्री व गरुड़ पुराणोक्त तर्पण",
    samagri: "जौ, काले तिल, कुश, पंचामृत, श्वेत पुष्प व विशेष पिंडदान सामग्री।",
    idealFor: "पितृ दोष, संतान उत्पत्ति में बाधा एवं अकारण घर में रोग-कष्ट वाले परिवार।",
    prasad: "पितृ आशीर्वाद रक्षा सूत्र एवं चरणामृत।",
    icon: Moon,
  },

  // ================= 9. MANGLIK DOSH =================
  {
    id: "manglik-dosh-vivah",
    category: "dosh",
    categoryLabel: "दोष शांति",
    badge: "विवाह बाधा निवारण",
    title: "मांगलिक दोष, कुंभ विवाह एवं विवाह बाधा निवारण",
    mantraExcerpt: "ॐ धरणीगर्भसंभूतं विद्युत्कान्तिसमप्रभम्। कुमारं शक्तिहस्तं च मंगलं प्रणमाम्यहम्॥",
    shortDesc:
      "मांगलिक दोष के कारण विवाह में अनावश्यक देरी, रिश्ते टूटना अथवा दांपत्य जीवन में कलह के शमन हेतु।",
    significance:
      "कुंभ विवाह / अर्क विवाह एवं मंगल ग्रह की वैदिक शांति कराकर वैवाहिक जीवन को सुखमय व दीर्घायु बनाया जाता है।",
    duration: "1 दिवस",
    mantraCount: "मंगल गायत्री एवं शांति पाठ",
    samagri: "मिट्टी का कलश, हल्दी, लाल पुष्प, पीला वस्त्र व मंगल समिधा।",
    idealFor: "विवाह योग्य युवक-युवती एवं मांगलिक दोष से ग्रसित जातक।",
    prasad: "मंगल रक्षा कवच एवं सिंदूर।",
    icon: HeartHandshake,
  },

  // ================= 10. SHANI SADE SATI =================
  {
    id: "shani-sade-sati-abhishek",
    category: "dosh",
    categoryLabel: "दोष शांति",
    badge: "शनि कृपा प्राप्ति",
    title: "शनि साढ़े साती, ढैय्या एवं तिल-तेल महाभिषेक",
    mantraExcerpt: "ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः • नीलांजन समाभासं...",
    shortDesc:
      "शनि की साढ़े साती, ढैय्या, महादशा के कारण आ रही शारीरिक, मानसिक एवं आर्थिक तबाही से रक्षा हेतु।",
    significance:
      "शनि देव के क्रूर प्रभाव को शांत कर कर्मफल दाता की कृपा प्राप्त करने हेतु 51 दीप सेवा, तिल-तेल अभिषेक एवं महाहवन।",
    duration: "1 दिवस",
    mantraCount: "23,000 शनि वैदिक बीज मंत्र",
    samagri: "काला तिल, सरसों का तेल, उड़द, लोहा, नीले पुष्प व शमी समिधा।",
    idealFor: "कर्क, वृश्चिक, मकर, कुंभ, मीन आदि साढ़े साती या ढैय्या से पीड़ित राशियां।",
    prasad: "शनि रक्षा ताबीज एवं सिद्ध भस्म।",
    icon: Moon,
  },

  // ================= 11. RAHU KETU SHANTI =================
  {
    id: "rahu-ketu-shanti",
    category: "dosh",
    categoryLabel: "दोष शांति",
    badge: "छाया ग्रह शांति",
    title: "राहु-केतु पीड़ा शमन एवं 18,000 तांत्रिक जप",
    mantraExcerpt: "ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः • ॐ स्त्रां स्त्रीं स्त्रौं सः केतवे नमः",
    shortDesc:
      "अकारण भय, मानसिक भ्रम, गलत निर्णय, अचानक आर्थिक नुकसान एवं नशे की लत से मुक्ति हेतु।",
    significance:
      "राहु-केतु के विषैले प्रभावों को अमृत में परिवर्तित करने हेतु माँ बगलामुखी के सम्मुख तांत्रिक शांति जाप।",
    duration: "1 से 2 दिवस",
    mantraCount: "18,000 राहु मंत्र एवं 17,000 केतु मंत्र",
    samagri: "सप्तधान्य, दूर्वा, कुश, काले तिल, नीले व धूसर वस्त्र एवं घृत।",
    idealFor: "राहु की महादशा, केतु की अंतर्दशा एवं ग्रहण योग से पीड़ित जातक।",
    prasad: "राहु-केतु रक्षा सूत्र व अभिमंत्रित भस्म।",
    icon: Moon,
  },

  // ================= 12. NAVCHANDI YAGYA =================
  {
    id: "navchandi-mahayagya",
    category: "tantra",
    categoryLabel: "शत्रु बाधा व तंत्र",
    badge: "राजकीय व कुल रक्षा",
    title: "नवचंडी महायज्ञ एवं दुर्गा सप्तशती संपूर्ण संपुट पाठ",
    mantraExcerpt: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥",
    shortDesc:
      "राजनीतिक विजय, कुल की समग्र रक्षा, राज्य स्तर की सफलता व घर में निरंतर सुख-शांति हेतु।",
    significance:
      "मार्कण्डेय पुराणोक्त दुर्गा सप्तशती के 700 श्लोकों का संपुटित पाठ एवं 9 कुण्डों या महाकुण्ड में पूर्ण आहुति।",
    duration: "1 से 3 दिवस",
    mantraCount: "सप्तशती के 9 पाठ एवं दशांश नवार्ण जप",
    samagri: "पंचमेवा, अष्टगंध, खीर, कमल गट्टा, जटाधारी नारियल व शुद्ध घी।",
    idealFor: "राजनेता, प्रशासनिक अधिकारी एवं कुल में सुख-समृद्धि चाहने वाले परिवार।",
    prasad: "सिद्ध चंडी यंत्र, रक्षा सूत्र व महाप्रसाद।",
    icon: Flame,
  },

  // ================= 13. SARVA KARYA SIDDHI =================
  {
    id: "sarva-karya-siddhi",
    category: "samriddhi",
    categoryLabel: "व्यापार व समृद्धि",
    badge: "अमोघ कार्य सिद्धि",
    title: "सर्व कार्य सिद्धि एवं अखंड सुरक्षा कवच अनुष्ठान",
    mantraExcerpt: "ॐ ह्लीं सर्वविघ्नविनाशिन्यै नमः • सर्वतोभद्र विधान",
    shortDesc:
      "हर बनते काम का अंतिम समय में रुकना, नई नौकरी में अड़चन, विदेश यात्रा में रुकावट एवं जीवन में गतिरोध दूर करने हेतु।",
    significance:
      "यह सर्वतोभद्र विधान जीवन के सभी क्षेत्रों में आ रही अदृश्य रुकावटों को जड़ से समाप्त कर सफलता के मार्ग प्रशस्त करता है।",
    duration: "1 दिवस",
    mantraCount: "21,000 मंत्र जाप व दशांश आहुति",
    samagri: "पंचमेवा, पीत द्रव्य, गुग्गल, लोबान, शुद्ध घृत एवं नौ प्रकार की औषधियां।",
    idealFor: "कैरियर में रुकावट, इंटरव्यू एवं पदोन्नति में अड़चन वाले जातक।",
    prasad: "कार्य सिद्धि यंत्र एवं सिद्ध रक्षा सूत्र।",
    icon: ShieldCheck,
  },

  // ================= 14. SANTAN GOPAL =================
  {
    id: "santan-gopal-yagya",
    category: "samriddhi",
    categoryLabel: "व्यापार व समृद्धि",
    badge: "संतान सुख प्राप्ति",
    title: "संतान गोपाल अनुष्ठान एवं वंश वृद्धि महायज्ञ",
    mantraExcerpt: "ॐ देवकीसुत गोविन्द वासुदेव जगत्पते। देहि मे तनयं कृष्ण त्वामहं शरणं गतः॥",
    shortDesc:
      "संतान उत्पत्ति में आ रहे चिकित्सीय व आध्यात्मिक अवरोध, गर्भ रक्षा एवं तेजस्वी संतान प्राप्ति हेतु।",
    significance:
      "भगवान बाल मुकुंद एवं माँ बगलामुखी का संयुक्त अनुष्ठान गर्भ की नकारात्मक शक्तियों से रक्षा कर वंश वृद्धि सुनिश्चित करता है।",
    duration: "1 से 3 दिवस",
    mantraCount: "1,25,000 अथवा 51,000 संतान गोपाल जप",
    samagri: "माखन-मिश्री, कमल गट्टा, पीला वस्त्र, केसर, तुलसी दल एवं शुद्ध गो-घृत।",
    idealFor: "विवाह के वर्षों बाद भी संतान सुख से वंचित दंपत्ति।",
    prasad: "संतान गोपाल यंत्र, अभिमंत्रित रक्षा सूत्र व सिद्ध भस्म।",
    icon: HeartHandshake,
  },

  // ================= 15. KARZ MUKTI =================
  {
    id: "karz-mukti-daridrya-dahan",
    category: "samriddhi",
    categoryLabel: "व्यापार व समृद्धि",
    badge: "ऋण मुक्ति विधान",
    title: "कर्ज मुक्ति एवं दारिद्र्य दहन शिव-बगलामुखी अनुष्ठान",
    mantraExcerpt: "ॐ ऋणमुक्तेश्वराय नमः • दारिद्र्य दहन शिव स्तोत्र संपूटित",
    shortDesc:
      "सिर पर चढ़े भारी कर्ज, बैंक नोटिस, आर्थिक तंगी एवं ब्याज के कुचक्र से स्थायी मुक्ति हेतु।",
    significance:
      "दारिद्र्य दहन शिव स्तोत्र एवं माँ बगलामुखी के संयुक्त तांत्रिक आहुतियों से आय के नए स्रोत खुलते हैं और कर्ज का भार उतरता है।",
    duration: "1 दिवस",
    mantraCount: "21,000 मंत्र जाप एवं 108 आहुतियां",
    samagri: "बेलपत्र, शहद, घी, पीली कौड़ियां, हल्दी व दारिद्र्य दहन समिधा।",
    idealFor: "भारी कर्ज, ईएमआई एवं आर्थिक दिवालियापन से जूझ रहे व्यक्ति व व्यापारी।",
    prasad: "ऋण मुक्ति यंत्र व सिद्ध पीली कौड़ियां।",
    icon: TrendingUp,
  },

  // ================= 16. E-SANKALP ONLINE =================
  {
    id: "online-live-esankalp",
    category: "online",
    categoryLabel: "ई-संकल्प व ऑनलाइन",
    badge: "घर बैठे दर्शन",
    title: "ऑनलाइन लाइव ई-संकल्प एवं डाक रक्षा सूत्र सेवा",
    mantraExcerpt: "ॐ ह्लीं बगलामुख्यै नमः • लाइव वीडियो कॉल संकल्प",
    shortDesc:
      "देश-विदेश में रहने वाले भक्तों के लिए WhatsApp / Zoom वीडियो कॉल पर साक्षात अग्नि के दर्शन एवं संकल्प।",
    significance:
      "जो भक्त व्यक्तिगत रूप से नलखेड़ा नहीं आ सकते, वे पंडित दीपक शर्मा जी से लाइव जुड़कर अपने नाम, गोत्र व स्थान से संकल्प कराते हैं।",
    duration: "लाइव संकल्प (20-30 मिनट) + पूर्ण अनुष्ठान (2-4 घंटे)",
    mantraCount: "यजमान के नाम से संपूर्ण शास्त्रोक्त जाप",
    samagri: "यजमान घर पर पीत वस्त्र धारण कर घी का दीपक प्रज्वलित करता है।",
    idealFor: "एनआरआई (NRI), वृद्धजन, व्यस्त अथवा दूरस्थ राज्यों में रहने वाले भक्त।",
    prasad: "लाइव दर्शन के उपरांत सिद्ध भस्म, रक्षा सूत्र व प्रसाद स्पीड पोस्ट द्वारा प्रेषित।",
    icon: Video,
  },
];

type CategoryFilter = "all" | "tantra" | "jaap" | "dosh" | "samriddhi" | "online";

const ITEMS_PER_PAGE = 3;

export default function PujaCatalogInteractive() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPuja, setSelectedPuja] = useState<PujaItem | null>(null);

  const categories = [
    { key: "all" as CategoryFilter, label: "समस्त अनुष्ठान", count: pujasDatabase.length },
    {
      key: "tantra" as CategoryFilter,
      label: "शत्रु बाधा व मुकदमा विजय",
      count: pujasDatabase.filter((p) => p.category === "tantra").length,
    },
    {
      key: "jaap" as CategoryFilter,
      label: "महामंत्र अखंड जाप",
      count: pujasDatabase.filter((p) => p.category === "jaap").length,
    },
    {
      key: "dosh" as CategoryFilter,
      label: "दोष शांति (कालसर्प/शनि/पितृ)",
      count: pujasDatabase.filter((p) => p.category === "dosh").length,
    },
    {
      key: "samriddhi" as CategoryFilter,
      label: "व्यापार, समृद्धि व कर्ज मुक्ति",
      count: pujasDatabase.filter((p) => p.category === "samriddhi").length,
    },
    {
      key: "online" as CategoryFilter,
      label: "ई-संकल्प व ऑनलाइन सेवा",
      count: pujasDatabase.filter((p) => p.category === "online").length,
    },
  ];

  const filteredPujas = pujasDatabase.filter((puja) => {
    const matchesCategory =
      activeCategory === "all" || puja.category === activeCategory;
    const matchesSearch =
      puja.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      puja.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      puja.idealFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      puja.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination calculation: 3 pujas at a time
  const totalPages = Math.ceil(filteredPujas.length / ITEMS_PER_PAGE);
  const paginatedPujas = filteredPujas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategorySelect = (catKey: CategoryFilter) => {
    setActiveCategory(catKey);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleWhatsAppBooking = (title: string) => {
    const text = encodeURIComponent(
      `जय माँ बगलामुखी! पंडित दीपक शर्मा जी, मुझे माँ बगलामुखी सिद्धपीठ नलखेड़ा में "${title}" अनुष्ठान हेतु शुभ मुहूर्त, दक्षिणा व संकल्प प्रक्रिया की जानकारी चाहिए।`
    );
    window.open(`https://wa.me/917726815642?text=${text}`, "_blank");
  };

  return (
    <section id="puja-catalog" className="w-full bg-white py-12 sm:py-16 md:py-20 border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER: Clean & Left-Aligned ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-4 w-1 bg-[#AF0807] rounded-full" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#AF0807]">
                नलखेड़ा सिद्धपीठ • प्रामाणिक पूजा सूची
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3E0B02] tracking-tight leading-tight">
              16 विशिष्ट वैदिक एवं तांत्रिक महाअनुष्ठान
            </h2>
            <p className="font-serif text-xs sm:text-sm text-stone-600 mt-2">
              बिना किसी मध्यस्थ के सीधे पंडित दीपक शर्मा जी से शास्त्रोक्त संकल्प एवं दशांश हवन संपन्न कराएं।
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="अनुष्ठान या समस्या खोजें (उदा. कोर्ट केस, शत्रु)..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-full bg-stone-50 border border-stone-200 focus:border-amber-400 focus:bg-white focus:outline-hidden transition-all placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ================= CATEGORY TABS (Clean, Categorized, No Clutter) ================= */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategorySelect(cat.key)}
                className={`flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
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

        {/* ================= 16 UNIQUE PUJA CARDS GRID (Signature Borders - 3 at a time) ================= */}
        {filteredPujas.length === 0 ? (
          <div className="rounded-3xl bg-stone-50 border-y-0 border-x-2 border-amber-400 p-10 text-center text-stone-600">
            <Info className="h-8 w-8 text-amber-500 mx-auto mb-2" />
            <p className="font-serif text-base font-bold text-[#3E0B02]">
              कोई अनुष्ठान नहीं मिला
            </p>
            <p className="text-xs text-stone-500 mt-1">
              कृपया भिन्न शब्द खोजें अथवा अन्य श्रेणी चुनें।
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
                setCurrentPage(1);
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#AF0807] text-white text-xs font-bold"
            >
              समस्त 16 अनुष्ठान देखें
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {paginatedPujas.map((puja) => {
              const Icon = puja.icon;
              return (
                <div
                  key={puja.id}
                  className="group rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] hover:shadow-[0_12px_32px_-4px_rgba(175,8,7,0.16)] p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Top Header: Category & Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#AF0807] bg-red-50 border border-red-200/60 rounded-md px-2 py-0.5">
                        {puja.categoryLabel}
                      </span>
                      <span className="text-[10.5px] font-bold text-amber-900 bg-amber-100/70 border border-amber-300/60 rounded-full px-2.5 py-0.5">
                        {puja.badge}
                      </span>
                    </div>

                    {/* Location Pin */}
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-stone-500 mb-2">
                      <MapPin className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>माँ बगलामुखी सिद्धपीठ, नलखेड़ा</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#3E0B02] leading-snug mb-2 group-hover:text-[#AF0807] transition-colors">
                      {puja.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {puja.shortDesc}
                    </p>

                    {/* Key Attributes Box */}
                    <div className="space-y-1.5 p-3 rounded-2xl bg-[#FFFDF9] border border-amber-200/60 text-[11.5px] text-stone-700 mb-5">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                        <span className="text-stone-500">अवधि:</span>
                        <span className="font-semibold text-stone-800 truncate">
                          {puja.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Scroll className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                        <span className="text-stone-500">मंत्र संख्या:</span>
                        <span className="font-semibold text-stone-800 truncate">
                          {puja.mantraCount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Direct WhatsApp Booking & View Details */}
                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppBooking(puja.title)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                    >
                      <MessageCircle className="h-4 w-4 text-amber-300" />
                      <span>अनुष्ठान बुक करें / संकल्प लें</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPuja(puja)}
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

        {/* ================= PAGINATION CONTROLS (3 PUJAS AT A TIME) ================= */}
        {filteredPujas.length > 0 && totalPages > 1 && (
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
            {/* Devotional Count & Page Indicator */}
            <div className="text-xs sm:text-sm text-stone-600 font-medium">
              प्रदर्शित:{" "}
              <span className="font-bold text-[#3E0B02]">
                {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredPujas.length)}
              </span>{" "}
              / कुल <span className="font-bold text-[#AF0807]">{filteredPujas.length}</span> अनुष्ठान (पृष्ठ {currentPage} / {totalPages})
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Prev Button */}
              <button
                type="button"
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage((prev) => prev - 1);
                    const el = document.getElementById("puja-catalog");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3.5 py-2 rounded-full border border-stone-200 bg-white text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                aria-label="पिछला पृष्ठ"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">पिछला</span>
              </button>

              {/* Numbered Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => {
                      setCurrentPage(pageNum);
                      const el = document.getElementById("puja-catalog");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#AF0807] text-white shadow-md shadow-red-900/20 scale-105"
                        : "bg-white text-stone-700 hover:bg-amber-50 border border-stone-200"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage((prev) => prev + 1);
                    const el = document.getElementById("puja-catalog");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3.5 py-2 rounded-full border border-stone-200 bg-white text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                aria-label="अगला पृष्ठ"
              >
                <span className="hidden sm:inline">अगला</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= MODAL VIEW FOR DETAILED PUJA SPECS ================= */}
        {selectedPuja && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedPuja(null)}
          >
            <div
              className="relative w-full max-w-2xl rounded-3xl bg-white border-y-0 border-x-2 border-amber-400 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPuja(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                aria-label="बंद करें"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Badges */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#AF0807] bg-red-50 border border-red-200/60 rounded-md px-2 py-0.5">
                  {selectedPuja.categoryLabel}
                </span>
                <span className="text-[10.5px] font-bold text-amber-900 bg-amber-100/70 border border-amber-300/60 rounded-full px-2.5 py-0.5">
                  {selectedPuja.badge}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3E0B02] leading-tight mb-2">
                {selectedPuja.title}
              </h3>

              {/* Mantra Snippet */}
              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs font-serif text-amber-950 font-semibold mb-4">
                {selectedPuja.mantraExcerpt}
              </div>

              {/* Significance */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
                {selectedPuja.significance}
              </p>

              {/* Detailed Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm text-stone-700 mb-6">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-[#AF0807]" />
                    <span>अवधि एवं मंत्र संख्या</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedPuja.duration} • {selectedPuja.mantraCount}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <Flame className="h-4 w-4 text-[#AF0807]" />
                    <span>वैदिक एवं तांत्रिक सामग्री</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedPuja.samagri}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <CheckCircle2 className="h-4 w-4 text-[#AF0807]" />
                    <span>किन परिस्थितियों में विशेष फलदायी</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedPuja.idealFor}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="font-bold text-[#3E0B02] flex items-center gap-2 mb-1">
                    <Scroll className="h-4 w-4 text-[#AF0807]" />
                    <span>प्रसाद एवं रक्षा सूत्र प्रेषण</span>
                  </div>
                  <p className="text-stone-600 pl-6">
                    {selectedPuja.prasad}
                  </p>
                </div>
              </div>

              {/* Devotee Info Required */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300/80 mb-6 text-xs text-amber-950">
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  <Info className="h-4 w-4 text-[#AF0807]" />
                  <span>संकल्प हेतु आवश्यक विवरण:</span>
                </div>
                <p>
                  यजमान का पूरा नाम, गोत्र, निवास स्थान एवं समस्या का विवरण। पंडित जी द्वारा शुभ मुहूर्त सुनिश्चित कर आपको सूचित किया जाएगा।
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleWhatsAppBooking(selectedPuja.title)}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <MessageCircle className="h-4 w-4 text-amber-300" />
                  <span>पंडित जी से संकल्प व बुकिंग हेतु बात करें</span>
                </button>

                <a
                  href="tel:+917726815642"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-stone-100 hover:bg-stone-200 text-[#3E0B02] font-bold text-xs sm:text-sm transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-[#AF0807]" />
                  <span>+91 77268 15642</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
