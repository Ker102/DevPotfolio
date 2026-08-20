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
  const messages = [{
    id: "1",
    role: "assistant",
    parts: [{
      type: "tool-submitLead",
      toolCallId: "call_1",
      state: "output-available",
      input: {},
      output: { ok: true },
    }],
  }] as never;

  assert.equal(hasSuccessfulLeadSubmission(messages), true);
  assert.equal(getLeadSubmissionStatus(messages), "sent");
  assert.equal(hasSuccessfulLeadSubmission([]), false);
  assert.equal(getLeadSubmissionStatus([]), "idle");
});
