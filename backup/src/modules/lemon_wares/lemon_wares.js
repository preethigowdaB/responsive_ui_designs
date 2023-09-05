import React from 'react'
import NavbarLemonwares from '../../components/lemonWares/navbarLemonwares'
import HeroSection from '../../components/lemonWares/herosection'
import Hosting from '../../components/lemonWares/hosting'
import Pricing from '../../components/lemonWares/pricing'
import Testimonial from '../../components/lemonWares/testimonial'
import CtaSection from '../../components/lemonWares/cta_section'
import Footer_lemonwares from '../../components/lemonWares/footer_lemonwares'

const LemonWares = () => {
  return (
    <div>
       
        <NavbarLemonwares/>
        <HeroSection/>
        <Hosting/>
        <Pricing/>
        <Testimonial/>
        <CtaSection/>
        <Footer_lemonwares/>

    </div>
  )
}

export default LemonWares