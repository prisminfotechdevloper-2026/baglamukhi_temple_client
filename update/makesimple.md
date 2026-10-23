makesimple.md — Maa Baglamukhi Website Simplification & UX Improvement Brief
0. Your role and mindset
Act as a thoughtful senior UX designer, conversion-focused product designer, frontend engineer, and careful QA reviewer working together.

Website to improve: https://baglamukhi-temple-hazel.vercel.app/

Your task is not to add more design, more animation, more sections, or more content. Your task is to make the existing website feel clear, calm, trustworthy, devotional, and easy to use—especially for a first-time visitor who wants to book a puja or havan.

Think like a real person visiting the site:
- I may be visiting from my phone.
- I may not be technically confident.
- I may not understand complex Sanskrit, astrology terminology, or website navigation.
- I want to quickly understand what services are available, whether I can trust the contact/process, and how to request a booking.
- I should never have to guess which button to press or wonder whether several sections mean the same thing.
Use this question throughout the work: “Will this change make the next step clearer for a real visitor?” If not, simplify it or do not add it.

Do not stop at giving suggestions. Inspect the actual repository, implement the improvements, and verify the result.
1. Main objective
The client feels that the current landing page is messy and may confuse visitors. Redesign the information hierarchy and user journey so a visitor can:
1. Understand the website's purpose within 5–10 seconds.
2. Identify the main puja/havan services without reading long paragraphs.
3. Choose a service and start a booking request easily.
4. Find the pandit/contact information and temple details if needed.
5. Use the website comfortably on a mobile phone.
Primary conversion: a clear puja/havan booking request or contact with the pandit.

Secondary conversions: WhatsApp/call enquiry, viewing temple details, and exploring other services.

Do not turn the home page into a catalogue of every possible spiritual or astrology topic. Keep the home page focused.
2. Start with an audit—do not blindly rewrite
Before editing:
1. Inspect the project structure, framework, routes, components, styles, assets, and current booking/contact implementation.
2. Open and review the current home page and relevant linked pages in the code. If live-site access is available, compare the deployed page with the local implementation.
3. Identify duplicated content, competing CTAs, long text blocks, repeated imagery, overly dense card grids, unnecessary visual effects, and unclear navigation.
4. Find which existing services and booking paths are genuinely used. Preserve working features and important factual information.
5. Make a short checklist in your working notes, then implement the changes. Do not merely produce a report.
Never invent facts about the temple, the pandit, availability, prices, success rates, testimonials, years of experience, or booking policies. Keep existing verified facts unless there is a clear reason to reorganize them. If something is unclear, preserve it and flag it for confirmation rather than fabricating replacement copy.
3. Information architecture: recommended home-page order
Use this as the default structure, adapting to the actual code and available verified content. Avoid unnecessary sections.
A. Simple header / navigation
- Show the existing logo/brand clearly.
- Keep only the most useful links, such as: Home, Puja & Havan, About Pandit Ji/Temple, Contact.
- Make the primary “पूजा / हवन बुक करें” action easy to find.
- Avoid too many menu items, nested menus, or multiple visually competing buttons.
- On mobile, use a simple accessible menu and keep the booking action easy to reach.
B. Hero: one clear message and one next step
The hero must answer three questions:
1. What is this website for?
2. What can I do here?
3. What should I do next?
Suggested copy direction (adapt to actual services and facts):
- Heading: “माँ बगलामुखी की पूजा एवं हवन बुक करें”
- Supporting text: “अपनी पूजा चुनें और बुकिंग के लिए पंडित जी से संपर्क करें।” Only say this if it matches the real booking process.
- Primary CTA: “पूजा / हवन बुक करें”
- Secondary CTA: “WhatsApp पर बात करें” or “पंडित जी से संपर्क करें” if the existing contact method works.
Use one strong, relevant devotional/temple image, not a collage of several competing images. Keep the image respectful and appropriately cropped. Do not let the image overpower the main message or push the booking action far below the fold.

