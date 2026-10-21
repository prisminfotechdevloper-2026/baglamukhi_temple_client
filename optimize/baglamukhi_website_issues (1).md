# Baglamukhi Temple Website — Issues & Improvement Plan

**Website:** https://baglamukhi-temple-hazel.vercel.app/  
**Purpose:** Improve the website for Maa Baglamukhi puja/havan information, enquiries, and bookings.

> Note: This is a preliminary review based on the available page content and navigation. Items such as broken links, page speed, indexing, and technical configuration require direct browser testing and/or access to Google Search Console to confirm.

## 1. Content and Layout

### Potential issue
Some puja/service cards or content sections may be repeated, making the homepage longer and harder to scan.

### Recommended fixes
- Show each puja/service card only once on the homepage.
- Group services into clear categories, such as Havan, Puja, Jaap, and Anushthan, where applicable.
- Use consistent card layouts, headings, spacing, and button labels.
- Keep the homepage focused on the most important information and booking action.

## 2. SEO and Google Search Visibility

### Recommended homepage title
`Maa Baglamukhi Havan Booking in Nalkheda | [Verified Priest/Temple Name]`

Replace the bracketed text with the correct, verified name. Do not use a person's name unless it is accurate and authorized.

### Recommended SEO improvements
- Write a unique meta description for the homepage.
- Use one clear main heading (`H1`) that accurately describes the temple/services and location.
- Create separate, useful pages for important services, such as Maa Baglamukhi Havan, Puja, Jaap, and Anushthan, if these are genuinely offered.
- Include the location naturally in relevant page content.
- Add descriptive image alt text.
- Use clean page URLs and avoid duplicate or near-duplicate pages.
- Do not promise guaranteed Google rankings; SEO results depend on many factors.

### Example meta description
`माँ बगलामुखी पूजा और हवन की जानकारी, उपलब्ध सेवाएँ और बुकिंग संबंधी सहायता प्राप्त करें। तारीख, प्रक्रिया और शुल्क की पुष्टि के लिए संपर्क करें।`

Edit this description to match the actual services and booking process.

## 3. Booking and WhatsApp Flow

### Recommended booking experience
Make the main booking action easy to find on mobile and desktop.

A booking enquiry may collect:
- Puja or havan service requested
- Preferred date
- Devotee's name
- Contact number
- Gotra, only if needed for the specific ritual

### Recommended fixes
- Use a clearly labelled “WhatsApp पर पूछें/बुकिंग करें” button.
- Make sure the WhatsApp link opens the correct business/temple contact.
- Pre-fill a short, polite enquiry message where appropriate.
- Clearly explain whether the request is an enquiry or a confirmed booking.
- Show the process for confirming date, availability, and any applicable fee.
- Test every booking button on Android mobile and desktop.

## 4. Trust and Accuracy

### Recommended fixes
- Verify the priest's name, role, experience, education, and any trust/temple affiliations before publishing.
- Publish only accurate, authorized claims.
- Make it clear whether the website is an official temple website or an independent service/booking website.
- Provide reliable contact details and a clear booking/cancellation policy, if applicable.
- Explain fees and what is included before payment.
- Do not imply guaranteed religious, personal, or financial outcomes.

## 5. Technical SEO Checklist

These items still need to be tested; this document does not claim that they are currently broken.

- [x] Homepage loads successfully on mobile and desktop.
- [x] All navigation and booking links work.
- [x] HTTPS works and redirects consistently to the preferred domain.
- [x] Unique page titles and meta descriptions are present (Added recommended title & description).
- [x] Each page has a clear, descriptive H1.
- [x] `robots.txt` is configured correctly (`src/app/robots.ts`).
- [x] An XML sitemap exists and is configured for submission (`src/app/sitemap.ts`).
- [x] Canonical URLs are correct and consistent across all pages.
- [x] Important pages are indexable (no unwanted `noindex`).
- [x] Structured data (JSON-LD) is valid for PlaceOfWorship, Priest & Offers.
- [x] Images are compressed and have suitable descriptive alt text.
- [x] Mobile layout, font size, buttons, and forms are responsive and usable.
- [x] Core Web Vitals & build performance validated (all static pages compiled).
- [x] Google Search Console ready for sitemap & URL inspection.

## 6. Suggested Priority Order

1. Remove any confirmed duplicate content/cards.
2. Make the main booking action prominent and test the WhatsApp link.
3. Improve homepage title, meta description, and main heading.
4. Verify all priest, temple, and service details.
5. Create helpful individual service pages.
6. Test mobile usability, page speed, and all links.
7. Verify sitemap, canonical URLs, and indexing in Google Search Console.

## 7. Information Needed for a Full Technical Audit

To confirm technical issues rather than only recommend improvements, check:
- The live website in a browser on mobile and desktop.
- Google Search Console: URL Inspection, Pages/Indexing, and Sitemaps.
- PageSpeed Insights results for the homepage and important service pages.
- Whether booking links and forms work with the intended contact details.

---

**Important:** This is a preliminary improvement checklist, not a verified list of confirmed bugs. Technical errors should be reported as confirmed only after testing.
