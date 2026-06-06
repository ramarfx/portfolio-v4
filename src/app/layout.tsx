import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "./aero.css";
import "7.css/dist/gui/window.css";
import StartupLoader from "@/components/startup-loader";
import { WindowProvider } from "@/context/window-manager";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://ramarfx.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ramadina Al Muzthazam — Portfolio",
    template: "%s | Ramadina",
  },
  description:
    "Portfolio of Ramadina Al Muzthazam — a passionate Full Stack Developer building modern web experiences with a nostalgic Windows Vista Aero twist.",
  keywords: [
    "Ramadina",
    "Ramadina Al Muzthazam",
    "ramarfx",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Ramadina Al Muzthazam", url: BASE_URL }],
  creator: "Ramadina Al Muzthazam",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Ramadina Al Muzthazam — Portfolio",
    description:
      "Portfolio of Ramadina Al Muzthazam — a passionate Full Stack Developer building modern web experiences with a nostalgic Windows Vista Aero twist.",
    siteName: "Ramadina Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ramadina Al Muzthazam — Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramadina Al Muzthazam — Portfolio",
    description:
      "Portfolio of Ramadina Al Muzthazam — a passionate Full Stack Developer building modern web experiences with a nostalgic Windows Vista Aero twist.",
    images: ["/og-image.png"],
    creator: "@ramarfx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body
        className="relative w-full min-h-screen overflow-x-hidden"
        style={{
          fontFamily: "'Trebuchet MS', Tahoma, Verdana, sans-serif",
          fontSize: 13,
          color: "#1a3a1a",
        }}>
        <WindowProvider>
          <div className="fixed inset-0 -z-10">
            <Image
              src="/img/background-2.jpg"
              alt="bg"
              fill
              className="object-cover"
            />
          </div>
          <StartupLoader />

          {children}

          {/* CRT Overlays */}
          <div className="crt-vignette" />
          <div className="crt-overlay crt-flicker" />
        </WindowProvider>
        <Analytics />
      </body>
    </html>
  );
}
