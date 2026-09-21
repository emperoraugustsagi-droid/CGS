# CGS Design System — Phase 2

Status: LOCKED FOR IMPLEMENTATION
Date: 21 September 2026
Depends on:
- docs/site-foundation.md
- docs/information-architecture.md
- docs/verification-register.md

## 1. Design objective

Create one visual language for the Centre for Gender Studies across desktop, tablet and mobile.

The system should feel:

- academically credible
- contemporary
- human
- editorial
- calm
- active
- accessible

CGS should not look like a corporate SaaS product, a generic university template, or a collection of unrelated landing pages.

The website should feel like an academic institution with a strong editorial voice.

---

# 2. Core design principles

## 2.1 Editorial before decorative

Typography, photography, spacing and hierarchy should carry the design.

Avoid adding decoration when structure can solve the problem.

## 2.2 Photography is evidence

Images should show people, learning, research, public engagement and institutional activity.

Photography is not filler.

## 2.3 One brand across breakpoints

Desktop and mobile must use the same core palette, typography and component logic.

Mobile may change composition and ordering, but should not become a separate visual identity.

## 2.4 Fewer stronger patterns

Prefer a small number of reusable layout patterns over many one-off section designs.

## 2.5 Information before effects

Animation, hover states and visual flourishes should support understanding, never compete with it.

---

# 3. Brand colour system

The future-facing CGS palette is based on institutional navy, CGS pink, sky blue and warm neutral surfaces.

## 3.1 Core colours

### Institutional Navy 950
`#06172D`

Role:
- strongest dark background
- hero overlays
- footer
- high-contrast institutional moments

### Institutional Navy 800
`#0B2348`

Role:
- primary brand colour
- main headings on light surfaces
- primary dark text
- dark buttons where appropriate

### CGS Pink 600
`#CF1470`

Role:
- primary expressive accent
- important CTA emphasis
- indexes
- active states
- selective highlights

### CGS Pink 300
`#EF88BD`

Role:
- soft highlight on dark backgrounds
- supporting decorative accent
- light emphasis

### Academic Blue 600
`#1677E8`

Role:
- informational emphasis
- links/focus support
- secondary interaction
- selective alternating content accents

### Sky Blue 400
`#71C3F4`

Role:
- softer supporting accent
- dark-background details
- subtle informational emphasis

## 3.2 Neutral system

### Warm White
`#FBFAF8`

Primary page background.

### Paper
`#FAF7F2`

Secondary warm reading surface.

### White
`#FFFFFF`

Cards and high-clarity surfaces.

### Text primary
`#0B2348`

### Text muted
`#5A6A85`

### Border
`rgb(11 35 72 / 14%)`

## 3.3 Soft accent surfaces

### Pink tint
`#FFF1F8`

Use for occasional human/community emphasis.

### Blue tint
`#EFF8FF`

Use for occasional information/learning emphasis.

Do not alternate pink and blue mechanically across every card.

## 3.4 Legacy colours

The existing desktop implementation contains:

- wine `#321525`
- burgundy `#54233D`
- gold `#C99A4A`

These are transitional legacy values.

They should not be expanded into new components.

During implementation, existing sections will be migrated deliberately into the semantic CGS palette rather than changed globally in one unsafe replacement.

---

# 4. Colour usage rules

## Dark sections

Use Institutional Navy 950 or 800.

Text:
- white
- muted white
- pink 300 / sky 400 for selective accents

## Light sections

Use Warm White, Paper or White.

Headings:
Institutional Navy 800.

Body:
Text muted.

Accent:
CGS Pink 600.

## Accent rule

A section should normally have one dominant accent.

Do not use pink, blue, sky, gold and wine simultaneously.

## Information hierarchy

Pink:
action / human emphasis.

Blue:
information / knowledge / secondary emphasis.

Navy:
authority / structure.

Warm neutral:
reading / calm.

---

# 5. Typography

Fonts are already technically appropriate and should remain:

## Display / editorial

**DM Serif Display**

Use for:
- H1
- H2
- H3 where editorial
- major numbers/dates
- important pull statements

## Functional / body

**Inter**

Use for:
- paragraphs
- navigation
- buttons
- labels
- metadata
- tables
- captions

---

# 6. Type scale

The scale should be fluid rather than breakpoint-specific wherever possible.

## Display / H1

Desktop:
56–88px depending on composition.

Mobile:
42–58px.

Line height:
0.94–1.02.

Use only for page-defining statements.

## H2

Desktop:
46–70px.

Mobile:
38–52px.

Line height:
0.96–1.04.

## H3

Desktop:
26–36px.

Mobile:
22–30px.

## Lead paragraph

Desktop:
15–17px.

Mobile:
13–15px.

