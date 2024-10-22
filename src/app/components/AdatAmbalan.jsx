"use client"; // Declare this component as a Client Component

import React from "react";
import Image from "next/image"; // Importing Image from Next.js
import { FaBookOpen } from "react-icons/fa"; // Importing the book icon from react-icons

// Define paths for assets located in the public folder
const AdatAmbalanPDF = "/pdf/AdatAmbalanAbbulosibatang.pdf"; // Direct path as it’s in public

export default function AdatAmbalan() {
  // Function to open the PDF in a new tab
  const openPDFInNewTab = () => {
    window.open(AdatAmbalanPDF, "_blank"); // Opens the PDF in a new tab
  };

  return (
    <div className="w-full h-[10vh] md:h-[20vh] relative">
      <Image
        src="/img/lab.png" // Using Image component for the background
        alt="Background" // Alt text for accessibility
        layout="fill" // Makes the image cover the entire parent div
        objectFit="cover" // Ensures the image covers the div properly
        className="absolute inset-0" // Absolute positioning to cover the entire div
        unoptimized
      />
      <div
        onClick={openPDFInNewTab}
        className="cursor-pointer bottom-4 w-full h-full items-center pl-[10%] flex gap-[3rem] text-yellowColor relative z-10 transition-color duration-300 ease-in-out hover:text-shadow-yellow"
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
