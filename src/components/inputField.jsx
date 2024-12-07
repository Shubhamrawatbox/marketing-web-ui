import React from "react";

const InputField = ({ label, placeHolder, type }) => {
  return (
    <div>
      <div class="w-full  min-w-[200px] my-6">
        <label class="block mb-2 text-sm text-white">{label}:</label>
        <input
          type={type}
          class="w-full bg-transparent placeholder:text-dark font-bold text-white text-sm border border-dark rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
};

export default InputField;
