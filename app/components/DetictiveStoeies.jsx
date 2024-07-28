"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import Srories from "./Stories";
import Detective from "./Detective";

const DetictiveStoeies = () => {
  return (
    <div className="w-full">
      <div className=" container mx-auto py-12">
        <div className="flex gap-4 items-center">
          <span className="w-[32px] h-[32px] bg-[#DD3333]"></span>
          <h2 className="text-[40px] font-[700] leading-[48px]">
            Detektiv hikoyalar
          </h2>
          <span className="border-b-2 border-[#E1E3E6] w-[371px] md:w-[470px] lg:[520px] xl:w-[682px]"></span>
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

        <div>
          <div className="mt-6 flex gap-6">
            <div className="w-[882px] h-[452px]">
              <img src="/assets/images/detictiv-image-1.png" alt="no image" />
            </div>

            <div>
              <Srories />
              {/* <img src="/assets/images/member-2 (2).png" alt="" /> */}
            </div>
          </div>

          <div>
            <Detective />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetictiveStoeies;
