import type { Metadata } from "next";
import Head from "next/head";
import "@theme-toggles/react/css/Classic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "William Martin Kariuki",
  description:
    "Hi, my name is William Martin Kariuki and I work as a UX designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
