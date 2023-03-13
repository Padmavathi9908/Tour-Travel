import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import AboutImg from "../assets/night.jpg"
import Footer from '../Component/Footer'
import AboutUs from '../Component/AboutUs'
const About = () => {
  return (
    <div>
       <Navbar/>
  <Hero 
  cName="hero-mid"
  heroImg={AboutImg}
  title="About"
 
  btnClass="hide"
  />
  <AboutUs/>
  <Footer/>
    </div>
  )
}

export default About