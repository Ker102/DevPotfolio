import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaelux Dev Studio | Applied AI & Full-Stack Systems",
  description: "Kaelux Projects is an independent studio shipping AI copilots, immersive experiences, and production-ready web systems.",
  keywords: ["Kaelux", "developer", "portfolio", "projects", "web development", "Next.js", "React", "TypeScript", "AI workspace", "automation", "creative technology"],
  authors: [{ name: "Kaelux" }],
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
    title: "Kaelux Dev Studio | Applied AI & Full-Stack Systems",
    description: "Specialised in AI agents, realtime experiences, and performant web products.",
    type: "website",
    url: "https://kaelux.dev",
    siteName: "Kaelux Developer Page",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Kaelux Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaelux Dev Studio",
    description: "Custom AI workspaces and elite-level web builds.",
    images: ["/logo.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kaelux",
    "url": "https://kaelux.dev",
    "logo": "https://kaelux.dev/logo.png",
    "image": "https://kaelux.dev/logo.png",
    "description": "Independent studio engineering AI copilots, experiential design, and full-stack web systems.",
    "jobTitle": "Founder & Developer",
    "sameAs": [
      "https://github.com/Ker102"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
