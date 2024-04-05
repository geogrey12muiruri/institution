// ContactSection.js

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

const ContactSection = () => {
  return (
    <div className="bg-white text-slate-950 py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Social Media Links */}
      <div className="flex items-center mb-4 md:mb-0">
        <a href="#" className="mr-4 hover:text-blue-500 transition duration-300 transform hover:-translate-y-1">
          <FaFacebook className="text-slate-950 text-lg" />
        </a>
        <div className="border-r border-blue-600 h-6 mx-6"></div>
        <a href="#" className="mr-4 hover:text-blue-400 transition duration-300 transform hover:-translate-y-1">
          <FaTwitter className="text-slate-950 text-lg" />
        </a>
        <div className="border-r border-blue-600 h-6 mx-6"></div>
        <a href="#" className="mr-4 hover:text-pink-500 transition duration-300 transform hover:-translate-y-1">
          <FaInstagram className="text-slate-950 text-lg" />
        </a>
        <div className="border-r border-blue-600 h-6 mx-6"></div>
        <a href="#" className="hover:text-blue-400 transition duration-300 transform hover:-translate-y-1">
          <FaLinkedin className="text-slate-950 text-lg" />
        </a>
      </div>

      {/* Middle: Contact Information */}
      <div className="flex items-center mb-4 md:mb-0">
        <HiOutlinePhone className="text-blue-500 text-lg mr-2" />
        <span className="mr-4">0792755901</span>
      </div>

      {/* Right side: Email and Search Icon */}
      <div className="flex items-center">
        <HiOutlineMail className="text-blue-500 text-lg mr-2" />
        <span className="mr-4">medplus@gmail.com</span>
        <RiSearchLine className="text-blue-500 text-lg hover:text-gray-400 transition duration-300" />
      </div>
    </div>
  );
};

export default ContactSection;
