
import "../../public/assets/css/footer.css";

import {
  FaApple,
  FaBeer,
  FaFacebook,
  FaInstagram,
  FaMap,
  FaMapMarked,
  FaPhone,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-in">
        <div className="footers">
          <div className="footer-in-one">
            <img className="Logo" src="assets/images/hudud-logo.svg" alt="" />
            <div className="menu">
              <h3>Asosiy</h3>
              <h3>O‘zbekiston</h3>
              <h3>Jahon</h3>
              <h3>Tahlil</h3>
              <h3>Huquq</h3>
              <h3>Biz haqimizda</h3>
              <h3>Aloqa</h3>
            </div>
            <p className="info">
              Siyosat, iqtisod, madaniyat va ilm-fan olamidagi soʻnggi
              yangiliklar. Bizning yangiliklar saytimizdan xabardor boʻling, u
              yerda siz eng soʻnggi va ishonchli maʼlumot manbalarini topasiz.
              Guvohnoma raqami - 1334.
            </p>
          </div>
          <div className="footer-in-two">
            <div className="flex orgg  space-x-4">
              <div className="tooltip group">
                <button className="bg-white/10 p-3 border-[1px] border-black/5 group-hover:border-[#dd3333] transition-all duration-300">
                  {/* <img
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                        alt="Telegram"
                        className="w-8 h-8"
                    /> */}
                  <FaTelegramPlane className="text-[25px] group-hover:text-[#dd3333] transition-all duration-300" />
                </button>
                <span className="tooltiptext">Telegram</span>
              </div>
              <div className="tooltip group">
                <button className="bg-white/10 p-3 border-[1px] border-black/5 group-hover:border-[#dd3333] transition-all duration-300">
                  {/* <img
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                        alt="Telegram"
                        className="w-8 h-8"
                    /> */}
                  <FaTwitter className="text-[25px] group-hover:text-[#dd3333] transition-all duration-300" />
                </button>
                <span className="tooltiptext group">Twitter</span>
              </div>
              <div className="tooltip group">
                <button className="bg-white/10 p-3 border-[1px] border-black/5 group-hover:border-[#dd3333] transition-all duration-300">
                  {/* <img
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                        alt="Telegram"
                        className="w-8 h-8"
                    /> */}
                  <FaYoutube className="text-[25px] group-hover:text-[#dd3333] transition-all duration-300" />
                </button>
                <span className="tooltiptext ">Youtube</span>
              </div>
              <div className="tooltip group">
                <button className="bg-white/10 p-3 border-[1px] border-black/5 group-hover:border-[#dd3333] transition-all duration-300">
                  {/* <img
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                        alt="Telegram"
                        className="w-8 h-8"
                    /> */}
                  <FaFacebook className="text-[25px] group-hover:text-[#dd3333] transition-all duration-300" />
                </button>
                <span className="tooltiptext group">Facebook</span>
              </div>
              <div className="tooltip group">
                <button className="bg-white/10 p-3 border-[1px] border-black/5 group-hover:border-[#dd3333] transition-all duration-300">
                  {/* <img

                        src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                        alt="Telegram"
                        className="w-8 h-8"
                    /> */}
                  <FaInstagram className="text-[25px] group-hover:text-[#dd3333] transition-all duration-300" />
                </button>
                <span className="tooltiptext">Instagram</span>
              </div>
            </div>

            <div className="location-and-phone">
              <div className="location">
                <FaMapMarked className="red" /> <h1> </h1>
                <h3>Toshkent sh. A. Temur ko‘chasi 19-uy</h3>
              </div>
              <div className="phone">
                <FaPhone />
                <h1> </h1>
                <h3>+99871-233-14-10</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="footers-in">
          <hr className="chiziq"></hr>
          <div className="pastki">
            <div className="himoya">
              <img src="/assets/images/frame.svg" alt="" />
              <h3>© HUDUD24.UZ 2019-2023 Barcha huquqlar himoyalangan</h3>
            </div>
            <div className="Shartlar">
              <h3>Foydalanish shartlari</h3>
              <h3>Maxfiylik siyosati</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
