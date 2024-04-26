"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loaded, setloaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
    rememberMe: false,
    userType: "simple_user",
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
    setLoading(true);
    setError("");
    if (!creds.email.includes("@")) {
      setError("Invalid email");
    } else if (creds.password.length < 8) {
      setError("Password must be atleast 8 characters");
    } else {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });
      const data = await response.json();
      if (response.ok) {
        setError("");
        setLoggedIn(data.message);
        setTimeout(() => {
          window.location.href = "/home";
        }, 1000);
      } else {
        setLoggedIn("");
        setError(data.message);
      }
    }
    setLoading(false);
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
          <div>
            <select
              name="userType"
              className="border active:border-main border-main  outline-none focus:border-main  rounded-xl px-2 py-1 mb-4"
              value={creds.userType}
              onChange={handleChange}
            >
              <option selected value="simple_user">
                Simple
              </option>
              <option value="affiliate">Affiliate</option>
              <option value="admin">Admin</option>
            </select>

            <div className="flex gap-3 pl-1">
              <input
                type="checkbox"
                className="accent-main w-fit "
                name="rememberMe"
                onChange={handleChange}
                checked={creds.rememberMe}
              />
              <label htmlFor="checkbox">Remember me</label>
            </div>
          </div>
          {loggedIn && (
            <div>
              <p className="text-green-500">{loggedIn}</p>
            </div>
          )}
          {error && (
            <div>
              <p className="text-red-500">{error}</p>
            </div>
          )}
          <button
            className={`self-start bg-main py-2 px-6 rounded-3xl text-xl text-white tracking-wider ${
              loading ? "bg-gray-500" : ""
            }`}
            onClick={handleSubmit}
            disabled={loading}
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
