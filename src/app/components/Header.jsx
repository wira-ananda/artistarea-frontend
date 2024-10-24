"use client";

import React from "react";
import Headroom from "react-headroom";
import Image from "next/image";

export default function Header({ gradient }) {
  return (
    <Headroom>
      <div className="w-full z-50 bg-transparent">
        <header className="backdrop-blur-xl text-[1.8rem] flex text-white h-[8rem] md:h-[8rem] lg:h-[10rem] justify-between font-normal">
          <div className="flex text-[1.8rem] h-full">
            <div className="flex items-center">
              <Image
                src="/img/abbLogo.png"
                alt="Abb Logo"
                width={55}
                height={55}
                className="ml-[3rem] w-[40px] sm:w-[50px] md:w-[55px]"
                unoptimized
              />
            </div>
            <div className="items-center flex">
              <div className="text-[1.5rem] font-semibold">
                <h1 id={gradient}>Accera'</h1>
                <h1 id={gradient} className="bottom-2">
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
