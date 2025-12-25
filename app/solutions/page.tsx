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
