# Kaelux Hero Scale and Ventures Section Redesign

Date: 2026-08-20

## Objective

Refine two homepage areas without changing the site architecture or venture content:

1. Reduce the hero title slightly so it overlaps the left liquid decoration less.
2. Replace the rounded, gradient-heavy ventures cards with the approved C+B hybrid: an editorial statement beside sharp modular venture surfaces.

## Design Direction

This is a preservation redesign. The existing black, chrome, and restrained violet Kaelux identity remains intact. The section becomes cleaner and more professional through flat graphite surfaces, fine borders, sharper geometry, and stronger typographic hierarchy.

Design dials:

- Design variance: 7
- Motion intensity: 5
- Visual density: 4

The redesign does not introduce a new design system or dependencies. It continues using the existing Next.js, Tailwind, and Framer Motion stack.

## Hero Title Adjustment

The approved `Where Research Becomes Ventures` artwork remains unchanged.

- Reduce its desktop maximum width from 980px to 900px.
- Reduce the responsive width proportionally at tablet sizes.
- Preserve the centered alignment, transparent-canvas crop window, intrinsic dimensions, accessibility text, and current entrance animation.
- Keep the mobile title large enough to remain readable without cropping either end.
- Do not reposition or resize the decorative liquid assets.

Success means the left edge of the title has more breathing room from the left liquid form while the title remains the hero's primary visual element.

## Ventures Section Structure

### Desktop

Use a two-column editorial composition:

- Left column: section label, concise headline, short positioning paragraph, and a quiet design-principle note near the lower edge.
- Right column: a modular venture grid.
- MedAI spans both right-column tracks as the featured active division.
- ViperMesh, Harneloop, PromptTriage, and Nullstate occupy a two-by-two grid beneath MedAI.

The headline becomes `Research, made useful.` It replaces the current long gradient headline. The supporting copy explains that focused Kaelux research develops into open-source work, products, divisions, and ventures.

### Mobile and Tablet

- Collapse the editorial and venture columns into a single vertical flow below the existing 1024px `lg` breakpoint.
- Make the editorial copy non-sticky on smaller screens.
- Collapse the venture grid to one column on narrow mobile screens.
- Keep MedAI first and preserve the data order from `coreVentures`.
- Ensure every venture module is fully clickable and keyboard accessible.

## Venture Modules

Each venture uses a restrained rectangular surface:

- Near-black solid fill with no gradient.
- One-pixel neutral border.
- Zero or minimal corner radius, no pill-shaped containers.
- Stage label and external-link indicator on the top line.
- Venture name and category as the primary content.
- Description and audience copy remain available, with the featured MedAI module receiving the most room.
- Tags render as plain inline metadata separated by subtle slashes, not glass pills.
- Internal and external link behavior remains unchanged.

Hover motion is limited to a two-pixel lift plus a small surface and border contrast change. It communicates interactivity without restoring glow or glass effects. Reduced-motion behavior remains governed by the existing animation system.

## Content and Data Preservation

Continue reading from `coreVentures` in `data/ventures.ts`. Preserve:

- All five venture names.
- Stage, category, description, audience, tags, link labels, URLs, and external-link behavior.
- The `ventures` section ID and all existing navigation paths.
- Existing semantic article and heading structure.

No data-model or API changes are required.

## Components

The implementation remains localized to `components/sections/Projects.tsx` and the hero size utilities in `components/sections/Hero.tsx`.

- Remove `GlassSurface` and `ScrollUnderline` from the ventures section if no longer used there.
- Retain the existing motion variants where they support entrance sequencing.
- Replace the current `VentureCard` visual implementation with a sharper modular venture component.
- Avoid new packages, decorative assets, gradients, blur fields, and background glows.

## Verification

Implementation verification will include:

- Focused source regression coverage for the hero maximum width and the absence of `GlassSurface`, gradient heading utilities, oversized radius utilities, and background blur fields in `Projects.tsx`.
- ESLint and TypeScript checks.
- Production build.
- Desktop browser review at the current 1280px preview size.
- Responsive inspection of the single-column fallback.
- Link and keyboard-focus verification for all five venture modules.

## Out of Scope

- Changing venture descriptions, links, or ordering.
- Redesigning the hero background, navigation, CTA buttons, or subtitle rotator.
- Redesigning other homepage sections.
- Deploying, merging, or opening a pull request before the visual review is accepted.
