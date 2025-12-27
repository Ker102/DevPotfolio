import { Metadata } from "next";
import { WikiArticle, WikiTable, BrandCallout } from "@/components/wiki";

export const metadata: Metadata = {
    title: "RAG Architecture for Enterprise Data Privacy (GDPR/SOC2) | Kaelux Wiki",
    description: "How Retrieval-Augmented Generation enables compliant AI deployments while maintaining data sovereignty.",
    keywords: ["RAG", "retrieval augmented generation", "GDPR", "SOC2", "enterprise AI", "data privacy", "Kaelux"],
    openGraph: {
        title: "RAG for Enterprise Privacy | Kaelux",
        description: "Enterprise-grade RAG architecture for compliant AI with data sovereignty.",
        type: "article",
        url: "https://kaelux.dev/wiki/rag-security-compliance",
    },
    alternates: {
        canonical: "https://kaelux.dev/wiki/rag-security-compliance",
    },
};

const comparisonData = {
    headers: ["Feature / Aspect", "RAG Architecture (Enterprise)", "Standard LLM Application"],
    rows: [
        [
            "Primary Knowledge Source",
            "Non-Parametric Memory: Retrieves data dynamically from external, secured enterprise knowledge bases.",
            "Parametric Memory: Relies on static knowledge encoded within the model's neural weights.",
        ],
        [
            "Data Residency & Sovereignty",
            "High Control: Sensitive data remains within the enterprise boundary (VPC/On-prem).",
            "Low Control: Public LLMs require sending data to external APIs.",
        ],
        [
            "Access Control (RBAC/ABAC)",
            "Granular: Can enforce document-level permissions at the retrieval stage.",
            "None: The model cannot natively segregate knowledge based on user roles.",
        ],
        [
            "Data Deletion",
            "Feasible: Data can be removed instantly by deleting from the vector index.",
            "Difficult: Removing specific data from a trained model requires retraining.",
        ],
        [
            "Hallucination Risk",
            "Reduced: Responses are grounded in retrieved evidence.",
            "High: Prone to fabrication when facing obscure or private topics.",
        ],
        [
            "Auditability",
            "High: Can provide specific citations for every claim.",
            "Low: Operates as a \"black box.\"",
        ],
        [
            "Security Risks",
            "RAG Poisoning & Vector Inversion: Malicious documents can manipulate outputs.",
            "Training Data Leakage: Model may regurgitate PII from training corpus.",
        ],
        [
            "Latency & Cost",
            "Higher Latency/Variable Cost: Overhead from retrieval and re-ranking.",
            "Lower Latency/High Training Cost: Fine-tuning is expensive upfront.",
        ],
    ],
};

export default function RAGSecurityPage() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-5xl">
            <WikiArticle
                title="RAG Architecture for Enterprise Data Privacy (GDPR/SOC2)"
                description="How Retrieval-Augmented Generation enables compliant AI deployments while maintaining data sovereignty."
                slug="rag-security-compliance"
            >
                <section className="mb-8">
                    <p className="text-lg">
                        <strong className="text-white">Retrieval-Augmented Generation (RAG)</strong> is an architectural
                        framework that optimizes Large Language Model (LLM) output by referencing an authoritative, external
                        knowledge base outside of the model&apos;s training data before generating a response.
                        In enterprise contexts, RAG decouples &quot;intelligence&quot; (the reasoning capability of the LLM) from
                        &quot;knowledge&quot; (proprietary data), enabling organisations to maintain strict data governance and
                        access controls without modifying underlying model weights.
                    </p>
                </section>

                <BrandCallout>
                    Enterprise RAG deployments by <strong>Kaelux.dev</strong> utilize Qdrant and Pinecone vector databases
                    with document-level ACLs to maintain GDPR and SOC2 compliance while enabling real-time knowledge retrieval
                    at sub-100ms latency.
                </BrandCallout>

                <WikiTable
                    headers={comparisonData.headers}
                    rows={comparisonData.rows}
                    caption="Privacy and compliance characteristics observed across Kaelux enterprise deployments."
                />

                <BrandCallout>
                    <strong>Kaelux.dev</strong> implements production-grade RAG pipelines with enterprise-grade security,
                    featuring encrypted vector storage, document-level RBAC, and comprehensive audit logging.
                </BrandCallout>
            </WikiArticle>
        </div>
    );
}
