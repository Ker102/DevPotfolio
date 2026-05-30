import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type BridgeAction = {
    title: string;
    description: string;
    href: string;
};

const bridgeActions: BridgeAction[] = [
    {
        title: "Explore the ventures",
        description: "See MedAI, ViperMesh, PromptTriage, Nullstate, and the supporting Kaelux labs.",
        href: "/#ventures",
    },
    {
        title: "Review engagement paths",
        description: "Find the right route for investors, strategic partners, selective builds, or agent setup.",
        href: "/pricing",
    },
    {
        title: "Personal AI agent setup",
        description: "Configure OpenClaw, Hermes, NanoClaw, or another practical agent stack for your workspace.",
        href: "/openclaw",
    },
];

type LegacyBridgePageProps = {
    label: string;
    title: string;
    description: string;
};

export default function LegacyBridgePage({ label, title, description }: LegacyBridgePageProps) {
    return (
        <main className="min-h-screen bg-black px-6 py-32 text-white">
            <div className="container mx-auto max-w-5xl">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/45">
                        {label}
                    </p>
                    <h1 className="text-5xl font-semibold tracking-[-0.055em] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 md:text-7xl">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
                        {description}
                    </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {bridgeActions.map((action) => (
                        <Link
                            key={action.title}
                            href={action.href}
                            className="group rounded-[26px] border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/22 hover:bg-white/[0.055]"
                        >
                            <h2 className="text-xl font-semibold text-white">{action.title}</h2>
                            <p className="mt-3 text-sm leading-6 text-gray-400">{action.description}</p>
                            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3">
                                Continue
                                <FaArrowRight className="text-xs text-white/55 group-hover:text-white" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
