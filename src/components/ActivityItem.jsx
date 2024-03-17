import React from "react";
import { RiUserFollowLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { GrProjects } from "react-icons/gr";
import Slider from "react-slick";
const ActivityItem = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autopaly: "true",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="hidden md:block  py-16">
        <div className="md:flex md:justify-between">
          <div className="w-[288px] text-center m-auto md:m-0 shadow-2xl py-12">
            <RiUserFollowLine className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto" />
            <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
              240452
            </h4>
            <p className="font-Pop font-medium text-base ">Followers</p>
          </div>
          <div className="w-[288px] text-center m-auto md:m-0 shadow-2xl py-12">
            <BiLike className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto " />
            <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
              240452
            </h4>
            <p className="font-Pop font-medium text-base ">Solved Problems</p>
          </div>
          <div className="w-[288px] text-center m-auto md:m-0 shadow-2xl py-12">
            <HiOutlineEmojiHappy className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto " />
            <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
              25000
            </h4>
            <p className="font-Pop font-medium text-base ">Happy Customers</p>
          </div>
          <div className="w-[288px] text-center m-auto md:m-0 shadow-2xl py-12">
            <GrProjects className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto " />
            <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
              360452
            </h4>
            <p className="font-Pop font-medium text-base ">Project</p>
          </div>
        </div>
      </div>
      <div className="block md:hidden mb-10">
        <Slider {...settings}>
          <div className=" bg-red-300 text-center m-auto md:m-0  shadow-lg py-12 mr-20">
            <RiUserFollowLine className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto" />
            <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
              240452
            </h4>
            <p className="font-Pop font-medium text-base ">Followers</p>
          </div>
          <div className="bg-red-300 text-center m-auto md:m-0 shadow-lg py-12">
            <BiLike className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto " />
            <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
              240452
            </h4>
            <p className="font-Pop font-medium text-base ">Solved Problems</p>
          </div>
          <div className=" bg-red-300 text-center m-auto md:m-0 shadow-lg py-12">
            <HiOutlineEmojiHappy className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto " />
            <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
              25000
            </h4>
            <p className="font-Pop font-medium text-base ">Happy Customers</p>
          </div>
          <div className=" bg-red-300 text-center m-auto md:m-0 shadow-2xl py-12">
            <GrProjects className="bg-[#D7F5DC] h-24 w-24 p-3 rounded text-[#130F26] m-auto " />
            <h4 className="font-Pop font-semibold text-3xl text-[#000000] py-5">
              360452
            </h4>
            <p className="font-Pop font-medium text-base ">Project</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ActivityItem;
