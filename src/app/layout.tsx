import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Attentia | AI-Powered Driver Safety",
  description:
    "Attentia uses advanced AI to detect distracted driving in real-time, alerting drivers before accidents happen. Professional-grade safety for just $165.",
  keywords: [
    "driver safety",
    "distracted driving",
    "AI monitoring",
    "car safety device",
    "teen driver safety",
    "fleet management",
  ],
  authors: [{ name: "Attentia" }],
  openGraph: {
    title: "Attentia | AI-Powered Driver Safety",
    description:
      "Advanced AI to detect distracted driving in real-time. Professional-grade safety for just $165.",
    url: "https://attentiadrive.com",
    siteName: "Attentia",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attentia | AI-Powered Driver Safety",
    description:
      "Advanced AI to detect distracted driving in real-time. Professional-grade safety for just $165.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
