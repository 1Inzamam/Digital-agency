// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { GoArrowRight } from "react-icons/go";
// import "swiper/css";
// import "swiper/css/navigation";
// import expertise from "../../assets/image/experties.png";
// import reliability from "../../assets/image/relaiability.png";
// import innovation from "../../assets/image/innovation.png";
// import efficiency from "../../assets/image/time-management.png";
// import scalability from "../../assets/image/capacity.png";
// import support from "../../assets/image/customer-service.png";
// import { useRef } from "react";

// const WhatMakesUsDifferent = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   const cards = [
//     {
//       title: "Expertise",
//       image: <img src={expertise} alt="" />,
//       desc: "Highly skilled professionals delivering top-quality solutions.",
//     },
//     {
//       title: "Reliability",
//       image: <img src={reliability} alt="" />,
//       desc: "Consistent and dependable service you can trust every time.",
//     },
//     {
//       title: "Innovation",
//       image: <img src={innovation} alt="" />,
//       desc: "Creative ideas and cutting-edge solutions for your brand.",
//     },
//     {
//       title: "Efficiency",
//       image: <img src={efficiency} alt="" />,
//       desc: "Fast delivery without compromising quality or performance.",
//     },
//     {
//       title: "Scalability",
//       image: <img src={scalability} alt="" />,
//       desc: "Solutions that grow with your business needs.",
//     },
//     {
//       title: "Support",
//       image: <img src={support} alt="" />,
//       desc: "Dedicated support to help you anytime you need.",
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden py-16" >
//       <div className="w-9/12 mx-auto flex gap-10">
//         {/* LEFT SIDE */}
//         <div className="w-[35%] space-y-6">
//           <h1 className="text-4xl font-semibold">What makes us different?</h1>
//           <p className="text-neutral">
//             We will take care of all your creative needs. No inefficient
//             freelancers. No lengthy hiring procedures. No contracts. Just your
//             work getting done!
//           </p>

//           {/* Navigation Buttons */}
//           <div className="flex gap-4 pt-4">
//             <button
//               ref={prevRef}
//               className="w-10 h-10 rounded-full border flex items-center justify-center"
//             >
//               ←
//             </button>
//             <button
//               ref={nextRef}
//               className="w-10 h-10 rounded-full border flex items-center justify-center"
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE (CAROUSEL) */}
//         <div className="w-[65%] relative">
//           <div className="absolute left-0 right-[-50vw]">
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={20}
//               slidesPerView={2.2}
//               onBeforeInit={(swiper) => {
//                 swiper.params.navigation.prevEl = prevRef.current;
//                 swiper.params.navigation.nextEl = nextRef.current;
//               }}
//               breakpoints={{
//                 640: { slidesPerView: 2.2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
//               {cards.map((card, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="p-5 bg-base-100 w-70 h-80 rounded-2xl space-y-6 transition">
//                     <div className="w-12 h-12">
//                       {card.image}
//                     </div>

//                     <div className="space-y-4">
//                       <h2 className="font-medium text-2xl text-primary">
//                         {card.title}
//                       </h2>
//                       <p className="text-neutral text-base">{card.desc}</p>
//                     </div>

//                     <button className="py-3 text-primary flex items-center gap-2">
//                       Explore More <GoArrowRight className="rotate-[-30deg]" />
//                     </button>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatMakesUsDifferent;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GoArrowRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";

import expertise from "../../assets/image/experties.png";
import reliability from "../../assets/image/relaiability.png";
import innovation from "../../assets/image/innovation.png";
import efficiency from "../../assets/image/time-management.png";
import scalability from "../../assets/image/capacity.png";
import support from "../../assets/image/customer-service.png";

import { useRef } from "react";

const WhatMakesUsDifferent = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const cards = [
    {
      title: "Expertise",
      image: expertise,
      desc: "Highly skilled professionals delivering top-quality solutions.",
    },
    {
      title: "Reliability",
      image: reliability,
      desc: "Consistent and dependable service you can trust every time.",
    },
    {
      title: "Innovation",
      image: innovation,
      desc: "Creative ideas and cutting-edge solutions for your brand.",
    },
    {
      title: "Efficiency",
      image: efficiency,
      desc: "Fast delivery without compromising quality or performance.",
    },
    {
      title: "Scalability",
      image: scalability,
      desc: "Solutions that grow with your business needs.",
    },
    {
      title: "Support",
      image: support,
      desc: "Dedicated support to help you anytime you need.",
    },
  ];

  return (
    <div className="relative overflow-hidden pt-16 lg:pt-28 md:py-16">
      <div className="w-11/12 xl:w-9/12 mx-auto flex flex-col xl:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="xl:w-[35%] space-y-6 text-center xl:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold">
            What makes us different?
          </h1>
          <p className="text-neutral text-sm md:text-base">
            We will take care of all your creative needs. No inefficient
            freelancers. No lengthy hiring procedures. No contracts. Just your
            work getting done!
          </p>

          {/* Navigation */}
          <div className="flex justify-center xl:justify-start gap-4 pt-4">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border flex items-center justify-center"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="xl:w-[65%] relative">
          <div className="xl:absolute xl:left-0 xl:w-[calc(100%+50vw)]">
            <Swiper
              modules={[Navigation]}
              slidesPerView={"auto"}
              spaceBetween={12}
              loop={true}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="
                    !w-[240px] 
                    sm:!w-[260px] 
                    lg:!w-[277px]
                  "
                >
                  <div className="p-5 bg-base-100 w-full h-full min-h-[300px] rounded-2xl space-y-5  transition">
                    {/* Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />

                    {/* Content */}
                    <div className="space-y-3">
                      <h2 className="font-medium text-lg md:text-xl text-primary">
                        {card.title}
                      </h2>
                      <p className="text-neutral text-sm md:text-base">
                        {card.desc}
                      </p>
                    </div>

                    {/* Button */}
                    <button className="pt-2 text-primary flex items-center gap-2 text-sm md:text-base">
                      Explore More <GoArrowRight className="rotate-[-30deg]" />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;