import React, { createContext, useState } from 'react';
import all_pro from "../assets/total_pro"

// Create a context with a default value (optional)
export const MyContext = createContext(null);

const getDefaultCart = () => {
    let cartItem = {}
    for (let index = 1; index <= all_pro.length; index++) {
        cartItem[index] = 0;
    }
    return cartItem

}



const MyProvider = ({ children }) => {
    const [cart, setCart] = useState(getDefaultCart())

    const addToCart = (id) => {

        setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    }
 
    const removeFromCart = (id) => {
        setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    }
    const total_price = ()=>{
        let total = 0
        for (let index = 0; index < all_pro.length; index++) {
            if(cart[index+1] > 0){
               total+=all_pro[index].new_price * cart[index +1]
            }

        }
        return total
    }

    const contextValue = { all_pro, addToCart, removeFromCart,total_price, cart }

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;