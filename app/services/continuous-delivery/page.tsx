import type { Metadata } from "next";
import LegacyBridgePage from "@/components/legacy/LegacyBridgePage";

export const metadata: Metadata = {
    title: "Continuous Delivery Services Retired | Kaelux",
    description:
        "Kaelux has retired standalone continuous delivery service positioning. Explore ventures, engagements, and selective build partnerships instead.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function ContinuousDeliveryPage() {
    return (
        <LegacyBridgePage
            label="Retired service route"
            title="Standalone delivery service pages are retired."
            description="Delivery discipline still matters inside Kaelux ventures and partner builds, but this route no longer advertises CI/CD as a generic agency service."
        />
    );
}
