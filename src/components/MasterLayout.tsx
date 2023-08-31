import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Contributions from './Contributions'
import Footer from './Footer'

function MasterLayout() {
  return (
    <>
     {/* <Navbar/> */}
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects />
        <Contributions />
        {/* <Contact/> */}
        <Footer/>
    </>
  )
}

export default MasterLayout