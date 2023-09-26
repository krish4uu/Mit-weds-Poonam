import "./globals.css";
import type { Metadata } from "next";
import { custom_font } from "./font";

export const metadata: Metadata = {
  title: "Mit Weds Poonam",
  description: "Love from Mit & Poonam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={custom_font.className}>{children}</body>
    </html>
  );
}
