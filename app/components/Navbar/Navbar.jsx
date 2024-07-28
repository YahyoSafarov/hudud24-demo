/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
// import '../Header.css';
import { FaAngleDown } from "react-icons/fa6";
import "../../../public/assets/css/Navbar.css";
import { TfiAlignRight } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";
import Link from "next/link";
import { IoLanguage } from "react-icons/io5";

const hosts = [
  {
    name: "Huquq",
    path: "/",
  },
  {
    name: "Sodda talqin",
    path: "/sodda-talqin",
  },
  {
    name: "Life style",
    path: "/life-style",
  },
  {
    name: "O'zbekiston",
    path: "/uzbekiston",
  },
  {
    name: "#NoComment",
    path: "/no-comment",
  },
  {
    name: "Tarmoqda nima gap?",
    path: "/tarmoqda-nima-gap",
  },
  {
    name: "Sud ocherklari",
    path: "/sud",
  },
  {
    name: "Gazeta va jurnal",
    path: "/journal",
  },
  {
    name: "Videoxabarlar",
    path: "videoxabarlar",
  },
  {
    name: "Fotogaleriya",
    path: "/fotogaleriya",
  },
  {
    name: "Audioxabarlar",
    path: "/audioxabarlar",
  },
];

function Navbar() {
  const [isDown, setIsDown] = useState(false);
  const [modal, setModal] = useState(false);
  const [language, setLanguage] = useState(false);

  const handleClick = () => {
    setIsDown((prevState) => !prevState);
  };
  const handleModal = () => {
    setModal(!modal);
  };
  const closeWindow = () => {
    setModal(false);
  };
  const hanlelanguage = () => {
    setLanguage((prevsatte) => !prevsatte);
  };

  return (
    <div className="container">
      <nav
        className="flex gap-20 items-center justify-between py-[25px] bg-w"
        id="nav-icon"
      >
        <ul>
          <Link href="/">
            <img
              className="w-[179px] hudud-icons"
              src="/assets/images/hudud-white.png"
              alt="Hudud White"
            />
            <img
              className="w-[179px] hudud-black hidden"
              src="/assets/images/hudud-icons.png"
              alt="Hudud Black"
            />
          </Link>
        </ul>

        <ul className="flex items-center gap-7">
          <div className="flex gap-2 items-center nav-div">
            <div className="bg-white/20 border-white/10 backdrop-blur-[10px] rounded-full w-[40px] h-[40px] flex items-center justify-center bkg">
              <img
                className="rounded-xl w-[24px]"
                src="/assets/images/usa.png"
                alt="USA Flag"
              />
            </div>
            <div>
              <div className="flex items-end gap-1">
                <h2 className="text-white font-[800] text-[15px]">
                  12 601,08 UZS
                </h2>
                <img
                  className="w-[15px] h-[15px] up-arrow"
                  src="/icons/down.png"
                  alt="Down Icon"
                />
                <p className="text-[14px] text-[#B83536] font-[700]">8.76</p>
              </div>
              <div>
                <p className="text-[15px] opacity-[70%] text-[#848688]">USD</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center nav-div">
            <div className="bg-white/20 border-white/10 backdrop-blur-[10px] rounded-full w-[40px] h-[40px] flex items-center justify-center bkg">
              <img
                className="rounded-xl w-[24px]"
                src="/assets/images/europa.png"
                alt="Europe Flag"
              />
            </div>
            <div>
              <div className="flex items-end gap-1">
                <h2 className="text-white font-[800] text-[15px]">
                  13 774,24 UZS
                </h2>
                <img
                  className="w-[18px] h-[15px] icons-nav"
                  src="/icons/down.png"
                  alt="Down Icon"
                />
                <p className="text-[14px] text-[#B83536] font-[700]">0,31</p>
              </div>
              <div>
                <p className="text-[15px] opacity-[70%] text-[#848688]">EUR</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center nav-div">
            <div className="bg-white/20 border-white/10 backdrop-blur-[10px] rounded-full w-[40px] h-[40px] flex items-center justify-center bkg">
              <img
                className="rounded-xl w-[24px]"
                src="/assets/images/russian.png"
                alt="Russia Flag"
              />
            </div>
            <div>
              <div className="flex items-end gap-1">
                <h2 className="text-white font-[800] text-[15px]">
                  143,50 UZS
                </h2>
                <img
                  className="w-[15px] h-[15px] up-arrow"
                  src="/icons/green-up.png"
                  alt="Up Icon"
                />
                <p className="text-[14px] text-[#20A74E] font-[700]">0,31</p>
              </div>
              <div>
                <p className="text-[15px] opacity-[70%] text-[#848688]">RU</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center sun-border relative">
            <div className="bg-white/20 border-white/10 backdrop-blur-[10px] rounded-full w-[40px] h-[40px] flex items-center justify-center bkg">
              <img
                className="rounded-xl w-5"
                src="/assets/images/rain.png"
                alt="Weather Icon"
              />
            </div>
            <div>
              <div className="flex items-end gap-1">
                <h2 className="text-white font-[800] text-[15px]">34.8 °C</h2>
              </div>

              <div
                className="flex items-center group gap-1 hover:text-[red]"
                onClick={handleClick}
              >
                <p className="text-[15px] opacity-[70%] text-[#848688] cursor-pointer group-hover:text-[red] ">
                  Toshkent shahri
                </p>
                <FaAngleDown className="icons-nav2 cursor-pointer" />
              </div>
              {isDown && (
                <div className="w-[380px] absolute right-0 bg-white top-12 z-[1000] flex">
                  <div className="leading-[3rem] w-1/2">
                    <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                      Andijon
                    </p>
                    <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                      Jizzax
                    </p>
                    <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                      Qoraqalpog'iston
                    </p>
                    <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                      Namangan
                    </p>
                    <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                      Surxondaryo
                    </p>
                    <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                      Toshkent shahri
                    </p>
                    <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                      Farg'ona
                    </p>
                  </div>
                  <div className="leading-[3rem] w-1/2">
                    <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                      Buxoro
                    </p>
                    <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                      Qashqadaryo
                    </p>
                    <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                      Navoiy
                    </p>
                    <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                      Samarqand
                    </p>
                    <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                      Sirdaryo
                    </p>
                    <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                      Toshkent viloyati
                    </p>

                    <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                      Xorazm
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-[36px] ">
            <img
              src="/assets/images/people.png"
              alt="User Icon"
              className="people"
            />
            <img src="" alt="" />
          </div>
        </ul>
      </nav>

      <nav className="flex items-center justify-between py-[25px] lg:hidden">
        <div className="flex gap-2 items-center sun-border relative">
          <div className="bg-white/20 border-white/10 backdrop-blur-[10px] rounded-full w-[40px] h-[40px] flex items-center justify-center bkg">
            <img
              className="rounded-xl w-5"
              src="/assets/images/rain.png"
              alt="Weather Icon"
            />
          </div>
          <div>
            <div className="flex items-end gap-1">
              <h2 className="text-white font-[800] text-[15px]">34.8 °C</h2>
            </div>

            <div
              className="flex items-center group gap-1 hover:text-[red]"
              onClick={handleClick}
            >
              <p className="text-[15px] opacity-[70%] text-[#848688] cursor-pointer group-hover:text-[red] text-toshkent">
                Toshkent shahri
              </p>
              <FaAngleDown className="icons-nav2 cursor-pointer text-down" />
            </div>
            {isDown && (
              <div className="w-[300px] absolute left-0 bg-white top-12 z-[1000] flex">
                <div className="leading-[2rem] w-1/2">
                  <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                    Andijon
                  </p>
                  <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                    Jizzax
                  </p>
                  <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                    Qoraqalpog'iston
                  </p>
                  <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                    Namangan
                  </p>
                  <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                    Surxondaryo
                  </p>
                  <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                    Toshkent shahri
                  </p>
                  <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                    Farg'ona
                  </p>
                </div>
                <div className="leading-[2rem] w-1/2">
                  <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                    Buxoro
                  </p>
                  <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                    Qashqadaryo
                  </p>
                  <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                    Navoiy
                  </p>
                  <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                    Samarqand
                  </p>
                  <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                    Sirdaryo
                  </p>
                  <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                    Toshkent viloyati
                  </p>
                  <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                    Xorazm
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <ul className="flex items-center gap-7">
          <ul>
            <img
              className="w-[179px] hudud-icons media-img"
              src="/assets/images/hudud-white.png"
              alt="Hudud White"
            />
            <img
              className="w-[179px] hudud-black hidden media-img"
              src="/assets/images/hudud-icons.png"
              alt="Hudud Black"
            />
          </ul>
        </ul>

        <div className="w-[36px]">
          <img
            src="/public/assets/images/people.png"
            alt="User Icon"
            className="people"
          />
          <TfiAlignRight className="text-[30px] " onClick={handleModal} />
          {modal && (
            <div className=" w-full top-0 bg-white white h-[1200px] absolute left-0 z-[1000]">
              <div className="container">
                <div className=" flex items-center justify-between py-[25px]">
                  <div className="flex gap-2 items-center sun-border relative">
                    <div className="bg-[#F4F5F6] rounded-full w-[40px] h-[40px] flex items-center justify-center ">
                      <img
                        className="rounded-xl w-5"
                        src="/assets/images/rain.png"
                        alt="Weather Icon"
                      />
                    </div>
                    <div>
                      <div className="flex items-end gap-1">
                        <h2 className=" font-[800] text-[15px]">34.8 °C</h2>
                      </div>

                      <div
                        className="flex items-center group gap-1 hover:text-[red]"
                        onClick={handleClick}
                      >
                        <p className="text-[15px] opacity-[70%] text-[#848688] cursor-pointer group-hover:text-[red] text-toshkent">
                          Toshkent shahri
                        </p>
                        <FaAngleDown className="icons-nav2 cursor-pointer text-down" />
                      </div>
                      {isDown && (
                        <div className="w-[300px] absolute left-0 bg-white top-12 z-[1000] flex">
                          <div className="leading-[2rem] w-1/2">
                            <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                              Andijon
                            </p>
                            <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                              Jizzax
                            </p>
                            <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                              Qoraqalpog'iston
                            </p>
                            <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                              Namangan
                            </p>
                            <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                              Surxondaryo
                            </p>
                            <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                              Toshkent shahri
                            </p>
                            <p className="border-b px-5 border-r cursor-pointer hover:bg-[#F4F4F4]">
                              Farg'ona
                            </p>
                          </div>
                          <div className="leading-[2rem] w-1/2">
                            <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                              Buxoro
                            </p>
                            <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                              Qashqadaryo
                            </p>
                            <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                              Navoiy
                            </p>
                            <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                              Samarqand
                            </p>
                            <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                              Sirdaryo
                            </p>
                            <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                              Toshkent viloyati
                            </p>
                            <p className="border-b px-5 cursor-pointer hover:bg-[#F4F4F4]">
                              Xorazm
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <ul className="flex items-center gap-7">
                    <ul>
                      <img
                        className="w-[179px] hudud-icons media-img"
                        src="/assets/images/hudud-icons.png"
                        alt="Hudud White"
                      />
                      <img
                        className="w-[179px] hudud-black hidden media-img"
                        src="/assets/images/hudud-icons.png"
                        alt="Hudud Black"
                      />
                    </ul>
                  </ul>
                  <div>
                    <FiX className=" text-[30px]" onClick={closeWindow} />
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center bg-white border gap-3 px-[10px] ">
                    <VscSearch className="" />
                    <input type="text" className=" w-full py-2 outline-none " />
                  </div>
                  <div className="flex items-center">
                    <div className="leading-[55px] pt-5">
                      {hosts.map((host, key) => {
                        return (
                          <Link
                            href={host.path}
                            key={key}
                            className="flex columns-1 font-bold"
                          >
                            {host.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <ul
                      className="flex items-center border w-32 mb-4"
                      onClick={hanlelanguage}
                    >
                      <li className="h-10 flex items-center px-2 cursor-pointer">
                        O'zbekcha
                      </li>
                      <IoLanguage />
                      {language && (
                        <div className=" w-[127px] pt-2 bg-white z-[1000] absolute top-[290px] leading-9 border">
                          <h1 className="border-b px-2  text-[black] hover:bg-[#F4F4F4]">
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
                    <ul className="flex gap-7 flex-col">
                      <div className="flex gap-2 items-center">
                        <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center border border-[#00000024] bg-[#cdc4c426] bkg">
                          <img
                            className="rounded-xl w-[24px]"
                            src="/assets/images/usa.png"
                            alt="USA Flag"
                          />
                        </div>
                        <div>
                          <div className="flex items-end gap-1">
                            <h2 className="font-[800] text-[15px]">
                              12 601,08 UZS
                            </h2>
                            <img
                              className="w-[15px] h-[15px] up-arrow"
                              src="/icons/down.png"
                              alt="Down Icon"
                            />
                            <p className="text-[14px] text-[#B83536] font-[700]">
                              8.76
                            </p>
                          </div>
                          <div>
                            <p className="text-[15px] opacity-[70%] text-[#848688]">
                              USD
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 items-center">
                        <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center border border-[#00000024] bg-[#cdc4c426] bkg">
                          <img
                            className="rounded-xl w-[24px]"
                            src="/assets/images/europa.png"
                            alt="Europe Flag"
                          />
                        </div>
                        <div>
                          <div className="flex items-end gap-1">
                            <h2 className="font-[800] text-[15px]">
                              13 774,24 UZS
                            </h2>
                            <img
                              className="w-[18px] h-[15px] icons-nav"
                              src="/icons/down.png"
                              alt="Down Icon"
                            />
                            <p className="text-[14px] text-[#B83536] font-[700]">
                              0,31
                            </p>
                          </div>
                          <div>
                            <p className="text-[15px] opacity-[70%] text-[#848688]">
                              EUR
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 items-center">
                        <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center border border-[#00000024] bg-[#cdc4c426] bkg">
                          <img
                            className="rounded-xl w-[24px]"
                            src="/assets/images/russian.png"
                            alt="Russia Flag"
                          />
                        </div>
                        <div>
                          <div className="flex items-end gap-1">
                            <h2 className="font-[800] text-[15px]">
                              143,50 UZS
                            </h2>
                            <img
                              className="w-[15px] h-[15px] up-arrow"
                              src="/icons/green-up.png"
                              alt="Up Icon"
                            />
                            <p className="text-[14px] text-[#20A74E] font-[700]">
                              0,31
                            </p>
                          </div>
                          <div>
                            <p className="text-[15px] opacity-[70%] text-[#848688]">
                              RU
                            </p>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
