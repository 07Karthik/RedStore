import React from 'react'
import "./Display.css"
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import { useParams } from 'react-router-dom'
import all_pro from "../../assets/total_pro"
import RelatedProducts from '../RelatedProducts/RelatedProducts'

const Display = () => {
    const {id} = useParams()
    const product = all_pro.find((pro)=>pro.id === Number(id))
  return (
    <div className='display'>
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Display
