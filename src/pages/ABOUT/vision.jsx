import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom SVG Icons (as image files)
import vision from "../../assets/icons/vision.svg";
import mission from "../../assets/icons/mission.svg";
import values from "../../assets/icons/value.svg";

export default function Vision() {
  const [page, setPage] = useState(0);

  const nextPage = () => setPage((p) => Math.min(p + 1, 1));
  const prevPage = () => setPage((p) => Math.max(p - 1, 0));

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-[#002941] overflow-hidden text-white py-6 ">
      {/* MAIN SLIDER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${page * 100}%)` }}
      >
        {/* SLIDE 1 */}
        <div className="w-full flex-none flex items-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-28 max-w-[1400px] mx-auto">
            {/* Vision */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#FAA419] flex items-center gap-2 sm:gap-4">
                Our Vision
                <img
                  src={vision}
                  alt="vision icon"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed font-medium text-[#FFFFFF]">
                To be the trusted partner delivering reliable{" "}
                <br className="hidden sm:block" /> and innovative oil and gas
                infrastructure in <br className="hidden md:block" /> Nigeria and
                across West Africa.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#FAA419] flex items-center gap-2 sm:gap-4">
                Our Mission
                <img
                  src={mission}
                  alt="mission icon"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed font-medium text-[#FFFFFF]">
                We deliver dependable oil and gas infrastructure combining{" "}
                <br className="hidden sm:block" />
                technical excellence, innovation, and compliance to create
                lasting <br className="hidden md:block" /> value for clients
                across Nigeria and West Africa.
              </p>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="w-full flex-none flex flex-col justify-center py-8 sm:py-12 lg:py-16 px-4">
          <div className="mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#FAA419] mb-6 sm:mb-8 lg:mb-10 flex items-center gap-2 sm:gap-4">
              Corporate Values
              <img
                src={values}
                alt="values icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-[1100px] mx-auto">
              <div>
                <h3 className="text-[#FAA419] text-sm sm:text-base lg:text-[16px] font-bold">
                  INTEGRITY
                </h3>
                <p className="mt-1 text-sm sm:text-base lg:text-[16px] leading-relaxed font-medium text-[#FFFFFF]">
                  We deliver on our promises with transparency, accountability,
                  and ethical conduct.
                </p>
              </div>

              <div>
                <h3 className="text-[#FAA419] text-sm sm:text-base lg:text-[16px] font-bold">
                  INNOVATION
                </h3>
                <p className="mt-1 text-sm sm:text-base lg:text-[16px] leading-relaxed font-medium text-[#FFFFFF]">
                  We think ahead solving complex challenges with smart, adaptive
                  engineering solutions.
                </p>
              </div>

              <div>
                <h3 className="text-[#FAA419] text-sm sm:text-base lg:text-[16px] font-bold">
                  RELIABILITY
                </h3>
                <p className="mt-1 text-sm sm:text-base lg:text-[16px] leading-relaxed font-medium text-[#FFFFFF]">
                  We uphold a standard of consistency and reliability that
                  ensures we deliver every time.
                </p>
              </div>

              <div>
                <h3 className="text-[#FAA419] text-sm sm:text-base lg:text-[16px] font-bold">
                  EXECUTION EXCELLENCE
                </h3>
                <p className="mt-1 text-sm sm:text-base lg:text-[16px] leading-relaxed font-medium text-[#FFFFFF]">
                  We build with discipline and precision, ensuring every project
                  meets the highest standards.
                </p>
              </div>

              <div>
                <h3 className="text-[#FAA419] text-sm sm:text-base lg:text-[16px] font-bold">
                  PARTNERSHIP
                </h3>
                <p className="mt-1 text-sm sm:text-base lg:text-[16px] leading-relaxed font-medium text-[#FFFFFF]">
                  We work collaboratively aligning with our clients and
                  suppliers to achieve shared success.
                </p>
              </div>

              <div>
                <h3 className="text-[#FAA419] text-sm sm:text-base lg:text-[16px] font-bold">
                  SAFETY & QUALITY
                </h3>
                <p className="mt-1 text-sm sm:text-base lg:text-[16px] leading-relaxed font-medium text-[#FFFFFF]">
                  We never compromise delivering infrastructure that is safe,
                  durable, and built to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION ARROWS - Hidden on mobile */}
      <button
        onClick={prevPage}
        className={`hidden md:block absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl ${
          page === 0 ? "opacity-20 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextPage}
        className={`hidden md:block absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl ${
          page === 1 ? "opacity-20 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
