"use client";
import React, { useState, useEffect } from "react";
import "./account.css";
import profile from "@/assets/profile/profil.png";
import cred from "@/assets/profile/card.png";
import ord from "@/assets/profile/cart.png";
import add from "@/assets/profile/addresse.png";
import pass from "@/assets/profile/lock.png";
const ProfileForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newPassword: "",
    currentPassword: "",
    confirmPassword: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    department: "",
    postcode: "",
  });
  const gotodetails = () => {
    window.location.href = "#details";
  };
  const gotopassword = () => {
    window.location.href = "#password";
  };
  const gotoorder = () => {
    // Redirect to Google.com when clicking the checkout button
    window.location.href = "#orders";
  };
  const gotocards = () => {
    // Redirect to Google.com when clicking the checkout button
    window.location.href = "#payment";
  };
  const gotoitem = () => {
    // Redirect to Google.com when clicking the checkout button
    window.location.href = "https://www.google.com/?hl=fr";
  };
  const gotoaddress = () => {
    // Redirect to Google.com when clicking the checkout button
    window.location.href = "#address";
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setUserInfo((prev) => ({
      ...prev,
      displayName: `${prev.firstName} ${prev.lastName}`.trim(), // Concatenated result
    }));
  }, [userInfo.firstName, userInfo.lastName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    // Example validation logic
    if (
      userInfo.cardNumber == "" ||
      userInfo.expiryDate == "" ||
      userInfo.cvc == ""
    ) {
      alert("Please fill out all payment details.");
    } else {
      alert("Changes saved successfully!");
    }
  };
  const handlePasswordSaveChanges = () => {
    if (userInfo.newPassword === userInfo.currentPassword) {
      alert("New password should be different from the current password.");
      return;
    }

    if (userInfo.newPassword !== userInfo.confirmPassword) {
      alert("New password and confirmation must match.");
      return;
    }

    // If both checks pass
    alert("Changes saved successfully!");
  };
  const handleaddressSaveChanges = () => {
    // Example validation logic
    if (
      userInfo.apartment == "" ||
      userInfo.city == "" ||
      userInfo.companyName == "" ||
      userInfo.country == "" ||
      userInfo.department == "" ||
      userInfo.lastName == "" ||
      userInfo.currentPassword == "" ||
      userInfo.postcode == "" ||
      userInfo.streetAddress == ""
    ) {
      alert("Please fill out all Address details.");
    } else {
      alert("Changes saved successfully!");
    }
  };

  return (
    <div className="profile p-6">
      <div id="details" className="details">
        <h1>Account Details</h1>

        {/* First Name and Last Name on the same row */}
        <div className=" ff flex space-x-4">
          {" "}
          {/* Flex layout to align horizontally */}
          {/* First Name */}
          <div className="input-wrapper10 flex-1 ">
            {" "}
            {/* Flex-1 allows equal space sharing */}
            <div className="label">First Name*</div>
            <input
              name="firstName"
              type="text"
              placeholder="Enter first name"
              value={userInfo.firstName}
              onChange={handleInputChange}
              className="first-name-input w-full border rounded p-2"
            />
          </div>
          {/* Last Name */}
          <div className="input-wrapper20 flex-1">
            {" "}
            {/* Flex-1 allows equal space sharing */}
            <div className="label">Last Name*</div>
            <input
              name="lastName"
              type="text"
              placeholder="Enter last name"
              value={userInfo.lastName}
              onChange={handleInputChange}
              className="last-name-input w-full border rounded p-2"
            />
          </div>
        </div>
        {/* Display Name derived from First and Last Name */}
        <div className="displayname mt-4">
          <div className="label">Display Name*</div>
          <input
            type="text"
            value={userInfo.displayName} // Shows concatenated name
            readOnly
            className="w-full border rounded p-2"
            placeholder="This will be how your name will be displayed in the website" // Placeholder text
          />
        </div>
        <div className="emailaddress mt-4">
          {" "}
          {/* Adding email address section */}
          <div className="label">Email Address*</div>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={userInfo.email}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <h1 id="password" className="sec2">
          Password Changing
        </h1>
        {/* Current Password Placeholder */}
        <div className="currentpassword mt-4">
          <div className="label">Current Password*</div>
          <input
            type="password" // Hides characters
            placeholder="Enter your current password"
            value={userInfo.currentPassword}
            onChange={handleChange}
            name="currentPassword"
            className="w-full border rounded p-2"
          />
        </div>
        {/* New Password */}
        <div className="newpassword mt-4">
          <div className="label">New Password*</div>
          <input
            type="password" // Hides characters
            placeholder="Enter your new password" // Placeholder text
            value={userInfo.newPassword}
            onChange={handleChange}
            name="newPassword"
            className="w-full border rounded p-2" // Consistent style
          />
        </div>
        {/* Confirm New Password */}
        <div className="confirmpassword mt-1">
          <div className="label">Confirm New Password*</div>
          <input
            type="password" // Hide characters
            placeholder="Re-enter your new password" // Placeholder text
            value={userInfo.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            className="w-full border rounded p-2"
          />
        </div>
        {/* Save Changes Button */}
        <div className=" savee mt-4 ">
          <button
            onClick={handlePasswordSaveChanges}
            className=" savebtn text-black font-bold py-2 px-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
      <div id="orders" className="orders justify-center items-center ">
        <div className="ordertext">
          <h1>Orders </h1>
        </div>
        <div className=" orderlabels flex justify-between items-center w-[1100px] gap-10  ">
          <h3 className="mr-[100px] ml-[10px] mb-[15px]">Item</h3>
          <h3 className="mr-[100px] ml-[60px] mb-[15px]">Quantity</h3>
          <h3 className="ml-[60px] mb-[15px]">Price</h3>
          <h3 className="mr-[100px] ml-[180px] mb-[15px]">Item</h3>
          <h3 className="mr-[100px] ml-[75px] mb-[15px]">Quantity</h3>
        </div>
        <div className="itemlabels flex justify-between items-center w-[1100px] gap-10">
          <h3 className="text-neutral-800 text-l font-bold ">#00001</h3>
          <h3>21/04/2024</h3>
          <h3>On Hold</h3>
          <h3>$150.00</h3>
          <button onClick={gotoitem} className="btn-action text-black">
            View{" "}
          </button>{" "}
          {/* Redirect button */}
        </div>
        <div className="itemlabels flex justify-between items-center w-[1100px] gap-10">
          <h3 className="text-neutral-800 text-l font-bold ">#00002</h3>
          <h3>01/01/2024</h3>
          <h3>Processing</h3>
          <h3>$100.00</h3>
          <button onClick={gotoitem} className="btn-action text-black">
            View{" "}
          </button>{" "}
          {/* Redirect button */}
        </div>
        <div className="itemlabels flex justify-between items-center w-[1100px] gap-10">
          <h3 className="text-neutral-800 text-l font-bold ">#01010</h3>
          <h3>03/02/2024</h3>
          <h3>Processing</h3>
          <h3>$215.00</h3>
          <button onClick={gotoitem} className="btn-action text-black">
            View{" "}
          </button>{" "}
          {/* Redirect button */}
        </div>
        <div className="itemlabels flex justify-between items-center w-[1100px] gap-10">
          <h3 className="text-neutral-800 text-l font-bold ">#00152</h3>
          <h3>10/04/2024</h3>
          <h3>Processing</h3>
          <h3>$1750.00</h3>
          <button onClick={gotoitem} className="btn-action text-black">
            View{" "}
          </button>{" "}
          {/* Redirect button */}
        </div>
      </div>
      {/* Payment Method Section */}
      <div id="payment" className="payment-method mt-6">
        <h1>Payment Method</h1>

        <div className="payment-inputs">
          <div className="flex flex-col">
            <label className="label">Card Number*</label>
            <input
              name="cardNumber"
              type="text"
              placeholder="Enter card number"
              value={userInfo.cardNumber}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="label">Expiry Date*</label>
            <input
              name="expiryDate"
              type="text"
              placeholder="MM/YY"
              value={userInfo.expiryDate}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="label">Card Code (CVC)*</label>
            <input
              name="cvc"
              type="text"
              placeholder="Enter CVC"
              value={userInfo.cvc}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className=" savee text-center mt-6">
        <button
          onClick={handleSaveChanges}
          className="save-btn2 sbg-orange-600 text-black font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </div>
      <div className="address-section mt-6">
        <h1 className="profile h1">Address</h1>
        <div id="address" className="address-inputs">
          <div className="input-wrapper1">
            <div className="label">First Name*</div>
            <input
              name="address.firstName"
              type="text"
              placeholder="Enter first name"
              value={userInfo.firstName}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="input-wrapper2">
            <div className="label">Last Name*</div>
            <input
              name="address.lastName"
              type="text"
              placeholder="Enter last name"
              value={userInfo.lastName}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="input-wrapper1">
            <div className="label">Company Name (optional)</div>
            <input
              name="address.companyName"
              type="text"
              placeholder="Company name (optional)"
              value={userInfo.companyName}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="input-wrapper2">
            <div className="label">Country / Region*</div>
            <input
              name="address.country"
              type="text"
              placeholder="Enter country or region"
              value={userInfo.country}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="input-wrapper1">
            <div className="label">Street Address*</div>
            <input
              name="address.streetAddress"
              type="text"
              placeholder="Street address"
              value={userInfo.streetAddress}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="input-wrapper2">
            <div className="label">Apartment, Suite, etc. (optional)</div>
            <input
              name="address.apartment"
              type="text"
              placeholder="Apartment, suite, etc."
              value={userInfo.apartment}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="input-wrapper1">
            <div className="label">Town / City*</div>
            <input
              name="address.city"
              type="text"
              placeholder="Enter town or city"
              value={userInfo.city}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="input-wrapper2">
            <div className="label">Department*</div>
            <input
              name="address.department"
              type="text"
              placeholder="Department"
              value={userInfo.department}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="input-wrapper1">
            <div className="label">Postcode / ZIP*</div>
            <input
              name="address.postcode"
              type="text"
              placeholder="Enter postcode or ZIP"
              value={userInfo.postcode}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>
      {/* Save Changes Button */}
      <div className=" savee text-center mt-6">
        <button
          onClick={handleaddressSaveChanges}
          className="save-btn2 sbg-orange-600 text-black font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </div>

      <div className="totals border-2  border-gray-300 w-[1000px] ">
        <h3
          conClick={gotodetails}
          className="accountdetails hover-underline  cursor-pointer"
        >
          Account Details
          <button
            className="delete-btn" // Class for styling the delete button
            onClick={gotodetails}
          >
            <img src={profile.src} alt="dele" />
          </button>
        </h3>
        <h3
          onClick={gotopassword}
          className="passwordchanging hover-underline cursor-pointer"
        >
          PasswordChanging
          <button
            className="delete-btn" // Class for styling the delete button
            onClick={gotodetails}
          >
            <img src={pass.src} alt="dele" />
          </button>
        </h3>
        <h3
          onClick={gotoorder}
          className="order hover-underline cursor-pointer"
        >
          Orders
          <button
            className="delete-btn" // Class for styling the delete button
            onClick={gotoorder}
          >
            <img src={ord.src} alt="dele" />
          </button>
        </h3>
        <h3
          className="paymentmethods hover-underline cursor-pointer"
          onClick={gotocards}
        >
          {" "}
          Payment Methods
          <button
            className="delete-btn" // Class for styling the delete button
            onClick={gotocards}
          >
            <img src={cred.src} alt="dele" />
          </button>
        </h3>
        <h3
          onClick={gotoaddress}
          className="address hover-underline cursor-pointer"
        >
          Address
          <button
            className="delete-btn" // Class for styling the delete button
            onClick={gotoaddress}
          >
            <img src={add.src} alt="dele" />
          </button>
        </h3>
      </div>
    </div>
  );
};

export default ProfileForm;
