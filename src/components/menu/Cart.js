import { useState, useEffect } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import CartItems from './CartItems'
import CartItem from './CartItem'
import './Cart.css'

const Cart = (MenuData) => {
    if(MenuData.MenuData.length === 0 ) {
        // console.log("Im from Cart.js, MenuData === 0")
    }
    const [counter, setCounter] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.log(MenuData)
        let count = 0
        let bill = 0
        MenuData.MenuData.forEach( (key, value)=> {
            console.log('key.key.price: ' + key.key.price + ' value: ' + key.value)
            count = count + key.value
            bill = bill + (key.key.price * key.value)
        })
        console.log('bill: ' + bill + ' count: ' + count)
        setCounter(count)
        setTotal(bill)
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
                <h1>{counter}</h1>
                <h2>{total}</h2>
            </div>
        </div>
    );
};

export default Cart;