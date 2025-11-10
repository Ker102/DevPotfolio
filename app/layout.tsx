import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaelux | Developer Page",
  description: "Kaelux Projects, Official site for all projects built and hosted by Kaelux, Documentation and Contact.",
  keywords: ["Kaelux", "developer", "portfolio", "projects", "web development", "Next.js", "React", "TypeScript", "AI workspace"],
  authors: [{ name: "Kaelux" }],
  metadataBase: new URL('https://kaelux.dev'),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Kaelux | Developer Page",
    description: "Kaelux Projects, Official site for all projects built and hosted by Kaelux, Documentation and Contact.",
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
    title: "Kaelux | Developer Page",
    description: "Kaelux Projects, Official site for all projects built and hosted by Kaelux, Documentation and Contact.",
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
    "description": "Kaelux Projects, Official site for all projects built and hosted by Kaelux, Documentation and Contact.",
    "jobTitle": "Developer",
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
          <ScrollProgress />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



