import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaHome, FaCartArrowDown, FaInfo } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../redux/features/authSlice/authSlice.js";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const userName = user ? `${user.firstName} ${user.lastName}` : "Profile";

  const handleLogout = () => {
    dispatch(setLogout());
    localStorage.removeItem("user");
    localStorage.removeItem("AccessToken");
    window.location.href = "/";
  };

  const menuItems = [
    { key: "1", label: "Profile" },
    {
      key: "2",
      label: user?.role === "admin" ? <Link to="/admin-layout">Dashboard</Link> : null,
    },
    { key: "3", label: "Settings" },
    {
      key: "4",
      label: (
        <span onClick={handleLogout} style={{ cursor: "pointer" }}>
          Logout
        </span>
      ),
    },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-[#816F68] to-[#C9C9EE] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img
              src={logo}
              alt="onlineshop Logo"
              className="h-12 w-12 object-cover rounded-full"
            />
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8 text-white text-base font-medium">
            <li>
              <NavLink to="/" className="flex items-center gap-1 hover:text-red-200 transition-colors duration-300">
                <FaHome className="text-lg" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="flex items-center gap-1 hover:text-red-200 transition-colors duration-300">
                <FaBasketShopping className="text-lg" />
                <span>Shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="flex items-center gap-1 hover:text-red-200 transition-colors duration-300">
                <FaCartArrowDown className="text-lg" />
                <span>Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="flex items-center gap-1 hover:text-red-200 transition-colors duration-300">
                <IoMdContacts className="text-lg" />
                <span>Contact Us</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Mabout" className="flex items-center gap-1 hover:text-red-200 transition-colors duration-300">
                <FaInfo className="text-lg" />
                <span>About Us</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* User Dropdown or Login */}
        <div className="flex-shrink-0">
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold max-w-[120px] truncate">
                {userName}
              </span>
              <Dropdown menu={{ items: menuItems }} trigger={["click"]} placement="bottomRight">
                <Button className="bg-[#fffc4a] text-white hover:bg-[#3a48c6] border-none px-4 py-2 rounded-md">
                  <Space>
                    <FiMenu className="text-black text-lg" />
                    <DownOutlined className="text-black" />
                  </Space>
                </Button>
              </Dropdown>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-[#816F68] text-white px-4 py-2 rounded-md hover:bg-[#9f9fc9] transition duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
