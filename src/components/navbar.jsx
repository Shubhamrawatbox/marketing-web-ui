import React, { useState } from "react";
import { NavbarMenu } from "./navbar-menu";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-solid  border-t-0 border-l-0 border-r-0 border-b-2	 border-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-extrabold tracking-wide bg-white rounded-lg">
            <img src={logo} width={80} height={100} className="rounded-full" />
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <NavbarMenu />
            <button className="p-[3px] relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-4 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Contact Us
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <a
              href="#home"
              className="hover:text-indigo-400 transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-indigo-400 transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-indigo-400 transition duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition duration-300 ease-in-out"
            >
              Contact
            </a>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full pl-4 pr-10 py-2 w-full"
              />
              <svg
                className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.53 20.47l-4.807-4.807A7.97 7.97 0 0018 10a8 8 0 10-8 8 7.97 7.97 0 005.663-2.277l4.807 4.807a.75.75 0 001.06-1.06zM10 17.5a7.5 7.5 0 117.5-7.5 7.509 7.509 0 01-7.5 7.5z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
