import React, { useState } from "react";
import { NavbarMenu } from "./navbar-menu";
import logo from "@/assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-solid  border-t-0 border-l-0 border-r-0 border-b-2 	 border-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-extrabold tracking-wide bg-white rounded-lg">
              <Link to={"/"}>
                <img
                  src={logo}
                  width={80}
                  height={100}
                  className="rounded-full"
                />
              </Link>
            </div>
            <h1 className="text-lg font-extrabold ml-3">Web3Xpand</h1>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <NavbarMenu />
            <button className="p-[3px] relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-4 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                <Link className="text-white hover:text-white" to={"/contactUs"}>
                  Contact Us
                </Link>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none bg-transparent"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
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

        {/* Sliding Menu */}
        <div
          className={`fixed top-h-24 left-0 h-full w-full bg-black text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="hover:text-indigo-400 transition duration-300 ease-in-out text-center text-5xl text-white mt-2	"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/service"
              className="hover:text-indigo-400 transition duration-300 ease-in-out text-center text-5xl text-white mb-9		"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contactUs"
              className="hover:text-indigo-400 transition duration-300 ease-in-out text-center text-5xl text-white mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
