# Kaelux Research Lab and Harneloop Implementation Plan

> **For Agent:** Use executing-plans skill to implement this plan task-by-task.

**Goal:** Reframe Kaelux as an Estonia-based AI/ML research and product lab, repair the homepage intake terminal, and publish Harneloop alongside an accurate ViperMesh research story.

**Architecture:** Keep venture and project facts in `data/ventures.ts`, render them through the existing homepage cards, and keep the intake agent aligned through its system prompt, local knowledge document, and ingestion source list. Publish the Harneloop engineering article through the existing wiki article system and expose it through navigation, sitemap, and structured metadata.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Vercel AI SDK, Framer Motion, Redis knowledge ingestion.

---

### Task 1: Reframe Kaelux and its public builds

**Files:**
- Modify: `components/sections/ServiceIntroduction.tsx`
- Modify: `components/sections/Projects.tsx`
- Modify: `data/ventures.ts`
- Modify: `app/layout.tsx`
- Modify: `README.md`

**Steps:**
1. Replace the venture-studio discipline copy with research-lab language and a security-first Baltic automation offer.
2. Expand ViperMesh into a unified 3D workspace grounded in spatial-reasoning research.
3. Add Harneloop as a public open-source build and connect it to the ViperMesh harness case study.
4. Update root metadata and README facts.
5. Run `npm run lint` and `npx tsc --noEmit --pretty false`.
6. Commit as `copy: position kaelux as an ai research lab`.

### Task 2: Repair and update the intake agent

**Files:**
- Modify: `components/sections/DiagnoserCTA.tsx`
- Modify: `components/diagnostic/DiagnosticChat.tsx`
- Modify: `app/api/chat/route.ts`
- Modify: `docs/KAELUX_INTAKE_AGENT.md`
- Modify: `scripts/ingest.py`

**Steps:**
1. Reproduce the quick-prompt failure and capture the visible state.
2. Keep the text input available after a prompt request and surface request failures with a retryable state.
3. Add current Kaelux, Harneloop, ViperMesh, and secure-automation facts to the canonical agent context.
4. Replace the stale personal-agent ingestion label with Business Automations and add the Harneloop article source.
5. Run lint and typecheck, then verify click, response/error, and subsequent typing in the browser.
6. Commit as `fix: keep intake terminal interactive after prompts`.

### Task 3: Publish the Harneloop engineering article

**Files:**
- Create: `app/wiki/harness-evolution-vs-fine-tuning/page.tsx`
- Modify: `app/wiki/page.tsx`
- Modify: `components/wiki/WikiNav.tsx`
- Modify: `components/wiki/WikiArticle.tsx`
- Modify: `app/sitemap.ts`
- Modify: `data/ventures.ts`

**Steps:**
1. Write the Kaelux-specific engineering article from the supplied brief without copying the personal article.
2. Include the decision table, harness lifecycle, ViperMesh evidence with limitations, fine-tuning boundary, and Harneloop/contact CTAs.
3. Add canonical metadata, JSON-LD-safe serialization, wiki discovery, sitemap entry, and article link from the Harneloop card.
4. Run lint, typecheck, and build.
5. Visually verify the homepage, terminal, venture cards, and article on desktop and mobile.
6. Commit as `feat: publish harneloop harness engineering article`.

### Task 4: Final consistency and delivery

**Files:**
- Modify: `task.md`
- Modify: `implementation-plan.md`
- Modify: any directly affected copy found by stale-text search

**Steps:**
1. Search for stale ViperMesh, Kaelux positioning, and personal-agent copy.
2. Run `npm run lint`, `npx tsc --noEmit --pretty false`, and `npm run build`.
3. Update progress documents with the completed scope.
4. Commit as `docs: record research lab and harneloop update`.
5. Push the feature branch without merging it.
