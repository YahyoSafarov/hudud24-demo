"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Gallery = () => {
  return (
    <div>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div>
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-1.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-2.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-3.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-4.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div>
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-1.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-2.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-3.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-4.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="">
                <div className="w-[567px] h-[398px]">
                  <img
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    className="w-[567px] h-[398px]"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[567px] h-[398px]">
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  className="w-[567px] h-[398px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[567px] h-[398px]">
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  className="w-[567px] h-[398px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[567px] h-[398px]">
                <img
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  className="w-[567px] h-[398px]"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="flex flex-col gap-4">
            <div>
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-1.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-2.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-3.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-4.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div>
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-1.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-2.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-3.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[270px] h-[184px]">
                    <img
                      src="https://swiperjs.com/demos/images/nature-4.jpg"
                      className="w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
