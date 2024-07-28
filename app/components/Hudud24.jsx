import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";

const hudud = [
  {
    id: 1,
    src: "/assets/images/detictive-1.png",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 2,
    src: "/assets/images/detictive-1.png",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
];

const inquiry = [
  {
    id: 1,
    src: "/assets/images/detictive-1.png",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 2,
    src: "/assets/images/detictive-1.png",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 3,
    src: "/assets/images/detictive-1.png",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 4,
    src: "/assets/images/detictive-1.png",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
];

const Hudud24 = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto py-12">
        <div className="flex gap-4 items-center mb-10">
          <span className="w-[32px] h-[32px] bg-[#DD3333]"></span>
          <h2 className="text-[40px] font-[700] leading-[48px]">
            Hudud24 surishtiruvi
          </h2>
          <span className="border-b-2 border-[#E1E3E6] w-[371px] md:w-[470px] lg:[520px] xl:w-[642px]"></span>
          <div className=" flex gap-2 items-center group cursor-pointer">
            <div className="text-[16px] font-medium text-outline  group-hover:text-outline-hover transition-all duration-500 text-black cursor-pointer group-hover:text-[#DD3333]">
              Барчаси
            </div>
            <button className="w-[25px] h-[25px] rounded-full bg-white group-hover:text-[#DD3333] transition-all duration-500 flex justify-center items-center group-hover:translate-x-1">
              <IoIosArrowRoundForward className="text-primary group-hover:text-[#DD3333] transition-all duration-500  text-[38px]" />
            </button>
          </div>
        </div>

        <div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="w-[580px] h-[342px]">
                <div className="group">
                
                  <img
                    src="/assets/images/Hudud24.png"
                    className="w-full h-full object-cover brightness-[80%]"
                    alt="no image"
                  />
                  <div
                    className="flex flex-col gap-2 mb-3 -mt-28 m-8"
                    data-v-aea0133b=""
                  >
                    <div className="backdrop-blur-lg border-white/10 bg-white/10 text-white w-[140px] inline-flex items-center gap-1 py-1 px-2 rounded-full border text-xs font-medium leading-130 relative z-2 transition-300">
                      {" "}
                      23-июл 2024, 08:59
                    </div>
                    <p
                      className="text-xl leading-130 font-bold text-white line-clamp-3 group-hover:text-red-500 transition-all duration-300 z-50"
                      data-v-aea0133b=""
                    >
                      Маск Тесла қачон одамсимон роботларни ишлаб чиқариш
                      бошлашини айтди
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 translate-x-[-4%]">
                {hudud.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="group">
                        <div className="bg-[#F4F4F4]  group-hover:bg-white flex flex-col gap-2 group-hover:shadow-2xl group-hover:scale-105 cursor-pointer transition-all duration-300">
                          <div>
                            <img
                              src={item.src}
                              className="w-full h-full"
                              alt="no image"
                            />
                          </div>
                          <div className="p-4 flex flex-col gap-1">
                            <div className="flex">
                              <span className="backdrop-blur-lg border-black/40 w-[160px] bg-white/10 text-black/40  inline-flex items-center justify-center gap-1 py-1 px-2 rounded-full border text-xs font-medium leading-[1] relative z-2 transition-300 group-hover:text-[#DD3333] transition-all duration-300">
                                <FaRegCalendarAlt className="text-black/40 group-hover:text-[#DD3333] transition-all duration-300" />{" "}
                                {item.name}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h2 className="text-[20px] font-[700] leading-[26px] group-hover:text-[#DD3333] transition-all duration-300">
                                {item.title}
                              </h2>
                              <p className="text-[14px] leading-5 font-[500] line-clamp-2 transition-300 text-dark">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div></div>
          </div>

          <div>
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {inquiry.map((items, index) => {
                  return (
                    <div key={index}>
                      <div className="group">
                        <div className="bg-[#F4F4F4] group-hover:bg-white flex flex-col gap-4 group-hover:shadow-2xl group-hover:scale-105 cursor-pointer transition-all duration-300">
                          <div>
                            <img
                              src={items.src}
                              className="w-full h-full"
                              alt="no image"
                            />
                          </div>
                          <div className="p-4 flex flex-col gap-4">
                            <div className="flex">
                              <span className="backdrop-blur-lg border-black/40 w-[160px] bg-white/10 text-black/40  inline-flex items-center justify-center gap-1 py-1 px-2 rounded-full border text-xs font-medium leading-[1] relative z-2 transition-300 group-hover:text-[#DD3333] transition-all duration-300">
                                <FaRegCalendarAlt className="text-black/40 group-hover:text-[#DD3333] transition-all duration-300" />{" "}
                                {items.name}
                              </span>
                            </div>
                            <div className="flex flex-col gap-4">
                              <h2 className="text-[20px] font-[700] leading-[26px] group-hover:text-[#DD3333] transition-all duration-300">
                                {items.title}
                              </h2>
                              <p className="text-[14px] leading-5 font-[500] line-clamp-3 transition-300 text-dark">
                                {items.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hudud24;
