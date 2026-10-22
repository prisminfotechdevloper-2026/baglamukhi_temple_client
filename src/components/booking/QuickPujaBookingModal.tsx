"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Calendar,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import { usePujaBooking } from "@/context/PujaBookingContext";
import { useLanguage } from "@/context/LanguageContext";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

const PANDIT_WHATSAPP = "917224083313";
const PANDIT_CALL = "+917224083313";

const PUJA_OPTIONS = [
  "माँ बगलामुखी शत्रु बाधा एवं तंत्र दोष निवारण महाहवन",
  "कोर्ट-कचहरी, मुकदमा एवं विवाद विजय अनुष्ठान",
  "सवा लाख (1,25,000) बगलामुखी महामंत्र अखंड अनुष्ठान",
  "व्यापार वृद्धि, धन लक्ष्मी व ऋण मुक्ति अनुष्ठान",
  "कालसर्प दोष एवं राहु-केतु शांति महायज्ञ",
  "ई-संकल्प एवं लाइव वीडियो हवन (देश-विदेश के यजमानों हेतु)",
  "रोग-दोष, भय मुक्ति एवं महामृत्युंजय अनुष्ठान",
  "शनि साढ़ेसाती / ढैय्या एवं नवग्रह शांति",
  "विवाह बाधा व मंगल दोष निवारण अनुष्ठान",
  "संतान गोपाल व वंश वृद्धि अनुष्ठान",
  "पितृ दोष निवारण एवं नारायण बलि विधान",
  "अन्य विशेष व्यक्तिगत संकल्प / परामर्श",
];

export interface PujaBookingLead {
  id: string;
  createdAt: string;
  name: string;
  gotra: string;
  pujaType: string;
  preferredDate: string;
  phone: string;
  notes?: string;
  status: "sent_to_whatsapp";
}

