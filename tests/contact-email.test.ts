import assert from "node:assert/strict";
import test from "node:test";
import {
  contactPayloadSchema,
  deliverContactEmail,
  type ContactEmailMessage,
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
  const calls: Array<{ message: ContactEmailMessage; key?: string }> = [];
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
  assert.ok("html" in calls[0].message);
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
