import React from 'react'
import "./css/Product.css"
import total_products from '../assets/total_pro'
import Item from '../Components/Item/Item'

const Product = () => {
    return (
        <div className='product'>
            <div className="heading">
                <h2>All Products</h2>
                <select>
                    <option value="Short by price">Short by price</option>
                    <option value="short by popularity">short by popularity</option>
                    <option value="Short by rating">Short by rating</option>
                    <option value="Short by sale">Short by sale</option>
                </select>
            </div>
            <div className="items">
                {total_products.map((item) => {
                    return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                })}
            </div>
            <div className="boxes">
                <div className="box">1</div>
                <div className="box">2</div>
                <div className="box">3</div>
                <div className="box">4</div>
                <div className="box">...</div>
            </div>
        </div>
    )
}

export default Product
