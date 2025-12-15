import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/lib/theme-provider";
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amarnath Dhumal",
  description:
    "Amarnath Dhumal is a full stack developer building SaaS products and web apps.",
  openGraph: {
    title: "Amarnath Dhumal",
    description:
      "Amarnath Dhumal is a full stack developer building SaaS products and web apps.",
    url: "https://www.amarn.me", // Replace with your actual URL
    siteName: "Amarnath Dhumal",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 675, // Square aspect ratio
        alt: "Amarnath Dhumal - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarnath Dhumal",
    description:
      "Amarnath Dhumal is a full stack developer building SaaS products and web apps.",
    images: ["/images/og.png"],
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
        className={` ${outfit.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem

        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
