import React from "react";
import { BiMessageAltDots } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { PiShoppingBagOpenBold } from "react-icons/pi";
const BusinessItem = ({ title }) => {
  return (
    <div className="md:flex">
      <div className="md:w-2/6 md:mr-11">
        <BiMessageAltDots className="bg-[#D7F5DC] h-24 w-24 m-auto md:m-0 p-3 rounded text-[#130F26] " />
        <h4 className="font-Pop font-semibold text-xl md:text-2xl text-center md:text-left text-[#000000] py-2 md:py-4">
          Grow Your Business
        </h4>
        <p className="font-Pop font-medium text-center md:text-left text-xs md:text-lg w-[190px] md:w-[299px] m-auto md:m-0 pb-2 md:pb-4">
          We help identify the best ways to improve your business
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <span className="font-Pop font-medium text-xs md:text-lg">
            Learn More
          </span>
          <AiOutlineArrowRight className=" ml-1 text-xs md:text-lg" />
        </div>
      </div>
      <div className="md:w-2/6 md:mr-11 md:my-0 my-8">
        <BiMessageAltDots className="bg-[#D7F5DC] h-24 w-24 m-auto md:m-0 p-3 rounded text-[#130F26] " />
        <h4 className="font-Pop font-semibold text-xl md:text-2xl text-center md:text-left text-[#000000] py-2 md:py-4">
          Grow Your Business
        </h4>
        <p className="font-Pop font-medium text-center md:text-left text-xs md:text-lg w-[190px] md:w-[299px] m-auto md:m-0 pb-2 md:pb-4">
          We help identify the best ways to improve your business
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <span className="font-Pop font-medium text-xs md:text-lg">
            Learn More
          </span>
          <AiOutlineArrowRight className=" ml-1 text-xs md:text-lg" />
        </div>
      </div>
      <div className="md:w-2/6 ">
        <PiShoppingBagOpenBold className="bg-[#D7F5DC] h-24 w-24 m-auto md:m-0 p-3 rounded text-[#130F26] " />
        <h4 className="font-Pop font-semibold text-xl md:text-2xl text-center md:text-left text-[#000000] py-2 md:py-4">
          Grow Your Business
        </h4>
        <p className="font-Pop font-medium text-center md:text-left text-xs md:text-lg w-[190px] md:w-[299px] m-auto md:m-0 pb-2 md:pb-4">
          We help identify the best ways to improve your business
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <span className="font-Pop font-medium text-xs md:text-lg">
            Learn More
          </span>
          <AiOutlineArrowRight className=" ml-1 text-xs md:text-lg" />
        </div>
      </div>
    </div>
  );
};

export default BusinessItem;
