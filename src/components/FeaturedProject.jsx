import React from "react";
import Container from "./Container";
import FeaturedProjectItem from "./FeaturedProjectItem";

const FeaturedProject = () => {
  return (
    <div className="bg-[#D7F5DC] pt-14 pb-20">
      <Container>
        <div>
          <h3 className="text-[#20B15A] font-Pop font-medium text-xl uppercase">
            Featured Project
          </h3>
          <p className="pb-10 pt-4 text-3xl font-semibold w-[450px]">
            We provide the Perfect Solution to your business growth
          </p>
          <FeaturedProjectItem />
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProject;
