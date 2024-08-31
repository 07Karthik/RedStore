import React, { useContext, useRef } from 'react'
import "./ProductDisplay.css"
import { MyContext } from '../../Context/CartContext'

const ProductDisplay = (props) => {
  const product = props.product
  const imgRef = useRef(null)
  const changeImg = (e) => {
    imgRef.current.src = e.target.src
  }
const {addToCart,cart} = useContext(MyContext)

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <img className='img-11' ref={imgRef} src={product.image} alt="" />

        <div className="productdisplay-images">

          <img src={product.image} onClick={changeImg}  alt="" />
          {product.id === 1 ? <>
            <img src={product.side} onClick={changeImg} alt="" />
            <img src={product.back} onClick={changeImg} alt="" />
            <img src={product.full} onClick={changeImg} alt="" /></> :
            <>
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" /></>}

        </div>

      </div>
      <div className="productdisplay-right">
        <p>Home / T-Shirt</p>
        <h1>{product.name}</h1>
        <h3>${product.new_price}</h3>
        <select>
        <option value="" disabled selected>Select Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        <div className='productdisplay-cart'>
          <input type="number" value={cart[product.id]} />
          <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        </div>
        <h2>PRODUCT DETAILS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo repudiandae inventore laudantium non dolorum enim culpa id repellendus accusamus?</p>
      </div>
    </div>
  )
}

export default ProductDisplay
