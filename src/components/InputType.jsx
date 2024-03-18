import React from "react";
import Button from "./Button";

const InputType = () => {
  return (
    <div className="relative px-0 md:px-3">
      <input
        type="text"
        placeholder="Enter Your Email Adress"
        className="py-4 pl-4 w-[325px] md:w-[595px] outline-none rounded-md placeholder:text-base font-Pop font-light border-2 mt-5 md:mt-10 "
      />
      <button className="bg-[#F55F1D] py-4 font-Pop  font-medium text-base rounded-md text-white px-3 absolute top-[27%]  md:top-[41%] right-[5.5%]  md:right-[29.5%]">
        Subscribe
      </button>
    </div>
  );
};

export default InputType;
