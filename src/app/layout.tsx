import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://aleks-haran-portfolio.onrender.com"),
  title: "My Portfolio - Oleksandr Haran",
  description:
    "I’m a full-stack web developer specializing in React, Next.js, and Node.js. Explore my portfolio, recent projects, and contact options.",
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
    title: "Oleksandr Haran – Full-stack Developer",
    description:
      "Welcome to my portfolio! Here you can find my projects and contact information.",
    url: "https://aleks-haran-portfolio.onrender.com",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/deeooeyeg/image/upload/v1746993028/portfolio/2025-05-11_22-44_vpdtiz.jpg",
        width: 1200,
        height: 600,
        alt: "Oleksandr Haran – Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oleksandr Haran – Full-stack Developer",
    description:
      "Explore my portfolio built with React, Next.js, and Node.js. Custom, scalable web solutions.",
    images: [
      "https://res.cloudinary.com/deeooeyeg/image/upload/v1746993028/portfolio/2025-05-11_22-44_vpdtiz.jpg",
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