Avoid long mantra blocks, repeated introductions, multiple slogans, several equal-priority buttons, excessive badges, and unverified outcome promises in the hero. A mantra may remain as a subtle devotional detail if it does not compete with the main message.
C. Puja / Havan services: a small, clear selection
- Show only the most important, confirmed services on the home page—ideally 3–4 cards, or fewer if that better reflects the actual offering.
- Each card should contain: a clear service name, a one-line plain-language explanation, and one action such as “Details देखें” or “बुक करें”.
- Use consistent card design and equal visual hierarchy.
- Do not show many nearly identical cards, long descriptions, repeated benefits, or several competing CTAs within each card.
- Do not invent prices or claim a service is available online unless the project/client confirms it.
- If there are more services, add a simple “सभी सेवाएँ देखें” link to a dedicated services page.
Possible categories such as Havan, Vishesh Anushthan, Online Puja/Darshan, or Chadhava are only examples. Confirm which ones are actually offered before showing them.
D. How booking works: three simple steps
Use a compact section:
1. पूजा चुनें
2. अपनी जानकारी दें / पंडित जी से संपर्क करें
3. बुकिंग की पुष्टि प्राप्त करें
Adapt these steps to the real process. Do not promise an automatic confirmation if a person must confirm manually. Do not imply a booking is completed merely because an enquiry form was submitted.
E. Short pandit / temple introduction
- Use one genuine existing photo if available.
- Include only verified name, role, and a short human-readable introduction.
- Avoid a long biography on the landing page.
- Link to a details page if there is meaningful extra content.
- Do not fabricate credentials, awards, years of experience, or endorsements.
F. Essential temple information and contact
Combine practical information in one easy-to-scan section:
- Verified address/location
- Verified darshan timings, if available
- Map/directions if already supported and the address is confirmed
- Working phone/WhatsApp contact
- A clear “संपर्क करें” action
Avoid duplicating the same address, timing, and contact details across multiple large sections.
G. Optional gallery / FAQ
Only retain these if they genuinely help visitors decide or complete a booking.
- Gallery: show a small selection of useful, authentic images; link to a separate gallery if needed.
- FAQ: answer real questions such as how to enquire, what details are needed, and how confirmation works. Keep answers short and verified.
- Do not add a large video/reels section just to fill space. One relevant video is enough if it adds genuine value.
H. Compact footer
Keep essential contact, navigation, privacy/legal links that already exist, and copyright/brand details. Avoid a second copy of the entire home page in the footer.
4. What to remove, reduce, or move off the home page
Review each item in the current implementation. Do not delete important functionality or data blindly.
Remove from the home page when duplicated or distracting
- Duplicate hero or introduction sections.
- Repeated mantras, slogans, spiritual descriptions, and booking pitches.
- Repeated booking buttons that all look equally important.
- Excessively large grids of similar cards.
- Long blocks of text that repeat information already explained elsewhere.
- Decorative animations, floating elements, unnecessary gradients, shadows, and visual effects that compete with content.
- Multiple large video/reel sections when one or none is sufficient.
- Repeated temple/darshan sections with the same details.
Move to a dedicated page or a compact link
- Detailed astrology/rashi content.
- Detailed descriptions of Kaal Sarp Dosh, Manglik Dosh, Shani, Pitra Dosh, kundli analysis, or other astrology topics if these currently occupy too much of the home page.
- Detailed temple history and long spiritual explanations.
- Full gallery/video collection.
- Long explanations for specialist rituals.
Only move a topic if the project supports or can safely support a dedicated page. Keep valid routes and links working. Do not leave dead links or silently remove services that customers need.
Keep if useful and verified
- Genuine pandit/temple images.
- Essential service options.
- Contact and location.
- Booking functionality.
- Relevant trust information.
- Existing accessibility, privacy, and SEO essentials.
5. Booking flow: reduce friction and never fake success
Trace the existing booking/contact workflow before making changes. Prefer the simplest flow that matches the client's actual process.
Recommended user journey
1. Visitor presses “पूजा / हवन बुक करें”.
2. Visitor selects a service or is taken to the relevant service details.
3. Visitor provides only the information genuinely needed.
4. Visitor chooses the supported method: submit an enquiry, WhatsApp, or call.
5. The interface clearly explains what happens next.
Form rules
- Ask for the minimum necessary information. Do not force account creation.
- Use simple Hindi labels and helpful placeholders.
- Make required fields clear and validate them accessibly.
- Use a suitable phone input and sensible validation without rejecting legitimate Indian phone formats.
- Show understandable loading, success, and error states.
- Never claim “Booking confirmed” unless the backend/business process actually confirms the booking.
- If the form sends an enquiry only, say “आपकी बुकिंग रिक्वेस्ट भेज दी गई है” only after successful submission and clearly explain that confirmation may follow separately.
- If the current process is WhatsApp/manual confirmation, preserve that process and make the next step obvious.
- Keep contact details out of URLs, analytics, logs, or unnecessary storage.
- Do not add a payment gateway, database, authentication system, or new external service unless it is required and supported by the existing project/client.
WhatsApp rules
- Reuse the project's existing verified WhatsApp number and link. Do not invent a number.
- Pre-filled messages should be short and understandable.
- Encode message text safely.
- If the number/link is missing or broken, flag it instead of making up a replacement.
- Make it clear when the user is leaving the website to open WhatsApp.
6. Design direction: calm, devotional, modern, readable
The result should feel respectful and premium, not flashy, crowded, old-fashioned, or like a generic template.
Color
- Keep a restrained devotional palette. If compatible with the existing brand, use warm cream/off-white backgrounds, deep maroon or saffron accents, and readable dark text.
- Use one primary accent and one secondary accent. Avoid giving every section a different strong background color.
- Check contrast for text, buttons, links, and focus states.
- Reuse existing brand colors if they are important to the client; do not rebrand without reason.
Typography and copy
- Use a clear, readable font already available in the project or a sensible existing font stack.
- Establish a simple hierarchy: one main page heading, clear section headings, short body text.
- Avoid very small text, too many font weights, decorative fonts for long paragraphs, all-caps-heavy labels, and unnecessary English/Sanskrit jargon.
- Use natural, respectful Hindi for user-facing copy, with familiar words such as “पूजा बुक करें”, “पंडित जी से संपर्क करें”, “मंदिर की जानकारी”.
- Avoid fear-based language and guaranteed spiritual, medical, financial, legal, or personal outcomes. Describe rituals respectfully without promising results.
Layout and spacing
- Use consistent content widths, spacing, card radii, button heights, and alignment.
- Give sections breathing room but do not create oversized empty screens or unnecessarily tall sections.
- Avoid overlapping elements, crowded clusters, excessive nested cards, and too many decorative dividers.
- Keep headings and CTAs close to the content they relate to.
- Use a predictable vertical rhythm and clear visual grouping.
Images
- Prefer existing authentic, high-quality assets over random stock imagery.
- Keep image crops and aspect ratios consistent within the same type of card.
- Use descriptive alt text for meaningful images; empty alt text for purely decorative images.
- Do not replace authentic temple/pandit images with misleading AI-generated images.
- Do not add image carousels unless they provide real value and work well on mobile.
Buttons and links
- One primary button style, one secondary style, and clear text-link styling.
- Primary booking CTA should be visually distinct without being oversized.
- Use action-oriented, consistent labels.
- Ensure every button does something useful; remove decorative/inert buttons.
- Avoid multiple labels for the same action (e.g. “Book Now”, “Book Puja”, “Start Booking”, “Reserve Now”) when they all lead to the same place. Standardize to a clear Hindi label.
7. Human-like decision-making rules
Before keeping, moving, or adding any element, ask:
1. Visitor intent: Does this help someone understand the service or book it?
2. Clarity: Can an ordinary visitor understand it on the first read?
3. Priority: Is this more important than the main booking action?
4. Duplication: Is the same information already visible elsewhere?
5. Cognitive load: Does it add another decision without a real benefit?
6. Trust: Is the information genuine and verifiable?
7. Mobile: Does it still work and read well on a small screen?
8. Accessibility: Can keyboard and screen-reader users operate it?
9. Maintenance: Does this add needless complexity for the owner/developer?
10. Regression risk: Could this break a working feature, route, or booking path?
If two sections do the same job, merge them. If a section is useful but too detailed, shorten it and link to a detail page. If a feature is important to some users but not most visitors, make it secondary rather than deleting its underlying functionality. Prefer removing clutter over adding another component.

