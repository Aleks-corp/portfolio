import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio - Oleksandr Haran",
  description:
    "Welcome to my portfolio! Here you can find my projects and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Welcome to my portfolio! Here you can find my projects and contact information."
        />
        <meta
          name="keywords"
          content="portfolio, web developer, react, node, typescript, frontend, backend"
        />
        <meta name="author" content="Oleksandr Haran" />
        <meta
          property="og:title"
          content="My Portfolio - My Portfolio - Oleksandr Haran"
        />
        <meta
          property="og:description"
          content="Welcome to my portfolio! Here you can find my projects and contact information."
        />
        <meta
          property="og:image"
          content="https://myportfolio.com/og-image.jpg"
        />
        <meta property="og:url" content="https://myportfolio.com" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="/assets/favicon-light.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/assets/favicon-dark.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>

      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
