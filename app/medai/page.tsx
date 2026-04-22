import type { Metadata } from "next";
import MedAIPageClient from "./MedAIPageClient";

export const metadata: Metadata = {
    title: "Kaelux MedAI | AI Infrastructure and Tooling for Medical Research",
    description:
        "Kaelux MedAI is the medical-research division of Kaelux, focused on secure AI infrastructure, research tooling, DevSecOps, and MLOps for retinal and medical imaging teams.",
    keywords: [
        "Kaelux MedAI",
        "medical AI infrastructure",
        "retinal imaging infrastructure",
        "ophthalmology AI tooling",
        "medical research tooling",
        "medical AI DevSecOps",
        "medical AI MLOps",
        "retina research engineering partner",
        "medical imaging infrastructure",
    ],
    authors: [{ name: "Kaelux" }],
    creator: "Kaelux",
    publisher: "Kaelux",
    openGraph: {
        title: "Kaelux MedAI | AI Infrastructure and Tooling for Medical Research",
        description:
            "Kaelux MedAI builds secure AI infrastructure and research tooling for retinal and medical imaging teams.",
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
            "Retina-first medical research infrastructure, secure tooling, DevSecOps, and MLOps from Kaelux MedAI.",
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
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Kaelux MedAI",
            url: "https://kaelux.dev/medai",
            description:
                "Official page for Kaelux MedAI, the medical-research engineering division of Kaelux.",
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
                    "Kaelux MedAI is a medical-research-focused engineering division that builds secure AI infrastructure, research tooling, DevSecOps, and MLOps systems for retinal and medical imaging teams.",
                knowsAbout: [
                    "Retinal Imaging",
                    "Ophthalmology Research",
                    "Medical Imaging Infrastructure",
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
