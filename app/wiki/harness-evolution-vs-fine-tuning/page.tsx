import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BrandCallout, WikiArticle, WikiTable } from "@/components/wiki";

const articleUrl = "https://kaelux.dev/wiki/harness-evolution-vs-fine-tuning";
const repositoryUrl = "https://github.com/Ker102/Harneloop";
const caseStudyUrl = "https://www.kristoferjussmann.me/case-studies/vipermesh";

export const metadata: Metadata = {
    title: "Harness Evolution vs Fine-Tuning | Kaelux",
    description:
        "A practical guide to choosing harness engineering, retrieval, tooling, model changes, or fine-tuning for an AI agent.",
    keywords: [
        "agent harness",
        "harness evolution",
        "fine-tuning alternatives",
        "AI agent evaluation",
        "Harneloop",
        "ViperMesh",
    ],
    alternates: {
        canonical: articleUrl,
    },
    openGraph: {
        title: "Harness Evolution vs Fine-Tuning",
        description:
            "How Kaelux uses evidence-gated harness engineering to improve agents before changing model weights.",
        type: "article",
        url: articleUrl,
    },
};

const decisionRows = [
    [
        "Missing or stale facts",
        "Retrieval and context",
        "Put current, attributable information in reach before changing model behavior.",
    ],
    [
        "Wrong action or weak environment control",
        "Tools and environment contract",
        "Improve what the agent can observe, call, verify, and recover.",
    ],
    [
        "Plausible transcript, bad artifact",
        "Observers and validators",
        "Inspect the actual render, file, scene, state, or workflow outcome.",
    ],
    [
        "Repeated task-specific mistakes",
        "Harness candidate plus regressions",
        "Turn the failure into a tested, reversible improvement around the same model.",
    ],
    [
        "Base model lacks the capability",
        "Model replacement or fine-tuning",
        "Change weights or model only after the surrounding system is no longer the bottleneck.",
    ],
    [
        "Stable style, format, or latency requirement",
        "Fine-tuning",
        "Weight-level adaptation can be appropriate when the target behavior is well specified and measurable.",
    ],
];

const harnessLayers = [
    "Instructions and task context",
    "Tools and environment contracts",
    "Retrieval and memory",
    "Examples and reusable procedures",
    "Artifact observers and validators",
    "Regression cases and promotion gates",
    "Version history and rollback",
];

const lifecycle = [
    {
        title: "Attempt the real task",
        description: "Start from a baseline in the environment where the agent actually works.",
    },
    {
        title: "Capture evidence",
        description: "Keep the artifact, trace, logs, structured state, and relevant resource use.",
    },
    {
        title: "Diagnose the harness",
        description: "Trace the failure to context, tools, retrieval, feedback, validation, environment, or a true model limit.",
    },
    {
        title: "Build an isolated candidate",
        description: "Accumulate related changes without replacing the working harness.",
    },
    {
        title: "Validate proportionally",
        description: "Use targeted checks, representative tasks, and regressions appropriate to the impact.",
    },
    {
        title: "Promote or reject",
        description: "Adopt only improvements supported by evidence and preserve a restorable version.",
    },
];

