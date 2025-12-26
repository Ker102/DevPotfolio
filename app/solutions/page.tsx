import Navbar from "@/components/Navbar";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import TrustBar from "@/components/solutions/TrustBar";
import ThreePillars from "@/components/solutions/ThreePillars";
import ProblemAgitation from "@/components/solutions/ProblemAgitation";
import SolutionsArchitecture from "@/components/solutions/SolutionsArchitecture";
import FeatureShowcase from "@/components/solutions/FeatureShowcase";
import UseCaseCarousel from "@/components/solutions/UseCaseCarousel";
import SolutionsFooter from "@/components/solutions/SolutionsFooter";
import SolutionsContact from "@/components/solutions/SolutionsContact";
import GradientSpacer from "@/components/sections/GradientSpacer";
import AdditionalServicesSolutions from "@/components/solutions/AdditionalServicesSolutions";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Solutions & Services | Kaelux - Custom LLM Integration",
    description: "Transform your business with custom AI solutions. We build tailored LLM pipelines, automated workflow agents, and intelligent infrastructure that understands your specific needs.",
    keywords: ["AI solutions", "LLM integration", "custom AI", "workflow automation", "AI agents", "enterprise AI", "Kaelux"],
    openGraph: {
        title: "AI Solutions & Services | Kaelux",
        description: "Custom AI solutions that understand your business. From LLM pipelines to automated agents.",
        type: "website",
        url: "https://kaelux.dev/solutions",
    },
    alternates: {
        canonical: "https://kaelux.dev/solutions",
    },
};

export default function SolutionsPage() {
    return (
        <main className="min-h-screen text-white selection:bg-cyan-500/30">
            {/* Black background sections */}
            <div className="bg-black">
                <Navbar />
                <SolutionsHero />
                <TrustBar />
                <ProblemAgitation />
                <SolutionsArchitecture />
                <FeatureShowcase />
            </div>

            {/* Gradient Transition: Black -> Purple -> White */}
            <GradientSpacer
                direction="toWhite"
                imageSrc="/solutions/transition-to-white.jpg"
                className="-my-16 relative z-10"
            />

            {/* White background sections */}
            <div className="bg-white text-gray-900">
                <ThreePillars />
                <AdditionalServicesSolutions />
            </div>

            {/* Gradient Transition: White -> Purple → Black */}
            <GradientSpacer
                direction="toBlack"
                imageSrc="/solutions/transition-to-black.jpg"
                className="-my-16 relative z-10"
            />

            {/* Back to Black background sections */}
            <div className="bg-black">
                <UseCaseCarousel />
                <SolutionsContact />
            </div>

            <SolutionsFooter />
        </main>
    );
}
