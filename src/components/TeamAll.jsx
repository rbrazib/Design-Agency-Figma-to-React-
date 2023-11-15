import React from 'react'
import Container from './Container'
import TeamItem from './TeamItem'
const TeamAll = () => {
  return (
    <div className=''>
        <Container>
            <div className=''>
                <h3 className='text-[#20B15A] font-Pop font-semibold uppercase pb-4'>Our Team Member</h3>
                <p className='font-semibold font-Pop text-3xl w-[495px] pb-12'>Check our awesome team members</p>
            </div>
           <TeamItem/>
        </Container>
    </div>
  )
}

export default TeamAll