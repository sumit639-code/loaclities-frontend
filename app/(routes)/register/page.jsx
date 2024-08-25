"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegistrationPage = () => {
  const [userType, setUserType] = useState("Regular");
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    console.log(userType);
  };
  return (
    <div className="min-h-full flex items-center justify-center text-white font-RedHat font-semibold p-4">
      <div className="max-w-7xl w-full border-2 md:flex md:flex-row border-slate-500/30 rounded-lg p-6 m-4 bg-gray-800">
        <div className="overflow-hidden rounded-md mb-4 md:mb-0 md:mr-4 flex-shrink-0">
          <Image
            src="/login-cover.jpg" // Replace with your own registration cover image
            alt="Register cover"
            width={400}
            height={400}
            className="object-cover w-full h-full md:w-[400px] md:h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="text-2xl md:text-3xl font-bold mb-4">Register</div>
          <div className="flex flex-col space-y-4 p-1 w-full transition-all">
            <input
              type="text"
              placeholder="Name"
              className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500/40 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
            />
            <select
              className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
              defaultValue={userType}
              value={userType} // Bind state to dropdown value
              onChange={handleUserTypeChange}
            >
              <option disabled>UserType</option>
              <option value="regular">Regular</option>
              <option value="business">Business</option>
            </select>
            {userType == "business" ? (
              <>
                <input
                  type="text"
                  placeholder="Business Name (if Business)"
                  className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
                />
                <textarea
                  placeholder="Business Description"
                  className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
                  rows="3"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
                />
                <input
                  type="text"
                  placeholder="Categories (comma-separated)"
                  className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
                />
              </>
            ) : null}
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-white/80">
                Profile Picture
              </label>
              <input
                type="file"
                className="px-3 py-2 text-white/80 file:bg-green-700 file:rounded-md file:border-0 file:px-4 file:py-2 file:mr-4 file:text-white/80 hover:file:bg-green-600 transition-all"
              />
            </div>
          </div>
          <Link
            href="/login"
            className="px-5 py-2 rounded-md my-4 w-full flex justify-center items-center bg-green-700 hover:bg-green-600 transition-all active:scale-[0.9]"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="text-xs text-white/80 hover:underline cursor-pointer hover:text-green-500"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
