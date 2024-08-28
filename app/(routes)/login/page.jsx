"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const url = "http://localhost:8080/users/login";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // State to hold error message

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit(); // Call handleSubmit directly
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [userLogin]); // Add userLogin as a dependency to update the event listener when state changes

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault(); // Only prevent default if `e` is passed
    setLoading(true);
    setError(""); // Clear previous errors before making a request
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || "An unknown error occurred";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      localStorage.setItem("refreshToken", data.data.refreshToken);
      router.push("/user/home");
    } catch (error) {
      setError(error.message); // Set the error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center text-white font-RedHat font-semibold p-4">
      <div className="max-w-4xl w-full border-2 md:flex md:flex-row bg-zinc-900 border-slate-500/30 rounded-lg p-6 m-4 shadow-2xl shadow-slate-600/40">
        <div className="overflow-hidden rounded-md mb-4 md:mb-0 md:mr-4 flex-shrink-0">
          <Image
            src="/login-cover.jpg"
            alt="Login cover"
            width={400}
            height={400}
            className="object-cover w-full h-full md:w-[370px] md:h-full"
          />
        </div>
        <div className="flex transition-all flex-col items-center justify-center w-full">
          <div className="text-2xl md:text-3xl font-bold mb-4">Login</div>
          <div className="text-sm text-white/60">Sign in using</div>
          <div className="flex space-x-3 p-2 mb-3">
            <button
              aria-label="Login with Google"
              className="text-xl md:text-2xl p-2 border-[1px] rounded-full hover:scale-[1.1] active:scale-[0.9] transition-all border-white/40 shadow-sm shadow-green-500"
            >
              <FaGoogle />
            </button>
            <button
              aria-label="Login with Github"
              className="text-xl md:text-2xl p-2 border-[1px] rounded-full hover:scale-[1.1] active:scale-[0.9] transition-all border-white/40 shadow-sm shadow-green-500"
            >
              <FaGithub />
            </button>
          </div>
          <div className="text-sm text-white/60 mb-2">Or</div>
          <div className="flex flex-col space-y-4 p-1 w-full">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email"
              className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500 w-full hover:scale-[0.99] focus:text-green-800"
              autoFocus
              value={userLogin.email}
              onChange={handleInput}
            />
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="Password"
              value={userLogin.password}
              onChange={handleInput}
              className="px-3 py-2 rounded-sm outline-none text-black shadow-md transition-all shadow-green-500/40 w-full hover:scale-[0.99]"
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <div className="text-xs hover:underline cursor-pointer text-white/80">
            Forgot Password
          </div>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-md my-4 w-full flex justify-center items-center bg-green-700 hover:bg-green-600 transition-all active:scale-[0.9]"
          >
            Login
            {loading ? (
              <img
                src="/loading.gif"
                alt="loading gif"
                className="w-6 h-6 object-contain ml-3"
              />
            ) : null}
          </button>
          <Link
            href="/register"
            className="text-xs text-white/80 hover:underline cursor-pointer hover:text-green-500"
          >
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
