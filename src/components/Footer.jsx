import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

// Import your social icon images
import TwitterIcon from "../assets/icons/xbg.svg";
import FacebookIcon from "../assets/icons/facebookbg.svg";
import LinkedInIcon from "../assets/icons/inbg.svg";
import InstagramIcon from "../assets/icons/instagrambg.svg";
import Footericon from "../assets/icons/footericon.svg";

export default function Footer() {
  return (
    <footer className=" bg-[#012A42]  ">
      {/* MAIN FOOTER */}
      <div className=" text-[#FFFFFF] max-w-[1100px] mx-auto py-16 ">
        <div className="grid grid-cols-3 gap-20">
          {/* Left Section */}
          <div>
            <img src={Footericon} alt="Cozym Logo" className="mb-6" />

            <p className="text-[15px] font-medium leading-relaxed text-[#A5A49A]">
              Established in 2012, Cozym began in water and environmental
              engineering and evolved into a trusted EPC partner for oil & gas
              projects.
            </p>

            {/* Social Icons */}
            <div className="flex gap-[1px] mt-6">
              <a href="#" target="_blank">
                <img
                  src={TwitterIcon}
                  alt="Twitter"
                  className=" cursor-pointer hover:opacity-80"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className=" cursor-pointer hover:opacity-80"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className=" cursor-pointer hover:opacity-80"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className=" cursor-pointer hover:opacity-80"
                />
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-bold text-lg">Explore</h3>
            <div className="flex gap-1">
              <div className="w-12 h-1 bg-[#FAA419] mt-2 mb-4 rounded"></div>
              <div className="w-1 h-1 bg-[#FAA419] mt-2 mb-4 rounded"></div>
            </div>

            <ul className="space-y-2 text-[#A5A49A] text-[15px] font-medium">
              <li>
                <Link to="/about" className="hover:text-[#FAA419] duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#FAA419] duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-[#FAA419] duration-200"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className="hover:text-[#FAA419] duration-200"
                >
                  Cozym Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#FAA419] duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contact</h3>

            <div className="flex gap-1 mb-4">
              <div className="w-12 h-1 bg-[#FAA419] rounded"></div>
              <div className="w-1 h-1 bg-[#FAA419] rounded"></div>
            </div>

            <div className="flex items-center gap-3 text-[#A5A49A] text-[15px] ">
              +234 907 0000 251
            </div>
            <div className="flex items-center gap-3 text-[#A5A49A] text-[15px]">
              +234 907 0000 252
            </div>
            <div className="flex items-center gap-3 text-[#A5A49A] text-[15px]">
              +234 907 0000 253
            </div>

            <div className="flex items-center gap-4 text-[#A5A49A] mt-2 text-[15px]">
              info@cozymltd.com
            </div>

            <div className="flex items-start gap-4 text-[#A5A49A] text-[15px] mt-2 leading-relaxed">
              Plot 2, Block 115, Ayo Babatunde Crescent, Off Oniru New Market
              Road, Lekki, Lagos State, Nigeria
            </div>

            {/* Email Input + Telegram Button */}
            <div className="flex items-center bg-white rounded-md overflow-hidden mt-4 w-full ">
              <input
                type="text"
                placeholder="Your Email Address"
                className="flex-1 px-3 py-2 text-black text-sm outline-none"
              />
              <button className="bg-[#FAA419] px-4 py-4 flex items-center justify-center">
                <FaTelegramPlane className="text-[#ffffff] text-[15px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="bg-[#1A1A1A] text-[#A5A49A] text-center py-4 text-sm">
        © All Copyright 2024 by Cozym Ltd
      </div>
    </footer>
  );
}
