import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "슈짱쓰 옷가게",
  description: "사고싶어질거에요",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>Demo note app</header>
        <Link href=""></Link>
        {children}
      </body>
    </html>
  );
}
