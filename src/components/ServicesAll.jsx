import React from 'react'
import ServicesItem from './ServicesItem'
import Container from './Container'

const ServicesAll = () => {
  return (
    <div className=''>
        <Container>
            <div className=''>
                <h3 className='text-[#20B15A] font-Pop font-semibold uppercase pb-4'>Our All Service</h3>
                <p className='font-semibold font-Pop text-3xl w-[495px] pb-12'>We Provide BestWeb design services</p>
            </div>
            <ServicesItem/>
        </Container>
    </div>
  )
}

export default ServicesAll