# CGS Website Foundation — Phase 0

Status: LOCKED FOR REDESIGN
Date: 21 September 2026

## 1. Purpose of this document

This document is the strategic source of truth for the Centre for Gender Studies (CGS), Nasarawa State University, Keffi website redesign.

The website must operate as one coherent institutional experience. The homepage introduces the Centre; child pages deepen specific parts of that story. No page should behave like an isolated microsite.

This foundation should be reviewed before structural, content, or visual changes are made to any major page.

---

## 2. Core institutional story

### Narrative spine

**Understand society through gender → produce knowledge → develop people → apply knowledge → create public value.**

CGS should be presented as an academic Centre that connects:

1. Research
2. Teaching and academic development
3. Public/institutional engagement

The website must communicate those three responsibilities consistently.

### Primary positioning statement

**The Centre for Gender Studies at Nasarawa State University, Keffi studies how gender shapes institutions, opportunity and everyday life, and connects that knowledge with teaching, research and public engagement.**

This is a positioning statement for the website, not a slogan that must appear verbatim on every page.

---

## 3. Audience hierarchy

The site serves multiple audiences, but pages should not try to speak to everyone equally at once.

### A. Prospective students and professionals

Primary questions:
- What can I study?
- Which programme is relevant to me?
- What level is it?
- How do I get current admissions guidance?
- Who will I learn from?

Primary destinations:
- Programmes
- About
- Contact

### B. Researchers and academics

Primary questions:
- What does CGS study?
- What are its areas of inquiry?
- Who leads the Centre?
- How can I collaborate or discuss research?

Primary destinations:
- Research
- About
- Activity
- Contact

### C. Institutions, NGOs, public bodies and practitioners

Primary questions:
- What expertise does CGS have?
- Does the Centre engage outside the classroom?
- Can it support training, research, policy dialogue or institutional work?
- How do we begin a conversation?

Primary destinations:
- About
- Research
- Activity
- Contact

### D. General public and community

Primary questions:
- What is CGS?
- Why does gender studies matter?
- What is the Centre doing?
- How can I learn more or contact it?

Primary destinations:
- Home
- About
- Activity
- Contact

---

## 4. Six primary user intentions

The website should make these intents easy to recognize:

- **Understand** — About CGS
- **Study** — Programmes
- **Explore knowledge** — Research
- **Attend** — Events
- **See the work** — Activity
- **Engage** — Contact

These should guide navigation, CTAs and cross-page links.

---

## 5. Page responsibilities

### Home

Job: Orient and route.

The homepage should answer:
- What is CGS?
- Why does it matter?
- What can I study?
- What does it research?
- Is it active?
- Where should I go next?

The homepage should introduce, not exhaust, the content of child pages.

### About

Job: Build institutional understanding and trust.

The page should answer:
- Why does CGS exist?
- What is its mandate?
- How does it approach gender studies?
- Who leads and supports the Centre?
- How does its work connect to public life?

### Programmes

Job: Help a visitor understand study pathways and take the next step.

The page should answer:
- What programmes are verifiably offered?
- What kind of programme is each?
- Who is each programme broadly for?
- Where can applicants get current requirements and deadlines?

### Research

Job: Establish intellectual scope and research credibility.

The page should answer:
- What questions does CGS study?
- What areas organize its research?
- How does research connect to teaching and public life?
- How can researchers or institutions start a conversation?

### Events

Job: Show what is coming next and make participation clear.

The page should answer:
- What events are upcoming?
- When do they take place?
- When does registration close?
- How does someone register or request current details?

### Activity

Job: Demonstrate evidence of an active Centre.

The page should answer:
- What has CGS actually done?
- What happened?
- Why did it matter?
- Where is the supporting record?

Activity should be documentary and editorial, not a generic image gallery.

### Contact

Job: Route enquiries quickly.

Primary enquiry intents:
- Study
- Research
- Training/capacity development
- Institutional/public dialogue
- General enquiry

---

## 6. Cross-page journey

The target journey is:

**Discovery → Understanding → Participation / Evidence → Action**

Typical paths:

Home → About → Research / Events → Activity → Contact

Home → Programmes → Contact

Home → Events → Contact

Home → Research → Programmes

About → Programmes / Research / Activity → Contact

No major page should end as a dead end.

---

## 7. Content truth standard

Institutional credibility outranks marketing copy.

### Evidence hierarchy

**Tier 1 — Official institutional sources**
- Nasarawa State University official website
- School of Postgraduate Studies
- Approved curriculum documents
- Official CGS/NSUK documents

**Tier 2 — Centre-supplied primary material**
- Documents supplied by CGS
- Official activity records
- Approved biographies
- Official event folders
- Verified photographs

**Tier 3 — Editorial website copy**
- Explanatory language written for clarity
- Narrative transitions
- Section headings
- Calls to action

Tier 3 copy must never create Tier 1 facts.

### Rules

Do not invent or infer:
- programme availability
- admissions requirements
- application deadlines
- accreditation
- programme duration
- partnerships
- research outcomes
- impact statistics
- staff titles
- appointment dates
- event dates
- institutional claims

