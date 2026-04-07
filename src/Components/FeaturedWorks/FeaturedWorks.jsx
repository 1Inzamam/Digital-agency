// // import React from "react";
// // import collage1 from "../../assets/image/PhotoCollage/collageImage1.png";
// // import collage2 from "../../assets/image/PhotoCollage/collage2.png";
// // import collage3 from "../../assets/image/PhotoCollage/collage3.png";
// // import collage4 from "../../assets/image/PhotoCollage/collage4.png";
// // import collage5 from "../../assets/image/PhotoCollage/collage5.png";
// // const FeaturedWorks = () => {
// //   return (
// //     <div>
// //       <div className="grid grid-cols-3 border">
// //         <div className="p-3">
// //           <div
// //             className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl"
// //             style={{ backgroundImage: `url(${collage1})` }}
// //           ></div>
// //         </div>
// //         <div>
// //           <img className="w-full rounded-3xl p-3" src={collage2} alt="" />
// //         </div>
// //         <div>
// //           <img className="w-full rounded-3xl p-3" src={collage3} alt="" />
// //               </div>
// //               div
// //         <div className="p-3">
// //           <div className="bg-secondary w-full h-full rounded-2xl p-7">
// //             <p>
// //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
// //               excepturi pariatur impedit numquam, earum facere nesciunt
// //               perferendis repudiandae molestiae exercitationem nam veniam
// //               deleniti sapiente quis ab architecto beatae corporis soluta.
// //             </p>
// //           </div>
// //         </div>
// //         <div>
// //           <img className="w-full h-full rounded-3xl p-3" src={collage4} alt="" />
// //         </div>
// //         <div>
// //           <img className="w-full h-full rounded-3xl p-3" src={collage5} alt="" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeaturedWorks;

// import React from "react";
// import collage1 from "../../assets/image/PhotoCollage/collageImage1.png";
// import collage2 from "../../assets/image/PhotoCollage/collage2.png";
// import collage3 from "../../assets/image/PhotoCollage/collage3.png";
// import collage4 from "../../assets/image/PhotoCollage/collage4.png";
// import collage5 from "../../assets/image/PhotoCollage/collage5.png";
// import { GoArrowRight } from "react-icons/go";

// const FeaturedWorks = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-3 grid-rows-3 bg-linear-to-br from- pt-28">
//         {/* Image 1 — col 1, row 1, spans 2 rows */}
//         <div className="col-start-1 row-start-1 row-span-2 p-3">
//           <div
//             className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl"
//             style={{ backgroundImage: `url(${collage1})` }}
//           ></div>
//         </div>

//         {/* Image 2 — col 2, row 1, spans 1 column only */}
//         <div className="col-start-2 row-start-1">
//           <img className="w-full rounded-3xl p-3" src={collage2} alt="" />
//         </div>

//         {/* Image 3 — col 3, row 1, spans 2 rows */}
//         <div className="col-start-3 row-start-1 row-span-2 p-3">
//           <img
//             className="w-full h-full object-cover rounded-3xl p-3"
//             src={collage3}
//             alt=""
//           />
//         </div>

//         {/* Empty div — center (col 2), row 2 */}
//         <div className="col-start-2 row-start-2 p-3">
//           <div className="w-full h-full rounded-2xl text-center flex justify-center flex-col items-center p-3 space-y-3">
//             <h1 className="text-4xl font-semibold text-primary">Featured Work</h1>
//             <p className="text-base text-neutral">
//               A showcase of our recent projects across various industries,
//               demonstrating our expertise and commitment to quality.
//             </p>
//             <button className="btn bg-transparent border-none py-3 px-6 text-primary flex items-center gap-2">
//               Learn More <GoArrowRight className="rotate-[-30deg]" />
//             </button>
//           </div>
//         </div>

//         {/* Text div — col 1, row 3 */}
//         <div className="col-start-1 row-start-3 p-3">
//           <div className="bg-secondary w-full h-full rounded-2xl p-7">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
//               excepturi pariatur impedit numquam, earum facere nesciunt
//               perferendis repudiandae molestiae exercitationem nam veniam
//               deleniti sapiente quis ab architecto beatae corporis soluta.
//             </p>
//           </div>
//         </div>

//         {/* Image 4 — col 2 (middle), row 3 */}
//         <div className="col-start-2 row-start-3">
//           <img
//             className="w-full h-full rounded-3xl p-3"
//             src={collage4}
//             alt=""
//           />
//         </div>

