import type { Metadata } from "next";

import "./globals.css";

import Provider from "@/app/provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-white dark:bg-zinc-700`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
