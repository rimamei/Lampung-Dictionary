import type { Metadata } from "next";

import "./globals.css";

import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Lampung - Indonesia Dictionary",
  description: "Lampung Indonesia Translation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
