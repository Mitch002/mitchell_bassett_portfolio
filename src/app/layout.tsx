import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mitchellbassett.com"),
  title: "Mitchell Bassett | Growth Marketing & Marketing Operations",
  description:
    "Growth marketing and marketing operations professional with experience in paid acquisition, CRM automation, attribution, and AI-assisted workflows.",
  keywords: [
    "growth marketing",
    "AI automation",
    "marketing operations",
    "CRM automation",
    "conversion tracking",
    "n8n",
    "growth engineering",
  ],
  openGraph: {
    title: "Mitchell Bassett | Growth Marketing & Marketing Operations",
    description:
      "Growth marketing, CRM automation, paid acquisition, and marketing operations experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-bg-deep text-white`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
