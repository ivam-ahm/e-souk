"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loaded, setloaded] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [creds, setCreds] = useState({
    userName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    setCreds((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (creds.userName.length < 3) {
      setError((prev) => ({
        ...prev,
        userName: "Username must be atleast 3 characters",
      }));
    } else if (!creds.email.includes("@")) {
      setError((prev) => ({ ...prev, userName: "", email: "Invalid email" }));
    } else if (creds.password.length < 8) {
      setError((prev) => ({
        ...prev,
        userName: "",
        email: "",
        password: "Password must be atleast 6 characters",
      }));
    } else if (creds.password !== creds.repeatPassword) {
      setError((prev) => ({ ...prev, password: "Passwords do not match" }));
    } else {
      setError({ userName: "", email: "", password: "" });
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify(creds),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setTimeout(() => {
          console.log("redirecting");
          window.location.href = "/home";
        }, 1000);
      } else {
        setError((prev) => ({ prev, password: data.message }));
      }
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
        <div className="flex flex-col gap-10 w-[450px]">
          <div className="py-2 border-b-2 border-main text-4xl">Register</div>
          <div className="text-gray-600 text-lg">
            Create new account today to reap the benefits of a personalized
            shopping experience.
          </div>
          <form className="flex flex-col gap-5 relative">
            <input
              name="userName"
              onChange={handleChange}
              value={creds.userName}
              type="text"
              placeholder="User name"
              className="border border-gray-600 px-5 py-[10px] rounded-3xl text-xl focus:outline-main focus:outline-1 "
            />
            {error.userName && (
              <div>
                <p className="text-red-500">{error.userName}</p>
              </div>
            )}
            <input
              name="email"
              onChange={handleChange}
              value={creds.email}
              type="email"
              placeholder="Email"
              className="border border-gray-600 px-5 py-[10px] rounded-3xl text-xl focus:outline-main focus:outline-1 "
            />
            {error.email && (
              <div>
                <p className="text-red-500">{error.email}</p>
              </div>
            )}
            <input
              name="password"
              onChange={handleChange}
              value={creds.password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-gray-600 px-5 py-[10px] rounded-3xl text-xl focus:outline-main focus:outline-1"
            />
            <input
              name="repeatPassword"
              onChange={handleChange}
              value={creds.repeatPassword}
              type={showPassword ? "text" : "password"}
              placeholder="Repeat Password"
              className="border border-gray-600 px-5 py-[10px] rounded-3xl text-xl focus:outline-main focus:outline-1"
            />
            {loaded && (
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                size="md"
                className="absolute bottom-[86px] right-5"
                onClick={togglePassword}
              />
            )}
          </form>
          {error.password && (
            <div>
              <p className="text-red-500">{error.password}</p>
            </div>
          )}
          {success && (
            <div>
              <p className="text-green-500 text-xl">{success}</p>
            </div>
          )}

          <button
            className="self-start bg-main py-2 px-6 rounded-3xl text-xl text-white"
            onClick={handleSubmit}
          >
            Register
          </button>
          <div>
            Already have an account?{" "}
            <Link href="/login" className="text-main">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
