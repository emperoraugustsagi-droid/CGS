# CGS Website — Codex Execution Brief

Status: AUTHORITATIVE EXECUTION BRIEF  
Date: 21 September 2026  
Project: Centre for Gender Studies, Nasarawa State University, Keffi

Read this file completely before modifying the site.

This brief consolidates the strategy, information architecture, design system, content rules, responsive rules, audit findings, and implementation priorities established during the CGS redesign. Treat it as the execution contract for the next Codex pass.

Do not redesign the architecture from scratch. Do not invent a new visual system. Inspect the current repository, compare it against this brief, then fix only the remaining gaps.

---

# 1. Core mission

The CGS website should communicate this institutional story:

**Understand society through gender → produce knowledge → develop people → apply knowledge → create public value.**

The site should feel:

- academically credible
- contemporary
- human
- editorial
- institutional
- thoughtful
- active
- mature
- accessible

It must not feel like:

- a SaaS landing page
- a generic university template
- an NGO donation page
- a collection of unrelated landing pages
- an AI-generated marketing site

---

# 2. Primary audiences

Design for four main audience groups.

## A. Prospective students and professionals

They want to know:

- what can I study?
- which level is relevant to me?
- what should I do next?
- where do I confirm current admissions information?

## B. Researchers and academics

They want:

- research areas
- intellectual direction
- evidence of academic activity
- leadership
- collaboration routes

## C. Institutions, NGOs, public bodies and practitioners

They want:

- expertise
- training
- research collaboration
- policy/institutional dialogue
- evidence that CGS is active

## D. General public and community

They want:

- what CGS is
- why it exists
- what it does
- events
- activity
- how to contact it

---

# 3. Six primary user intentions

The website should make these six intentions obvious:

- **Understand** → About
- **Study** → Programmes
- **Explore knowledge** → Research
- **Attend** → Events
- **See the work** → Activity
- **Engage** → Contact

---

# 4. Route architecture

Primary routes:

```text
/
├── /about
├── /programmes
├── /research
├── /events
├── /activity
└── /contact
```

Do not add unnecessary top-level pages during this pass.

Possible future routes should only be created when enough verified content exists:

```text
/programmes/[programme]
/research/[area]
/activity/[slug]
```

---

# 5. Global user journey

The intended site journey is:

```text
Discovery
  ↓
Understanding
  ↓
Knowledge / Participation
  ↓
Evidence
  ↓
Action
```

No major page should end in a dead zone.

---

# 6. Homepage role

The homepage is an institutional introduction and router.

It should preview child pages, not duplicate them.

Preferred sequence:

```text
Hero
↓
Mandate
↓
Study at CGS
↓
Research
↓
Upcoming Event
↓
Leadership
↓
Activity
↓
Intent Router
↓
Footer
```

Do not add more homepage sections unless there is a clear user need.

---

# 7. Homepage rules

## Hero

Purpose: answer **What is CGS?**

Must include:

- CGS identity
- strong editorial proposition
- concise body copy
- Programme CTA
- Research CTA
- meaningful institutional photography

Avoid:

- long copy
- unverified statistics
- too many CTAs

## Mandate

Preview only:

- Research
- Teaching
- Engagement

The full explanation belongs on About.

## Programme preview

Home should show pathways, not a second full catalogue:

- Foundation learning
- Postgraduate transition
- Advanced study
- Research degrees

Primary CTA:

**View all programmes**

## Research preview

Home introduces the intellectual direction only.

Primary CTA:

**Explore Research**

Do not reproduce the full Research page.

## Events preview

Events must remain prominent.

The featured event is:

**First International Gender Conference ’26**

Theme:

**Gender, Crisis, and Resilience: Forging Equitable Futures in a Changing World.**

Conference dates:

**4–7 November 2026**

Abstract submission deadline:

**30 September 2026**

Notification of acceptance:

**7 October 2026**

Early-bird registration deadline:

**10 October 2026**

Full paper submission deadline:

**21 October 2026**

Standard registration deadline:

**28 October 2026**

Venue:

**NSUK Multipurpose Hall by Second Gate, Keffi**

Do not revert to earlier provisional dates.

## Leadership preview

Homepage should show:

- Director image
- short leadership introduction
- **Ag. Director** wording
- link to About / wider team

Do not restore the full team roster to Home.

## Activity preview

