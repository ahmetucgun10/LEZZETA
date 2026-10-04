import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Lezzetai",
  description: "Lezzetai çok yakında yayında.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#fff8f1",
          color: "#2b1a10",
        }}
      >
        {children}
      </body>
    </html>
  );
}