//         {/* Image 5 — col 3, row 3 */}
//         <div className="col-start-3 row-start-3">
//           <img
//             className="w-full h-full rounded-3xl p-3"
//             src={collage5}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedWorks;

import React from "react";
import collage1 from "../../assets/image/PhotoCollage/collageImage1.png";
import collage2 from "../../assets/image/PhotoCollage/collage2.png";
import collage3 from "../../assets/image/PhotoCollage/collage3.png";
import collage4 from "../../assets/image/PhotoCollage/collage4.png";
import collage5 from "../../assets/image/PhotoCollage/collage5.png";
import { GoArrowRight } from "react-icons/go";

const FeaturedWorks = () => {
  return (
    <div className="pt-16 lg:pt-28 px-4 md:px-8">
      {/* Featured heading — shown only on mobile/tablet above the grid */}
      <div className="lg:hidden text-center mb-8 space-y-3">
        <h1 className="text-3xl font-semibold text-primary">Featured Work</h1>
        <p className="text-sm text-neutral">
          A showcase of our recent projects across various industries,
          demonstrating our expertise and commitment to quality.
        </p>
        <button className="btn bg-transparent border-none py-3 px-6 text-primary flex items-center gap-2 mx-auto">
          Learn More <GoArrowRight className="rotate-[-30deg]" />
        </button>
      </div>

      {/* Mobile: single column stack */}
      {/* Tablet: 2 columns */}
      {/* Desktop: full 3x3 grid */}
      <div
        className="
        grid gap-0
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3 lg:grid-rows-3
      "
      >
        {/* Image 1 — desktop: col 1, row 1–2 | mobile/tablet: full width */}
        <div
          className="
          p-3
          lg:col-start-1 lg:row-start-1 lg:row-span-2
        "
        >
          <div
            className="w-full h-full rounded-2xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${collage1})`,
              minHeight: "250px",
            }}
          ></div>
        </div>

        {/* Image 2 — desktop: col 2, row 1 | mobile/tablet: full/half width */}
        <div
          className="
          p-3
          lg:col-start-2 lg:row-start-1
        "
        >
          <img className="w-full rounded-3xl" src={collage2} alt="" />
        </div>

        {/* Image 3 — desktop: col 3, row 1–2 | mobile/tablet: full width */}
        <div
          className="
          p-3
          lg:col-start-3 lg:row-start-1 lg:row-span-2
        "
        >
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={collage3}
            alt=""
          />
        </div>

        {/* Featured Work text — desktop: col 2, row 2 | hidden on mobile (shown above) */}
        <div
          className="
          hidden lg:flex
          p-3
          lg:col-start-2 lg:row-start-2
        "
        >
          <div className="w-full h-full rounded-2xl text-center flex justify-center flex-col items-center p-3 space-y-3">
            <h1 className="text-4xl font-semibold text-primary">
              Featured Work
            </h1>
            <p className="text-base text-neutral">
              A showcase of our recent projects across various industries,
              demonstrating our expertise and commitment to quality.
            </p>
            <button className="btn bg-transparent border-none py-3 px-6 text-primary flex items-center gap-2">
              Learn More <GoArrowRight className="rotate-[-30deg]" />
            </button>
          </div>
        </div>

        {/* Text/secondary div — desktop: col 1, row 3 | mobile/tablet: full width */}
        <div
          className="
          p-3
          lg:col-start-1 lg:row-start-3
        "
        >
          <div className="bg-secondary w-full h-full rounded-2xl p-7 text-center flex flex-col justify-center items-center space-y-3">
            <h1 className="text-4xl font-semibold text-primary">Logo Branding</h1>
            <p className="text-base text-neutral">
              A showcase of our recent projects across various industries,
              demonstrating our expertise and commitment to quality.
            </p>
          </div>
        </div>

        {/* Image 4 — desktop: col 2, row 3 | mobile/tablet: full/half width */}
        <div
          className="
          p-3
          lg:col-start-2 lg:row-start-3
        "
        >
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={collage4}
            alt=""
          />
        </div>

        {/* Image 5 — desktop: col 3, row 3 | mobile/tablet: full/half width */}
        <div
          className="
          p-3
          lg:col-start-3 lg:row-start-3
        "
        >
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={collage5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
