import React from "react";
import Container from "./Container";
import Image from "./Image";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Slider from "react-slick";
const TeamItem = () => {
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
    <div>
      <Container>
        <div className="hidden md:block ">
        <div className="flex flex-wrap gap-x-7">
          <div className="w-[460px]  shadow-lg">
            <div className="relative">
              <Image image="assets/team01.png" />
              <div className="bg-[#E3E3E3] py-17 w-36 rounded-3xl m-auto absolute bottom-[130px] left-[50%] translate-x-[-50%] flex justify-between">
                <FaFacebookF className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                <AiOutlineTwitter className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                <AiOutlineInstagram className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
              </div>
              <h1 className="text-center font-Pop text-3xl font-semibold pt-7 pb-12">
                Devon Lane
              </h1>
            </div>
          </div>
          <div className="w-[460px]  shadow-lg">
            <div className="relative">
              <Image image="assets/team02.png" />
              <div className="bg-[#E3E3E3] py-17 w-36 rounded-3xl m-auto absolute bottom-[130px] left-[50%] translate-x-[-50%] flex justify-between">
                <FaFacebookF className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                <AiOutlineTwitter className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                <AiOutlineInstagram className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
              </div>
              <h1 className="text-center font-Pop text-3xl font-semibold pt-7 pb-12">
                Danny Bailey
              </h1>
            </div>
          </div>
          <div className="w-[460px]  shadow-lg">
            <div className="relative">
              <Image image="assets/team03.png" />
              <div className="bg-[#E3E3E3] py-17 w-36 rounded-3xl m-auto absolute bottom-[130px] left-[50%] translate-x-[-50%] flex justify-between">
                <FaFacebookF className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                <AiOutlineTwitter className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                <AiOutlineInstagram className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
              </div>
              <h1 className="text-center font-Pop text-3xl font-semibold pt-7 pb-12">
                Alex Lov
              </h1>
            </div>
          </div>
        </div>
        </div>
        <div className="block md:hidden">
          <Slider {...settings}>
            <div className="w-[460px] shadow-lg pl-5 pr-5">
              <div className="relative">
                <Image image="assets/team01.png" />
                <div className="bg-[#E3E3E3] py-17 w-36 rounded-3xl m-auto absolute bottom-[130px] left-[50%] translate-x-[-50%] flex justify-between">
                  <FaFacebookF className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                  <AiOutlineTwitter className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                  <AiOutlineInstagram className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                </div>
                <h1 className="text-center font-Pop text-3xl font-semibold pt-7 pb-12">
                  Devon Lane
                </h1>
              </div>
            </div>
            <div className="w-[460px]  shadow-lg pl-5 pr-5">
              <div className="relative">
                <Image image="assets/team02.png" />
                <div className="bg-[#E3E3E3] py-17 w-36 rounded-3xl m-auto absolute bottom-[130px] left-[50%] translate-x-[-50%] flex justify-between">
                  <FaFacebookF className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                  <AiOutlineTwitter className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                  <AiOutlineInstagram className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                </div>
                <h1 className="text-center font-Pop text-3xl font-semibold pt-7 pb-12">
                  Danny Bailey
                </h1>
              </div>
            </div>
            <div className="w-[460px]  shadow-lg pl-5 pr-5">
              <div className="relative">
                <Image image="assets/team03.png" />
                <div className="bg-[#E3E3E3] py-17 w-36 rounded-3xl m-auto absolute bottom-[130px] left-[50%] translate-x-[-50%] flex justify-between">
                  <FaFacebookF className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                  <AiOutlineTwitter className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                  <AiOutlineInstagram className="w-10 h-10 rounded-full bg-[#20B15A] text-[10px]  text-white leading-3 text-center p-3" />
                </div>
                <h1 className="text-center font-Pop text-3xl font-semibold pt-7 pb-12">
                  Alex Lov
                </h1>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default TeamItem;
