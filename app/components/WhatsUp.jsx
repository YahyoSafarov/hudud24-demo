"use client";
import "../../public/assets/css/whatsup.css";
import React, { useState } from "react";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";

// Array of images with consistent property names
const img = [
  {
    id: 1,
    image: "/assets/images/filter-1.svg",
  },
  {
    id: 2,
    image: "/assets/images/filter-2.svg",
  },
  {
    id: 3,
    image: "/assets/images/filter-3.svg",
  },
  {
    id: 4,
    image: "/assets/images/filter-4.svg",
  },
  {
    id: 5,
    image: "/assets/images/filter-5.svg",
  },
  {
    id: 6,
    image: "/assets/images/filter-9.svg",
  },
  {
    id: 7,
    image: "/assets/images/filter-7.svg",
  },
  {
    id: 8,
    image: "/assets/images/filter-8.svg",
  },
];

function Vazifa() {
  // Set initial state with the image URLs from the array
  const [Kotta, setKotta] = useState(img[6].image);
  const [img1, setImg1] = useState(img[0].image);
  const [img2, setImg2] = useState(img[1].image);
  const [img3, setImg3] = useState(img[2].image);
  const [img4, setImg4] = useState(img[3].image);
  const [img5, setImg5] = useState(img[4].image);
  const [img6, setImg6] = useState(img[5].image);
  const [img7, setImg7] = useState(img[7].image);

  // Functions to change the main image
  function changeimg1() {
    setKotta(img1);
  }
  function changeimg2() {
    setKotta(img2);
  }
  function changeimg3() {
    setKotta(img3);
  }
  function changeimg4() {
    setKotta(img4);
  }
  function changeimg5() {
    setKotta(img5);
  }
  function changeimg6() {
    setKotta(img6);
  }
  function changeimg7() {
    setKotta(img7);
  }

  return (
    <div className=" container">
      <div className="flex gap-4 items-center mb-8">
        <span className="w-[32px] h-[32px] bg-[#DD3333]"></span>
        <h2 className="text-[40px] font-[700] leading-[48px]">
          Tarmoqda nima gap?
        </h2>
        <span className="border-b-2 border-[#E1E3E6] w-[371px] md:w-[470px] lg:[520px] xl:w-[635px]"></span>
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
      <div className="info">
        <div className="info-1">
          <div className="org">
            <img src={Kotta} alt="Main Display" />
          </div>
          <div className="org-2">
            <div onClick={changeimg1} className="card">
              <img src={img1} alt="Image 1" />
            </div>
            <div onClick={changeimg2} className="card">
              <img src={img2} alt="Image 2" />
            </div>
            <div onClick={changeimg3} className="card">
              <img src={img3} alt="Image 3" />
            </div>
          </div>
        </div>
        <div className="info-2">
          <div onClick={changeimg4} className="card">
            <img src={img4} alt="Image 4" />
          </div>
          <div onClick={changeimg5} className="card">
            <img src={img5} alt="Image 5" />
          </div>
          <div onClick={changeimg6} className="card">
            <img src={img6} alt="Image 6" />
          </div>
          <div onClick={changeimg7} className="card">
            <img src={img7} alt="Image 7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vazifa;

// "use client";
// import Link from "next/link";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { FaRegCalendarAlt } from "react-icons/fa";

// const WhatsUp = () => {
//   return (
//     <div className="w-full">
//       <div className=" container py-12">
// <div className="flex gap-4 items-center">
//   <span className="w-[32px] h-[32px] bg-[#DD3333]"></span>
//   <h2 className="text-[40px] font-[700] leading-[48px]">
//     Tarmoqda nima gap?
//   </h2>
//   <span className="border-b-2 border-[#E1E3E6] w-[371px] md:w-[470px] lg:[520px] xl:w-[635px]"></span>
//   <div className=" flex gap-2 items-center group cursor-pointer">
//     <div className="text-[16px] font-medium text-outline  group-hover:text-outline-hover transition-all duration-500 text-black cursor-pointer group-hover:text-[#DD3333]">
//       Барчаси
//     </div>
//     <Link
//       href="/"
//       className="w-[25px] h-[25px] rounded-full bg-white group-hover:text-[#DD3333] transition-all duration-500 flex justify-center items-center group-hover:translate-x-1"
//     >
//       <IoIosArrowRoundForward className="text-primary group-hover:text-[#DD3333] transition-all duration-500  text-[38px]" />
//     </Link>
//   </div>
// </div>

//         <div className="">
//           <div className="flex gap-6">
//             <div className="group">
//               <div className="mt-6 w-[882px] h-[518px]">
//                 <img
//                   src="/assets/images/net-image-1.png"
//                   className="w-full h-full brightness-[70%]"
//                   alt="no image"
//                 />
//                 <div className="absolute -mt-28 m-6 flex flex-col gap-4">
//                   <div class="inline-flex items-center w-[170px] gap-3 py-1 px-2 rounded-full border text-xs font-medium leading-130 z-50 transition-300 backdrop-blur-lg border-white/10 bg-white/20 text-white ">
//                     <FaRegCalendarAlt /> 23-июл 2024, 10:35
//                   </div>
//                   <div>
//                     <p className="text-white text-3xl font-medium group-hover:text-[#DD3333] transition-all duration-300">
//                       Dam olish kunlari qayerga borsa bo'ladi?
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 flex flex-col gap-6">
//               <div className="w-[278px] h-[157px]">
//                 <img
//                   src="/assets/images/member-3.png"
//                   className="w-full h-full"
//                   alt=""
//                 />
//               </div>
//               <div className="w-[278px] h-[157px]">
//                 <img
//                   src="/assets/images/member-3.png"
//                   className="w-full h-full"
//                   alt=""
//                 />
//               </div>
//               <div className="w-[278px] h-[157px]">
//                 <img
//                   src="/assets/images/member-3.png"
//                   className="w-full h-full"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-6 mt-6">
//             <div className="w-[278px] h-[157px]">
//               <img
//                 src="/assets/images/member-3.png"
//                 className="w-full h-full"
//                 alt=""
//               />
//             </div>
//             <div className="w-[278px] h-[157px]">
//               <img
//                 src="/assets/images/member-3.png"
//                 className="w-full h-full"
//                 alt=""
//               />
//             </div>
//             <div className="w-[278px] h-[157px]">
//               <img
//                 src="/assets/images/member-3.png"
//                 className="w-full h-full"
//                 alt=""
//               />
//             </div>
//             <div className="w-[278px] h-[157px]">
//               <img
//                 src="/assets/images/member-3.png"
//                 className="w-full h-full"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatsUp;
