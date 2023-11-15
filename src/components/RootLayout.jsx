import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Subcribe from './Subcribe'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Subcribe/>
        <Footer/>
    </div>
  )
}

export default RootLayout