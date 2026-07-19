import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gunamythicart.vercel.app"),

  title: {
    default: "GunaMythicArt",
    template: "%s | GunaMythicArt",
  },

  description:
    "A premium digital gallery dedicated to Lord Shiva-inspired luxury artwork, sacred wallpapers, and collectible digital experiences.",

  keywords: [
    "Lord Shiva",
    "Shiva Wallpaper",
    "Mahadev",
    "Digital Art",
    "Luxury Wallpapers",
    "AMOLED Wallpapers",
    "Sacred Art",
    "Premium Art",
    "Shiva Gallery",
  ],

  authors: [
    {
      name: "GunaMythicArt",
    },
  ],

  creator: "GunaMythicArt",

  openGraph: {
    title: "GunaMythicArt",
    description:
      "Premium Lord Shiva digital artwork and luxury wallpaper collections.",
    url: "https://gunamythicart.vercel.app",
    siteName: "GunaMythicArt",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GunaMythicArt",
    description:
      "Luxury Lord Shiva digital artwork and premium wallpaper collections.",
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
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

/*It's responsible for:

Global HTML structure
Loading fonts
Metadata
Wrapping every page

Loading fonts here ensures they are available across the entire application without duplication.*/