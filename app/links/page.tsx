import type { Metadata } from "next";
import LinksExperience from "@/components/LinksExperience";

export const metadata: Metadata = {
  title: "Kaelux Links | Immersive Link-In-Bio",
  description:
    "Ultra modern link-in-bio built with motion and 3D. Explore Kaelux work, socials, labs, and instant contact in one neon surface.",
  alternates: {
    canonical: "https://kaelux.dev/links",
  },
};

export default function LinksPage() {
  return <LinksExperience />;
}
