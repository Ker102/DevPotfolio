# Kaelux Site Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the engagement route and hero copy, restore the Groq intake agent, and let the agent automatically email complete conversational leads through the existing Resend contact pipeline.

**Architecture:** Keep homepage content changes data-driven. Extract contact delivery into a server-only service shared by `/api/contact` and a narrowly scoped AI SDK `submitLead` tool; validate conversational lead data with Zod, use Resend idempotency keys plus in-request state to prevent duplicates, and expose delivery state through existing AI SDK message parts. Keep the homepage and full diagnostic chat clients lightweight, adding only clear disclosure and tool-status rendering.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Vercel AI SDK 6, `@ai-sdk/groq`, Zod 4, Resend, Node test runner through `tsx`, Tailwind CSS.

---

## File map

- Create `lib/server/contact-email.ts`: validate canonical contact payloads, format safe email content, and deliver through an injected or default Resend sender.
- Create `lib/intake-lead.ts`: conversational lead schema, contact-payload mapping, message-history duplicate detection, and typed delivery result.
- Create `tests/contact-email.test.ts`: email formatting, escaping, missing configuration, and idempotency coverage.
- Create `tests/intake-lead.test.ts`: required lead fields, payload mapping, and successful-message-history detection.
- Create `tests/site-fixes.test.ts`: regression checks for route, model, hero copy, removed rotation sentence, and disclosure.
- Modify `app/api/contact/route.ts`: delegate to the shared email service without changing the public request/response contract.
- Modify `app/api/chat/route.ts`: switch Groq model, update prompt, expose `submitLead`, enable the post-tool response step, and reject repeat submissions.
- Modify `components/sections/DiagnoserCTA.tsx`: show lead-tool status and persistent contact-data disclosure.
- Modify `components/diagnostic/DiagnosticChat.tsx`: show the same disclosure and readable tool results on the full chat route.
- Modify `data/engagements.ts`: route venture/product partners to `/#contact`.
- Modify `components/sections/Hero.tsx`: remove one rotation phrase and synchronize semantic headline copy.
- Create `public/hero-title-candidate.png`: generated metallic headline candidate for visual review.
- Modify `public/hero-title.png`: replace only if the candidate has exact text and passes visual review.
- Modify `package.json`: add the focused test command.
- Modify `docs/KAELUX_INTAKE_AGENT.md`: document conversational lead capture, disclosure, automatic delivery, and the current Groq model.

### Task 1: Add the regression harness and make the simple site fixes

**Files:**
- Create: `tests/site-fixes.test.ts`
- Modify: `package.json`
- Modify: `data/engagements.ts`
- Modify: `components/sections/Hero.tsx`

- [ ] **Step 1: Install the locked dependencies**

Run: `npm ci`

Expected: dependencies install from `package-lock.json` without changing the lockfile.

- [ ] **Step 2: Add a focused test command**

Add this script to `package.json`:

```json
"test:focused": "tsx --test tests/*.test.ts"
```

- [ ] **Step 3: Write the failing content regression tests**

Create `tests/site-fixes.test.ts`:

```ts
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path: string) => readFile(path, "utf8");

test("venture partner CTA routes to contact", async () => {
  const source = await read("data/engagements.ts");
  const block = source.match(/id: "venture-partners"[\s\S]*?\n    },/)?.[0] ?? "";
  assert.match(block, /href: "\/#contact"/);
});

test("hero uses the approved semantic copy and omits the venture inventory phrase", async () => {
  const source = await read("components/sections/Hero.tsx");
  assert.doesNotMatch(
    source,
    /MedAI, ViperMesh, Harneloop, PromptTriage, and Nullstate sit under the Kaelux group\./,
  );
  assert.match(source, /Where Research Becomes Ventures\./);
  assert.match(source, /alt="Where Research Becomes Ventures\."/);
});
```

- [ ] **Step 4: Run the tests and verify they fail**

Run: `npx tsx --test tests/site-fixes.test.ts`

Expected: failures for the old `/#ventures` link and missing approved hero text.

- [ ] **Step 5: Implement the minimal content changes**

In `data/engagements.ts`, change only the venture-partner `href`:

```ts
href: "/#contact",
```

In `components/sections/Hero.tsx`, make the rotation list:

