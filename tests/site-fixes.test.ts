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
