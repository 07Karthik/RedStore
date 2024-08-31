import React from 'react'
import "./LatestProduct.css"
import latest_pro from "../../assets/latest_pro"

import Item from '../Item/Item'

const LatestProduct = () => {
  return (
    <div className='latestproduct'>
      <div className="heading-2">
        <h2>Latest Products</h2>
        <hr />
      </div>
      <div className="items">
        {latest_pro.map((item)=>{
            return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
        })}
      </div>
    </div>
  )
}

export default LatestProduct
