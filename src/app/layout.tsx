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
    <html lang="en">
      <head>
        {/* Run before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    var m = window.matchMedia('(prefers-color-scheme: dark)');
                    theme = m.matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-bs-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
