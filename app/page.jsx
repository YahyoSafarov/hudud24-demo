import React from "react";
import HeroMain from "./components/HeroMain";
import LastNews from "./components/LastNews";
import SimpleInter from "./components/SimpleInter";
import WhatsUp from "./components/WhatsUp";
import DetictiveStoeies from "./components/DetictiveStoeies";
import Gallery from "./components/Gallery";
import NoComment from "./components/NoComment";
import Hudud24 from "./components/Hudud24";
import Magazine from "./components/Magazine";
import News from "./components/News";
import Mobile from "./components/Mobile";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroMain />
      <LastNews />
      <SimpleInter />
      <WhatsUp />
      <DetictiveStoeies />
      {/* <Gallery /> */}
      <NoComment />
      <Hudud24 />
      <Magazine />
      <News />
      <Mobile />

    </div>
  );
};

export default HomePage;
