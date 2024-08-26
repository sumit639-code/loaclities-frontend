"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const registerUrl = "http://localhost:8080/users/register";
const RegistrationPage = () => {
  const router = useRouter();
  const [userType, setUserType] = useState("regular");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    businessName: "",
    businessDescription: "",
    userType: userType,
    location: "",
    categories: "",
    profilePicture: null,
  });

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(registerUrl, {
        // Replace with your API endpoint
        method: "POST",
        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle success (e.g., redirect to login page, show success message)
        console.log("Registration successful:", result);
        router.push("/login");
        // Optional: Redirect to login page or show a success message
        // window.location.href = '/login';
      } else {
        // Handle errors (e.g., show error message)
        console.error("Registration failed:", result);
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
    }
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
          <form className="flex flex-col space-y-4 p-1 w-full transition-all">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500/40 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
            />
            <select
              name="userType"
              className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="regular">Regular</option>
              <option value="business">Business</option>
            </select>
            {userType === "business" && (
              <>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name (if Business)"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
                />
                <textarea
                  name="businessDescription"
                  placeholder="Business Description"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
                  rows="3"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
                />
                <input
                  type="text"
                  name="categories"
                  placeholder="Categories (comma-separated)"
                  value={formData.categories}
                  onChange={handleInputChange}
                  className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:bg-gray-200 hover:border-green-500 border-2 border-transparent"
                />
              </>
            )}
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-white/80">
                Profile Picture
              </label>
              <input
                type="file"
                name="profilePicture"
                onChange={handleFileChange}
                className="px-3 py-2 text-white/80 file:bg-green-700 file:rounded-md file:border-0 file:px-4 file:py-2 file:mr-4 file:text-white/80 hover:file:bg-green-600 transition-all"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="px-5 py-2 rounded-md my-4 w-full flex justify-center items-center bg-green-700 hover:bg-green-600 transition-all active:scale-[0.9]"
            >
              Register
            </button>
            <Link
              href="/login"
              className="text-xs text-white/80 hover:underline cursor-pointer hover:text-green-500"
            >
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
