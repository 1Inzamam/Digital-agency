
import { useState } from "react";
import { NavLink } from "react-router";
import navLogo from "../../assets/image/Webbriks logo-ai 1.png";
import { GoArrowRight } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About us" },
    { to: "/service", label: "Service" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contacts", label: "Contact" },
  ];

  return (
    <div className="bg-[#FEF9EF] navbar shadow-[0_1px_20px_rgba(0,0,0,0.15)] relative z-50">
      <div className="w-11/12 md:w-9/12 mx-auto py-5 md:py-9">
        <div className="flex justify-between items-center">
          <img src={navLogo} alt="NavBar Logo" className="h-10 md:h-auto" />

          <div className="hidden lg:flex items-center gap-10">
            <nav className="text-[#2B2121] lg:text-xs xl:text-lg flex gap-8">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-secondary"
                      : "hover:text-secondary transition-colors"
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <button className="btn btn-primary py-3 px-6 text-white flex items-center gap-2">
              Get Started <GoArrowRight className="rotate-[-30deg]" />
            </button>
          </div>

          <button
            className="lg:hidden text-[#2B2121] text-3xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="text-[#2B2121] flex flex-col gap-3">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-base py-1 ${isActive ? "font-semibold text-secondary" : "hover:text-secondary transition-colors"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <button className="btn btn-primary py-3 px-6 text-white flex items-center gap-2 w-fit">
              Get Started <GoArrowRight className="rotate-[-30deg]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
