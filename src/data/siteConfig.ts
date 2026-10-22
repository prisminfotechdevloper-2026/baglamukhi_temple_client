/**
 * Centralized Site Configuration & Contact Details
 * Maa Baglamukhi Siddhapeeth Nalkheda
 */

export const siteConfig = {
  name: "Shri Maa Baglamukhi Dham Nalkheda",
  hindiName: "श्री माँ बगलामुखी सिद्धपीठ नलखेड़ा",
  panditName: "आचार्य पं. दीपक शर्मा जी",
  panditTitle: "मुख्य उपासक एवं तंत्र-वैदिक पुरोहित",
  location: "लखुंदर नदी तट, नलखेड़ा धाम, आगर-मालवा (म.प्र.) - 465445",

  contact: {
    primaryPhone: "7224083313",
    primaryPhoneFormatted: "+91 72240 83313",
    kundaliPhone: "9575664204",
    kundaliPhoneFormatted: "+91 95756 64204",
    phone1: "+91 72240 83313",
    phone2: "+91 95756 64204",
    phone1Raw: "7224083313",
    phone2Raw: "9575664204",
    email: "shribaglamukhimandirnalkheda@gmail.com",
    address: {
      street: "लखुंदर नदी तट, माँ बगलामुखी मंदिर मार्ग",
      city: "नलखेड़ा",
      district: "आगर-मालवा",
      state: "मध्य प्रदेश",
      pincode: "465445",
      country: "भारत",
    },
    timings: "प्रातः 05:00 बजे से रात्रि 11:00 बजे तक (दैनिक)",
    aartiTimings: {
      morning: "07:00 AM (प्रातः महाआरती)",
      evening: "07:30 PM (संध्या महाआरती)",
      shayan: "10:30 PM (शयन आरती)",
    },
  },

  urls: {
    base: process.env.NEXT_PUBLIC_SITE_URL || "https://baglamukhi-temple-hazel.vercel.app",
    instagram: "https://www.instagram.com/maa_baglamukhi_mandir_nalkheda",
    youtube: "https://www.youtube.com/@PanditDeepakSharmaNalkheda",
  },
} as const;

/**
 * Helper to generate pre-filled WhatsApp link
 * Supports (message, target) or (target, message)
 */
export function getWhatsAppUrl(
  arg1: string,
  arg2?: "primary" | "kundali" | string
): string {
  // If arg1 is a phone number (e.g. "917224083313" or "7224083313") and arg2 is message
  if (arg1 === "primary" || arg1 === "kundali" || /^\d+$/.test(arg1)) {
    const rawDigits = arg1.replace(/^91/, "");
    const phone = (rawDigits === siteConfig.contact.kundaliPhone || arg1 === "kundali")
      ? siteConfig.contact.kundaliPhone
      : siteConfig.contact.primaryPhone;
    const msg = arg2 || "";
    return `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`;
  }

  // Normal signature: getWhatsAppUrl(message, target)
  const message = arg1;
  const target = arg2 as ("primary" | "kundali" | undefined);
  const phone = target === "kundali" ? siteConfig.contact.kundaliPhone : siteConfig.contact.primaryPhone;
  return `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper to generate telephone call link
 */
export function getTelUrl(targetOrPhone: "primary" | "kundali" | string = "primary"): string {
  if (targetOrPhone === "kundali" || targetOrPhone === siteConfig.contact.kundaliPhone || targetOrPhone === siteConfig.contact.kundaliPhoneFormatted) {
    return `tel:+91${siteConfig.contact.kundaliPhone}`;
  }
  return `tel:+91${siteConfig.contact.primaryPhone}`;
}
