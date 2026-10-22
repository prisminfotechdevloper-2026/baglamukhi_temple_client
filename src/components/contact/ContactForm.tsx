"use client";

import { useState } from "react";
import {
  Flame,
  Compass,
  PhoneCall,
  User,
  Phone,
  MapPin,
  Calendar,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/data/siteConfig";

type QueryType = "hawan_puja" | "kundali_jyotish";

const HAWAN_PUJA_OPTIONS = [
  {
    hi: "माँ बगलामुखी महाहवन (शत्रु विजय व संकट नाश)",
    en: "Maa Baglamukhi Mahahawan (Shatru Vijay & Sankat Nash)",
  },
  {
    hi: "विशेष तांत्रिक-वैदिक बगलामुखी अनुष्ठान",
    en: "Special Tantrik-Vedic Baglamukhi Anushthan",
  },
  {
    hi: "महामृत्युंजय महाजाप एवं शांति हवन",
    en: "Mahamrityunjaya Mahajaap & Shanti Hawan",
  },
  {
    hi: "कालसर्प / पितृ दोष निवारण अनुष्ठान",
    en: "Kaal Sarp / Pitra Dosh Nivaran Anushthan",
  },
  {
    hi: "नवचंडी / शतचंडी महायज्ञ",
    en: "Navchandi / Shatchandi Mahayagya",
  },
  {
    hi: "ग्रह शांति व अन्य विशेष संकल्पित पूजा",
    en: "Graha Shanti & Special Sankalp Puja",
  },
];

const KUNDALI_OPTIONS = [
  {
    hi: "संपूर्ण जन्म पत्रिका (कुंडली) विश्लेषण",
    en: "Complete Janam Patrika (Kundali) Analysis",
  },
  {
    hi: "विवाह एवं मांगलिक दोष विचार / मिलान",
    en: "Vivah & Manglik Dosh Analysis / Gun Milan",
  },
  {
    hi: "व्यापार, नौकरी एवं आर्थिक बाधा निवारण",
    en: "Business, Career & Financial Obstacle Nivaran",
  },
  {
    hi: "ग्रह शांति एवं प्रामाणिक रत्न परामर्श",
    en: "Graha Shanti & Certified Gemstone Consultation",
  },
  {
    hi: "संतान, शिक्षा एवं स्वास्थ्य संबंधी विचार",
    en: "Childbirth, Education & Health Consultation",
  },
  {
    hi: "दैनिक जीवन कष्ट निवारण व वर्षफल",
    en: "Daily Life Problem Solutions & Varshphal Report",
  },
];

export default function ContactForm() {
  const { language, t } = useLanguage();
  const [queryType, setQueryType] = useState<QueryType>("hawan_puja");
  
  // Common Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [serviceSubject, setServiceSubject] = useState("");
  const [message, setMessage] = useState("");
  
  // Specific to Hawan/Puja
  const [gotra, setGotra] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  // Specific to Kundali
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const currentOptions = queryType === "hawan_puja" ? HAWAN_PUJA_OPTIONS : KUNDALI_OPTIONS;
  const activeSubject = serviceSubject || t(currentOptions[0]);

  // Handle Type Change
  const handleTypeChange = (type: QueryType) => {
    setQueryType(type);
    const newOptions = type === "hawan_puja" ? HAWAN_PUJA_OPTIONS : KUNDALI_OPTIONS;
    setServiceSubject(t(newOptions[0]));
    setErrorMessage("");
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setCity("");
    setMessage("");
    setGotra("");
    setPreferredDate("");
    setDob("");
    setBirthTime("");
    setBirthPlace("");
    setSubmitted(false);
    setErrorMessage("");
    setGeneratedWhatsAppUrl("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage(
        t({
          hi: "कृपया अपना पूरा नाम दर्ज करें।",
          en: "Please enter your full name.",
        })
      );
      return;
    }

    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMessage(
        t({
          hi: "कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।",
          en: "Please enter a valid 10-digit mobile number.",
        })
      );
      return;
    }

    setErrorMessage("");

    const isHawan = queryType === "hawan_puja";
    const typeLabel = isHawan
      ? t({ hi: "हवन एवं पूजा अनुष्ठान", en: "Hawan & Puja Anushthan" })
      : t({ hi: "कुंडली एवं ज्योतिष परामर्श", en: "Kundali & Jyotish Consultation" });

    // Build Formatted WhatsApp Message
    let text = `॥ श्री माँ बगलामुखी शरणम् ॥\n`;
    text += `*नई सेवा / परामर्श पूछताछ (वेबसाइट)*\n`;
    text += `--------------------------------\n`;
    text += `*पूछताछ का प्रकार:* ${typeLabel}\n`;
    text += `*यजमान का नाम:* ${name.trim()}\n`;
    text += `*मोबाइल नंबर:* ${phone.trim()}\n`;
    if (city.trim()) text += `*शहर / राज्य:* ${city.trim()}\n`;
    text += `*विषय / सेवा:* ${activeSubject}\n`;

    if (isHawan) {
      if (gotra.trim()) text += `*गोत्र:* ${gotra.trim()}\n`;
      if (preferredDate.trim()) text += `*वांछित तिथि:* ${preferredDate.trim()}\n`;
    } else {
      if (dob.trim()) text += `*जन्म तिथि:* ${dob.trim()}\n`;
      if (birthTime.trim()) text += `*जन्म समय:* ${birthTime.trim()}\n`;
      if (birthPlace.trim()) text += `*जन्म स्थान:* ${birthPlace.trim()}\n`;
    }

    if (message.trim()) {
      text += `*समस्या / विवरण:* ${message.trim()}\n`;
    }

    text += `--------------------------------\n`;
    text += `पंडित दीपक शर्मा जी, कृपया मार्गदर्शन प्रदान करें।`;

    // Routing Logic:
    // Phone 1 (+91 72240 83313) -> Hawan / Puja inquiries
    // Phone 2 (+91 95756 64204) -> Kundali / Jyotish inquiries
    const targetPhone = isHawan ? siteConfig.contact.phone1Raw : siteConfig.contact.phone2Raw;
    const whatsappUrl = getWhatsAppUrl(targetPhone, text);

    setGeneratedWhatsAppUrl(whatsappUrl);
    setSubmitted(true);

    // Direct synchronous trigger (Not blocked by browser popup blocker)
    try {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Fallback is rendered immediately on screen for user to click
    }
  };

  // Render Confirmation / Fallback Screen when Submitted
  if (submitted) {
    const isHawan = queryType === "hawan_puja";
    const targetPhoneDisplay = isHawan ? siteConfig.contact.phone1 : siteConfig.contact.phone2;
    const targetPhoneRaw = isHawan ? siteConfig.contact.phone1Raw : siteConfig.contact.phone2Raw;

    return (
      <div className="w-full bg-white rounded-3xl border-y-0 border-x-2 border-amber-400 p-6 sm:p-8 md:p-10 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] text-center transition-colors duration-300 animate-fadeIn">
        {/* Sacred Header Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-300 px-4 py-1.5 text-xs font-serif font-bold text-amber-900 mb-4">
          <span>॥ श्री माँ बगलामुखी कृपा ॥</span>
        </div>

        {/* Success Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 ring-8 ring-emerald-50">
          <CheckCircle2 className="h-9 w-9 text-emerald-600" />
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3E0B02]">
          {t({
            hi: "आपकी पूछताछ सफलतापूर्वक तैयार है!",
            en: "Your Inquiry is Ready!",
          })}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
          {t({
            hi: "पंडित दीपक शर्मा जी को आपका विवरण प्रेषित करने के लिए नीचे दिए गए हरे बटन पर क्लिक करें। यदि व्हाट्सएप स्वतः नहीं खुला है, तो कृपया नीचे दिए गए बटन को दबाएं।",
            en: "Tap the green button below to send your details directly to Pandit Deepak Sharma Ji on WhatsApp. If WhatsApp did not open automatically, please tap below.",
          })}
        </p>

        {/* Inquiry Summary Box */}
        <div className="mt-6 rounded-2xl bg-stone-50 border border-stone-200/90 p-4 sm:p-5 text-left text-xs max-w-lg mx-auto space-y-2.5">
          <div className="flex justify-between border-b border-stone-200/80 pb-2">
            <span className="text-stone-500 font-medium">
              {t({ hi: "यजमान का नाम:", en: "Devotee Name:" })}
            </span>
            <span className="font-bold text-stone-900">{name}</span>
          </div>
          <div className="flex justify-between border-b border-stone-200/80 pb-2">
            <span className="text-stone-500 font-medium">
              {t({ hi: "मोबाइल नंबर:", en: "Phone Number:" })}
            </span>
            <span className="font-bold text-stone-900">{phone}</span>
          </div>
          <div className="flex justify-between border-b border-stone-200/80 pb-2">
            <span className="text-stone-500 font-medium">
              {t({ hi: "चयनित सेवा:", en: "Selected Service:" })}
            </span>
            <span className="font-bold text-[#AF0807]">{activeSubject}</span>
          </div>
          {isHawan && gotra && (
            <div className="flex justify-between border-b border-stone-200/80 pb-2">
              <span className="text-stone-500 font-medium">
                {t({ hi: "गोत्र:", en: "Gotra:" })}
              </span>
              <span className="font-bold text-stone-900">{gotra}</span>
            </div>
          )}
          {isHawan && preferredDate && (
            <div className="flex justify-between border-b border-stone-200/80 pb-2">
              <span className="text-stone-500 font-medium">
                {t({ hi: "वांछित तिथि:", en: "Preferred Date:" })}
              </span>
              <span className="font-bold text-stone-900">{preferredDate}</span>
            </div>
          )}
          {city && (
            <div className="flex justify-between border-b border-stone-200/80 pb-2">
              <span className="text-stone-500 font-medium">
                {t({ hi: "स्थान / शहर:", en: "City / State:" })}
              </span>
              <span className="font-bold text-stone-900">{city}</span>
            </div>
          )}
        </div>

        {/* Action Buttons: 100% Unblockable Native Anchor */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          {/* Guaranteed WhatsApp Opener */}
          <a
            href={generatedWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-lg shadow-emerald-900/15 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <WhatsAppIcon className="h-5 w-5 text-white" />
            <span>
              {t({
                hi: "व्हाट्सएप पर चैट शुरू करें",
                en: "Open WhatsApp Chat Now",
              })}
            </span>
          </a>

          {/* Direct Phone Call Button */}
          <a
            href={`tel:+${targetPhoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white text-sm font-bold shadow-md transition-colors cursor-pointer"
          >
            <PhoneCall className="h-4 w-4" />
            <span>
              {t({ hi: "सीधा कॉल करें", en: "Direct Call" })} ({targetPhoneDisplay})
            </span>
          </a>
        </div>

        {/* Reset / Send Another Inquiry Button */}
        <div className="mt-6 pt-5 border-t border-stone-200/80">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-semibold text-[#8B0000] hover:text-[#AF0807] inline-flex items-center gap-1.5 cursor-pointer hover:underline transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>
              {t({
                hi: "अन्य पूजा या नई पूछताछ हेतु पुनः फॉर्म भरें",
                en: "Submit Another Inquiry / Fill Form Again",
              })}
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-3xl border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] p-6 sm:p-8 md:p-10 transition-colors duration-300">
      
      {/* Step 1: Query Type Selector (Two Tabs) */}
      <div className="mb-8">
        <p className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
          {t({
            hi: "1. आप किस सेवा के लिए संपर्क करना चाहते हैं?",
            en: "1. Select Inquiry Type / Service Requirement",
          })}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Tab 1: Hawan & Puja */}
          <button
            type="button"
            onClick={() => handleTypeChange("hawan_puja")}
            className={`flex items-start gap-3.5 p-4 rounded-2xl border-2 transition-colors cursor-pointer text-left ${
              queryType === "hawan_puja"
                ? "border-[#AF0807] bg-red-50/60 shadow-md ring-2 ring-red-200"
                : "border-stone-200 bg-stone-50/60 hover:border-amber-300 hover:bg-amber-50/30"
            }`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                queryType === "hawan_puja"
                  ? "bg-[#AF0807] text-white"
                  : "bg-stone-200 text-stone-600"
              }`}
            >
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <div className="font-serif text-sm sm:text-base font-bold text-[#3E0B02] leading-tight">
                {t({ hi: "हवन एवं पूजा अनुष्ठान", en: "Hawan & Puja Anushthan" })}
              </div>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-1 leading-snug">
                {t({
                  hi: "माँ बगलामुखी महाहवन, शत्रु बाधा निवारण, महामृत्युंजय व विशेष शांति पूजा",
                  en: "Maa Baglamukhi Mahahawan, Shatru Badha Nivaran, Mahamrityunjaya & Shanti Puja",
                })}
              </p>
            </div>
          </button>

          {/* Tab 2: Kundali & Jyotish */}
          <button
            type="button"
            onClick={() => handleTypeChange("kundali_jyotish")}
            className={`flex items-start gap-3.5 p-4 rounded-2xl border-2 transition-colors cursor-pointer text-left ${
              queryType === "kundali_jyotish"
                ? "border-[#AF0807] bg-red-50/60 shadow-md ring-2 ring-red-200"
                : "border-stone-200 bg-stone-50/60 hover:border-amber-300 hover:bg-amber-50/30"
            }`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                queryType === "kundali_jyotish"
                  ? "bg-[#AF0807] text-white"
                  : "bg-stone-200 text-stone-600"
              }`}
            >
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <div className="font-serif text-sm sm:text-base font-bold text-[#3E0B02] leading-tight">
                {t({ hi: "कुंडली एवं ज्योतिष परामर्श", en: "Kundali & Jyotish Consultation" })}
              </div>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-1 leading-snug">
                {t({
                  hi: "जन्म पत्रिका विश्लेषण, विवाह-मांगलिक विचार, ग्रह शांति व समस्या निदान",
                  en: "Birth Chart Analysis, Marriage-Manglik Matching, Graha Shanti & Remedies",
                })}
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Error Alert */}
      {errorMessage && (
        <div className="mb-6 flex items-center gap-2 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Success Notification */}
      {submitted && (
        <div className="mb-6 flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#AF0807] mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-[#AF0807]">
              {t({
                hi: "पूछताछ विवरण तैयार है!",
                en: "Inquiry Details Ready!",
              })}
            </span>
            <p className="text-amber-900 mt-0.5">
              {t({
                hi: `व्हाट्सएप खुल रहा है... यदि नहीं खुला, तो सीधे नंबर ${queryType === "hawan_puja" ? "+91 72240 83313" : "+91 95756 64204"} पर संदेश भेजें।`,
                en: `Opening WhatsApp... If it does not open, please message directly to ${queryType === "hawan_puja" ? "+91 72240 83313" : "+91 95756 64204"}.`,
              })}
            </p>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Section Heading: Personal Details */}
        <div className="border-t border-stone-100 pt-5">
          <p className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            {t({
              hi: "2. आपका व्यक्तिगत विवरण",
              en: "2. Personal Details (Devotee / Yajman)",
            })}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "पूरा नाम (Full Name)", en: "Full Name (Yajman)" })}{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <User className="h-4 w-4" />
                </div>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder={t({ hi: "उदा. राहुल शर्मा", en: "e.g. Rahul Sharma" })}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Mobile / WhatsApp Number */}
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "मोबाइल / व्हाट्सएप नंबर", en: "Mobile / WhatsApp Number" })}{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Phone className="h-4 w-4" />
                </div>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  placeholder={t({ hi: "10 अंकों का मोबाइल नंबर", en: "10-digit Mobile Number" })}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
                />
              </div>
            </div>
          </div>

          {/* City / State */}
          <div className="mt-4">
            <label htmlFor="contact-city" className="block text-xs font-semibold text-stone-700 mb-1.5">
              {t({ hi: "आपका शहर एवं राज्य (City, State)", en: "City & State (Location)" })}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <MapPin className="h-4 w-4" />
              </div>
              <input
                id="contact-city"
                type="text"
                placeholder={t({ hi: "उदा. इंदौर, मध्य प्रदेश", en: "e.g. Indore, Madhya Pradesh" })}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section Heading: Specific Service Selection */}
        <div className="border-t border-stone-100 pt-5">
          <label htmlFor="contact-service-subject" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
            {queryType === "hawan_puja"
              ? t({
                  hi: "3. हवन व पूजा का चयन करें",
                  en: "3. Select Hawan or Puja Anushthan",
                })
              : t({
                  hi: "3. ज्योतिष परामर्श विषय चुनें",
                  en: "3. Select Jyotish Consultation Topic",
                })}
          </label>

          <select
            id="contact-service-subject"
            aria-label={
              queryType === "hawan_puja"
                ? "हवन व पूजा का चयन करें"
                : "ज्योतिष परामर्श विषय चुनें"
            }
            value={activeSubject}
            onChange={(e) => setServiceSubject(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 font-medium focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
          >
            {currentOptions.map((item) => (
              <option key={t(item)} value={t(item)}>
                {t(item)}
              </option>
            ))}
          </select>
        </div>

        {/* Dynamic Fields based on Type */}
        {queryType === "hawan_puja" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Gotra */}
            <div>
              <label htmlFor="contact-gotra" className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "गोत्र (यदि ज्ञात हो)", en: "Gotra (If known / Optional)" })}
              </label>
              <input
                id="contact-gotra"
                type="text"
                placeholder={t({ hi: "उदा. भारद्वाज, कश्यप", en: "e.g. Bharadwaj, Kashyap" })}
                value={gotra}
                onChange={(e) => setGotra(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
              />
            </div>

            {/* Preferred Date */}
            <div>
              <label htmlFor="contact-preferred-date" className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "वांछित पूजा / दर्शन तिथि", en: "Preferred Puja / Sankalp Date" })}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Calendar className="h-4 w-4" />
                </div>
                <input
                  id="contact-preferred-date"
                  type="date"
                  aria-label="वांछित पूजा तिथि"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            {/* Date of Birth */}
            <div>
              <label htmlFor="contact-dob" className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "जन्म तिथि (DOB)", en: "Date of Birth (DOB)" })}
              </label>
              <input
                id="contact-dob"
                type="date"
                aria-label="जन्म तिथि"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
              />
            </div>

            {/* Birth Time */}
            <div>
              <label htmlFor="contact-birth-time" className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "जन्म समय (Birth Time)", en: "Birth Time (Approx / Exact)" })}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Clock className="h-4 w-4" />
                </div>
                <input
                  id="contact-birth-time"
                  type="time"
                  aria-label="जन्म समय"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Birth Place */}
            <div>
              <label htmlFor="contact-birth-place" className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "जन्म स्थान (City)", en: "Birth Place (City / District)" })}
              </label>
              <input
                id="contact-birth-place"
                type="text"
                placeholder={t({ hi: "उदा. उज्जैन", en: "e.g. Ujjain" })}
                value={birthPlace}
                onChange={(e) => setBirthPlace(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
              />
            </div>
          </div>
        )}

        {/* Message / Problem Description */}
        <div className="border-t border-stone-100 pt-5">
          <label htmlFor="contact-message" className="block text-xs font-semibold text-stone-700 mb-1.5">
            {t({
              hi: "समस्या या विशेष संकल्प का संक्षिप्त विवरण (संदेश)",
              en: "Brief Problem Description or Special Sankalp Details",
            })}
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3.5 pointer-events-none text-stone-400">
              <FileText className="h-4 w-4" />
            </div>
            <textarea
              id="contact-message"
              rows={3}
              placeholder={t({
                hi: "अपनी समस्या, कोर्ट केस, शत्रु बाधा, स्वास्थ्य, व्यापार रुकावट या विशेष संकल्प के बारे में लिखें...",
                en: "Describe your situation: court case, enemy obstacle, health, financial issue, or special sankalp...",
              })}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors resize-none"
            />
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* WhatsApp Direct Submit Button (Authentic WhatsApp Branding) */}
          <button
            type="submit"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] via-[#22C55E] to-[#16A34A] hover:from-[#20BD5A] hover:to-[#15803D] text-white text-sm font-bold shadow-[0_6px_20px_-2px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_28px_-2px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-emerald-300/40"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <WhatsAppIcon className="h-3.5 w-3.5 text-white fill-current" />
            </div>
            <span>
              {t({
                hi: "व्हाट्सएप पर सीधी पूछताछ भेजें",
                en: "Send WhatsApp Inquiry",
              })}
            </span>
          </button>

          {/* Direct Call Button (Temple Maroon with Gold Border & Dynamic Phone Routing) */}
          <a
            href={`tel:+${queryType === "hawan_puja" ? "917224083313" : "919575664204"}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#7A0008] via-[#8B0000] to-[#600202] hover:from-[#600202] hover:to-[#450101] text-white text-sm font-bold shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-amber-400/50"
          >
            <PhoneCall className="h-4 w-4 text-amber-300" />
            <span>
              {t({
                hi: `सीधा कॉल करें (${queryType === "hawan_puja" ? "+91 72240 83313" : "+91 95756 64204"})`,
                en: `Call Directly (${queryType === "hawan_puja" ? "+91 72240 83313" : "+91 95756 64204"})`,
              })}
            </span>
          </a>
        </div>

        {/* Confidentiality Assurance */}
        <p className="text-center text-[11px] text-stone-500 pt-1">
          {t({
            hi: "🔒 आपकी समस्त जानकारी पूर्णतः गोपनीय रखी जाती है। पंडित दीपक शर्मा जी द्वारा व्यक्तिगत रूप से संपर्क किया जाएगा।",
            en: "🔒 100% Confidential & Secure. Pandit Deepak Sharma Ji will personally review and connect with you.",
          })}
        </p>

      </form>

    </div>
  );
}
