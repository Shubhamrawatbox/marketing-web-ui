import React from "react";
import { Tooltip } from "../components/toolTip";
import InputField from "../components/inputField";
import { Toaster, toast } from "sonner";

const ContactUs = () => {
  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="flex flex-wrap sm:flex-col md:flex-row bg-contact-background bg-cover bg-center">
        {/* Contact Form Section */}
        <div className="basis-full sm:basis-1/2 md:basis-1/2 p-4 sm:p-14 md:p-14">
          <div className="bg-custom-dark p-4">
            <h1 className="text-2xl text-white font-semibold">Contact Us</h1>
            <p className="text-white my-2">
              Please reach out to us and we will get back to you at the speed of
              light.
            </p>
            <InputField
              label="Name"
              placeHolder="Enter Your Name..."
              type="text"
            />
            <InputField
              label="Email"
              placeHolder="Enter Your Email..."
              type="email"
            />
            <InputField
              label="Number"
              placeHolder="Enter Your Number..."
              type="number"
            />
             <InputField
              label="Telegram ID"
              placeHolder="Enter Your ID..."
              type="text"
            />
            <button
              onClick={() => toast.error("Error Msg")}
              disabled
              className="cursor-not-allowed w-full px-8 py-2 bg-disabled text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Tooltip Section */}
        <div className="basis-full sm:basis-1/2 md:basis-1/2 my-auto">
          {/* <Tooltip /> */}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
