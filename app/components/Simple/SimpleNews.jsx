"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const news = [
  {
    id: 1,
    src: "/assets/images/simple-image.svg",
    name: "28-Iyun 2024, 02:31",
    description:
      "Kommunal xizmat koʻrsatuvchi tashkilotlar nimalarga majbur va ularni bajarmasa nima boʻladi? Muhim 5 jihat",
  },
  {
    id: 2,
    src: "/assets/images/simple-image.svg",
    name: "28-Iyun 2024, 02:31",
    description:
      "Kommunal xizmat koʻrsatuvchi tashkilotlar nimalarga majbur va ularni bajarmasa nima boʻladi? Muhim 5 jihat",
  },

  {
    id: 3,
    src: "/assets/images/simple-image.svg",
    name: "28-Iyun 2024, 02:31",
    description:
      "Kommunal xizmat koʻrsatuvchi tashkilotlar nimalarga majbur va ularni bajarmasa nima boʻladi? Muhim 5 jihat",
  },

  {
    id: 4,
    src: "/assets/images/simple-image.svg",
    name: "28-Iyun 2024, 02:31",
    description:
      "Kommunal xizmat koʻrsatuvchi tashkilotlar nimalarga majbur va ularni bajarmasa nima boʻladi? Muhim 5 jihat",
  },
];

const SimpleNews = () => {
  return (
    <div className="w-full">
      <div className="container py-12">
        <div className="flex gap-4 items-center mb-8">
          <span className="w-[32px] h-[32px] bg-[#DD3333]"></span>
          <h2 className="text-[40px] font-[700] leading-[48px]">
            Eng ko'p ko'rilgan
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

        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {news.map((items, index) => {
              return (
                <div key={index} className="">
                  <div className="w-[278px] h-[170px] overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <img
                      src={items.src}
                      className="w-full h-full brightness-50"
                      alt="no image"
                    />
                    <div
                      class="flex items-end -mt-[160px] relative z-20 w-full h-full p-4"
                      data-v-ee2837b4=""
                    >
                      <div data-v-ee2837b4="">
                        <div
                          class="flex-y-center gap-2 mb-2"
                          data-v-ee2837b4=""
                        >
                          <p
                            class="text-xs text-white/80 font-medium"
                            data-v-ee2837b4=""
                          >
                            {items.name}
                          </p>
                        </div>
                        <p
                          class="text-sm leading-5 font-bold text-white line-clamp-2"
                          data-v-ee2837b4=""
                        >
                          {items.description}
                        </p>
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
  );
};

export default SimpleNews;
