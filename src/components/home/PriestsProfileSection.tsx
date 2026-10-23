"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Flame,
  ArrowRight,
  PhoneCall,
  Compass,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { useLanguage, TranslationPair } from "@/context/LanguageContext";
import { siteConfig } from "@/data/siteConfig";

type PriestId = "vishal" | "pawan" | "deepak";

interface PriestTabInfo {
  id: PriestId;
  name: TranslationPair;
  role: TranslationPair;
  badge: TranslationPair;
  exp: TranslationPair;
  thumb: string;
}

interface CredentialItem {
  icon: typeof GraduationCap;
  title: TranslationPair;
  desc: TranslationPair;
  badge: TranslationPair;
  iconColor: string;
}

interface PriestFullData {
  id: PriestId;
  name: TranslationPair;
  titleTag: TranslationPair;
  subTitle: TranslationPair;
  image: string;
  imageAlt: string;
  badge: TranslationPair;
  stat1Num: string;
  stat1Label: TranslationPair;
  stat2Num: string;
  stat2Label: TranslationPair;
  bio: TranslationPair;
  phone: string;
  phoneDisplay: string;
  profileHref: string;
  profileButtonText: TranslationPair;
  credentials: CredentialItem[];
}

export default function PriestsProfileSection() {
  const { t } = useLanguage();
  const [activePriest, setActivePriest] = useState<PriestId>("vishal");

  const tabs: PriestTabInfo[] = [
    {
      id: "vishal",
      name: {
        hi: "1. आचार्य वशिष्ठ विशाल शर्मा",
        en: "1. Acharya Vishal Sharma",
      },
      role: {
        hi: "वरिष्ठ ज्योतिषाचार्य • वशिष्ठ संस्थानम्",
        en: "Senior Astrologer • Vashishtha Sansthan",
      },
      badge: {
        hi: "काशी विद्वत् परिषद् सम्मानित",
        en: "Kashi Vidwat Parishad Honored",
      },
      exp: {
        hi: "10+ वर्ष साधना",
        en: "10+ Yrs Sadhana",
      },
      thumb: "/images/acharya-vashishtha-vishal-sharma-thumb.webp",
    },
    {
      id: "pawan",
      name: {
        hi: "2. पं. पवन शर्मा",
        en: "2. Pt. Pawan Sharma",
      },
      role: {
        hi: "माँ पीताम्बरा साधक • वैदिक पुरोहित",
        en: "Maa Pitambara Sadhak • Vedic Priest",
      },
      badge: {
        hi: "उज्जैन वेद विद्यालय दीक्षित",
        en: "Ujjain Veda Vidyalaya",
      },
      exp: {
        hi: "7+ वर्ष अनुभव",
        en: "7+ Yrs Exp",
      },
      thumb: "/images/pandit-pawan-sharma-thumb.webp",
    },
    {
      id: "deepak",
      name: {
        hi: "3. पं. दीपक शर्मा",
        en: "3. Pt. Deepak Sharma",
      },
      role: {
        hi: "मुख्य यज्ञाचार्य • नलखेड़ा सिद्धपीठ",
        en: "Chief Yagyacharya • Nalkheda",
      },
      badge: {
        hi: "10,000+ यजमान अनुष्ठान",
        en: "10,000+ Yajmans Guided",
      },
      exp: {
        hi: "5+ वर्ष अनुभव",
        en: "5+ Yrs Exp",
      },
      thumb: "/images/pandit-deepak-sharma-new-thumb.webp",
    },
  ];

  const priestsData: Record<PriestId, PriestFullData> = {
    vishal: {
      id: "vishal",
      name: {
        hi: "आचार्य वशिष्ठ विशाल शर्मा",
        en: "Acharya Vashishtha Vishal Sharma",
      },
      titleTag: {
        hi: "वरिष्ठ ज्योतिषाचार्य परिचय • वशिष्ठ ज्योतिष संस्थानम्",
        en: "Senior Astrologer • Vashishtha Jyotish Sansthanam",
      },
      subTitle: {
        hi: "संस्थापक: वशिष्ठ ज्योतिष संस्थानम् • गुरु प्रदत्त नाम: विश्वेश्वरप्रपन्न रामानुज दास",
        en: "Founder: Vashishtha Jyotish Sansthanam • Guru Naam: Vishveshwara Prapanna Ramanuja Das",
      },
      image: "/images/acharya-vashishtha-vishal-sharma.webp",
      imageAlt: "आचार्य वशिष्ठ विशाल शर्मा - वशिष्ठ ज्योतिष संस्थानम्",
      badge: {
        hi: "अखिल भारतीय काशी विद्वत् परिषद् सम्मानित",
        en: "Akhil Bharatiya Kashi Vidwat Parishad Honored",
      },
      stat1Num: "10+ वर्ष",
      stat1Label: { hi: "गूढ़ तंत्र व ज्योतिष साधना", en: "Tantrik-Vedic Sadhana" },
      stat2Num: "Ph.D.",
      stat2Label: { hi: "संस्कृत साहित्य शोधार्थी", en: "Sanskrit Research Scholar" },
      bio: {
        hi: "वशिष्ठ ज्योतिष संस्थानम् के संस्थापक एवं पूज्य गुरुदेव आचार्य वशिष्ठ विशाल शर्मा जी (गुरु प्रदत्त नाम: विश्वेश्वरप्रपन्न रामानुज दास) संस्कृत साहित्य से M.A., B.Ed. उपाधि प्राप्त एवं वर्तमान में Ph.D. शोधार्थी हैं। विगत 10 वर्षों से शीर्ष पूज्य आचार्यों के पावन सानिध्य में रहकर आपने वैदिक ज्योतिष, कर्मकांड एवं महाविद्याओं की गूढ़तम साधनाएं सिद्ध की हैं। ज्योतिष सेवा एवं शास्त्रोक्त अनुसंधान हेतु आप 'अखिल भारतीय काशी विद्वत् परिषद्' से सम्मानित हैं और भक्तों को जन्म पत्रिका फलादेश व सम्पूर्ण जीवन विश्लेषण द्वारा कल्याणकारी मार्गदर्शन प्रदान करते हैं।",
        en: "Founder of Vashishtha Jyotish Sansthanam, Acharya Vashishtha Vishal Sharma Ji (Guru-Pradatta name: Vishveshwara Prapanna Ramanuja Das) holds M.A. and B.Ed. in Sanskrit Literature and is actively pursuing Ph.D. research. Having spent over 10 years undergoing rigorous discipline in Vedic Astrology, Karmakand, and Mahavidyas under supreme Acharyas, he is nationally honored by Akhil Bharatiya Kashi Vidwat Parishad.",
      },
      phone: "+919575664204",
      phoneDisplay: "+91 95756 64204",
      profileHref: "/vishal-ji",
      profileButtonText: {
        hi: "विस्तृत जीवन परिचय व ज्योतिष पीठ पढ़ें",
        en: "Read Full Profile & Jyotish Peeth",
      },
      credentials: [
        {
          icon: GraduationCap,
          title: {
            hi: "संस्कृत साहित्य मर्मज्ञ एवं शोध",
            en: "Sanskrit Literature & Research",
          },
          desc: {
            hi: "संस्कृत साहित्य से विधिवत M.A., B.Ed. उपाधि प्राप्त एवं वर्तमान में Ph.D. उच्च शैक्षिक शोधार्थी।",
            en: "M.A., B.Ed. in Sanskrit Literature and actively pursuing advanced Ph.D. research.",
          },
          badge: {
            hi: "M.A. • B.Ed. • Ph.D.",
            en: "Academic Excellence",
          },
          iconColor: "text-amber-700",
        },
        {
          icon: Flame,
          title: {
            hi: "10+ वर्ष गूढ़ तंत्र-साधना",
            en: "10+ Yrs Tantrik-Vedic Sadhana",
          },
          desc: {
            hi: "विगत 10 वर्षों से शीर्ष पूज्य आचार्यों के पावन सानिध्य में रहकर महाविद्याओं, कर्मकांड एवं ज्योतिष की गूढ़तम साधनाएं सिद्ध की हैं।",
            en: "Over a decade of rigorous sadhana in Mahavidyas, Shastric Karmakand, and astrology under revered Acharyas.",
          },
          badge: {
            hi: "10+ वर्ष साधना",
            en: "10+ Yrs Sadhana",
          },
          iconColor: "text-red-700",
        },
        {
          icon: Award,
          title: {
            hi: "काशी विद्वत् परिषद् सम्मान",
            en: "Kashi Vidwat Parishad Honor",
          },
          desc: {
            hi: "धर्म ज्योतिष महाकुम्भ एवं निस्वार्थ ज्योतिष सेवा हेतु 'अखिल भारतीय काशी विद्वत् परिषद्' द्वारा राष्ट्रीय स्तर पर सम्मानित।",
            en: "Prestigious national honor conferred by Akhil Bharatiya Kashi Vidwat Parishad for astrological welfare.",
          },
          badge: {
            hi: "राष्ट्रीय सम्मान",
            en: "National Award",
          },
          iconColor: "text-amber-600",
        },
        {
          icon: Compass,
          title: {
            hi: "वशिष्ठ ज्योतिष संस्थानम्",
            en: "Vashishtha Jyotish Sansthanam",
          },
          desc: {
            hi: "संस्थान के माध्यम से 12 भावों, ग्रह दोष शांति (कालसर्प, मांगलिक, पितृ) एवं जन्म पत्रिका का शास्त्रोक्त फलादेश प्रदान करते हैं।",
            en: "Providing authentic Janam Kundali diagnosis, dosha remedies (Kaal Sarp, Manglik, Pitra), and life guidance.",
          },
          badge: {
            hi: "संस्थान संस्थापक",
            en: "Sansthan Founder",
          },
          iconColor: "text-orange-700",
        },
      ],
    },
    pawan: {
      id: "pawan",
      name: {
        hi: "आचार्य पं. पवन शर्मा",
        en: "Acharya Pt. Pawan Sharma",
      },
      titleTag: {
        hi: "वैदिक आचार्य परिचय • नलखेड़ा सिद्धपीठ",
        en: "Vedic Acharya Introduction • Nalkheda Siddhapeeth",
      },
      subTitle: {
        hi: "माँ पीताम्बरा अनन्य साधक • वैदिक कर्मकाण्ड व ज्योतिष मर्मज्ञ (7+ वर्ष अनुभव)",
        en: "Devout Maa Pitambara Sadhak • Vedic Karmakand & Jyotish Scholar (7+ Yrs Exp)",
      },
      image: "/images/pandit-pawan-sharma.webp",
      imageAlt: "पंडित पवन शर्मा - माँ बगलामुखी उपासक नलखेड़ा",
      badge: {
        hi: "महामृत्युंजय वेद विद्यालय (उज्जैन) दीक्षित",
        en: "Mahamrityunjaya Veda Vidyalaya Ujjain",
      },
      stat1Num: "7+ वर्ष",
      stat1Label: { hi: "सिद्धपीठ अनुष्ठान साधना", en: "Siddhapeeth Sadhana" },
      stat2Num: "100%",
      stat2Label: { hi: "शास्त्रोक्त वैदिक विधान", en: "Vedic Tradition" },
      bio: {
        hi: "विश्व प्रसिद्ध माँ बगलामुखी सिद्धपीठ (नलखेड़ा) में वैदिक परंपरा अनुसार अनुष्ठान संपन्न कराने वाले पंडित पवन शर्मा जी ने महामृत्युंजय वेद विद्यालय, उज्जैन से कर्मकाण्ड की शास्त्रीय दीक्षा प्राप्त की है। विगत 7+ वर्षों के गहन साधना अनुभव के साथ आप श्री वशिष्ठ ज्योतिष संस्थान केन्द्र से निरंतर संबद्ध होकर भक्तों को जन्मपत्रिका, ग्रह शांति, कालसर्प-मांगलिक दोष एवं शत्रु-बाधा निवारण हेतु प्रामाणिक शास्त्रोक्त मार्गदर्शन प्रदान कर रहे हैं।",
        en: "Conducting authentic Vedic & Tantrik Hawans at world-renowned Maa Baglamukhi Siddhapeeth (Nalkheda), Pandit Pawan Sharma Ji was formally initiated in Karmakand at Mahamrityunjaya Veda Vidyalaya, Ujjain. With 7+ years of deep sadhana and affiliation with Shri Vashishtha Jyotish Sansthan, he guides devotees in Janampatrika, Graha Shanti, and authentic ritual guidance.",
      },
      phone: "+919575664204",
      phoneDisplay: "+91 95756 64204",
      profileHref: "/pawan-ji",
      profileButtonText: {
        hi: "विस्तृत जीवन परिचय एवं सिद्धियां पढ़ें",
        en: "Read Full Profile & Siddhis",
      },
      credentials: [
        {
          icon: GraduationCap,
          title: {
            hi: "वैदिक कर्मकाण्ड व संस्कृत",
            en: "Vedic Karmakand & Sanskrit",
          },
          desc: {
            hi: "महामृत्युंजय वेद विद्यालय (उज्जैन) से विधिवत कर्मकाण्ड प्रशिक्षित एवं संस्कृत अध्ययन।",
            en: "Formally trained in Karmakand at Mahamrityunjaya Veda Vidyalaya (Ujjain) with Sanskrit studies.",
          },
          badge: {
            hi: "वैदिक दीक्षा",
            en: "Vedic Initiation",
          },
          iconColor: "text-amber-600",
        },
        {
          icon: Award,
          title: {
            hi: "श्री वशिष्ठ ज्योतिष संस्थान",
            en: "Shri Vashishtha Jyotish Sansthan",
          },
          desc: {
            hi: "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र से संबद्ध, 7+ वर्षों का गहन ज्योतिषीय व तांत्रिक अनुभव।",
            en: "Associated with Shri Vashishtha Jyotish Sansthan, 7+ years deep astrological & tantrik experience.",
          },
          badge: {
            hi: "7+ वर्ष अनुभव",
            en: "7+ Yrs Experience",
          },
          iconColor: "text-red-700",
        },
        {
          icon: Flame,
          title: {
            hi: "बगलामुखी महाहवन विशेषज्ञ",
            en: "Baglamukhi Mahahawan Specialist",
          },
          desc: {
            hi: "माँ पीताम्बरा के विशिष्ट तांत्रिक-वैदिक अनुष्ठान, शत्रु बाधा निवारण एवं संकट मोचन हवन।",
            en: "Specialized in Tantrik-Vedic Anushthan, Shatru Badha Nivaran & personal Sankalp Hawan.",
          },
          badge: {
            hi: "मुख्य साधना",
            en: "Core Sadhana",
          },
          iconColor: "text-orange-600",
        },
        {
          icon: Compass,
          title: {
            hi: "सटीक जन्म कुंडली परामर्श",
            en: "Accurate Janam Kundali Guidance",
          },
          desc: {
            hi: "ग्रह शांति, कालसर्प, पितृ दोष, मांगलिक विचार एवं व्यक्तिगत जीवन समस्याओं का शास्त्रोक्त वैदिक समाधान।",
            en: "Graha Shanti, Kaal Sarp, Pitra Dosh, Manglik Vichar & personal Vedic remedies.",
          },
          badge: {
            hi: "ज्योतिष मर्मज्ञ",
            en: "Jyotish Expert",
          },
          iconColor: "text-amber-700",
        },
      ],
    },
    deepak: {
      id: "deepak",
      name: {
        hi: "आचार्य पं. दीपक शर्मा",
        en: "Acharya Pt. Deepak Sharma",
      },
      titleTag: {
        hi: "मुख्य यज्ञाचार्य परिचय • नलखेड़ा सिद्धपीठ",
        en: "Chief Yagyacharya Introduction • Nalkheda Siddhapeeth",
      },
      subTitle: {
        hi: "माँ बगलामुखी अनन्य साधक • महाहवन एवं तंत्र निवारण विशेषज्ञ (5+ वर्ष अनुभव)",
        en: "Devout Maa Baglamukhi Sadhak • Mahahawan & Tantra Nivaran Specialist (5+ Yrs Exp)",
      },
      image: "/images/pandit-deepak-sharma-new.webp",
      imageAlt: "पंडित दीपक शर्मा - मुख्य यज्ञाचार्य माँ बगलामुखी मंदिर नलखेड़ा",
      badge: {
        hi: "महामृत्युंजय वेद विद्यालय (उज्जैन) दीक्षित",
        en: "Mahamrityunjaya Veda Vidyalaya Ujjain",
      },
      stat1Num: "5+ वर्ष",
      stat1Label: { hi: "सिद्धपीठ साधना अनुभव", en: "Siddhapeeth Sadhana" },
      stat2Num: "10,000+",
      stat2Label: { hi: "यजमानों का सफल मार्गदर्शन", en: "Devotees Guided" },
      bio: {
        hi: "विश्व के एकमात्र स्वयंभू त्रिमुखी माँ बगलामुखी सिद्धपीठ (नलखेड़ा, लखुंदर नदी तट) में वैदिक मर्यादा एवं शास्त्रोक्त तांत्रिक पद्धति से अनुष्ठान संपन्न कराने वाले पंडित दीपक शर्मा जी को कर्मकाण्ड की प्रामाणिक दीक्षा महामृत्युंजय वेद विद्यालय, उज्जैन से प्राप्त हुई है। आप श्री वशिष्ठ ज्योतिष संस्थान केन्द्र से संबद्ध होकर 5+ वर्षों से अधिक समय से देश-विदेश के यजमानों को शत्रु बाधा निवारण, न्यायालय विजय, अखंड महामंत्र जाप एवं ग्रह शांति हेतु सफल आध्यात्मिक मार्गदर्शन प्रदान कर रहे हैं।",
        en: "Serving at the world's only Swayambhu Trimukhi Maa Baglamukhi Siddhapeeth (Nalkheda), Pandit Deepak Sharma Ji was initiated at Mahamrityunjaya Veda Vidyalaya, Ujjain. Affiliated with Shri Vashishtha Jyotish Sansthan, he has guided over 10,000 devotees in Shatru Badha Nivaran, court cases, and Vedic rituals.",
      },
      phone: "+917224083313",
      phoneDisplay: siteConfig.contact.primaryPhoneFormatted,
      profileHref: "/pandit-ji",
      profileButtonText: {
        hi: "विस्तृत जीवन परिचय एवं सिद्धियां पढ़ें",
        en: "Read Full Profile & Siddhis",
      },
      credentials: [
        {
          icon: GraduationCap,
          title: {
            hi: "वैदिक कर्मकाण्ड व संस्कृत",
            en: "Vedic Karmakand & Sanskrit",
          },
          desc: {
            hi: "महामृत्युंजय वेद विद्यालय (उज्जैन) से विधिवत कर्मकाण्ड प्रशिक्षित एवं 12वीं संस्कृत अध्ययन।",
            en: "Formally trained in Karmakand at Mahamrityunjaya Veda Vidyalaya (Ujjain) with Sanskrit studies.",
          },
          badge: {
            hi: "वैदिक दीक्षा",
            en: "Vedic Initiation",
          },
          iconColor: "text-amber-600",
        },
        {
          icon: Award,
          title: {
            hi: "श्री वशिष्ठ ज्योतिष संस्थान",
            en: "Shri Vashishtha Jyotish Sansthan",
          },
          desc: {
            hi: "श्री वशिष्ठ ज्योतिष संस्थान केन्द्र से संबद्ध, 5+ वर्षों का गहन ज्योतिषीय व तांत्रिक अनुभव।",
            en: "Associated with Shri Vashishtha Jyotish Sansthan, 5+ years deep astrological & tantrik experience.",
          },
          badge: {
            hi: "5+ वर्ष अनुभव",
            en: "5+ Yrs Experience",
          },
          iconColor: "text-red-700",
        },
        {
          icon: Flame,
          title: {
            hi: "बगलामुखी महाहवन विशेषज्ञ",
            en: "Baglamukhi Mahahawan Specialist",
          },
          desc: {
            hi: "माँ पीताम्बरा के विशिष्ट तांत्रिक-वैदिक अनुष्ठान, शत्रु बाधा निवारण एवं संकट मोचन हवन।",
            en: "Specialized in Tantrik-Vedic Anushthan, Shatru Badha Nivaran & personal Sankalp Hawan.",
          },
          badge: {
            hi: "मुख्य साधना",
            en: "Core Sadhana",
          },
          iconColor: "text-orange-600",
        },
        {
          icon: Compass,
          title: {
            hi: "सटीक जन्म कुंडली परामर्श",
            en: "Accurate Janam Kundali Guidance",
          },
          desc: {
            hi: "ग्रह शांति, कालसर्प, पितृ दोष, मांगलिक विचार एवं व्यक्तिगत जीवन समस्याओं का शास्त्रोक्त वैदिक समाधान।",
            en: "Graha Shanti, Kaal Sarp, Pitra Dosh, Manglik Vichar & personal Vedic remedies.",
          },
          badge: {
            hi: "ज्योतिष मर्मज्ञ",
            en: "Jyotish Expert",
          },
          iconColor: "text-amber-700",
        },
      ],
    },
  };

  const current = priestsData[activePriest];

  return (
    <section
      id="priests-profile-section"
      className="w-full bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF4DE] py-12 sm:py-16 md:py-20 border-b border-[#EBD8B4] relative overflow-hidden"
    >
      {/* Background Decorative Temple Halo Watermark */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= SECTION TOP TITLE ================= */}
        <div className="text-left mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#D4AF37] to-[#B45309] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#B45309] font-serif">
              {t({
                hi: "माँ बगलामुखी सिद्धपीठ नलखेड़ा • अधिकृत वैदिक आचार्य एवं पुरोहित मंडल",
                en: "Maa Baglamukhi Siddhapeeth Nalkheda • Authorized Vedic Acharyas & Priests",
              })}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#4A0C16] tracking-tight leading-snug pt-1">
            {t({
              hi: "पूज्य आचार्य एवं पुरोहित परिचय",
              en: "Revered Acharyas & Priests Introduction",
            })}
          </h2>
          <p className="font-serif text-xs sm:text-sm font-semibold text-[#8B0000] mt-1">
            {t({
              hi: "नीचे दी गई पट्टी में से किसी भी आचार्य / पंडित जी पर क्लिक कर उनका विस्तृत परिचय एवं सिद्धियां देखें",
              en: "Click any Acharya / Pandit Ji in the selector below to view their detailed profile & credentials",
            })}
          </p>
        </div>

        {/* ================= HIGHLIGHT ROW (SELECTOR TABS ABOVE HEADER) ================= */}
        <div
          role="tablist"
          aria-label="Priests Selector"
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 sm:mb-10"
        >
          {tabs.map((tab) => {
            const isActive = activePriest === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActivePriest(tab.id)}
                className={`relative p-3 sm:p-4 rounded-xl text-left transition-all duration-300 cursor-pointer flex items-center gap-3.5 ${
                  isActive
                    ? "bg-gradient-to-br from-[#FFF9EE] via-[#FFF3DC] to-[#FFEEC4] border-2 border-[#D89B18] border-l-[6px] border-l-[#8B0000] shadow-md shadow-amber-900/10 scale-[1.01]"
                    : "bg-[#FFFDF8] border border-[#EBD8B4] hover:border-[#D89B18]/70 hover:bg-[#FFF9EE] shadow-2xs opacity-85 hover:opacity-100"
                }`}
              >
                {/* Priest Avatar Thumbnail */}
                <div
                  className={`relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-xl overflow-hidden border-2 transition-colors ${
                    isActive ? "border-[#8B0000] shadow-sm" : "border-[#D89B18]/60"
                  }`}
                >
                  <Image
                    src={tab.thumb}
                    alt={t(tab.name)}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Tab Label Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-[#8B0000] text-amber-100"
                          : "bg-amber-100/90 text-stone-700"
                      }`}
                    >
                      {t(tab.exp)}
                    </span>
                    {isActive && (
                      <span className="flex h-2 w-2 rounded-full bg-[#8B0000] animate-pulse" />
                    )}
                  </div>
                  <h3
                    className={`font-serif text-sm sm:text-base font-black truncate leading-tight ${
                      isActive ? "text-[#8B0000]" : "text-[#4A0C16]"
                    }`}
                  >
                    {t(tab.name)}
                  </h3>
                  <p className="text-[11px] text-stone-600 truncate mt-0.5 font-medium">
                    {t(tab.role)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ================= ACTIVE PRIEST PROFILE CONTENT ================= */}
        <div
          key={current.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in duration-300"
        >
          {/* ================= LEFT COLUMN: Priest Photo with Sacred Halo ================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px]">
              {/* Rotating Divine Sanskrit Halo Ring */}
              <div className="absolute -inset-2.5 rounded-[2rem] bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-70 blur-md animate-pulse" />

              <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden border-2 border-[#D89B18]/70 shadow-2xl bg-gradient-to-b from-[#FFFDF8] to-[#FFF3DC]">
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Subtle Gradient for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A0306] via-[#1A0306]/70 to-transparent z-10" />

                {/* Bottom Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white text-left">
                  <div className="font-serif text-xl sm:text-2xl font-black text-amber-300 leading-tight">
                    {t(current.name)}
                  </div>
                  <div className="text-xs text-amber-100/90 mt-0.5 font-medium">
                    {t({
                      hi: "माँ बगलामुखी सिद्धपीठ नलखेड़ा • वैदिक परंपरा",
                      en: "Maa Baglamukhi Siddhapeeth Nalkheda • Vedic Tradition",
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Counter Ribbon Under Photo */}
            <div className="mt-4 w-full max-w-[420px] grid grid-cols-2 gap-2.5">
              <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-4 border-l-[#D89B18] shadow-xs text-center">
                <span className="font-serif text-base sm:text-lg font-black text-[#8B0000]">
                  {current.stat1Num}
                </span>
                <span className="text-[11px] font-bold text-[#4A0C16]">
                  {t(current.stat1Label)}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-4 border-l-[#D89B18] shadow-xs text-center">
                <span className="font-serif text-base sm:text-lg font-black text-[#D89B18]">
                  {current.stat2Num}
                </span>
                <span className="text-[11px] font-bold text-[#4A0C16]">
                  {t(current.stat2Label)}
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Profile Overview Details ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header */}
            <div className="text-left mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFF2DB] border border-[#ECD19A] text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="h-4 w-4 text-[#D89B18]" />
                <span>{t(current.badge)}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#4A0C16] tracking-tight leading-snug pt-1 mb-1">
                {t(current.name)}
              </h3>
              <p className="font-serif text-sm sm:text-base font-semibold text-[#8B0000] mb-3">
                {t(current.subTitle)}
              </p>
            </div>

            {/* Engaging Bio */}
            <p className="text-[#3D1B10] text-sm sm:text-base leading-relaxed mb-6 font-normal text-left">
              {t(current.bio)}
            </p>

            {/* 4 Clean Credential Tiles (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-7">
              {current.credentials.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title.en}
                    className="relative p-3.5 sm:p-4 rounded-xl bg-[#FFFDF8] border border-[#EBD8B4] border-l-4 border-l-[#D89B18] hover:border-[#D89B18] hover:shadow-md transition-colors group text-left"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-amber-200/60 border border-amber-300/80 shadow-2xs group-hover:scale-105 transition-transform">
                          <Icon className={`h-4 w-4 ${item.iconColor}`} />
                        </div>
                        <span className="font-serif text-sm font-bold text-[#4A0C16]">
                          {t(item.title)}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-[#78350F] bg-amber-500/15 rounded-md px-2 py-0.5 border border-amber-500/30">
                        {t(item.badge)}
                      </span>
                    </div>
                    <p className="text-[12px] text-stone-700 leading-normal pl-10 font-normal">
                      {t(item.desc)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons: Call & View Dedicated Profile */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#EBD8B4]">
              {/* Direct Call Button */}
              <a
                href={`tel:${current.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#8B0000] via-[#A00B1A] to-[#68060F] hover:from-[#68060F] hover:to-[#4A0C16] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-red-950/25 border border-amber-400/50 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="h-4 w-4 text-amber-300" />
                <span>
                  {t({
                    hi: `कॉल करें: ${current.phoneDisplay}`,
                    en: `Call: ${current.phoneDisplay}`,
                  })}
                </span>
              </a>

              {/* View Full Profile */}
              <Link
                href={current.profileHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFFDF8] hover:bg-amber-100/60 text-[#4A0C16] text-xs sm:text-sm font-bold border border-[#D89B18]/70 shadow-xs transition-colors group"
              >
                <span>{t(current.profileButtonText)}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#8B0000]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
