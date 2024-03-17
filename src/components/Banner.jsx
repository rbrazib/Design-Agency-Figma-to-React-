import React from "react";
import Container from "./Container";
import Image from "./Image";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="bg-[#D7F5DC] py-5 md:py-20 lg:py-10 xl:py-10 2xl:py-10">
      <Container>
        <div className="md:flex justify-between">
          <div className="block md:hidden">
            <picture>
              <Image image="assets/banner.png" />
            </picture>
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-Pop w-[350px] m-auto text-center md:text-left  font-bold text-2xl md:text-5xl pt-5 md:pt-10  md:leading-[70px] md:w-[500px]">
              Increase Your Customers Loyalty and Satisfaction
            </h1>
            <p className="font-Pop font-medium w-[300px] m-auto md:m-0 text-center md:text-left text-sm md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl:w-[400px] pb-5 md:pb-12 pt-2.5">
              We help businesses like yours earn more customers, standout from
              competitors, make more money
            </p>
            <Button
              className="font-Pop  font-medium text-base py-2.5 px-6 rounded border-2 hover:bg-[#20B15A] transition hover:text-white  hover:duration-75	 border-[#20B15A]"
              btnName="Get Started"
              href="/"
            />
          </div>
          <div className="hidden md:block">
            <picture>
              <Image image="assets/banner.png" />
            </picture>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
