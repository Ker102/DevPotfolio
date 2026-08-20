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
