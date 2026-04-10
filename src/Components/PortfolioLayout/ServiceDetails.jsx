import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import image1 from "../../assets/image/portfolioimage1.png";
import image2 from "../../assets/image/portfolioimage2.png";

const ServiceDetails = () => {
  return (
    <div>
      <div className="w-11/12 sm:w-10/12 md:w-9/12 mx-auto flex flex-col lg:flex-row justify-between gap-8 pt-16 lg:pt-28">
        {/* Left Column */}
        <div className="w-full lg:w-[58%] space-y-8">
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-100">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={image1}
              alt=""
            />
          </div>
          <div className="space-y-4 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary">
              Service Details
            </h1>
            <p className="text-neutral text-sm sm:text-base leading-relaxed">
              Graphic design encompasses a wide range of creative services, all
              aimed at visually communicating a brand's message or purpose. A
              key component is brand identity design, which involves creating
              logos, business cards, and brand guidelines to establish a
              consistent and memorable presence. Marketing and advertising
              design services cover everything from social media graphics and
              digital ads to brochures, posters, and flyers, ensuring that
              marketing efforts are engaging and aligned with the brand's goals.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[38%] space-y-8">
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-100">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={image2}
              alt=""
            />
          </div>
          <div>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-center gap-2 text-neutral text-sm sm:text-base">
                <IoMdCheckmarkCircleOutline className="text-[#FFA726] text-xl shrink-0" />
                Logo, brand guidelines for cohesive visuals.
              </li>
              <li className="flex items-center gap-2 text-neutral text-sm sm:text-base">
                <IoMdCheckmarkCircleOutline className="text-[#FFA726] text-xl shrink-0" />
                Social media graphics, ads, flyers, and brochures.
              </li>
              <li className="flex items-center gap-2 text-neutral text-sm sm:text-base">
                <IoMdCheckmarkCircleOutline className="text-[#FFA726] text-xl shrink-0" />
                Website graphics, UI/UX design, and infographics.
              </li>
              <li className="flex items-center gap-2 text-neutral text-sm sm:text-base">
                <IoMdCheckmarkCircleOutline className="text-[#FFA726] text-xl shrink-0" />
                Creative packaging and label design for products.
              </li>
              <li className="flex items-center gap-2 text-neutral text-sm sm:text-base">
                <IoMdCheckmarkCircleOutline className="text-[#FFA726] text-xl shrink-0" />
                Print ads, presentations, and custom typography.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
