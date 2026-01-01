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

export const metadata = {
  title: "Asif Imam | Software Engineer",
  description:
    "Software Engineer - MERN Stack Specialist. Building fast, efficient, and reliable software.",
  // Basic Metadata
  metadataBase: new URL("https://ai.mazlis.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Asif Imam | Software Engineer",
    description:
      "MERN Stack Specialist building high-performance digital systems.",
    url: "https://ai.mazlis.com",
    siteName: "Asif Imam Portfolio",
    images: [
      {
        url: "/assets/web-ui.png", // Place an image named og-image.jpg in your /public folder
        width: 1200,
        height: 630,
        alt: "Asif Imam Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "/assets/web-ui.png",
    title: "Asif Imam | Software Engineer",
    description:
      "MERN Stack Specialist building high-performance digital systems.",
    images: ["/assets/web-ui.png"], // Same image as above
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
