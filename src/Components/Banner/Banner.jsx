import { GoArrowRight, GoStarFill } from "react-icons/go";
import bulb from "../../assets/image/bannerBulb.png";
import businessAnalytics from "../../assets/image/businessAnalytics.png";
import box from "../../assets/image/edit_box.png";
import profile from "../../assets/image/image.png";
import topClient from "../../assets/image/top-client.png";
import map from "../../assets/image/transparent-half-map.png";
const Banner = () => {
  return (
    <div className="flex relative items-center  bg-linear-to-tr from-[#FEF9EF] to-[#faedc9] pt-18 overflow-hidden">
      <img className="absolute" src={map} alt="" />
      <div className=" relative w-9/12 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-5 md:gap-25">
        <div className="md:w-[48%] space-y-5">
          <p className="text-secondary text-xs">🔥Award wining Company</p>
          <h1 className="font-semibold text-3xl">
            Transforming Your Vision into Creative Results
          </h1>
          <p className=" text-primary text-[10px] ">
            We provide topnotch Graphics design, Web design and development,
            anddigital marketing services to help your business thrive.
          </p>
          <button className="btn btn-secondary py-3 px-6 text-white flex items-center gap-2 w-fit">
            Get Started <GoArrowRight className="rotate-[-30deg]" />
          </button>
          <div className="flex items-center text-secondary gap-1 pb-5">
            <GoStarFill className="w-6"></GoStarFill>
            <GoStarFill className="w-6"></GoStarFill>
            <GoStarFill className="w-6"></GoStarFill>
            <GoStarFill className="w-6"></GoStarFill>
            <GoStarFill className="w-6"></GoStarFill>
          </div>
        </div>
        <div className="md:w-[48%] relative flex justify-center ">
          <img className="relative z-10 w-100 mx-auto" src={profile} alt="" />
          <img
            className="absolute z-10 w-15 xs:w-18 xsl:w-19 md:w-auto -top-5 left-0  lg:-left-12 lg:-top-10 xl:left-7 xl:-top-8 2xl:left-26 md:-top-15 md:-left-9 "
            src={bulb}
            alt=""
          />
          <div className="absolute blur-[1px] top-4  bg-secondary w-45 h-45 xs:w-52 xs:h-52 xsl:w-60 xsl:h-60 md:w-52 md:h-52 lg:w-63 lg:h-63 xl:w-75 xl:h-75 mx-auto rounded-full"></div>
          <img
            className="absolute z-10 w-15 xs:w-18 xsl:w-19 md:w-auto right-1 -top-4 lg:-top-2 lg:-right-1  xl:-top-3 xl:right-18 2xl:right-37 md:-top-5 md:-right-2"
            src={box}
            alt=""
          />
          <img
            className="absolute z-10 w-30 xsl:w-36 top-41 -left-4 xs:top-48 xs:left-0 xsl:top-55 xsl:-left-2  lg:top-56 lg:-left-8 lg:w-44 xl:top-68 xl:left-5  xl:w-50 2xl:left-25 md:top-46 md:-left-6 md:w-36"
            src={topClient}
            alt=""
          />
        </div>
        <img
          className="absolute z-10 w-30 top-27 -right-7 xsl:w-40 xsl:top-35 xsl:-right-10 xs:w-35 xs:-right-8 xs:top-31  lg:w-50 xl:w-62 lg:-right-20 lg:top-37 xl:-right-14 xl:top-44 2xl:right-7 md:top-30 md:right-23 md:w-40 "
          src={businessAnalytics}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
