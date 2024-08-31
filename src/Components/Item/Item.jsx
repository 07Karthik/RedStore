import React from 'react'
import "./Item.css"
import star_dull_icon from "../../assets/star_dull_icon.png"
import star_icon from "../../assets/star_icon.png"
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="item">
                <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} height={"260px"} className='size' alt="" /></Link>
                <p>{props.name}</p>
                <div className="stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                </div>
                <p>${props.new_price}</p>
            </div>
  )
}

export default Item
