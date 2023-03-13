import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import AboutImg from "../assets/2.jpg"
const Service = () => {
  return (
    <div>
    <Navbar/>
  <Hero 
  cName="hero-mid"
  heroImg={AboutImg}
  title="Service"
 
  btnClass="hide"
  />
  
    </div>
  )
}

export default Service