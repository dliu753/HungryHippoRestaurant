import { useState, useEffect } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import CartItems from './CartItems'
import CartItem from './CartItem'
import './Cart.css'

const Cart = ({MenuData, RemoveItem}) => {
    if(MenuData.length === 0 ) {
        // console.log("Im from Cart.js, MenuData === 0")
    }
    const [counter, setCounter] = useState(0)
    const [total, setTotal] = useState(0)
    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        // console.log(MenuData)
        let count = 0
        let bill = 0
        MenuData.forEach( (key, value)=> {
            // console.log('key.key.price: ' + key.key.price + ' value: ' + key.value)
            count = count + key.value
            bill = bill + (key.key.price * key.value)
        })
        // console.log('bill: ' + bill + ' count: ' + count)
        setCounter(count)
        setTotal(bill)
        // console.log(RemoveItem)
    })

    const handleClick = () => {
        // console.log('click')
        if(showCart) {
            setSwitchStyle(hideStyle)
            setShowCart(!showCart)
        } else {
            setSwitchStyle(unhideStyle)
            setShowCart(!showCart)
        }
    }

    const hideStyle = {
       display: "none"
    }
    const unhideStyle = {
        
    }
    const [switchStyle, setSwitchStyle] = useState(hideStyle)

    return (
        <div className='cart-wrapper'>
            <button onClick={handleClick} className='icon-container'>
                <FiShoppingCart/>
                <div className='counter'>
                    {counter}
                </div>
            </button>
            <div className='expand-cart' style={switchStyle}>
                <h1>Your Cart</h1>
                <CartItems items={MenuData} remove={RemoveItem}/>
                <h1>{counter}</h1>
                <h2>{total.toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default Cart;