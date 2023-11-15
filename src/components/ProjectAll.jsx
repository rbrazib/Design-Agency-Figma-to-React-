import React from 'react'
import Container from './Container'
import ProjectItem from './ProjectItem'

const ProjectAll = () => {
  return (
    <div className=''>
        <Container>
            <div className=''>
                <h3 className='text-[#20B15A] font-Pop font-semibold uppercase pb-4'>All Project</h3>
                <p className='font-semibold font-Pop text-3xl w-[495px] pb-12'>Better Agency/SEO Solution At Your Fingertips</p>
            </div>
            <ProjectItem/>
        </Container>
    </div>
  )
}

export default ProjectAll