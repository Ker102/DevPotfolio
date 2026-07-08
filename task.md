# Kaelux Holding-Studio Reposition

## Objective

Reposition `kaelux.dev` from a generic AI services and platform-engineering site into the founder-led parent brand for Kaelux ventures.

The site should communicate:

- Kaelux is a holding/studio company, not a generic portfolio and not a broad AI agency.
- Kristofer Jussmann is the founder behind the venture group.
- The primary public proof is the venture directory: MedAI, ViperMesh, PromptTriage, and Nullstate.
- Businesses can still contact Kaelux for selective partnership builds inspired by those ventures.
- Investors, strategic partners, collaborators, and co-founder-level partners are the main audience.

## Constraints

- Do not edit `public/hero-title.png`; the hero header is an image that will be regenerated separately.
- Preserve the current visual system and section styling where practical.
- Commit after each meaningful change so the work can be reverted in small chunks.
- Remove fabricated team claims and generated team-member assets.
- Soft-retire old `/solutions` and `/services/*` pages without breaking routes.
- Keep `/api/contact` unchanged.

## Success Criteria

- Homepage copy and CTAs frame Kaelux as a venture studio / holding company.
- Homepage sections are ordered around how Kaelux builds, ventures, labs, business automations, founder, and contact.
- Pricing becomes an engagements page instead of package pricing.
- `/openclaw` is reframed as business automations, with the old route kept only for compatibility.
- Old service routes are removed from navigation and sitemap and are marked `noindex`.
- Metadata, JSON-LD, README, and sitemap match the new positioning.
- Animated numeric text renders real values in server/no-JS output instead of `0`.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.
