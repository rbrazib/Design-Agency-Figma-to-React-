import React from "react";
import Container from "./Container";
import BusinessItem from "./BusinessItem";

const WorkList = () => {
  return (
    <div className="py-16">
      <Container>
        <div>
          <h3 className="text-[#20B15A] font-Pop font-medium text-xl">
            Work List
          </h3>
          <p className="pb-20 pt-4 text-3xl font-semibold w-[450px]">
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
