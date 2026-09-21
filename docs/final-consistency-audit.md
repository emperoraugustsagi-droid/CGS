# CGS Website Final Consistency Audit

Status: IMPLEMENTATION PASS COMPLETE
Date: 21 September 2026

This document records the state of the CGS website after the foundation, information architecture, design system, universal page rhythm, child-page redesign and homepage integration work.

It should be read together with:

- docs/site-foundation.md
- docs/verification-register.md
- docs/information-architecture.md
- docs/design-system.md
- docs/page-rhythm.md

---

## 1. Route status

### Home — /
Status: IMPLEMENTED

Owns:
- institutional proposition
- mandate preview
- programme pathway preview
- research preview
- upcoming event feature
- leadership preview
- activity preview
- final intent router

Key consistency decisions:
- routes to child pages before direct email where useful
- uses shared institutional data
- uses shared SiteFooter
- no full team-roster duplication
- Acting Director wording replaces unsupported appointment-date copy
- Events is visible in the primary journey

### About — /about
Status: IMPLEMENTED

Owns:
- institutional identity
- why CGS exists
- Research / Teaching / Engagement mandate
- knowledge in public
- intellectual lens
- leadership
- wider team
- handoffs to Programmes / Research / Events / Activity

### Programmes — /programmes
Status: IMPLEMENTED

Owns:
- verified five-entry postgraduate structure
- separately qualified certificate/diploma study offerings
- pathway orientation
- current-information guidance
- research handoff
- contact action

Removed:
- unsupported “six academic programmes” claim
- unsupported “Executive Certificate in Gender Studies” title
- standalone M.Phil. wording

### Research — /research
Status: IMPLEMENTED

Owns:
- research proposition
- research practice
- six editorial areas of inquiry
- public-life application
- evidence through Activity
- collaboration / study / event handoffs

Important:
The six themes are explicitly presented as editorial areas of inquiry, not formal departments or research units.

### Events — /events
Status: IMPLEMENTED

Owns:
- upcoming participation
- First International Gender Conference ’26
- theme
- venue
- deadlines
- subthemes
- conference leadership
- fees
- co-author fees
- payment information
- conference contacts
- conference website

The official Centre-supplied flyer supersedes earlier provisional conference details.

### Activity — /activity
Status: IMPLEMENTED

Owns:
- documentary evidence of Centre activity
- featured activity
- internal activity records
- supporting source-folder links
- relationship to Research / Events / About

External Drive folders now support the record instead of replacing the CGS website experience.

### Contact — /contact
Status: IMPLEMENTED

Owns:
- enquiry routing
- Study / Research / Events / Training / Dialogue / General paths
- direct contact details
- guidance on what to include in a first message
- information-currency warning

---

## 2. Navigation status

Primary navigation:

1. About Us
2. Programmes
3. Research
4. Events
5. Activity
6. Contact CGS

Header and footer use the same shared navigation source.

Home also uses the shared SiteFooter.

---

## 3. Design-system status

### Unified palette
Implemented:
- Institutional Navy
- CGS Pink
- Academic Blue
- Sky Blue
- warm neutral surfaces

The previous desktop wine/burgundy/gold vs mobile navy/pink/blue split has been removed at the token level.

Legacy CSS variable names remain only as compatibility aliases and now resolve to the semantic CGS design system.

### Typography
Implemented:
- DM Serif Display for editorial hierarchy
- Inter for body/function

### Shared primitives
Implemented:
- SiteHeader
- SiteFooter
- PageIntro
- SectionHeading
- Eyebrow
- ContactBand
- semantic primary/accent buttons
- internal text-link behavior
- visible focus ring

### Mobile philosophy
Implemented in page-specific responsive rules:
- editorial headings may center
- longer reading copy stays left aligned
- structured lists collapse deliberately
- tables remain scrollable
- primary actions expand appropriately
- important evidence/images keep intentional height

---

## 4. Architecture checks

Passed:

- every major page has one dominant job
- Home previews rather than fully duplicating child-page content
- Home does not duplicate the full team roster
- Programmes and research data are shared rather than locally redefined
- Activity records use shared data
- Events is a first-class route
- Events and Activity have separate forward-looking vs documentary roles
- shared ContactBand routes through /contact
- homepage Study and Research routes are internal-first
- activity previews route through /activity before external documentation
- production metadata can resolve from VERCEL_PROJECT_PRODUCTION_URL

---

## 5. Factual/content checks

Removed or corrected:

- “Director since February 2026”
- substantive Director wording where current evidence supports Ag. Director
- “06 Academic programmes”
- “Executive Certificate in Gender Studies”
- standalone M.Phil. programme title
- provisional conference dates 3–8 November
- provisional interpretation of 30 September as a registration deadline

Current conference record:

- First International Gender Conference ’26
- 4–7 November 2026
- abstract deadline: 30 September 2026
- acceptance notification: 7 October 2026
- early bird: 10 October 2026
- full paper: 21 October 2026
- standard registration: 28 October 2026

---

## 6. Items still requiring direct CGS sign-off

These should remain in the verification queue:

1. exact current public title/status of the Certificate programme
2. current admissions status of the Diploma programme
3. whether CGS wants certificate/diploma study presented alongside the five SPGS listings in the final public taxonomy
4. substantive vs Acting Director status if a newer appointment exists
5. exact preferred spelling/titles for all team members
6. whether the six research-area groupings are formally approved
7. current public phone numbers
8. exact office-location wording
9. which additional activity records may be published
10. any newer conference information that supersedes the supplied flyer

---

## 7. Technical cleanup intentionally deferred

The redesign is functional without these, but they are reasonable post-sign-off cleanup items:

- remove dead CSS selectors from earlier homepage team-roster/mobile experiments
- consolidate older mobile override files into the main semantic component styles
- remove compatibility class names such as button--gold / button--wine after confirming no downstream use
- reduce repeated page-scoped CSS once visual sign-off confirms the final patterns
- consider future detail routes only when enough verified content exists:
  - /activity/[slug]
  - /programmes/[programme]
  - /research/[area]

Do not perform aggressive CSS deletion before final browser-level visual sign-off.

---

## 8. QA limitation

Production builds and source/responsive logic have been verified through the connected GitHub/Vercel workflow.

The current tool environment does not provide a true screenshot-capable browser viewport for pixel-level desktop/mobile inspection. Therefore the final visual sign-off should include a real browser pass (or screenshots supplied from the live site) at representative widths:

- 320
- 375
- 390
- 430
- 768
- 1024
- 1440+

That pass should focus on:
- image crops
- heading wraps
- mobile menu height with Events included
- long programme/research/event titles
- event fee-table horizontal scrolling
- vertical rhythm and section spacing

No major structural redesign should be reopened unless that visual evidence reveals a genuine problem.

---

## 9. Current milestone

The redesign implementation now has:

- strategic foundation
- evidence/verification standard
- information architecture
- Events architecture
- unified design system
- universal page rhythm
- shared navigation/footer
- About reference page
- Programmes
- Research
- Events
- Activity
- Contact
- integrated homepage

The next phase is visual sign-off and institutional content approval, not another architecture rewrite.
