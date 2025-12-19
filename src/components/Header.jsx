import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Mainicon from "../assets/icons/footericon.svg";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

export default function Header2() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileProjectOpen, setMobileProjectOpen] = useState(false);

  // Detect active path
  const { pathname } = useLocation();
  const isServiceActive = pathname.startsWith("/services");
  const isProjectActive = pathname.startsWith("/projects");

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
    <header className="w-full fixed md:static top-0 left-0 right-0 z-50">
      {/* NAV BAR */}
      <div className=" w-full absolute top-0 left-0 z-50">
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
            <ul className="hidden md:flex items-center gap-6 text-[#ffffff] font-semibold">
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
                  <div className="absolute top-6 left-0 bg-white/10 backdrop-blur-[10px] shadow-lg rounded w-[350px] py-6 z-50">
                    <NavLink
                      to="/services/oilngas"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                                  after:h-[2px] after:w-0 after:bg-[#FAA419]
                                  after:transition-all after:duration-300
                                  hover:after:w-28 hover:text-[#ffffff]"
                    >
                      Oil & Gas Production Facilities
                    </NavLink>

                    <NavLink
                      to="/services/gasprocessing"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                                  after:h-[2px] after:w-0 after:bg-[#FAA419]
                                  after:transition-all after:duration-300
                                  hover:after:w-28 hover:text-[#ffffff]"
                    >
                      Gas Processing & Conditioning
                    </NavLink>

                    <NavLink
                      to="/services/gasdistribution"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                                  after:h-[2px] after:w-0 after:bg-[#FAA419]
                                  after:transition-all after:duration-300
                                  hover:after:w-28 hover:text-[#ffffff]"
                    >
                      Gas Distribution & Terminals
                    </NavLink>
                    <br />

                    <NavLink
                      to="/services/pipeline"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                                  after:h-[2px] after:w-0 after:bg-[#FAA419]
                                  after:transition-all after:duration-300
                                  hover:after:w-28 hover:text-[#ffffff]"
                    >
                      Pipelines & Distribution Networks
                    </NavLink>

                    <NavLink
                      to="/services/technical"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                                  after:h-[2px] after:w-0 after:bg-[#FAA419]
                                  after:transition-all after:duration-300
                                  hover:after:w-28 hover:text-[#ffffff]"
                    >
                      Technical Training
                    </NavLink>
                    <br />

                    <NavLink
                      to="/services/storage"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                                  after:h-[2px] after:w-0 after:bg-[#FAA419]
                                  after:transition-all after:duration-300
                                  hover:after:w-28 hover:text-[#ffffff]"
                    >
                      Storage Facilities
                    </NavLink>

                    <NavLink
                      to="/services/utility"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                                  after:h-[2px] after:w-0 after:bg-[#FAA419]
                                  after:transition-all after:duration-300
                                  hover:after:w-28 hover:text-[#ffffff]"
                    >
                      Utility & Support Infrastructure
                    </NavLink>

                    <NavLink
                      to="/services/procurement"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                                  after:h-[2px] after:w-0 after:bg-[#FAA419]
                                  after:transition-all after:duration-300
                                  hover:after:w-28 hover:text-[#ffffff]"
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
                  <div className="absolute top-6 left-0 bg-white/10 backdrop-blur-[10px] shadow-lg rounded w-[350px] py-6 z-20">
                    <NavLink
                      to="/projects/lpg"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                   after:content-[''] after:absolute after:left-0 after:-bottom-1
                                   after:h-[2px] after:w-0 after:bg-[#FAA419]
                                   after:transition-all after:duration-300
                                   hover:after:w-28 hover:text-[#ffffff]"
                    >
                      LPG Storage & Distribution Terminal
                    </NavLink>

                    <NavLink
                      to="/projects/feed"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                   after:content-[''] after:absolute after:left-0 after:-bottom-1
                                   after:h-[2px] after:w-0 after:bg-[#FAA419]
                                   after:transition-all after:duration-300
                                   hover:after:w-28 hover:text-[#ffffff]"
                    >
                      FEED — 1.6 km LPG Onshore Pipeline
                    </NavLink>

                    <NavLink
                      to="/projects/ded"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                   after:content-[''] after:absolute after:left-0 after:-bottom-1
                                   after:h-[2px] after:w-0 after:bg-[#FAA419]
                                   after:transition-all after:duration-300
                                   hover:after:w-28 hover:text-[#ffffff]"
                    >
                      DED — 18 km Onshore Gas Distribution
                    </NavLink>

                    <NavLink
                      to="/projects/integrity"
                      className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                   after:content-[''] after:absolute after:left-0 after:-bottom-1
                                   after:h-[2px] after:w-0 after:bg-[#FAA419]
                                   after:transition-all after:duration-300
                                   hover:after:w-28 hover:text-[#ffffff]"
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
              className="bg-[#FAA419] text-white px-[25px] py-[10px] rounded inline-block"
            >
              Download Profile
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[80px] left-0 right-0 bg-white/10 backdrop-blur-[10px]  z-50 md:hidden flex flex-col">
          <div className="flex-1 overflow-y-auto py-20 px-4">
            <ul className="text-white text-left space-y-4 max-w-md">
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
                  className="bg-[#FAA419] text-white px-[25px] py-[10px] rounded inline-block"
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
