# Kaelux Site Fixes Design

## Objective

Apply focused homepage fixes without changing the existing page structure or visual system:

1. Route venture and product partner inquiries to the contact form.
2. Restore the Kaelux intake agent using a current Groq model.
3. Remove the venture-name inventory sentence from the rotating hero subtitles.
4. Replace the outdated hero headline with “Where Research Becomes Ventures.”
5. Turn the Kaelux intake agent into a low-friction conversational contact channel that emails qualified context to Kaelux automatically.

## Engagement CTA

Update the `venture-partners` engagement track link from `/#ventures` to `/#contact`. The card copy and CTA label remain unchanged. This keeps the data-driven pricing/engagement component intact while sending an actionable partnership inquiry directly to the contact form.

## Intake Agent

Replace the retired Groq model ID `llama-3.3-70b-versatile` with `qwen/qwen3.6-27b`. Use the model for concise, non-thinking dialogue because the intake agent primarily answers short Kaelux questions and routes visitors. Preserve the existing AI SDK streaming transport, system prompt, rate limiting, and optional Redis/Together RAG fallback.

The user-visible error state remains recoverable. Verification must cover a successful API response when a valid `GROQ_API_KEY` is available; otherwise, static checks will verify the configured model ID and request integration without exposing credentials.

## Conversational Lead Capture

Extend the intake agent from question answering into a conversational lead-capture flow. It should continue answering Kaelux questions, but when a visitor expresses contact intent it should gather one missing detail at a time:

- name;
- email address;
- company, when applicable;
- inquiry type;
- relevant context and desired outcome;
- timing, when relevant.

The agent may automatically submit once it has a valid name, valid email address, clear inquiry type, and enough context for a useful follow-up. A separate confirmation step is not required. The chat UI must display a persistent disclosure explaining that contact details shared with the agent may be emailed to Kaelux for follow-up.

Submission is a server-side action, not an instruction inferred only from prose. Give the model a narrowly scoped lead-submission tool with a validated schema. The tool reuses the existing Resend contact delivery pipeline and maps the conversational intake to the same canonical contact payload used by the homepage form. Refactor shared server-only email logic as needed while preserving the existing `/api/contact` contract and contact-form behavior.

The email should include:

- source identifying the Kaelux intake agent;
- visitor name and email;
- company, if supplied;
- inquiry type;
- a concise structured summary;
- a model-produced summary of relevant conversational context without the raw transcript, internal prompts, or system data.

The flow must guard against duplicate delivery during the same conversation. A successful submission result remains in the client-provided message history; the API checks that history and disables or rejects further submission attempts for that conversation. After success, the agent clearly tells the visitor that the context was sent and that Kaelux can reply by email. If delivery fails, it reports a recoverable error and points the visitor to the standard contact form without claiming success.

## Hero Copy

Remove this rotating subtitle completely:

> MedAI, ViperMesh, Harneloop, PromptTriage, and Nullstate sit under the Kaelux group.

Keep the two remaining rotation phrases and the existing rotation timing and animation behavior.

The new canonical hero headline is:

> Where Research Becomes Ventures.

Synchronize the visually hidden H1 and image alternative text with this wording. The visible headline remains image-based.

## Hero Image Asset

Generate a candidate transparent bitmap that reproduces the current metallic, dimensional headline style with the exact new wording. Preserve the existing asset dimensions and transparent-background usage where practical.

Do not overwrite the current `public/hero-title.png` until the candidate passes visual inspection for:

- exact spelling and punctuation;
- clean, uncropped lettering;
- readable two-line composition at desktop and mobile sizes;
- transparent background;
- reasonable stylistic continuity with the current Kaelux hero.

If generation cannot produce accurate text, retain the current visible asset and deliver the candidate separately for manual refinement. The semantic H1 and alt text still receive the approved copy update.

## Scope Boundaries

- Do not redesign the hero or engagement cards.
- Do not change the public contact-form contract or behavior.
- Do not change RAG ingestion, Redis configuration, or rate limiting. Limit system-prompt changes to the approved conversational lead-capture behavior.
- Do not add a new AI provider or credentials.
- Do not modify unrelated routes or copy.
- Do not send a lead without a valid name, email address, inquiry type, and useful context.
- Do not include internal prompts, hidden context, credentials, or unrelated conversation data in lead emails.

## Verification

- Confirm the venture-partner CTA resolves to `/#contact`.
- Confirm the removed sentence no longer appears in the codebase.
- Confirm the API route uses `qwen/qwen3.6-27b` and no longer references the retired model.
- Confirm the agent gathers missing lead fields one at a time and can invoke only the validated submission tool.
- Confirm a complete conversational lead produces one email through the shared Resend delivery path.
- Confirm incomplete or invalid lead data cannot trigger delivery.
- Confirm successful conversations cannot submit the same lead twice.
- Confirm delivery failures remain visible and recoverable.
- Confirm the chat UI displays the contact-data disclosure.
- Confirm the H1 and hero image alt text use the approved headline.
- Visually inspect any generated headline candidate before replacing the live asset.
- Run `npm run lint`.
- Run `npx tsc --noEmit`.
- Run `npm run build`.
