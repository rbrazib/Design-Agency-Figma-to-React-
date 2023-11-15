import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
const SocialIcon = () => {
  return (
    <div className=" flex w-[209px] justify-between">
      <FaFacebookF className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
      <AiOutlineTwitter className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
      <GrLinkedinOption className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
      <AiOutlineInstagram className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
    </div>
  );
};

export default SocialIcon;