Line height:
1.6–1.75.

## Body

Desktop:
14–15px.

Mobile:
12–14px.

Minimum comfortable reading body:
12px only for secondary content; primary prose should not be 10–11px.

## Label / eyebrow

9–11px.

Uppercase, high tracking.

Use sparingly.

## Caption / metadata

9–11px.

Never use tiny text for primary information.

---

# 7. Text width

Readable prose should generally stay within:

- 520–640px desktop
- 100% of the mobile content column

Large headings may run wider.

Long body copy should not span the full desktop container.

---

# 8. Spacing system

Use a consistent 4px-based spacing family.

Recommended tokens:

- 4px — micro
- 8px — xs
- 12px — sm
- 16px — md
- 24px — lg
- 32px — xl
- 48px — 2xl
- 64px — 3xl
- 80px — 4xl
- 104px — section desktop
- 120px — exceptional editorial separation

## Section spacing

Desktop:
88–112px.

Tablet:
72–88px.

Mobile:
56–72px.

Not every section should have identical height. Visual rhythm can vary intentionally.

---

# 9. Layout grid

## Maximum content width

1240px.

## Desktop gutters

32px each side minimum.

## Mobile gutters

16px each side minimum.

## Common desktop grids

### Balanced editorial
1fr / 1fr

### Text + visual
0.9fr / 1.1fr

### Visual + text
1.1fr / 0.9fr

### Context + content
0.8fr / 1.2fr

Avoid arbitrary fractional grids per section unless content demands it.

---

# 10. Borders and radius

## Borders

1px structural borders.

Use neutral brand border.

Strong top rule may use navy.

## Radius

CGS is primarily editorial.

Use:

- 0px for large editorial photography/structural blocks where appropriate
- 4–6px for buttons/cards
- pill shapes only for small tags/chips

Avoid large 20–32px SaaS-style card radii.

---

# 11. Shadows

Shadows should be rare.

Use only where:
- sticky navigation needs separation
- floating mobile surface needs hierarchy
- image/editorial block intentionally lifts from a surface

Prefer borders and spacing to shadow-heavy UI.

---

# 12. Photography system

## 12.1 Hero photography

Desktop:
strong crop with editorial composition.

Mobile:
use a mobile-specific crop when necessary.

Never rely on desktop crop simply shrinking.

## 12.2 Editorial visual blocks

Recommended:
4:3, 5:4 or controlled responsive height.

Use large images.

Avoid tiny photo cards unless the content is genuinely a gallery/archive.

## 12.3 Portraits

Leadership:
roughly 4:5 portrait crop.

Faces should remain visible and naturally positioned.

## 12.4 Event imagery

Upcoming event pages may use:
- official flyer
- event artwork
- event-specific imagery
- date-led editorial treatment

Do not use unrelated stock-like imagery as if it documents the event.

## 12.5 Image captions

Captions should explain context, not repeat the alt text.

---

# 13. Page hero families

The site should use no more than three primary hero patterns.

## Hero A — Institutional visual hero

Use:
Home.

Includes:
- image
- strong proposition
- concise body
- two actions max

## Hero B — Editorial page intro

Use:
Programmes
Research
Activity
Contact

Includes:
- eyebrow
- H1
- short context

May transition into a visual section below.

## Hero C — Identity / feature hero

Use:
About
Events where appropriate

May combine:
- editorial statement
- strong image/date block
- deeper visual identity

Do not invent a new hero type for every page.

---

# 14. Section-heading system

Each major section should normally contain:

1. eyebrow/context
2. H2
3. optional short supporting paragraph

The heading block can be:

- left aligned
- centered on mobile when appropriate
- split editorial grid on desktop

Do not center long body content merely because the heading is centered.

---

# 15. Component grammar

## Eyebrow

Purpose:
context, not decoration.

Structure:
small uppercase label + short accent rule.

## Index

Purpose:
sequence or categorisation.

Use:
01, 02, 03…

Pink is the default index accent.

## Primary button

Filled CGS Pink on light or navy surfaces where contrast passes.

Minimum height:
48px desktop
48px mobile

## Dark button

Institutional Navy.

Use for secondary strong actions on light backgrounds.

## Text link

Underlined/bottom-rule editorial action.

Use for:
secondary navigation
deep exploration

## Information card

Use only where content is genuinely modular.

Card should contain:
- label/index
- heading
- concise detail
- optional action

## Editorial row/list

Preferred for:
- programmes
- team
- deadlines
- research indexes

Lists often communicate institutional information better than grids of cards.

## Contact band

Strong dark closing section.

One major CTA.

## Event date block

Large editorial date treatment:
month
start date
range/year

Use only for upcoming/featured events.

## Data table

Use:
fees
structured comparisons

