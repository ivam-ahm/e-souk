import { text } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product: { name, category, img, price } }) => {
  const notify = function () {
    toast("Added to cart!");
  };
  const customToastStyle = {
    backgroundColor: "white",
    color: "#000000",
    destination: "/home/cart",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
  };
  return (
    <div className="w-[270px] flex flex-col justify-between gap-8 border-2 px-8 py-6 rounded-xl font-roboto cursor-pointer">
      <a href="/home/category/subcategory/product">
        <div className="flex flex-col gap-2">
          <div className="text-black text-opacity-45 text-sm font-semibold cursor-pointer">
            {category}
          </div>
          <div className="text-[#fc8000] text-opacity-70 font-bold cursor-pointer">
            {name.slice(0, 30)}
          </div>
        </div>
        <img src={img} alt={name} />
        <div className="flex items-center justify-between">
          <span className="font-bold  text-xl text-black text-opacity-70 pt-3">
            ${price}
          </span>
        </div>
      </a>
      <div>
        <FontAwesomeIcon
          icon={faCartPlus}
          className="w-7 h-7 text-gray-300 hover:text-main cursor-pointer"
          onClick={notify}
        />
        <ToastContainer
          position="bottom-right"
          toastStyle={customToastStyle}
          onClick={() => (window.location.href = "/home/cart")}
        />
      </div>
    </div>
  );
};

export default ProductCard;
