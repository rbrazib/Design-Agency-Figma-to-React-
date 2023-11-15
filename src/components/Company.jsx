import React from 'react'
import Container from './Container'
import Image from './Image'

const Company = () => {
  return (
    <div className='py-12 border-b-[20px] border-[#D7F5DC]'>
        <Container>
            <div className='flex justify-between'>
                <Image image="assets/google.png"/>
                <Image image="assets/monday.png"/>
                <Image image="assets/trello.png"/>
                <Image image="assets/notion.png"/>
                <Image image="assets/slack.png"/>
            </div>
        </Container>
    </div>
  )
}

export default Company