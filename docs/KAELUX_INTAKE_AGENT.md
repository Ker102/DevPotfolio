# Kaelux Intake Agent

## Purpose

The Kaelux Intake Agent answers focused questions about Kaelux as an Estonia-based AI and ML research lab and venture group, then routes relevant inbound interest to the right next step.

The agent is allowed to discuss:

- Kaelux research into agent systems, spatial reasoning, harness engineering, medical AI infrastructure, prompt systems, and infrastructure security.
- Public work: MedAI, ViperMesh, Harneloop, PromptTriage, and Nullstate.
- Harneloop as the open-source harness-evolution framework first used while developing the ViperMesh Blender harness.
- ViperMesh as a unified studio for 3D professionals, supported by spatial-reasoning research.
- Engagement paths: investors and strategic partners, venture/product partners, research collaborators, similar-business-build inquiries, and security-first business automations.
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
- Security-first business automation: ask about the repeated operation, tools, accounts, data, access boundaries, human review points, maintenance ownership, and measurable outcome.
- Harneloop or agent-harness research: identify the task environment, observed failure class, available evidence, validators, and acceptable promotion risk.
- MedAI: keep the answer scoped to medical research infrastructure, secure tooling, DevSecOps, MLOps, and research workflow support.

Ask at most one clarifying question at a time. If a next step is clear, provide it directly.

## Conversational Contact

The intake agent doubles as a quick contact channel. When a visitor expresses follow-up intent, it gathers one missing detail at a time:

- name and email;
- company when applicable;
- inquiry type;
- useful context and desired outcome;
- timing when relevant.

Once the required fields are complete, the agent can submit automatically through the server-side `submitLead` tool. The chat surfaces disclose that shared contact details may be emailed to Kaelux for follow-up. The tool validates the payload, maps it to the same canonical contact shape as the homepage form, and sends it through Resend with an idempotency key. A successful tool result prevents another send in the same conversation. On failure, the agent must not claim success and instead routes the visitor to `/#contact`.

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
- `docs/HARNELOOP_RESEARCH.md`
- `https://kaelux.dev/`
- `https://kaelux.dev/about`
- `https://kaelux.dev/pricing`
- `https://kaelux.dev/medai`
- `https://kaelux.dev/openclaw`
- `https://kaelux.dev/wiki/harness-evolution-vs-fine-tuning`
- `https://www.kristoferjussmann.me/case-studies/vipermesh`

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

The live chat uses Groq model `qwen/qwen3.6-27b` with reasoning disabled for low-latency intake and parallel tool calls disabled so lead delivery stays sequential.

If Redis or Together is missing at runtime, the chat route still answers from its system prompt and current conversation, but it will not retrieve additional Kaelux context.

## Ingestion

Run:

```bash
python scripts/ingest.py
```

The GitHub Actions workflow `.github/workflows/ingest-knowledge.yml` runs the same script on schedule and on manual dispatch.