Home should route:

```text
Home → Activity page → supporting source documentation
```

Do not send users directly from Home to Drive folders.

---

# 8. About page

Purpose:

**Who is CGS, why does it exist, and who is behind it?**

Recommended structure:

```text
Identity
↓
Why CGS exists
↓
Research / Teaching / Engagement
↓
Knowledge in public
↓
Intellectual lens
↓
Leadership
↓
Wider team
↓
Continue exploring
↓
Contact
```

About owns the full team roster.

---

# 9. Programmes page

Purpose:

**Help users understand study pathways and next steps.**

Verified current postgraduate listings:

- PGD Gender Studies
- M.Sc. Gender Studies
- Masters in Gender Studies
- M.Phil./Ph.D. Gender Studies
- Ph.D. Gender Studies

Other Centre study offerings, kept separate from postgraduate listings:

- Gender Studies Certificate Programme
- Gender Studies Diploma Programme

Do not use these unsupported/obsolete formulations unless CGS supplies new evidence:

- “06 Academic programmes”
- “Executive Certificate in Gender Studies”
- standalone “M.Phil.”

Never invent:

- fees
- duration
- admission deadlines
- entry requirements
- accreditation claims

Where current details may change, direct users to CGS for confirmation.

---

# 10. Research page

Purpose:

**Establish intellectual credibility and routes into inquiry.**

Current editorial areas of inquiry:

- Gender & Development
- Gender-Based Violence
- Women & Leadership
- Gender & Health
- Gender & Education
- Gender & Governance

These are editorial areas of inquiry.

Do not present them as formal departments or research units unless CGS confirms that.

Recommended structure:

```text
Research proposition
↓
Research in practice
↓
Areas of inquiry
↓
From research to public life
↓
Evidence
↓
Research conversation
```

Research should feel like an intellectual environment, not six marketing cards.

---

# 11. Events page

Events means:

**What is coming next and how can I participate?**

Activity means:

**What has happened and what evidence do we have?**

Keep those roles separate.

Events owns:

- event title
- theme
- venue
- important dates
- subthemes
- event leadership
- registration fees
- co-author fees
- payment information
- event contacts
- event website
- Event structured data

Preserve verified flyer information exactly unless newer official information is supplied.

---

# 12. Activity page

Purpose:

**Documentary evidence of CGS work.**

Current supplied records include:

- CGS Research Workshop
- Inauguration of the CGS Advisory Committee

The website should own the narrative.

External Google Drive folders are supporting evidence only.

Do not invent:

- dates
- attendance counts
- outcomes
- partners
- impact claims

unless supplied by CGS.

---

# 13. Contact page

Contact is an enquiry router.

Primary enquiry intentions:

- Study
- Research
- Events
- Training
- Institutional/Public Dialogue
- General

Internal-first routing:

- Study → Programmes first
- Research → Research first
- Events → Events first

Then direct contact.

---

# 14. Core visual identity

## Institutional navy

```css
--cgs-navy-950: #06172D;
--cgs-navy-800: #0B2348;
```

Use for:

- institutional authority
- major dark sections
- footer
- research/event emphasis
- primary dark text

## CGS pink

```css
--cgs-pink-600: #CF1470;
--cgs-pink-300: #EF88BD;
```

Use for:

- primary accent
- CTA emphasis
- indexes
- selective highlights
- human emphasis

## Academic blue

```css
--cgs-blue-600: #1677E8;
--cgs-sky-400: #71C3F4;
```

Use for:

- informational emphasis
- supporting accents
- alternating structured content

Do not use sky blue for random UI icons.

## Neutral surfaces

```css
--cgs-warm-white: #FBFAF8;
--cgs-paper: #FAF7F2;
--cgs-white: #FFFFFF;
--cgs-muted: #5A6A85;
```

---

# 15. Colour usage rules

Navy = authority / structure  
Pink = action / emphasis / human accent  
Blue = information / secondary emphasis  
Warm neutral = reading / calm

Use one dominant accent per section.

Do not combine navy, pink, blue, gold, wine and burgundy simply for variety.

Legacy wine/burgundy/gold values should not create a second visual identity.

Compatibility aliases may remain temporarily, but they must resolve to the semantic CGS palette.

---

# 16. Typography

Display/editorial font:

**DM Serif Display**

Functional/body font:

**Inter**

## H1

