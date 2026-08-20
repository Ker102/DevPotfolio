# Hero Quality and Contact Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Serve the approved hero title PNG without lossy optimization and replace the rounded contact section with the approved sharp editorial split while preserving all behavior.

**Architecture:** Keep the existing `Hero` and `Contact` component boundaries. Change only the title image delivery mode in `Hero`, then recompose `Contact` with its existing state, handlers, channel data, topic data, and submission service untouched. Extend the focused source-level regression suite and finish with desktop and mobile browser verification.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 3.4, Framer Motion, Node test runner

---

### Task 1: Add regression coverage

**Files:**
- Modify: `tests/site-fixes.test.ts`
- Test: `tests/site-fixes.test.ts`

- [ ] **Step 1: Write failing tests for lossless title delivery and the contact design contract**

```ts
test("hero title bypasses lossy Next image optimization", async () => {
  const source = await read("components/sections/Hero.tsx");
  const titleImage =
    source.match(/<Image\s+src="\/hero-title-ventures\.png"[\s\S]*?\/>/)?.[0] ?? "";

  assert.match(titleImage, /\bunoptimized\b/);
});

test("contact uses the sharp editorial split while preserving behavior", async () => {
  const source = await read("components/sections/Contact.tsx");

  assert.match(source, /lg:grid-cols-\[minmax\(0,0\.72fr\)_minmax\(0,1\.28fr\)\]/);
  assert.match(source, /contactChannels\.map/);
  assert.match(source, /bg-green-500/);
  assert.match(source, /useReducedMotion/);
  assert.doesNotMatch(source, /bg-gradient|bg-clip-text|blur-xl/);
  assert.doesNotMatch(source, /rounded-(?:2xl|3xl)/);
  assert.equal(
    (source.match(/rounded-full/g) ?? []).length,
    2,
    "only the two availability-dot layers may remain circular",
  );
  for (const id of ["name", "email", "company", "topic", "details"]) {
    assert.match(source, new RegExp(`id="homepage-contact-${id}"`));
  }
  assert.match(source, /submitContactForm/);
});
```

- [ ] **Step 2: Run the focused suite and verify the new tests fail for the intended reasons**

Run: `npm run test:focused`

Expected: existing tests pass; the hero test fails because `unoptimized` is absent, and the contact test fails because the current section is rounded and gradient-heavy.

- [ ] **Step 3: Commit the failing tests**

```bash
git add tests/site-fixes.test.ts
git commit -m "test: define hero quality and contact redesign"
```

### Task 2: Serve the hero title PNG directly

**Files:**
- Modify: `components/sections/Hero.tsx:427-440`
- Test: `tests/site-fixes.test.ts`

- [ ] **Step 1: Add direct image delivery to the existing title image**

Keep the existing source, intrinsic dimensions, sizes, responsive classes, priority behavior, and accessibility text. Add `unoptimized`:

```tsx
<Image
  src="/hero-title-ventures.png"
  alt="Where Research Becomes Ventures."
  width={2135}
  height={736}
  priority
  unoptimized
  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 82vw, 900px"
  className="absolute left-1/2 top-1/2 h-auto w-[92vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] sm:w-[88vw] md:w-[82vw]"
  style={{ filter: "brightness(1.05) contrast(1.02)" }}
/>
```

- [ ] **Step 2: Run the focused suite**

Run: `npm run test:focused`

Expected: the hero test passes while the contact design test remains red.

- [ ] **Step 3: Commit the hero fix**

```bash
git add components/sections/Hero.tsx
git commit -m "fix: serve hero title artwork losslessly"
```

### Task 3: Recompose the contact section

**Files:**
- Modify: `components/sections/Contact.tsx`
- Test: `tests/site-fixes.test.ts`

- [ ] **Step 1: Add reduced-motion awareness and shared control styling**

```tsx
import { motion, useReducedMotion } from "framer-motion";

const reduceMotion = useReducedMotion();
const fieldClassName =
  "w-full border border-white/15 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 hover:border-white/25 focus:border-white/50 focus:ring-1 focus:ring-white/20";
const revealTransition = reduceMotion
  ? { duration: 0 }
  : { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const };
```

