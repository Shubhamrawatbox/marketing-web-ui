import React from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
