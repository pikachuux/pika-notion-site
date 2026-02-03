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
  // Title shows up as the clickable link in Google
  title: "Pika Notion | Custom Notion Solutions & Scalable Templates", 
  
  // Description is the text below the link in Google
  description: "I'm Pika, founder of Pika Notion and a Notion Certified Admin. I design custom Notion solutions and high-performance workspaces for agencies and creators.",
  
  // Keywords help search engines categorize your site
  keywords: [
    "Notion custom solutions", 
    "Notion templates", 
    "Notion Certified Admin", 
    "Agency OS", 
    "Notion Consultant", 
    "Custom Workspace Design"
  ],
  
  openGraph: {
    title: "Pika Notion | Engineering-Grade Notion Systems",
    description: "Get custom Notion solutions built by a certified expert. Scalable workspaces for high-performance businesses.",
    url: "https://pikanotion.com",
    siteName: "Pika Notion",
    images: [{ url: "/logo.png", width: 800, height: 800 }],
    locale: "en_US",
    type: "website",
  },

  // --- THIS FIXES THE GLOBE ICON ---
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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