import React from "react";
import Container from "./Container";
import BusinessItem from "./BusinessItem";

const WorkList = () => {
  return (
    <div className="py-8 md:py-16">
      <Container>
        <div>
          <h3 className="text-[#20B15A] text-center md:text-left  font-Pop font-medium text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
            Work List
          </h3>
          <p className="pb-10 md:pb-20 pt-4 text-lg md:text-3xl font-semibold w-[281px] md:m-0 m-auto text-center md:text-left md:w-[450px]">
            We provide the Perfect Solution to your business growth
          </p>
        </div>
        <div>
          <BusinessItem />
        </div>
      </Container>
    </div>
  );
};

export default WorkList;
