import React from "react";
import Container from "./Container";
import SocileIcon from "./SocialIcon";
import FooterList from "./FooterList";
import FooterListItem from "./FooterListItem";

const Footer = () => {
  return (
    <div className="bg-[#000000] pt-8 md:pt-14">
      <Container>
        <div className="md:flex justify-between px-3 md:px-0">
          <div>
            <h2 className="text-red-400 font-Pop font-semibold uppercase text-xl md:text-2xl">
              <span className="text-white">Design</span> AGENCY
            </h2>
            <p className="font-Pop font-normal text-sm md:text-xl text-white w-[320px] md:w-[350px] pt-2 pb-3 md:pt-5 md:pb-5">
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <div className="hidden md:block">
              <SocileIcon />
            </div>
          </div>
          <div className="text-white">
            <h4 className="font-Pop font-semibold text-xl md:pb-6 border-b-2  pb-1 md:border-none inline-block">
              Quick Links
            </h4>
            <FooterList>
              <FooterListItem
                className="font-Pop font-medium text-sm md:text-base inline-block md:pt-0 pt-2 pb-2 md:pb-3"
                listName="Services"
                href="/services"
              />
              <FooterListItem
                className="font-Pop font-medium text-sm md:text-base inline-block pb-2 md:pb-3"
                listName="Protfolio"
                href="/protfolio"
              />
              <FooterListItem
                className="font-Pop font-medium text-sm md:text-base inline-block pb-2 md:pb-3"
                listName="About Us"
                href="/about"
              />
              <FooterListItem
                className="font-Pop font-medium text-sm md:text-base inline-block pb-4 md:pb-3"
                listName="Contact Us"
                href="/contact"
              />
            </FooterList>
          </div>
          <div className="text-white">
            <h4 className="font-Pop font-semibold text-xl md:pb-6 border-b-2 pb-1 md:border-none inline-block">
              Address
            </h4>
            <h5 className="font-Pop font-normal text-sm pb-3 md:pt-0 pt-2">
              Design Agency Head Office.
            </h5>
            <h5 className="font-Pop font-normal text-sm pb-2  md:pb-3">Airport Road</h5>
            <h5 className="font-Pop font-normal text-sm pb-2 md:pb-3">
              United Arab Emirate
            </h5>
          </div>
        </div>
        <div className="block md:hidden mt-4 pl-3">
          <SocileIcon />
        </div>
        <div className=" pt-5 md:pt-20 pb-7 font-Pop text-lg md:text-xl text-white font-medium px-3 md:px-0">
          <p>Copyright Design Agency 2022</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
