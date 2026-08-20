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

test("standalone intake failures link to contact without logging lead details", async () => {
  const source = await read("components/diagnostic/DiagnosticChat.tsx");
  assert.match(source, /href="\/#contact"/);
  assert.doesNotMatch(source, /debug\.message|debug\.toolCall|debug\.toolResult/);
});

test("hero title uses the reduced approved footprint", async () => {
  const source = await read("components/sections/Hero.tsx");
  assert.match(source, /max-w-\[900px\]/);
  assert.doesNotMatch(source, /max-w-\[980px\]/);
});

test("ventures use the clean editorial modular system", async () => {
  const source = await read("components/sections/Projects.tsx");
  assert.match(source, /Research,\s*made useful\./);
  assert.match(
    source,
    /lg:grid-cols-\[minmax\(0,0\.72fr\)_minmax\(0,1\.55fr\)\]/,
  );
  assert.match(source, /venture\.id === "medai"/);
  assert.doesNotMatch(source, /GlassSurface|ScrollUnderline/);
  assert.doesNotMatch(source, /bg-gradient|radial-gradient|blur-\[/);
  assert.doesNotMatch(source, /rounded-\[28px\]|rounded-full/);
  assert.doesNotMatch(
    source,
    /(?:text|border)-white\/(?:68|52|38|78|58|12)/,
    "venture hierarchy must use opacity utilities emitted by Tailwind",
  );
});
