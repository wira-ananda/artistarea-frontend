"use client";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Header from "./Header";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('/img/sad.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "48.5%" : "center",
      }}
      className="w-[100%] h-[65vh] sm:h-[50vh] md:h-[100vh] font-bold"
      id="Home"
    >
      <Header gradient="textGradient" />
      <div className="flex">
        <div className="w-full mx-auto px-[5%] md:px-1 ">
          <div className="md:w-[47%]  top-[5%] font-bold ml-10 lg:ml-32 text-center md:text-start text-yellowColor">
            <span className="text-[2rem] top-[1rem]">
              <a id="textGradient" className="font-semibold">
                Selamat Datang,{" "}
              </a>
              <a className="text-white font-normal"> di Laman Resmi </a>
            </span>
            <span className="text-[3.7rem] md:text-[4.5rem] text-blackColor">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [
                    `<span id='textGradient'>Pramuka Salis</span>`,
                    `<span id='textGradient'>Ambalan Abbulosibatang</span>`,
                    `<span id='textGradient'>Ambalan Abbulosibatang</span>`,
                  ],
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
