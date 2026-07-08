export interface EngagementTrack {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    bestFor: string;
    outcomes: string[];
    cta: string;
    href: string;
    highlighted?: boolean;
}

export const engagementTracks: EngagementTrack[] = [
    {
        id: "investors",
        eyebrow: "Capital and strategic backing",
        title: "Investors and strategic partners",
        description:
            "For angels, accelerators, funds, and strategic operators who want a clear view of the Kaelux venture pipeline and founder thesis.",
        bestFor: "Investors evaluating Kaelux as a founder-led AI venture studio and holding company.",
        outcomes: [
            "Founder and venture thesis discussion",
            "Overview of MedAI, ViperMesh, PromptTriage, and Nullstate",
            "Strategic partnership or funding-fit conversation",
        ],
        cta: "Start investor conversation",
        href: "/#contact",
        highlighted: true,
    },
    {
        id: "venture-partners",
        eyebrow: "Co-build and distribution",
        title: "Venture and product partners",
        description:
            "For operators, research groups, creators, and companies that can help a Kaelux venture reach the right market, dataset, workflow, or community.",
        bestFor: "Teams with domain access, distribution, research context, or product feedback that can strengthen a venture.",
        outcomes: [
            "Venture-specific collaboration scoping",
            "Pilot or early-user pathway",
            "Technical and market feedback loop",
        ],
        cta: "Discuss a venture partnership",
        href: "/#ventures",
    },
    {
        id: "similar-builds",
        eyebrow: "Selective build partnerships",
        title: "Build something similar",
        description:
            "For businesses inspired by a Kaelux venture that want a serious technical partner to build a related internal system or product line.",
        bestFor: "Companies that need a founder-level build partner, not a commodity agency engagement.",
        outcomes: [
            "Problem and opportunity mapping",
            "Prototype-to-production build plan",
            "Architecture, delivery, and launch support",
        ],
        cta: "Scope a build partnership",
        href: "/#contact",
    },
    {
        id: "business-automations",
        eyebrow: "Secondary service offer",
        title: "Business automations",
        description:
            "For businesses that want focused automation around repeated workflows, internal handoffs, reporting, research, or operational support.",
        bestFor: "Teams with a specific workflow worth automating, not a vague request to transform everything at once.",
        outcomes: [
            "Workflow and handoff mapping",
            "Automation architecture and integration scope",
            "Prototype, implementation, or maintenance plan where appropriate",
        ],
        cta: "Explore automations",
        href: "/openclaw",
    },
];
