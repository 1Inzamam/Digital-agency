import WhoWeAre from "../Components/About/WhoWeAre";
import AboutFooter from "../Components/AboutLayout/AboutFooter/AboutFooter";
import AboutOverlapContents from "../Components/AboutLayout/AboutOverlapContent/AboutOverlapContent";
import PageBanner from "../Components/PageBanner/PageBanner";
import WhatClientsThinkAboutUs from "../Components/WhatClientsThinkAboutUs/WhatClientsThinkAboutUs";
import WhatMakesUsDifferent from "../Components/WhatMakesUsDifferent/WhatMakesUsDifferent";

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
