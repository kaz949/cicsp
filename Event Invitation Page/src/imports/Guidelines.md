# Accenture-inspired Figma Make Guidelines

Use these guidelines to transform supplied text into complete, responsive landing pages and digital event experiences for desktop and mobile.

Reference source: Accenture public website, https://www.accenture.com/us-en, reviewed July 17, 2026. Use the site as visual inspiration only. Do not copy it pixel for pixel or reproduce protected assets.

## Core objective

Create premium, editorial, technology-forward experiences using:

- black and white as the dominant visual foundation;
- vivid purple as a signal, highlight, directional element, or focal field;
- oversized typography and strong scale contrast;
- modular grids, confident alignment, and generous negative space;
- large, immersive imagery with decisive crops;
- restrained interface elements;
- cinematic, purposeful motion rather than playful effects.

The user will provide content in text. Build a complete page using that content, with a finished desktop version and an intentionally adapted mobile version.

## Required workflow

1. Read all supplied content before designing.
2. Identify the page purpose, audience, primary action, information hierarchy, event format, and required sections.
3. Preserve the user's wording unless light editing is necessary for clarity, hierarchy, or interface length.
4. Define one dominant concept for the page before building.
5. Create the desktop experience first for a 1440 px viewport.
6. Adapt intentionally for a 390 px mobile viewport. Do not simply shrink the desktop layout.
7. Build reusable components, responsive constraints, meaningful interactions, and accessible contrast.
8. Review desktop and mobile before finishing.

## Required output

Always deliver:

- one complete desktop page designed for a 1440 px viewport;
- one complete mobile page designed for a 390 px viewport;
- responsive behavior between breakpoints;
- a consistent header and navigation system;
- a strong hero section;
- content sections with clear editorial hierarchy;
- cards only when they improve scanning or comparison;
- purposeful image treatment;
- restrained motion and interaction states;
- a complete footer;
- no placeholder copy when the user supplied real content.

## Content handling

- Keep executive language direct, confident, and concise.
- Prefer short headlines and strong section labels.
- Break long paragraphs into visual rhythms using pull quotes, large statements, metrics, timelines, or chapter transitions.
- Avoid generic AI-written constructions such as “It is not X, it is Y” unless present in the source content.
- Do not invent business claims, numbers, speakers, dates, logos, testimonials, or client names.
- Use visible placeholders only for genuinely missing operational information, such as `[DATE]`, `[LOCATION]`, or `[REGISTER URL]`.

## Color system

Use these practical tokens unless an official design system is supplied:

```css
--color-black: #000000;
--color-white: #ffffff;
--color-purple: #a100ff;
--color-purple-dark: #7500c0;
--color-purple-light: #dcafff;
--color-gray-900: #1f1f1f;
--color-gray-700: #4b4b4b;
--color-gray-300: #d9d9d9;
--color-gray-100: #f5f5f5;
```

Rules:

- Use black and white for most page surfaces.
- Use vivid purple for emphasis, selected states, dividers, arrows, highlights, active navigation, and occasional full-bleed moments.
- Do not use purple for every button, card, heading, and background simultaneously.
- Avoid unrelated bright colors unless required by event content or partner branding.

## Typography

Use a clean grotesk sans-serif with strong weight contrast.

Preferred stack:

