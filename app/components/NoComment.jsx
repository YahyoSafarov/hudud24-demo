import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const comment = [
  {
    id: 1,
    src: "/assets/images/comment-1.png",
    title: "Sportchimiz raqiblariga imkoniyat qoldirmadi!",
    calendar: "8-oktabr 2023",
    icon: "",
  },
  {
    id: 2,
    src: "/assets/images/comment-2.png",
    title: "Sportchimiz raqiblariga imkoniyat qoldirmadi!",
    calendar: "8-oktabr 2023",
    icon: "",
  },
  {
    id: 3,
    src: "/assets/images/comment-3.png",
    title: "Marsdagi zilzilaning oqibatlari",
    calendar: "8-oktabr 2023",
    icon: "",
  },
  {
    id: 4,
    src: "/assets/images/comment-4.png",
    title: "Tabiatning jaxlini chiqargan Kansas shtati",
    calendar: "8-oktabr 2023",
    icon: "",
  },
  {
    id: 5,
    src: "/assets/images/comment-5.png",
    title: "Anomal qishga tayyorgarlik",
    calendar: "8-oktabr 2023",
    icon: "",
  },
  {
    id: 6,
    src: "/assets/images/comment-6.png",
    title: "Saxarada cho‘lida adashib qolganlar",
    calendar: "8-oktabr 2023",
    icon: "",
  },
  {
    id: 7,
    src: "/assets/images/comment-7.png",
    title: "Yog‘ingarchilik  va suv bosgan Mumbai",
    calendar: "8-oktabr 2023",
    icon: "",
  },
  {
    id: 8,
    src: "/assets/images/comment-8.png",
    title: "Yong‘in osmonni qizil ranga bo‘yadi",
    calendar: "8-oktabr 2023",
    icon: "",
  },
];

const NoComment = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto py-12">
        <div className="flex gap-4 items-center mb-10">
          <span className="w-[32px] h-[32px] bg-[#DD3333]"></span>
          <h2 className="text-[40px] font-[700] leading-[48px]">#NoComment</h2>
          <span className="border-b-2 border-[#E1E3E6] w-[371px] md:w-[470px] lg:[520px] xl:w-[800px]"></span>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {comment.map((item, index) => {
              return (
                <div key={index}>
                  <article className="group relative aspect-video h-[367px] w-[278px] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl">
                    <img
                      src={item.src}
                      className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
                      alt="no image"
                    />
                    <div className="absolute inset-0 overflow-hidden bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500">
                      <h2 className="absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
                        {/* Title */}
                      </h2>
                      <p className="absolute left-8 top-1/2 line-clamp-3 font-bold text-[20px] max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                        {item.title}
                      </p>
                      <Link
                        href="/"
                        className="absolute flex items-center gap-4 backdrop-blur-2xl bg-white/10 hover:bg-white/20  bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300"
                      >
                        <FaRegCalendarAlt />
                        {item.calendar}
                      </Link>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoComment;
