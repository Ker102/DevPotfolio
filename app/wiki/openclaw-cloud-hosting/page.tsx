import { Metadata } from "next";
import Link from "next/link";
import { WikiArticle, BrandCallout } from "@/components/wiki";

export const metadata: Metadata = {
    title: "Archived OpenClaw Deployment Note | Kaelux Wiki",
    description:
        "This archived route is kept for compatibility. Kaelux no longer presents OpenClaw hosting as an active service offer.",
    robots: {
        index: false,
        follow: true,
    },
    alternates: {
        canonical: "https://kaelux.dev/wiki/openclaw-cloud-hosting",
    },
};

export default function OpenClawCloudHostingPage() {
    return (
        <div className="container mx-auto max-w-4xl px-6 py-24">
            <WikiArticle
                title="Archived OpenClaw deployment note"
                description="This page is kept so old links do not break, but it is no longer an active Kaelux service page."
                slug="openclaw-cloud-hosting"
            >
                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-semibold text-white">Current Positioning</h2>
                    <p>
                        Kaelux no longer advertises a managed OpenClaw hosting offer. The remaining service-style
                        path on the site is business automations: focused workflow builds for teams that need
                        repeated operational work turned into practical systems.
                    </p>
                </section>

                <BrandCallout>
                    For current work, use the{" "}
                    <Link href="/openclaw" className="text-violet-400 underline hover:text-violet-300">
                        Business Automations
                    </Link>{" "}
                    page or start from{" "}
                    <Link href="/pricing" className="text-violet-400 underline hover:text-violet-300">
                        Engagements
                    </Link>
                    .
                </BrandCallout>
            </WikiArticle>
        </div>
    );
}
