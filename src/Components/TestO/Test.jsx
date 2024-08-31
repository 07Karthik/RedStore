import React from 'react'
import "./Test.css"
import test_o from "../../assets/testomonils"
import star_dull_icon from "../../assets/star_dull_icon.png"
import star_icon from "../../assets/star_icon.png"

const Test = () => {
  return (
    <div className='test'>
      {test_o.map((item)=>{
        return <div className="item-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum rerum quo. At voluptatem quidem minus iste exercitationem deserunt id, velit doloremque.</p>
            <div className="stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
        </div>
        <img src={item.image} height={"60px"} alt="" />
        <p className='dark'>{item.name}</p>
        
    </div>
      })}
    </div>
  )
}

export default Test
