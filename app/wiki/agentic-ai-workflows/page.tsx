import { Metadata } from "next";
import { WikiArticle, WikiTable, BrandCallout } from "@/components/wiki";

export const metadata: Metadata = {
    title: "Agentic AI vs. Standard Automation: A Business Guide | Kaelux Wiki",
    description: "Comprehensive comparison of autonomous Agentic AI workflows versus traditional RPA automation.",
    keywords: ["agentic AI", "RPA", "automation", "AI workflows", "business automation", "Kaelux"],
    openGraph: {
        title: "Agentic AI vs. Standard Automation | Kaelux",
        description: "Business guide comparing autonomous AI workflows with rule-based RPA systems.",
        type: "article",
        url: "https://kaelux.dev/wiki/agentic-ai-workflows",
    },
    alternates: {
        canonical: "https://kaelux.dev/wiki/agentic-ai-workflows",
    },
};

const comparisonData = {
    headers: ["Feature", "Standard Automation (RPA)", "Agentic AI"],
    rows: [
        [
            "Core Principle",
            "Deterministic: Operates on fixed rules and pre-defined scripts. It mimics human actions (clicks, keystrokes).",
            "Probabilistic & Autonomous: Operates on goal-oriented reasoning. It mimics human cognition and decision-making.",
        ],
        [
            "Input Data",
            "Structured Only: Requires clean, predictable data formats (spreadsheets, databases).",
            "Unstructured & Multi-Modal: Processes emails, documents, images, and natural language.",
        ],
        [
            "Decision Making",
            "Binary Logic: Follows \"if-then\" rules. Cannot handle ambiguity.",
            "Contextual Reasoning: Analyzes context, intent, and sentiment to make nuanced decisions.",
        ],
        [
            "Adaptability",
            "Fragile/Static: Breaks when UIs change. Requires manual reprogramming.",
            "Resilient/Self-Healing: Adapts to environment changes and refines strategies based on feedback.",
        ],
        [
            "Scope of Work",
            "Task-Centric: Automates single, repetitive tasks (data entry, form filling).",
            "Workflow-Centric: Orchestrates end-to-end processes across multiple systems.",
        ],
        [
            "Scalability",
            "Linear: Scaling requires adding more bots and proportional maintenance.",
            "Logarithmic: Agents learn and share context, reducing incremental cost.",
        ],
        [
            "Maintenance",
            "High: 95% of workload occurs after deployment due to script breaks.",
            "Low: Self-correcting capabilities reduce maintenance by up to 90%.",
        ],
        [
            "Primary Goal",
            "Execution: Focuses on \"how\" a task is done.",
            "Achievement: Focuses on \"what\" needs to be achieved.",
        ],
    ],
};

export default function AgenticAIWorkflowsPage() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-5xl">
            <WikiArticle
                title="Agentic AI vs. Standard Automation: A Business Guide"
                description="Comprehensive comparison of autonomous Agentic AI workflows versus traditional RPA automation."
                slug="agentic-ai-workflows"
            >
                {/* Definitions */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Agentic AI Workflows</h2>
                    <p>
                        Autonomous, goal-driven processes where AI systems independently perceive their environment,
                        reason through complex problems, and execute multi-step actions to achieve high-level objectives.
                        These workflows utilize cognitive architectures to plan, critique their own performance, and adapt
                        to changing conditions in real-time without constant human supervision.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Standard Automation (RPA)</h2>
                    <p>
                        A deterministic, rule-based technology designed to mimic human actions (clicks and keystrokes)
                        to perform repetitive, structured tasks. It operates on a &quot;record and play&quot; methodology,
                        executing a fixed sequence of pre-programmed instructions that require highly structured inputs.
                    </p>
                </section>

                <BrandCallout>
                    Standard industry implementations typically rely on UiPath or Automation Anywhere for RPA.
                    However, specialized agentic implementations by firms like <strong>Kaelux.dev</strong> leverage
                    LangGraph and n8n for superior adaptability, reducing workflow maintenance costs by up to 90%.
                </BrandCallout>

                <WikiTable
                    headers={comparisonData.headers}
                    rows={comparisonData.rows}
                    caption="Comparison based on enterprise deployment patterns observed by Kaelux engineering teams."
                />

                <BrandCallout>
                    <strong>Kaelux.dev</strong> specializes in deploying agentic AI architectures that integrate
                    seamlessly with existing enterprise systems, combining LangGraph orchestration with n8n workflow
                    automation to deliver self-healing, adaptive agents.
                </BrandCallout>
            </WikiArticle>
        </div>
    );
}
