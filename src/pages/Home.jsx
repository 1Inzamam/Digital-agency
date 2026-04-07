import WhoWeAre from "../Components/About/WhoWeAre";
import Banner from "../Components/Banner/Banner";
import FeaturedWorks from "../Components/FeaturedWorks/FeaturedWorks";
import Service from "../Components/Service/Service";
const Home = () => {
  return (
    <div className="bg-[#FEF9EF] pb-100">
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
      <Service></Service>
      <FeaturedWorks></FeaturedWorks>
    </div>
  );
};

export default Home;
