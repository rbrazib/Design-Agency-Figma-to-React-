import React from "react";
import Container from "./Container";
import InputType from "./InputType";

const Subcribe = () => {
  return (
    <div className="pt-24 pb-48">
      <Container>
        <div className="text-center">
          <h3 className="text-[#20B15A] font-Pop font-medium text-xl  uppercase">
            Subcribe
          </h3>
          <h4 className="w-[490px] m-auto text-3xl font-Pop font-semibold pt-5 pb-1">
            Subscribe to Get the latest News About Us
          </h4>
          <p className="text-base font-Pop font-normal">
            Please drop your email below to get daily update about what we do
          </p>
          <InputType/>
        </div>
      </Container>
    </div>
  );
};

export default Subcribe;
