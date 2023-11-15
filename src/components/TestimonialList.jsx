import React from 'react'
import Container from './Container'
import TestimonialItem from './TestimonialItem'

const TestimonialList = () => {
  return (
    <div className=''>
        <Container>
            <div className=''>
                <h3 className='text-[#20B15A] font-Pop font-semibold uppercase pb-4'>Testimonial List</h3>
                <p className='font-semibold font-Pop text-3xl w-[495px] pb-12'>Better Agency/SEO Solution At Your Fingertips</p>
            </div>
            <TestimonialItem/>
        </Container>
    </div>
  )
}

export default TestimonialList