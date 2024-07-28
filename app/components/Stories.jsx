import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import LastNewsMember from "./LastNewsMember";

const lastnews = [
  {
    id: 1,
    name: "22-июл 2024, 09:58",
    description:
      "Бакалавр ва магистрлар тайёрлаш бўйича давлат гранти тасдиқланди",
    desc: "2024/2025 ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси параметрлари тасдиқланди.",
  },
  {
    id: 2,
    name: "22-июл 2024, 09:58",
    description:
      "Бакалавр ва магистрлар тайёрлаш бўйича давлат гранти тасдиқланди",
    desc: "2024/2025 ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси параметрлари тасдиқланди.",
  },
  {
    id: 3,
    name: "22-июл 2024, 09:58",
    description:
      "Бакалавр ва магистрлар тайёрлаш бўйича давлат гранти тасдиқланди",
    desc: "2024/2025 ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси параметрлари тасдиқланди.",
  },
];

const Srories = () => {
  return (
    <div className="">
      <div className="cursor-pointer">
        <div className="">
          {lastnews.map((last, index) => {
            return (
              <div key={index} className="group">
                <div className="flex flex-col gap-3 p-5 w-[344px] h-[152px] group-hover:bg-neutral-100 transition-all duration-300">
                  <div className="flex">
                    <span className="backdrop-blur-lg border-black/40 w-[160px] bg-white/10 text-black/40  inline-flex items-center gap-1 py-1 px-2 rounded-full border text-xs font-medium leading-[1] relative z-2 transition-300">
                      <FaRegCalendarAlt className="text-black/40 group-hover:text-[#DD3333] transition-all duration-300" />{" "}
                      {last.name}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-base leading-5 font-bold line-clamp-2 transition-300 text-dark">
                      {last.description}
                    </h2>
                    <p className="text-sm text-blue-dark leading-130 font-medium line-clamp-2 text-dark">
                      {last.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Srories;
