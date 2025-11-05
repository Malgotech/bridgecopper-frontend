import React from "react";
import Style from "./Homepage.module.scss";
import LeaderShip from "./components/Leadership/LeaderShip";
import PartnerShip from "./components/PartnerShip/PartnerShip";
import GlobalSupply from "./components/GlobalSupply/GlobalSupply";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import LondonMetal from "./components/LondonMetal/LondonMetal";
import PremiumCopper from "./components/PremiumCopper/PremiumCopper";
import BannerSection from "./components/BannerSection/BannerSection";
import ScrollStack from "./components/ScrollStack/ScrollStack";

const Homepage = ({ isActive }) => {
  return (
    <div className={Style.homepage}>
      <BannerSection />
      <PremiumCopper />
      <LondonMetal />
      <WhatWeDo isActive={isActive} />

      <div className= {Style.supply_container}>
        <GlobalSupply />
        <ScrollStack />
      </div>

      <PartnerShip />
      <LeaderShip />
    </div>
  );
};

export default Homepage;
