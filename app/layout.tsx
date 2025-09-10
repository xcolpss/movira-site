// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Make sure these exist (you already placed them):
 *   app/icon.png
 *   app/apple-icon.png
 * Recommended: 512x512 PNG.
 */
export const metadata: Metadata = {
  title: "Movira Studio",
  description: "Creative studio for film, VFX, CGI, and design.",
  // Keep icons explicit so legacy favicons are ignored
  icons: {
    icon: "/icon.png?v=6",
    shortcut: "/icon.png?v=6",
    apple: "/apple-icon.png?v=6",
  },
};

// Fixes: "Unsupported metadata themeColor ... move it to viewport export"
export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="top">
      <head>
        {/* Extra explicit links for stubborn caches/browsers */}
        <link rel="icon" href="/icon.png?v=6" type="image/png" />
        <link rel="shortcut icon" href="/icon.png?v=6" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=6" />
        {/* theme-color now handled by `viewport` above; no meta tag needed */}
      </head>
      <body className="bg-ink text-bg antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
