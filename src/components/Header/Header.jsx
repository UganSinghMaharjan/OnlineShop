import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaHome, FaCartArrowDown, FaInfo } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Header = () => {
  const menuItems = [
    {
      key: '1',
      label: 'Profile',
    },
    {
      key: '2',
      label: 'Settings',
    },
    {
      key: '3',
      label: 'Logout',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#816F68] to-[#C9C9EE] shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative">
        
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <NavLink to="/home">
            <img
              src={logo}
              alt="onlineshop Logo"
              className="h-12 rounded-full"
            />
          </NavLink>
        </div>

        {/* Navigation - centered */}
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
                to="/shop"
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
                to="/contact"
                className="flex items-center space-x-2 hover:text-red-200 transition-colors duration-300"
              >
                <IoMdContacts className="text-xl" />
                <span className="text-base">Contact Us</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Mabout"
                className="flex items-center space-x-2 hover:text-red-200 transition-colors duration-300"
              >
                <FaInfo className="text-xl" />
                <span className="text-base">About Us</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Dropdown Menu on the right */}
        <div className="flex-shrink-">
          <Dropdown
            menu={{ items: menuItems }}
            trigger={['click']}
            placement="bottomRight"
          >
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              <Space>
                <FiMenu className="text-xl" />
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
