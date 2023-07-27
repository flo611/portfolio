"use client";

import "@/app/assets/css/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Florian Sabine",
  description: "Portfolio crée avec Next.js",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({once: true});
  }, []);

  return (
    <html lang="fr" className="">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
