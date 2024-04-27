import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductCard = ({ key: key, product: { name, category, img, price } }) => {
  return (
    <div className="w-[270px] flex flex-col justify-between gap-8 border-2 px-8 py-6 rounded-xl font-roboto">
      <div className="flex flex-col gap-2">
        <div className="text-gray-400 text-sm font-semibold cursor-pointer">
          {category}
        </div>
        <div className="text-blue-700 font-bold cursor-pointer">
          {name.slice(0, 30)}
        </div>
      </div>
      <img src={img} />
      <div className="flex items-center justify-between">
        <span className="font-bold  text-xl text-slate-800">${price}</span>
        <FontAwesomeIcon
          icon={faCartPlus}
          className="w-7 h-7 text-gray-300 hover:text-main cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductCard;
