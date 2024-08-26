"use client"
import React, { useState } from "react";
import { Category, Home, Logout, People, Search } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
// Import the Modal component

const logoutUrl = "http://localhost:8080/users/logout"; // Correct URL

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch(logoutUrl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("refreshToken");
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setShowModal(false);
    }
  };

  return (
    <div className="font-RedHat font-semibold">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex text-white items-center justify-center h-full font-RedHat">
        <div className="p-6">
          <h1 className="text-2xl font-black text-green-500">Localities</h1>
        </div>
        <nav className="transition-all w-full h-full text-white font-RedHat font-semibold flex space-x-4 items-center">
          <Link
            href="/user/home"
            className="block py-2 px-4 rounded-full transition-all duration-200 hover:bg-gray-700 hover:scale-[0.9]"
          >
            Home
          </Link>
          <Link
            href="/user/category"
            className="block py-2.5 px-4 rounded-full transition duration-200 hover:bg-gray-700 hover:scale-[0.9]"
          >
            Categories
          </Link>
          <Link
            href="#"
            className="block py-2.5 px-4 rounded-full transition duration-200 hover:bg-gray-700 hover:scale-[0.9]"
          >
            Search
          </Link>
          <Link
            href="/user/profile"
            className="block py-2.5 px-4 rounded-full transition duration-200 hover:bg-gray-700 hover:scale-[0.9]"
          >
            Profiles
          </Link>
          <button
            onClick={() => setShowModal(true)}
            className="block py-2.5 px-4 rounded-full transition duration-200 hover:bg-gray-700 hover:scale-[0.9]"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black text-white">
        <div className="flex justify-around py-2 font-Poppins font-bold">
          <Link
            href="/user/home"
            className="flex flex-col items-center justify-center py-2.5 px-4"
          >
            <span>
              <Home />
            </span>
          </Link>
          <Link
            href="/user/category"
            className="flex flex-col items-center justify-center py-2.5 px-4"
          >
            <span>
              <Category />
            </span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center py-2.5 px-4"
          >
            <span>
              <Search />
            </span>
          </Link>
          <Link
            href="/user/profile"
            className="flex flex-col items-center justify-center py-2.5 px-4"
          >
            <span>
              <People />
            </span>
          </Link>
          <button
            onClick={() => setShowModal(true)}
            className="flex flex-col items-center justify-center py-2.5 px-4"
          >
            <Logout />
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleLogout}
        title="Confirm Logout"
        message="Are you sure you want to logout?"
      />
    </div>
  );
};

export default Sidebar;
