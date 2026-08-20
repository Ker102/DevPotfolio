# Ventures Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce the homepage hero-title footprint and replace the rounded gradient ventures cards with the approved split-editorial plus modular-grid design.

**Architecture:** Keep all venture content in `data/ventures.ts` and localize presentation changes to the existing homepage section components. `Projects.tsx` will continue mapping `coreVentures`, with MedAI receiving a featured grid span and the remaining four ventures using equal sharp modules. Existing link semantics and Framer Motion entrance variants remain intact.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Node test runner

---

## File Structure

- Modify `components/sections/Hero.tsx`: reduce the responsive title artwork width while preserving its crop window and animation refs.
- Modify `components/sections/Projects.tsx`: implement the approved split editorial layout and modular venture surfaces.
- Modify `tests/site-fixes.test.ts`: add focused source regressions for the hero width and removal of the old gradient/glass visual system.

### Task 1: Add Visual-System Regression Coverage

**Files:**
- Modify: `tests/site-fixes.test.ts`

- [ ] **Step 1: Write failing hero-scale and ventures-style tests**

Add these assertions:

```ts
test("hero title uses the reduced approved footprint", async () => {
  const source = await read("components/sections/Hero.tsx");
  assert.match(source, /max-w-\[900px\]/);
  assert.doesNotMatch(source, /max-w-\[980px\]/);
});

test("ventures use the clean editorial modular system", async () => {
  const source = await read("components/sections/Projects.tsx");
  assert.match(source, /Research,\s*made useful\./);
  assert.match(source, /lg:grid-cols-\[minmax\(0,0\.72fr\)_minmax\(0,1\.55fr\)\]/);
  assert.match(source, /venture\.id === "medai"/);
  assert.doesNotMatch(source, /GlassSurface|ScrollUnderline/);
  assert.doesNotMatch(source, /bg-gradient|radial-gradient|blur-\[/);
  assert.doesNotMatch(source, /rounded-\[28px\]|rounded-full/);
});
```

- [ ] **Step 2: Run focused tests and verify they fail**

Run:

```powershell
npm run test:focused
```

Expected: the two new tests fail because the hero still uses `max-w-[980px]` and `Projects.tsx` still imports glass/underline components and gradient/rounded styles.

- [ ] **Step 3: Commit the failing tests after implementation is green**

Do not commit red tests separately. Include them with the corresponding implementation commits in Tasks 2 and 3.

### Task 2: Reduce the Hero Title Footprint

**Files:**
- Modify: `components/sections/Hero.tsx`
- Test: `tests/site-fixes.test.ts`

- [ ] **Step 1: Update responsive title widths**

Change the image sizing utilities to:

```tsx
sizes="(max-width: 640px) 92vw, (max-width: 1024px) 82vw, 900px"
className="absolute left-1/2 top-1/2 h-auto w-[92vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] sm:w-[88vw] md:w-[82vw]"
```

Keep the 2135 by 736 intrinsic size, wrapper heights, priority flag, alt text, and motion refs unchanged.

- [ ] **Step 2: Run the hero-focused regression**

Run:

```powershell
npm run test:focused
```

Expected: the hero footprint assertion passes; the ventures redesign assertion remains failing.

- [ ] **Step 3: Commit the hero adjustment**

```powershell
git add components/sections/Hero.tsx
git commit -m "fix: reduce hero title footprint"
```

Keep the still-red ventures assertion uncommitted until Task 3 makes it pass.

### Task 3: Build the Split Editorial Ventures Grid

**Files:**
- Modify: `components/sections/Projects.tsx`
- Test: `tests/site-fixes.test.ts`

- [ ] **Step 1: Remove obsolete visual dependencies**

Delete these imports:

```tsx
import GlassSurface from "@/components/GlassSurface";
import { ScrollUnderline } from "@/components/ui/ScrollUnderline";
```

Keep `motion`, `Link`, `HiExternalLink`, `coreVentures`, `Venture`, `fadeInUp`, and `staggerContainer`.

- [ ] **Step 2: Replace the venture module styling**

Implement `VentureCard` as a flat rectangular article with:

```tsx
const isFeatured = venture.id === "medai";

className={`group relative flex h-full min-h-[15rem] flex-col border border-white/15 bg-[#0d0d0f] p-6 transition-colors duration-200 hover:border-white/30 hover:bg-[#121214] ${
  isFeatured ? "md:col-span-2 lg:min-h-[17rem]" : ""
}`}
```

Use a stage and external-link top row, venture name, category, description, audience, inline slash-separated tags, and the existing link label. Do not add gradients, blur, glass, pills, or corner-radius utilities. Keep the whole internal or external module clickable.

- [ ] **Step 3: Replace the section composition**

Use a flat black section with no decorative glow fields:

```tsx
<section id="ventures" className="relative bg-black px-6 py-28 md:py-36">
  <div className="container mx-auto max-w-7xl">
    <div className="grid gap-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.55fr)] lg:gap-20 xl:gap-28">
      <motion.div className="lg:sticky lg:top-28 lg:flex lg:min-h-[32rem] lg:flex-col lg:justify-between lg:self-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Our ventures</p>
          <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white md:text-7xl">
            Research,<br />made useful.
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-white/58 md:text-lg md:leading-8">
            Kaelux turns focused research into open-source work, products, divisions, and ventures built for real environments.
          </p>
        </div>
        <p className="mt-12 max-w-sm border-t border-white/15 pt-5 text-sm leading-6 text-white/40 lg:mt-20">
          Focused research becomes working software, then earns its path into a product, division, or venture.
        </p>
      </motion.div>

      <motion.div className="grid gap-3 md:grid-cols-2">
        {coreVentures.map((venture, index) => (
          <VentureCard key={venture.id} venture={venture} index={index} />
        ))}
      </motion.div>
    </div>
  </div>
</section>
```

Apply existing `initial`, `whileInView`, `viewport`, and variant props to both motion containers. Keep the mobile flow single-column until `md`, and collapse the whole split layout until `lg`.

- [ ] **Step 4: Run focused tests**

Run:

```powershell
npm run test:focused
```

Expected: all focused tests pass.

- [ ] **Step 5: Commit the ventures redesign**

```powershell
git add components/sections/Projects.tsx tests/site-fixes.test.ts
git commit -m "feat: redesign ventures section"
```

### Task 4: Verify the Approved Design

**Files:**
- Verify: `components/sections/Hero.tsx`
- Verify: `components/sections/Projects.tsx`

- [ ] **Step 1: Run static verification**

Run:

```powershell
npm run test:focused
npm run lint
npx tsc --noEmit
npm run build
```

Expected: all focused tests pass, ESLint exits without errors, TypeScript exits zero, and Next.js generates all routes successfully.

- [ ] **Step 2: Verify desktop layout in the browser**

Open `http://localhost:3100`, inspect the hero and ventures section, and confirm:

- The hero title no longer crowds the left liquid decoration.
- The complete title remains visible.
- The ventures section uses the approved split editorial plus modular layout.
- MedAI spans both venture columns.
- No gradient, glass pills, excessive rounding, or background glow remains.

- [ ] **Step 3: Verify responsive and link behavior**

Confirm that the section collapses to one editorial column plus one venture column below `lg`, and the venture grid becomes one column below `md`. Verify all five module links preserve internal or external behavior and visible keyboard focus.

- [ ] **Step 4: Review the diff and commit any verification-only corrections**

Run:

```powershell
git diff --check
git status --short
```

Expected: no whitespace errors and no uncommitted tracked implementation changes.
