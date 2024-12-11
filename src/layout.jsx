import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router";
import Footer from "./components/footer";

const Layout = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
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
