import { GoArrowRight } from "react-icons/go";
import laptopGuy from "../../assets/image/laptop-guy.png";
import girl from "../../assets/image/red-hair.png";
import digitalMarketing from "../../assets/image/DigitalMarketingBlack.png";
import rectangle from "../../assets/image/Rectangle 39973.png";
import ellipse from "../../assets/image/Ellipse 481.png";
import star from "../../assets/image/Star 9.png";
import star2 from "../../assets/image/Star 10.png";
import logo from "../../assets/image/logos_dailydev-icon.png";

const WhoWeAre = () => {
  return (
    <div className="bg-[#FEF9EF] py-20">
      <div className="w-9/12 mx-auto flex flex-col lg:flex-row gap-10">
        <div className="w-[48%] relative">
          {/* girl and ellipse */}
          <div className="">
            <img
              className="w-7 absolute z-10 top-5 left-15"
              src={ellipse}
              alt=""
            />
            <img className="w-64 relative top-20" src={girl} alt="" />
          </div>
          {/* laptop guy */}
          <div className="relative left-68 -top-65">
            <div className="absolute z-10 -top-5 -left-8 w-19 h-19 rounded-full bg-primary text-white flex justify-center items-center text-2xl rotate-150 transition-transform duration-700 ease-in-out hover:rotate-510 border-4 border-white">
              <GoArrowRight />
            </div>
            <img className="relative" src={laptopGuy} alt="" />
            <img className="absolute top-40 left-70" src={star2} alt="" />
          </div>
          {/*rectangle and logo */}
          <div className="absolute z-11 top-74 left-52 max-w-36 flex  items-center justify-center">
            <img
              className="relative border-4 rounded-full border-white"
              src={rectangle}
              alt=""
            />
            <img className="absolute " src={logo} alt="" />
          </div>
          {/* star and digital marketing */}
          <div className="absolute top-76 left-55">
            <img className="absolute -left-20 top-20" src={star} alt="" />
            <img className="absolute -left-35 top-35" src={ellipse} alt="" />
            <img className="relative" src={digitalMarketing} alt="" />
          </div>
        </div>
        <div className="w-[48%]">
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <p>
            At Web Briks, we began our journey in early 2018 as "Cut Out
            Expert." Our focus was on providing high-quality photo editing
            services. As we grew and gained more clients, we decided to expand
            our offerings. This growth led us to create "Web Briks LLC." Now, we
            offer additional services, including virtual assistance and web
            design.
          </p>
          <p>
            Our founders bring a wealth of experience and vision to our company.
            They lead a passionate team dedicated to helping clients succeed. We
            prioritize tailored solutions that meet each client’s unique needs.
          </p>
          <button className="btn btn-secondary py-3 px-6 text-white flex items-center gap-2">
            Learn More <GoArrowRight className="rotate-[-30deg]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
