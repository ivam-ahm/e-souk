"use client";
import ProductCard from "@/components/ProductCard";
import product from "@/assets/cart/iphone13.png";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const page = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
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
      <div className="grid grid-cols-4 gap-y-8">{PRODUCTS}</div>
    </div>
  );
};

export default page;
