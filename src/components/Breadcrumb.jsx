import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Breadcrumb = ({ title }) => {
  return (
    <div className=" py-5 md:py-20 px-3 md:px-">
      <h2 className="font-Pop font-semibold pb-3 md:pb-5 ">{title}</h2>
      <p className="flex items-center font-Pop font-semibold gap-x-3">
        Home
        <FaAngleRight />
        <span className="text-[#20B15A] capitalize">
          {window.location.pathname.split("/")[1]}
        </span>
      </p>
    </div>
  );
};

export default Breadcrumb;
