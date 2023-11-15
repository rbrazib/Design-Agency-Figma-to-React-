import React from "react";
import { RiUserFollowLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { GrProjects } from "react-icons/gr";
const ActivityItem = () => {
  return (
    <div className="flex justify-between py-16">
      <div className="w-[288px] text-center shadow-2xl py-12">
        <RiUserFollowLine className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto" />
        <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
          240452
        </h4>
        <p className="font-Pop font-medium text-base ">Followers</p>
      </div>
      <div className="w-[288px] text-center shadow-2xl py-12">
        <BiLike className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto " />
        <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
          240452
        </h4>
        <p className="font-Pop font-medium text-base ">Solved Problems</p>
      </div>
      <div className="w-[288px] text-center shadow-2xl py-12">
        <HiOutlineEmojiHappy className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto " />
        <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
        25000
        </h4>
        <p className="font-Pop font-medium text-base ">Happy Customers</p>
      </div>
      <div className="w-[288px] text-center shadow-2xl py-12">
        <GrProjects className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto " />
        <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
        360452
        </h4>
        <p className="font-Pop font-medium text-base ">Project</p>
      </div>
    </div>
  );
};

export default ActivityItem;