export default function HarnessEvolutionArticlePage() {
    return (
        <div className="container mx-auto max-w-5xl px-6 py-24">
            <WikiArticle
                title="Harness Evolution vs Fine-Tuning: How to Choose the Right Optimization Layer"
                description="A practical guide to choosing harness engineering, retrieval, tooling, model changes, or fine-tuning for an AI agent."
                slug="harness-evolution-vs-fine-tuning"
                datePublished="2026-07-23"
                dateModified="2026-07-23"
                keywords={[
                    "agent harness",
                    "harness evolution",
                    "fine-tuning alternatives",
                    "AI agent evaluation",
                    "Harneloop",
                    "ViperMesh",
                ]}
            >
                <p className="text-xl leading-8 text-gray-200">
                    When an agent fails because it lacks context, useful tools, retrieval, feedback,
                    validation, or a reliable way to interact with its environment, improve the harness
                    first. Fine-tuning solves a different class of problems and should not be the default
                    response to every weak result.
                </p>

                <BrandCallout>
                    For agent failures caused by context, tools, retrieval, feedback, validation, or
                    environment interaction, harness evolution is often a more direct, reversible, and
                    measurable optimization layer than fine-tuning.
                </BrandCallout>

                <section className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                        The engineering decision
                    </p>
                    <h2 className="text-3xl font-semibold text-white">
                        Fix the layer that is actually failing
                    </h2>
                    <p>
                        Agent performance is not produced by model weights alone. The surrounding system
                        determines which information the model sees, which actions it can take, how it
                        receives feedback, and whether a weak attempt becomes a durable improvement.
                        Before changing the model, isolate the observed failure and choose the smallest
                        layer that can correct it.
                    </p>
                </section>

                <WikiTable
                    headers={["Observed failure", "First layer to test", "Why"]}
                    rows={decisionRows}
                    caption="A diagnostic order, not a claim that one optimization layer is always sufficient."
                />

                <section className="space-y-5">
                    <h2 className="text-3xl font-semibold text-white">
                        A production harness is more than a prompt
                    </h2>
                    <p>
                        A prompt is one component. A production harness is the complete working environment
                        around the model. It should make the task legible, provide the right interfaces,
                        expose real evidence, and prevent untested changes from replacing the known working
                        version.
                    </p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                        {harnessLayers.map((layer) => (
                            <li
                                key={layer}
                                className="border-l border-violet-400/50 bg-white/[0.025] px-4 py-3 text-sm text-gray-300"
                            >
                                {layer}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="space-y-5">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                            Harneloop
                        </p>
                        <h2 className="text-3xl font-semibold text-white">
                            Evidence-gated harness evolution
                        </h2>
                    </div>
                    <p>
                        Harneloop is the open-source framework implementing Kaelux&apos;s harness-first
                        method. It is not another agent runtime and it is not merely an evaluation
                        dashboard. It is a development and versioning layer that lets an agent improve a
                        task-specific harness while protecting the promoted working version.
                    </p>
                    <ol className="space-y-4">
                        {lifecycle.map((step, index) => (
                            <li key={step.title} className="grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-[3rem_1fr]">
                                <span className="font-mono text-sm text-violet-300">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="font-semibold text-white">{step.title}</h3>
                                    <p className="mt-1 text-sm text-gray-400">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <p>
                        Related changes can accumulate into coherent candidates, validation can scale with
                        their impact, and only candidates supported by evidence are promoted. The result is
                        inspectable, reversible, and portable across compatible agent environments.
                    </p>
                </section>

                <section className="space-y-5">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                            First measured case study
                        </p>
                        <h2 className="text-3xl font-semibold text-white">
                            ViperMesh: spatial reasoning inside Blender
                        </h2>
                    </div>
                    <p>
                        ViperMesh is a unified studio for 3D professionals, designed to bring agent-assisted
                        creation, Blender tooling, and production workflows into one environment. Its agent
                        work began with a difficult research problem: current models can describe 3D scenes
                        fluently while still struggling to inspect spatial state and make reliable changes.
                    </p>
                    <p>
                        Harneloop was used to develop the harness around the ViperMesh Blender environment.
                        The acting model remained fixed so the comparison could focus on changes to tools,
                        context, artifact feedback, and the surrounding harness.
                    </p>

                    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
                        <div className="bg-black p-5">
                            <p className="text-3xl font-semibold text-white">6 of 7</p>
                            <p className="mt-2 text-sm text-gray-400">Comparable live tasks completed faster</p>
                        </div>
                        <div className="bg-black p-5">
                            <p className="text-3xl font-semibold text-white">2.534x</p>
                            <p className="mt-2 text-sm text-gray-400">Mean speedup in the documented comparison</p>
                        </div>
                        <div className="bg-black p-5">
                            <p className="text-3xl font-semibold text-white">+8.19</p>
                            <p className="mt-2 text-sm text-gray-400">Preliminary neutral LLM visual-evaluation points</p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500">
                        These are scoped results from one artifact-heavy case study against the Anthropic x
                        Blender MCP server baseline. The visual evaluation is preliminary, and the results
                        do not establish universal superiority across models, tasks, or environments.
                    </p>
                    <a
                        href={caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                    >
                        Read the complete ViperMesh methodology and limitations
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </section>

                <section className="space-y-5">
                    <h2 className="text-3xl font-semibold text-white">
                        When fine-tuning is still the right layer
                    </h2>
                    <p>
                        Harness work does not replace fine-tuning. Weight-level adaptation can be appropriate
                        when the requirement is stable behavior or style, lower inference latency, a
                        specialized representation, or a capability gap that remains after context, tools,
                        feedback, and validation have been strengthened.
                    </p>
                    <p>
                        The practical sequence is diagnostic: establish a baseline, improve the surrounding
                        system where evidence points, measure again, and fine-tune when the remaining
                        bottleneck genuinely belongs in the model. A strong harness and a well-chosen
                        fine-tune can also complement each other.
                    </p>
                </section>

                <section className="border-t border-white/10 pt-8">
                    <h2 className="text-3xl font-semibold text-white">
                        Use the framework or bring Kaelux a difficult environment
                    </h2>
                    <p className="mt-4 max-w-3xl">
                        Harneloop is open source and currently in public alpha. Use it directly for a
                        repeatable agent task, contribute a new environment, or talk to Kaelux about a
                        task-specific harness where artifacts, validation, access boundaries, and rollback
                        matter.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <a
                            href={repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
                        >
                            Explore Harneloop
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/45"
                        >
                            Discuss a research or build environment
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </WikiArticle>
        </div>
    );
}
