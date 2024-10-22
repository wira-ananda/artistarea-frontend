import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      id="Footer"
      className="h-[7vh] lg:h-[12vh] w-full bg-black flex items-center"
    >
      <div className="w-[85%] h-full flex justify-between m-auto items-center text-white">
        <div className="flex items-center">
          <Image
            src="/img/abbLogo.png"
            alt="Abb Logo"
            width={55}
            height={55}
            className="w-[40px] sm:w-[50px] md:w-[55px]"
            unoptimized
          />
          <div className="text-[1.5rem] sm:text-[1.6rem] lg:text-[1.7rem] font-semibold">
            <h1 id="textGradient">Ambalan</h1>
            <h1 id="textGradient" className="bottom-3">
              Abbulosibatang
            </h1>
          </div>
        </div>
        <h1 className="text-[1.5rem] lg:text-[1.7rem] font-medium text-wiraaColor">
          created by{" "}
          <a
            id="waterMark"
            className="font-semibold"
            href="https://wiraananda.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wiraa
          </a>
        </h1>
      </div>
    </div>
  );
}
