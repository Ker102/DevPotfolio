# Hero Quality and Contact Section Redesign

## Scope

This update makes two targeted homepage improvements:

1. Serve the approved hero title artwork without lossy Next.js image optimization.
2. Redesign the homepage contact section as a sharp editorial split while preserving its content, form behavior, links, and anchor.

The work does not change routes, form field names, submission behavior, contact destinations, or the wider homepage information architecture.

## Design Read

This is a targeted redesign of a dark technical landing page for investors, collaborators, and technical partners. The visual language is sharp, professional, and editorial, using the existing monochrome Kaelux identity with restrained motion.

- Design variance: 6
- Motion intensity: 5
- Visual density: 4
- Theme: existing dark monochrome theme
- Shape system: sharp rectangular surfaces for this section

## Hero Artwork Quality

### Current problem

The source asset is a 2135 by 736 lossless PNG. The current Next.js `Image` rendering path selects a 1080-pixel WebP variant at quality 75 for a 900-pixel-wide display. This lossy conversion softens the detailed metallic lettering.

### Approved solution

Keep the current placement, dimensions, responsive sizing, accessibility text, and priority loading. Add the Next.js `unoptimized` behavior so the browser receives `/hero-title-ventures.png` directly without WebP conversion or quality reduction.

The source artwork remains the visual asset. No new title image is generated and no visual filters are added to compensate for compression.

## Contact Section Structure

### Desktop layout

Use a two-column editorial composition inside the existing `#contact` section:

- Left column: section heading, concise supporting copy, four contact channels, and the availability status.
- Right column: conversation heading, short contextual copy, and the complete contact form.

The left column should feel anchored and spacious. The form is the primary working surface and receives more horizontal width.

### Contact channels

Retain all four existing channels and destinations:

- Email
- LinkedIn
- GitHub
- Instagram

Present them as compact sharp-edged rows rather than large cards. Each row has a small icon, channel name, destination label, and a restrained directional cue. Use borders and spacing to create hierarchy, with no rounded icon containers or colored hover glows.

Email remains first in the sequence but is not promoted by removing the other channels.

### Form

Preserve the current fields, their order, IDs, names, labels, validation, and submission mapping:

- Name
- Email
- Company / Team
- Topic
- Message

The form sits in one sharp border-defined workspace. Inputs, select, textarea, buttons, success state, and error state use square or nearly square geometry with visible focus treatment and accessible contrast.

The primary submission button remains visually dominant. The Engagements link remains secondary. Neither control uses pill geometry.

### Availability indicator

Retain one green status dot because it communicates real availability. Keep it minimal and place it beside the existing availability sentence in the left column. A subtle pulse is allowed, with a static fallback for reduced-motion users.

### Footer

Keep the copyright footer and separate it with one restrained horizontal border. Do not place it inside another rounded container.

## Visual Treatment

Remove from the contact section:

- Gradient heading text
- Large rounded channel cards
- Rounded icon tiles
- Colored hover glows
- Rounded form container
- Rounded input and textarea geometry
- Pill buttons
- Decorative gradient divider
- Excess nested surfaces

Use instead:

- Near-black surfaces within the existing page theme
- Sharp rectangular borders
- Clear typographic scale
- White and muted-white hierarchy using Tailwind-supported opacity steps
- Generous vertical spacing
- Small changes in border, text, and background tone for hover and focus states

## Motion

Motion should be clean and smooth, with a functional purpose:

- Heading and supporting copy reveal first.
- Contact rows enter with a short stagger.
- The form workspace follows with a restrained fade and vertical translation.
- Contact rows move horizontally by a few pixels on hover.
- Buttons use a small transform for hover and active feedback.
- The status indicator may pulse subtly.

Animate only transform and opacity. Existing Framer Motion patterns may be reused. All non-essential animation must respect reduced-motion preferences.

## Responsive Behavior

Below the desktop breakpoint:

1. Heading and supporting copy appear first.
2. The four contact rows follow in a single column or compact two-column layout when space permits.
3. Availability status follows the channels.
4. The form becomes full width below the editorial content.

Form fields collapse to one column on narrow screens. Inputs and buttons remain comfortably tappable, and button labels must not wrap on standard mobile widths.

## Accessibility and Behavior Preservation

- Preserve the `#contact` anchor.
- Preserve form labels and input associations.
- Preserve required-field semantics and browser validation.
- Preserve keyboard navigation and visible focus indicators.
- Preserve success and error messages.
- Preserve external link safety attributes.
- Keep contrast at WCAG AA or better for controls and body text.
- Do not submit or test the live contact form during visual verification.

## Verification

Implementation verification must cover:

- The hero title uses direct PNG delivery and does not request `/_next/image` for the title asset.
- The title remains visible and correctly sized at desktop and mobile widths.
- The contact section contains no gradient heading, large rounded cards, rounded form workspace, or pill controls.
- All four contact channel links remain present with their original destinations.
- All form field IDs, names, order, and submission behavior remain intact.
- Loading, success, and error states remain readable.
- Reduced-motion behavior is respected.
- Focused tests, lint, TypeScript, and the production build pass.
- Browser inspection confirms the final desktop and mobile compositions without console errors.
