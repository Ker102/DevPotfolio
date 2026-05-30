# Kaelux.dev

Kaelux.dev is the public site for Kaelux, the founder-led parent brand for AI ventures and product labs by Kristofer Jussmann.

The site is no longer positioned as a generic AI agency, IaaS/PaaS provider, or broad service menu. Its job is to make the Kaelux group legible to investors, strategic partners, collaborators, and businesses inspired by the ventures.

## Public Positioning

Kaelux is a holding/studio brand over ventures and labs:

| Venture | Positioning |
| --- | --- |
| [MedAI](https://kaelux.dev/medai) | Medical-research AI infrastructure, secure tooling, DevSecOps, and MLOps. |
| [ViperMesh](https://github.com/Ker102/ViperMesh) | AI-powered Blender assistant and neural 3D creation workspace. |
| [PromptTriage](https://github.com/Ker102/PromptTriage) | Prompt analysis, refinement, and generation system. |
| [Nullstate](https://github.com/Ker102/nullstate-cli) | Local-first purple-team CLI for Terraform IaC and infrastructure security workflows. |

Supporting labs include Crosswind Console, Kaelux-Automate, Workflow Atlas, and Kaelocs AI. They provide proof of range without being framed as the main venture story.

## Engagements

The legacy pricing route now acts as an engagements page:

- Investors and strategic partners
- Venture and product partners
- Selective business builds inspired by Kaelux ventures
- Personal AI agent setup

The old fixed package pricing has been removed. Kaelux work is evaluated by fit, seriousness, and leverage.

## Personal AI Agent Setup

The legacy `/openclaw` route is kept for compatibility, but it is now framed as personal AI agent setup. OpenClaw can be one option, alongside Hermes, NanoClaw, or another practical agent stack.

## Active Routes

| Route | Purpose |
| --- | --- |
| `/` | Holding-studio homepage, venture directory, labs, founder, and contact. |
| `/about` | Entity and founder context for search, AI assistants, partners, and investors. |
| `/pricing` | Engagement paths, not package pricing. |
| `/medai` | Kaelux MedAI division page. |
| `/openclaw` | Personal AI agent setup route. |
| `/wiki` | Technical knowledge base. |
| `/diagnoser` | Legacy diagnostic agent route. |
| `/links` | Link-in-bio page. |

`/solutions` and `/services/*` remain reachable as noindex bridge pages so old links do not break.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion and GSAP
- Three.js / React Three Fiber
- Vercel AI SDK and Groq integration for legacy diagnostic flows
- Metadata routes for sitemap and robots
- JSON-LD structured data for Kaelux, Kristofer, and the venture directory

## Development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Notes

- Do not edit `public/hero-title.png` during copy-only repositioning work. The hero title is image-based and should be regenerated separately.
- Keep commits small and meaningful so the reposition can be reverted in controlled chunks.
- Avoid fabricated team, client, revenue, uptime, or traction claims.
