import { useEffect } from 'react'
import Hero from '@components/Hero/Hero'
import About from '@components/About/About'
import Products from '@components/Products/Products'
import Kitchens from '@components/Kitchens/Kitchens'
import Wardrobes from '@components/Wardrobes/Wardrobes'
import Doors from '@components/Doors/Doors'
import Furniture from '@components/Furniture/Furniture'
import Gallery from '@components/Gallery/Gallery'
import WhyChooseUs from '@components/WhyChooseUs/WhyChooseUs'
import Process from '@components/Process/Process'
import Testimonials from '@components/Testimonials/Testimonials'
import Consultation from '@components/Consultation/Consultation'
import Map from '@components/Map/Map'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Kitchens />
      <Wardrobes />
      <Doors />
      <Furniture />
      <Gallery />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Consultation />
      <Map />
    </main>
  )
}

export default Home
