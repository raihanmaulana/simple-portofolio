import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Next JS",
  description: "Made by Raihan Maulana"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-[110vh] ${inter.className}`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
