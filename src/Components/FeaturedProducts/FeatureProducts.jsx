import React from 'react'
import "./FeatureProducts.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import feature_pro from "../../assets/feature_pro"
import Item from '../Item/Item'
const FeatureProducts = () => {
  return (
    <div className='featureproducts'>
      <div className="heading-1">
        <h2>Featured Products</h2>
        <hr /> 
      </div>
      <div className="items-5">
        {feature_pro.map((item)=>{
            return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
        })}
      </div>

    </div>
  )
}

export default FeatureProducts
