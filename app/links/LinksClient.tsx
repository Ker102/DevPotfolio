"use client";

import { CanvasWrapper } from "@/components/lumina-flow/CanvasWrapper";

export default function LinksClient() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden selection:bg-purple-500 selection:text-white">
      <CanvasWrapper />
    </main>
  );
}
