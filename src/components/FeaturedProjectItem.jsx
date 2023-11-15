import React from "react";
import Image from "./Image";

const FeaturedProjectItem = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <div>
        <Image image="/assets/fe1.png" />
        <h5 className="text-[#2E3E5C] font-Pop font-normal pb-2.5 pt-4 text-sm">
          App Design - June 20, 2022
        </h5>
        <h3 className=" text-3xl font-Pop font-bold text-[#1E1F4B]">
          App Redesign
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <Image image="/assets/fe2.png" />
          <h5 className="text-[#2E3E5C] font-Pop font-normal pb-2.5 pt-4 text-sm">
            App Design - June 20, 2022
          </h5>
          <h3 className=" text-lg font-Pop font-bold text-[#1E1F4B]">
            Redesign channel website landng page
          </h3>
        </div>
        <div>
          <Image image="/assets/fe3.png" />
          <h5 className="text-[#2E3E5C] font-Pop font-normal pb-2.5 pt-4 text-sm">
            App Design - June 20, 2022
          </h5>
          <h3 className=" text-lg font-Pop font-bold text-[#1E1F4B]">
            Redesign channel website landng page
          </h3>
        </div>
        <div>
          <Image image="/assets/fe4.png" />
          <h5 className="text-[#2E3E5C] font-Pop font-normal pb-2.5 pt-4 text-sm">
            App Design - June 20, 2022
          </h5>
          <h3 className=" text-lg font-Pop font-bold text-[#1E1F4B]">
            Redesign channel website landng page
          </h3>
        </div>
        <div>
          <Image image="/assets/fe5.png" />
          <h5 className="text-[#2E3E5C] font-Pop font-normal pb-2.5 pt-4 text-sm">
            App Design - June 20, 2022
          </h5>
          <h3 className=" text-lg font-Pop font-bold text-[#1E1F4B]">
            Redesign channel website landng page
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectItem;
