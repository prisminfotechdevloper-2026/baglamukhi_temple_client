"use client";

import { useState } from "react";
import {
  Flame,
  Compass,
  Send,
  PhoneCall,
  User,
  Phone,
  MapPin,
  Calendar,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
    setSubmitted(true);

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
    // Number 1 (+91 82392 39249) -> Hawan / Puja inquiries
    // Number 2 (+91 90791 49299) -> Kundali / Jyotish inquiries
    const targetPhone = isHawan ? "918239239249" : "919079149299";
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encoded}`;

    // Open WhatsApp in new tab / app
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <div className="w-full bg-white rounded-3xl border-y-0 border-x-2 border-amber-400 hover:border-amber-500 shadow-[0_6px_24px_-4px_rgba(217,119,6,0.12)] p-6 sm:p-8 md:p-10 transition-all duration-300">
      
      {/* Step 1: Query Type Selector (Two Tabs) */}
      <div className="mb-8">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
          {t({
            hi: "1. आप किस सेवा के लिए संपर्क करना चाहते हैं?",
            en: "1. Select Inquiry Type / Service Requirement",
          })}
        </label>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Tab 1: Hawan & Puja */}
          <button
            type="button"
            onClick={() => handleTypeChange("hawan_puja")}
            className={`flex items-start gap-3.5 p-4 rounded-2xl border-2 transition-all cursor-pointer text-left ${
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
            className={`flex items-start gap-3.5 p-4 rounded-2xl border-2 transition-all cursor-pointer text-left ${
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
                hi: `व्हाट्सएप खुल रहा है... यदि नहीं खुला, तो सीधे नंबर ${queryType === "hawan_puja" ? "+91 82392 39249" : "+91 90791 49299"} पर संदेश भेजें।`,
                en: `Opening WhatsApp... If it does not open, please message directly to ${queryType === "hawan_puja" ? "+91 82392 39249" : "+91 90791 49299"}.`,
              })}
            </p>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Section Heading: Personal Details */}
        <div className="border-t border-stone-100 pt-5">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            {t({
              hi: "2. आपका व्यक्तिगत विवरण",
              en: "2. Personal Details (Devotee / Yajman)",
            })}
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "पूरा नाम (Full Name)", en: "Full Name (Yajman)" })}{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <User className="h-4 w-4" />
                </div>
                <input
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
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "मोबाइल / व्हाट्सएप नंबर", en: "Mobile / WhatsApp Number" })}{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Phone className="h-4 w-4" />
                </div>
                <input
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
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              {t({ hi: "आपका शहर एवं राज्य (City, State)", en: "City & State (Location)" })}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <MapPin className="h-4 w-4" />
              </div>
              <input
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
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
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
            value={activeSubject}
            onChange={(e) => setServiceSubject(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 font-medium focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
          >
            {currentOptions.map((item, idx) => (
              <option key={idx} value={t(item)}>
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
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "गोत्र (यदि ज्ञात हो)", en: "Gotra (If known / Optional)" })}
              </label>
              <input
                type="text"
                placeholder={t({ hi: "उदा. भारद्वाज, कश्यप", en: "e.g. Bharadwaj, Kashyap" })}
                value={gotra}
                onChange={(e) => setGotra(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
              />
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "वांछित पूजा / दर्शन तिथि", en: "Preferred Puja / Sankalp Date" })}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Calendar className="h-4 w-4" />
                </div>
                <input
                  type="date"
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
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "जन्म तिथि (DOB)", en: "Date of Birth (DOB)" })}
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
              />
            </div>

            {/* Birth Time */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "जन्म समय (Birth Time)", en: "Birth Time (Approx / Exact)" })}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Clock className="h-4 w-4" />
                </div>
                <input
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Birth Place */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                {t({ hi: "जन्म स्थान (City)", en: "Birth Place (City / District)" })}
              </label>
              <input
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
          <label className="block text-xs font-semibold text-stone-700 mb-1.5">
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
        <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
          {/* WhatsApp Direct Submit Button */}
          <button
            type="submit"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#7A0505] hover:from-[#940706] hover:to-[#600303] text-white text-sm font-bold shadow-lg shadow-red-950/20 hover:shadow-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer border border-amber-300/40"
          >
            <Send className="h-4 w-4 text-amber-300" />
            <span>
              {t({
                hi: "व्हाट्सएप पर सीधी पूछताछ भेजें (WhatsApp Inquiry)",
                en: "Send Direct WhatsApp Inquiry (Connect Now)",
              })}
            </span>
          </button>

          {/* Direct Call Button (Priority 1) */}
          <a
            href="tel:+918239239249"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <PhoneCall className="h-4 w-4" />
            <span>{t({ hi: "सीधा कॉल करें", en: "Call Directly" })}</span>
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
