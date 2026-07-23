import Navbar from "@/components/Navbar";
import SolutionsFooter from "@/components/solutions/SolutionsFooter";
import GradientSpacer from "@/components/sections/GradientSpacer";
import PricingPageContent from "@/components/pricing/PricingPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engagements | Kaelux AI Research Lab",
    description:
        "Engagement paths for research collaborators, investors, venture partners, selective builds, and secure business automations with Kaelux.",
    keywords: [
        "Kaelux engagements",
        "AI research lab",
        "ML engineering",
        "AI venture partners",
        "Kaelux investors",
        "secure business automation",
    ],
    openGraph: {
        title: "Engagements | Kaelux",
        description: "Investor, partner, venture, and selective build engagement paths for Kaelux.",
        type: "website",
        url: "https://kaelux.dev/pricing",
    },
    alternates: {
        canonical: "https://kaelux.dev/pricing",
    },
};

export default function PricingPage() {
    return (
        <main className="min-h-screen text-white selection:bg-violet-500/30">
            <div className="bg-black">
                <Navbar />
                <PricingPageContent />
            </div>

            <GradientSpacer
                direction="toWhite"
                imageSrc="/solutions/transition-to-white.jpg"
                className="-my-16 relative z-10"
            />

            <div className="bg-white text-gray-900 relative z-10" id="contact">
                <PricingContact />
            </div>

            <GradientSpacer
                direction="toBlack"
                imageSrc="/solutions/transition-to-black.jpg"
                className="-my-16 relative z-10"
            />

            <SolutionsFooter />
        </main>
    );
}

function PricingContact() {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-400 mb-6">
                    Start the Right Conversation
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Send context on the venture, partnership, investment, or automation you want to discuss.
                    The next step is a focused founder-led conversation, not a generic quote.
                </p>
                <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white text-lg font-semibold hover:bg-black transition-colors duration-300"
                >
                    Contact Kaelux →
                </a>
            </div>
        </section>
    );
}
