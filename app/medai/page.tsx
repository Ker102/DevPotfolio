import type { Metadata } from "next";
import MedAIPageClient from "./MedAIPageClient";

export const metadata: Metadata = {
    title: "Kaelux MedAI | AI Infrastructure and Tooling for Medical Research",
    description:
        "Kaelux MedAI is the medical-research division of Kaelux, focused on secure AI infrastructure, research tooling, DevSecOps, and MLOps for retina, hearing, and medical imaging teams.",
    keywords: [
        "Kaelux MedAI",
        "medical AI infrastructure",
        "retinal imaging infrastructure",
        "ophthalmology AI tooling",
        "hearing research infrastructure",
        "tinnitus AI tooling",
        "audiology research engineering",
        "medical research tooling",
        "medical AI DevSecOps",
        "medical AI MLOps",
        "retina research engineering partner",
        "hearing research engineering partner",
        "medical imaging infrastructure",
    ],
    authors: [{ name: "Kaelux" }],
    creator: "Kaelux",
    publisher: "Kaelux",
    openGraph: {
        title: "Kaelux MedAI | AI Infrastructure and Tooling for Medical Research",
        description:
            "Kaelux MedAI builds secure AI infrastructure and research tooling for retina, hearing, tinnitus, and medical imaging teams.",
        type: "website",
        url: "https://kaelux.dev/medai",
        siteName: "Kaelux",
        images: [
            {
                url: "https://kaelux.dev/kaelux-icon-v3.png",
                width: 512,
                height: 512,
                alt: "Kaelux MedAI",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Kaelux MedAI | AI Infrastructure and Tooling for Medical Research",
        description:
            "Medical research infrastructure, secure tooling, DevSecOps, and MLOps for retina and hearing-focused teams from Kaelux MedAI.",
        images: ["https://kaelux.dev/kaelux-icon-v3.png"],
    },
    alternates: {
        canonical: "https://kaelux.dev/medai",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function MedAIPage() {
    const faqEntities = [
        {
            "@type": "Question",
            name: "What is Kaelux MedAI?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux MedAI is the medical-research engineering division of Kaelux, focused on secure AI infrastructure, research tooling, DevSecOps, and MLOps for retina, hearing, and medical imaging teams.",
            },
        },
        {
            "@type": "Question",
            name: "What are the current focus areas?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The current focus areas are retina and ophthalmology-related work together with hearing and tinnitus research. Cancer imaging and other disease areas are part of the longer-term roadmap.",
            },
        },
        {
            "@type": "Question",
            name: "What kind of collaboration is Kaelux MedAI looking for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux MedAI is looking for labs, universities, hospitals, and foundations that need a technical infra and tooling partner for research collaborations, grant-funded infrastructure, or open-source and early-stage engineering work.",
            },
        },
        {
            "@type": "Question",
            name: "Does Kaelux MedAI provide clinical diagnosis systems?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Kaelux MedAI is positioned around research infrastructure, secure tooling, workflow engineering, DevSecOps, and MLOps rather than clinical decision-making or patient-facing diagnosis.",
            },
        },
    ];

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Kaelux MedAI",
            url: "https://kaelux.dev/medai",
            description:
                "Official page for Kaelux MedAI, the medical-research engineering division of Kaelux.",
            datePublished: "2026-04-22",
            dateModified: "2026-04-22",
            mainEntity: {
                "@type": "Organization",
                name: "Kaelux MedAI",
                url: "https://kaelux.dev/medai",
                parentOrganization: {
                    "@type": "Organization",
                    name: "Kaelux",
                    url: "https://kaelux.dev",
                },
                description:
                    "Kaelux MedAI is a medical-research-focused engineering division that builds secure AI infrastructure, research tooling, DevSecOps, and MLOps systems for retina, hearing, tinnitus, and medical imaging teams.",
                knowsAbout: [
                    "Retinal Imaging",
                    "Ophthalmology Research",
                    "Audiology Research",
                    "Hearing Research",
                    "Tinnitus Research",
                    "Medical Imaging Infrastructure",
                    "Cancer Imaging",
                    "MLOps",
                    "DevSecOps",
                    "AI Infrastructure",
                    "Research Tooling",
                    "Medical AI Engineering",
                ],
                email: "business@kaelux.dev",
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://kaelux.dev",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "MedAI",
                    item: "https://kaelux.dev/medai",
                },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqEntities,
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MedAIPageClient />
        </>
    );
}
