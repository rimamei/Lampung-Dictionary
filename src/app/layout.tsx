import { Metadata } from "next";

import "./globals.css";

import Provider from "@/app/provider";

import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Kamus Indonesia - Lampung",
  openGraph: {
    title: "Kamus Indonesia - Lampung",
    url: "https://lampung-dictionary.vercel.app/",
    siteName: "Kamus Indonesia - Lampung",
    description:
      "Kamus Indonesia - Lampung merupakan sebuah aplikasi yang mampu menerjemahkan kata dalam Bahasa Lampung ke Bahasa Indonesia ataupun sebaliknya.",
    images: "/opengraph-image.jpg",
    authors: ["Rima"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamus Indonesia - Lampung",
    description:
      "Kamus Indonesia - Lampung merupakan sebuah aplikasi yang mampu menerjemahkan kata dalam Bahasa Lampung ke Bahasa Indonesia ataupun sebaliknya.",
    siteId: "1467726470533754880",
    images: ["/opengraph-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-white dark:bg-zinc-700`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