Do not over-engineer. Do not redesign every component just to make the diff look large. Make the smallest coherent set of changes that creates a noticeably simpler user experience.
8. Mobile-first and accessibility requirements
Test at minimum:
- Small mobile viewport around 360–390 px wide.
- Tablet viewport around 768 px.
- Desktop viewport around 1280–1440 px.
Requirements:
- No horizontal overflow.
- No clipped headings, buttons, cards, images, or menu items.
- Comfortable text size and line length.
- Touch targets ideally around 44×44 px.
- Visible keyboard focus indicators.
- Correct heading hierarchy and semantic landmarks.
- Forms with persistent labels, accessible validation, and clear error messages.
- Sufficient color contrast.
- Respect prefers-reduced-motion.
- Menus, dialogs, accordions, and booking forms must work by keyboard where applicable.
- Do not make important text part of an image.
9. Technical implementation rules
- Respect the existing framework, architecture, naming conventions, and package manager.
- Reuse existing components and utilities when sensible.
- Avoid unnecessary new dependencies.
- Do not rewrite the entire application or change the stack.
- Do not replace real service data with hardcoded fake content.
- Keep existing working routes, contact links, booking logic, metadata, and SEO essentials.
- Avoid hydration errors, console errors, broken images, dead links, layout shifts, and unnecessary client-side JavaScript.
- Use optimized image formats/sizing and lazy-load below-the-fold images where appropriate; do not lazy-load the primary hero image if it harms perceived loading.
- Keep components readable and maintainable. Extract a component only when it improves reuse or clarity.
- Never expose API keys, secrets, private contact data, or environment values.
- Do not alter production data or trigger real customer messages/bookings during testing.
- If the repository has tests, linting, or build scripts, run the relevant checks and fix issues introduced by your changes.
10. SEO and trust
- Keep one meaningful H1 focused on the service.
- Use clear, accurate page title and description based on verified business/location details.
- Preserve useful metadata, canonical configuration, Open Graph data, and structured data if already implemented correctly.
- Do not invent ratings, reviews, testimonials, addresses, business hours, credentials, or claims.
- Keep visible content aligned with metadata.
- Make contact and location information easy to find.
- Avoid keyword stuffing and repetitive location/service phrases.
11. Acceptance checklist — work is not complete until checked
Content and hierarchy
- [ ] Visitor can understand the purpose in 5–10 seconds.
- [ ] Hero has one clear main message and a primary booking action.
- [ ] Homepage contains only essential, high-priority services.
- [ ] Duplicate text, repeated sections, and unnecessary competing CTAs are removed or merged.
- [ ] Detailed secondary topics are moved to suitable pages or made secondary without breaking their routes.
- [ ] Hindi copy is clear, respectful, and concise.
- [ ] No invented business facts or guaranteed outcomes.
Booking
- [ ] Main booking CTA leads to a working, understandable next step.
- [ ] User knows what information to provide and what happens after submitting.
- [ ] Form validation and success/error states work, if a form exists.
- [ ] WhatsApp/call links use verified existing contact details.
- [ ] No false booking confirmation or accidental real submission during tests.
Visual and responsive
- [ ] Layout looks calm, coherent, and professional.
- [ ] Mobile, tablet, and desktop layouts work.
- [ ] No horizontal scrolling or broken/cropped content.
- [ ] Typography, spacing, buttons, cards, and colors are consistent.
- [ ] Keyboard focus and form labels are accessible.
- [ ] Images have appropriate sizing and alt text.
Technical
- [ ] Existing routes and important features still work.
- [ ] No new console errors or broken assets.
- [ ] Relevant lint/test/build checks pass, or any pre-existing failures are clearly reported.
- [ ] No unnecessary dependencies or large architectural changes.
12. Required final response from the agent
After implementing, report in concise but useful terms:
1. What made the original page feel cluttered.
2. Which sections/components were removed, merged, shortened, or moved.
3. The new home-page order and booking journey.
4. Which files were changed.
5. What checks were run and their results.
6. Any issue that could not be verified (e.g. missing booking number, uncertain service details, unavailable backend).
7. Any small client decision still required.
Do not say a test passed unless it was actually run. Do not claim the live site has changed unless changes were deployed. Make code changes in the repository, not just recommendations.

Definition of success: the landing page feels simpler, visitors have fewer competing choices, and the next step to enquire or book a puja/havan is obvious—without losing essential functionality or factual trust.