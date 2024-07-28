import Link from "next/link";
import PopularAbout from "../components/PopularPaga/PopularAbout";
import LifeStyleNews from "../components/LifeStyle/LifeStyleNews";
import LifeStyleAbout from "../components/LifeStyle/LifeStyleAbout";

const page = () => {
  return (
    <div>
      <div className="h-[350px] w-full z-2">
        <img
          src="/assets/images/popular_image.png"
          className="h-full w-full brightness-[30%]"
          alt="no image"
        />
      </div>
      <div className="container">
        <div className="flex justify-between">
          <div className=" absolute top-[170px]">
            <div>
              <div class="bg-white py-[14px] hidden-on-print max-md:hidden border-b border-white/[0.08] !bg-transparent absolute left-0 top-0 w-full">
                <div class="container flex items-center">
                  <Link
                    href="/"
                    class="text-gray-0 text-xs leading-130 font-medium flex items-center hover:text-red transition group !text-white/80"
                    aria-label="home"
                  >
                    <svg
                      class="mr-1.5"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.86628 14.4V9.5309C5.86628 9.08271 6.24833 8.71938 6.71961 8.71938H9.27961C9.75089 8.71938 10.1329 9.08271 10.1329 9.5309V14.4M7.50508 1.75017L1.95842 5.50118C1.73331 5.65341 1.59961 5.89984 1.59961 6.16253V13.1827C1.59961 13.855 2.17269 14.4 2.87961 14.4H13.1196C13.8265 14.4 14.3996 13.855 14.3996 13.1827V6.16253C14.3996 5.89984 14.2659 5.65341 14.0408 5.50118L8.49414 1.75017C8.19806 1.54994 7.80115 1.54994 7.50508 1.75017Z"
                        stroke="#697583"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        class="group-hover:stroke-red transition-300 !stroke-white/80"
                      ></path>
                    </svg>{" "}
                    Асосий
                  </Link>
                  <span class="w-1.5 h-1.5 bg-gray-2 block mx-1.5 !bg-white/40"></span>
                  <span class="text-dark text-xs font-medium leading-130 text-gray-1 !text-white/40">
                    Life Style
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="border-b w-[1200px]"></div> */}

            <h1 class=" text-white mt-14 font-bold text-3xl md:text-[58px] leading-120 font-minion z-50 relative">
              Life Style
            </h1>
          </div>

          <div className=" container">
            <img
              src="/assets/images/24.svg"
              className="absolute ml-[910px] -mt-[147px]"
              alt="no image"
            />
          </div>
        </div>
      </div>

      <div>
        <LifeStyleNews />
        <LifeStyleAbout />
      </div>
    </div>
  );
};

export default page;
