import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreightCore Logistics | Move the World. Intelligently.",
  description: "Intelligent infrastructure for a world that never stops moving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-primary-text antialiased selection:bg-accent selection:text-white`}>
        {children}
      </body>
    </html>
  );
}