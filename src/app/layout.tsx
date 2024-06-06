import { Roboto_Mono } from "next/font/google";

import type { Metadata } from "next";

import "~/css/globals.css";

const font = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee cup detector",
  description: "Created by Bogdan Covrig",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
