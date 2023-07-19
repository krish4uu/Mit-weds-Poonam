import "./globals.css";
import type { Metadata } from "next";
import { Berkshire_Swash } from 'next/font/google'

const berkshire = Berkshire_Swash({
  weight: '400',
  subsets: ['latin'],
})
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
      <body className={berkshire.className}>{children}</body>
    </html>
  );
}
