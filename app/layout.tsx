import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { coreVentures } from "@/data/ventures";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaelux | Founder-Led AI Venture Studio",
  description: "Kaelux is the founder-led parent brand for AI ventures and product labs including MedAI, ViperMesh, PromptTriage, and Nullstate.",
  keywords: ["Kaelux", "AI venture studio", "AI ventures", "venture builder", "Kristofer Jussmann", "MedAI", "ViperMesh", "PromptTriage", "Nullstate"],
  authors: [{ name: "Kaelux" }],
  creator: "Kaelux",
  publisher: "Kaelux",
  metadataBase: new URL('https://kaelux.dev'),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/logo.png' },
    ],
  },
  openGraph: {
    title: "Kaelux | Founder-Led AI Venture Studio",
    description: "The parent brand for Kaelux AI ventures, divisions, and product labs.",
    type: "website",
    url: "https://kaelux.dev",
    siteName: "Kaelux",
    images: [
      {
        url: "https://kaelux.dev/kaelux-icon-v3.png",
        width: 512,
        height: 512,
          alt: "Kaelux - AI venture studio",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Kaelux | Founder-Led AI Venture Studio",
    description: "AI ventures, product labs, and selective partner builds by Kaelux.",
    images: ["https://kaelux.dev/kaelux-icon-v3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://kaelux.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const absoluteUrl = (href: string) =>
    href.startsWith("http") ? href : `https://kaelux.dev${href}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kaelux",
      "alternateName": ["Kaelux.dev", "Kaelux Ventures", "Kaelux Venture Studio"],
      "url": "https://kaelux.dev",
      "logo": "https://kaelux.dev/kaelux-icon-v3.png",
      "image": "https://kaelux.dev/kaelux-icon-v3.png",
      "description": "Kaelux is the founder-led parent brand for AI ventures and product labs including MedAI, ViperMesh, PromptTriage, and Nullstate.",
      "areaServed": "Worldwide",
      "knowsAbout": [
        "Artificial Intelligence",
        "AI Venture Building",
        "Medical AI Research Tooling",
        "Agentic Workflows",
        "Creative AI Tooling",
        "Prompt Engineering",
        "Infrastructure Security"
      ],
      "founder": {
        "@type": "Person",
        "name": "Kristofer Jussmann",
        "url": "https://github.com/Ker102"
      },
      "sameAs": [
        "https://github.com/Ker102",
        "https://instagram.com/kaelux.dev",
        "https://x.com/ker102dev",
        "https://www.linkedin.com/company/kaelux-dev/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kristofer Jussmann",
      "url": "https://github.com/Ker102",
      "jobTitle": "Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "Kaelux",
        "url": "https://kaelux.dev"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Kaelux ventures",
      "itemListElement": coreVentures.map((venture, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": venture.id === "medai" ? "Organization" : "SoftwareApplication",
          "name": venture.name,
          "url": absoluteUrl(venture.href),
          "description": venture.description,
          "applicationCategory": venture.category
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Kaelux",
      "url": "https://kaelux.dev",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://kaelux.dev/wiki?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
