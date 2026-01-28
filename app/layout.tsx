import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Stop using Notion like a glorified notepad. We build scalable, interconnected workspaces for agencies, home builders, and creators. Notion Certified.",
  keywords: ["Notion Templates", "Notion Certified Admin", "Agency OS", "Home Builder Software", "Notion Consultant", "Engineering Systems"],
  openGraph: {
    title: "Pika Notion",
    description: "Scalable Notion workspaces for high-performance businesses.",
    url: "https://pikanotion.com",
    siteName: "Pika Notion",
    images: [
      {
        url: "/logo.png", // Ensure you renamed "Pika logo full.png" to "logo.png" in your public folder!
        width: 800,
        height: 600,
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
      </body>
    </html>
  );
}