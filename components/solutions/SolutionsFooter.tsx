"use client";

import Link from "next/link";

export default function SolutionsFooter() {
    return (
        <section className="relative py-24 px-6 bg-black overflow-hidden text-center">

            {/* Background Glows */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative z-10 container mx-auto max-w-4xl">




                <div className="mt-16 flex justify-center gap-8 text-sm text-gray-500 uppercase tracking-widest">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="mailto:contact@kaelux.dev" className="hover:text-white transition-colors">Contact</Link>
                    <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
                </div>
            </div>
        </section>
    );
}
