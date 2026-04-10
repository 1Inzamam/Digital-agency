import WhoWeAre from "../Components/About/WhoWeAre";
import Banner from "../Components/Banner/Banner";
import FAQ from "../Components/FAQ/FAQ";
import FeaturedWorks from "../Components/FeaturedWorks/FeaturedWorks";
import Footer from "../Components/Footer/Footer";
import HowWeWork from "../Components/HowWeWork/HowWeWork";
import MeetOurTeam from "../Components/MeetOurTeam/MeetOurTeam";
import Service from "../Components/Service/Service";
import WhatClientsThinkAboutUs from "../Components/WhatClientsThinkAboutUs/WhatClientsThinkAboutUs";
import WhatMakesUsDifferent from "../Components/WhatMakesUsDifferent/WhatMakesUsDifferent";
const Home = () => {
  return (
    <div className="bg-[#FEF9EF] overflow-hidden">
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
      <Service></Service>
      <FeaturedWorks></FeaturedWorks>
      <HowWeWork></HowWeWork>
      <FAQ></FAQ>
      <WhatMakesUsDifferent></WhatMakesUsDifferent>
      <MeetOurTeam></MeetOurTeam>
      <WhatClientsThinkAboutUs></WhatClientsThinkAboutUs>
      <div className="mt-90">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
