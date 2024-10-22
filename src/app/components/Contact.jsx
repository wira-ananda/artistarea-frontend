import React from "react";
import { SiMinutemailer } from "react-icons/si";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/img/contactLatar.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[100%] h-[65vh] sm:h-[50vh] md:h-[100vh] font-bold items-center flex justify-center"
        id="Home"
      >
        <div>
          <SiMinutemailer
            size={60}
            className="text-yellowColor text-shadow-white mx-auto"
          />
          <div className="text-[3rem] text-yellowColor text-center">
            <h1>need a further information?</h1>
            <h1>
              just{" "}
              <a
                id="textGradient"
                className="cursor-pointer"
                href="mailto:abbscout.business@gmail.com?subject=Halo Kak👋"
              >
                contact
              </a>{" "}
              us!👋
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-yellowColor pb-6">
        {" "}
        <Image
          src="/img/CatalystCrew.png"
          alt="Abb Logo"
          width={55}
          height={55}
          className="w-[100px] md:w-[180px] mx-auto pb-8 pt-[3rem]"
          unoptimized
        />
        <div className="flex mx-auto items-center justify-center gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/abbscout/"
          >
            <RiInstagramFill
              className="cursor-pointer text-[3.4rem] top-[0.5px]" // Ubah ukuran berdasarkan breakpoint
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:abbscout.business@gmail.com?subject=Halo Kak👋"
          >
            <MdEmail
              className="cursor-pointer text-[3.5rem]" // Ubah ukuran berdasarkan breakpoint
            />
          </a>
        </div>
        <div className="flex justify-center items-center pt-[4rem] text-white">
          <p className="text-center text-sm">
            Copyright © 2024{" "}
            <span className="font-semibold">Ambalan Abbulosibatang</span> - All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

//