Desktop:

56–88px

Mobile:

42–58px

## H2

Desktop:

46–70px

Mobile:

38–52px

## H3

22–36px

## Primary body copy

13–16px

Avoid meaningful body copy at 9–10px.

Metadata/captions may be smaller.

---

# 17. Mobile header rule

Important recent decision:

**Only increase the text size.**

Do not enlarge:

- header height
- logo size
- brand/logo gap
- header padding

Current intended mobile font sizes:

```css
.brand strong {
  font-size: clamp(14.5px, 4.1vw, 16px);
}

.brand small {
  font-size: clamp(9.5px, 2.7vw, 10.5px);
}
```

Do not reintroduce the rejected 78px header / 41px logo / extra-spacing modification.

---

# 18. Spacing system

Prefer a consistent rhythm:

```text
4
8
12
16
24
32
48
64
80
104
```

Desktop major-section spacing:

88–112px

Mobile major-section spacing:

56–72px

Do not create large empty spaces without a narrative reason.

---

# 19. Layout system

Maximum content width:

1240px

Desktop gutters:

32px

Mobile gutters:

16px

Common editorial grids:

```text
1fr 1fr
0.9fr 1.1fr
1.1fr 0.9fr
0.8fr 1.2fr
```

Avoid random ratios unless content truly requires them.

---

# 20. Photography

Photography should function as evidence, not filler.

Prioritise images showing:

- students
- researchers
- leadership
- workshops
- institutional activity
- community/public engagement

Prefer one strong editorial image over many small weak thumbnails.

Recommended crops:

Leadership portraits:

~4:5

Editorial visual blocks:

4:3 or 5:4

Mobile crops must be intentional.

Do not simply shrink the desktop crop and hope it works.

---

# 21. Universal page rhythm

Child pages should roughly follow:

```text
Orientation
↓
Context
↓
Core substance
↓
Evidence
↓
Deeper exploration
↓
Next action
```

Pages may vary visually, but they should feel like one institution.

---

# 22. Mobile composition

Mobile is not desktop stacked vertically.

Preferred rhythm:

```text
context
headline
visual / evidence
concise explanation
action
```

Large editorial headings may be centered.

Long reading copy should usually remain left-aligned.

Avoid long sequences of:

```text
heading
paragraph
paragraph
heading
paragraph
paragraph
```

for an entire page.

---

# 23. CTA hierarchy

A section should usually have:

1 primary CTA  
1 secondary CTA maximum

Primary:

filled button

Secondary:

editorial text link

Avoid multiple equal-priority actions.

---

# 24. Arrow/icon system

Do not use Unicode arrow characters:

```text
↗
→
```

They can render as emoji on Android.

Use the shared SVG arrow component.

Forward arrow:

- horizontal shaft
- chevron head

Diagonal arrow:

- northeast line arrow

SVG rules:

- use `currentColor`
- line icon
- stroke around 1.9
- rounded caps/joins
- inherit section colour
- subtle hover movement only

There should be no raw Unicode arrows in primary UI code.

---

# 25. Cards and structured content

Avoid card overload.

Prefer structured editorial rows for:

- Programmes
- Team
- Research
- Important dates
- Contact details

Use cards only when the content is genuinely modular.

---

# 26. Borders, radius and shadows

Borders:

1px structural borders.

Radius:

0–6px for most editorial UI.

Avoid large SaaS-style 20–32px card radii.

Shadows should be rare.

Acceptable examples:

- subtle sticky header separation
- restrained date-block offset
- deliberate editorial image treatment

Prefer borders + whitespace over floating-card UI.

---

# 27. Accessibility

Target WCAG 2.2 AA.

At minimum:

- semantic heading structure
- useful alt text
- decorative images use empty alt
- keyboard-accessible navigation
- visible focus styles
- meaningful target sizes
- adequate colour contrast
- proper table headers
- no essential information conveyed only by colour
- reduced-motion-friendly interactions

Aim for approximately 44px touch targets for important controls where practical.

---

# 28. Primary navigation

Keep:

- About Us
- Programmes
- Research
- Events
- Activity
- Contact CGS

Do not add these as top-level pages during this pass:

- Team
- Leadership
- Gallery
- Admissions
- Policy
- Training

---

# 29. Content voice

Writing should be:

- intelligent
- clear
- concise
- human
- academically credible
- evidence-aware
- understandable to non-specialists

