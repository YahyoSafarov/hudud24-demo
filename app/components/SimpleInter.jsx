"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import React from "react";

const swipesimple = [
  {
    id: 1,
    src: "/assets/images/simple-image.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
    description:
      "Xotin-qizlarga beriladigan kreditlar tadbirkorlik qilish, uy-joyga ega bo‘lish va biror kasbni egallash uchun yangi imkoniyatlar eshigini ochadi. Ammo bunday imtyozli kreditlar borligidan ko‘plab xotin-qizlar bexabar. Ular qayerga, qanday murojaat qilishni, kreditni qanday olishni bilmaydi. Hudud24.uz bugun ehtiyojmand xotin-qizlarga imtiyozli kreditlar haqida muhim ma’lumotlarni taqdim etadi.",
  },
  {
    id: 2,
    src: "/assets/images/simple-image.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
    description:
      "Xotin-qizlarga beriladigan kreditlar tadbirkorlik qilish, uy-joyga ega bo‘lish va biror kasbni egallash uchun yangi imkoniyatlar eshigini ochadi. Ammo bunday imtyozli kreditlar borligidan ko‘plab xotin-qizlar bexabar. Ular qayerga, qanday murojaat qilishni, kreditni qanday olishni bilmaydi. Hudud24.uz bugun ehtiyojmand xotin-qizlarga imtiyozli kreditlar haqida muhim ma’lumotlarni taqdim etadi.",
  },
  {
    id: 3,
    src: "/assets/images/simple-image.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
    description:
      "Xotin-qizlarga beriladigan kreditlar tadbirkorlik qilish, uy-joyga ega bo‘lish va biror kasbni egallash uchun yangi imkoniyatlar eshigini ochadi. Ammo bunday imtyozli kreditlar borligidan ko‘plab xotin-qizlar bexabar. Ular qayerga, qanday murojaat qilishni, kreditni qanday olishni bilmaydi. Hudud24.uz bugun ehtiyojmand xotin-qizlarga imtiyozli kreditlar haqida muhim ma’lumotlarni taqdim etadi.",
  },
  {
    id: 4,
    src: "/assets/images/simple-image.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
    description:
      "Xotin-qizlarga beriladigan kreditlar tadbirkorlik qilish, uy-joyga ega bo‘lish va biror kasbni egallash uchun yangi imkoniyatlar eshigini ochadi. Ammo bunday imtyozli kreditlar borligidan ko‘plab xotin-qizlar bexabar. Ular qayerga, qanday murojaat qilishni, kreditni qanday olishni bilmaydi. Hudud24.uz bugun ehtiyojmand xotin-qizlarga imtiyozli kreditlar haqida muhim ma’lumotlarni taqdim etadi.",
  },
  {
    id: 5,
    src: "/assets/images/simple-image.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
    description:
      "Xotin-qizlarga beriladigan kreditlar tadbirkorlik qilish, uy-joyga ega bo‘lish va biror kasbni egallash uchun yangi imkoniyatlar eshigini ochadi. Ammo bunday imtyozli kreditlar borligidan ko‘plab xotin-qizlar bexabar. Ular qayerga, qanday murojaat qilishni, kreditni qanday olishni bilmaydi. Hudud24.uz bugun ehtiyojmand xotin-qizlarga imtiyozli kreditlar haqida muhim ma’lumotlarni taqdim etadi.",
  },
  {
    id: 6,
    src: "/assets/images/simple-image.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
    description:
      "Xotin-qizlarga beriladigan kreditlar tadbirkorlik qilish, uy-joyga ega bo‘lish va biror kasbni egallash uchun yangi imkoniyatlar eshigini ochadi. Ammo bunday imtyozli kreditlar borligidan ko‘plab xotin-qizlar bexabar. Ular qayerga, qanday murojaat qilishni, kreditni qanday olishni bilmaydi. Hudud24.uz bugun ehtiyojmand xotin-qizlarga imtiyozli kreditlar haqida muhim ma’lumotlarni taqdim etadi.",
  },
  {
    id: 7,
    src: "/assets/images/simple-image.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
    description:
      "Xotin-qizlarga beriladigan kreditlar tadbirkorlik qilish, uy-joyga ega bo‘lish va biror kasbni egallash uchun yangi imkoniyatlar eshigini ochadi. Ammo bunday imtyozli kreditlar borligidan ko‘plab xotin-qizlar bexabar. Ular qayerga, qanday murojaat qilishni, kreditni qanday olishni bilmaydi. Hudud24.uz bugun ehtiyojmand xotin-qizlarga imtiyozli kreditlar haqida muhim ma’lumotlarni taqdim etadi.",
  },
  {
    id: 8,
    src: "/assets/images/simple-image.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
    description:
      "Xotin-qizlarga beriladigan kreditlar tadbirkorlik qilish, uy-joyga ega bo‘lish va biror kasbni egallash uchun yangi imkoniyatlar eshigini ochadi. Ammo bunday imtyozli kreditlar borligidan ko‘plab xotin-qizlar bexabar. Ular qayerga, qanday murojaat qilishni, kreditni qanday olishni bilmaydi. Hudud24.uz bugun ehtiyojmand xotin-qizlarga imtiyozli kreditlar haqida muhim ma’lumotlarni taqdim etadi.",
  },
  {
    id: 9,
    src: "/assets/images/simple-image.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
    description:
      "Xotin-qizlarga beriladigan kreditlar tadbirkorlik qilish, uy-joyga ega bo‘lish va biror kasbni egallash uchun yangi imkoniyatlar eshigini ochadi. Ammo bunday imtyozli kreditlar borligidan ko‘plab xotin-qizlar bexabar. Ular qayerga, qanday murojaat qilishni, kreditni qanday olishni bilmaydi. Hudud24.uz bugun ehtiyojmand xotin-qizlarga imtiyozli kreditlar haqida muhim ma’lumotlarni taqdim etadi.",
  },
  {
    id: 10,
    src: "/assets/images/simple-image.png",
    name: "Bugun, 23:23",
    title: "Xotin-qizlar uchun imtiyozlar: 5 ta kredit turi",
    description:
      "Xotin-qizlarga beriladigan kreditlar tadbirkorlik qilish, uy-joyga ega bo‘lish va biror kasbni egallash uchun yangi imkoniyatlar eshigini ochadi. Ammo bunday imtyozli kreditlar borligidan ko‘plab xotin-qizlar bexabar. Ular qayerga, qanday murojaat qilishni, kreditni qanday olishni bilmaydi. Hudud24.uz bugun ehtiyojmand xotin-qizlarga imtiyozli kreditlar haqida muhim ma’lumotlarni taqdim etadi.",
  },
];

