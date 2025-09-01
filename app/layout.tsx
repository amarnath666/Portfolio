import type { Metadata } from "next";
import { Geist, Geist_Mono, Doto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amarnath Dhumal",
  description: "Amarnath Dhumal is a full stack developer building SaaS products and web apps.",
  openGraph: {
    title: "Amarnath Dhumal",
    description: "Amarnath Dhumal is a full stack developer building SaaS products and web apps.",
    url: "https://www.amarn.me", // Replace with your actual URL
    siteName: "Amarnath Dhumal",
    images: [
      {
        url: "/images/og.svg", 
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
    description: "Amarnath Dhumal is a full stack developer building SaaS products and web apps.",
    images: ["/images/meta.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Prefetch critical images */}
        <link rel="prefetch" as="image" href="/images/profile.jpg" />
        <link rel="prefetch" as="image" href="/images/ytnotes.png" />
        <link rel="prefetch" as="image" href="/images/sidekick.png" />
        <link rel="prefetch" as="image" href="/images/sketchsync.png" />
        {/* Prefetch video metadata */}
        <link rel="prefetch" as="video" href="/videos/YTNotes.mp4" />
        <link rel="prefetch" as="video" href="/videos/SideKick.mp4" />
        <link rel="prefetch" as="video" href="/videos/SketchSync.mp4" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}