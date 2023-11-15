import React from "react";
import Image from "./Image";
const ServicesItem = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <div className="w-[700px] shadow-2xl py-11 px-8 mb-8  ">
        <div className="">
          <h5 className="font-Pop  font-semibold text-2xl pb-5 uppercase">
          Build & Launch without problems
          </h5>
          <p className="pb-14 font-Pop font-normal text-base">
            Increase your team’s productivity and save time with a bot that
            answers and fields customer inquiries
          </p>
          <div className="m-auto">
            <Image image="assets/services01.png" />
          </div>
        </div>
      </div>
      <div className="w-[700px] shadow-2xl py-11 px-8 mb-8  ">
        <div className="">
          <h5 className="font-Pop  font-semibold text-2xl pb-5 uppercase">
          Build & Launch without problems
          </h5>
          <p className="pb-14 font-Pop font-normal text-base">
            Increase your team’s productivity and save time with a bot that
            answers and fields customer inquiries
          </p>
          <div className="m-auto">
            <Image image="assets/services02.png" />
          </div>
        </div>
      </div>
      <div className="w-[700px] shadow-2xl py-11 px-8 mb-8  ">
        <div className="">
          <h5 className="font-Pop  font-semibold text-2xl pb-5 uppercase">
            Lorem ipsum dolor sit consectutar
          </h5>
          <p className="pb-14 font-Pop font-normal text-base">
            Increase your team’s productivity and save time with a bot that
            answers and fields customer inquiries
          </p>
          <div className="m-auto">
            <Image image="assets/services03.png" />
          </div>
        </div>
      </div>
      <div className="w-[700px] shadow-2xl py-11 px-8 mb-8  ">
        <div className="">
          <h5 className="font-Pop  font-semibold text-2xl pb-5 uppercase">
            Lorem ipsum dolor sit consectutar
          </h5>
          <p className="pb-14 font-Pop font-normal text-base">
            Increase your team’s productivity and save time with a bot that
            answers and fields customer inquiries
          </p>
          <div className="m-auto">
            <Image image="assets/services04.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
