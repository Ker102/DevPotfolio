# Kaelux MedAI Launch

## Objective

Launch `Kaelux MedAI` as a new division on `kaelux.dev` with:
- homepage visibility
- top-level navigation
- a dedicated `/medai` landing page
- a MedAI-specific collaboration form using the existing contact backend
- metadata, structured data, and sitemap coverage

## Constraints

- Reuse the existing `/api/contact` contract.
- Do not create extra MedAI subpages.
- Keep the tone serious, early-stage, and collaboration-oriented.
- Keep MedAI visually inside the Kaelux brand system.
- Preserve existing homepage background work in `app/page.tsx`.

## Success Criteria

- Homepage hero includes MedAI in the subtitle rotation.
- Hero secondary CTA routes to `/medai`.
- Navbar exposes `MedAI` and an always-visible minimal `Contact` CTA.
- Homepage includes a MedAI section after `ServiceIntroduction` and before `PlatformServices`.
- `/medai` contains the required sections and a working collaboration form.
- `/medai` metadata, JSON-LD, and sitemap entry are present.
- Typecheck and eslint pass for touched files.
