import type { Metadata } from "next";
import LinksClient from "./LinksClient";

export const metadata: Metadata = {
  title: "Kaelux Links | Immersive Link-In-Bio",
  description:
    "Ultra modern link-in-bio built with motion and 3D. Explore Kaelux work, socials, labs, and instant contact in one neon surface.",
  alternates: {
    canonical: "https://kaelux.dev/links",
  },
};

export default function LinksPage() {
  return <LinksClient />;
}
