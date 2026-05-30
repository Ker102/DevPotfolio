import type { Metadata } from "next";
import LegacyBridgePage from "@/components/legacy/LegacyBridgePage";

export const metadata: Metadata = {
    title: "Full-Stack Services Retired | Kaelux",
    description:
        "Kaelux has retired standalone full-stack service positioning. Explore ventures, engagements, and selective build partnerships instead.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function FullStackDevelopmentPage() {
    return (
        <LegacyBridgePage
            label="Retired service route"
            title="Standalone full-stack service pages are retired."
            description="Software development remains central to Kaelux, but the public site now routes serious build interest through venture partnerships and selective engagement paths."
        />
    );
}
