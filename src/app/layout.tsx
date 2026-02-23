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
  title: "Mitchell Bassett | Growth Marketing & AI Automation Specialist",
  description:
    "I build end-to-end GTM systems: lifecycle, automation, reporting, and market-ready assets. Growth Marketing & AI Automation Specialist.",
  keywords: [
    "growth marketing",
    "AI automation",
    "GTM operations",
    "marketing ops",
    "n8n",
    "growth engineering",
  ],
  openGraph: {
    title: "Mitchell Bassett | Growth Marketing & AI Automation",
    description:
      "I build end-to-end GTM systems: lifecycle, automation, reporting, and market-ready assets.",
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
