import type { Metadata } from "next";
import LegacyBridgePage from "@/components/legacy/LegacyBridgePage";

export const metadata: Metadata = {
    title: "Cloud Infrastructure Services Retired | Kaelux",
    description:
        "Kaelux has retired standalone cloud infrastructure service positioning. Explore ventures, engagements, and selective build partnerships instead.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function CloudInfrastructurePage() {
    return (
        <LegacyBridgePage
            label="Retired service route"
            title="Standalone cloud infrastructure service pages are retired."
            description="Infrastructure remains part of the Kaelux build discipline, but the parent site no longer markets generic cloud work as a horizontal service package."
        />
    );
}
