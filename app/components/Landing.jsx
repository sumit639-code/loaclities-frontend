"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

const Landing = () => {
  const [menu, setMenu] = useState(false);
  const elementRef = useRef(null);
  const texts = "Welcome to the way of creating a new business,";
  console.log(menu);

  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from("#title", {
      y: -100,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "back.inout",
    });
    tl.from("#nav #nav-inn", {
      y: -100,
      duration: 0.5,
      stagger: 0.1,
      opacity: 0,
      ease: "back.inout",
    });
    tl.from("#text div", {
      duration: 1,
      opacity: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back.out",
      stagger: 0.15,
    });
    tl.from("#image", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "back.out",
      stagger: 0.15,
    });
    gsap.to("#page2_text", {
      transform: "translateX(-1550px)",
      ease: "back.inout",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 30%",

        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      {/* Navbar Section */}
      <div className="font-RedHat flex justify-between items-center overflow-x-hidden p-6">
        <div
          id="title"
          className="font-extrabold text-xl md:text-3xl text-green-500"
        >
          localities
        </div>
        <div
          id="nav"
          className="hidden md:flex space-x-2 md:space-x-4 items-center font-semibold text-white transition-all"
        >
          <Link
            href="/user/home"
            id="nav-inn"
            className="cursor-pointer hover:scale-y-[1.1] p-2"
          >
            Businesses
          </Link>
          <div id="nav-inn" className="cursor-pointer hover:scale-y-[1.1] p-2">
            About
          </div>
          <div id="nav-inn" className="cursor-pointer hover:scale-y-[1.1] p-2">
            Teams
          </div>
          <div id="nav-inn" className="cursor-pointer hover:scale-y-[1.1] p-2">
            Github
          </div>
          <Link
            href="/login"
            className="border-2 px-4 py-1 rounded-full transition-all hover:bg-green-500 active:scale-[0.8]"
          >
            Login
          </Link>
        </div>

        <IoMenu
          className="cursor-pointer z-10 lg:hidden text-white"
          onClick={() => setMenu(true)}
        />
        {menu ? (
          <div
            id="nav2"
            className="w-1/2 space-x-2 transition-all absolute h-full top-0 right-0 z-20 p-11 space-y-6 items-center bg-black/20 backdrop-blur-lg md:space-x-4 flex flex-col font-semibold text-white"
          >
            <div
              onClick={() => setMenu(false)}
              className="w-full relative mb-10 cursor-pointer"
            >
              <IoCloseCircleOutline size={30} className="absolute right-0" />
            </div>
            <Link href="/user/home" className="cursor-pointer">
              Businesses
            </Link>
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Teams</div>
            <div className="cursor-pointer">Github</div>
            <Link
              href="/login"
              className="border-2 px-4 py-1 rounded-full transition-all hover:bg-green-500 active:scale-[0.8]"
            >
              Login
            </Link>
          </div>
        ) : (
          <div
            id="nav2"
            className=" w-1/2 space-x-2 transition-all absolute h-full top-0 -right-full z-20 p-11 space-y-6 items-center bg-black/20 backdrop-blur-lg md:space-x-4 flex flex-col font-semibold text-white"
          >
            <div
              onClick={() => setMenu(false)}
              className="w-full relative mb-10 cursor-pointer"
            >
              <IoCloseCircleOutline size={30} className="absolute right-0" />
            </div>
            <Link href="/user/home" className="cursor-pointer">
              Businesses
            </Link>
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Teams</div>
            <div className="cursor-pointer">Github</div>
            <Link
              href="/user/home"
              className="border-2 px-4 py-1 rounded-full transition-all hover:bg-green-500 active:scale-[0.8]"
            >
              Login
            </Link>
          </div>
        )}
      </div>

      {/* Background Circle */}
      <span className="h-24 w-24 md:h-48 md:w-48 rounded-full bg-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></span>

      {/* Main Content Section */}
      <div className="relative overflow-x-hidden  h-full w-full p-5 flex flex-col md:flex-row justify-center items-center backdrop-blur-3xl bg-black/30">
        <div
          id="text"
          className="w-full md:w-1/2 pb-10 font-RedHat font-extrabold text-3xl md:text-6xl z-10 text-green-500 space-x-2 md:space-x-4"
        >
          {texts.split(" ").map((fn, i) => (
            <div className="inline-block" key={i}>
              {fn}{" "}
            </div>
          ))}
        </div>
        <div>
          <Image
            src="/intro.png"
            width={300}
            height={300}
            alt="vector image"
            id="image"
            className="p-5 md:p-10"
          />
        </div>
      </div>

      {/* Second Page Section */}
      <div id="page2" className="w-full h-full bg-green-500 relative">
        <div
          id="page2_text"
          className="font-BebasNeue font-black text-white text-[500px] md:text-[500px] translate-x-80"
        >
          Experience
        </div>
      </div>
      <div className="w-full h-full"></div>
    </>
  );
};

export default Landing;
