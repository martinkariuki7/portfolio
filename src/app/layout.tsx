import type { Metadata } from "next";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Run before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
                    theme = prefersDark.matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-bs-theme', theme);
                } catch(e) {
                  document.documentElement.setAttribute('data-bs-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
