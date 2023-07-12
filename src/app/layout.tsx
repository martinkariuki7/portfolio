import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>UX designer & Javascript Develper</title>
        <meta
          name="description"
          content="I am a UX designer and Javascript developer. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
