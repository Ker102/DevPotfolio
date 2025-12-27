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
            <Script
                id={`jsonld-${slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                strategy="afterInteractive"
            />

            <article className="max-w-4xl">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <span>/</span>
                    <a href="/wiki" className="hover:text-white transition-colors">Wiki</a>
                    <span>/</span>
                    <span className="text-gray-400">{slug}</span>
                </nav>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-10">
                    {title}
                </h1>

                {/* Content */}
                <div className="space-y-6 text-gray-300 leading-relaxed">
                    {children}
                </div>
            </article>
        </>
    );
}
