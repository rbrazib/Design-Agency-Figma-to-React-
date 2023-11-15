import React from "react";
import Container from "./Container";
import SocileIcon from "./SocialIcon";
import FooterList from "./FooterList";
import FooterListItem from "./FooterListItem";

const Footer = () => {
  return (
    <div className="bg-[#000000] pt-14">
      <Container>
        <div className="flex justify-between">
          <div>
            <h2 className="text-red-400 font-Pop font-semibold uppercase text-2xl">
              <span className="text-white">Design</span> AGENCY
            </h2>
            <p className="font-Pop font-normal text-xl text-white w-[350px] pt-5 pb-5">
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <SocileIcon />
          </div>
          <div className="text-white">
            <h4 className="font-Pop font-semibold text-xl pb-6">Quick Links</h4>
            <FooterList>
              <FooterListItem
                className="font-Pop font-medium text-base inline-block pb-3 "
                listName="Services"
                href="/services"
              />
              <FooterListItem
                className="font-Pop font-medium text-base inline-block pb-3"
                listName="Protfolio"
                href="/protfolio"
              />
              <FooterListItem
                className="font-Pop font-medium text-base inline-block pb-3"
                listName="About Us"
                href="/about"
              />
              <FooterListItem
                className="font-Pop font-medium text-base inline-block pb-3"
                listName="Contact Us"
                href="/contact"
              />
            </FooterList>
          </div>
          <div className="text-white">
            <h4 className="font-Pop font-semibold text-xl pb-6">Address</h4>
            <h5 className="font-Pop font-normal text-sm pb-3">
              Design Agency Head Office.
            </h5>
            <h5 className="font-Pop font-normal text-sm pb-3">Airport Road</h5>
            <h5 className="font-Pop font-normal text-sm pb-3">
              United Arab Emirate
            </h5>
          </div>
        </div>
        <div className="pt-20 pb-7 font-Pop text-xl text-white font-medium">
          <p>Copyright Design Agency 2022</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