```css
font-family: Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

If Graphik is unavailable, use Inter or Arial. Do not attempt to download or redistribute proprietary font files.

Desktop scale:

- Display XL: 88–120 px, line-height 0.92–1.0
- Display: 64–80 px, line-height 0.95–1.05
- H1: 52–64 px
- H2: 40–52 px
- H3: 28–36 px
- Body large: 20–24 px
- Body: 16–18 px
- Label: 12–14 px, uppercase or semibold

Mobile scale:

- Display: 48–64 px
- H1: 40–48 px
- H2: 30–38 px
- H3: 24–28 px
- Body large: 18–20 px
- Body: 16–18 px

Typography rules:

- Use large headlines with deliberate line breaks.
- Keep body copy widths around 45–70 characters.
- Use weight, scale, and spacing before adding more colors.
- Use uppercase sparingly for labels, navigation, metadata, and section markers.
- Avoid centered paragraphs longer than three lines.

## Grid and spacing

Desktop:

- reference viewport: 1440 px;
- 12-column grid;
- outer margin: 64–96 px;
- gutters: 20–32 px;
- major section spacing: 120–200 px;
- content max width: approximately 1280 px.

Mobile:

- reference viewport: 390 px;
- 4-column grid;
- outer margin: 20–24 px;
- gutters: 12–16 px;
- major section spacing: 72–112 px.

Use an 8 px spacing base. Favor generous whitespace and occasional intentional overlap.

## Navigation

- Keep the primary header simple and high contrast.
- Use a supplied logo or wordmark area, concise primary navigation, and one clear action.
- For event pages, a compact sticky header may include Overview, Experience, Agenda, Speakers, and Attend.
- On mobile, use a full-screen or large-panel menu instead of squeezing desktop links.
- Prefer directional arrows, underlines, or color-shift states over pill-shaped navigation.

## Cards

Use cards for research, agenda moments, speakers, stories, or experience modules.

Preferred card behavior:

- square or minimally rounded edges;
- image-led or typography-led composition;
- strong internal spacing;
- simple borders or contrasting surfaces;
- clear hierarchy between label, title, summary, and action;
- hover behavior using crop, scale, arrow movement, underline, or color inversion.

Avoid:

- identical rounded white cards on pale gray backgrounds;
- excessive shadows;
- icon-in-circle patterns on every card;
- more than three levels of nested containers.

## Provisional images

When final images are not supplied, insert provisional images so the page is visually complete and easy to evaluate.

- Choose images that match the intended subject, mood, composition, orientation, and visual role of each section.
- Treat every provisional image as replaceable content, not as a final approved asset.
- Place images inside reusable frames or components with fixed aspect ratios and responsive crop behavior.
- Name layers clearly, for example:
  - `IMAGE — REPLACE — Hero`
  - `IMAGE — REPLACE — Speaker 01`
  - `IMAGE — REPLACE — Experience`
- Keep the note `PROVISIONAL / REPLACE` in the layer name or component property. Do not place placeholder labels visibly over the image in the published interface.
- Preserve the expected crop, focal point, overlay, contrast, and responsive behavior so replacing the image does not require redesigning the section.
- Add descriptive alt-text placeholders explaining what the final image should communicate.
- Never present provisional imagery as an approved Accenture, client, speaker, venue, or event photograph.
- Do not invent client logos, executive portraits, event photos, product screenshots, or proprietary visuals.
- Use neutral conceptual, architectural, technological, human, or editorial imagery instead.
- Avoid generic handshakes, posed office teams, decorative stock mosaics, or obvious stock-photo clichés.

## Image treatment

- Prefer large, high-resolution, documentary, human, architectural, technological, or conceptual imagery.
- Use decisive crops and allow imagery to touch viewport edges.
- Mix full-bleed images with isolated editorial crops.
- Use black-and-white imagery with purple accents when it strengthens the concept.
- Use subtle overlays only to secure text contrast.
- Select provisional imagery for composition and narrative fit, not merely keyword similarity.

## Motion and interaction

Use motion to reveal hierarchy, indicate direction, or support storytelling.

- Prefer fades, masks, controlled parallax, image crops, text reveals, and section transitions.
- Reveal text by line, mask, or controlled vertical movement.
- Use image scale between 1.0 and 1.05 for hover or scroll emphasis.
- Use horizontal movement for arrows and directional cues.
- Keep animation durations generally between 200 ms and 700 ms.
- Use smooth, confident easing.
- Respect reduced-motion preferences.
- Avoid constant looping animation, excessive cursor effects, bouncing, elastic motion, confetti, or effects that delay access to content.
- Define hover, focus, pressed, active, and disabled states for interactive elements.

## Responsive behavior

- Desktop: use a 12-column grid, generous margins, and a large type scale.
- Tablet: reduce column spans while preserving hierarchy.
- Mobile: use a 4-column grid, stacked content, simplified navigation, shorter line lengths, and touch targets of at least 44 px.
- Reorder content on mobile when needed to preserve the intended narrative.
- Avoid horizontal overflow except for intentionally scrollable components.
- Ensure large headlines wrap deliberately and remain readable.
- Convert horizontal timelines into stacked timeline items.
- Reduce decorative motion and overlaps on mobile.
- Keep the primary action visible early.
- Move practical event information above long storytelling sections when attendance decisions depend on it.

## Event experience behavior

For event pages or interactive event experiences, create a clear progression:

1. Invitation or entry point
2. Context and executive premise
3. Why the topic matters now
4. Experience journey or chapters
5. Agenda or key moments
6. Speakers, hosts, or participants
7. Experience highlights, themes, or capabilities
8. Venue and practical details
9. Registration or attendance call to action
10. Footer

Translate the event journey into chapters or moments rather than a dense agenda table when appropriate.

Use transitions, scroll reveals, horizontal storytelling, image-led chapters, counters, or expandable content only when they reinforce the narrative.

Preserve practical information in a quickly scannable block. Make registration or attendance confirmation prominent without turning the page into a generic promotional template.

## Recommended page patterns

### Executive event landing page

1. Sticky navigation
2. Full-viewport hero with event title, date, location, and primary action
3. Executive premise or opening statement
4. Why this matters now
5. Experience journey presented as chapters
6. Agenda or moments
7. Speakers, hosts, or participants
8. Featured themes or capabilities
9. Venue and practical details
10. Final attendance call to action
11. Footer

### Immersive event experience

1. Minimal entry screen
2. Narrative opening with a large statement
3. Scroll-led chapters or moments
4. Interactive exploration, cards, or expandable themes
5. Agenda mapped to physical or digital environments
6. Participant prompts, questions, or decision points
7. Takeaways or next actions
8. Logistics and closing

### Campaign or content landing page

1. Header
2. Hero with a single proposition
3. Key evidence or large metrics
4. Editorial content chapters
5. Featured stories or cards
6. Quote or statement break
7. Related content
8. Call to action
9. Footer

## Component guidance

### Hero

Use one dominant statement. Support it with a short description, metadata, and one primary action. Avoid placing multiple competing cards in the first viewport.

### Editorial statement

Use oversized text across 6–10 desktop columns. Highlight one phrase with purple, weight, underline, or a directional form.

### Agenda

Choose the format that best fits the content:

- vertical timeline;
- chapter cards;
- accordion by time;
- horizontal journey on desktop that becomes vertical on mobile.

Always keep time, title, description, and location or environment distinct.

### Speakers

Use large portraits or strong typographic profiles. Include name, role, company, and a concise relevance statement when supplied. Do not invent biographies.

### Metrics

Use large numbers, short labels, and minimal decoration. Keep units and qualifiers visible.

### CTA

Use direct labels such as Register, Confirm attendance, Explore the experience, View agenda, or Contact the team. Avoid vague labels such as Learn more when a more specific action exists.

## Accessibility

- Maintain WCAG AA contrast for body text and controls.
- Provide visible keyboard focus.
- Do not communicate state with purple alone.
- Provide alt text for meaningful images.
- Maintain readable text over imagery with overlays or repositioning.
- Respect reduced-motion settings.
- Keep mobile touch targets at least 44 px.

## Quality checklist

Before finishing, verify:

- the page has one dominant idea;
- the first screen communicates purpose immediately;
- typography creates clear hierarchy without relying on many font styles;
- purple is used selectively;
- imagery feels premium, human, cinematic, or conceptually relevant;
- provisional images are clearly named and easy to replace;
- cards do not look like a generic component library;
- desktop and mobile are both complete;
- navigation and calls to action are functional;
- contrast, keyboard focus, and touch sizes are accessible;
- there is no lorem ipsum, duplicated content, broken layout, unsupported claim, or invented business information.
