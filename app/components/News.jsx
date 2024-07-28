"use client";

import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";

const detektiv = [
  {
    id: 1,
    src: "/assets/images/news-1.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
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
    src: "/assets/images/news-2.png",
    name: "Bugun, 23:23",
    title:
      "“Dom”da yashaydiganlar uchun beriladigan subsidiya: 7 ta muhim ma’lumot",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 4,
    src: "/assets/images/news-3.png",
    name: "Bugun, 23:23",
    title: "Nogironligi bo‘lgan shaxslarda qanday huquqlar bor? 8 ta qoida",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },

  {
    id: 5,
    src: "/assets/images/news-4.png",
    name: "Bugun, 23:23",
    title: "“Ayol o‘qisa, kambag‘allik foizi pasayadi”",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 6,
    src: "/assets/images/news-5.png",
    name: "Bugun, 23:23",
    title: "Maktab oshxonalarida qanday mahsulotlar bor?",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 7,
    src: "/assets/images/news-6.png",
    name: "Bugun, 23:23",
    title: "Liderlar qanday kitoblar o‘qiydi?",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 8,
    src: "/assets/images/news-7.png",
    name: "Bugun, 23:23",
    title:
      "“Maktabga bormayman, hamma masxara qiladi!”: nega bola maktabda bullingga uchraydi?   ",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },

  {
    id: 9,
    src: "/assets/images/news-8.png",
    name: "Bugun, 23:23",
    title:
      "“Dom”da yashaydiganlar uchun beriladigan subsidiya: 7 ta muhim ma’lumot",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 10,
    src: "/assets/images/news-9.png",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 11,
    src: "/assets/images/news-10.png",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
  {
    id: 12,
    src: "/assets/images/news-11.png",
    name: "Bugun, 23:23",
    title: "Aliment haqida 7 ta muhim savolga javob",
    description:
      "Voyaga yetgan bolaga ham aliment to‘lanadimi? Bolaga aliment puli yetmasa yoki kamlik qilsa-chi? Aliment to‘lash majburiyati qachon tugatiladi? Hudud24.uz aliment haqidagi eng muhim savollarga javob beradi.",
  },
];

const News = () => {
  return (
    <div className="mt-8">
      <div className=" container w-full mx-auto py-12">
        <div className="flex gap-4 items-center mb-10">
          <span className="w-[32px] h-[32px] bg-[#DD3333]"></span>
          <h2 className="text-[40px] text-black font-[700] leading-[48px]">
            So'ngi Yangiliklar
          </h2>
          <span className="border-b-2 border-[#E1E3E6] w-[371px] md:w-[470px] lg:[520px] xl:w-[702px]"></span>
          <div className=" flex gap-2 items-center group cursor-pointer">
            <div className="text-[16px] font-medium text-outline  group-hover:text-outline-hover transition-all duration-500 text-black cursor-pointer group-hover:text-[#DD3333]">
              Барчаси
            </div>
            <button className="w-[25px] h-[25px] rounded-full bg-transparent group-hover:text-[#DD3333] transition-all duration-500 flex justify-center items-center group-hover:translate-x-1">
              <IoIosArrowRoundForward className="text-black group-hover:text-[#DD3333] transition-all duration-500  text-[38px]" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                        <h2 className="text-[20px] font-[700] line-clamp-2 leading-[26px] group-hover:text-[#DD3333] transition-all duration-300">
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
  );
};

export default News;