Do not alter `formData`, `handleChange`, `handleSubmit`, `contactChannels`, `contactTopics`, or the `submitContactForm` payload.

- [ ] **Step 2: Build the editorial left column**

Use `grid gap-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]`. The left column contains:

```tsx
<h2 className="max-w-lg text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white md:text-7xl">
  Get in touch.
</h2>
<p className="mt-7 max-w-md text-base leading-7 text-white/60 md:text-lg md:leading-8">
  For investors, partners, collaborators, or businesses inspired by a Kaelux venture, send the context. Founder-led conversations start here.
</p>
```

Render all four `contactChannels` as compact bordered rows. Each row uses a three-column grid for icon, label, and `FaArrowRight`, a bottom border, a visible focus ring, and `whileHover={reduceMotion ? undefined : { x: 4 }}`. Remove icon bubbles, blur effects, large cards, and color glows.

Retain one availability indicator:

```tsx
<span className="relative flex h-2.5 w-2.5" aria-hidden="true">
  {!reduceMotion ? (
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
  ) : null}
  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
</span>
```

- [ ] **Step 3: Build the sharp form workspace**

Use one border-defined right column:

```tsx
<motion.div
  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={revealTransition}
  className="border border-white/15 bg-[#0d0d0f] p-6 md:p-8 lg:p-10"
>
  <div className="border-b border-white/15 pb-8">
    <HiOutlineBolt className="h-5 w-5 text-white/55" aria-hidden="true" />
    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
      Start a conversation.
    </h3>
  </div>
  {/* Existing submitted state or existing form fields */}
</motion.div>
```

Apply `fieldClassName` to every input, select, and textarea. Keep every field ID, name, label, required state, value, handler, option, success message, and error message unchanged. Use a square white primary button and a square bordered Engagements link. Remove gradient, glass, rounded container, rounded field, and pill classes.

- [ ] **Step 4: Keep the footer outside the grid**

```tsx
<motion.footer
  initial={reduceMotion ? false : { opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={reduceMotion ? { duration: 0 } : { delay: 0.2, duration: 0.45 }}
  className="mt-24 border-t border-white/15 pt-8 text-center"
>
  <p className="text-sm text-white/40">
    © {new Date().getFullYear()} Kaelux. All rights reserved.
  </p>
</motion.footer>
```

- [ ] **Step 5: Run tests and TypeScript**

```bash
npm run test:focused
npx tsc --noEmit
```

Expected: all focused tests pass and TypeScript exits 0.

- [ ] **Step 6: Commit the contact redesign**

```bash
git add components/sections/Contact.tsx tests/site-fixes.test.ts
git commit -m "feat: redesign homepage contact section"
```

### Task 4: Verify production and browser behavior

**Files:**
- Verify: `components/sections/Hero.tsx`
- Verify: `components/sections/Contact.tsx`
- Verify: `tests/site-fixes.test.ts`

- [ ] **Step 1: Run the static verification gate**

```bash
npm run test:focused
npm run lint
npx tsc --noEmit
npm run build
```

Expected: every command exits 0. The existing multiple-lockfile warning is acceptable and unrelated.

- [ ] **Step 2: Verify direct hero delivery in the browser**

At `http://localhost:3100/`, confirm the title image `currentSrc` ends with `/hero-title-ventures.png`, remains visible, and retains the approved 900px desktop maximum.

- [ ] **Step 3: Verify desktop and mobile contact layouts**

Confirm the editorial split on desktop, one-column reading order on mobile, all four channel links, preserved fields, sharp geometry, smooth motion, reduced-motion fallback, one green status dot, and no console errors. Do not submit the form.

- [ ] **Step 4: Run the TasteSkill pre-flight and inspect repository state**

Check for supported Tailwind opacity steps, no em-dashes in modified visible copy, one dark theme, consistent sharp geometry, readable controls, non-wrapping CTAs, visible focus states, responsive collapse, and motivated motion.

```bash
git diff --check
git status --short
git log -5 --oneline
```

Expected: tracked changes are committed. The pre-existing unused `public/hero-title-candidate.png` may remain untracked and must not be added.
