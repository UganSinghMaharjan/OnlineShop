import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#816F68] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Branding div */}
        <div className="text-center md:text-left col-span-1">
          <h2 className="text-3xl font-bold text-[#C9C9EE] mb-3">
            PandaWagon{" "}
          </h2>
          <p className="text-lg text-white/80">
            Your trusted online marketplace for all things you love. Making
            shopping easy, joyful, and uniquely you.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-[#C9C9EE] mb-4">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3">
            <NavLink
              to="/home"
              className="hover:text-[#9AD1D4] transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-[#9AD1D4] transition-colors"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-[#9AD1D4] transition-colors"
            >
              Contact
            </NavLink>
            <NavLink
              to="/shop"
              className="hover:text-[#9AD1D4] transition-colors"
            >
              Shop
            </NavLink>
          </div>
        </div>

        {/* Social Media div */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-[#C9C9EE] mb-4">
            Follow Us
          </h3>
          <div className="flex flex-col items-center md:items-start gap-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#9AD1D4] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" /> <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#9AD1D4] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" /> <span>Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#9AD1D4] transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" /> <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Contact Info div */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-[#C9C9EE] mb-4">
            Contact Us
          </h3>
          <div className="flex flex-col gap-2 text-white/80">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#9AD1D4]" /> +977-9803389703
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#9AD1D4]" /> +977-9818284446
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#9AD1D4]" /> +977-9851026442
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-12 text-center text-sm text-white/60">
        <p>
          Designed and built by the PandaWagon s team. Thank you for shopping
          with us!
        </p>
        <p className="mt-4 text-sm text-white/60">
          &copy; {new Date().getFullYear()} PandaWagon s. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
