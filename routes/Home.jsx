import React from 'react'
import Destination from '../Component/Destination'
import Footer from '../Component/Footer'
import Hero from '../Component/Hero'
import Navbar from '../Component/Navbar'
import Trip from '../Component/Trip'

function Home(){
return(
    <>
    <Navbar/>
  <Hero 
  cName="hero"
  heroImg="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  title="Your Journey your Story"
  text="Choose Your Favourite Destination."
  buttonText="Travel Plan"
  url="/"
  btnClass="show"
  />
  <Destination/>
  <Trip/>
  <Footer/>
    </>
)
}
export default Home