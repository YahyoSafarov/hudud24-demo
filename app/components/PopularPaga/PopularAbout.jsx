"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";
const detektiv = [
  {
    id: 1,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 2,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 3,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 4,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 5,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },

  {
    id: 6,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 7,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 8,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 9,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },

  {
    id: 10,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },

  {
    id: 11,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },

  {
    id: 12,
    src: "/assets/images/pobularaboutImage.svg",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
];

const PopularAbout = () => {
  const [items, setItems] = useState(detektiv.slice(0, 6));
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setItems((prevItems) => detektiv.slice(0, prevItems.length + 3));
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="container py-12">
      <div className="flex gap-4 items-center mb-8">
        <span className="w-[32px] h-[32px] bg-[#DD3333]"></span>
        <h2 className="text-[40px] font-[700] leading-[48px]">
          Detektiv hikoyalar
        </h2>
        <span className="border-b-2 border-[#E1E3E6] w-[371px] md:w-[470px] lg:[520px] xl:w-[682px]"></span>
        <div className="flex gap-2 items-center group cursor-pointer">
          <div className="text-[16px] font-medium text-outline group-hover:text-outline-hover transition-all duration-500 text-black cursor-pointer group-hover:text-[#DD3333]">
            Барчаси
          </div>
          <Link
            href="/"
            className="w-[25px] h-[25px] rounded-full bg-white group-hover:text-[#DD3333] transition-all duration-500 flex justify-center items-center group-hover:translate-x-1"
          >
            <IoIosArrowRoundForward className="text-primary group-hover:text-[#DD3333] transition-all duration-500 text-[38px]" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id}>
            <div className="group">
              <div className="bg-[#F4F4F4] h-full group-hover:bg-white flex flex-col gap-4 group-hover:shadow-2xl group-hover:scale-105 cursor-pointer transition-all duration-300">
                <div>
                  <img
                    src={item.src}
                    className="w-full h-full"
                    alt={item.title}
                  />
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <div className="flex">
                    <span className="backdrop-blur-lg border-black/40 w-[160px] bg-white/10 text-black/40 inline-flex items-center justify-center gap-1 py-1 px-2 rounded-full border text-xs font-medium leading-[1] relative z-2 transition-300 group-hover:text-[#DD3333] transition-all duration-300">
                      <FaRegCalendarAlt className="text-black/40 group-hover:text-[#DD3333] transition-all duration-300" />{" "}
                      {item.name}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[20px] font-[700] leading-[26px] group-hover:text-[#DD3333] transition-all duration-300">
                      {item.title}
                    </h2>
                    <p className="text-[14px] leading-5 font-[500] line-clamp-3 transition-300 text-dark">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-center items-center col-span-full">
            <div className="loader"></div>
          </div>
        )}
      </div>

      {items.length < detektiv.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="bg-[#E1E3E6] text-black px-6 py-3 border-[#F4F4F4] border-[1px] font-medium hover:bg-[#46464738] transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PopularAbout;
