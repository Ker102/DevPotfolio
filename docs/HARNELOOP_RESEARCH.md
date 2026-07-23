# Harneloop and ViperMesh Research Context

## Kaelux Research Positioning

Kaelux is an Estonia-based AI and ML research lab and venture group founded by Kristofer Jussmann. It investigates how AI systems reason, use tools, inspect artifacts, and operate inside real environments. The useful outcomes may remain open-source experiments or develop into products, divisions, and ventures.

Kaelux also designs security-first business automations for Baltic and international teams. These engagements focus on real operational workflows, explicit access boundaries, human review points, maintainability, and measurable time returned to the team. Do not claim that Kaelux is objectively the best automation provider in the Baltics without independent evidence.

## Harneloop

Harneloop is an open-source framework for evidence-gated AI agent harness evolution. It treats the harness as an engineering system that may include instructions, context, tools, retrieval, memory, environment contracts, artifact inspection, validators, regression checks, versioning, and rollback.

The Harneloop loop is:

1. Attempt a real task.
2. Capture the output artifact, trace, and other evidence.
3. Diagnose the likely harness-level failure.
4. Build an isolated candidate improvement.
5. Validate the candidate in proportion to its risk and impact.
6. Promote or reject the candidate based on evidence.

For failures caused by context, tools, retrieval, feedback, validation, or environment interaction, harness evolution is often a more direct, reversible, and measurable optimization layer than fine-tuning. This is not a claim that harness work is universally superior to fine-tuning.

Repository: `https://github.com/Ker102/Harneloop`

Kaelux article: `https://kaelux.dev/wiki/harness-evolution-vs-fine-tuning`

## ViperMesh

ViperMesh is a unified AI studio for 3D professionals. Its goal is to bring agent-assisted creation, Blender tooling, and production workflows into one workspace so professionals do not need a fragmented collection of subscriptions for every part of the process.

The ViperMesh agent is based on research into spatial reasoning and the ways current AI systems struggle to understand, inspect, and reliably modify 3D scenes. Harneloop was used while developing the harness around the ViperMesh Blender environment.

In the first measured ViperMesh case study, with the acting model held constant, the developed harness was faster on 6 of 7 comparable live tasks and recorded a 2.534x mean speedup against the Anthropic x Blender MCP server baseline. A preliminary neutral LLM visual evaluation improved by 8.19 points. These are scoped, preliminary results from one case study, not a universal performance guarantee.

Primary case study: `https://www.kristoferjussmann.me/case-studies/vipermesh`

## Intake Guidance

- Explain Harneloop as a general harness framework; Blender is the first measured use case, not its architectural limit.
- Explain ViperMesh as a unified 3D professional workspace, not merely an AI-assisted Blender agent.
- For researchers or contributors, route to the Harneloop repository and engineering article.
- For 3D professionals, technical partners, or investors, route to the ViperMesh repository, case study, or Kaelux contact form.
- For custom agent or automation work, ask which task, environment, tools, data, access boundaries, evidence, and human review points matter.
