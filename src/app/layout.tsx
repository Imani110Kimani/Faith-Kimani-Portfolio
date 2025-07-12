
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faith Muthoni | Portfolio",
  description:
    "Aspiring IT professional with a strong foundation in IT support, software development, and leadership through diverse projects and technical roles.",
  keywords: [
    "Faith Muthoni",
    "Portfolio",
    "Software Developer",
    "IT Support",
    "React",
    "Django",
    "Kenya",
    "Cloud",
    "Python",
    "Java",
    "Projects",
    "Blog",
  ],
  authors: [{ name: "Faith Muthoni", url: "https://faithmuthoni.dev" }],
  creator: "Faith Muthoni",
  openGraph: {
    title: "Faith Muthoni | Portfolio",
    description:
      "Aspiring IT professional with a strong foundation in IT support, software development, and leadership through diverse projects and technical roles.",
    url: "https://faithmuthoni.dev",
    siteName: "Faith Muthoni Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Muthoni | Portfolio",
    description:
      "Aspiring IT professional with a strong foundation in IT support, software development, and leadership through diverse projects and technical roles.",
    creator: "@faithmuthoni",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Faith Muthoni',
              url: 'https://faithmuthoni.dev',
              sameAs: [
                'https://www.linkedin.com/in/faithkimani415',
                'https://github.com/faithkimani415',
              ],
              jobTitle: 'Aspiring IT Professional',
              email: 'faithkimani415@gmail.com',
              telephone: '+254768600903',
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'KCA University',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'KE',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-white dark:bg-stone-950`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="flex-1 w-full mx-auto max-w-5xl px-2 sm:px-4 md:px-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
