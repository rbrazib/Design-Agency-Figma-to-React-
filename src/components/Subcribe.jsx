import React from "react";
import Container from "./Container";
import InputType from "./InputType";

const Subcribe = () => {
  return (
    <div className=" pt-10 md:pt-24 md:pb-48 pb-10">
      <Container>
        <div className="text-center">
          <h3 className="text-[#20B15A] font-Pop font-medium text-[28px] md:text-xl  uppercase">
            Subcribe
          </h3>
          <h4 className="w-[350px] md:w-[490px] m-auto text-3xl md:text-3xl font-Pop font-semibold pt-5 pb-1">
            Subscribe to Get the latest News About Us
          </h4>
          <p className=" text-[12px] w-[220px] md:w-[0px] m-auto md:m-0 md:text-base font-Pop font-normal">
            Please drop your email below to get daily update about what we do
          </p>
          <InputType />
        </div>
      </Container>
    </div>
  );
};

export default Subcribe;
