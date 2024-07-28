/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Nav2in from "./Nav2in/Nav2-in";
import { IoLanguage } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { VscSearch } from "react-icons/vsc";
import { LiaSearchSolid } from "react-icons/lia";
// import { IoClose } from "react-icons/io5";

import "../../../public/assets/css/Nav2.css";

const links = [
  {
    name: "Asosiy",
    path: "/",
  },
  {
    name: "Popular",
    path: "/popular",
  },
  {
    name: "Huquq",
    path: "/right",
  },
  {
    name: "Sodda talqin",
    path: "/simple",
  },
  {
    name: "Life Style",
    path: "/lifestyle",
  },
];

function Nav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [language, setLanguage] = useState(false);
  const [serach, setSearch] = useState(false);

  const hanlelanguage = () => {
    setLanguage((prevsatte) => !prevsatte);
  };
  const handleSearch = () => {
    setSearch(!serach);
  };
  const handleClose = () => {
    setSearch(false);
  };

  return (
    <nav className="flex gap-8 container items-center justify-between text-white relative two-navbars">
      <ul className="flex items-center justify-center border-r border-[#bbbdbf]">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-white-400 border-b-2 border-white-400"
              } capitalize font-medium hover:text-white-400 transition-all border-l border-l-[#bbbdbf] h-12 flex items-center px-2 hover:bg-white/20 border-white/10 backdrop-blur-[10px] hover:border-b uls nav2-li`}
            >
              {link.name}
            </Link>
          );
        })}
        <div
          className="flex items-center justify-center group hover:bg-white/20 border-white/10 backdrop-blur-[10px]  hover:border-b uls"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <li className="text-white-400  capitalize font-medium hover:text-white-400 transition-all border-l border-[#bbbdbf] h-12 flex items-center px-2 cursor-pointer relative nav2-li">
            Barchasi
            {isVisible && (
              <div className="bg-white w-[195px] absolute top-[104%] border left-0 text-black leading-8 transition-all shadow-lg z-10">
                <p className="hover:bg-[#F4F4F4] py-2 px-4 text-[16px] border-b">
                  Uzbekiston
                </p>
                <p className="hover:bg-[#F4F4F4] py-2 px-4 text-[16px] border-b">
                  # NoComment
                </p>
                <p className="hover:bg-[#F4F4F4] py-2 px-4 text-[16px] border-b">
                  Tarmoqda nimagap?
                </p>
                <p className="hover:bg-[#F4F4F4] py-2 px-4 text-[16px] border-b">
                  Sud ocherki
                </p>
                <p className="hover:bg-[#F4F4F4] py-2 px-4 text-[16px] border-b">
                  Gazeta va jurnal
                </p>
                <p className="hover:bg-[#F4F4F4] py-2 px-4 text-[16px] border-b">
                  Videoxabarlar
                </p>
                <p className="hover:bg-[#F4F4F4] py-2 px-4 text-[16px] border-b">
                  Fotogaliriya
                </p>
                <p className="hover:bg-[#F4F4F4] py-2 px-4 text-[16px] border-b">
                  Audioxabarlar
                </p>
              </div>
            )}
          </li>
          <FaAngleDown className="group-hover:rotate-180 cursor-pointer transition-all duration-500" />
        </div>
        <div className="flex items-center justify-center group hover:bg-white/20 hover:border-b uls">
          <li
            className="text-white-400 capitalize font-medium hover:text-white-400 transition-all border-l border-[#bbbdbf] h-12 flex items-center px-2 cursor-pointer nav2-li"
            onMouseEnter={() => setShadow(true)}
            onMouseLeave={() => setShadow(false)}
          >
            Hudud24
            {shadow && (
              <div className="bg-white w-[850px] absolute top-[100%] left-[435px] text-black leading-8 transition-all shadow-lg z-10">
                <Nav2in />
              </div>
            )}
          </li>
          <FaAngleDown className=" group-hover:rotate-180 cursor-pointer transition-all duration-500" />
        </div>
      </ul>

      <ul className="flex items-center justify-center border-l h-12 border-[#bbbdbf]">
        <ul className="px-[12px] h-12 text-center flex items-center hover:bg-white/20 border-white/10 backdrop-blur-[10px]  cursor-pointer search">
          <VscSearch
            className=" text-[20px] transition-all"
            onClick={handleSearch}
          />
          {/* <img
              className="w-[24px] h-[24px] cursor-pointer search-white"
              src="/icons/image-removebg-preview.png"
              alt="no search img"
            />
            <img className="w-[20px] h-[20px] cursor-pointer hidden search-black"  src="/icons/search.png" alt="" /> */}
        </ul>
        {serach && (
          <div className="bg-white w-[400px] border border-[black] absolute flex items-center justify-between px-4 py-3 right-[144px] z-[1000]">
            <div className=" flex items-center gap-3 ">
              <img
                className="w-[20px] h-[20px] cursor-pointer"
                src="/assets/images/search.png"
                alt=""
              />
              <input
                className=" outline-none text-black"
                type="text"
                placeholder="Izlash"
              />
            </div>
            {/* <IoClose /> */}
            <img
              className=" w-3 cursor-pointer "
              src="/assets/images/cross-x.png"
              alt="no icons"
              onClick={handleClose}
            />
          </div>
        )}

        <ul
          className="flex items-center justify-center px-2 border-x h-12 border-[#bbbdbf] hover:bg-white/20 border-white/10 backdrop-blur-[10px]  cursor-pointer search"
          onClick={hanlelanguage}
        >
          <li className="h-10 flex items-center px-2">O'zbekcha</li>
          <IoLanguage />
          {language && (
            <div className=" w-[128px] bg-white   z-[1000] absolute top-[51px] leading-9">
              <h1 className="border-b px-2 py-1 text-[black] hover:bg-[#F4F4F4]">
                Uzbekcha
              </h1>
              <h1 className="border-b px-2 py-1 text-[black] hover:bg-[#F4F4F4]">
                Русский
              </h1>
              <h1 className="border-b px-2 py-1 text-[black] hover:bg-[#F4F4F4]">
                Ўзбекча
              </h1>
            </div>
          )}
        </ul>
      </ul>
    </nav>
  );
}

export default Nav;
