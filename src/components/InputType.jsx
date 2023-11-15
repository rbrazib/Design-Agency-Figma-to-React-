import React from "react";
import Button from "./Button";

const InputType = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter Your Email Adress"
        className="py-4 pl-4 w-[595px] rounded-md placeholder:text-base font-Pop font-light border-2 mt-10 "
      />
      <button className="bg-[#F55F1D] py-4 font-Pop font-medium text-base rounded-md text-white px-3 absolute  top-[41%]  right-[29.5%]">
        Subscribe
      </button>
    </div>
  );
};

export default InputType;
