import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Breadcrumb = ({ title }) => {
  console.log(window.location.pathname.split("/")[1]);
  return (
    <div className="py-20">
      <h2 className="font-Pop font-semibold pb-5 ">{title}</h2>
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
