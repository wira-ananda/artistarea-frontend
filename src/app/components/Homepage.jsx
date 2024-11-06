import React from "react";
import Typewriter from "typewriter-effect";
import Header from "./Header";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url('https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/photographs/photographs_marquee.jpg?as=1&mh=940&mw=2320&sc_lang=en&hash=AEFF33D9BCD8854619027C09FA484D08')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[50vh] md:h-[70vh] font-bold relative"
      id="Home"
    >
      <Header gradient="textGradient" />
      {/* Overlay Hitam Buram */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex items-center justify-center h-full relative z-10">
        <div className="text-center">
          <div className="bottom-[6rem]">
            <span className="text-[2rem]">
              <a id="textGradient3" className="font-semibold">
                Selamat Datang,{" "}
              </a>
              <a className="text-white font-semibold"> di website </a>
            </span>
            <span className="text-[3.7rem] md:text-[4.5rem] text-blackColor">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [
                    `<span id='textGradient3'>Artist Area</span>`,
                    `<span id='textGradient3'>Dunia dalam Seni</span>`,
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
