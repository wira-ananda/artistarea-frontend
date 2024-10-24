"use client";

import React from "react";
import Image from "next/image";
import { FaBookOpen } from "react-icons/fa";

const AdatAmbalanPDF = "/pdf/AdatAmbalanAbbulosibatang.pdf";

export default function AdatAmbalan() {
  const openPDFInNewTab = () => {
    window.open(AdatAmbalanPDF, "_blank");
  };

  return (
    <div className="w-full py-16 relative">
      <Image
        src="/img/lab.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        unoptimized
      />
      <div
        onClick={openPDFInNewTab}
        className="cursor-pointer bottom-4 w-full h-full items-center pl-[10%] flex gap-10 text-yellowColor relative transition-color duration-300 ease-in-out pb-2 hover:text-shadow-yellow"
      >
        <FaBookOpen
          size={40}
          className="transition-shadow duration-300 hover:text-shadow-yellow"
        />
        <span className="block text-left">
          <p className="font-bold text-[2rem]">Adat Ambalan</p>
          <p className="text-[1.7rem]">Abbulosibatang</p>
        </span>
      </div>
    </div>
  );
}
