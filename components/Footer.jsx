"use client";
import React, { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import EsoukLogo from "../assets/esouk.png";
import { FaHeadphonesAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <footer className="bg-white text-center text-black w-full   border-2">
      <div className="flex w-full bg-[#fe8000]  justify-center items-center ">
        <form action="">
          <div className="flex justify-center items-center gap-4 ml-0 ">
            <div className="px-7">
              <p className="flex justify-center items-center gap-4">
                <FaRegPaperPlane className="text-2xl" />
                <strong className="text-2xl">Sign up for our newsletter</strong>
              </p>
            </div>
            <div className="my-4 flex justify-center items-center   ">
              <input
                onChange={handleChange}
                type="text"
                name="Email"
                placeholder="Enter your e-mail address "
                className=" rounded-2xl border-2 border-r-0 rounded-r-none border-black accent-black px-6 py-2  font-medium text-black w-[400px] "
              />
              <button
                type="sign up"
                className=" bg-orange-300 rounded-2xl border-2 border-l-0 rounded-l-none border-black accent-black py-2 px-6 text-black font-bold"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="container  mx-auto py-10   ">
        <div className="flex items-center sm:grid sm:grid-cols-4 mb-8">
          <div className="">
            <img src={EsoukLogo.src} className="w-[200px]  " />
            <div className="relative flex mb-8">
              <FaHeadphonesAlt className="text-6xl absolute left-[-100px] flex" />
              <span className="absolute">
                <p className="text-black">Got Questions ? Call us 24/7!</p>
                <h1 className="text-xl">(+213)552085202,(+213)799902523 </h1>
              </span>
              <div className="relative flex gap-5 text-4xl top-20 left-24 text-[#7C7C7C]">
                <a href="https://www.facebook.com/" target="_blank">
                  <CiFacebook className="cursor-pointer hover:text-blue-900" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <CiLinkedin className="cursor-pointer hover:text-[#0077B5]" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram className="cursor-pointer hover:text-[#f26d3e]" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCpKHlEqigKVUTU7NAuFs_pA"
                  target="_blank"
                >
                  <FaYoutube className="cursor-pointer hover:text-red-700" />
                </a>
              </div>
            </div>
          </div>

          <div className="mb-6 ">
            <h5 className="mb-2.5 font-bold flex">Find it fast</h5>
            <ul className="mb-0 list-none">
              <li>
                <a className="text-black flex">Laptops & Computers</a>
              </li>
              <li>
                <a className="text-black flex">TV & Audio</a>
              </li>
              <li>
                <a className="text-black flex">Gadgets</a>
              </li>
              <li>
                <a className="text-black flex">Cameras & Photography</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold flex ">Find it fast</h5>

            <ul className="mb-0 list-none">
              <li>
                <a className="text-black flex">Laptops & Computers</a>
              </li>
              <li>
                <a className="text-black flex ">TV & Audio</a>
              </li>
              <li>
                <a className="text-black flex">Gadgets</a>
              </li>
              <li>
                <a className="text-black flex">Cameras & Photography</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold  flex">Links</h5>

            <ul className="mb-0 list-none">
              <li>
                <a className="text-black flex">Link 1</a>
              </li>
              <li>
                <a className="text-black flex">Link 2</a>
              </li>
              <li>
                <a className="text-black flex">Link 3</a>
              </li>
              <li>
                <a className="text-black flex">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 text-center bg-[#fc904d] bg-opacity-20">
        © 2024 Copyright:
        <a className="text-black" href="">
          E-souk type Shit
        </a>
      </div>
    </footer>
  );
};

export default Footer;
