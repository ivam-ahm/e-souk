"use client";
import React, { useState } from "react";
import logo from "../../assets/EsoukLogo.png";
import GoogleLogo from "../../assets/GoogleLogo.png";
import FacebookLogo from "../../assets/FacebookLogo.png";
import leftImage from "../../assets/leftimage.jpg";
const SignUpPage = () => {
  const [creds, setCreds] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setCreds((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword((prevPassword) => !prevPassword);
  }
  // let passwordMatch;
  // function checkPassword(e) {
  //   if (e.target.password != e.target.repeatPassword) {
  //     return !passwordMatch;
  //   }
  // }

  return (
    // container
    <div className="flex">
      {/* left part div */}
      <div className="w-[50vw] h-screen bg-[#f5f5f6] flex flex-col gap-6">
        {/* img div */}
        <div>
          <img
            src={logo.src}
            alt="Website Logo"
            className="w-[200px] flex mx-auto pt-11 "
          />
        </div>
        {/* form div */}
        <h1 className="text-3xl font-bold px-[125px]">Register</h1>
        <form
          action=""
          className="flex flex-col gap-8 items-center justify-center "
        >
          <div className="">
            <div>
              <input
                placeholder="First name"
                name="firstName"
                type="text"
                className="flex text-black justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2"
                value={creds.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                placeholder="Second name"
                name="lastName"
                type="text"
                className="flex text-black justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2"
                value={creds.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                placeholder="Your email"
                name="email"
                type="Email"
                className="flex text-black justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2"
                value={creds.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                placeholder="Password"
                name="password"
                type={showPassword ? "password" : "text"}
                className="flex text-black justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2"
                value={creds.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                placeholder="Repeat Password"
                name="repeatPassword"
                type={showPassword ? "password" : "text"}
                className="flex text-black justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2"
                value={creds.repeatPassword}
                onChange={handleChange}
              />
            </div>
            {/* {passwordMatch && (
              <dir>
                <p>The passwords does not match ,Try again !</p>
              </dir>
            )} */}
          </div>

          <button className="flex text-white bg-[#fb904b] text-[20px] justify-center items-center mx-auto w-[402px] h-[50px] border-2 rounded-lg px-6 py-3 my-2">
            Register
          </button>
        </form>
        <div className="flex justify-center items-center">
          <button
            className="flex justify-center items-center text-black border-2 px-9 py-3 my-2 mx-2 rounded-xl "
            onClick={handleShowPassword}
          >
            <img src={GoogleLogo.src} alt="" className="w-[31px] mr-2" />
            Google
          </button>
          <button className="flex justify-center items-center text-black border-2 px-5 py-3 my-2 mx-2 rounded-xl ">
            <img src={FacebookLogo.src} alt="" className="w-11 mr-2" />
            Facebook
          </button>
        </div>
        <a
          href="/signin"
          className="cursor-pointer flex justify-center mx-auto font-bold text-[#fb904b]"
        >
          Already have an account?
        </a>
      </div>

      {/* below Form Div */}

      {/* <footer className="flex justify-center items-center mt-10">
          <p>
            Don’t have an account?
            <span> </span>
            <a href="/" className="text-[#fb904b]">
              Sign Up
            </a>
          </p>
        </footer> */}

      {/* Right part div */}
      <div className="w-full h-screen bg-[#f5f5f7] flex ">
        <img src={leftImage.src} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default SignUpPage;
