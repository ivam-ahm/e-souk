import { affiliateHeroBg, affiliateLogo } from "@/assets";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hero = () => {
  return (
    <div
      className={`h-[80vh] bg-none bg-cover px-[250px] font-poppins text-white flex flex-col`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('${affiliateHeroBg.src}')`,
      }}
    >
      <div className="flex flex-col justify-between flex-1 py-44">
        <div className="text-6xl w-[1000px] leading-tight font-semibold ">
          Promote, earn and grow with the ESOUK Affiliate Program
        </div>
        <div className="text-xl w-[500px] leading-snug text-gray-400">
          Earn commission from orders you bring to ESOUK by joining the ESOUK
          Affiliate Program.
        </div>
        <button className="bg-main px-6 py-4 rounded-2xl flex justify-between items-center font-semibold w-56">
          START EARNING
          <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
