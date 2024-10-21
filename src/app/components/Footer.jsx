import React from "react";
import Image from "next/image"; // Import Image from next/image

export default function Footer() {
  return (
    <div
      id="Footer"
      className="h-[7vh] lg:h-[12vh] w-full bg-black flex items-center"
    >
      <div className="w-[75%] h-full flex justify-between m-auto items-center text-white">
        <div className="flex items-center justify-center">
          <Image
            src="/img/abbLogo.png"
            alt="Abb Logo"
            width={55} // Default width for larger screens
            height={55} // Default height
            className="ml-[3rem] w-[40px] sm:w-[50px] md:w-[55px]" // Adjusts width based on screen size
          />
          <div className="text-[1.5rem] sm:text-[1.6rem] lg:text-[1.7rem] font-semibold">
            <h1 id="textGradient">Ambalan</h1>
            <h1 id="textGradient" className="bottom-3">
              Abbulosibatang
            </h1>
          </div>
        </div>
        <h1 className="text-[1.5rem] lg:text-[1.7rem] text-wiraaColor">
          created by{" "}
          <a
            id="waterMark"
            className="font-semibold"
            href="https://wiraananda.netlify.app/"
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Security feature
          >
            Wiraa
          </a>
        </h1>
      </div>
    </div>
  );
}
