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
              />
            </div>
            <div className="items-center flex">
              <div className="text-[1.5rem] text-yellowColor">
                <h1>Accera'</h1>
                <h1 className="bottom-2">Sitongka'-Tongka'</h1>
              </div>
            </div>
          </div>
          <span className="gap-[.5rem] items-center mr-[4rem] hidden md:flex">
            <Navbar page="Home" />
            <Navbar page="About" />
          </span>
          {navList ? (
            <AiOutlineClose
              size={25}
              onClick={changeNav}
              className="flex md:hidden my-auto mr-8 cursor-pointer text-white"
            />
          ) : (
            <AiOutlineMenu
              className="flex md:hidden my-auto mr-8 cursor-pointer text-white"
              size={25}
              onClick={changeNav}
            />
          )}
        </header>

        {/* Navigation menu toggle */}
        {navList && (
          <div className="w-full fixed backdrop-blur-xl">
            <div id="navInti" className="flex w-full h-full">
              <span className="w-full my-auto bottom-[5rem]">
                <NavPage to="Home" />
                <NavPage to="About" />
              </span>
            </div>
          </div>
        )}
      </div>
    </Headroom>
  );
}

function Navbar(props) {
  return (
    <a
      href={`#${props.page}`}
      className="text-white px-4 py-1 text-[1.8rem] cursor-pointer"
    >
      {props.page}
    </a>
  );
}

function NavPage(props) {
  return (
    <a
      href={`#${props.to}`}
      className="block w-[40%] mb-[2rem] mx-auto flex cursor-pointer py-[1rem] bg-yellowColor text-blackColor transition-all"
    >
      <p className="text-[3rem] font-medium m-auto">{props.to}</p>
    </a>
  );
}
