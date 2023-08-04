import "@/app/assets/css/styles.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Florian Sabine",
  description: "Portfolio crée avec Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="">
      <body className={inter.className}>{children}  </body>
    </html>
  );
}
