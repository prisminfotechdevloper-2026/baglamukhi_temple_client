export interface Testimonial {
  id: string;
  name: {
    hi: string;
    en: string;
  };
  location: {
    hi: string;
    en: string;
  };
  hawan: {
    hi: string;
    en: string;
  };
  quote: {
    hi: string;
    en: string;
  };
  image: string;
  rating: number;
  date: {
    hi: string;
    en: string;
  };
}

export const testimonialsData: Testimonial[] = [
  {
    id: "amit-sharma",
    name: {
      hi: "अमित शर्मा",
      en: "Amit Sharma",
    },
    location: {
      hi: "इंदौर, मध्य प्रदेश",
      en: "Indore, Madhya Pradesh",
    },
    hawan: {
      hi: "माँ बगलामुखी पावन महाहवन",
      en: "Maa Baglamukhi Sacred Mahahawan",
    },
    quote: {
      hi: "हवन के बाद घर का माहौल पहले से शांत महसूस होने लगा। हम सबने साथ बैठकर समय बिताया और मन को भी सुकून मिला।",
      en: "Hawan ke baad ghar ka mahaul pehle se shaant mehsoos hone laga. Hum sabne saath baithkar samay bitaya aur mann ko bhi sukoon mila.",
    },
    image: "/images/testimonials/amit-sharma.webp",
    rating: 5,
    date: {
      hi: "अक्टूबर 2026",
      en: "October 2026",
    },
  },
  {
    id: "neha-joshi",
    name: {
      hi: "नेहा जोशी",
      en: "Neha Joshi",
    },
    location: {
      hi: "उज्जैन, मध्य प्रदेश",
      en: "Ujjain, Madhya Pradesh",
    },
    hawan: {
      hi: "पीताम्बरा विशेष अनुष्ठान",
      en: "Peetambara Special Anushthan",
    },
    quote: {
      hi: "पूजा के बाद मन में एक अलग ही शांति महसूस हुई। घर में भी हम सबने सकारात्मक सोच और शांत रहने पर ध्यान देना शुरू किया।",
      en: "Puja ke baad mann mein ek alag hi shanti mehsoos hui. Ghar mein bhi hum sabne sakaratmak soch aur shaant rehne par dhyan dena shuru kiya.",
    },
    image: "/images/testimonials/neha-joshi.webp",
    rating: 5,
    date: {
      hi: "सितंबर 2026",
      en: "September 2026",
    },
  },
  {
    id: "rajesh-patel",
    name: {
      hi: "राजेश पटेल",
      en: "Rajesh Patel",
    },
    location: {
      hi: "कोटा, राजस्थान",
      en: "Kota, Rajasthan",
    },
    hawan: {
      hi: "पारिवारिक शांति व रक्षा हवन",
      en: "Family Peace & Protection Hawan",
    },
    quote: {
      hi: "हवन में शामिल होना हमारे परिवार के लिए एक सुकून भरा अनुभव रहा। पूजा के बाद हमने घर में शांति और आपस में समझ बनाये रखने का संकल्प लिया।",
      en: "Hawan mein shamil hona hamare parivaar ke liye ek sukoon bhara anubhav raha. Puja ke baad humne ghar mein shaanti aur aapas mein samajh banaye rakhne ka sankalp liya.",
    },
    image: "/images/testimonials/rajesh-patel.webp",
    rating: 5,
    date: {
      hi: "अक्टूबर 2026",
      en: "October 2026",
    },
  },
  {
    id: "vikramaditya-singh",
    name: {
      hi: "विक्रमादित्य सिंह",
      en: "Vikramaditya Singh",
    },
    location: {
      hi: "जयपुर, राजस्थान",
      en: "Jaipur, Rajasthan",
    },
    hawan: {
      hi: "शत्रु बाधा व न्यायालय विजय अनुष्ठान",
      en: "Court Case & Obstacle Removal Anushthan",
    },
    quote: {
      hi: "लंबे समय से जमीन व व्यापारिक विवाद के कारण तनाव में थे। पंडित दीपक शर्मा जी द्वारा नलखेड़ा सिद्धपीठ पर बगलामुखी तांत्रिक हवन संपन्न कराने के बाद 3 माह में अनुकूल समाधान निकला। माँ की असीम कृपा है।",
      en: "We were under severe stress due to prolonged commercial disputes. Pandit Deepak Sharma Ji conducted the Shastric Baglamukhi Hawan at Nalkheda, bringing favorable resolution within 3 months.",
    },
    image: "/images/testimonials/vikramaditya-singh.webp",
    rating: 5,
    date: {
      hi: "अगस्त 2026",
      en: "August 2026",
    },
  },
  {
    id: "sunita-agrawal",
    name: {
      hi: "सुनीता अग्रवाल",
      en: "Sunita Agrawal",
    },
    location: {
      hi: "मुंबई, महाराष्ट्र",
      en: "Mumbai, Maharashtra",
    },
    hawan: {
      hi: "व्यापार वृद्धि व श्री पीताम्बरा हवन",
      en: "Business Growth & Prosperity Hawan",
    },
    quote: {
      hi: "मुंबई से नलखेड़ा आना संभव नहीं हो पा रहा था, पंडित जी ने लाइव वीडियो कॉल पर पूरे विधि-विधान से हमारे नाम-गोत्र का संकल्प करवाकर हवन कराया। प्रसाद व रक्षा सूत्र समय पर डाक से प्राप्त हुए। व्यापार में नई गति आई।",
      en: "Unable to travel from Mumbai, Pandit Ji arranged the live video Sankalp with our Gotra and performed the hawan transparently. Prasad and energized Raksha Sutra reached us safely via post.",
    },
    image: "/images/testimonials/sunita-agrawal.webp",
    rating: 5,
    date: {
      hi: "सितंबर 2026",
      en: "September 2026",
    },
  },
  {
    id: "alok-trivedi",
    name: {
      hi: "डॉ. आलोक त्रिवेदी",
      en: "Dr. Alok Trivedi",
    },
    location: {
      hi: "अहमदाबाद, गुजरात",
      en: "Ahmedabad, Gujarat",
    },
    hawan: {
      hi: "सवा लाख पीताम्बरा महामंत्र अखंड जाप",
      en: "1.25 Lakh Peetambara Akhand Jaap",
    },
    quote: {
      hi: "गंभीर मानसिक अशांति और कार्यक्षेत्र में अकारण रुकावटों के चलते सवा लाख महामंत्र अनुष्ठान करवाया। पंडित जी की सात्विक साधना और वैदिक शुद्धता का प्रभाव साक्षात अनुभव हुआ। घर में अभूतपूर्व सकारात्मकता है।",
      en: "Conducted the 1.25 Lakh Akhand Jaap for career obstacles and stress. Pandit Ji's disciplined Vedic rituals and authentic mantras brought tangible positivity and peace into our life.",
    },
    image: "/images/testimonials/alok-trivedi.webp",
    rating: 5,
    date: {
      hi: "जुलाई 2026",
      en: "July 2026",
    },
  },
  {
    id: "meenakshi-sundaram",
    name: {
      hi: "मीनाक्षी सुंदरम",
      en: "Meenakshi Sundaram",
    },
    location: {
      hi: "बेंगलुरु, कर्नाटक",
      en: "Bengaluru, Karnataka",
    },
    hawan: {
      hi: "आरोग्य व स्वास्थ्य रक्षा महाहवन",
      en: "Health & Vitality Protection Hawan",
    },
    quote: {
      hi: "माताजी के स्वास्थ्य को लेकर पूरा परिवार चिंतित था। नलखेड़ा सिद्धपीठ में महामृत्युंजय व बगलामुखी संयुक्त अनुष्ठान करवाया। पंडित जी ने हर चरण का दर्शन कराया। अब माताजी के स्वास्थ्य में निरंतर सुधार है।",
      en: "Our family was anxious regarding mother's health. Pandit Ji performed the combined Mahamrityunjay-Baglamukhi anushthan. We witnessed every ritual via video. Mother's recovery has been steady and blessed.",
    },
    image: "/images/testimonials/meenakshi-sundaram.webp",
    rating: 5,
    date: {
      hi: "अक्टूबर 2026",
      en: "October 2026",
    },
  },
  {
    id: "sanjay-verma",
    name: {
      hi: "संजय वर्मा",
      en: "Sanjay Verma",
    },
    location: {
      hi: "नई दिल्ली (NCR)",
      en: "New Delhi (NCR)",
    },
    hawan: {
      hi: "नकारात्मक ऊर्जा व तंत्र बाधा निवारण",
      en: "Negative Energy & Evil Eye Cleansing",
    },
    quote: {
      hi: "अक्सर घर में भारीपन और अकारण कलह रहती थी। पंडित जी के परामर्श पर पीताम्बरा महाहवन व घर हेतु अभिमंत्रित रक्षा भस्म मंगवाई। पूरे घर का वातावरण अत्यंत हल्का, शुद्ध और भक्तिमय हो गया है।",
      en: "There was persistent negativity and tension in our household. Following Pandit Ji's guidance, we arranged the Peetambara Hawan and received the energized Raksha Bhasma. Our home feels deeply sacred now.",
    },
    image: "/images/testimonials/sanjay-verma.webp",
    rating: 5,
    date: {
      hi: "सितंबर 2026",
      en: "September 2026",
    },
  },
  {
    id: "pooja-mishra",
    name: {
      hi: "पूजा मिश्रा",
      en: "Pooja Mishra",
    },
    location: {
      hi: "लखनऊ, उत्तर प्रदेश",
      en: "Lucknow, Uttar Pradesh",
    },
    hawan: {
      hi: "शीघ्र विवाह व मांगलिक दोष शांति",
      en: "Marriage Blessing & Manglik Dosh Shanti",
    },
    quote: {
      hi: "विवाह में लगातार विलंब और कुंडली में ग्रह दोष के कारण चिंतित थे। पंडित दीपक शर्मा जी ने विधिपूर्वक हल्दी माला से बगलामुखी जप व हवन करवाया। माँ पीताम्बरा की कृपा से 4 माह में शुभ संबंध तय हुआ।",
      en: "Worried about prolonged marriage delays, Pandit Deepak Sharma Ji conducted the authentic Baglamukhi Haldi Mala Anushthan. With Maa Peetambara's divine grace, a blissful alliance was finalized within 4 months.",
    },
    image: "/images/testimonials/pooja-mishra.webp",
    rating: 5,
    date: {
      hi: "जून 2026",
      en: "June 2026",
    },
  },
];
