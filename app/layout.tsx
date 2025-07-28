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
        url: "/images/meta.png", 
        width: 1200,
        height: 1200, // Square aspect ratio
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}