import { FaGooglePlay, FaApple } from "react-icons/fa";

import "../../public/assets/css/mobile.css";
import Link from "next/link";

const Mobile = () => {
  return (
    <div className="w-full mt-24">
      <div className="banner">
        <div className="container">
          <div className="flex overflow-hidden">
            <div>
              <div className="flex flex-col gap-6 py-8">
                <h2 className="text-white font-[700] text-[32px] leading-[37.57px]">
                  Mobil ilovamizni yuklab oling
                </h2>
                <p className="text-[#A4B0BE] font-[400] text-[16px] w-[60%]">
                  Ilovamizni yuklab oling. Yurtimizga va ko‘plab boshqa
                  mavzularga oid bo‘lgan hodisa va yangiliklardan xabardor
                  bo‘lib boring
                </p>
              </div>

              <div className="flex gap-8">
                <div className="group">
                  <button className="border group-hover:border-[#DD3333] transition-all duration-300 p-2 w-[160px] rounded-[8px]">
                    <Link
                      href="https://apps.apple.com/us/app/hudud24/id6472889039"
                      target="_blank"
                      className="flex items-center gap-[10px] "
                    >
                      <FaApple className="text-white text-[27.72px] group-hover:text-[#DD3333] transition-all duration-500" />
                      <div className="text-white text-start">
                        <p className="text-[10px]">Download on the</p>
                        <h2 className="text-[17px] font-bold">App Store</h2>
                      </div>
                    </Link>
                  </button>
                </div>

                <div className="group">
                  <button className="border group-hover:border-[#DD3333] transition-all duration-500  p-2 w-[160px] rounded-[8px]">
                    <Link
                      href="https://apps.apple.com/us/app/hudud24/id6472889039"
                      target="_blank"
                      className="flex items-center gap-[10px] "
                    >
                      <FaGooglePlay className="text-white text-[27.72px] group-hover:text-[#DD3333] transition-all duration-500" />
                      <div className="text-white text-start">
                        <p className="text-[10px]">Get It On</p>
                        <h2 className="text-[17px]  font-bold">Google Play</h2>
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className=" absolute mt-[-121px] ml-[-350px]">
                <img src="/assets/images/hand-phone.png" alt="no image" />
              </div>
            </div>

            <div>
              <div className=" transform translate-x-[38%]">
                <img src="/assets/images/QR-KOD.png" alt="no image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
