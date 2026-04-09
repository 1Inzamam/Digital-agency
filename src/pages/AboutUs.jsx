import React from "react";
import AboutBanner from "../Components/AboutLayout/AboutBanner/AboutBanner";
import WhoWeAre from "../Components/About/WhoWeAre";
import WhatMakesUsDifferent from "../Components/WhatMakesUsDifferent/WhatMakesUsDifferent";
import AboutFooter from "../Components/AboutLayout/AboutFooter/AboutFooter";
import OverlapContents from "../Components/Footer/overlapContents";
import AboutOverlapContents from "../Components/AboutLayout/AboutOverlapContent/AboutOverlapContent";
import WhatClientsThinkAboutUs from "../Components/WhatClientsThinkAboutUs/WhatClientsThinkAboutUs";

const AboutUs = () => {
  return (
    <div className="bg-[#FEF9EF]">
      <AboutBanner></AboutBanner>
      <WhoWeAre></WhoWeAre>
      <WhatMakesUsDifferent></WhatMakesUsDifferent>
      <AboutOverlapContents></AboutOverlapContents>
<WhatClientsThinkAboutUs></WhatClientsThinkAboutUs>

      <AboutFooter></AboutFooter>
    </div>
  );
};

export default AboutUs;
