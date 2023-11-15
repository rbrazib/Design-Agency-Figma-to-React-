import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import TeamAll from '../components/TeamAll'

const Team = () => {
  return (
    <Container>
     <Breadcrumb title="Team"/>
     <TeamAll/>
    </Container>
  )
}

export default Team