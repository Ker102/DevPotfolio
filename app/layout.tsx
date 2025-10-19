import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Portfolio | Your Name",
  description: "Modern developer portfolio showcasing projects, skills, and expertise in web development",
  keywords: ["developer", "portfolio", "web development", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Developer Portfolio | Your Name",
    description: "Modern developer portfolio showcasing projects, skills, and expertise",
    type: "website",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio | Your Name",
    description: "Modern developer portfolio showcasing projects, skills, and expertise",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