export default function QuickPujaBookingModal() {
  const { isOpen, prefilledPuja, closeBookingModal } = usePujaBooking();
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [gotra, setGotra] = useState("");
  const [pujaType, setPujaType] = useState(PUJA_OPTIONS[0]);
  const [preferredDate, setPreferredDate] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<PujaBookingLead | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Today's date in YYYY-MM-DD for date-picker min attribute (client-deferred)
  const [todayStr, setTodayStr] = useState("");

  // Prefill or reset whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setErrors({});

      const now = new Date();
      const currentToday = now.toISOString().split("T")[0];
      setTodayStr(currentToday);

      if (prefilledPuja) {
        const match = PUJA_OPTIONS.find((opt) =>
          opt.toLowerCase().includes(prefilledPuja.toLowerCase())
        );
        setPujaType(match || prefilledPuja);
      } else {
        setPujaType(PUJA_OPTIONS[0]);
      }

      // Default preferred date to tomorrow if empty
      if (!preferredDate) {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        setPreferredDate(tomorrow.toISOString().split("T")[0]);
      }

      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Focus first input
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, prefilledPuja]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBookingModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBookingModal]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = t({
        hi: "कृपया यजमान का पूरा नाम दर्ज करें",
        en: "Please enter yajman full name",
      });
    }

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = t({
        hi: "कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें",
        en: "Please enter a valid 10-digit mobile number",
      });
    }

    if (!preferredDate) {
      newErrors.preferredDate = t({
        hi: "कृपया प्रस्तावित तिथि चुनें",
        en: "Please select a preferred date",
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = (lead: {
    name: string;
    gotra: string;
    pujaType: string;
    preferredDate: string;
    phone: string;
    notes?: string;
  }) => {
    const gotraDisplay = lead.gotra.trim() || "कश्यप (सामान्य)";
    return (
      `🚩 *जय माँ बगलामुखी!* 🚩\n` +
      `पूज्य पंडित दीपक शर्मा जी, माँ बगलामुखी सिद्धपीठ नलखेड़ा में अनुष्ठान बुकिंग हेतु विवरण:\n\n` +
      `👤 *यजमान का नाम:* ${lead.name.trim()}\n` +
      `🏷️ *गोत्र:* ${gotraDisplay}\n` +
      `🪔 *अनुष्ठान / पूजा:* ${lead.pujaType}\n` +
      `📅 *प्रस्तावित शुभ तिथि:* ${lead.preferredDate}\n` +
      `📱 *संपर्क नंबर:* ${lead.phone.trim()}\n` +
      (lead.notes?.trim() ? `📝 *विशेष संकल्प / समस्या:* ${lead.notes.trim()}\n` : "") +
      `\n🚩 *निवेदन:* कृपया पंचांग अनुसार शुभ मुहूर्त, दक्षिणा व संकल्प सामग्री विधान की जानकारी प्रदान करें। सादर प्रणाम।`
    );
  };

  const getWhatsAppUrl = (lead: {
    name: string;
    gotra: string;
    pujaType: string;
    preferredDate: string;
    phone: string;
    notes?: string;
  }) => {
    const message = constructWhatsAppMessage(lead);
    return `https://wa.me/${PANDIT_WHATSAPP}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const newLead: PujaBookingLead = {
        id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        createdAt: new Date().toISOString(),
        name: name.trim(),
        gotra: gotra.trim() || "कश्यप (सामान्य)",
        pujaType,
        preferredDate,
        phone: phone.trim(),
        notes: notes.trim(),
        status: "sent_to_whatsapp",
      };

      // 1. Safe LocalStorage persistence so no lead is lost
      try {
        const stored = localStorage.getItem("baglamukhi_puja_leads");
        const leads: PujaBookingLead[] = stored ? JSON.parse(stored) : [];
        leads.unshift(newLead);
        localStorage.setItem("baglamukhi_puja_leads", JSON.stringify(leads.slice(0, 50)));
      } catch (err) {
        console.warn("Could not save lead to localStorage:", err);
      }

      setSubmittedLead(newLead);
      setIsSuccess(true);

      // 2. Launch WhatsApp with prefilled formatted notification
      const waUrl = getWhatsAppUrl(newLead);
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForNew = () => {
    setName("");
    setGotra("");
    setNotes("");
    setPhone("");
    setIsSuccess(false);
    setSubmittedLead(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeBookingModal();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[540px] max-h-[96vh] flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-amber-300 shadow-[0_20px_60px_rgba(40,10,10,0.5)] text-stone-900 overflow-hidden"
      >
        {/* Top Gold Gradient Accent Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-[#AF0807] to-amber-400 shrink-0" />

        {/* Modal Header */}
        <div className="relative pt-4 sm:pt-5 pb-3 px-5 sm:px-6 text-center border-b border-amber-100/80 bg-gradient-to-b from-[#FFFDF9] to-white shrink-0">
          {/* Close Button */}
          <button
            type="button"
            onClick={closeBookingModal}
            className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors focus:outline-hidden cursor-pointer"
            aria-label={t({ hi: "बंद करें", en: "Close" })}
          >
            <X className="h-4 w-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/50 text-[#8B0000] text-[11px] font-serif font-bold mb-1.5">
            <span>॥ ॐ ह्लीं बगलामुख्यै नमः ॥</span>
          </div>

          <h2
            id="booking-modal-title"
            className="font-serif text-lg sm:text-[21px] font-bold text-[#3E0B02] leading-tight"
          >
            {t({
              hi: "माँ बगलामुखी अनुष्ठान व संकल्प बुकिंग",
              en: "Maa Baglamukhi Puja & Sankalp Booking",
            })}
          </h2>

          <p className="text-[11.5px] sm:text-xs text-stone-500 mt-0.5 font-medium">
            {t({
              hi: "पूज्य पंडित दीपक शर्मा जी द्वारा शास्त्रोक्त संकल्प • माँ बगलामुखी सिद्धपीठ नलखेड़ा",
              en: "Vedic Sankalp by Pt. Deepak Sharma • Nalkheda Siddhapeeth",
            })}
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-5 sm:px-6 py-4 flex-1">
          {/* ================= SUCCESS CONFIRMATION VIEW ================= */}
          {isSuccess && submittedLead ? (
            <div className="py-2 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C4A] text-white shadow-lg shadow-emerald-600/25 ring-4 ring-emerald-50">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div>
                <span className="inline-block px-2.5 py-0.5 text-[10.5px] font-bold text-amber-900 bg-amber-100 border border-amber-300 rounded-full mb-1.5">
                  ॥ शुभ संकल्प प्रेषित ॥
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3E0B02]">
                  {t({
                    hi: "पूजा बुकिंग विवरण दर्ज हो गया!",
                    en: "Booking Request Recorded!",
                  })}
                </h3>
                <p className="text-xs text-stone-600 mt-1 max-w-sm mx-auto leading-relaxed">
                  {t({
                    hi: "पंडित दीपक शर्मा जी के व्हाट्सएप पर आपका संकल्प प्रेषित कर दिया गया है। पंडित जी शीघ्र ही मुहूर्त व दक्षिणा की पुष्टि करेंगे।",
                    en: "Your sankalp details have been dispatched to Pt. Deepak Sharma Ji on WhatsApp. He will confirm muhurat and vidhi shortly.",
                  })}
                </p>
              </div>

              {/* Lead Summary Card */}
              <div className="rounded-xl bg-stone-50 p-3.5 text-left border border-stone-200 text-xs space-y-1.5">
                <div className="flex justify-between border-b border-stone-200/60 pb-1">
                  <span className="text-stone-500">यजमान का नाम:</span>
                  <span className="font-bold text-stone-900">{submittedLead.name}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200/60 pb-1">
                  <span className="text-stone-500">गोत्र:</span>
                  <span className="font-bold text-stone-900">{submittedLead.gotra}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200/60 pb-1">
                  <span className="text-stone-500">अनुष्ठान:</span>
                  <span className="font-bold text-[#AF0807] text-right max-w-[240px] truncate">
                    {submittedLead.pujaType}
                  </span>
                </div>
                <div className="flex justify-between border-b border-stone-200/60 pb-1">
                  <span className="text-stone-500">प्रस्तावित तिथि:</span>
                  <span className="font-bold text-stone-900">{submittedLead.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">संपर्क नंबर:</span>
                  <span className="font-bold text-emerald-800">{submittedLead.phone}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <a
                  href={getWhatsAppUrl(submittedLead)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-4 text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 text-white" />
                  <span>
                    {t({
                      hi: "व्हाट्सएप चैट पुनः खोलें",
                      en: "Reopen WhatsApp Chat",
                    })}
                  </span>
                </a>

                <a
                  href={`tel:${PANDIT_CALL}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-bold py-2.5 px-4 text-xs sm:text-sm border border-stone-300 transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-[#AF0807]" />
                  <span>
                    {t({
                      hi: "पंडित जी से सीधे बात करें (+91 72240 83313)",
                      en: "Call Pandit Ji Directly (+91 72240 83313)",
                    })}
                  </span>
                </a>

                <div className="flex items-center justify-center gap-4 pt-1.5">
                  <button
                    type="button"
                    onClick={handleResetForNew}
                    className="text-xs text-[#AF0807] hover:underline font-semibold cursor-pointer"
                  >
                    {t({ hi: "अन्य अनुष्ठान बुक करें", en: "Book Another Puja" })}
                  </button>
                  <span className="text-stone-300">•</span>
                  <button
                    type="button"
                    onClick={closeBookingModal}
                    className="text-xs text-stone-600 hover:text-stone-900 font-semibold cursor-pointer"
                  >
                    {t({ hi: "समाप्त करें", en: "Done / Close" })}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ================= MAIN BOOKING FORM VIEW ================= */
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              {/* Row 1: 2 Columns on sm: Name & Gotra */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Field 1: Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    {t({ hi: "यजमान का पूरा नाम", en: "Yajman Full Name" })}{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    placeholder={t({
                      hi: "उदा. राहुल शर्मा",
                      en: "e.g. Rahul Sharma",
                    })}
                    className={`w-full rounded-xl bg-white border px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden transition-all shadow-2xs ${
                      errors.name
                        ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-100"
                        : "border-stone-300 focus:border-[#AF0807] focus:ring-2 focus:ring-[#AF0807]/15"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-red-600">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2: Gotra (NO SPARKLE ICON, clean alignment) */}
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    {t({ hi: "गोत्र", en: "Gotra" })}{" "}
                    <span className="text-[11px] font-normal text-stone-500">
                      ({t({ hi: "ज्ञात न हो तो 'कश्यप'", en: "or 'Kashyap'" })})
                    </span>
                  </label>
                  <input
                    type="text"
                    value={gotra}
                    onChange={(e) => setGotra(e.target.value)}
                    placeholder={t({
                      hi: "उदा. कश्यप / भारद्वाज",
                      en: "e.g. Kashyap / Bhardwaj",
                    })}
                    className="w-full rounded-xl bg-white border border-stone-300 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#AF0807] focus:ring-2 focus:ring-[#AF0807]/15 transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Row 2: Puja Type Selector (Full Width) */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  {t({ hi: "अनुष्ठान / पूजा का प्रकार", en: "Puja / Hawan Type" })}{" "}
                  <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select
                    value={pujaType}
                    onChange={(e) => setPujaType(e.target.value)}
                    className="w-full rounded-xl bg-white border border-stone-300 py-2.5 pl-3.5 pr-9 text-xs sm:text-sm text-stone-900 font-medium focus:outline-hidden focus:border-[#AF0807] focus:ring-2 focus:ring-[#AF0807]/15 transition-all appearance-none cursor-pointer shadow-2xs"
                  >
                    {PUJA_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-stone-500">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Row 3: 2 Columns on sm: Preferred Date & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Field 3: Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    {t({ hi: "प्रस्तावित शुभ तिथि", en: "Preferred Date" })}{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={todayStr || undefined}
                      value={preferredDate}
                      onChange={(e) => {
                        setPreferredDate(e.target.value);
                        if (errors.preferredDate)
                          setErrors((prev) => ({ ...prev, preferredDate: "" }));
                      }}
                      className={`w-full rounded-xl bg-white border px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-hidden transition-all shadow-2xs ${
                        errors.preferredDate
                          ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-100"
                          : "border-stone-300 focus:border-[#AF0807] focus:ring-2 focus:ring-[#AF0807]/15"
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-red-600">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                {/* Field 4: Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    {t({ hi: "फ़ोन / व्हाट्सएप नंबर", en: "Phone / WhatsApp" })}{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                      }}
                      placeholder={t({
                        hi: "10 अंकों का मोबाइल नंबर",
                        en: "10-digit mobile number",
                      })}
                      className={`w-full rounded-xl bg-white border px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden transition-all shadow-2xs ${
                        errors.phone
                          ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-100"
                          : "border-stone-300 focus:border-[#AF0807] focus:ring-2 focus:ring-[#AF0807]/15"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-red-600">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Optional Notes / Sankalp Wish */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  {t({
                    hi: "विशेष संकल्प / मनोकामना (वैकल्पिक)",
                    en: "Special Wish / Concern (Optional)",
                  })}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t({
                    hi: "उदा. कोर्ट केस विजय, शत्रु बाधा निवारण, व्यापार वृद्धि या पारिवारिक शांति...",
                    en: "e.g. Court case victory, business growth, family peace...",
                  })}
                  className="w-full rounded-xl bg-white border border-stone-300 px-3.5 py-2 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#AF0807] focus:ring-2 focus:ring-[#AF0807]/15 transition-all resize-none shadow-2xs"
                />
              </div>

              {/* Trust Badge Strip */}
              <div className="flex items-center gap-2 rounded-xl bg-amber-50/80 border border-amber-200/80 px-3 py-2 text-[11px] text-amber-950 font-medium">
                <ShieldCheck className="h-4 w-4 text-[#AF0807] shrink-0" />
                <span>
                  {t({
                    hi: "सबमिट करते ही विवरण सीधे पंडित दीपक शर्मा जी के व्हाट्सएप पर सुरक्षित पहुंचेगा।",
                    en: "Details will be securely dispatched to Pt. Deepak Sharma Ji on WhatsApp.",
                  })}
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#AF0807] via-[#940706] to-[#730501] hover:brightness-105 text-white font-bold py-3 px-5 text-sm shadow-md shadow-red-950/20 border border-amber-400/40 transition-transform active:scale-[0.99] cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>{t({ hi: "सुरक्षित किया जा रहा है...", en: "Saving details..." })}</span>
                ) : (
                  <>
                    <WhatsAppIcon className="h-4.5 w-4.5 text-white" />
                    <span>
                      {t({
                        hi: "संकल्प विवरण पंडित जी को भेजें (WhatsApp)",
                        en: "Send Sankalp to Pandit Ji (WhatsApp)",
                      })}
                    </span>
                  </>
                )}
              </button>

              {/* Direct Call Fallback */}
              <div className="pt-0.5 text-center">
                <span className="text-[11px] text-stone-500">
                  {t({ hi: "सीधे बात करना चाहते हैं?", en: "Prefer to talk directly?" })}{" "}
                  <a
                    href={`tel:${PANDIT_CALL}`}
                    className="text-[#AF0807] font-bold hover:underline"
                  >
                    +91 72240 83313
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
