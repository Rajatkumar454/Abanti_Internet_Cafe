import React from 'react'
import Hero_section from '../Components/Hero_section'
import About from './About'
import { Link } from 'react-router-dom'
import Contactus from './Contactus'

const Home = () => {
  return (
    <div>
      <Hero_section />

      <div>
        <About />
        {/*  
        <div className="text-center">
            <Link to='/about'><button type="button" class="btn btn-primary">Primary</button></Link>
        </div> */}
      </div>
      <Contactus/>
      
    </div>
  )
}

export default Home
