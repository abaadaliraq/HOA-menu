import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House of Antiques Café Menu",
  description:
    "Vintage café menu for House of Antiques — Iraqi flavors inspired by old dinner menus.",
  icons: {
    icon: "/menu-assets/hoa-logo.png",
    shortcut: "/menu-assets/hoa-logo.png",
    apple: "/menu-assets/hoa-logo.png",
  },
  openGraph: {
    title: "House of Antiques Café Menu",
    description:
      "Vintage café menu for House of Antiques — Iraqi flavors inspired by old dinner menus.",
    url: "https://houseofantiques.store",
    siteName: "House of Antiques Café",
    images: [
      {
        url: "/menu-assets/hoa-menu-preview.jpg",
        width: 1200,
        height: 630,
        alt: "House of Antiques Café Menu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Antiques Café Menu",
    description:
      "Vintage café menu for House of Antiques — Iraqi flavors inspired by old dinner menus.",
    images: ["/menu-assets/hoa-menu-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}