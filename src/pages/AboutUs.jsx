import React from "react";
import AboutBanner from "../Components/PageBanner/PageBanner";
import WhoWeAre from "../Components/About/WhoWeAre";
import WhatMakesUsDifferent from "../Components/WhatMakesUsDifferent/WhatMakesUsDifferent";
import AboutFooter from "../Components/AboutLayout/AboutFooter/AboutFooter";
import OverlapContents from "../Components/Footer/overlapContents";
import AboutOverlapContents from "../Components/AboutLayout/AboutOverlapContent/AboutOverlapContent";
import WhatClientsThinkAboutUs from "../Components/WhatClientsThinkAboutUs/WhatClientsThinkAboutUs";
import PageBanner from "../Components/PageBanner/PageBanner";

const AboutUs = () => {
  return (
    <div className="bg-[#FEF9EF]">
      <PageBanner></PageBanner>
      <WhoWeAre></WhoWeAre>
      <WhatMakesUsDifferent></WhatMakesUsDifferent>
      <AboutOverlapContents></AboutOverlapContents>
      <WhatClientsThinkAboutUs></WhatClientsThinkAboutUs>

      <AboutFooter></AboutFooter>
    </div>
  );
};

export default AboutUs;
