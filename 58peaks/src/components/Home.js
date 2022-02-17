import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";



function Home({ randomPeaks }) {


  return (
    <section className='mountain-container'>
        <div id='main-image-container'>
          <img src='https://www.mountainphotography.com/images/xl/20100921-Capitol-Peak-Alpenglow.jpg' alt='jack' id='main-image'/>
          <div id='hover-text-container'>
            <Link to="/peaklist" style={{ textDecoration: 'none' }}><p id='hover-text'>Click Here To Get Started</p></Link>
          </div>
        </div>
    </section>
  )
}

export default Home