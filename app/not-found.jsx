"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const notfound = () => {
  const text = "404";
  useGSAP(() => {
    var tl = gsap.timeline({
      delay: 0.02,
      repeat: -1,
      //   repeatDelay: 0.5,
    });
    tl.from("#err", {
      // y: -20,
      // rotate: -0,
      duration: 0.5,
      // delay: 0.05,
      ease: "bounce.in",
      opacity: 0,
      stagger: 0.3,

      // yoyo: true,
      // repeat: -1,
      // yoyoEase: "power4.out",
    });
    tl.to("#err", {
      delay: 2,
      // y: 20,
      rotate: 0.6,
      duration: 0.5,
      // delay: 0.05,
      ease: "bounce.out",
      opacity: 0,
      stagger: 0.1,
    });
  });

  return (
    <div className="text-white w-full h-full flex flex-col items-center justify-center font-BebasNeue text-8xl">
      <div className="relative flex items-center justify-center">
        {text?.split("").map((fn, i) => {
          return (
            <div
              id="err"
              className="text-green-500 z-10 drop-shadow-2xl shadow-green-500"
              key={i}
            >
              {fn}
            </div>
          );
        })}
        <div
          id="err"
          className="text-green-500 blur-md absolute opacity-45 drop-shadow-2xl shadow-green-500"
        >
          {text}
        </div>
      </div>
      <div id="err2" className="text-xl">
        NOT-Found
      </div>
      <div id="err2" className="text-[6px] font-RedHat uppercase ">
        There is some error in the server.
      </div>
    </div>
  );
};

export default notfound;
