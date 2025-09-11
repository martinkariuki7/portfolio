import type { Metadata } from "next";
import Head from "next/head";
import "@theme-toggles/react/css/Classic.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>William Martin Kariuki - UX designer</title>
        <meta
          name="William Martin Kariuki"
          content="Hi, my name is William Martin Kariuki and I work as a UX designer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
