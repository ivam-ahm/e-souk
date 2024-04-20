import React from "react";
import logo from "../../assets/EsoukLogo.png";
import GoogleLogo from "../../assets/GoogleLogo.png";
import FacebookLogo from "../../assets/FacebookLogo.png";
import leftImage from "../../assets/leftimage.jpg";
const page = () => {
  return (
    <div className="flex">
      {/* left part div */}
      <div className="w-[50vw] h-screen bg-[#f5f5f6]">
        {/* img div */}
        <div>
          <img
            src={logo.src}
            alt="Website Logo"
            className="w-[200px] flex mx-auto pt-11 "
          />
        </div>
        {/* form div */}
        <div className="mb-8 flex justify-center">
          <form action="" className="items-center justify-center  ">
            <h1 className="text-3xl font-bold mb-12">Sign In</h1>
            <div>
              <input
                placeholder="Your email"
                type="Email"
                className="flex text-black justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2"
              />
            </div>
            <div>
              <input
                placeholder="Password"
                type="password"
                className="flex text-black justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2"
              />
            </div>

            <button className="flex text-white bg-[#fb904b] text-[20px] justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2">
              Log in
            </button>
            <h3 className="cursor-pointer flex justify-center mx-auto font-bold text-[#fb904b]">
              Forgot password ?
            </h3>
          </form>
        </div>
        {/* below Form Div */}

        <div className="flex justify-center items-center">
          <button className="flex justify-center items-center text-black border-2 px-9 py-3 my-2 mx-2 rounded-xl ">
            <img src={GoogleLogo.src} alt="" className="w-[31px] mr-2" />
            Google
          </button>
          <button className="flex justify-center items-center text-black border-2 px-5 py-3 my-2 mx-2 rounded-xl ">
            <img src={FacebookLogo.src} alt="" className="w-11 mr-2" />
            Facebook
          </button>
        </div>
        <footer className="flex justify-center items-center mt-10">
          <p>
            Don’t have an account?
            <span> </span>
            <a href="/register" className="text-[#fb904b]">
              Register
            </a>
          </p>
        </footer>
      </div>
      {/* Right part div */}
      <div className="w-full h-screen bg-[#f5f5f7] flex ">
        <img src={leftImage.src} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default page;
