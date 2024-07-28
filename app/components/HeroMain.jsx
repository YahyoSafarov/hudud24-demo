"use client";

import "../../public/assets/css/heromain.css";

import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

import {
  FaTelegram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ScrollMain from "./ScrollMain";

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam maxime, fugit ratione quas illum voluptate",
  skillList: [
    {
      icon: <FaTelegram />,
      name: "Telegram",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
    },
    {
      icon: <FaYoutube />,
      name: "Youtube",
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
    },
  ],
};

const main = {
  title: "Ўзбекистонда ишсизлик даражаси камайди – Бандлик вазирлиги",
  description: "18-Iyul 2024, 17:40",
  desc: "Қонунчиликка асосан коммунал хизмат кўрсатувчи ташкилотлар қандай маълумотларни очиқлашга мажбур? Аҳолининг сўровига асосан қандай маълумотларни қанча муддатда бериб бориши керак? Агар ташкилотлар бу талабларга риоя этмаса, нима бўлади? Hudud24.uz қуйидаги мақола орқали шу сингари саволларга жавоб беради.",
};

const HeroMain = () => {
  return (
    <div className="bg_hudud w-full h-full">
      <div className=" container h-full">
        <div className=" grid grid-cols-1 place-items-center lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 py-28">
          <div className="">
            <div className="flex flex-col gap-4">
              <h2 className="text-2.5xl sm:text-4xl md:text-[48px] font-bold !leading-[1.2] title text-white font-minion lg:text-[51px]">
                {main.title}
              </h2>
              <div className="backdrop-blur-lg border-white/10 w-[120px]  bg-white/10 text-white  inline-flex items-center gap-1 py-1 px-2 rounded-full border text-xs font-medium leading-130 relative z-2 transition-300">
                {" "}
                <span>{main.description}</span>
              </div>

              <p
                className="text-base text-white leading-130 font-normal mb-8"
                data-v-5abe26fa=""
              >
                {main.desc}
              </p>
              <div className="flex gap-4">
                <Button variant="destructive" className="flex gap-4 w-[150px]">
                  <span>Batafsil</span>
                  <FaArrowRight />
                </Button>
                <Button
                  variant="destructive"
                  className="bg-white/10 border border-white/10 text-white backdrop-blur-md hover:bg-white/20 w-[150px]"
                >
                  <span>Barcha Yangiliklar</span>
                </Button>
              </div>

              <div>
                {/* skills */}
                <div value="skills" className="">
                  <div className="flex flex-col">
                    <ul className="flex gap-1">
                      {skills.skillList.map((skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger
                                  className=" group-hover:bg-red-500 rounded-full flex justify-center items-center group
                            "
                                >
                                  <div className="text-3xl text-white group-hover:bg-red-500 p-2 rounded-full transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ScrollMain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