Avoid:

- corporate filler
- exaggerated impact language
- generic empowerment slogans everywhere
- repetitive AI-style prose
- unsupported institutional claims
- unnecessary academic jargon

---

# 30. Evidence hierarchy

Use this hierarchy when checking claims.

## Tier A
Official current NSUK sources.

## Tier B
Official historical NSUK documents.

## Tier C
Strong/recent public reporting or credible external profiles.

## Tier D
Centre-supplied primary material.

## Tier E
Editorial website copy.

Tier E must never invent Tier A facts.

---

# 31. Leadership wording

Current safest wording:

**Dr. Comfort Ayine Adokwe-Obed — Ag. Director**

Do not publish:

**Director since February 2026**

unless CGS supplies direct confirmation.

---

# 32. Known mobile issues already found and fixed

Preserve these fixes.

## Research heading contrast
The mobile homepage Research title previously became effectively navy-on-navy.

Fixed.

Do not reintroduce that contrast bug.

## Event block vertical height
The mobile event/date area was too tall.

Tightened.

Preserve the tighter composition.

## Leadership transition spacing
Excessive vertical space around Leadership / Meet the Centre was reduced.

Preserve the tighter rhythm.

## Duplicate slogan block
A repeated “Knowledge. People. A fairer tomorrow.” banner was removed.

Do not restore it.

## Emoji arrows
Unicode arrows were replaced with shared SVG line icons.

Do not restore Unicode arrows.

## Mobile header readability
Header text was enlarged without changing layout spacing/logo size.

Preserve this exact intent.

---

# 33. CSS strategy

The current CSS contains historical layers and late-loading mobile override files.

Do not immediately rewrite everything.

First achieve visual sign-off.

Then:

- identify dead selectors
- consolidate duplicate mobile rules
- remove obsolete legacy classes
- migrate repeated page rules into semantic shared patterns
- remove compatibility aliases only after confirming nothing depends on them

Avoid aggressive CSS deletion before visual verification.

---

# 34. Breakpoints

Keep the breakpoint system small.

Recommended:

```text
>1200px
821–1200px
621–820px
≤620px
≤370px safeguard
```

Do not introduce one-off breakpoints for isolated sections unless absolutely necessary.

---

# 35. Final QA widths

Test at:

```text
320
375
390
430
768
1024
1440+
```

Check:

- heading wraps
- mobile navigation
- image crops
- CTA widths
- event fee table horizontal scrolling
- event date block
- long programme names
- long research names
- leadership/card composition
- section spacing

---

# 36. Performance

Audit:

- Next.js Image usage
- unnecessary priority images
- image dimensions
- layout shift
- bundle warnings
- unnecessary CSS duplication
- dead code/imports

Do not sacrifice image quality excessively.

---

# 37. SEO / metadata

Verify:

- page titles
- page descriptions
- production canonical host
- no localhost URLs
- social metadata where appropriate
- useful alt text
- Event structured data
- valid route metadata

---

# 38. Event structured data

Preserve Event schema fields such as:

- Event
- EducationalOrganization
- Place
- startDate
- endDate
- location
- organizer

Do not add speculative availability or ticket claims that are not verified.

---

# 39. Shared chrome

Use shared:

- SiteHeader
- SiteFooter
- PageShell
- PageIntro
- SectionHeading
- ContactBand
- Arrow

Do not create another bespoke homepage footer.

Footer navigation must include Events.

Header should remain calm and institutional.

---

# 40. What Codex must NOT do

Do not:

- redesign the site from scratch
- invent a new palette
- replace DM Serif + Inter without a strong technical reason
- introduce random gradients
- add generic stock photography
- fabricate research projects
- fabricate admissions details
- change verified conference information
- turn everything into cards
- create empty new pages
- add decorative animation
- reintroduce Unicode arrow glyphs
- change mobile header spacing when only typography was requested
- restore removed duplicate content
- merge Events and Activity into one concept

---

# 41. What Codex SHOULD improve

Focus on:

- visual consistency
- spacing
- hierarchy
- readability
- responsive composition
- image cropping
- removing redundant content
- interaction polish
- accessibility
- maintainability
- safe CSS consolidation after sign-off

---

# 42. Required execution approach

Before modifying code:

