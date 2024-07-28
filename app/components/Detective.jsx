"use client";
import { FaRegCalendarAlt } from "react-icons/fa";

const detektiv = [
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

const Detective = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {detektiv.map((items, index) => {
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
  );
};

export default Detective;
