import { NextResponse } from "next/server";
import { z } from "zod";
import { contactPayloadSchema, deliverContactEmail } from "@/lib/server/contact-email";

export async function POST(request: Request) {
    try {
        const raw = await request.json();
        const payload = contactPayloadSchema.parse(raw);

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                {
                    error: "Contact email is not configured on the server.",
                },
                { status: 500 },
            );
        }

        const result = await deliverContactEmail(payload);

        if (!result.ok) {
            return NextResponse.json(
                { error: result.error },
                { status: 500 },
            );
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
        return NextResponse.json(
            { error: "Failed to send message." },
            { status: 500 },
        );
    }
}