Responsive behavior:
horizontal scroll or deliberate mobile transformation.

Never squeeze large tables into unreadable phone widths.

---

# 16. CTA hierarchy

## Primary

One dominant action per section.

Filled button.

## Secondary

Text link.

## Tertiary

Inline link.

A section should rarely expose more than two competing actions.

---

# 17. Mobile composition principles

Mobile is not desktop stacked vertically.

## Default reading rhythm

Context
→ headline
→ visual or key evidence
→ concise explanation
→ action

## Heading alignment

High-level section introductions may be centered.

Detailed content:
left aligned for scanability.

## Cards

Single column by default.

Avoid excessive repeated cards.

## Images

Give important images enough height to feel intentional.

## Tables

Allow horizontal scrolling or transform into structured rows.

## Buttons

Primary CTA becomes full-width when appropriate.

Minimum touch target:
44px.

## Navigation

Menu should remain simple and short.

With Events added, confirm menu height and spacing on small screens.

---

# 18. Interaction system

## Hover

Subtle:
- underline
- small arrow movement
- border/background shift

Avoid scale-heavy hover effects.

## Focus

Visible 3px focus ring.

Use Academic Blue or another high-contrast semantic focus colour.

## Motion

150–250ms for simple interactions.

Respect reduced motion.

No decorative scroll animation is required.

---

# 19. Accessibility requirements

Minimum targets:

- WCAG AA contrast
- semantic heading order
- 44px touch targets
- keyboard-accessible navigation
- visible focus states
- useful alt text
- decorative images use empty alt
- tables include proper headers
- reduced-motion support
- no essential information conveyed only by colour

---

# 20. Responsive breakpoints

The current implementation primarily uses:

- 820px
- 620px
- 370px edge case

We should keep the breakpoint set small.

Recommended system:

### Wide
> 1200px

### Standard desktop/tablet landscape
821–1200px

### Tablet/mobile transition
621–820px

### Mobile
≤ 620px

### Small mobile safeguard
≤ 370px

Do not create one-off breakpoints for isolated sections unless necessary.

---

# 21. Current implementation audit

The CSS currently contains at least:

- 32 unique hard-coded hex colours
- 76 distinct rgb()/rgba-style colour expressions
- separate mobile files overriding major visual systems
- wine/burgundy/gold desktop patterns
- navy/pink/blue mobile patterns

This creates visual drift and maintenance cost.

The goal is not to remove every literal immediately.

The goal is to migrate page-by-page into semantic tokens.

---

# 22. Semantic token strategy

New/refactored CSS should use semantic roles.

Core tokens:

- `--cgs-navy-950`
- `--cgs-navy-800`
- `--cgs-pink-600`
- `--cgs-pink-300`
- `--cgs-blue-600`
- `--cgs-sky-400`
- `--cgs-warm-white`
- `--cgs-paper`
- `--cgs-white`
- `--cgs-text`
- `--cgs-muted`
- `--cgs-border`

Semantic aliases:

- `--color-primary`
- `--color-primary-strong`
- `--color-accent`
- `--color-info`
- `--color-sky`
- `--surface-page`
- `--surface-paper`
- `--surface-card`
- `--surface-accent-pink`
- `--surface-accent-blue`
- `--text-primary`
- `--text-muted`
- `--border-default`
- `--focus-ring`

---

# 23. Component implementation priorities

Phase 2 implementation should establish/reuse:

1. SiteHeader
2. SiteFooter
3. PageIntro
4. SectionHeading
5. Eyebrow
6. Primary/secondary CTA patterns
7. EditorialVisual
8. IndexedList / structured rows
9. ContactBand
10. EventDate / EventFacts
11. Responsive data table
12. Shared surface/section modifiers

Not every item needs a React abstraction.

Create a component only when repetition and behavior justify it.

---

# 24. CSS migration strategy

Do not globally replace legacy colours.

Order:

1. add semantic tokens
2. migrate shared header/footer/buttons
3. migrate page-shell primitives
4. migrate Home
5. migrate About
6. migrate Events
7. migrate Programmes
8. migrate Research
9. migrate Activity
10. migrate Contact
11. remove obsolete mobile overrides
12. remove unused legacy variables

Each stage requires visual QA.

---

# 25. Phase 2 acceptance criteria

Phase 2 is complete when:

- one colour system is defined;
- typography roles are defined;
- spacing rhythm is defined;
- image behavior is defined;
- three hero families are defined;
- CTA hierarchy is defined;
- component grammar is defined;
- mobile composition rules are defined;
- interaction/accessibility rules are defined;
- semantic tokens exist in CSS;
- future pages no longer need to invent visual rules ad hoc.

After this, implementation can proceed systematically through the page sequence.
