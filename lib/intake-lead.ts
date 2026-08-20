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

type MessageWithParts = {
  parts?: readonly unknown[];
};

type LeadToolPart = {
  type: "tool-submitLead";
  state: "input-streaming" | "input-available" | "output-available" | "output-error";
  output?: { ok?: unknown };
};

function asLeadToolPart(part: unknown): LeadToolPart | undefined {
  if (!part || typeof part !== "object") return undefined;
  const candidate = part as Partial<LeadToolPart>;
  return candidate.type === "tool-submitLead" ? candidate as LeadToolPart : undefined;
}

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

export function hasSuccessfulLeadSubmission(messages: readonly MessageWithParts[]) {
  return messages.some(message => (message.parts ?? []).some(part => {
    const leadPart = asLeadToolPart(part);
    return leadPart?.state === "output-available" && leadPart.output?.ok === true;
  }));
}

export type LeadSubmissionStatus = "idle" | "sending" | "sent" | "failed";

export function getLeadSubmissionStatus(
  messages: readonly MessageWithParts[],
): LeadSubmissionStatus {
  for (let messageIndex = messages.length - 1; messageIndex >= 0; messageIndex -= 1) {
    const parts = messages[messageIndex].parts ?? [];
    for (let partIndex = parts.length - 1; partIndex >= 0; partIndex -= 1) {
      const leadPart = asLeadToolPart(parts[partIndex]);
      if (!leadPart) continue;
      if (leadPart.state === "input-streaming" || leadPart.state === "input-available") {
        return "sending";
      }
      if (leadPart.state === "output-error") return "failed";
      if (leadPart.state === "output-available") {
        return leadPart.output?.ok === true ? "sent" : "failed";
      }
    }
  }
  return "idle";
}
