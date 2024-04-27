"use client";
import ProductCard from "@/components/ProductCard";
import product from "@/app/home/assets/cart/iphone13.png";
import React from "react";
import { usePathname } from "next/navigation";

const page = () => {
  const data = [
    {
      category: "Tablet",
      name: "Tablet Thin EliteBook Revolve 810 G6",
      price: 1471,
      img: product.src,
    },
    {
      category: "phone",
      name: "phone Thin EliteBook Revolve 810 G6",
      price: 1471,
      img: product.src,
    },
    {
      category: "tv",
      name: "tv Thin EliteBook Revolve 810 G6",
      price: 1471,
      img: product.src,
    },
    {
      category: "somthing",
      name: "somthing Thin EliteBook Revolve 810 G6",
      price: 1471,
      img: product.src,
    },
    {
      category: "else",
      name: "else Thin EliteBook Revolve 810 G6",
      price: 1471,
      img: product.src,
    },
    {
      category: "hello",
      name: "hello Thin EliteBook Revolve 810 G6",
      price: 1471,
      img: product.src,
    },
    {
      category: "world my nmae is djlail selmanliser",
      name: "world my nmae is djlail selmanliser Thin EliteBook Revolve 810 G6",
      price: 1471,
      img: product.src,
    },
    {
      category: "ipsu lorem ",
      name: "ipsum lorem  Thin EliteBook Revolve 810 G6",
      price: 1471,
      img: product.src,
    },
    {
      category: "ipsu lorem ",
      name: "ipsum lorem  Thin EliteBook Revolve 810 G6",
      price: 1471,
      img: product.src,
    },
    {
      category: "ipsu lorem ",
      name: "ipsum lorem  Thin EliteBook Revolve 810 G6",
      price: 1471,
      img: product.src,
    },
  ];
  const PRODUCTS = data.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const path = usePathname();
  let category = path.split("/");
  category = category[category.length - 1];

  return (
    <div className="px-[250px] py-[80px] flex flex-col gap-10 ">
      <div className="text-6xl border-gray-300 border-b-2">
        <div className="border-b-4 border-main w-fit py-2 relative top-[3px] font-inter">
          {category}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-y-8">{PRODUCTS}</div>
    </div>
  );
};

export default page;
