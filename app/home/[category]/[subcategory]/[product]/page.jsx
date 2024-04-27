"use client";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Black from "./Black.png";
import React, { useState } from "react";
import BlackImage from "./Black.png";
import WhiteGoldImage from "./WhiteGold.png";
import Gray from "./gray.png";
import { ToastContainer, toast } from "react-toastify";

const page = () => {
  const [selectedProduct, setSelectedProduct] = useState("All categories");
  const [selectedColor, setSelectedColor] = useState("");
  const [productImages, setProductImages] = useState({
    "White with gold": WhiteGoldImage,
    "Black and red": BlackImage,
    "gray and white": Gray,
  });
  function handleChangeSaveSelectedProduct(e) {
    const color = e.target.value;
    setSelectedColor(color);
    console.log(color);
  }
  function handleClickChangeImage(image) {
    setSelectedColor(image);
  }
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
    // page div
    <div>
      <div className="w-full h-screen flex justify-center gap-10 items-center">
        <div>
          <img
            src={
              productImages[selectedColor]
                ? productImages[selectedColor].src
                : BlackImage.src
            }
            alt=""
            className="w-[100%] h-[500px] py-2 "
          />
          <div className="flex justify-center gap-2">
            {Object.keys(productImages).map((color) => (
              <img
                key={color}
                src={productImages[color].src}
                alt=""
                className="w-[123px] h-[123px]"
                onClick={() => handleClickChangeImage(color)}
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-light">Headphones</h4>
          <h1 className="text-3xl text-[#333E48]">
            {productImages[selectedColor]
              ? `Ultra Wireless S50 Headphones S50 with Bluetooth ${selectedColor}`
              : "Ultra Wireless S50 Headphones S50 with Bluetooth (black)"}
          </h1>
          <div className="">
            <p className="text-[#8094A5] text-[13px] pt-2">
              (3 customer reviews)
            </p>
            <p className="border-b-2 text-[#8094A5]">
              Availability:{" "}
              <span className="text-[#fc8000] font-bold ">23 in stock</span>
            </p>
          </div>
          <div className="text-black text-opacity-60 pt-4">
            <ul className="flex flex-col list-disc pl-10">
              <li>4.5 inch HD Touch Screen (1280 x 720)</li>
              <li>Android 4.4 KitKat OS</li>
              <li>1.4 GHz Quad Core™ Processor</li>
              <li>20 MP front and 28 megapixel CMOS rear camera</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem sequi amet in esse fugiat illum{" "}
            </p>
            <p className="flex pt-4 pb-5">
              <span className="font-bold">SKU:</span> FW511948218
            </p>
          </div>
          <div>
            <h1 className="border-b-2 text-4xl text-[#4B555E] pb-4">
              $1,215.00
            </h1>
            <div className="flex ml-2 gap-9 border-b-2">
              <div className="flex justify-center items-center gap-4 text-opacity-50 py-4">
                <p className="font-bold text-[#4B555E]">color</p>
                <select
                  className="border-2 w-[200px] h-[35px] rounded-full px-4"
                  onChange={handleChangeSaveSelectedProduct}
                >
                  <option value="">Choose an option</option>
                  <option value="White with gold">White with gold</option>
                  <option value="Black and red">Black and red</option>
                  <option value="gray and white">gray and white</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <input
                type="number"
                className="border-2 w-[150px] h-[50px] rounded-full px-4"
              />
              <div>
                <button
                  className="bg-[#fc8000] w-[200px] h-[52px] rounded-full flex justify-center items-center gap-2 font-bold"
                  onClick={notify}
                >
                  <MdOutlineAddShoppingCart className="font-bold" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer
          position="bottom-right"
          toastStyle={customToastStyle}
          onClick={() => (window.location.href = "/home/cart")}
        /> */}
      </div>
      <div></div>
    </div>
  );
};

export default page;
