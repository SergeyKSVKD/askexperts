import type { Metadata } from "next";
import { Cabin, Lato } from "next/font/google";
import "./globals.scss";
import Topbar from "./components/home/topbar/Topbar";
import Header from "./components/home/header/Header";

const cabin = Cabin({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Ask Experts Next App",
  description: "Ask Experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru-Ru">
      <body className={lato.className}>
        <Topbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
