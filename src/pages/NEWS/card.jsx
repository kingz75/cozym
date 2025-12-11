import React from "react";
import { FaSearch, FaComments } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import Newsimage1 from "../../assets/images/newsimage1.png";
import Newsimage2 from "../../assets/images/newsimage2.png";
import Newsimage3 from "../../assets/images/newsimage3.png";
import News1 from "../../assets/images/news1.png";
import News2 from "../../assets/images/news2.png";
import News3 from "../../assets/images/news3.png";

export default function BlogPage() {
  return (
    <div className="w-full bg-white py-12 px-4 ">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN (POSTS) */}
          <div className="col-span-2 space-y-10">
            {/* POST 1 */}
            <div className="rounded-xl overflow-hidden shadow-md border">
              <img
                src={Newsimage1}
                alt="Post"
                className="w-full h-[320px] object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-[#F7C04A] text-white text-xs px-3 py-1 rounded-md">
                  05 July 2022
                </span>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center gap-1">
                    <IoPersonCircle className="text-[#F7C04A]" /> by Kevin
                    Martin
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComments className="text-[#F7C04A]" /> 1 Comment
                  </span>
                </div>

                <h2 className="text-2xl font-semibold mt-4">
                  Oil & Gas News & Opinion
                </h2>

                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus placerat nibh...
                </p>

                <button className="mt-4 text-[#FAA419] font-semibold hover:underline">
                  Read More
                </button>
              </div>
            </div>

            {/* POST 2 */}
            <div className="rounded-xl overflow-hidden shadow-md border">
              <img
                src={Newsimage2}
                alt="Post"
                className="w-full h-[320px] object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-[#F7C04A] text-white text-xs px-3 py-1 rounded-md">
                  05 July 2022
                </span>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center gap-1">
                    <IoPersonCircle className="text-[#F7C04A]" /> by Kevin
                    Martin
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComments className="text-[#F7C04A]" /> 1 Comment
                  </span>
                </div>

                <h2 className="text-2xl font-semibold mt-4">
                  From Oil And Gas To ‘all Energy’
                </h2>

                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus placerat nibh...
                </p>

                <button className="mt-4 text-[#FAA419] font-semibold hover:underline">
                  Read More
                </button>
              </div>
            </div>

            {/* POST 3 */}
            <div className="rounded-xl overflow-hidden shadow-md border">
              <img
                src={Newsimage3}
                alt="Post"
                className="w-full h-[320px] object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-[#F7C04A] text-white text-xs px-3 py-1 rounded-md">
                  05 July 2022
                </span>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center gap-1">
                    <IoPersonCircle className="text-[#F7C04A]" /> by Kevin
                    Martin
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComments className="text-[#F7C04A]" /> 5 Comments
                  </span>
                </div>

                <h2 className="text-2xl font-semibold mt-4">
                  Tackling The Energy Identity Crisis
                </h2>

                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus placerat nibh...
                </p>

                <button className="mt-4 text-[#FAA419] font-semibold hover:underline">
                  Read More
                </button>
              </div>
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center items-center gap-3 pt-4">
              <button className="w-8 h-8 rounded-md bg-[#012A42] text-white">
                1
              </button>
              <button className="w-8 h-8 rounded-md border">2</button>
              <button className="w-8 h-8 rounded-md border">➜</button>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-10">
            {/* SEARCH BOX */}

            <div className="flex items-center bg-[#012A42] rounded-lg overflow-hidden px-2">
              <input
                type="text"
                placeholder="Search Here..."
                className="flex-1 outline-none text-[#ffffff] bg-[#012A42]  px-6 py-4"
              />
              <FaSearch className="text-[#ffffff]" />
            </div>

            {/* LATEST POSTS WITH IMAGES */}
            <div className="bg-[#FFF7E9] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-5">Latest Posts</h3>

              <div className="space-y-5">
                {/* Post 1 */}
                <div className="flex items-center gap-4">
                  <img
                    src={News1}
                    alt="Latest Post"
                    className="w-20 h-16 object-cover rounded-md"
                  />
                  <div>
                    <span className="text-xs text-gray-500">
                      by Kevin Martin
                    </span>
                    <p className="text-sm font-semibold">
                      A Tech-enabled Talent Pool
                    </p>
                  </div>
                </div>

                {/* Post 2 */}
                <div className="flex items-center gap-4">
                  <img
                    src={News2}
                    alt="Latest Post"
                    className="w-20 h-16 object-cover rounded-md"
                  />
                  <div>
                    <span className="text-xs text-gray-500">
                      by Kevin Martin
                    </span>
                    <p className="text-sm font-semibold">
                      Strategic Digitalization
                    </p>
                  </div>
                </div>

                {/* Post 3 */}
                <div className="flex items-center gap-4">
                  <img
                    src={News3}
                    alt="Latest Post"
                    className="w-20 h-16 object-cover rounded-md"
                  />
                  <div>
                    <span className="text-xs text-gray-500">
                      by Kevin Martin
                    </span>
                    <p className="text-sm font-semibold">
                      Building The Talent Pipeline
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CATEGORIES */}
            <div className="bg-[#FFF7E9] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>

              <ul className="space-y-3 text-gray-700">
                <li>Industry News</li>
                <li>Oil and Gas</li>
              </ul>
            </div>

            {/* TAGS */}
            <div className="bg-[#FFF7E9] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Tags</h3>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white border rounded-md text-sm">
                  Oil and Gas
                </span>
                <span className="px-3 py-1 bg-white border rounded-md text-sm">
                  Engineer
                </span>
                <span className="px-3 py-1 bg-white border rounded-md text-sm">
                  News
                </span>
                <span className="px-3 py-1 bg-white border rounded-md text-sm">
                  Projects
                </span>
                <span className="px-3 py-1 bg-white border rounded-md text-sm">
                  Others
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