```ts
const mobileTexts = [
  "An Estonia-based AI and ML research lab building open-source tools, products, and ventures.",
  "Research-led engineering for collaborators, partners, investors, and secure business automation.",
];
```

Change the semantic headline and image alt text:

```tsx
<h1 className="sr-only">Where Research Becomes Ventures.</h1>
```

```tsx
alt="Where Research Becomes Ventures."
```

- [ ] **Step 6: Run the focused test and commit**

Run: `npx tsx --test tests/site-fixes.test.ts`

Expected: 2 passing tests.

```bash
git add package.json tests/site-fixes.test.ts data/engagements.ts components/sections/Hero.tsx
git commit -m "fix: update Kaelux engagement and hero copy"
```

### Task 2: Extract and test the shared contact email service

**Files:**
- Create: `lib/server/contact-email.ts`
- Create: `tests/contact-email.test.ts`
- Modify: `app/api/contact/route.ts`

- [ ] **Step 1: Write failing contact delivery tests**

Create `tests/contact-email.test.ts` with an injected sender:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import {
  contactPayloadSchema,
  deliverContactEmail,
  type ContactEmailSender,
} from "../lib/server/contact-email";

test("contact schema rejects an invalid email", () => {
  assert.throws(() => contactPayloadSchema.parse({
    source: "Test",
    name: "Ada Lovelace",
    email: "invalid",
  }));
});

test("delivery escapes HTML and forwards the idempotency key", async () => {
  const calls: Array<{ message: Record<string, unknown>; key?: string }> = [];
  const sender: ContactEmailSender = async (message, options) => {
    calls.push({ message, key: options?.idempotencyKey });
    return { data: { id: "email_1" }, error: null };
  };

  const result = await deliverContactEmail(
    {
      source: "Kaelux Leads",
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines",
      plan: "Venture partnership",
      details: "Build <securely> & quickly",
    },
    { sender, idempotencyKey: "kaelux-intake/call_1" },
  );

  assert.deepEqual(result, { ok: true, emailId: "email_1" });
  assert.equal(calls[0].key, "kaelux-intake/call_1");
  assert.match(String(calls[0].message.html), /&lt;securely&gt; &amp; quickly/);
  assert.equal(calls[0].message.replyTo, "ada@example.com");
});

test("delivery returns a recoverable failure", async () => {
  const sender: ContactEmailSender = async () => ({
    data: null,
    error: { message: "provider unavailable" },
  });
  const result = await deliverContactEmail(
    { source: "Test", name: "Ada Lovelace", email: "ada@example.com" },
    { sender },
  );
  assert.deepEqual(result, { ok: false, error: "Failed to send message." });
});

test("delivery reports missing server configuration without constructing a sender", async () => {
  const previousKey = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  try {
    const result = await deliverContactEmail({
      source: "Test",
      name: "Ada Lovelace",
      email: "ada@example.com",
    });
    assert.deepEqual(result, {
      ok: false,
      error: "Contact email is not configured on the server.",
    });
  } finally {
    if (previousKey) process.env.RESEND_API_KEY = previousKey;
  }
});
```

- [ ] **Step 2: Run the tests and verify the module is missing**

Run: `npx tsx --test tests/contact-email.test.ts`

Expected: FAIL because `lib/server/contact-email.ts` does not exist.

- [ ] **Step 3: Implement the shared service**

Create `lib/server/contact-email.ts` with:

```ts
import { Resend } from "resend";
import { z } from "zod";

