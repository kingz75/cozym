import React from "react";
import Contactbg from "../../assets/back/contactbg.jpg";

export default function Contacthero() {
  return (
    <div className="relative w-full pb-10 pt-20 md:pt-0">
      {/* Background Image */}
      <img
        src={Contactbg}
        alt="career background"
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <p className="text-[#ffffff] text-xs sm:text-sm lg:text-[14px] font-semibold mt-3 drop-shadow">
          Home / Contact
        </p>
        <h1 className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold drop-shadow-lg">
          Contact
        </h1>
      </div>
    </div>
  );
}
