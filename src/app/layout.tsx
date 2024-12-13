import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "My Blog",
  description: "create by Sina Zinsaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
