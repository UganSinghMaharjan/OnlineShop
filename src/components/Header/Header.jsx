import React from "react";
import bc from "../../assets/images/bc.jpg"
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaInfo } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-[#181C14] shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <NavLink to="/home">
            <img
              src={bc}
              alt="onlineshop Logo"
              className="h-12 rounded-full"
            />
          </NavLink>
        </div>

        {/* Navigation - absolutely centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-10 text-lg font-medium text-white">
          <li>
              <NavLink
                to="/home"
                className="flex items-center space-x-2 hover:text-red-200 transition-colors duration-300"
              >
                <FaHome className="text-xl" />
                <span className="text-base">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/item"
                className="flex items-center space-x-2 hover:text-red-200 transition-colors duration-300"
              >
                <FaBasketShopping className="text-xl" />
                <span className="text-base">Shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className="flex items-center space-x-2 hover:text-red-200 transition-colors duration-300"
              >
                <FaCartArrowDown className="text-xl" />
                <span className="text-base">Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="flex items-center space-x-2 hover:text-red-200 transition-colors duration-300"
              >
                <IoMdContacts className="text-xl" />
                <span className="text-base">Contact Us</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="flex items-center space-x-2 hover:text-red-200 transition-colors duration-300"
              >
                <FaInfo className="text-xl" />
                <span className="text-base">About Us</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Hamburger on the right */}
        <div className="flex-shrink-0">
          <button className="text-3xl text-white hover:text-red-200">
            <FiMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
