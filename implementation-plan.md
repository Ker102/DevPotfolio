# Implementation Plan: Kaelux MedAI

1. Homepage and navigation
- Add `MedAI` to the navbar.
- Add a persistent minimal `Contact` pill to the navbar shell.
- Update hero subtitle rotation and secondary CTA.
- Insert a new homepage MedAI intro section after `ServiceIntroduction`.

2. New route
- Create `/medai` page metadata and page body.
- Build the page in section order:
  - hero / intro
  - mission and focus
  - who we help
  - how we collaborate
  - current stage
  - collaboration form

3. Contact flow reuse
- Reuse `submitContactForm`.
- Map fields to the current backend contract without changing the API route.

4. Discoverability
- Add `/medai` to `app/sitemap.ts`.
- Add page-specific JSON-LD for the new division.

5. Validation
- Run `npx tsc --noEmit`.
- Run eslint on touched files.
