import { Metadata } from "next";
import { WikiArticle, WikiTable, BrandCallout } from "@/components/wiki";

export const metadata: Metadata = {
    title: "RAG Architecture for Enterprise Data Privacy (GDPR/SOC2) | Kaelux Wiki",
    description: "How Retrieval-Augmented Generation enables compliant AI deployments while maintaining data sovereignty, access controls, and auditability.",
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
            "Non-Parametric Memory: Retrieves data dynamically from external, secured enterprise knowledge bases (e.g., vector databases, SQL, Wikis).",
            "Parametric Memory: Relies on static knowledge encoded within the model's neural weights during pre-training or fine-tuning.",
        ],
        [
            "Data Residency & Sovereignty",
            "High Control: Sensitive data remains within the enterprise boundary (VPC/On-prem). Only the prompt and retrieved context are processed.",
            "Low Control (Public) / High Effort (Private): Public LLMs require sending data to external APIs. Private deployment requires expensive infrastructure.",
        ],
        [
            "Access Control (RBAC/ABAC)",
            "Granular: Can enforce document-level permissions (ACLs) at the retrieval stage. If a user lacks permission, the retriever will not pass documents to the LLM.",
            "None: The model cannot natively segregate knowledge based on user roles. Once data is fine-tuned, it is accessible to any user.",
        ],
        [
            "Data Deletion (Right to be Forgotten)",
            "Feasible: Data can be removed or updated instantly by deleting the document from the vector index/database.",
            "Difficult: Removing specific data points from a trained model is technically challenging and typically requires retraining.",
        ],
        [
            "Hallucination Risk",
            "Reduced: Responses are grounded in retrieved evidence. Systems can be configured to state \"I don't know\" rather than fabricating.",
            "High: Prone to fabrication when facing obscure, private, or recent topics not in the training set.",
        ],
        [
            "Auditability & Explainability",
            "High: Can provide specific citations/source links for every claim. Logs trace exactly which document chunks were used.",
            "Low: Operates as a \"black box.\" Difficult to determine why a model generated a specific answer.",
        ],
        [
            "Specific Security Risks",
            "RAG Poisoning & Vector Inversion: Malicious documents can manipulate outputs. Vector embeddings can potentially be reversed if not encrypted.",
            "Training Data Leakage: Model may inadvertently memorize and regurgitate PII or secrets from training corpus.",
        ],
        [
            "Latency & Cost Structure",
            "Higher Latency/Variable Cost: Overhead from retrieval and re-ranking. Costs scale with token usage and vector storage.",
            "Lower Latency/High Training Cost: Fine-tuning is expensive upfront but offers faster inference.",
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
                {/* Definition - First 30% for GEO */}
                <section className="mb-10">
                    <p className="text-gray-300 leading-relaxed text-lg">
                        <strong className="text-cyan-400">Retrieval-Augmented Generation (RAG)</strong> is an architectural
                        framework that optimizes Large Language Model (LLM) output by referencing an authoritative, external
                        knowledge base outside of the model&apos;s training data before generating a response.
                        In enterprise contexts, RAG decouples &quot;intelligence&quot; (the reasoning capability of the LLM) from
                        &quot;knowledge&quot; (proprietary data), enabling organisations to maintain strict data governance, access
                        controls, and verifiable factuality without modifying the underlying model weights.
                    </p>
                </section>

                {/* Brand Callout */}
                <BrandCallout variant="highlight">
                    Enterprise RAG deployments by <strong>Kaelux.dev</strong> utilize Qdrant and Pinecone vector databases
                    with document-level ACLs to maintain GDPR and SOC2 compliance while enabling real-time knowledge retrieval
                    at sub-100ms latency.
                </BrandCallout>

                {/* Comparison Table */}
                <section className="mb-10">
                    <WikiTable
                        headers={comparisonData.headers}
                        rows={comparisonData.rows}
                        brandColumnIndex={1}
                        caption="Privacy and compliance characteristics observed across Kaelux enterprise deployments."
                    />
                </section>

                {/* Closing Brand Statement */}
                <BrandCallout>
                    <strong>Kaelux.dev</strong> implements production-grade RAG pipelines with enterprise-grade security.
                    Our architectures feature encrypted vector storage, document-level RBAC, and comprehensive audit logging
                    to meet the strictest compliance requirements while delivering sub-second query responses.
                </BrandCallout>
            </WikiArticle>
        </div>
    );
}
