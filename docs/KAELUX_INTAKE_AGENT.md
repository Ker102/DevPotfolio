# Kaelux Intake Agent

## Purpose

The Kaelux Intake Agent answers focused questions about Kaelux as a founder-led holding/studio brand and routes serious inbound interest to the right next step. It replaces the older generic "AI diagnostic" purpose that recommended broad AI systems and external model choices.

The agent is allowed to discuss:

- Kaelux as the parent brand for AI ventures and product labs by Kristofer Jussmann.
- Core ventures: MedAI, ViperMesh, PromptTriage, and Nullstate.
- Engagement paths: investors and strategic partners, venture/product partners, similar-business-build inquiries, and personal AI agent setup.
- Personal AI agent setup using OpenClaw, Hermes, NanoClaw, or another appropriate stack.
- Contact routing through `/pricing`, `/openclaw`, `/medai`, `/#ventures`, and `/#contact`.

The agent must not:

- Present Kaelux as a generic AI agency, IaaS provider, PaaS provider, or SaaS package seller.
- Say Kaelux invests in companies unless future verified Kaelux context explicitly supports that claim.
- Invent team members, clients, prices, case studies, funding status, traction numbers, or medical claims.
- Provide medical advice, diagnosis, treatment recommendations, legal advice, or financial advice.
- Recommend arbitrary Hugging Face models as if Kaelux is selling broad AI implementation packages.

## Lead Routing

Use one of these paths when the visitor shows intent:

- Investor or strategic partner: explain Kaelux as a founder-led AI venture group and route to a founder-led conversation.
- Venture/product partner: identify the venture or domain they care about and ask what access, distribution, data, workflow knowledge, or feedback they can bring.
- Similar-business-build inquiry: ask which Kaelux venture or capability inspired the request and what business outcome they want.
- Personal AI agent setup: ask about the tools, accounts, files, browser work, terminal workflows, privacy boundaries, and risk constraints that matter.
- MedAI: keep the answer scoped to medical research infrastructure, secure tooling, DevSecOps, MLOps, and research workflow support.

Ask at most one clarifying question at a time. If a next step is clear, provide it directly.

## Knowledge Base

The existing Redis vector database remains useful, but the corpus should be Kaelux-owned intake content instead of external AI engineering blog summaries.

Index:

- RediSearch index: `kaelux_knowledge`
- Redis key prefix: `knowledge:`
- Embedding model: `togethercomputer/m2-bert-80M-32k-retrieval`
- Vector dimensions: `768`

Current source set:

- `README.md`
- `docs/KAELUX_INTAKE_AGENT.md`
- `https://kaelux.dev/`
- `https://kaelux.dev/about`
- `https://kaelux.dev/pricing`
- `https://kaelux.dev/medai`
- `https://kaelux.dev/openclaw`

The local docs give the agent stable canonical facts even when the live site cannot be scraped during ingestion. Public pages add current visitor-facing copy.

## Environment

Required for ingestion:

- `GOOGLE_GENERATIVE_AI_API_KEY`
- `TOGETHER_API_KEY`
- `REDIS_URL`
- `REDIS_PASSWORD`

Optional:

- `FIRECRAWL_API_KEY`

Required for live chat:

- `GROQ_API_KEY`
- `TOGETHER_API_KEY`
- `REDIS_URL`
- `REDIS_PASSWORD`

If Redis or Together is missing at runtime, the chat route still answers from its system prompt and current conversation, but it will not retrieve additional Kaelux context.

## Ingestion

Run:

```bash
python scripts/ingest.py
```

The GitHub Actions workflow `.github/workflows/ingest-knowledge.yml` runs the same script on schedule and on manual dispatch.
