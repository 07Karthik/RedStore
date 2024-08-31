import React from 'react'
import "./Hero.css"
import image_1 from "../../assets/image1.png"

const Hero = () => {
  return (
    <div className='hereo'>
        <div className="hero-left">
            <div>
            <h1>Give Your Workout</h1>
            <h1>A New Style!</h1>
            </div>
            
            <p>Success isn't alway about greatness. It's about consistency. Consisten ahrd work gain success. Greatness will come.</p>
            <button>Explore Now {"->"}</button>
        </div>
        <div className="hero-right">
            <img src={image_1} alt="hero-img" height={"400px"} />
        </div>
      
    </div>
  )
}

export default Hero
