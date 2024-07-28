const newspaper = [
  {
    id: 1,
    name: "10-oktabr 2023",
    title: "Huquq va Burch",
    src: "/assets/images/huquq-1.png",
  },

  {
    id: 1,
    name: "10-oktabr 2023",
    title: "Inson Qonun",
    src: "/assets/images/huquq-2.png",
  },

  {
    id: 1,
    name: "10-oktabr 2023",
    title: "Huquq va Burch",
    src: "/assets/images/huquq-3.png",
  },

  {
    id: 1,
    name: "10-oktabr 2023",
    title: "Inson Qounun",
    src: "/assets/images/huquq-4.png",
  },
];

import { IoIosArrowRoundForward } from "react-icons/io";

const Magazine = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-[#171717] to-red-950">
        <div className="container py-12 mx-auto">
          <div className="flex gap-4 items-center mb-10">
            <span className="w-[32px] h-[32px] bg-[#DD3333]"></span>
            <h2 className="text-[40px] text-white font-[700] leading-[48px]">
              Gazeta va Jurnallar
            </h2>
            <span className="border-b-2 border-[#5e5d5d] w-[371px] md:w-[470px] lg:[520px] xl:w-[674px]"></span>
            <div className=" flex gap-2 items-center group cursor-pointer">
              <div className="text-[16px] font-medium text-outline  group-hover:text-outline-hover transition-all duration-500 text-[#A4B0BE] cursor-pointer group-hover:text-[#DD3333]">
                Барчаси
              </div>
              <button className="w-[25px] h-[25px] rounded-full bg-transparent group-hover:text-[#DD3333] transition-all duration-500 flex justify-center items-center group-hover:translate-x-1">
                <IoIosArrowRoundForward className="text-[#A4B0BE] group-hover:text-[#DD3333] transition-all duration-500  text-[38px]" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {newspaper.map((items, index) => {
              return (
                <div key={index}>
                  <div className="group cursor-pointer">
                    <div className="bg-transparent border-[#5e5d5d] border-[1px] w-[278px] h-[337px] p-4 overflow-hidden">
                      <div className=" relative z-50">
                        <p className="text-[#A4B0BE] font-[500] text-[12px] leading-[15.8px] group-hover:text-[#DD3333] transition-all duration-500">
                          {items.name}
                        </p>
                        <h2 className="text-[20px] font-[700] text-white leading-[28px]">
                          {items.title}
                        </h2>
                      </div>
                      <div className="w-[228px] h-[290px] transform translate-x-[20%] mt-14 group-hover:mt-7 transition-all duration-300 group-hover:translate-x-[20%]">
                        <img
                          src={items.src}
                          className="skew-x-[15deg] object-cover hover:brightness-50 group-hover:scale-[1.7] group-hover:skew-x-0 transition-all duration-500"
                          alt="no image"
                        />
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

export default Magazine;
