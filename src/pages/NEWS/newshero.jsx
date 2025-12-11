import React from "react";
import Newsbg from "../../assets/back/newsbg.png";

export default function Careerhero() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src={Newsbg}
        alt="career background"
        className="w-full h-[400px] object-cover"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-[#ffffff] text-[14px] font-semibold mt-3 drop-shadow">
          Home / Blog
        </p>
        <h1 className="text-[#ffffff] text-[50px] font-extrabold drop-shadow-lg">
          News & Insights
        </h1>
      </div>
    </div>
  );
}
