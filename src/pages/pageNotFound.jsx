import React from "react";
import PageNotFoundImg from "@/assets/error-404.png";
import { useNavigate } from "react-router";

const PageNotFound = () => {
    const navigate=useNavigate();
  return (
    <div className="p-10 text-center">
      <div className="m-auto w-80 h-full">
        <img src={PageNotFoundImg} style={{height:"100%",width:"100%"}} />
      </div>
      <h1 className="capitalize	 font-bold text-center text-white my-16">
        the page you were looking for doesn't exist.
      </h1>
      <button onClick={()=>navigate('/')} className="cursor-pointer  px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        GO BACK
      </button>
    </div>
  );
};

export default PageNotFound;
