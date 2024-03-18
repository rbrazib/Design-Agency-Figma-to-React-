import React from "react";
import Image from "./Image";

const FeaturedProjectItem = () => {
  return (
    <div className="grid md:grid-cols-2 gap-x-4">
      <div>
        <Image image="/assets/fe1.png" />
        <h5 className="text-[#2E3E5C] font-Pop font-normal md:pb-2.5 pt-3 md:pt-4 text-sm pl-2 md:pl-0">
          App Design - June 20, 2022
        </h5>
        <h3 className="text-xl md:text-3xl font-Pop font-bold text-[#1E1F4B] pl-2 md:pl-0">
          App Redesign
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-x-4 pt-5 md:pt-0 px-2 md:px-0">
        <div>
          <Image image="/assets/fe2.png" />
          <h5 className="text-[#2E3E5C] font-Pop font-normal md:pb-2.5 pt-2 md:pt-4 text-xs md:text-sm">
            App Design - June 20, 2022
          </h5>
          <h3 className=" text-base md:text-lg font-Pop font-bold text-[#1E1F4B]">
            Redesign channel website landng page
          </h3>
        </div>
        <div>
          <Image image="/assets/fe3.png" />
          <h5 className="text-[#2E3E5C] font-Pop font-normal md:pb-2.5 pt-2 md:pt-4 text-xs md:text-sm">
            App Design - June 20, 2022
          </h5>
          <h3 className="text-base md:text-lg font-Pop font-bold text-[#1E1F4B]">
            Redesign channel website landng page
          </h3>
        </div>
        <div className="pt-3 md:pt-0">
          <Image image="/assets/fe4.png" />
          <h5 className="text-[#2E3E5C] font-Pop font-normal md:pb-2.5 pt-2 md:pt-4 text-xs md:text-sm">
            App Design - June 20, 2022
          </h5>
          <h3 className=" text-base md:text-lg font-Pop font-bold text-[#1E1F4B]">
            Redesign channel website landng page
          </h3>
        </div>
        <div className="pt-3 md:pt-0">
          <Image image="/assets/fe5.png" />
          <h5 className="text-[#2E3E5C] font-Pop font-normal md:pb-2.5 pt-2 md:pt-4 text-xs md:text-sm">
            App Design - June 20, 2022
          </h5>
          <h3 className=" text-base md:text-lg font-Pop font-bold text-[#1E1F4B]">
            Redesign channel website landng page
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectItem;
