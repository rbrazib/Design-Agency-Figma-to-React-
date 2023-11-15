import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="bg-[#D7F5DC] py-3 ">
      <Container>
        <div className="flex  align-middle ">
          <div className="w-1/4  ">
            <NavLink to="/">
              <Image image="assets/DesignAGENCY.png" />
            </NavLink>
          </div>
          <div className="w-3/4 flex justify-end">
            <List className="flex gap-x-10 py-3">
              <ListItem
                className="font-Pop font-medium text-base text-[#000000]"
                listName="Home"
                href="/"
              />
              <ListItem
                className="font-Pop font-medium text-base text-[#000000]"
                listName="Team"
                href="/team"
              />
              <ListItem
                className="font-Pop font-medium text-base text-[#000000]"
                listName="Services"
                href="/services"
              />
              <ListItem
                className="font-Pop font-medium text-base text-[#000000]"
                listName="Project"
                href="/project"
              />
              <ListItem
                className="font-Pop font-medium text-base text-[#000000]"
                listName="Testimonial"
                href="/Testimonial"
              />
            </List>
            <Button
              className=" font-Pop font-medium text-base mr-2.5 ml-10 py-2.5 px-6 rounded border-2 hover:bg-[#20B15A] transition hover:text-white  hover:duration-75	 border-[#20B15A]"
              btnName="Login"
              href="/login"
            />
            <Button
              className=" font-Pop font-medium text-base ml-8 py-2.5 px-6 rounded border-2 border-[#20B15A] transition hover:bg-[#20B15A] hover:text-white  hover:duration-75"
              btnName="Register"
              href="/registration"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
