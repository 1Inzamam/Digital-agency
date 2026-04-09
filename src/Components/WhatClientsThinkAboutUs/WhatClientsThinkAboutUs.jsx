import { GoArrowRight } from "react-icons/go";
import map from "../../assets/image/map.png";
import profile1 from "../../assets/image/reviewProfile1.png";
import profile2 from "../../assets/image/reviewProfile2.png";
import profile3 from "../../assets/image/reviewProfile3.png";

const WhatClientsThinkAboutUs = () => {
  return (
      <div className='w-9/12 mx-auto' style={{
          backgroundImage: `url(${map})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
    }}>
      <div>
        <h1>What Client Think About US</h1>
        <p>
          Our team of specialists helps businesses navigate the complex
          landscape of modern technology, ensuring they stay compliant,
          innovative, and competitive.{" "}
              </p>
                <button className="btn btn-secondary py-3 px-6 text-white flex items-center gap-2 w-fit">
                            Check All <GoArrowRight className="rotate-[-30deg]" />
                          </button>
          </div>
          <div>
              
          </div>
    </div>
  );
}

export default WhatClientsThinkAboutUs