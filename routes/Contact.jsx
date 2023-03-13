import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import AboutImg from "../assets/2.jpg"
import ContactForm from '../Component/ContactForm'
const Contact = () => {
  return (
    <div>
    <Navbar/>

  <Hero 
  cName="hero-mid"
  heroImg={AboutImg}
  title="Contact"
 
  btnClass="hide"
  />
     <ContactForm/>
    </div>
  )
}

export default Contact