import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import medplusLogo from "../../assets/medplus.svg"; // Import the SVG logo

// import nav.css


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 shadow-lg font-mono sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white text-lg font-bold flex items-center outline rounded outline-orange-500 bg-orange-500">
            {/* Provided SVG Logo */}
            <img
              src={medplusLogo}
              alt="MedPlus Logo"
              className="h-10 mr-2 inline object-contain cursor-pointer text-white"
            />
            <span className="bg-blue-500 text-white px-2 py-1 rounded">Medplus<sup>+</sup></span>
          </Link> 

          {/* Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-grow justify-center gap-4">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/services" label="Services" hasDropdown />
            <NavLink to="/diseases" label="Diseases" hasDropdown />
            <NavLink to="/resources" label="Resources" hasDropdown />
            <NavLink to="/socials" label="Socials" />
            <NavLink to="/blogs" label="Blogs" />
          </div>

          {/* Apply Now Button */}
          <div>
            <Link
              to="/register"
              className="text-slate-950 hover:text-gray-600 hover:underline px-4 py-2 rounded-md"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
      <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
        <div className="flex flex-col gap-4">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/services" label="Services" hasDropdown />
          <NavLink to="/courses" label="Courses" hasDropdown />
          <NavLink to="/resources" label="Resources" hasDropdown />
          <NavLink to="/socials" label="Socials" />
          <NavLink to="/login" label="Login" />
        </div>
      </Modal>
    </nav>
  );
};

const NavLink = ({ to, label, hasDropdown }) => {
  return (
    <Link
      to={to}
      className="relative text-slate-950 hover:text-gray-300 px-4 py-2 rounded-md"
    >
      {label}
      {hasDropdown && (
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </span>
      )}
    </Link>
  );
};

export default Navbar;
