import React from "react";
import Container from "./Container";
import TeamItem from "./TeamItem";
const TeamAll = () => {
  return (
    <div className="">
      <Container>
        <div className="pl-3 md:pl-0">
          <h3 className="text-[#20B15A] font-Pop font-semibold uppercase md:pb-4 pb-2">
            Our Team Member
          </h3>
          <p className="font-semibold font-Pop text-xl md:text-3xl w-[355px] md:w-[495px] pb-6 md:pb-12">
            Check our awesome team members
          </p>
        </div>
        <TeamItem />
      </Container>
    </div>
  );
};

export default TeamAll;
