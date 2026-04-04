import { GoArrowRight, GoStarFill } from "react-icons/go";
import bulb from "../../assets/image/bannerBulb.png";
import businessAnalytics from "../../assets/image/businessAnalytics.png";
import box from "../../assets/image/edit_box.png";
import profile from "../../assets/image/image.png";
import topClient from "../../assets/image/top-client.png";
import map from "../../assets/image/transparent-half-map.png";
const Banner = () => {
  return (
    <div className="flex items-center  bg-linear-to-tr from-[#FEF9EF] to-[#faedc9] pt-18 overflow-hidden">
      <img src={map} alt="" />
      <div className="w-9/12 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-25">
        <div className="w-[48%] space-y-5">
          <p className="text-secondary text-xs">🔥Award wining Company</p>
          <h1 className="font-semibold text-3xl">
            Transforming Your Vision into Creative Results
          </h1>
          <p className=" text-primary text-[10px] ">
            We provide topnotch Graphics design, Web design and development,
            anddigital marketing services to help your business thrive.
          </p>
          <button className="btn btn-secondary py-3 px-6 text-base flex items-center gap-2 w-fit">
            Get Started <GoArrowRight className="rotate-[-30deg]" />
          </button>
          <div className="flex items-center text-secondary gap-1">
            <GoStarFill className="w-6"></GoStarFill>
            <GoStarFill className="w-6"></GoStarFill>
            <GoStarFill className="w-6"></GoStarFill>
            <GoStarFill className="w-6"></GoStarFill>
            <GoStarFill className="w-6"></GoStarFill>
          </div>
        </div>
        <div className="w-[48%] relative flex justify-center ">
          <img className="relative z-10 w-100 mx-auto" src={profile} alt="" />
          <img
            className="absolute z-10 lg:-left-12 lg:-top-10 xl:left-7 xl:-top-8"
            src={bulb}
            alt=""
          />
          <div className="absolute blur-[1px] top-4  bg-secondary lg:w-[300px] lg:h-[300px] mx-auto rounded-full"></div>
          <img
            className="absolute z-10 lg:-top-2 lg:-right-1  xl:-top-3 xl:right-18"
            src={box}
            alt=""
          />
          <img
            className="absolute z-10 lg:top-56 lg:-left-8 lg:w-44 xl:top-68 xl:left-5  xl:w-50"
            src={topClient}
            alt=""
          />
        </div>
        <img
          className="absolute z-10 lg:w-50 xl:w-62 lg:-right-1 lg:top-86 xl:right-18 xl:top-93"
          src={businessAnalytics}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
