import React from "react";
import Container from "../components/Container";
import Breadcrumb from '../components/Breadcrumb'
import ServicesAll from "../components/ServicesAll";
const Services = () => {
  return (
    <Container>
     <Breadcrumb title="Services"/>
     <ServicesAll/>
    </Container>
  );
};

export default Services;
