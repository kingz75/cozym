import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Mainicon from "../assets/icons/mainicon.svg";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileProjectOpen, setMobileProjectOpen] = useState(false);

  // Detect active path
  const { pathname } = useLocation();
  const isServiceActive = pathname.startsWith("/services");
  const isProjectActive = pathname.startsWith("/projects");

  const isHome = pathname === "/";

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header
      className={`w-full fixed md:${
        isHome ? "absolute" : "static"
      } top-0 left-0 right-0 z-50`}
    >
      {/* TOP BAR - Hidden on mobile */}
      <div
        className={`hidden md:block ${isHome ? "bg-black/50" : "bg-[#002b45]"}`}
      >
        <div className="text-[#FFFFFF] text-[10px] sm:text-[12px] font-medium py-2 px-[20px] md:px-[40px] lg:px-[80px] max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt size={12} className="sm:w-[14px] sm:h-[14px]" />
            <span>
              Plot 2, Block 115, Ayo Babatunde Crescent, Off Oniru New Market
              Road, Lekki, Lagos State, Nigeria
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <FaEnvelope size={12} className="sm:w-[14px] sm:h-[14px]" />
              <span>cozym@cozymtld.com</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAA419]"
              >
                <FaXTwitter size={14} />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAA419]"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAA419]"
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAA419]"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* NAV BAR */}
      <div className={`${isHome ? "bg-black/30" : "bg-white"} bg-contain`}>
        <div className="py-[25px] px-[20px] md:px-[60px] lg:px-[80px] max-w-[1370px] mx-auto flex justify-between items-center gap-4 relative">
          {/* Logo */}
          <div className=" h-[40px] md:h-[53px] w-[150px] md:w-[210px] ">
            <Link to="/">
              <img
                src={Mainicon}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          <nav>
            <ul
              className={`hidden md:flex items-center gap-6 font-semibold ${
                isHome ? "text-white" : "text-[#002b45]"
              }`}
            >
              {/* HOME */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
                }
              >
                Home
              </NavLink>

              {/* ABOUT */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
                }
              >
                About
              </NavLink>

              {/* SERVICES DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <span
                  className={`flex items-center gap-1 cursor-pointer ${
                    isServiceActive ? "text-[#FAA419]" : "hover:text-[#FAA419]"
                  }`}
                >
                  Services{" "}
                  {serviceOpen ? (
                    <FaChevronUp size={12} />
                  ) : (
                    <FaChevronDown size={12} />
                  )}
                </span>

                {serviceOpen && (
                  <div className="absolute top-6 left-0 bg-white shadow-lg rounded w-[350px] py-2 z-50">
                    <NavLink
                      to="/services/oilngas"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Oil & Gas Production Facilities
                    </NavLink>

                    <NavLink
                      to="/services/gasprocessing"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Gas Processing & Conditioning
                    </NavLink>

                    <NavLink
                      to="/services/gasdistribution"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Gas Distribution & Terminals
                    </NavLink>

                    <NavLink
                      to="/services/pipeline"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Pipelines & Distribution Networks
                    </NavLink>

                    <NavLink
                      to="/services/technical"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Technical Training
                    </NavLink>

                    <NavLink
                      to="/services/storage"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Storage Facilities
                    </NavLink>

                    <NavLink
                      to="/services/utility"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Utility & Support Infrastructure
                    </NavLink>

                    <NavLink
                      to="/services/procurement"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Procurement Services
                    </NavLink>
                  </div>
                )}
              </div>

              {/* PROJECTS DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setProjectOpen(true)}
                onMouseLeave={() => setProjectOpen(false)}
              >
                <span
                  className={`flex items-center gap-1 cursor-pointer ${
                    isProjectActive ? "text-[#FAA419]" : "hover:text-[#FAA419]"
                  }`}
                >
                  Projects{" "}
                  {projectOpen ? (
                    <FaChevronUp size={12} />
                  ) : (
                    <FaChevronDown size={12} />
                  )}
                </span>

                {projectOpen && (
                  <div className="absolute top-6 left-0 bg-white shadow-lg rounded w-[350px] py-2 z-20">
                    <NavLink
                      to="/projects/lpg"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      LPG Storage & Distribution Terminal
                    </NavLink>

                    <NavLink
                      to="/projects/feed"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      FEED — 1.6 km LPG Onshore Pipeline
                    </NavLink>

                    <NavLink
                      to="/projects/ded"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      DED — 18 km Onshore Gas Distribution
                    </NavLink>

                    <NavLink
                      to="/projects/integrity"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Integrity Assessment & FEED
                    </NavLink>
                  </div>
                )}
              </div>

              {/* OTHER LINKS */}
              <NavLink
                to="/academy"
                className={({ isActive }) =>
                  `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
                }
              >
                Academy
              </NavLink>

              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
                }
              >
                Careers
              </NavLink>

              <NavLink
                to="/news"
                className={({ isActive }) =>
                  `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
                }
              >
                News
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
                }
              >
                Contacts
              </NavLink>
            </ul>
          </nav>

          {/* Download Button */}
          <div className="hidden md:block">
            <a
              href="/cozymprofile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#002b45] text-white px-[25px] py-[10px] rounded inline-block"
            >
              Download Profile
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden ${isHome ? "text-white" : "text-[#002b45]"}`}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[80px] left-0 right-0 bg-[#ffffff] z-50 md:hidden flex flex-col">
          <div className="flex-1 overflow-y-auto py-20 px-4">
            <ul className="text-[#002b45] text-left space-y-4 max-w-md">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#FAA419]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#FAA419]"
                >
                  About
                </NavLink>
              </li>
              <li className="mt-4">
                <div
                  className="text-[#FAA419] font-bold cursor-pointer flex items-center gap-2"
                  onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                >
                  Services{" "}
                  {mobileServiceOpen ? (
                    <FaChevronUp size={12} />
                  ) : (
                    <FaChevronDown size={12} />
                  )}
                </div>
                {mobileServiceOpen && (
                  <ul className="space-y-2 mt-2">
                    <li>
                      <NavLink
                        to="/services/oilngas"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        Oil & Gas Production Facilities
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/gasprocessing"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        Gas Processing & Conditioning
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/gasdistribution"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        Gas Distribution & Terminals
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/pipeline"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        Pipelines & Distribution Networks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/technical"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        Technical Training
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/storage"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        Storage Facilities
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/utility"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        Utility & Support Infrastructure
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/procurement"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        Procurement Services
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mt-4">
                <div
                  className="text-[#FAA419] font-bold cursor-pointer flex items-center gap-2"
                  onClick={() => setMobileProjectOpen(!mobileProjectOpen)}
                >
                  Projects{" "}
                  {mobileProjectOpen ? (
                    <FaChevronUp size={12} />
                  ) : (
                    <FaChevronDown size={12} />
                  )}
                </div>
                {mobileProjectOpen && (
                  <ul className="space-y-2 mt-2">
                    <li>
                      <NavLink
                        to="/projects/lpg"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        LPG Storage & Distribution Terminal
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects/feed"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        FEED — 1.6 km LPG Onshore Pipeline
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects/ded"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        DED — 18 km Onshore Gas Distribution
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects/integrity"
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#FAA419]"
                      >
                        Integrity Assessment & FEED
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/academy"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#FAA419]"
                >
                  Academy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#FAA419]"
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#FAA419]"
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#FAA419]"
                >
                  Contacts
                </NavLink>
              </li>
              <li className="mt-4">
                <a
                  href="/cozymprofile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#002b45] text-white px-[25px] py-[10px] rounded inline-block"
                >
                  Download Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
