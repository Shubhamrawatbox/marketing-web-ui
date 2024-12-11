import React from "react";
import { Link } from "react-router";
import { LinkPreview } from "./ui/link-preview";
import { footerSocialIconsLink, links } from "../data/menuItems";
import { useIcon } from "../utils/useIcon";

const Footer = () => {
  return (
<footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12">
<div className="container mx-auto px-6 text-center">
        {/* Newsletter Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-lg mb-6">
            Subscribe to our newsletter for the latest updates and news.
          </p>
          <input
            type="email"
            placeholder="Enter your email..."
            className="px-4 py-2 rounded-lg w-1/2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mx-2 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Submit
          </button>
        </div>

        {/* Quick Links Section */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-4">
            {links?.map((item) => (
              <li>
                <Link
                  to={item?.href}
                  className="hover:text-blue-400 transition duration-300"
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="w-2 flex flex-col align-baseline">
          {footerSocialIconsLink?.map((itemLink) => (
            <div className="my-2">
              <LinkPreview url="https://tailwindcss.com" className="font-bold">
                <Link
                  to="#"
                  className="text-xl hover:text-blue-500 transition duration-300 my-2"
                >
                  {useIcon(itemLink?.icon)}
                </Link>
              </LinkPreview>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="text-center text-sm mt-8">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
