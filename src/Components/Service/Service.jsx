import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoTriangle } from "react-icons/io5";
import ai from "../../assets/image/Ai.png";
import va from "../../assets/image/desktop.png";
import serviceBg from "../../assets/image/Rectangle service.png";
import service from "../../assets/image/Service icon.png";
import pen from "../../assets/image/service pen.png";

const Service = () => {
  const [colorChange, setColorChange] = useState(null);
  return (
    <div className=" bg-linear-to-tr from-[#fcf5e8] to-[#FEF9EF] pt-16 lg:pt-28">
      <div className="w-9/12 mx-auto space-y-3">
        {/*first section*/}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 xl:p-4">
          {/* heading and description */}
          <div className="col-span-2 space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-primary">
                Service We Provide
              </h1>
              <p className="text-neutral text-lg font-normal">
                This growth led us to create "Web Briks LLC." Now, we offer
                additional services, including virtual assistance and web
                design.
              </p>
            </div>
            <button className="btn bg-transparent py-3 px-6 text-primary flex items-center gap-2 border-primary rounded-lg">
              Get Started <GoArrowRight className="rotate-[-30deg]" />
            </button>
          </div>
          {/* first two service */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* graphics design */}
            <div
              onMouseEnter={() => setColorChange("graphics")}
              onMouseLeave={() => setColorChange(null)}
              className="p-5 bg-base-100 rounded-2xl space-y-6"
            >
              <img src={pen} alt="Graphics Design" />
              <div className="space-y-4">
                <h2 className="font-medium text-2xl text-primary">
                  Graphics Design
                </h2>
                <p className="text-neutral font-normal text-base">
                  Creative and compelling graphic design services to make your
                  brand stand out.
                </p>
              </div>
              <button className=" bg-transparent py-3  text-primary flex items-center gap-2 border-0">
                Explore More <GoArrowRight className="rotate-[-30deg]" />
              </button>
            </div>
            {/*Photo editing*/}
            <div
              onMouseEnter={() => setColorChange("photo")}
              onMouseLeave={() => setColorChange(null)}
              className="p-5 bg-base-100 rounded-2xl space-y-6"
            >
              <div className="flex items-center relative">
                <img className="relative " src={serviceBg} alt="" />
                <img
                  className="absolute left-3"
                  src={service}
                  alt="Photo Editing"
                />
              </div>
              <div className="space-y-4">
                <h2 className="font-medium text-2xl text-primary">
                  Photo Editing
                </h2>
                <p className="text-neutral font-normal text-base">
                  Professional photo editing services to enhance your images to
                  perfection.
                </p>
              </div>
              <button className=" bg-transparent py-3  text-primary flex items-center gap-2 border-0">
                Explore More <GoArrowRight className="rotate-[-30deg]" />
              </button>
            </div>
          </div>
        </div>
        {/*divider*/}
        <div className="hidden  border-t  xl:grid grid-cols-4 relative text-gray-300 ">
          <div className="flex justify-center relative">
            <IoTriangle
              className={`absolute rotate-180 -bottom-3.5 ${colorChange === "virtual" ? "text-orange-500" : "text-gray-300"}`}
            ></IoTriangle>
          </div>
          <div className="flex justify-center relative ">
            <IoTriangle
              className={`absolute -top-3.5 ${colorChange === "WebDev" ? "text-orange-500" : "text-gray-300"}`}
            ></IoTriangle>
          </div>
          <div className="flex justify-center relative">
            <IoTriangle
              className={`absolute -top-3.5 ${colorChange === "graphics" ? "text-orange-500" : "text-gray-300"}`}
            ></IoTriangle>
          </div>
          <div className="flex justify-center relative">
            <IoTriangle
              className={`absolute -top-3.5 ${colorChange === "photo" ? "text-orange-500" : "text-gray-300"}`}
            ></IoTriangle>
          </div>
        </div>
        {/*second section*/}
        <div>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 xl:p-4 items-center">
            {/*cards*/}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Virtual Assistant */}
              <div
                onMouseEnter={() => setColorChange("virtual")}
                onMouseLeave={() => setColorChange(null)}
                className="p-5 bg-base-100 rounded-2xl space-y-6"
              >
                <img src={va} alt="Graphics Design" />
                <div className="space-y-4">
                  <h2 className="font-medium text-2xl text-primary">
                    Virtual Assistant
                  </h2>
                  <p className="text-neutral font-normal text-base">
                    Creative and compelling graphic design services to make your
                    brand stand out.
                  </p>
                </div>
                <button className=" bg-transparent py-3  text-primary flex items-center gap-2 border-0">
                  Explore More <GoArrowRight className="rotate-[-30deg]" />
                </button>
              </div>
              {/*Web Design Development*/}
              <div
                onMouseEnter={() => setColorChange("WebDev")}
                onMouseLeave={() => setColorChange(null)}
                className="p-5 bg-base-100 rounded-2xl space-y-6"
              >
                <img className="" src={ai} alt="Photo Editing" />

                <div className="space-y-4">
                  <h2 className="font-medium text-2xl text-primary">
                    Web Design Development
                  </h2>
                  <p className="text-neutral font-normal text-base">
                    Creative and compelling graphic design services to make your
                    brand stand out.
                  </p>
                </div>
                <button className=" bg-transparent py-3  text-primary flex items-center gap-2 border-0">
                  Explore More <GoArrowRight className="rotate-[-30deg]" />
                </button>
              </div>
            </div>
            {/*text content*/}
            <div className="col-span-2 space-y-8">
              <p>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. eni, ad minim.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex justify-center items-center rounded-full">
                  <IoTriangle className="text-white rotate-90"></IoTriangle>
                </div>
                <h2>Video Presentation</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
