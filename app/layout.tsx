import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pika Notion", 
  description: "I'm Pika, founder of Pika_Notion and a Notion Certified Admin. I design high-performance, interconnected workspaces that help agencies and creators scale without the chaos.",
  keywords: [
    "Notion Certified Admin", 
    "Notion Consultant", 
    "Agency OS", 
    "Notion Systems Architect", 
    "Notion for Creators", 
    "Property Management Notion", 
    "Business Infrastructure",
    "Scalable Workspaces"
  ],
  openGraph: {
    title: "Pika Notion | Notion Creator and Solutions Provider",
    description: "Transform your business with high-performance, interconnected Notion systems. Built for agencies and creators who need to scale.",
    url: "https://pikanotion.com",
    siteName: "Pika Notion",
    images: [
      {
        url: "/logo.png", 
        width: 800, 
        height: 800, // Matching your square dimensions
        alt: "Pika Notion Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ADDED: scroll-smooth for nice navigation animations
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}