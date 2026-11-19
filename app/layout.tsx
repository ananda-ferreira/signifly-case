import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/variables.css";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Signifly Foosball",
  description: "Checkout the latest scores",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <h1>Signifly Foosball Championship</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
