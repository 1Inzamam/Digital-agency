import AboutFooter from "../Components/AboutLayout/AboutFooter/AboutFooter"
import AboutOverlapContents from "../Components/AboutLayout/AboutOverlapContent/AboutOverlapContent"
import HowWeWork from "../Components/HowWeWork/HowWeWork"
import PageBanner from "../Components/PageBanner/PageBanner"
import Service from "../Components/Service/Service"

const Services = () => {
  return (
    <div className="bg-[#FEF9EF]">
      <PageBanner></PageBanner>
      <Service></Service>
      <AboutOverlapContents></AboutOverlapContents>
      <HowWeWork></HowWeWork>
      <AboutFooter></AboutFooter>
    </div>
  );
}

export default Services