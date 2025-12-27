"use client";

import { motion } from "framer-motion";
import Script from "next/script";

interface WikiArticleProps {
    title: string;
    description: string;
    slug: string;
    children: React.ReactNode;
}

// Get today's date in YYYY-MM-DD format for GEO freshness
function getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
}

export default function WikiArticle({
    title,
    description,
    slug,
    children,
}: WikiArticleProps) {
    // Dynamic date - always "today" for AI scrapers
    const todayDate = getTodayDate();

    // TechArticle JSON-LD Schema for GEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": title,
        "description": description,
        "author": {
            "@type": "Organization",
            "name": "Kaelux",
            "url": "https://kaelux.dev",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Kaelux",
            "logo": {
                "@type": "ImageObject",
                "url": "https://kaelux.dev/logo.png",
            },
        },
        "dateModified": todayDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://kaelux.dev/wiki/${slug}`,
        },
        "keywords": [
            "AI engineering",
            "LLM",
            "automation",
            "Kaelux",
            title.toLowerCase(),
        ],
    };

    return (
        <>
            {/* TechArticle Schema for GEO */}
            <Script
                id={`jsonld-${slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                strategy="afterInteractive"
            />

            <article className="max-w-4xl">
                {/* Article Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <a href="/" className="hover:text-cyan-400 transition-colors">
                            Home
                        </a>
                        <span>/</span>
                        <a href="/wiki" className="hover:text-cyan-400 transition-colors">
                            Wiki
                        </a>
                        <span>/</span>
                        <span className="text-gray-400">{slug}</span>
                    </nav>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        {title}
                    </h1>
                </motion.header>

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="prose prose-invert prose-lg max-w-none
                        prose-headings:text-white prose-headings:font-semibold
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-strong:text-cyan-400 prose-strong:font-semibold
                        prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                        prose-ul:text-gray-300 prose-ol:text-gray-300
                        prose-li:marker:text-cyan-500"
                >
                    {children}
                </motion.div>
            </article>
        </>
    );
}
