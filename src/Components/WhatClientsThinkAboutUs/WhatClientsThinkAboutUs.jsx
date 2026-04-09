// import { GoArrowRight } from "react-icons/go";
// import map from "../../assets/image/map.png";
// import profile1 from "../../assets/image/reviewProfile1.png";
// import profile2 from "../../assets/image/reviewProfile2.png";
// import profile3 from "../../assets/image/reviewProfile3.png";
// import quoteHovered from "../../assets/image/quoteHovered.png";
// import quoteUnHovered from "../../assets/image/quoteUnHovered.png";
// import Arrow from "../../assets/image/Arrow.png";
// import ellipse from "../../assets/image/Ellipse 483.png";
// import star from "../../assets/image/Star 9.png";
// import { useState } from "react";
// const WhatClientsThinkAboutUs = () => {
//   const cardContent = [
//     {
//       image: profile1,
//       name: "John",
//       desc: "Expert Designer exceeded my expectations with outstanding logo design work. ",
//     },
//     {
//       image: profile2,
//       name: "Caroline",
//       desc: "Expert Designer exceeded my expectations with outstanding logo design work.   ",
//     },
//     {
//       image: profile3,
//       name: "Suxan",
//       desc: "Expert Designer exceeded my expectations with outstanding logo design work. ",
//     },
//   ];
//   return (
//     <div
//       className="w-9/12 mx-auto mt-16 lg:28 flex flex-col lg:flex-row items-center"
//       style={{
//         backgroundImage: `url(${map})`,
//       }}
//     >
//       <div className="space-y-7">
//         <h1 className="text-5xl font-semibold text-primary">
//           What Client Think About US
//         </h1>
//         <p className="text-neutral font-normal text-sm lg:w-[70%]">
//           Our team of specialists helps businesses navigate the complex
//           landscape of modern technology, ensuring they stay compliant,
//           innovative, and competitive.{" "}
//         </p>
//         <button className="btn btn-secondary py-3 px-6 text-white flex items-center gap-2 w-fit">
//           Check All <GoArrowRight className="rotate-[-30deg]" />
//         </button>
//       </div>
//       <div>
//         {cardContent.map((cards, index) => (
//           <div className="group bg-[#EBEBEB] pl-3 rounded-2xl hover:bg-[#FFA726] transform hover:-translate-x-25 duration-300">
//             <div
//               key={index}
//               className="flex items-center gap-4 mb-5 bg-base-100 p-4 rounded-r-xl relative"
//             >
//               <img
//                 className="rounded-full w-28"
//                 src={cards.image}
//                 alt="profile image"
//               />
//               <div className="space-y-2">
//                 <h1 className="text-2xl font-semibold text-primary">
//                   {cards.name}
//                 </h1>
//                 <p className="text-neutral text-sm font-normal">{cards.desc}</p>
//               </div>

//               <div className="absolute top-0 right-0 p-3">
//                 <div className="transition duration300 group-hover:hidden w-6">
//                   <img src={quoteUnHovered} alt="" />
//                 </div>
//                 <div className="w-6  hidden transition duration-300 group-hover:block ">
//                   <img src={quoteHovered} alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhatClientsThinkAboutUs;

import { GoArrowRight } from "react-icons/go";
import map from "../../assets/image/map.png";
import profile1 from "../../assets/image/reviewProfile1.png";
import profile2 from "../../assets/image/reviewProfile2.png";
import profile3 from "../../assets/image/reviewProfile3.png";
import quoteHovered from "../../assets/image/quoteHovered.png";
import quoteUnHovered from "../../assets/image/quoteUnHovered.png";

const WhatClientsThinkAboutUs = () => {
  const cardContent = [
    {
      image: profile1,
      name: "John",
      desc: "Expert Designer exceeded my expectations with outstanding logo design work.",
    },
    {
      image: profile2,
      name: "Caroline",
      desc: "Expert Designer exceeded my expectations with outstanding logo design work.",
    },
    {
      image: profile3,
      name: "Suxan",
      desc: "Expert Designer exceeded my expectations with outstanding logo design work.",
    },
  ];

  return (
    <div
      className="w-9/12 md:w-10/12 lg:w-9/12 mx-auto mt-16 lg:mt-28 flex flex-col lg:flex-row items-center gap-10 lg:gap-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${map})` }}
    >
      {/* Left text section */}
      <div className="space-y-4 lg:space-y-7 w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
          What Client Think About US
        </h1>
        <p className="text-neutral font-normal text-xs sm:text-sm lg:w-[70%] mx-auto lg:mx-0">
          Our team of specialists helps businesses navigate the complex
          landscape of modern technology, ensuring they stay compliant,
          innovative, and competitive.
        </p>
        <button className="btn btn-secondary py-2 lg:py-3 px-5 lg:px-6 text-sm lg:text-base text-white flex items-center gap-2 w-fit mx-auto lg:mx-0">
          Check All <GoArrowRight className="rotate-[-30deg]" />
        </button>
      </div>

      {/* Cards section */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        {cardContent.map((cards, index) => (
          <div
            key={index}
            className="
              group bg-[#EBEBEB] pl-3 rounded-2xl
              hover:bg-[#FFA726] duration-300 transform
              /* Mobile: scale zoom effect */
              hover:scale-105
              /* Large screens: translate effect instead of scale */
              lg:hover:scale-100 lg:hover:-translate-x-6
            "
          >
            <div className="relative flex items-center gap-3 lg:gap-4 mb-0 bg-base-100 p-3 lg:p-4 rounded-r-xl">
              {/* Profile image */}
              <img
                className="rounded-full w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 object-cover flex-shrink-0"
                src={cards.image}
                alt="profile image"
              />

              {/* Text */}
              <div className="space-y-1 lg:space-y-2 flex-1 pr-8">
                <h1 className="text-base sm:text-xl lg:text-2xl font-semibold text-primary">
                  {cards.name}
                </h1>
                <p className="text-neutral text-xs sm:text-sm font-normal leading-snug">
                  {cards.desc}
                </p>
              </div>

              {/* Quote icon — top right */}
              <div className="absolute top-0 right-0 p-2 lg:p-3">
                <img
                  className="w-5 lg:w-6 block group-hover:hidden"
                  src={quoteUnHovered}
                  alt=""
                />
                <img
                  className="w-5 lg:w-6 hidden group-hover:block"
                  src={quoteHovered}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatClientsThinkAboutUs;