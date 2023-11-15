import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import TestimonialList from '../components/TestimonialList'


const Testimonial = () => {
  return (
   <>
   <Container>
    <Breadcrumb title="Testimonial List"/>
    <TestimonialList/>
   </Container>
   </>
  )
}

export default Testimonial