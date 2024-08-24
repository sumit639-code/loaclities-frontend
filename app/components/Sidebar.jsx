import { Category, Home, Logout, People, Search } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
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
            href="/profile"
            className="block py-2.5 px-4 rounded-full transition duration-200 hover:bg-gray-700 hover:scale-[0.9]"
          >
            Profiles
          </Link>
          <Link
            href="/"
            className="block py-2.5 px-4 rounded-full transition duration-200 hover:bg-gray-700 hover:scale-[0.9]"
          >
            Logout
          </Link>
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
          <Link
            href="/"
            className="flex flex-col items-center justify-center py-2.5 px-4"
          >
            <span>
              <Logout />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
