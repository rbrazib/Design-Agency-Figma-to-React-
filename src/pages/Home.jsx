import React from "react";
import Banner from "../components/Banner";
import Company from "../components/Company";
import WorkList from "../components/WorkList";
import Activity from "../components/Activity";
import FeaturedProject from "../components/FeaturedProject";
const Home = () => {
  return (
    <>
      <Banner />
      <Company />
      <WorkList />
      <Activity />
      <FeaturedProject />
    </>
  );
};

export default Home;
