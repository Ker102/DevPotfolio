# Implementation Plan: Kaelux Holding Studio

1. Documentation baseline
- Replace the old MedAI-only task definition with the holding-studio reposition objective.
- Track the required commit discipline, preserved hero image, and route constraints.

2. Shared content data
- Add typed venture data for MedAI, ViperMesh, PromptTriage, Nullstate, and lower-priority lab projects.
- Add typed engagement-track data for investors, strategic partners, business-build inquiries, and personal AI agent setup.

3. Homepage and navigation
- Update hero semantic H1, rotating subtitles, CTAs, and scroll targets.
- Replace service-led homepage sections with holding-company sections.
- Remove fake team rendering and navigation references.
- Keep current visuals and transitions wherever possible.

4. Engagements page
- Rewrite `/pricing` as an engagements page.
- Remove old fixed package, LLMOps, platform-service, and OpenClaw Cloud pricing cards.
- Reuse the existing contact flow and route users to the correct inquiry context.

5. Personal AI agent setup
- Reframe `/openclaw` from OpenClaw Cloud hosting to personal AI agent setup.
- Keep route compatibility while making OpenClaw one supported agent option alongside Hermes and NanoClaw-style setups.

6. Soft retirement
- Remove `/solutions` and `/services/*` from navigation and sitemap.
- Add `noindex` metadata to old service routes and replace their body copy with compact bridge pages.

7. SEO, docs, and stale claim cleanup
- Update root/about/pricing/openclaw metadata and JSON-LD.
- Escape JSON-LD `<` characters before rendering.
- Update README to remove stale agency pricing and old service positioning.
- Delete unused generated team images if no references remain.

8. Verification
- Run stale-claim searches for fabricated team members and old positioning.
- Run lint, typecheck, and build.
- Start the dev server and visually verify homepage, pricing, about, MedAI, and openclaw on desktop and mobile.
