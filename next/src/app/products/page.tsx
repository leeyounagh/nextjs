import React from "react";
import Link from "next/link";

const products = ["shirts", "pants", "skirt", "shoes"];

export default function page() {
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <Link href={`/products/${product}`}>
              <li>{product}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
