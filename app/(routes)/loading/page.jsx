"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Loading = () => {
  const text = "localities";
  useGSAP(() => {
    var tl = gsap.timeline({
      delay: 0.02,
      repeat: -1,
    //   repeatDelay: 0.5,
    });
    tl.from("#load", {
        y: -50,
        rotate: -10,
        duration: 1,
        // delay: 0.05,
        ease: "back.inout",
        opacity: 0,
        stagger: 0.1,
        // yoyo: true,
        // repeat: -1,
        // yoyoEase: "power4.out",
      })
      tl.to("#load",{
        y: 50,
        rotate: 5,
        duration: 0.2,
        // delay: 0.05,
        ease: "back.inout",
        opacity: 0,
        stagger: 0.07,
      });
  });

  return (
    <div className="w-full h-full font-BebasNeue font-black text-black flex justify-center items-center">
      {text.split("").map((fn, i) => (
        <div className="text-7xl text-green-500" id="load" key={i}>
          {fn}
        </div>
      ))}
    </div>
  );
};

export default Loading;
