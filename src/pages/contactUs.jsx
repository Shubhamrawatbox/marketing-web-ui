import React from "react";
import { Tooltip } from "../components/toolTip";

const ContactUs = () => {
  return (
    <div className="h-screen flex">
      <div className="basis-1/2 p-14">
        <div className="bg-custom-dark p-4">
          <h1 className="text-2xl text-white text font-semibold">Contact Us</h1>
          <p className="text-white my-2">
            Please reach out to us and we will get back to you at the speed of
            light.
          </p>
          <div class="w-full  min-w-[200px] my-6">
            <label class="block mb-2 text-sm text-slate-600">Add Members</label>
            <input
              class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Type here..."
            />
          </div>
          <div class="w-full  min-w-[200px] my-6">
            <label class="block mb-2 text-sm text-slate-600">Add Members</label>
            <input
              class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Type here..."
            />
          </div>
          <div class="w-full  min-w-[200px] my-6">
            <label class="block mb-2 text-sm text-slate-600">Add Members</label>
            <input
              class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Type here..."
            />
          </div>
          <button className=" w-full px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
            Submit
          </button>
        </div>
      </div>
      <div className="basis-1/2 my-auto">
        <Tooltip />
      </div>
      {/* <GridBackground/> */}
    </div>
  );
};

export default ContactUs;
