import { useState, useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import CartItems from './CartItems'
import './Cart.css'

const Cart = ({MenuData, RemoveItem, addOrder}) => {
    const hideStyle = {
        display: "none"
    }
    const unhideStyle = {
         // TODO: add some styling
    }
    
    const [counter, setCounter] = useState(0)
    const [total, setTotal] = useState(0)
    const [showCart, setShowCart] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)
    const [toggleExpandCart, setToggleExpandCart] = useState(hideStyle)
    const [toggleCheckout, setToggleCheckout] = useState(hideStyle)
    const [toggleCart, setToggleCart] = useState(unhideStyle)
    const [cartTitle, setCartTitle] = useState('Your Cart')
    const [orderName, setOrderName] = useState('')
    const [orderTel, setOrderTel] = useState('')
    const [orderEmail, setOrderEmail] = useState('')
    const [toggleCheckoutBtn, setToggleCheckoutBtn] = useState({})

    useEffect(() => {
        let count = 0
        let bill = 0
        MenuData.forEach( (key, value)=> {
            count = count + key.value
            bill = bill + (key.key.price * key.value)
        })
        setCounter(count)
        setTotal(bill)
        if(count >= 1) {
            setToggleCheckoutBtn({})
        } else {
            setToggleCheckoutBtn({pointerEvents: "none", backgroundColor: "grey"})
        }
    }, [MenuData])

    const handleCartClick = () => {
        if(showCart) {
            setToggleExpandCart(hideStyle)
            setShowCart(!showCart)
        } else {
            setToggleExpandCart(unhideStyle)
            setShowCart(!showCart)
        }
    }

    const handleCheckoutClick = () => {
        if(!showCheckout) {
            setShowCheckout(!showCheckout)
            setToggleCheckout(unhideStyle)
            setToggleCart(hideStyle)
            setCartTitle('Checkout')
        } else {
            setShowCheckout(!showCheckout)
            setToggleCheckout(hideStyle)
            setToggleCart(unhideStyle)
            setCartTitle('Your Cart')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let order = { name: orderName, telephone: orderTel, email: orderEmail, order: MenuData}
        addOrder(order)
    }

    return (
        <div className='cart-wrapper'>
            <button onClick={handleCartClick} className='icon-container'>
                <AiOutlineShoppingCart/>
                <div className='counter'>
                    {counter}
                </div>
            </button>
            <header className='cart-header-wrapper' style={toggleExpandCart}>
                    <div className='cart-header'>{cartTitle}</div>
                    <button onClick={handleCartClick} className='close-cart'><GrClose /></button>
            </header>
            <div className='expand-cart' style={toggleExpandCart}>
                {/* <header className='cart-header-wrapper'>
                    <div className='cart-header'>{cartTitle}</div>
                    <button onClick={handleCartClick} className='close-cart'><GrClose /></button>
                </header> */}

                <div className='outer-cart-wrapper'>
                    <div className='cart-wrapper' style={toggleCart}>
                        <CartItems items={MenuData} remove={RemoveItem}/>
                        <hr />
                    </div>
                    <div className='cart-footer'>
                        <div className='cart-total'>Your order total is: <span className='right-side'>${total.toFixed(2)}</span></div>
                        <div className='cart-counter'>Number of Items: <span className='right-side'>{counter}</span></div>
                    </div>
                    <div className='cart-wrapper' style={toggleCart}>
                        <hr />
                        <button onClick={handleCheckoutClick} style={toggleCheckoutBtn} className='checkout-btn'>checkout</button>   
                    </div>
                </div>

                {/* hidden checkout form */}
                <div className='checkout-wrapper' style={toggleCheckout}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input
                            type="text"
                            placeholder="Name"
                            value={orderName}
                            onChange={ (e) => setOrderName(e.target.value)}
                            />                            
                        </label>
                        <label>
                            <input
                            placeholder="Telephone"
                            type="text" value={orderTel}
                            onChange={ (e) => setOrderTel(e.target.value)}
                            />                            
                        </label>
                        <label>
                            <input
                            placeholder="email"
                            type="text"
                            value={orderEmail}
                            onChange={ (e) => setOrderEmail(e.target.value)}
                            />                            
                        </label>
                        <input type="submit" />
                    </form>
                    <button onClick={handleCheckoutClick} className='back-btn'>back</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;