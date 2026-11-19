import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/variables.css";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { EditModeProvider } from "@/components/EditModeProvider";

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
        <EditModeProvider>
          <Header />
          {children}
        </EditModeProvider>
      </body>
    </html>
  );
}
