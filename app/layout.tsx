import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/lib/theme-provider";
import Header from "@/components/ui/header";
import { CSPostHogProvider } from "./providers/posthog-provider";
import PostHogPageView from "./providers/posthog-pageview";
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amarn.me"),
  title: "Amarnath Dhumal - Design Engineer",
  description:
    "I'm Amarnath Dhumal, a Design Engineer and Developer with an eye for design, building SaaS products and web apps.",
  openGraph: {
    title: "Amarnath Dhumal - Design Engineer",
    description:
      "I'm Amarnath Dhumal, a Design Engineer and Developer with an eye for design, building SaaS products and web apps.",
    url: "https://www.amarn.me",
    siteName: "Amarnath Dhumal",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 675, // Square aspect ratio
        alt: "Amarnath Dhumal - Design Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarnath Dhumal - Design Engineer",
    description:
      "I'm Amarnath Dhumal, a Design Engineer and Developer with an eye for design, building SaaS products and web apps.",
    images: ["/images/og.png"],
  },
  icons: {
    icon: "/favicon.png",
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
        {/* Prefetch critical images */}
        <link rel="prefetch" as="image" href="/images/profile.jpg" />
      </head>
      <body
        className={` ${outfit.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CSPostHogProvider>
            <PostHogPageView />
            <Header />
            {children}
            <Analytics />
          </CSPostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
