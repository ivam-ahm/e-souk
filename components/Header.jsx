"use client";
import { React } from "react";
import { useState } from "react";
import EsoukLogo from "../assets/EsoukLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import MagnifyingGlass from "../assets/MagnifyingGlass.png";
import { GoChevronDown } from "react-icons/go";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
const Header = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [selectedCategory2, setSelectedCategory2] = useState("All categories");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(search);

  const [cat, setCat] = useState(false);
  function handleClickCat() {
    setCat((prevCat) => !prevCat);
  }

  const [Tvcat, setTvCat] = useState(false);
  function handleClickCatTv() {
    setTvCat((prevCat) => !prevCat);
    setSmartcat(false);
    setLaptopsCat(false);
    setGadgetsCat(false);
    setCamerasCat(false);
  }

  const [Smartcat, setSmartcat] = useState(false);
  function handleClickCatSmart() {
    setSmartcat((prevCat) => !prevCat);
    setTvCat(false);
    setLaptopsCat(false);
    setGadgetsCat(false);
    setCamerasCat(false);
  }

  const [laptopsCat, setLaptopsCat] = useState(false);
  function handleClickCatLaptops() {
    setLaptopsCat((prevCat) => !prevCat);
    setTvCat(false);
    setSmartcat(false);
    setGadgetsCat(false);
    setCamerasCat(false);
  }

  const [gadgetsCat, setGadgetsCat] = useState(false);
  function handleClickCatGadgets() {
    setGadgetsCat((prevCat) => !prevCat);
    setTvCat(false);
    setLaptopsCat(false);
    setSmartcat(false);
    setCamerasCat(false);
  }

  const [camerasCat, setCamerasCat] = useState(false);
  function handleClickCatCameras() {
    setCamerasCat((prevCat) => !prevCat);
    setTvCat(false);
    setLaptopsCat(false);
    setGadgetsCat(false);
    setSmartcat(false);
  }
  function handleClickSaveSelectedCat(e) {
    const categoryName = e.currentTarget.getAttribute("name");
    setSelectedCategory(categoryName);
    console.log(categoryName);
    setCat((prevCat) => !prevCat);
  }

  function handleClickSaveSelectedCat3(e) {
    const categoryGadgetsName = e.currentTarget.getAttribute("name");
    setSelectedCategory2(categoryGadgetsName);
    console.log(categoryGadgetsName);
    setGadgetsCat(false);
  }
  function handleClickSaveSelectedCat4(e) {
    const categoryGadgetsName = e.currentTarget.getAttribute("name");
    setSelectedCategory2(categoryGadgetsName);
    console.log(categoryGadgetsName);
    setLaptopsCat(false);
  }

  return (
    // nav div
    <div>
      {/* top nav */}
      <div className=" w-full h-[100px]  bg-white flex items-center  text-gray-300 border-b-2 ">
        <div className="flex  ml-56">
          <a href="/home">
            <img src={EsoukLogo.src} alt="logo" style={{ width: "200px" }} />
          </a>
        </div>
        <div className="flex justify-center items-center ml-10 ">
          <input
            name="searchh"
            value={search.search}
            onChange={handleChange}
            type="text"
            placeholder="Search"
            className="flex justify-center items-center border-2 border-r-0 rounded-r-none  border-[#fc904d] w-[579px] h-[40px] rounded-2xl gap-2 p-4 text-black "
          />
          {/* dropdown categories choices */}
          <fieldset>
            <button
              onClick={handleClickCat}
              className=" flex  items-center border-2 border-l-0 border-r-0  border-[#fc904d] text-black
        w-[200px] h-[40px]  rounded-l-none "
            >
              <p className="pl-8 ml-auto  relative " placeholder="All">
                {selectedCategory}
              </p>
              <GoChevronDown className="flex justify-end ml-auto mr-4" />
            </button>
            {/* choices */}

            {cat && (
              <div className="categories absolute bg-white border-gray-400 border-[1px]  text-gray-700 w-[200px] ">
                <p
                  onClick={handleClickSaveSelectedCat}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer categories"
                  name="All categories"
                >
                  All categories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Accessories"
                >
                  Accessories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Cameras and shit"
                >
                  Cameras and shit
                </p>
              </div>
            )}
          </fieldset>

          <button
            className=" flex justify-center items-center border-2 border-l-0 border-[#fc904d] bg-[#fc904d]
        w-[60px] h-[40px] rounded-3xl rounded-l-none px-4 "
          >
            <img src={MagnifyingGlass.src} alt="" className="w-[30px]" />
          </button>

          <div className="text-3xl flex p-4 text-[#29323a] ml-44  justify-center items-center ">
            <a href="/home/account/profile">
              <VscAccount className="cursor-pointer" />
            </a>
          </div>
          <div className="text-3xl flex p-4 text-[#29323a] justify-center items-center ">
            <a href="/home/account/cart">
              <IoCartOutline className=" cursor-pointer" />
            </a>
            <p className="text-[14px]">0 $</p>
          </div>
        </div>
      </div>

      {/* buttom nav */}
      <div className="w-full h-[45px] bg-[#fc904d] text-gray-300   border-black ">
        <div className="flex flex-cols justify-center  w-[60%] text-black h-full mx-auto ">
          <div className="hover:bg-[#fc8000]" onClick={handleClickCatTv}>
            <h1 className="flex justify-center  text-[13.5px] items-center border-l-[1px] border-[#fc8010]  h-full font-bold gap-3 cursor-pointer  ">
              <p className=" secondCategories">TV & Audio</p>
              <GoChevronDown />
            </h1>
            {Tvcat && (
              <div className="categories absolute bg-white border-gray-400 border-[1px]  text-gray-700 w-[200px] ">
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer categories"
                  name="All categories"
                >
                  All categories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Accessories"
                >
                  Accessories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Cameras and shit"
                >
                  Cameras and shit
                </p>
              </div>
            )}
          </div>
          <div className="hover:bg-[#fc8000]" onClick={handleClickCatSmart}>
            <h1 className="flex justify-center  text-[13.5px] items-center border-l-[1px] border-[#fc8010]  h-full font-bold gap-3 cursor-pointer  ">
              <p className="p-4 secondCategories">Smart Phones</p>
              <GoChevronDown />
            </h1>
            {Smartcat && (
              <div className="categories absolute bg-white border-gray-400 border-[1px]  text-gray-700 w-[200px] ">
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer categories"
                  name="All categories"
                >
                  All categories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Accessories"
                >
                  Accessories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Cameras and shit"
                >
                  Cameras and shit
                </p>
              </div>
            )}
          </div>
          <div className="hover:bg-[#fc8000]" onClick={handleClickCatLaptops}>
            <h1 className="flex justify-center  text-[13.5px] items-center border-l-[1px] border-[#fc8010]  h-full font-bold gap-3 cursor-pointer  ">
              <p className="p-4 secondCategories">Laptops & Desktops</p>
              <GoChevronDown />
            </h1>
            {laptopsCat && (
              <div className="categories absolute bg-white border-gray-400 border-[1px]  text-gray-700 w-[200px] ">
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer categories"
                  name="All categories"
                >
                  All categories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Accessories"
                >
                  Accessories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Cameras and shit"
                >
                  Cameras and shit
                </p>
              </div>
            )}
          </div>
          <div className="hover:bg-[#fc8000]" onClick={handleClickCatGadgets}>
            <h1 className="flex justify-center  text-[13.5px] items-center border-l-[1px] border-[#fc8010]  h-full font-bold gap-3 cursor-pointer  ">
              <p className="p-4 secondCategories">Gadgets</p>
              <GoChevronDown />
            </h1>
            {gadgetsCat && (
              <div className="categories absolute bg-white border-gray-400 border-[1px]  text-gray-700 w-[200px] ">
                <p
                  onClick={handleClickSaveSelectedCat4}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer categories"
                  name="All categories"
                >
                  All categories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat4}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Accessories"
                >
                  Accessories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat4}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Cameras and shit"
                >
                  Cameras and shit
                </p>
              </div>
            )}
          </div>
          <div className="hover:bg-[#fc8000]" onClick={handleClickCatCameras}>
            <h1 className="flex justify-center   items-center border-l-[1px] border-[#fc8010]  h-full font-bold gap-3  text-[13.5px] cursor-pointer ">
              <p className="p-4 secondCategories">Cameras & Accessories</p>
              <GoChevronDown />
            </h1>
            {camerasCat && (
              <div className="categories absolute bg-white border-gray-400 border-[1px]  text-gray-700 w-[200px] ">
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer categories"
                  name="All categories"
                >
                  All categories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Accessories"
                >
                  Accessories
                </p>
                <p
                  onClick={handleClickSaveSelectedCat3}
                  className="pl-4 bg-white hover:bg-[#1967D2] hover:text-white cursor-pointer"
                  name="Cameras and shit"
                >
                  Cameras and shit
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
