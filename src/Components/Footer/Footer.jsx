import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import logo from "../../assets/image/footerLogo.png";
import visaCards from "../../assets/image/visaCard.png";
import OverlapContents from "./overlapContents";

const Footer = () => {
  return (
    <div className="bg-primary relative pt-60">
      <OverlapContents />
      <footer className="w-9/12 mx-auto footer sm:footer-horizontal bg-primary text-white py-10">
        <aside className="space-y-4">
          <img src={logo} alt="" />
          <p className="w-full xl:w-80 text-sm xl:text-base">
            We offer a range of services to help your business succeed, from
            design and development to digital marketing and more.
          </p>
          <div className="space-y-4">
            <h1 className="text-base xl:text-xl">Follow Us On Social Media</h1>
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-lg xl:text-2xl" />
              <SiInstagram className="text-lg xl:text-2xl" />
              <FaLinkedinIn className="text-lg xl:text-2xl" />
            </div>
          </div>
        </aside>
        <div className="border-r border-white/30 h-full"></div>
        <nav>
          <h6 className="footer-title text-sm xl:text-base">Quick Links</h6>
          <a className="link link-hover text-sm xl:text-base">
            Terms & Conditions
          </a>
          <a className="link link-hover text-sm xl:text-base">Privacy Policy</a>
          <a className="link link-hover text-sm xl:text-base">Refund Policy</a>
          <a className="link link-hover text-sm xl:text-base">
            Disclaimer Policy
          </a>
        </nav>
        <div className="border-r border-white/30 h-full"></div>
        <div>
          <h1 className="footer-title text-sm xl:text-base">Our Services</h1>
          <h3 className="text-sm xl:text-base">Graphics-design</h3>
          <h3 className="text-sm xl:text-base">Photo Editing</h3>
          <h3 className="text-sm xl:text-base">Web Design & Development</h3>
          <h3 className="text-sm xl:text-base">Virtual Assistant</h3>
        </div>
        <div className="border-r border-white/30 h-full"></div>
        <div className="w-full xl:w-80">
          <h1 className="footer-title text-sm xl:text-base">Contact Us</h1>
          <h3 className="text-sm xl:text-base">Email: info@webbriks.com</h3>
          <h3 className="text-sm xl:text-base">Phone: +1 718 577 1232</h3>
          <h3 className="text-sm xl:text-base">
            Address: Web briks, LLC. 1209, Mountain Road PL NE, STE R,
            ALBUQUERQUE, NM, 87110
          </h3>
        </div>
      </footer>
      <div className="w-9/12 mx-auto text-white flex flex-col-reverse gap-3 md:flex-row justify-between items-center pb-10">
        <p className="text-xs xl:text-sm">
          &copy; 2024 Webbriks LLC. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <p className="text-xs xl:text-sm">We Accept: </p>
          <img className="w-" src={visaCards} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;