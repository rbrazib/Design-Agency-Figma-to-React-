import React from "react";
import Container from "./Container";
import FeaturedProjectItem from "./FeaturedProjectItem";

const FeaturedProject = () => {
  return (
    <div className="bg-[#D7F5DC] pt-8 md:pt-14 pb-10 md:pb-20">
      <Container>
        <div>
          <h3 className="text-[#20B15A] text-center md:text-start font-Pop font-medium text-[28px] md:text-xl uppercase">
            Featured Project
          </h3>
          <p className=" pb-5 md:pb-10 md:pt-4 pt-2 text-3xl font-semibold w-[300px] text-center md:text-start m-auto md:m-0 md:w-[450px]">
            We provide the Perfect Solution to your business growth
          </p>
          <FeaturedProjectItem />
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProject;
