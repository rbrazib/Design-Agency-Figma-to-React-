import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import { FaBars } from "react-icons/fa";
import Button from "./Button";
const Navbar = () => {
  let [showBar, setShowBar] = useState(true);
  useEffect(() => {
    function scrollwidth() {
      if (window.innerWidth < 576) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }
    }
    scrollwidth();

    window.addEventListener("resize", scrollwidth);
  }, []);
  return (
    <nav className="bg-[#D7F5DC] py-3">
      <Container>
        <div className=" md:flex lg:flex xl:flex 2xl:flex align-middle">
          <div className="w-1/2 lg:w-1/4 md:w-1/4 xl:w-1/4 2xl:w-1/4">
            <NavLink to="#">
              <Image image="assets/DesignAGENCY.png" />
            </NavLink>
          </div>
          <FaBars
            onClick={() => setShowBar(!showBar)}
            className="block sm:hidden lg:hidden text-2xl ml-auto -mt-7"
          />
          {showBar && (
            <div className="phonemenuitem w-3/4 md:flex lg:flex 2xl:flex xl:md:flex justify-end absolute top-8 left-[50%] translate-x-[-50%]">
              <List className="md:flex lg:flex xl:flex 2xl:flex gap-x-10 py-3 items-center">
                <ListItem
                  className="font-Pop font-medium text-base text-white md:text-[#000000] "
                  listName="Home"
                  href="/"
                />
                <ListItem
                  className="font-Pop font-medium text-base text-white md:text-[#000000]"
                  listName="Team"
                  href="/team"
                />
                <ListItem
                  className="font-Pop font-medium text-base text-white md:text-[#000000]"
                  listName="Services"
                  href="/services"
                />
                <ListItem
                  className="font-Pop font-medium text-base text-white md:text-[#000000]"
                  listName="Project"
                  href="/project"
                />
                <ListItem
                  className="font-Pop font-medium text-base text-[#000000]"
                  listName="Testimonial"
                  href="/Testimonial"
                />
                <div className="flex">
                  <Button
                    className="font-Pop font-medium text-base md:mr-2.5  py-2 md:py-2.5 px-6 rounded border-2 hover:bg-[#20B15A] transition hover:text-white  hover:duration-75	 border-[#20B15A]"
                    btnName="Login"
                    href="/login"
                  />
                  <Button
                    className=" font-Pop font-medium text-base ml-3 md:ml-5 py-2 md:py-2.5 px-6 rounded border-2 border-[#20B15A] transition hover:bg-[#20B15A] hover:text-white  hover:duration-75"
                    btnName="Register"
                    href="/registration"
                  />
                </div>
              </List>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
