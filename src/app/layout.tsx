import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "./globals.css";
import 'react-tooltip/dist/react-tooltip.css'

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verex",
  description: "Investment Enhanced",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
