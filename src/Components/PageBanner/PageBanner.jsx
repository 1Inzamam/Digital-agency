// import { Link } from "react-router";
// import banner from "../../../assets/image/aboutBanner.png";
// const AboutBanner = () => {
//   return (
//     <div className="">
//       <div
//         className="w-full h-100"
//         style={{
//           backgroundImage: `url(${banner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="w-ful h-full bg-secondary/25">
//           <div className="w-full h-full bg-black/45 flex flex-col items-center justify-center space-y-3">
//             <h1 className="text-5xl text-white">About Us</h1>
//             <div className="flex items-center gap-1">
//               <Link to={"/"} className="text-secondary font-semibold text-2xl">
//                 Home
//               </Link>
//               <h3 className="text-white text-xl font-semibold">/ About us</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutBanner;

import { Link, useLocation } from "react-router";
import banner from "../../assets/image/aboutBanner.png";

const PageBanner = () => {
  const { pathname } = useLocation();

  // Map route paths to display names
  const routeNames = {
    "/about": "About Us",
    "/services": "Services",
    "/contact": "Contact Us",
    "/portfolio": "Portfolio",
  };

  // Fallback: capitalize the path segment if not in the map
  const pageTitle =
    routeNames[pathname] ||
    pathname
      .replace("/", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div>
      <div
        className="w-full h-100"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full bg-secondary/25">
          <div className="w-full h-full bg-black/45 flex flex-col items-center justify-center space-y-3">
            <h1 className="text-5xl text-white">{pageTitle}</h1>
            <div className="flex items-center gap-1">
              <Link to="/" className="text-secondary font-semibold text-2xl">
                Home
              </Link>
              <h3 className="text-white text-xl font-semibold">
                / {pageTitle}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;