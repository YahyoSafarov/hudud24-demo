import Link from "next/link";
const meeting = [
  {
    src: "/assets/images/member-1.png",
    name: "22-июл 2024, 11:32",
    title: "Ўзбекистонликлар Японияга ишга таклиф этилмоқда",
  },
];

const LastNewsMember = () => {
  return (
    <div className="w-full translate-x-[-30%] py-4 mx-auto">
      <div>
        <div>
          {meeting.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  href="/"
                  className="h-full min-h-[631px] w-[580px] relative group bg-white z-0 flex flex-col justify-end  p-4 sm:p-6 border
        border-gray-200 col-span-12 lg:col-span-6 lg:row-span-3 group"
                >
                  <span className="absolute w-full h-full top-0 left-0 linear-black-light -z-1"></span>
                  <img
                    src={item.src}
                    className="w-full h-full object-cover -z-2 absolute top-0 left-0 brightness-[80%]"
                    alt="no image"
                  />

                  <div className="backdrop-blur-lg border-white/10 bg-white/10 text-white mb-4 !text-sm !py-1.5 !px-[14px] w-[175px] inline-flex items-center gap-1 rounded-full border  font-medium leading-130 relative z-2 transition-300">
                    {" "}
                    {item.name}
                  </div>
                  <p
                    className="text-xl leading-130 font-bold text-white z-50 line-clamp-3 w-[450px] group-hover:text-red transition-300 group-hover:text-[#DD3333] transition-all duration-300"
                    data-v-aea0133b=""
                  >
                    {item.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {/* 
      <div className="mt-5 flex gap-4">
        <div className="w-[550px]">
          <img
            src="/assets/images/member-2 (2).png"
            className="w-[278px] h-[170px] brightness-50"
            alt="no image"
          />
          <div className=" absolute -mt-20 overflow-hidden m-4">
            <h2 className="text-white/60">10-oktabr 2023, 23:23</h2>
            <p className="text-sm text-blue-dark w-[230px] text-white leading-130 font-medium line-clamp-2 text-dark">
              Tez orada Volkswagen ham mamlakatimizda ishlab chiqariladi
            </p>
          </div>
        </div>

        <div className="w-[550px]">
          <span className="absolute w-full h-full top-0 left-0 linear-black-light -z-1"></span>
          <img
            src="/assets/images/member-2 (2).png"
            className="w-[278px] h-[170px] brightness-50"
            alt="no image"
          />
          <div className=" absolute -mt-20 overflow-hidden m-4">
            <h2 className="text-white/60">10-oktabr 2023, 23:23</h2>
            <p className="text-sm text-blue-dark w-[230px] text-white leading-130 font-medium line-clamp-2 text-dark">
              Tez orada Volkswagen ham mamlakatimizda ishlab chiqariladi
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LastNewsMember;
