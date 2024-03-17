import React from "react";
import Container from "./Container";
import Image from "./Image";
import Slider from "react-slick";

const Company = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autopaly:'true',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="py-12 border-b-[20px] border-[#D7F5DC]">
      <Container>
        <div className="justify-between">
          <Slider {...settings}>
            <div className="w-1/5 px-5">
              <Image image="assets/google.png" />
            </div>
            <div className="w-1/5 px-5">
              <Image image="assets/monday.png" />
            </div>
            <div className="w-1/5 px-5">
              <Image image="assets/trello.png" />
            </div>
            <div className="w-1/5 px-5">
              <Image image="assets/notion.png" />
            </div>
            <div className="w-1/5 px-5">
              <Image image="assets/slack.png" />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Company;
