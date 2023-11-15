import React from "react";
import Container from "./Container";
import Image from "./Image";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="bg-[#D7F5DC] py-20">
      <Container>
        <div className="flex justify-between">
          <div>
            <h1 className="font-Pop font-bold text-5xl pt-10 leading-[70px] w-[500px]">
              Increase Your Customers Loyalty and Satisfaction
            </h1>
            <p className="font-Pop font-medium text-sm w-[400px] pb-12 pt-2.5">
              We help businesses like yours earn more customers, standout from
              competitors, make more money
            </p>
            <Button
              className=" font-Pop font-medium text-base py-2.5 px-6 rounded border-2 hover:bg-[#20B15A] transition hover:text-white  hover:duration-75	 border-[#20B15A]"
              btnName="Get Started"
              href="/"
            />
          </div>
          <div>
            <Image image="assets/banner.png" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
