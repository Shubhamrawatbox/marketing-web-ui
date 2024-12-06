import React from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
