import type { Metadata } from "next";
import LegacyBridgePage from "@/components/legacy/LegacyBridgePage";

export const metadata: Metadata = {
    title: "Kaelux Ventures and Engagements",
    description:
        "This legacy solutions route now points to Kaelux ventures, engagement paths, and business automations.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function SolutionsPage() {
    return (
        <LegacyBridgePage
            label="Legacy route"
            title="Kaelux no longer sells a generic solutions menu."
            description="The public site has moved to a holding-studio model. Use this page as a bridge to the venture directory, engagement paths, and the remaining business automation offer."
        />
    );
}
