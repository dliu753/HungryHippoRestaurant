import { useState, useEffect } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import CartItems from './CartItems'
import CartItem from './CartItem'
import './Cart.css'

const Cart = (MenuData) => {
    if(MenuData.MenuData.length === 0 ) {
        console.log("Im from Cart.js, MenuData === 0")
    }
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("im from Cart.js")
        console.log(MenuData)
    })

    return (
        <div className='cart-wrapper'>
            <div className='icon-container'>
                <FiShoppingCart/>
                <div className='counter'>
                    {counter}
                </div>
            </div>
            <div className='expand-cart'>
                <h1>Your Cart</h1>
                <CartItems items={MenuData}/>
            </div>
        </div>
    );
};

export default Cart;