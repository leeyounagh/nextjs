import Link from "next/link";
import styles from "./layout.module.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">
          <div>여성옷</div>
        </Link>

        <Link href="/products/man">
          {" "}
          <div>남성옷</div>
        </Link>
      </nav>

      <section>{children}</section>
    </>
  );
}
