"use client";

import React, { useState } from "react";
import Headroom from "react-headroom";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icon for menu toggle

export default function Header() {
  const [navList, setNavList] = useState(false);

  const changeNav = () => {
    setNavList(!navList);
  };

  return (
    <Headroom>
      <div className="w-full z-50 bg-transparent">
        {/* Konten header utama */}
        <header className="backdrop-blur-xl text-[1.8rem] flex text-white h-[8rem] md:h-[8rem] lg:h-[10rem] justify-between font-normal">
          <div className="flex text-[1.8rem] h-full">
            <div className="flex items-center">
              {/* Gunakan Image dari next/image */}
              <Image
                src="/img/abbLogo.png"
                alt="Abb Logo"
                width={55} // Default width for larger screens
                height={55} // Default height
                className="ml-[3rem] w-[40px] sm:w-[50px] md:w-[55px]" // Adjusts width based on screen size
                unoptimized
              />
            </div>
            <div className="items-center flex">
              <div className="text-[1.5rem] font-medium">
                <h1 id="textGradient">Accera'</h1>
                <h1 id="textGradient" className="bottom-2">
                  Sitongka'-Tongka'
                </h1>
              </div>
            </div>
          </div>
        </header>
      </div>
    </Headroom>
  );
}
