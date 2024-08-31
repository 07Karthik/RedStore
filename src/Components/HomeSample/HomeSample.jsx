import React from 'react'
import "./HomeSample.css"
import category_1 from "../../assets/category-1.jpg"
import category_2 from "../../assets/category-2.jpg"
import category_3 from "../../assets/category-3.jpg"

const HomeSample = () => {
  return (
    <div className='homesample'>
      <img src={category_1} height={"300px"} alt="c1" />
      <img src={category_2} height={"300px"} alt="c2" />
      <img src={category_3} height={"300px"} alt="c3" />
    </div>
  )
}

export default HomeSample
