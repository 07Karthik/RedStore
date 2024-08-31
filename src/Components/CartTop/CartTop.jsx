import React, { useContext } from 'react'
import "./CartTop.css"
import { MyContext } from '../../Context/CartContext'
import Item from '../Item/Item'
import { useState } from 'react'

const CartTop = () => {
  const { all_pro,total_price, addToCart, removeFromCart, cart, updateCart } = useContext(MyContext)


  
  return (
    <div className='carttop'>
      <div className="carttop-heading">
        <p>Product</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <div className="carttop-adding-item">

        {all_pro.map((cartitem) => {
          if (cart[cartitem.id] > 0) {
            return <div className="carttop-item" >
              <div className="first">
                <img src={cartitem.image} width={"50px"} alt="" />
                <div className="carttop-item-details">
                  <h4>{cartitem.name}</h4>
                  <p>Price: ${cartitem.new_price}</p>
                  <p className='red' onClick={() => { removeFromCart(cartitem.id) }}>Remove</p>
                </div>
              </div>
              <div className="second">
              <input 
                    type="number" 
                    value={cart[cartitem.id]} 
                  />
              </div>
                <h4>${cart[cartitem.id] * cartitem.new_price}</h4>
            </div>
          }

        })}

      </div>
      <div className="carttop-bottom">
        <div className='carttop-side-bottom'>
        <hr />
             <div className="subtotal">
              <h3>Subtotal</h3>
              <h3>${total_price()}</h3>
             </div>
             <div className="Tax">
             <h3>Tax</h3>
             <h3>$35</h3>
             </div>
             <div className="Total">
             <h3>Total</h3>
             <h3>${total_price() + 35}</h3>
             </div>
             <button>Proceed to checkout</button>
        </div>
      </div>
    
      
    </div >
  )
}

export default CartTop
