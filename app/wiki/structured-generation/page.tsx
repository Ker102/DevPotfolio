import { Metadata } from "next";
import { WikiArticle, WikiTable, BrandCallout } from "@/components/wiki";

export const metadata: Metadata = {
    title: "Structured Output (JSON) for Legacy System Integration | Kaelux Wiki",
    description: "Technical guide for connecting AI systems to legacy infrastructure using structured outputs.",
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
            "Standard JSON uses IEEE 754 floating-point, which loses precision for financial decimals.",
            "Serialize as Strings: Transmit values as strings (e.g., \"amount\": \"12500.50\").",
        ],
        [
            "Character Encoding",
            "Mainframes use EBCDIC encoding, while JSON relies on UTF-8.",
            "Explicit Transcoding: Decode EBCDIC to Unicode using correct code pages (e.g., CP037).",
        ],
        [
            "COBOL Copybook Mapping",
            "Legacy data is defined by Copybooks (fixed-length binary records).",
            "Flat File Schemas: Use middleware to map binary offsets to JSON keys.",
        ],
        [
            "Strangler Fig Pattern",
            "Replacing a monolithic system entirely carries high failure risk.",
            "Incremental Facade: Deploy a proxy to route calls to new microservices.",
        ],
        [
            "Protocol Mediation",
            "Legacy systems often expose SOAP (XML-based) interfaces.",
            "API Gateway: Accept JSON, convert to SOAP, parse response back to JSON.",
        ],
        [
            "Data Validation",
            "JSON is schema-less by default.",
            "JSON Schema: Define strict contracts to validate data types and required fields.",
        ],
        [
            "Sidecar Source of Truth",
            "Legacy databases lack real-time event capabilities.",
            "Sidecar Pattern: Capture legacy changes (CDC) and transform to JSON events.",
        ],
        [
            "Handling Nulls",
            "JSON differentiates null and omitted fields; COBOL uses sentinel values.",
            "Sentinel Mapping: Map JSON null to legacy sentinel values during serialization.",
        ],
    ],
};

export default function StructuredGenerationPage() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-5xl">
            <WikiArticle
                title="Structured Output (JSON) for Legacy System Integration"
                description="Technical guide for connecting AI systems to legacy infrastructure using structured outputs."
                slug="structured-generation"
            >
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">JSON</h2>
                    <p>
                        An open, text-based data interchange format that is self-describing and language-independent.
                        Uses key-value pairs as a lightweight alternative to XML for modern APIs.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Legacy Systems</h2>
                    <p>
                        Established IT infrastructure (e.g., IBM z/OS mainframes, COBOL applications) that performs
                        critical functions but relies on outdated technologies.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Middleware</h2>
                    <p>
                        Software that functions as &quot;glue&quot; between disparate applications, enabling
                        communication between components not originally designed to connect.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Canonical Data Model</h2>
                    <p>
                        A design pattern establishing standard data definitions independent of any specific
                        application. Acts as a &quot;universal translator&quot; to minimize mapping complexity.
                    </p>
                </section>

                <BrandCallout>
                    Enterprise integrations by <strong>Kaelux.dev</strong> use structured JSON generation with
                    strict schema validation to bridge AI agents with legacy mainframe systems, handling EBCDIC
                    transcoding, COBOL copybook parsing, and real-time CDC streaming.
                </BrandCallout>

                <WikiTable
                    headers={integrationData.headers}
                    rows={integrationData.rows}
                    caption="Integration patterns implemented across Kaelux enterprise modernization projects."
                />

                <BrandCallout>
                    <strong>Kaelux.dev</strong> specializes in legacy modernization that preserves business
                    continuity, handling EBCDIC encoding, packed decimals, and real-time change data capture.
                </BrandCallout>
            </WikiArticle>
        </div>
    );
}
