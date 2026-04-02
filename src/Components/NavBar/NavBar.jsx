import React from "react";
import navLogo from "../../assets/image/Webbriks logo-ai 1.png";
import { NavLink } from "react-router";
const NavBar = () => {
  return (
    <div className="bg-[#FEF9EF]">
      <div className="flex justify-between items-center w-10/12 mx-auto py-9 ">
        <img src={navLogo} alt="NavBar Logo" />
        <div className="flex items-center gap-24">
          <nav className="text-[#2B2121] flex gap-8" >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-us">About us</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contacts">Contact</NavLink>
                  </nav>
                  <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