1. Read this file fully.
2. Read:
   - `docs/site-foundation.md`
   - `docs/verification-register.md`
   - `docs/information-architecture.md`
   - `docs/design-system.md`
   - `docs/page-rhythm.md`
   - `docs/final-consistency-audit.md`
3. Inspect the current implementation.
4. Produce a concise gap list only for issues that still exist.
5. Group issues as P0 / P1 / P2 / P3.
6. Do not propose a new architecture.

Then:

- execute P0
- execute P1
- execute low-risk/high-value P2
- defer preference-only P3 unless clearly beneficial

Run build/type/lint checks after each logical batch.

---

# 43. Severity model

## P0
Broken functionality, incorrect institutional information, inaccessible critical interaction.

Fix immediately.

## P1
Major UX/UI problem.

Fix before launch.

## P2
Meaningful refinement.

Fix if low risk.

## P3
Preference/polish.

Only fix when clearly beneficial.

---

# 44. Fresh audit plan after implementation

Do not resume the old audit as though nothing changed.

Run a fresh **delta audit** with five focused agents.

## Agent 1 — UX / IA

Audit:

- navigation
- page purpose
- dead ends
- duplication
- CTA hierarchy
- journey continuity

Output findings as:

- Critical
- Important
- Optional

## Agent 2 — Visual / UI

Audit:

- typography
- spacing
- rhythm
- colour consistency
- photography
- alignment
- repeated card patterns
- mobile composition

Do not propose a new aesthetic.

## Agent 3 — Content / Editorial

Audit:

- unsupported claims
- repetitive wording
- unnecessary copy
- weak headings
- CTA clarity
- institutional tone

Check claims against the verification register.

## Agent 4 — Accessibility

Audit:

- heading hierarchy
- keyboard navigation
- focus styles
- colour contrast
- target sizes
- alt text
- table semantics
- reduced-motion handling

## Agent 5 — Engineering

Audit:

- dead CSS
- duplicate rules
- stale mobile overrides
- shared components
- unused imports
- Next.js image use
- build errors
- metadata
- performance

---

# 45. Agent audit rule

Agents must audit first.

They should not modify code immediately.

Every finding must include:

- page/file
- problem
- why it matters
- severity
- recommended fix

Then one orchestrator should decide which findings are accepted.

Do not allow multiple agents to independently redesign the same page.

---

# 46. Do not resume the old audit wholesale

The site changed substantially after the earlier audit:

- Events was added
- information architecture changed
- programme structure was corrected
- all child pages were rebuilt
- shared design tokens were introduced
- Activity and Events were separated conceptually
- homepage routing changed
- mobile design was polished from screenshots
- arrow system changed
- shared footer/header were consolidated

Therefore, the old audit should not be treated as current truth.

Use this brief + the current repository and run a new delta audit after implementation.

---

# 47. Build and QA commands

After meaningful implementation batches, run the project’s real commands for:

- build
- typecheck
- lint
- responsive QA
- navigation QA
- metadata QA

Do not claim completion while build errors remain.

---

# 48. Definition of done

The site is finished when:

- every primary route has a clear purpose
- the pages feel like one institution
- mobile is intentionally composed
- programme information is accurate
- conference information matches the official flyer
- unsupported claims are removed or qualified
- navigation is clear
- header/footer are shared
- major CTAs work
- typography is readable
- spacing is controlled
- image crops are intentional
- accessibility basics pass
- no emoji arrows remain
- no obvious CSS conflicts remain
- Vercel production build is green
- unresolved institutional facts are documented rather than guessed

---

# 49. First instruction to Codex

Use this exact instruction after reading the file:

> Read `CODEX_EXECUTION_BRIEF.md` completely before modifying anything. Then inspect the current repository and compare the implementation against the brief. Do not redesign the architecture. Do not introduce a new visual system. First produce a concise implementation plan containing only the remaining gaps between the current site and the brief, grouped into P0/P1/P2/P3. Then execute P0 and P1, followed by low-risk/high-value P2 items. Preserve all verified content and conference data. Run build/type/lint checks after each logical batch. Do not claim completion until the affected responsive layouts have been checked.

---

# 50. Final principle

The remaining goal is **finish and polish**, not reimagine.

When deciding whether to change something, ask:

> Does this improve clarity, trust, usability, accessibility, responsiveness or maintainability without weakening the established CGS identity?

If not, leave it alone.
