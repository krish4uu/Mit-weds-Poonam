import "./globals.css";
import type { Metadata } from "next";
import { elite } from "./font";

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
      <body className={elite.className}>{children}</body>
    </html>
  );
}