const SimpleInter = () => {
  return (
    <>
      <div className="container max-w-[1500px] pl-[100px] pr-0 py-24">
        <div className="">
          <div className="mb-14">
            <div className="flex gap-4 items-center">
              <span className="w-[32px] ml-5 h-[32px] bg-[#DD3333]"></span>
              <h2 className="text-[40px] font-[700] leading-[48px]">
                Sodda Talqin
              </h2>
              <span className="border-b-2 border-[#E1E3E6] w-[371px] md:w-[550px] lg:[570px] xl:w-[791px]"></span>
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
          </div>
          <div className="relative">
            <div className="absolute pointer-events-none z-10 bg-gradient-to-l from-white to-transparent top-0 right-0 w-[250px] h-full " />
            <Swiper
              slidesPerView={4.5}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {React.Children.toArray(
                swipesimple.map((item, key) => (
                  <SwiperSlide key={key}>
                    <div className=" w-[400px] flex flex-col items-center gap-3 p-2 group cursor-pointer">
                      <div className="w-[278px] h-[160px]">
                        <img
                          src={item.src}
                          className="w-full h-full"
                          alt="no image"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-[278px]">
                        <div className="flex ">
                          <span className="backdrop-blur-lg border-black/40 w-[160px] bg-white/10 text-black/40  inline-flex items-center justify-center gap-1 py-1 px-2 rounded-full border text-xs font-medium leading-[1] relative z-2 transition-300 group-hover:text-[#DD3333] transition-all duration-300">
                            <FaRegCalendarAlt className="text-black/40 group-hover:text-[#DD3333] transition-all duration-300" />{" "}
                            {item.name}
                          </span>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start text-start">
                          <h2 className=" text-[20px] font-[700] leading-[26px] group-hover:text-[#DD3333] transition-all duration-300">
                            {item.title}
                          </h2>
                          <p className="text-[14px] leading-5 font-[500] line-clamp-3 transition-300 text-dark">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleInter;
