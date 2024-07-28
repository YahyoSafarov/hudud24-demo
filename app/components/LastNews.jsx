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
  {
    id: 4,
    name: "22-июл 2024, 09:58",
    description:
      "Бакалавр ва магистрлар тайёрлаш бўйича давлат гранти тасдиқланди",
    desc: "2024/2025 ўқув йили учун давлат олий таълим муассасаларига ўқишга қабул қилишнинг давлат буюртмаси параметрлари тасдиқланди.",
  },
];

const LastNews = () => {
  return (
    <div className="w-full h-full">
      <div className="container py-10">
        <div className="flex gap-4 items-center">
          <span className="w-[32px] h-[32px] bg-[#DD3333]"></span>
          <h2 className="text-[40px] font-[700] leading-[48px]">
            Сўнгги янгиликлар
          </h2>
          <span className="border-b-2 border-[#E1E3E6] w-[621px]"></span>
          <div className=" flex gap-2 items-center group cursor-pointer">
            <div className="text-[16px] font-medium text-outline  group-hover:text-outline-hover transition-all duration-500 text-black cursor-pointer group-hover:text-[#DD3333]">
              Барчаси
            </div>
            <Link
              href="/"
              className="w-[25px] h-[25px] rounded-full bg-white group-hover:text-[#DD3333] transition-all duration-500 flex justify-center items-center group-hover:translate-x-1"
            >
              <IoIosArrowRoundForward className="text-primary group-hover:text-[#DD3333] transition-all duration-500  text-[38px]" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="cursor-pointer mt-4">
            <div className=" flex sm:flex md:flex lg:flex xl:flex flex-col">
              {lastnews.map((last, index) => {
                return (
                  <div key={index} className="group">
                    <div className="flex flex-col gap-3 p-5 w-[278px] h-[168px] group-hover:bg-neutral-100 transition-all duration-300">
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

          <div>
            <LastNewsMember />
          </div>

          <div className="translate-x-[12%] py-4 flex flex-col gap-1">
            <div className="w-[278px] h-[170px]">
              <img
                src="/assets/images/member-3.png"
                className="w-full h-full"
                alt="no image"
              />
            </div>
            <div className="w-[278px] border-black">
              <img src="/assets/images/Banner.png" alt="no image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastNews;
