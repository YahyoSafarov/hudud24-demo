"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../../public/assets/css/scroll.css"

const exprience = {
  icon: "/public/assets/badge.svg",
  title: "My exprience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam maxime, fugit ratione quas illum voluptate",
  items: [
    {
      calendar: "21-июл 2024, 08:58",
      description:
        "Янги ўқув йилида ОТМларига қанча абитуриент давлат гранти асосида қабул қилиниши маълум бўлди",
      duration:
        "2024/2025-ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси (гранти) параметрлари тасдиқланди.",
    },
    {
      calendar: "21-июл 2024, 08:58",
      description:
        "Янги ўқув йилида ОТМларига қанча абитуриент давлат гранти асосида қабул қилиниши маълум бўлди",
      duration:
        "2024/2025-ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси (гранти) параметрлари тасдиқланди.",
    },
    {
      calendar: "21-июл 2024, 08:58",
      description:
        "Янги ўқув йилида ОТМларига қанча абитуриент давлат гранти асосида қабул қилиниши маълум бўлди",
      duration:
        "2024/2025-ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси (гранти) параметрлари тасдиқланди.",
    },
    {
      calendar: "21-июл 2024, 08:58",
      description:
        "Янги ўқув йилида ОТМларига қанча абитуриент давлат гранти асосида қабул қилиниши маълум бўлди",
      duration:
        "2024/2025-ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси (гранти) параметрлари тасдиқланди.",
    },
    {
      calendar: "21-июл 2024, 08:58",
      description:
        "Янги ўқув йилида ОТМларига қанча абитуриент давлат гранти асосида қабул қилиниши маълум бўлди",
      duration:
        "2024/2025-ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси (гранти) параметрлари тасдиқланди.",
    },
    {
      calendar: "21-июл 2024, 08:58",
      description:
        "Янги ўқув йилида ОТМларига қанча абитуриент давлат гранти асосида қабул қилиниши маълум бўлди",
      duration:
        "2024/2025-ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси (гранти) параметрлари тасдиқланди.",
    },
    {
      calendar: "21-июл 2024, 08:58",
      description:
        "Янги ўқув йилида ОТМларига қанча абитуриент давлат гранти асосида қабул қилиниши маълум бўлди",
      duration:
        "2024/2025-ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси (гранти) параметрлари тасдиқланди.",
    },
    {
      calendar: "21-июл 2024, 08:58",
      description:
        "Янги ўқув йилида ОТМларига қанча абитуриент давлат гранти асосида қабул қилиниши маълум бўлди",
      duration:
        "2024/2025-ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси (гранти) параметрлари тасдиқланди.",
    },
    {
      calendar: "21-июл 2024, 08:58",
      description:
        "Янги ўқув йилида ОТМларига қанча абитуриент давлат гранти асосида қабул қилиниши маълум бўлди",
      duration:
        "2024/2025-ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси (гранти) параметрлари тасдиқланди.",
    },
    {
      calendar: "21-июл 2024, 08:58",
      description:
        "Янги ўқув йилида ОТМларига қанча абитуриент давлат гранти асосида қабул қилиниши маълум бўлди",
      duration:
        "2024/2025-ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси (гранти) параметрлари тасдиқланди.",
    },
  ],
};

const ScrollMain = () => {
  return (
    <div className="scroll">
      <ScrollArea className="h-[610px]">
        <ul className="flex flex-col gap-4">
          {exprience.items.map((item, index) => {
            return (
              <li key={index} className="bg-transparent h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-6">
                <div className="flex">
                  <span className="backdrop-blur-lg border-white/10 w-[140px]  bg-white/10 text-white  inline-flex items-center gap-1 py-1 px-2 rounded-full border text-xs font-medium leading-[1] relative z-2 transition-300">
                    <FaRegCalendarAlt className="text-white/60" />
                    {item.calendar}
                  </span>
                </div>

                <h3 className="text-[20px] font-[700] leading-[26px] max-w-[363px] hover:text-[#DD3333] transition-all duration-300 text-white min-h-[60px] text-center lg:text-left">
                  {item.description}
                </h3>
                <div className="flex items-center gap-3">
                  {/* dot */}
                  {/* <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span> */}
                  <p className="text-white/60">{item.duration}</p>
                </div>
                <div className="border-b-2 w-full border-white/10 -mt-2"></div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ScrollMain;
