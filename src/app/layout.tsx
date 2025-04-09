import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "My Portfolio - Oleksandr Haran",
  description:
    "Welcome to my portfolio! Here you can find my projects and contact information.",
  authors: [{ name: "Oleksandr Haran" }],
  keywords: [
    "portfolio",
    "web developer",
    "react",
    "node",
    "typescript",
    "frontend",
    "backend",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "My Portfolio - Oleksandr Haran",
    description:
      "Welcome to my portfolio! Here you can find my projects and contact information.",
    url: "https://myportfolio.vite.dev/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Portfolio",
      },
    ],
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
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
