import React from 'react'
import logo from "../../assets/image/footerLogo.png"
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io';
import { SiInstagram } from 'react-icons/si';
const Footer = () => {
  return (
    <div className="bg-primary">
      <footer className="w-9/12 mx-auto footer sm:footer-horizontal bg-primary text-white p-10">
        <aside>
          <img src={logo} alt="" />
          <p className="w-80">
            We offer a range of services to help your business succeed, from
            design and development to digital marketing and more.
          </p>
          <div className='space-y-4'>
            <h1 className='text-xl'>Follow Us On Social Media</h1>
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-2xl" />
              <SiInstagram className='text-2xl' />
              <FaLinkedinIn className="text-2xl" />
            </div>
          </div>
        </aside>
        <div className="border-r border-white/30 h-full"></div>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Refund Policy</a>
          <a className="link link-hover">Disclaimer Policy</a>
        </nav>
        <div className="border-r border-white/30 h-full"></div>
        <div>
          <h1 className="footer-title">Our Services</h1>
          <h3>Graphics-design</h3>
          <h3>Photo Editing</h3>
          <h3>Web Design & Development</h3>
          <h3>Virtual Assistant</h3>
        </div>
        <div className="border-r border-white/30 h-full"></div>
        <div className="w-80">
          <h1 className="footer-title">Contact Us</h1>
          <h3>Email: info@webbriks.com</h3>
          <h3>Phone: +1 718 577 1232</h3>
          <h3>
            Address: Web briks, LLC. 1209, Mountain Road PL NE, STE R,
            ALBUQUERQUE, NM, 87110
          </h3>
        </div>
      </footer>
    </div>
  );
}

export default Footer