export const contactPayloadSchema = z.object({
  source: z.string().trim().min(1).max(80),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  plan: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(6000).optional().or(z.literal("")),
  details: z.string().trim().max(6000).optional().or(z.literal("")),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;
type SendResult = { data: { id: string } | null; error: { message?: string } | null };
export type ContactEmailSender = (
  message: Record<string, unknown>,
  options?: { idempotencyKey?: string },
) => Promise<SendResult>;
type ResendMessage = Parameters<Resend["emails"]["send"]>[0];

const escapeHtml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

export async function deliverContactEmail(
  rawPayload: ContactPayload,
  options: { sender?: ContactEmailSender; idempotencyKey?: string } = {},
) {
  const payload = contactPayloadSchema.parse(rawPayload);
  const to = process.env.CONTACT_TO_EMAIL ?? "business@kaelux.dev";
  const from = process.env.CONTACT_FROM_EMAIL ?? `Kaelux <${to}>`;
  const body = payload.message || payload.details || "No additional details provided.";
  if (!options.sender && !process.env.RESEND_API_KEY) {
    return { ok: false as const, error: "Contact email is not configured on the server." };
  }
  const sender: ContactEmailSender = options.sender ?? ((message, sendOptions) =>
    new Resend(process.env.RESEND_API_KEY).emails.send(
      message as ResendMessage,
      sendOptions,
    ));
  const { data, error } = await sender({
    to,
    from,
    replyTo: payload.email,
    subject: `[Kaelux] ${payload.source} inquiry from ${payload.name}`,
    text: [
      `Source: ${payload.source}`,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company || "Not provided"}`,
      `Plan: ${payload.plan || "Not provided"}`,
      "",
      "Inquiry details:",
      body,
    ].join("\n"),
    html: `<h2>New Kaelux inquiry</h2>
      <p><strong>Source:</strong> ${escapeHtml(payload.source)}</p>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company || "Not provided")}</p>
      <p><strong>Plan:</strong> ${escapeHtml(payload.plan || "Not provided")}</p>
      <hr /><p><strong>Inquiry details</strong></p>
      <p>${escapeHtml(body).replace(/\n/g, "<br />")}</p>`,
    tags: [{
      name: "source",
      value: payload.source.toLowerCase().replace(/[^a-z0-9_-]/g, "-").slice(0, 256) || "website",
    }],
  }, options.idempotencyKey ? { idempotencyKey: options.idempotencyKey } : undefined);

  if (error) return { ok: false as const, error: "Failed to send message." };
  return { ok: true as const, emailId: data?.id ?? "sent" };
}
```

- [ ] **Step 4: Delegate the existing API route to the service**

Replace route-local schema, Resend setup, escaping, and formatting in `app/api/contact/route.ts` with:

```ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { contactPayloadSchema, deliverContactEmail } from "@/lib/server/contact-email";

export async function POST(request: Request) {
  try {
    const payload = contactPayloadSchema.parse(await request.json());
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Contact email is not configured on the server." }, { status: 500 });
    }
    const result = await deliverContactEmail(payload);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form submission.", issues: error.issues },
        { status: 400 },
      );
    }
    console.error("Contact route error", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
```

- [ ] **Step 5: Run tests and commit**

Run: `npx tsx --test tests/contact-email.test.ts`

Expected: 4 passing tests.

```bash
git add lib/server/contact-email.ts tests/contact-email.test.ts app/api/contact/route.ts
git commit -m "refactor: share contact email delivery"
```

### Task 3: Define and test conversational lead validation

**Files:**
- Create: `lib/intake-lead.ts`
- Create: `tests/intake-lead.test.ts`

- [ ] **Step 1: Write the failing lead tests**

Create `tests/intake-lead.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import {
  getLeadSubmissionStatus,
  hasSuccessfulLeadSubmission,
  intakeLeadSchema,
  toContactPayload,
} from "../lib/intake-lead";

test("lead schema requires useful context", () => {
  assert.throws(() => intakeLeadSchema.parse({
    name: "Ada Lovelace",
    email: "ada@example.com",
    inquiryType: "Venture partnership",
    summary: "Too short",
  }));
});

test("lead maps to the canonical contact payload", () => {
  const payload = toContactPayload({
    name: "Ada Lovelace",
    email: "ada@example.com",
    company: "Analytical Engines",
    inquiryType: "Venture partnership",
    summary: "Interested in distribution and an early product pilot for ViperMesh.",
    timing: "This quarter",
  });
  assert.equal(payload.source, "Kaelux Leads Agent");
  assert.equal(payload.plan, "Venture partnership");
  assert.match(payload.details ?? "", /This quarter/);
});

test("successful tool history blocks another submission", () => {
  assert.equal(hasSuccessfulLeadSubmission([{ id: "1", role: "assistant", parts: [{
    type: "tool-submitLead",
    toolCallId: "call_1",
    state: "output-available",
    input: {},
    output: { ok: true },
  }] }] as never), true);
  assert.equal(hasSuccessfulLeadSubmission([]), false);
  assert.equal(getLeadSubmissionStatus([]), "idle");
});
```

- [ ] **Step 2: Run the tests and verify failure**

Run: `npx tsx --test tests/intake-lead.test.ts`

Expected: FAIL because `lib/intake-lead.ts` does not exist.

- [ ] **Step 3: Implement the lead module**

Create `lib/intake-lead.ts`:

```ts
import type { UIMessage } from "ai";
import { z } from "zod";
import type { ContactPayload } from "@/lib/server/contact-email";

export const intakeLeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(160).optional(),
  inquiryType: z.string().trim().min(3).max(120),
  summary: z.string().trim().min(24).max(3000),
  timing: z.string().trim().max(240).optional(),
});

export type IntakeLead = z.infer<typeof intakeLeadSchema>;
export type LeadDeliveryResult =
  | { ok: true; message: string }
  | { ok: false; error: string; contactHref: "/#contact" };

export function toContactPayload(rawLead: IntakeLead): ContactPayload {
  const lead = intakeLeadSchema.parse(rawLead);
  return {
    source: "Kaelux Leads Agent",
    name: lead.name,
    email: lead.email,
    company: lead.company ?? "",
    plan: lead.inquiryType,
    details: [
      lead.summary,
      lead.timing ? `Timing: ${lead.timing}` : "",
    ].filter(Boolean).join("\n\n"),
  };
}

export function hasSuccessfulLeadSubmission(messages: UIMessage[]) {
  return messages.some(message => message.parts.some(part => {
    if (part.type !== "tool-submitLead" || part.state !== "output-available") return false;
    const output = part.output as { ok?: unknown };
    return output?.ok === true;
  }));
}

export type LeadSubmissionStatus = "idle" | "sending" | "sent" | "failed";

export function getLeadSubmissionStatus(messages: UIMessage[]): LeadSubmissionStatus {
  for (let messageIndex = messages.length - 1; messageIndex >= 0; messageIndex -= 1) {
    const parts = messages[messageIndex].parts;
    for (let partIndex = parts.length - 1; partIndex >= 0; partIndex -= 1) {
      const part = parts[partIndex];
      if (part.type !== "tool-submitLead") continue;
      if (part.state === "input-streaming" || part.state === "input-available") return "sending";
      if (part.state === "output-error") return "failed";
      if (part.state === "output-available") {
        return (part.output as { ok?: unknown })?.ok === true ? "sent" : "failed";
      }
    }
  }
  return "idle";
}
```

- [ ] **Step 4: Run tests and commit**

Run: `npx tsx --test tests/intake-lead.test.ts`

Expected: 3 passing tests.

```bash
git add lib/intake-lead.ts tests/intake-lead.test.ts
git commit -m "feat: validate conversational leads"
```

### Task 4: Restore the Groq agent and add automatic lead submission

**Files:**
- Modify: `app/api/chat/route.ts`
- Modify: `tests/site-fixes.test.ts`
- Modify: `docs/KAELUX_INTAKE_AGENT.md`

- [ ] **Step 1: Extend the failing route regression test**

Append to `tests/site-fixes.test.ts`:

```ts
test("chat uses current Groq model and exposes validated lead submission", async () => {
  const source = await read("app/api/chat/route.ts");
  assert.match(source, /groq\("qwen\/qwen3\.6-27b"\)/);
  assert.doesNotMatch(source, /llama-3\.3-70b-versatile/);
  assert.match(source, /submitLead:\s*tool\(/);
  assert.match(source, /inputSchema:\s*intakeLeadSchema/);
  assert.match(source, /stepCountIs\(3\)/);
  assert.match(source, /reasoningEffort:\s*"none"/);
  assert.match(source, /parallelToolCalls:\s*false/);
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npx tsx --test tests/site-fixes.test.ts`

Expected: the new chat-route test fails on the old model and absent tool.

- [ ] **Step 3: Update imports and prompt behavior**

In `app/api/chat/route.ts`, import:

```ts
import { streamText, convertToModelMessages, stepCountIs, tool, UIMessage } from "ai";
import { hasSuccessfulLeadSubmission, intakeLeadSchema, toContactPayload } from "@/lib/intake-lead";
import { deliverContactEmail } from "@/lib/server/contact-email";
```

Add this prompt section before `## CONVERSATION STYLE`:

```text
## CONVERSATIONAL CONTACT
- When a visitor wants contact or follow-up, gather one missing detail at a time: name, email, company when relevant, inquiry type, useful context/outcome, and timing when relevant.
- Do not ask for information already supplied.
- Once name, valid email, inquiry type, and a useful summary are available, call submitLead automatically. A separate confirmation question is not required.
- Call submitLead at most once. Never claim delivery succeeded unless the tool returns ok: true.
- After success, say the context was sent and Kaelux can reply by email.
- After failure, explain that delivery did not complete and link to /#contact.
```

- [ ] **Step 4: Add the guarded tool and multi-step response**

Before `streamText`, initialize request-local submission state:

```ts
let leadSubmitted = hasSuccessfulLeadSubmission(messages);
```

Replace the existing `streamText` call with:

```ts
const result = streamText({
  model: groq("qwen/qwen3.6-27b"),
  providerOptions: {
    groq: {
      reasoningEffort: "none",
      reasoningFormat: "hidden",
      parallelToolCalls: false,
    },
  },
  system: systemPrompt,
  messages: await convertToModelMessages(messages),
  tools: {
    submitLead: tool({
      description: "Email a complete, qualified visitor inquiry to Kaelux. Use once only after collecting name, email, inquiry type, and useful context.",
      inputSchema: intakeLeadSchema,
      execute: async (lead, { toolCallId }) => {
        if (leadSubmitted) {
          return { ok: false as const, error: "This conversation was already sent.", contactHref: "/#contact" as const };
        }
        const delivery = await deliverContactEmail(toContactPayload(lead), {
          idempotencyKey: `kaelux-intake/${toolCallId}`,
        });
        if (!delivery.ok) {
          return { ok: false as const, error: delivery.error, contactHref: "/#contact" as const };
        }
        leadSubmitted = true;
        return { ok: true as const, message: "Lead sent to Kaelux successfully." };
      },
    }),
  },
  stopWhen: stepCountIs(3),
});
```

Keep `return result.toUIMessageStreamResponse();` unchanged. Do not enable external browsing, code execution, or provider tools for this intake route.

- [ ] **Step 5: Update the intake documentation**

Add a “Conversational Contact” section to `docs/KAELUX_INTAKE_AGENT.md` documenting the collected fields, automatic submission, persistent disclosure, Resend delivery, idempotency, failure fallback, and `qwen/qwen3.6-27b` model ID.

- [ ] **Step 6: Run focused tests, TypeScript, and commit**

Run:

```bash
npx tsx --test tests/site-fixes.test.ts tests/intake-lead.test.ts tests/contact-email.test.ts
npx tsc --noEmit
```

Expected: all focused tests pass and TypeScript exits 0.

```bash
git add app/api/chat/route.ts tests/site-fixes.test.ts docs/KAELUX_INTAKE_AGENT.md
git commit -m "feat: email qualified leads from intake chat"
```

### Task 5: Surface lead delivery and disclosure in both chat clients

**Files:**
- Modify: `components/sections/DiagnoserCTA.tsx`
- Modify: `components/diagnostic/DiagnosticChat.tsx`
- Modify: `tests/site-fixes.test.ts`

- [ ] **Step 1: Write the failing disclosure regression test**

Append to `tests/site-fixes.test.ts`:

```ts
test("both chat clients disclose conversational contact delivery", async () => {
  for (const path of [
    "components/sections/DiagnoserCTA.tsx",
    "components/diagnostic/DiagnosticChat.tsx",
  ]) {
    const source = await read(path);
    assert.match(source, /Contact details you share may be emailed to Kaelux for follow-up\./);
    assert.match(source, /getLeadSubmissionStatus/);
  }
});
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npx tsx --test tests/site-fixes.test.ts`

Expected: the disclosure test fails for both chat clients.

- [ ] **Step 3: Read the shared lead status in each client**

In each chat component, import the tested helper:

```ts
import { getLeadSubmissionStatus } from "@/lib/intake-lead";
```

Derive and render a compact status below the response area:

```tsx
const leadSubmissionStatus = getLeadSubmissionStatus(messages);

{leadSubmissionStatus === "sending" ? (
  <p className="text-xs text-amber-300">Sending your contact context to Kaelux…</p>
) : null}
{leadSubmissionStatus === "sent" ? (
  <p className="text-xs text-emerald-300">Contact context sent successfully.</p>
) : null}
{leadSubmissionStatus === "failed" ? (
  <p className="text-xs text-rose-300">Delivery failed. Please use the contact form below.</p>
) : null}
```

- [ ] **Step 4: Add the persistent disclosure**

Below each chat input, render:

```tsx
<p className="mt-3 text-center text-[10px] leading-4 text-zinc-600">
  Contact details you share may be emailed to Kaelux for follow-up.
</p>
```

Preserve the existing retry behavior and writable input after quick prompts.

- [ ] **Step 5: Run tests, lint, and commit**

Run:

```bash
npx tsx --test tests/site-fixes.test.ts
npm run lint
npx tsc --noEmit
```

Expected: focused tests pass; lint and TypeScript exit 0.

```bash
git add components/sections/DiagnoserCTA.tsx components/diagnostic/DiagnosticChat.tsx tests/site-fixes.test.ts
git commit -m "feat: disclose and show intake delivery status"
```

### Task 6: Generate and validate the new hero title image

**Files:**
- Create: `public/hero-title-candidate.png`
- Modify conditionally: `public/hero-title.png`

- [ ] **Step 1: Preserve the current asset and generate a candidate**

Use the current `public/hero-title.png` as the style reference. Generate a transparent, wide metallic typographic image containing exactly:

```text
Where Research Becomes Ventures
```

Target the current asset’s approximate 980×142 aspect ratio, silver/chrome dimensional lettering, black edge/shadow treatment, and clean transparent background. Save the result as `public/hero-title-candidate.png`.

- [ ] **Step 2: Inspect the candidate at full size**

Verify all five words are spelled exactly once, no letters are cropped or fused, transparency is clean, and the phrase remains readable when constrained by the current `max-w` classes.

Expected: exact wording with no generated glyph errors. If any text is inaccurate, keep the candidate separate and do not replace the live asset.

- [ ] **Step 3: Replace only after a passing visual check**

If the candidate passes, copy it over `public/hero-title.png` and retain the candidate for comparison until final verification. If it fails, leave `public/hero-title.png` untouched and record the candidate as a manual follow-up artifact.

- [ ] **Step 4: Run the production build and commit the accepted asset state**

Run: `npm run build`

Expected: Next.js production build exits 0.

```bash
git add public/hero-title.png public/hero-title-candidate.png
git commit -m "feat: update Kaelux hero title artwork"
```

If the candidate is rejected, commit only the candidate when it is useful for manual refinement; otherwise leave it uncommitted and report that no acceptable generated asset was produced.

### Task 7: End-to-end verification

**Files:**
- Verify only; modify the smallest relevant file if a failure exposes a defect.

- [ ] **Step 1: Install the locked dependencies**

Run: `npm ci`

Expected: dependencies install from `package-lock.json` without lockfile changes.

- [ ] **Step 2: Run the complete static suite**

Run:

```bash
npm run test:focused
npm run lint
npx tsc --noEmit
npm run build
```

Expected: all tests pass; lint, TypeScript, and build exit 0.

- [ ] **Step 3: Run local browser checks**

Start the app with `npm run dev`. Verify:

- the venture/product partner CTA scrolls to `/#contact`;
- the removed venture-inventory phrase never appears in the hero rotation;
- the semantic hero headline matches “Where Research Becomes Ventures.”;
- both chat surfaces show the contact-data disclosure;
- incomplete lead conversation prompts for one missing field at a time;
- complete lead input calls the submission tool once;
- success and failure states are readable and do not lock the input.

Use a non-delivering stub or test Resend configuration for local tool verification. Do not send a real email during automated verification.

- [ ] **Step 4: Verify real delivery only when credentials are intentionally available**

If the configured environment is explicitly a safe test destination, submit one clearly labeled test lead and verify a single message arrives with correct reply-to, source, inquiry type, summary, and timing. Otherwise, report live delivery as unverified while retaining the passing injected-sender tests.

- [ ] **Step 5: Review the diff and commit any verification-only correction**

Run:

```bash
git diff --check
git status --short
git log -8 --oneline
```

Expected: no whitespace errors; only intended files changed; `.superpowers/` remains untracked and excluded from implementation commits.

If verification exposes a defect, return to the task that owns that exact file, add a failing regression to that task’s test file, apply the smallest fix, rerun that task’s commands, and use that task’s explicit `git add` list for a separate `fix:` commit.
