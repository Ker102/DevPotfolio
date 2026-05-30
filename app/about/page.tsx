import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About Kaelux | AI Venture Studio and Holding Brand",
    description:
        "Learn what Kaelux is: the founder-led parent brand for AI ventures and product labs founded by Kristofer Jussmann in Estonia.",
    keywords: [
        "Kaelux",
        "Kaelux.dev",
        "Kaelux ventures",
        "AI venture studio",
        "AI holding company",
        "AI product lab",
        "Kristofer Jussmann",
        "who is Kaelux",
        "about Kaelux",
        "MedAI",
        "ViperMesh",
        "PromptTriage",
        "Nullstate",
    ],
    authors: [{ name: "Kaelux" }, { name: "Kristofer Jussmann" }],
    creator: "Kaelux",
    publisher: "Kaelux",
    openGraph: {
        title: "About Kaelux | AI Venture Studio and Holding Brand",
        description:
            "Kaelux is a founder-led parent brand for AI ventures, divisions, and product labs.",
        type: "website",
        url: "https://kaelux.dev/about",
        siteName: "Kaelux",
        images: [
            {
                url: "https://kaelux.dev/kaelux-icon-v3.png",
                width: 512,
                height: 512,
                alt: "Kaelux venture studio logo",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "About Kaelux | AI Venture Studio and Holding Brand",
        description:
            "Kaelux is the parent brand for AI ventures and product labs by Kristofer Jussmann.",
        images: ["https://kaelux.dev/kaelux-icon-v3.png"],
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
    alternates: {
        canonical: "https://kaelux.dev/about",
    },
};

export default function AboutPage() {
    const faqEntities = [
        {
            "@type": "Question",
            name: "What is Kaelux?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux is the founder-led parent brand for AI ventures, divisions, and product labs including MedAI, ViperMesh, PromptTriage, and Nullstate.",
            },
        },
        {
            "@type": "Question",
            name: "Who founded Kaelux?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux was founded by Kristofer Jussmann, an Estonia-based builder focused on AI ventures, agentic systems, and product labs.",
            },
        },
        {
            "@type": "Question",
            name: "What kind of work does Kaelux do?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux builds and organizes ventures such as MedAI, ViperMesh, PromptTriage, and Nullstate, while remaining open to selective investor, partner, and build conversations.",
            },
        },
        {
            "@type": "Question",
            name: "Is Kaelux a software company or a content channel?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux is a venture-building parent brand and product builder, not a generic portfolio page or media channel.",
            },
        },
    ];

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Kaelux",
            url: "https://kaelux.dev/about",
            description:
                "About page for Kaelux, the AI venture studio and holding brand founded by Kristofer Jussmann.",
            mainEntity: {
                "@type": "Organization",
                name: "Kaelux",
                alternateName: [
                    "Kaelux.dev",
                    "Kaelux Ventures",
                    "Kaelux Venture Studio",
                ],
                url: "https://kaelux.dev",
                logo: "https://kaelux.dev/kaelux-icon-v3.png",
                description:
                    "Kaelux is the founder-led parent brand for AI ventures and product labs including MedAI, ViperMesh, PromptTriage, and Nullstate.",
                areaServed: "Worldwide",
                knowsAbout: [
                    "Artificial Intelligence",
                    "Large Language Models (LLMs)",
                    "AI Venture Building",
                    "Medical AI Research Tooling",
                    "Creative AI Tooling",
                    "Prompt Engineering",
                    "Infrastructure Security",
                    "Agentic Systems",
                ],
                founder: {
                    "@type": "Person",
                    name: "Kristofer Jussmann",
                    jobTitle: "Founder",
                    url: "https://github.com/Ker102",
                },
                sameAs: [
                    "https://github.com/Ker102",
                    "https://instagram.com/kaelux.dev",
                    "https://x.com/ker102dev",
                    "https://www.linkedin.com/company/kaelux-dev/",
                ],
                mainEntityOfPage: "https://kaelux.dev/about",
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
                    name: "About",
                    item: "https://kaelux.dev/about",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
            <AboutPageClient />
        </>
    );
}
