import { GoArrowRight } from "react-icons/go";
import bgImage from "../../../assets/image/bgImage.png";
import { MdOutlineCall } from "react-icons/md";
import footerProfile from "../../../assets/image/footerProfile.png";
const AboutOverlapContents = () => {
  return (
    <div className="pt-16 lg:pt-28 w-9/12 mx-auto">
      <div
        className="w-full h-95 bg-cover bg-center bg-no-repeat rounded-2xl relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-secondary/80 w-full h-full rounded-2xl text-white flex items-center">
          {/*textContents*/}
          <div className="p-6 xl:p-13 space-y-5">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
              Feel Free To Contact Us!
            </h1>
            <p className="w-full xl:w-130 text-sm md:text-base">
              Reach out to our team of experts, and we'll get back to you
              promptly with personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button className="btn btn-primary shadow-none py-4 xl:py-7 rounded-xl px-4 xl:px-6 text-white font-thin flex items-center gap-2 text-sm xl:text-base">
                Request a Quote <GoArrowRight />
              </button>
              <button className="btn bg-white/20 shadow-none py-4 xl:py-7 rounded-xl px-4 xl:px-6 text-white font-thin flex items-center gap-2 text-sm xl:text-base">
                <MdOutlineCall className="text-xl" />
                +1 718 577 1232
              </button>
            </div>
          </div>
          <div className="hidden xl:block absolute right-20 -top-25.5">
            <img className="" src={footerProfile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverlapContents;
