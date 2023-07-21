import "./globals.css";
import type { Metadata } from "next";
import { berkshire } from "./font";

export const metadata: Metadata = {
  title: "Mit Weds Poonam",
  description: "Love from Mit & Poonam",
};

const date: number = new Date().getFullYear();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={berkshire.className}>{children}</body>
    </html>
  );
}
