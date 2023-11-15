import React from "react";
import { BiMessageAltDots } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { PiShoppingBagOpenBold } from "react-icons/pi";
const BusinessItem = ({ title }) => {
  return (
    <div className="flex">
      <div className="w-2/6 mr-11">
        <BiMessageAltDots className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] " />
        <h4 className="font-Pop font-semibold text-2xl text-[#000000] py-4">
          Grow Your Business
        </h4>
        <p className="font-Pop font-medium text-lg w-[299px] pb-4">
          We help identify the best ways to improve your business
        </p>
        <div className="flex items-center">
          <span className="font-Pop font-medium text-lg">Learn More</span>
          <AiOutlineArrowRight className=" ml-1 text-lg" />
        </div>
      </div>
      <div className="w-2/6 mr-11">
        <GiSelfLove className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] " />
        <h4 className="font-Pop font-semibold text-2xl text-[#000000] py-4">
          Grow Your Business
        </h4>
        <p className="font-Pop font-medium text-lg w-[299px] pb-4">
          We help identify the best ways to improve your business
        </p>
        <div className="flex items-center">
          <span className="font-Pop font-medium text-lg">Learn More</span>
          <AiOutlineArrowRight className=" ml-1 text-lg" />
        </div>
      </div>
      <div className="w-2/6">
        <PiShoppingBagOpenBold className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26]" />
        <h4 className="font-Pop font-semibold text-2xl text-[#000000] py-4">
          Grow Your Business
        </h4>
        <p className="font-Pop font-medium text-lg w-[299px] pb-4">
          We help identify the best ways to improve your business
        </p>
        <div className="flex items-center">
          <span className="font-Pop font-medium text-lg">Learn More</span>
          <AiOutlineArrowRight className=" ml-1 text-lg" />
        </div>
      </div>
    </div>
  );
};

export default BusinessItem;
