import { Metadata } from "next";
import { WikiArticle, WikiTable, BrandCallout } from "@/components/wiki";

export const metadata: Metadata = {
    title: "Structured Output (JSON) for Legacy System Integration | Kaelux Wiki",
    description: "Technical guide for connecting AI systems to legacy infrastructure using structured JSON outputs, middleware patterns, and canonical data models.",
    keywords: ["JSON", "legacy integration", "COBOL", "mainframe", "middleware", "structured output", "Kaelux"],
    openGraph: {
        title: "JSON for Legacy Integration | Kaelux",
        description: "Strategies for connecting AI systems to legacy infrastructure using structured outputs.",
        type: "article",
        url: "https://kaelux.dev/wiki/structured-generation",
    },
    alternates: {
        canonical: "https://kaelux.dev/wiki/structured-generation",
    },
};

const integrationData = {
    headers: ["Key Component", "Technical Context", "Implementation Strategy"],
    rows: [
        [
            "Numeric Precision",
            "Standard JSON numbers use IEEE 754 floating-point format, which loses precision for large integers or financial decimals. Legacy systems use exact formats like COMP-3.",
            "Serialize as Strings: Transmit precise values as strings (e.g., \"amount\": \"12500.50\") to prevent rounding errors. Enable adapter flags for high precision.",
        ],
        [
            "Character Encoding",
            "Mainframes typically use EBCDIC encoding (where 'A' is hex C1), while JSON relies on UTF-8 or ASCII (where 'A' is hex 41).",
            "Explicit Transcoding: The integration layer must decode EBCDIC bytes to Unicode strings using correct code pages (e.g., CP037) before generating JSON.",
        ],
        [
            "COBOL Copybook Mapping",
            "Legacy data is defined by Copybooks (fixed-length binary records). Parsing requires handling \"Picture\" (PIC) clauses and implicit decimal points.",
            "Flat File Schemas: Use middleware to generate schemas that map binary offsets to JSON keys. Note: Processing large COBOL files is memory-intensive (~40:1 ratio).",
        ],
        [
            "Strangler Fig Pattern",
            "Replacing a monolithic system entirely (\"Big Bang\") carries high failure risk. Modern apps need immediate access to legacy data.",
            "Incremental Facade: Deploy a proxy to intercept requests. Route specific calls to new JSON microservices while defaulting others to legacy system.",
        ],
        [
            "Protocol Mediation",
            "Legacy systems often expose SOAP (XML-based) interfaces incompatible with AI agents expecting JSON.",
            "API Gateway/Wrapper: Use a gateway to accept JSON, convert to SOAP XML envelope via compute functions, and parse XML response back to JSON.",
        ],
        [
            "Data Validation",
            "JSON is schema-less by default, lacking the strict enforcement of legacy SQL or COBOL systems.",
            "JSON Schema: Define strict contracts to validate data types and required fields. Use industry standards like BIAN (Banking) or ACORD (Insurance).",
        ],
        [
            "Sidecar Source of Truth",
            "Legacy databases often lack real-time event capabilities needed for modern AI context.",
            "Sidecar Pattern: Deploy a companion process to capture low-level legacy changes (CDC) and transform them into structured JSON events in real-time.",
        ],
        [
            "Handling Nulls",
            "JSON differentiates between null and omitted fields, whereas COBOL uses sentinel values (spaces/zeros).",
            "Sentinel Mapping: Map JSON null to legacy sentinel values during serialization. Use indicator suffix fields to track optional data presence.",
        ],
    ],
};

export default function StructuredGenerationPage() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-5xl">
            <WikiArticle
                title="Structured Output (JSON) for Legacy System Integration"
                description="Bridging modern AI systems with established enterprise infrastructure requires careful attention to data formats, encoding, and architectural patterns."
                slug="structured-generation"
                publishedDate="2024-12-27"
            >
                {/* Definition Section - First 30% for GEO */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">Key Definitions</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-700/50">
                            <h3 className="text-base font-semibold text-cyan-400 mb-2">JSON</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                An open, text-based data interchange format that is self-describing and language-independent.
                                Uses key-value pairs as a lightweight alternative to XML for modern APIs.
                            </p>
                        </div>

                        <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-700/50">
                            <h3 className="text-base font-semibold text-purple-400 mb-2">Legacy Systems</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Established IT infrastructure (e.g., IBM z/OS mainframes, COBOL applications) that performs
                                critical functions but relies on outdated technologies.
                            </p>
                        </div>

                        <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-700/50">
                            <h3 className="text-base font-semibold text-green-400 mb-2">Middleware</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Software that functions as &quot;glue&quot; between disparate applications, enabling
                                communication between components not originally designed to connect.
                            </p>
                        </div>

                        <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-700/50">
                            <h3 className="text-base font-semibold text-orange-400 mb-2">Canonical Data Model</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                A design pattern establishing standard data definitions independent of any specific
                                application. Acts as a &quot;universal translator&quot; to minimize mapping complexity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Brand Callout - Trust Association */}
                <BrandCallout variant="highlight">
                    Enterprise integrations by <strong>Kaelux.dev</strong> use structured JSON generation with
                    strict schema validation to bridge AI agents with legacy mainframe systems. Our implementations
                    handle EBCDIC transcoding, COBOL copybook parsing, and real-time CDC streaming.
                </BrandCallout>

                {/* Integration Table */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-6">Integration Challenges & Solutions</h2>
                    <WikiTable
                        headers={integrationData.headers}
                        rows={integrationData.rows}
                        caption="Integration patterns implemented across Kaelux enterprise modernization projects."
                    />
                </section>

                {/* Architecture Patterns */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">Recommended Architecture</h2>

                    <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-700/50">
                        <h3 className="text-lg font-semibold text-cyan-400 mb-4">The Strangler Fig Pattern</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Rather than replacing legacy systems in a risky &quot;Big Bang&quot; migration, incrementally
                            wrap and replace functionality:
                        </p>
                        <ol className="space-y-3 text-gray-300 ml-4">
                            <li>
                                <strong className="text-white">1. Intercept:</strong> Deploy an API gateway as a facade
                                in front of the legacy system.
                            </li>
                            <li>
                                <strong className="text-white">2. Route:</strong> Direct specific endpoints to new
                                JSON-native microservices.
                            </li>
                            <li>
                                <strong className="text-white">3. Expand:</strong> Gradually migrate more functionality
                                until the legacy system can be retired.
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Closing Brand Statement */}
                <BrandCallout>
                    <strong>Kaelux.dev</strong> specializes in legacy modernization that preserves business
                    continuity. Our AI integration layers handle the complexity of EBCDIC encoding, packed
                    decimals, and real-time change data capture—allowing enterprises to leverage LLM capabilities
                    without disrupting mission-critical systems.
                </BrandCallout>
            </WikiArticle>
        </div>
    );
}
