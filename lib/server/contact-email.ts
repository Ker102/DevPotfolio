import { Resend, type CreateEmailOptions } from "resend";
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
export type ContactEmailMessage = CreateEmailOptions;

type ContactEmailResult = {
  data: { id: string } | null;
  error: { message?: string } | null;
};

export type ContactEmailSender = (
  message: ContactEmailMessage,
  options?: { idempotencyKey?: string },
) => Promise<ContactEmailResult>;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function deliverContactEmail(
  rawPayload: ContactPayload,
  options: { sender?: ContactEmailSender; idempotencyKey?: string } = {},
) {
  const payload = contactPayloadSchema.parse(rawPayload);
  const to = process.env.CONTACT_TO_EMAIL ?? "business@kaelux.dev";
  const from = process.env.CONTACT_FROM_EMAIL ?? `Kaelux <${to}>`;
  const body = payload.message || payload.details || "No additional details provided.";

  if (!options.sender && !process.env.RESEND_API_KEY) {
    return {
      ok: false as const,
      error: "Contact email is not configured on the server.",
    };
  }

  const sender: ContactEmailSender = options.sender ?? (async (message, sendOptions) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    return resend.emails.send(message, sendOptions);
  });

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
    html: `
      <h2>New Kaelux inquiry</h2>
      <p><strong>Source:</strong> ${escapeHtml(payload.source)}</p>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company || "Not provided")}</p>
      <p><strong>Plan:</strong> ${escapeHtml(payload.plan || "Not provided")}</p>
      <hr />
      <p><strong>Inquiry details</strong></p>
      <p>${escapeHtml(body).replace(/\n/g, "<br />")}</p>
    `,
    tags: [
      {
        name: "source",
        value: payload.source
          .toLowerCase()
          .replace(/[^a-z0-9_-]/g, "-")
          .slice(0, 256) || "website",
      },
    ],
  }, options.idempotencyKey ? { idempotencyKey: options.idempotencyKey } : undefined);

  if (error) {
    return { ok: false as const, error: "Failed to send message." };
  }

  return { ok: true as const, emailId: data?.id ?? "sent" };
}
