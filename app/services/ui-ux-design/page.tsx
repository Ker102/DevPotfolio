import type { Metadata } from "next";
import LegacyBridgePage from "@/components/legacy/LegacyBridgePage";

export const metadata: Metadata = {
    title: "UI/UX Services Retired | Kaelux",
    description:
        "Kaelux has retired standalone UI/UX service positioning. Explore ventures, engagements, and selective build partnerships instead.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function UiUxDesignPage() {
    return (
        <LegacyBridgePage
            label="Retired service route"
            title="Standalone UI/UX service pages are retired."
            description="Design remains part of how Kaelux builds ventures and selective partner products, but this route no longer sells UI/UX as a standalone agency package."
        />
    );
}
