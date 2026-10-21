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

type QueryType = "hawan_puja" | "kundali_jyotish";

const HAWAN_PUJA_OPTIONS = [
  "माँ बगलामुखी महाहवन (शत्रु विजय व संकट नाश)",
  "विशेष तांत्रिक-वैदिक बगलामुखी अनुष्ठान",
  "महामृत्युंजय महाजाप एवं शांति हवन",
  "कालसर्प / पितृ दोष निवारण अनुष्ठान",
  "नवचंडी / शतचंडी महायज्ञ",
  "ग्रह शांति व अन्य विशेष संकल्पित पूजा",
];

const KUNDALI_OPTIONS = [
  "संपूर्ण जन्म पत्रिका (कुंडली) विश्लेषण",
  "विवाह एवं मांगलिक दोष विचार / मिलान",
  "व्यापार, नौकरी एवं आर्थिक बाधा निवारण",
  "ग्रह शांति एवं प्रामाणिक रत्न परामर्श",
  "संतान, शिक्षा एवं स्वास्थ्य संबंधी विचार",
  "दैनिक जीवन कष्ट निवारण व वर्षफल",
];

export default function ContactForm() {
  const [queryType, setQueryType] = useState<QueryType>("hawan_puja");
  
  // Common Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [serviceSubject, setServiceSubject] = useState(HAWAN_PUJA_OPTIONS[0]);
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

  // Handle Type Change
  const handleTypeChange = (type: QueryType) => {
    setQueryType(type);
    if (type === "hawan_puja") {
      setServiceSubject(HAWAN_PUJA_OPTIONS[0]);
    } else {
      setServiceSubject(KUNDALI_OPTIONS[0]);
    }
    setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage("कृपया अपना पूरा नाम दर्ज करें।");
      return;
    }

    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMessage("कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।");
      return;
    }

    setErrorMessage("");
    setSubmitted(true);

    const isHawan = queryType === "hawan_puja";
    const typeLabel = isHawan
      ? "हवन एवं पूजा अनुष्ठान"
      : "कुंडली एवं ज्योतिष परामर्श";

    // Build Formatted WhatsApp Message
    let text = `॥ श्री माँ बगलामुखी शरणम् ॥\n`;
    text += `*नई सेवा / परामर्श पूछताछ (वेबसाइट)*\n`;
    text += `--------------------------------\n`;
    text += `*पूछताछ का प्रकार:* ${typeLabel}\n`;
    text += `*यजमान का नाम:* ${name.trim()}\n`;
    text += `*मोबाइल नंबर:* ${phone.trim()}\n`;
    if (city.trim()) text += `*शहर / राज्य:* ${city.trim()}\n`;
    text += `*विषय / सेवा:* ${serviceSubject}\n`;

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

    // WhatsApp URL to Pandit Ji's phone number 7726815642
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917726815642?text=${encoded}`;

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
          1. आप किस सेवा के लिए संपर्क करना चाहते हैं?
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
                हवन एवं पूजा अनुष्ठान
              </div>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-1 leading-snug">
                माँ बगलामुखी महाहवन, शत्रु बाधा निवारण, महामृत्युंजय व विशेष शांति पूजा
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
                कुंडली एवं ज्योतिष परामर्श
              </div>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-1 leading-snug">
                जन्म पत्रिका विश्लेषण, विवाह-मांगलिक विचार, ग्रह शांति व समस्या निदान
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
            <span className="font-bold text-[#AF0807]">पूछताछ विवरण तैयार है!</span>
            <p className="text-amber-900 mt-0.5">
              व्हाट्सएप खुल रहा है... यदि नहीं खुला, तो नीचे दिए गए सीधे नंबर <strong>7726815642</strong> पर संदेश भेजें।
            </p>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Section Heading: Personal Details */}
        <div className="border-t border-stone-100 pt-5">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            2. आपका व्यक्तिगत विवरण
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                पूरा नाम (Full Name) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <User className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="उदा. राहुल शर्मा"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Mobile / WhatsApp Number */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                मोबाइल / व्हाट्सएप नंबर <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Phone className="h-4 w-4" />
                </div>
                <input
                  type="tel"
                  required
                  placeholder="10 अंकों का मोबाइल नंबर"
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
              आपका शहर एवं राज्य (City, State)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <MapPin className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="उदा. इंदौर, मध्य प्रदेश"
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
            3. {queryType === "hawan_puja" ? "हवन व पूजा का चयन करें" : "ज्योतिष परामर्श विषय चुनें"}
          </label>

          <select
            value={serviceSubject}
            onChange={(e) => setServiceSubject(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 font-medium focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
          >
            {(queryType === "hawan_puja" ? HAWAN_PUJA_OPTIONS : KUNDALI_OPTIONS).map(
              (item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        {/* Dynamic Fields based on Type */}
        {queryType === "hawan_puja" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Gotra */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                गोत्र (यदि ज्ञात हो)
              </label>
              <input
                type="text"
                placeholder="उदा. भारद्वाज, कश्यप"
                value={gotra}
                onChange={(e) => setGotra(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#AF0807] focus:bg-white transition-colors"
              />
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                वांछित पूजा / दर्शन तिथि
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
                जन्म तिथि (DOB)
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
                जन्म समय (Birth Time)
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
                जन्म स्थान (City)
              </label>
              <input
                type="text"
                placeholder="उदा. उज्जैन"
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
            समस्या या विशेष संकल्प का संक्षिप्त विवरण (संदेश)
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3.5 pointer-events-none text-stone-400">
              <FileText className="h-4 w-4" />
            </div>
            <textarea
              rows={3}
              placeholder="अपनी समस्या, कोर्ट केस, शत्रु बाधा, स्वास्थ्य, व्यापार रुकावट या विशेष संकल्प के बारे में लिखें..."
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
            <span>व्हाट्सएप पर सीधी पूछताछ भेजें (WhatsApp Inquiry)</span>
          </button>

          {/* Direct Call Button */}
          <a
            href="tel:+917726815642"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#AF0807] hover:bg-[#8B0605] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <PhoneCall className="h-4 w-4" />
            <span>सीधा कॉल करें</span>
          </a>
        </div>

        {/* Confidentiality Assurance */}
        <p className="text-center text-[11px] text-stone-500 pt-1">
          🔒 आपकी समस्त जानकारी पूर्णतः गोपनीय रखी जाती है। पंडित दीपक शर्मा जी द्वारा व्यक्तिगत रूप से संपर्क किया जाएगा।
        </p>

      </form>

    </div>
  );
}
