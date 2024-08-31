import React from 'react'
import "./RelatedProducts.css"
import rel_pro from "../../assets/related_pro"
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <div className="heading">
        <h2>Related Products</h2>
        <p>View More</p>
      </div>
       <div className="items">
       {rel_pro.map((item)=>{
            return <Item id={item.id}  name={item.name} image={item.image} new_price={item.new_price}/>
        })}
       </div>
    </div>
  )
}

export default RelatedProducts
