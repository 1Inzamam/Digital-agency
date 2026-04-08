import WhoWeAre from "../Components/About/WhoWeAre";
import Banner from "../Components/Banner/Banner";
import FAQ from "../Components/FAQ/FAQ";
import FeaturedWorks from "../Components/FeaturedWorks/FeaturedWorks";
import HowWeWork from "../Components/HowWeWork/HowWeWork";
import Service from "../Components/Service/Service";
const Home = () => {
  return (
    <div className="bg-[#FEF9EF] pb-100">
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
      <Service></Service>
      <FeaturedWorks></FeaturedWorks>
      <HowWeWork></HowWeWork>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
