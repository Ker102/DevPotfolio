"use client";

import dynamic from "next/dynamic";

const CanvasWrapper = dynamic(
  () => import("@/components/lumina-flow/CanvasWrapper").then((mod) => mod.CanvasWrapper),
  { ssr: false }
);

export default function LinksClient() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden selection:bg-purple-500 selection:text-white">
      <CanvasWrapper />
    </main>
  );
}
