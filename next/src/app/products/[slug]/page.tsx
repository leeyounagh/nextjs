import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
type Props = {
  params: {
    slug: string;
  };
};
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의이름 :${params}`,
  };
}
export default function page({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  return <div>{params.slug} 고정 컴포넌트얌</div>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}

// 정적페이지 형태로 미리 불러오고 싶을때 SSG형태
