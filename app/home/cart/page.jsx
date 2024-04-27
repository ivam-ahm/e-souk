"use client";
import React, { useState } from "react";
import plusIcon from "@/assets/cart/minus.png";
import minusIcon from "@/assets/cart/Plus.png";
import dele from "@/assets/cart/tbin.png";
import "./cart.css";

// Base prices for the items
const basePrices = [1100, 1200, 350];

const page = () => {
  // State for quantities of each item
  const [quantities, setQuantities] = useState([1, 1, 1]);

  const [couponCode, setCouponCode] = useState("");

  // State for discount applied
  const [discount, setDiscount] = useState(0);

  // Function to apply coupon code logic
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setDiscount(0.1); // Apply a 10% discount
    } else {
      setDiscount(0); // Reset discount if invalid code
      setCouponCode("");
    }
  };
  // Calculate the total price by summing the base price times the quantity for each item
  const getTotalPrice = () => {
    const subtotal = quantities.reduce((total, quantity, index) => {
      return total + quantity * basePrices[index];
    }, 0);
    return subtotal - subtotal * discount;
  };

  const increaseQuantity = (index) => {
    setQuantities(
      quantities.map((quantity, i) =>
        i === index && quantity < 100 ? quantity + 1 : quantity
      )
    );
  };

  const decreaseQuantity = (index) => {
    setQuantities(
      quantities.map((quantity, i) =>
        i === index && quantity > 1 ? quantity - 1 : quantity
      )
    );
  };
  const proceedToCheckout = () => {
    // Redirect to Google.com when clicking the checkout button
    window.location.href = "https://www.google.com";
  };
  const backtohome = () => {
    // Redirect to Google.com when clicking the checkout button
    window.location.href = "/home";
  };

  const handleDelete = () => {};

  const items = [];
  // const items = [
  //   {
  //     image: ,
  //     description: ["Apple iPhone 13", "Product Red - 128GB ", "Red"],
  //     link: "https://example.com/item1",
  //   },
  //   {
  //     image: ,
  //     description: [
  //       "Smart TV LED-backlit",
  //       "High-definition television",
  //       "chrome",
  //     ],
  //     link: "https://example.com/item1",
  //   },
  //   {
  //     image: ,
  //     description: ["Beats Studio Pro", "Premium Wireless Headphones", "Black"],
  //     link: "https://youtube.com",
  //   },
  // ];

  return (
    <div className="shopping-cart">
      <div className="title font-bold text-7xl font-poppins">Cart</div>
      <div className="labels flex">
        <h1 className="mr-[100px] ml-[100px] mb-[15px]">Item</h1>
        <h1 className="mr-[100px] ml-[205px] mb-[15px]">Quantity</h1>
        <h1 className="ml-[145px] mb-[15px]">Price</h1>
      </div>
      {items.map((item, index) => (
        <div className="item" key={index}>
          <div className="buttons">
            <button
              className="delete-btn" // Class for styling the delete button
              onClick={() => handleDelete(index)}
            >
              <img src={dele.src} alt="dele" />
            </button>
          </div>

          <div className="image flex justify-center items-center">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img className="w-[130px] h-[130px]" src={item.image} alt="" />
            </a>
          </div>

          <div className="description">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline" // Underline on hover
            >
              {item.description.map((desc, i) => (
                <span key={i}>{desc}</span>
              ))}
            </a>
          </div>
          <div className="quantity">
            <button
              className="minus-btn"
              type="button"
              onClick={() => decreaseQuantity(index)}
            >
              <img src={plusIcon.src} alt="Plus" />
            </button>
            <input type="text" value={quantities[index]} read-only />
            <button
              className="plus-btn"
              type="button"
              onClick={() => increaseQuantity(index)}
            >
              <img src={minusIcon.src} alt="Minus" />
            </button>
          </div>
          <div className="total-price">
            ${basePrices[index] * quantities[index]}{" "}
            {/* Individual item total */}
          </div>
        </div>
      ))}
      <div className="klch my-24 flex  items-center   ">
        <input
          className=" ml-24 rounded-3xl border-2 border-r-1 rounded-r-none text-xl border-grey px-4 py-3 ml-[-60px] font-medium text-black w-[400px]  "
          type="text"
          placeholder="Enter Promo Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button
          className=" couponfield bg-[#bdb9b9] rounded-3xl border-2 border-l-0 rounded-l-none border-[#bdb9b9] px-6  py-3  text-black font-bold text-xl "
          onClick={applyCoupon}
        >
          Apply
        </button>
      </div>

      <div className="totals border-2  border-gray-300 w-[1000px] ">
        <h1>Cart Totals</h1>
        <h3 className="subtotal ">Subtotal: ${getTotalPrice().toFixed(2)} </h3>
        <h3 className="flat">Flat rate: $25</h3>
        <h3 className="total">
          Total: ${(getTotalPrice() + 25).toFixed(2)}{" "}
          {/* Overall total price */}
        </h3>
      </div>
      <button
        className="proceed-btn  border-2  px-[110px] py-8  text-lg flex justify-center items-center"
        onClick={proceedToCheckout}
      >
        Checkout
      </button>
      <button
        className="backhome-btn   border-2  px-[110px] py-8  text-lg flex justify-center items-center"
        onClick={backtohome}
      >
        Back
      </button>
    </div>
  );
};

export default page;
