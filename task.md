# Kaelux Research Lab and Venture Group

## Objective

Position `kaelux.dev` as the founder-led parent brand and research lab behind Kaelux open-source projects, product experiments, and ventures.

The site should communicate:

- Kaelux experiments in AI and ML engineering, publishes open-source work, and develops selected projects into products or ventures.
- Kristofer Jussmann is the founder behind the venture group.
- The primary public proof is MedAI, ViperMesh, PromptTriage, Nullstate, and Harneloop.
- ViperMesh is a unified workspace for 3D professionals informed by research into AI spatial reasoning.
- Harneloop is the open-source, evidence-gated harness-evolution framework used while developing the ViperMesh Blender harness.
- Kaelux offers security-first business automation design and implementation from Estonia for Baltic and international companies.
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

- Homepage copy and CTAs frame Kaelux as an AI and ML research lab, software builder, and venture group.
- Homepage sections are ordered around how Kaelux builds, ventures, labs, business automations, founder, and contact.
- Pricing becomes an engagements page instead of package pricing.
- `/openclaw` is reframed as business automations, with the old route kept only for compatibility.
- Old service routes are removed from navigation and sitemap and are marked `noindex`.
- Metadata, JSON-LD, README, and sitemap match the new positioning.
- Animated numeric text renders real values in server/no-JS output instead of `0`.
- The homepage intake terminal remains writable after a quick prompt is selected and exposes recoverable request errors.
- Harneloop has a Kaelux engineering article, venture card, sitemap entry, and intake-agent context.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.

## July 23, 2026 Status

- Research-lab positioning is live across the homepage, About page, metadata, manifest, engagements, and canonical agent context.
- ViperMesh is described as a unified 3D professional studio informed by spatial-reasoning research.
- Harneloop is listed as a public build and linked to the new harness-evolution engineering article.
- The homepage terminal remains writable after failed quick prompts and shows a recoverable error state.
- Redis ingestion now replaces stale source chunks when canonical content changes.
- Lint, TypeScript, production build, ingestion-script compilation, desktop checks, and mobile article checks pass.
