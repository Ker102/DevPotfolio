import Navbar from "@/components/Navbar";
import OpenClawHero from "@/components/openclaw/OpenClawHero";
import OpenClawFeatures from "@/components/openclaw/OpenClawFeatures";
import OpenClawPricing from "@/components/openclaw/OpenClawPricing";
import OpenClawHowItWorks from "@/components/openclaw/OpenClawHowItWorks";
import OpenClawFAQ from "@/components/openclaw/OpenClawFAQ";
import OpenClawContact from "@/components/openclaw/OpenClawContact";
import AutomationImpact from "@/components/openclaw/AutomationImpact";
import SolutionsFooter from "@/components/solutions/SolutionsFooter";
import GradientSpacer from "@/components/sections/GradientSpacer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Business Automations | Kaelux",
    description: "Business automation engagements for companies inspired by Kaelux ventures. Kaelux scopes practical AI-enabled workflows, handoffs, reporting, and internal systems.",
    keywords: [
        "business automation",
        "AI business automation",
        "workflow automation",
        "internal tools automation",
        "agentic workflow automation",
        "Kaelux",
    ],
    openGraph: {
        title: "Business Automations | Kaelux",
        description: "Scoped business automations and AI-enabled internal workflows by Kaelux.",
        type: "website",
        url: "https://kaelux.dev/openclaw",
    },
    alternates: {
        canonical: "https://kaelux.dev/openclaw",
    },
};

export default function OpenClawPage() {
    return (
        <main className="min-h-screen text-white selection:bg-violet-500/30">
            {/* Black background sections */}
            <div className="bg-black">
                <Navbar />
                <OpenClawHero />
                <OpenClawFeatures />
                <AutomationImpact />
            </div>

            {/* Gradient Transition: Black → White */}
            <GradientSpacer
                direction="toWhite"
                imageSrc="/solutions/transition-to-white.jpg"
                className="-my-16 relative z-10"
            />

            {/* White background sections */}
            <div className="bg-white text-gray-900 relative z-10">
                <OpenClawHowItWorks />
                <OpenClawPricing />
                <OpenClawFAQ />
            </div>

            {/* Gradient Transition: White → Black */}
            <GradientSpacer
                direction="toBlack"
                imageSrc="/solutions/transition-to-black.jpg"
                className="-my-16 relative z-10"
            />

            {/* Black background - Contact & Footer */}
            <div className="bg-black">
                <OpenClawContact />
            </div>

            <SolutionsFooter />
        </main>
    );
}
