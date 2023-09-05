import React from 'react'
import NavbarThebox from '../../components/thebox/navbarThebox'
import BuildingThings from '../../components/thebox/buildingThings'
import OurReputation from '../../components/thebox/ourReputation'
import AboutUs from '../../components/thebox/aboutUs'
import Service from '../../components/thebox/service'
import ContactUs from '../../components/thebox/contactUs'
import Projects from '../../components/thebox/projects'
import Submit from '../../components/thebox/submit'
import Footer from '../../components/thebox/footerThebox'
const TheBox = () => {
  return (
    <div>
        <NavbarThebox/>
        <BuildingThings/>
        <OurReputation/>
        <AboutUs/>
        <Service/>
        <ContactUs/>
        <Projects/>
           <Submit/>
        <Footer/>
    </div>
  )
}

export default TheBox