When information can change, direct visitors to the Centre for current guidance.

---

## 8. Content and data governance

Shared institutional facts should have one canonical source in the codebase.

### Rule

Programme names, research areas, team names/titles, contact details, navigation and other repeated institutional data should be imported from shared data/configuration rather than copied into individual pages.

### Current architecture risk

The current homepage contains its own local programme and research-area arrays while child pages use `app/site-data.ts`. This creates a risk that the homepage and child pages publish different facts after future edits.

### Phase rule

During implementation, consolidate repeated institutional facts into one verified shared source before expanding the child pages.

Editorial page-specific copy may remain local to a page.

---

## 9. Programme verification status

The current NSUK School of Postgraduate Studies public programme listing verifies the following entries under the Center for Gender Studies:

- PGD Gender Studies
- M.Sc. Gender Studies
- Masters in Gender Studies
- M.Phil./Ph.D. Gender Studies
- Ph.D. Gender Studies

The current website also presents an **Executive Certificate in Gender Studies**. That programme must be supported by an authoritative CGS/NSUK source before it is treated as a current academic offering.

An older NSUK curriculum document exists for certificate and diploma courses in Women Leadership Development, but this should not be treated as proof of the website's current Executive Certificate unless CGS confirms equivalence/current status.

### Phase rule

Until verified, programme architecture should distinguish:
- verified current programmes
- Centre-confirmed programmes awaiting public documentation
- unverified/draft entries

---

## 10. Voice and content principles

The CGS voice should be:

- Academic without being opaque
- Serious without being cold
- Human without becoming casual
- Confident without making unsupported claims
- Concise enough to scan
- Clear to non-specialists

Avoid:
- generic university filler
- exaggerated impact language
- slogans repeated across multiple sections
- long paragraphs before a visitor understands the point
- insider terminology without explanation

Use plain language first; academic specificity second.

---

## 11. Visual principles

### Institutional editorial, not sales landing page

The website should feel:
- credible
- contemporary
- thoughtful
- active
- human
- distinctly academic

### Shared visual grammar

Use:
- strong editorial typography
- clear hierarchy
- intentional whitespace
- large, meaningful photography
- numbered structures where they clarify sequence or categories
- a restrained institutional palette
- consistent CTA language

Avoid:
- excessive small cards
- random gradients
- decorative photos with no narrative purpose
- different visual systems for every page
- unnecessary animations
- repeated sections that differ only in background colour

---

## 12. Photography principles

Photography is evidence, not decoration.

Images should primarily show:

1. People and leadership
2. Teaching and learning
3. Research in practice
4. Public/community engagement
5. Institutional activity

Prefer fewer strong editorial images over many weak thumbnails.

Every important image should answer at least one question:
- Who is involved?
- What is happening?
- Where does CGS work become visible?
- What kind of institution is this?

---

## 13. Mobile principle

Mobile is a designed reading sequence, not desktop stacked vertically.

For each section, decide intentionally:
- what appears first
- how much copy is necessary
- whether the image should lead
- where the CTA belongs
- whether repeated structures should collapse or simplify

Preferred mobile rhythm:

**Visual / context → idea → explanation → action**

Avoid long chains of text-only sections.

---

## 14. Homepage/child-page relationship

The homepage should introduce each major idea once.

Child pages should deepen it.

Examples:

Home:
Research · Teaching · Engagement

About:
Why those responsibilities exist and how they work together.

Home:
Six programme pathways / study at CGS

Programmes:
Verified programme structure, fit, guidance and next step.

Home:
Research areas

Research:
Deeper intellectual framing and collaboration context.

Home:
CGS activity

Activity:
Documented events, context and supporting records.

This principle prevents copy duplication.

---

## 15. Phase 0 non-negotiables

Before a page is considered structurally complete:

1. Its primary audience and question must be clear.
2. It must perform one dominant job.
3. Claims must be traceable to an appropriate source.
4. It must hand users to a logical next page.
5. Mobile hierarchy must be designed intentionally.
6. Photography must support the story.
7. The page must look and sound like the same CGS institution as the homepage.

---

## 16. Phase 0 exit criteria

Phase 0 is complete when:

- audience hierarchy is agreed
- narrative spine is agreed
- six primary user intentions are agreed
- page responsibilities are agreed
- cross-page journey is agreed
- evidence/content truth rules are agreed
- visual principles are agreed
- mobile principle is agreed
- programme verification gaps are recorded

Once locked, Phase 1 may map the information architecture and exact cross-page navigation in detail.

---

## 17. Open verification queue

Before final publication, confirm with CGS:

- Whether the Executive Certificate in Gender Studies is currently offered
- Whether the website's six-programme count is current
- Whether M.Phil. should be presented independently or as M.Phil./Ph.D.
- Current official director title/appointment wording
- Which staff biographies/titles are approved for publication
- Which research areas are officially adopted versus editorial groupings
- Which activity records may be publicly described and linked
