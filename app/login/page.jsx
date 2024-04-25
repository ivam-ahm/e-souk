"use client";
import React, { useEffect, useState } from "react";
import logo from "../../assets/EsoukLogo.png";
import GoogleLogo from "../../assets/GoogleLogo.png";
import FacebookLogo from "../../assets/FacebookLogo.png";
import leftImage from "../../assets/leftimage.jpg";
import Path from "@/components/Path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loaded, setloaded] = useState(false);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const handleChange = (e) => {
    if (e.target.name === "rememberMe") {
      setCreds((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    } else {
      setCreds((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(creds),
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
    } else {
      console.log(data.message);
    }
  };
  const togglePassword = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };
  useEffect(() => {
    setloaded(true);
  }, []);

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center font-poppins">
        <div className="flex flex-col gap-6  w-[400px]">
          <div className="py-2 border-b-2 border-main text-4xl">Login</div>
          <div className="text-gray-600 text-lg">
            Welcome back! Sign in to your account.
          </div>
          <form className="flex flex-col gap-5 relative">
            <input
              name="email"
              onChange={handleChange}
              value={creds.email}
              type="email"
              placeholder="Email"
              className="border border-gray-600 px-5 py-[10px] rounded-3xl text-lg focus:outline-main focus:outline-1 "
            />
            <input
              name="password"
              onChange={handleChange}
              value={creds.password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-gray-600 px-5 py-[10px] rounded-3xl text-lg focus:outline-main focus:outline-1"
            />
            {loaded && (
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                size="md"
                className="absolute bottom-[18px] right-5"
                onClick={togglePassword}
              />
            )}
          </form>
          <div className="flex gap-3 pl-1">
            <input
              type="checkbox"
              className="accent-main "
              name="rememberMe"
              onChange={handleChange}
              checked={creds.rememberMe}
            />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <button
            className="self-start bg-main py-2 px-6 rounded-3xl text-xl text-white tracking-wider"
            onClick={handleSubmit}
          >
            Login
          </button>
          <div>
            Don’t have an account?{" "}
            <Link href="/register" className="text-main">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// left part div
// <div className="w-[50vw] h-screen bg-[#f5f5f6]">
//   {/* img div */}
//   <div>
//     <img
//       src={logo.src}
//       alt="Website Logo"
//       className="w-[200px] flex mx-auto pt-11 "
//     />
//   </div>
//   {/* form div */}
//   <div className="mb-8 flex justify-center">
//     <form action="" className="items-center justify-center  ">
//       <h1 className="text-3xl font-bold mb-12">Sign In</h1>
//       <div>
//         <input
//           placeholder="Your email"
//           type="Email"
//           className="flex text-black justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2"
//         />
//       </div>
//       <div>
//         <input
//           placeholder="Password"
//           type="password"
//           className="flex text-black justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2"
//         />
//       </div>

//       <button className="flex text-white bg-[#fb904b] text-[20px] justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2">
//         Log in
//       </button>
//       <h3 className="cursor-pointer flex justify-center mx-auto font-bold text-[#fb904b]">
//         Forgot password ?
//       </h3>
//     </form>
//   </div>
//   {/* below Form Div */}

//   <div className="flex justify-center items-center">
//     <button className="flex justify-center items-center text-black border-2 px-9 py-3 my-2 mx-2 rounded-xl ">
//       <img src={GoogleLogo.src} alt="" className="w-[31px] mr-2" />
//       Google
//     </button>
//     <button className="flex justify-center items-center text-black border-2 px-5 py-3 my-2 mx-2 rounded-xl ">
//       <img src={FacebookLogo.src} alt="" className="w-11 mr-2" />
//       Facebook
//     </button>
//   </div>
//   <footer className="flex justify-center items-center mt-10">
//     <p>
//       Don’t have an account?
//       <span> </span>
//       <a href="/register" className="text-[#fb904b]">
//         Register
//       </a>
//     </p>
//   </footer>
// </div>
// {/* Right part div */}
// <div className="w-full h-screen bg-[#f5f5f7] flex ">
//   <img src={leftImage.src} alt="" className="w-full" />
// </div>
