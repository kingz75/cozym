import React from "react";
import Contactbg from "../../assets/back/contactbg.jpg";

export default function Contacthero() {
  return (
    <div className="relative w-full pb-10">
      {/* Background Image */}
      <img
        src={Contactbg}
        alt="career background"
        className="w-full h-[400px] object-cover"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-[#ffffff] text-[14px] font-semibold mt-3 drop-shadow">
          Home / Contact
        </p>
        <h1 className="text-[#ffffff] text-[50px] font-extrabold drop-shadow-lg">
          Contact
        </h1>
      </div>
    </div>
  );
}
