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
import GradientTransitionSection from "@/components/solutions/GradientTransitionSection";
import AdditionalServicesSolutions from "@/components/solutions/AdditionalServicesSolutions";

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

            {/* Gradient Transition: Black → Purple → White */}
            <GradientTransitionSection direction="toWhite">
                {/* Spacer div for gradient visual */}
                <div className="h-64" />
            </GradientTransitionSection>

            {/* White background sections */}
            <div className="bg-white text-gray-900">
                <ThreePillars />
                <AdditionalServicesSolutions />
            </div>

            {/* Gradient Transition: White → Purple → Black */}
            <GradientTransitionSection direction="toBlack">
                {/* Spacer div for gradient visual */}
                <div className="h-64" />
            </GradientTransitionSection>

            {/* Back to Black background sections */}
            <div className="bg-black">
                <UseCaseCarousel />
                <SolutionsContact />
            </div>

            <SolutionsFooter />
        </main>
    );
}
