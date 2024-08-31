import React from 'react'
import "./Banner.css"
import exclusive from "../../assets/exclusive.png"

const Banner = () => {
  return (
    <div className='banner'>
      <div className="left">
        <img src={exclusive} height={"250px"} alt="watch" />
      </div>
      <div className="right">
        <p>
            Exclusively available on RedStore
        </p>
        <h1>Smart Band 4</h1>
        <p>
            The Mi Smart Band 4 features are 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness. so everything is clear as can be.
        </p>
        <button>Explore Now {"->"}</button>
      </div>

    </div>
  )
}

export default Banner
