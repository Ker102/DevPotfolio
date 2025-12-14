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

export default function SolutionsPage() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-cyan-500/30">
            <Navbar />
            <SolutionsHero />
            <TrustBar />
            <ProblemAgitation />
            <SolutionsArchitecture />
            <ThreePillars />
            <FeatureShowcase />
            <UseCaseCarousel />
            <SolutionsContact />
            <SolutionsFooter />
        </main>
    );
}
